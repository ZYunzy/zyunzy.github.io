import { motion } from "framer-motion";
import { Calendar, ExternalLink, Filter, X } from "lucide-react";
import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

type BlogPost = {
  id: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  coverImage: string;
  tags: string[];
  slug: string;
  externalUrl?: string;
};

export default function BlogPage() {
  const [_hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // Define blog tags/categories
  const tags = [
    {
      name: "AI Education",
      color: "rgba(255, 214, 224, 0.5)",
    },
    {
      name: "AI Research",
      color: "rgba(224, 214, 255, 0.5)",
    },
    {
      name: "Multimodal AI",
      color: "rgba(193, 240, 219, 0.5)",
    },
    {
      name: "Creativity",
      color: "rgba(255, 224, 176, 0.5)",
    },
    {
      name: "Family Learning",
      color: "rgba(176, 224, 255, 0.5)",
    },
    {
      name: "Generative AI",
      color: "rgba(176, 255, 224, 0.5)",
    },
  ];

  // Map blog posts to tags
  const blogTags: Record<string, string[]> = {
    "post-1": ["AI Education", "Family Learning"],
    "post-2": ["AI Education", "Family Learning"],
    "post-3": ["Multimodal AI", "AI Research"],
    "post-4": ["AI Education", "Family Learning"],
    "post-5": ["Multimodal AI", "AI Research"],
    "post-6": ["Creativity", "Generative AI"],
    "post-7": ["Family Learning", "AI Education"],
    "post-8": ["AI Research", "Generative AI"],
    "post-9": ["AI Education", "Family Learning"],
  };

  // Function to check if a blog post belongs to the active tag
  const blogMatchesActiveTag = (post: BlogPost) => {
    if (!activeTag) return true; // Show all if no tag selected

    // Get blog identifier
    const postId = post.id;

    // Check if this blog has tags mapped
    if (blogTags[postId]) {
      return blogTags[postId].includes(activeTag);
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

  const blogPosts: BlogPost[] = [
    {
      id: "post-1",
      title: "My First Blog Post",
      date: "January 1, 2024",
      author: "Yun Zhuang",
      excerpt:
        "Welcome to my blog where I share insights about artificial intelligence and technology.",
      coverImage:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1864&auto=format&fit=crop",
      tags: ["AI Research"],
      slug: "my-first-blog-post",
      externalUrl: "#",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-white py-8 border-b border-gray-100 mt-20">
          <div className="container mx-auto px-6 md:px-16">
            <p className="text-xl text-gray-600 max-w-2xl">
              Thoughts, insights, and tutorials on AI education, research, and
              industry trends.
            </p>
          </div>
        </div>

        {/* Filter Tags */}
        <div className="bg-gray-50 py-6 border-b border-gray-100">
          <div className="container mx-auto px-6 md:px-16">
            <div className="flex items-center mb-2">
              <Filter className="w-4 h-4 mr-2 text-gray-600" />
              <span className="text-gray-600 font-medium">Filter by:</span>
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag) => (
                <button
                  key={tag.name}
                  onClick={() => handleTagClick(tag.name)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    activeTag === tag.name
                      ? "bg-gray-800 text-white"
                      : "text-gray-700"
                  }`}
                  style={{
                    backgroundColor:
                      activeTag === tag.name ? "#333" : tag.color,
                  }}
                >
                  <span className="flex items-center">
                    {tag.name}
                    {activeTag === tag.name && <X className="w-3 h-3 ml-1" />}
                  </span>
                </button>
              ))}

              {activeTag && (
                <button
                  onClick={() => setActiveTag(null)}
                  className="px-3 py-1 rounded-full text-sm bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
                >
                  <span className="flex items-center">
                    Clear Filter
                    <X className="w-3 h-3 ml-1" />
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="py-16 px-6 md:px-16">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(blogMatchesActiveTag).map((post) => (
                <motion.div
                  key={post.id}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                  onMouseEnter={() => setHoveredItem(post.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="block">
                    <div className="aspect-video bg-gray-100 relative overflow-hidden">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{post.date}</span>
                      </div>

                      <h3 className="text-xl font-bold mb-2 transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => {
                          const tagObject = tags.find((t) => t.name === tag);
                          return (
                            <span
                              key={tag}
                              className="px-2 py-1 text-xs rounded-full"
                              style={{
                                backgroundColor:
                                  tagObject?.color ||
                                  "rgba(224, 214, 255, 0.5)",
                              }}
                            >
                              {tag}
                            </span>
                          );
                        })}
                      </div>

                      <a
                        href={
                          post.externalUrl ||
                          `https://medium.com/@Stefania_druga`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 inline-flex items-center text-sm font-medium hover:text-blue-800"
                      >
                        Read on Medium
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {blogPosts.filter(blogMatchesActiveTag).length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-xl font-semibold mb-2">
                  No blog posts found
                </h3>
                <p className="text-gray-600">
                  No blog posts match the selected filter. Try a different
                  category.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
