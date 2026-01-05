import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  FileText,
  Users,
  X,
  Check,
} from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { content } from "@/data/content";

export default function PublicationsPage() {
  const [_hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // Dynamically extract unique tags from content.publications
  const tags = Array.from(
    new Set(
      content.publications.flatMap(pub => 
        pub.tags ? pub.tags.map(tag => tag.name) : []
      )
    )
  ).map(tagName => {
    // Find the first tag with this name to get its color
    const tag = content.publications
      .flatMap(pub => pub.tags || [])
      .find(t => t.name === tagName);
    return {
      name: tagName,
      color: tag?.color || "rgba(224, 214, 255, 0.5)", // Default color
    };
  });

  interface PublicationItem {
    id?: string;
    venue: string;
    title?: string;
    authors?: string;
    link?: string;
    tags?: { name: string; color: string }[];
  }

  // Function to check if a publication belongs to the active tag
  const publicationMatchesActiveTag = (pub: PublicationItem) => {
    if (!activeTag) return true; // Show all if no tag selected

    // Check if this publication has tags that match the active tag
    if (pub.tags) {
      return pub.tags.some(tag => tag.name === activeTag);
    }
    return false;
  };

  // Handle tag click
  const handleTagClick = (tagName: string) => {
    if (activeTag === tagName) {
      setActiveTag(null); // Clicking active tag removes the filter
    } else {
      setActiveTag(tagName);
    }
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  type Publication = {
    year: string;
    categories: {
      title: string;
      items: {
        venue: string;
        title: string;
        authors: string;
        link?: string;
        year?: string;
        id?: string;
      }[];
    }[];
  };

  const groupedPublications = content.publications.reduce((acc, pub) => {
    const year = pub.year;
    if (!acc[year]) acc[year] = [];
    acc[year].push(pub);
    return acc;
  }, {} as Record<string, typeof content.publications>);

  const publications: Publication[] = Object.entries(groupedPublications).map(([year, items]) => ({
    year,
    categories: [{
      title: "",
      items: items.map(item => ({
        venue: item.venue,
        title: item.title,
        authors: item.authors,
        link: item.abstractLink || item.pdfLink ,
        year: item.year,
        id: item.title,
      }))
    }]
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 pt-32 pb-24 px-6 md:px-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="mb-12">
            <Link href="/">
              <motion.div
                className="inline-flex items-center text-sm font-medium cursor-pointer px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 mb-8"
                whileHover={{ x: -5 }}
                onClick={(_e) => {
                  // Allow default navigation to home page
                  // No need to preventDefault here
                }}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </motion.div>
            </Link>
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Publications
            </motion.h1>
            <motion.div
              className="h-1 w-24 bg-[#FFD6E0] mb-8"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            />
            <motion.p
              className="text-xl text-gray-700 max-w-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              My research explores the human-infrastructure-environment interactions within urban systems. Here are some of my publications.
            </motion.p>
          </div>

          {/* Topic Tags Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 pb-2">
            {tags.map((topic) => (
              <motion.button
                key={topic.name}
                onClick={() => handleTagClick(topic.name)}
                className={`px-4 py-2 rounded-full hover:shadow-md transition-colors whitespace-nowrap flex items-center ${activeTag === topic.name ? "ring-2 ring-offset-2 ring-gray-900" : ""}`}
                style={{ backgroundColor: topic.color }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {topic.name}
                {activeTag === topic.name && <Check className="ml-2 h-4 w-4" />}
              </motion.button>
            ))}
            {activeTag && (
              <motion.button
                onClick={() => setActiveTag(null)}
                className="px-4 py-2 rounded-full hover:shadow-md transition-colors whitespace-nowrap flex items-center bg-gray-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Clear Filter <X className="ml-2 h-4 w-4" />
              </motion.button>
            )}
          </div>

          {activeTag && (
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-lg">
                Showing publications tagged with{" "}
                <span className="font-semibold">{activeTag}</span>
              </p>
            </motion.div>
          )}

          <div className="space-y-20">
            {publications.map((publication, i) => {
              // Check if any items in this year match the active tag
              const hasMatchingItems =
                !activeTag ||
                publication.categories.some((category) =>
                  category.items.some((item) =>
                    publicationMatchesActiveTag(item),
                  ),
                );

              // Skip rendering this year if no matching items
              if (!hasMatchingItems) return null;

              return (
                <motion.div
                  key={publication.year}
                  id={`year-${publication.year}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="scroll-mt-32"
                >
                  <h2 className="text-3xl font-bold mb-8 relative inline-block">
                    {publication.year}
                    <motion.span
                      className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#FFD6E0] via-[#E0D6FF] to-[#C1F0DB]"
                      style={{ width: "100%" }}
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7 }}
                    />
                  </h2>
                  <div className="space-y-8">
                    {publication.categories.map((category, j) => {
                      // Filter items based on active tag
                      const filteredItems = category.items.filter((item) =>
                        publicationMatchesActiveTag(item),
                      );

                      // Skip rendering this category if no matching items
                      if (filteredItems.length === 0) return null;

                      return (
                        <div key={j}>
                          {category.title && (
                            <h3 className="text-xl font-semibold mb-4">
                              {category.title}
                            </h3>
                          )}
                          <div className="grid grid-cols-1 gap-8">
                            {filteredItems.map((item, k) => {
                              // Generate random pastel color for each publication
                              const colors = ["#FFD6E0", "#E0D6FF", "#C1F0DB"];
                              const color =
                                colors[Math.floor(k % colors.length)];

                              return (
                                <motion.div
                                  key={item.id || `${item.title}-${k}`}
                                  className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
                                  whileHover={{ y: -5 }}
                                  onHoverStart={() =>
                                    setHoveredItem(
                                      item.id || `${item.title}-${k}`,
                                    )
                                  }
                                  onHoverEnd={() => setHoveredItem(null)}
                                >
                                  <div
                                    className="border-l-8 pl-6 py-6 px-6 relative"
                                    style={{ borderColor: color }}
                                  >
                                    <div className="flex flex-col md:flex-row md:items-start">
                                      <div className="md:w-1/5 mb-4 md:mb-0">
                                        <span
                                          className="px-3 py-1 rounded-full text-sm font-medium inline-flex items-center"
                                          style={{
                                            backgroundColor: `${color}40`,
                                          }}
                                        >
                                          <FileText className="w-3 h-3 mr-1" />
                                          {item.venue}
                                        </span>
                                      </div>
                                      <div className="md:w-4/5">
                                        <h3 className="text-xl font-bold mb-3">
                                          {item.title}
                                        </h3>
                                        <p className="text-gray-700 mb-4 flex items-start">
                                          <Users className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                                          {item.authors}
                                        </p>
                                        {item.link && (
                                          <motion.a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                                            whileHover={{ x: 5 }}
                                          >
                                            Read Paper
                                            <ExternalLink className="ml-2 h-4 w-4" />
                                          </motion.a>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
