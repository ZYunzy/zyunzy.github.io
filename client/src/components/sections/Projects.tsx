import { useState } from "react";
import { motion } from "framer-motion";

// Import images directly
import chembuddyImage from "../../assets/chembuddy.png";
import cognimatesImage from "../../assets/cognimates.png";
import geminiImage from "../../assets/gemini.png";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "My Project",
      description:
        "A personal project showcasing my work in technology and research.",
      image: geminiImage,
      link: "#",
      tags: [
        { name: "Technology", color: "#FFD6E0" },
      ],
      gradient: "from-[#E0D6FF] to-[#FFD6E0]",
    },
  ];

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div className="py-20 px-6 md:px-16 bg-gray-50" id="projects">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 relative">
          Projects
          <span className="absolute -bottom-2 left-0 w-24 h-1 bg-[#E0D6FF]"></span>
        </h2>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <div className={index % 2 === 0 ? "order-2 md:order-1" : ""}>
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
                {project.link && (
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
                      className={`max-w-full max-h-full object-contain ${project.id === 1 ? "w-[85%]" : ""}`}
                      style={{ maxHeight: "280px" }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
