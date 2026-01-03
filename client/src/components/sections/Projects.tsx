import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { content } from "@/data/content";

export default function Projects() {
  const projects = content.projects;
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div className="py-20 px-6 md:px-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 relative">
          Projects
          <span className="absolute -bottom-2 left-0 w-24 h-1 bg-[#E0D6FF]"></span>
        </h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/project/${project.id}`} className="block">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="text-lg text-gray-800 mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
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
                        opacity: hoveredProject === index ? 0.1 : 0.05,
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
          ))}
        </div>
      </div>
    </div>
  );
}
