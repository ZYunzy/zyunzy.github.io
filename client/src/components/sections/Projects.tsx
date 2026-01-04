import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { content } from "@/data/content";

export default function Projects() {
  const [location] = useLocation();
  const isHomePage = location === "/";
  const projects = isHomePage ? content.projects.slice(0, 2) : content.projects; // Show only first 2 on homepage
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // Collect all unique tags for the projects page
  const allTags = isHomePage ? [] : Array.from(
    new Set(projects.flatMap(project => project.tags.map(tag => tag.name)))
  ).map(tagName => {
    const tag = projects.flatMap(p => p.tags).find(t => t.name === tagName);
    return tag;
  }).filter(Boolean);

  return (
    <div className="py-20 px-6 md:px-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 relative">
          Projects
          <span className="absolute -bottom-2 left-0 w-24 h-1 bg-[#E0D6FF]"></span>
        </h2>

        {!isHomePage && (
          <div className="mb-12">
            <p className="text-xl text-gray-700 max-w-3xl mb-8">
              My projects explore artificial intelligence applications, sustainable urban systems, and innovative solutions across various domains.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-12 pb-2">
              {allTags.map((tag, index) => (
                <button
                  key={index}
                  className="px-4 py-2 rounded-full hover:shadow-md transition-colors whitespace-nowrap flex items-center"
                  style={{ backgroundColor: `${tag.color}80` }}
                >
                  {tag.name}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className={isHomePage ? "space-y-20" : "space-y-12"}>
          {projects.map((project, index) => {
            if (isHomePage) {
              // Original alternating layout for homepage
              return (
                <div
                  key={project.id}
                  className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                >
                  <div className={index % 2 === 0 ? "order-2 md:order-1" : ""}>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 rounded-full text-sm font-medium"
                          style={{ backgroundColor: tag.color }}
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="text-lg text-gray-800 mb-6">
                      {project.description}
                    </p>
                    {project.link && project.link !== "#" && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gray-300 text-gray-700 px-4 py-1.5 rounded-full transform transition text-sm"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Visit Project
                      </motion.a>
                    )}
                    {(!project.link || project.link === "#") && (
                      <Link
                        href={`/project/${project.id}`}
                        className="inline-block bg-gray-300 text-gray-700 px-4 py-1.5 rounded-full transform transition text-sm hover:bg-gray-400"
                      >
                        Read More
                      </Link>
                    )}
                  </div>

                  <motion.div
                    className={`group ${index % 2 === 0 ? "order-1 md:order-2" : ""}`}
                    onHoverStart={() => setHoveredProject(project.id)}
                    onHoverEnd={() => setHoveredProject(null)}
                  >
                    <div className="relative">
                      <motion.div
                        className="absolute -inset-1 rounded-lg blur-md opacity-50 transition duration-1000"
                        style={{
                          backgroundImage: `linear-gradient(to right, ${project.gradient
                            .split(" ")
                            .join(", ")
                            .replace(/from-\[|\]|via-\[|to-\[/g, "")})`,
                        }}
                        animate={{
                          opacity: hoveredProject === project.id ? 0.8 : 0.5,
                        }}
                      />
                      <div className="relative rounded-lg overflow-hidden h-[300px] flex items-center justify-center bg-white">
                        <img
                          src={project.image}
                          alt={project.title}
                          className={`max-w-full max-h-full object-contain ${index === 0 ? "w-[85%]" : ""}`}
                          style={{ maxHeight: "280px" }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            } else {
              // Card layout for projects page
              return (
                <motion.div
                  key={project.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/project/${project.id}`} className="block">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                      <div className="p-8 flex flex-col justify-center">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 rounded-full text-sm font-medium"
                              style={{ backgroundColor: tag.color }}
                            >
                              {tag.name}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                        <p className="text-lg text-gray-800 mb-6">
                          {project.description}
                        </p>
                        <div className="text-blue-600 hover:underline font-medium">
                          Read More →
                        </div>
                      </div>

                      <div className="relative">
                        <motion.div
                          className="absolute inset-0"
                          style={{
                            backgroundImage: `linear-gradient(to right, ${project.gradient
                              .split(" ")
                              .join(", ")
                              .replace(/from-\[|\]|via-\[|to-\[/g, "")})`,
                          }}
                          animate={{
                            opacity: hoveredProject === project.id ? 0.1 : 0.05,
                          }}
                        />
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 md:h-full object-cover"
                        />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            }
          })}
        </div>

        {isHomePage && (
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-block bg-[#E0D6FF] text-gray-800 px-6 py-3 rounded-full font-medium hover:bg-[#D0C6EF] transition-colors"
            >
              View All Projects →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
