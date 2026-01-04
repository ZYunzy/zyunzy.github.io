import { Link } from "wouter";
import { content } from "@/data/content";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Mail,
  Globe,
  Briefcase,
  GraduationCap,
  Award,
  Code,
  Heart,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useEffect } from "react";

export default function ResumePage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const qualificationsContent = [
    "Artificial Intelligence Research",
    "Machine Learning Applications",
    "Data Analysis and Modeling",
    "Research and Development",
  ];

  const honorsContent = [
    "International PolyU Research Postgraduate Summer School Scholarship (50/20000), 2022",
    "National Postgraduate Scholarship, 2020-2022",
    "University First Class of Pengshi Architecture Scholarship (10/800), 2019",
    "University He-Jingtang Technology Innovation Prize, 2019",
    "University Enterprise Scholarship (20/800), 2019",
    "University First Class Scholarship (30/800), 2018",
    "National Scholarship (Twice: Top 3 ‰), 2016 & 2017",
    "Excellent Student Cadre (Twice), Merit Student (Four times), Excellent Volunteer, 2016–2019",
  ];

  const awardsContent = [
    "Second Place of Outstanding Poster Award in UGOD Urban AI Symposium, 2025",
    "Third Prize of CAMPUS Asia Summer School Program on Sustainable Urban and Building Environment, 2021",
    "Grand Prize of Guangdong Province Challenge-cup Extracurricular Academic Contest, 2019",
    "First Prize of the University Challenge-Cup Extracurricular Academic Competition, 2019",
    "Honorable Award of Southern Guangdong Village (Renovation) Planning and Design Competition, 2018",
    "Champion of International Solar Decathlon Competition, 2018",
    "Excellent Report of National College Student Innovation and Entrepreneurship Training Program, 2018",
    "Best Award of University Student Prefabricated Building Design Competition, 2017",
    "Second Prize of National College Student Advanced Mapping Technology and Product Information Modeling Innovation Competition, 2015",
  ];

  const languagesContent = [
    "Chinese (Native)",
    "English (Fluent)",
    "Contanese (Fluent)",
    "Teochew (Fluent)",
    "Japanese (Very Basic)",
    "German (Very Beginning)",
  ];

  const passionsContent = [
    "Towards sustainable urban systems",
    "AI for social good",
    "Computational modeling and network science",
    "Reading and continuous learning",
    "Technology and innovation",
  ];

  const researchContent = [
    {
      title: "AI Research Assistant",
      period: "2024 - Present",
      description: "Working on artificial intelligence and machine learning research projects",
      link: "#",
    },
    {
      title: "Graduate Research",
      period: "2023 - 2024",
      description: "Conducting research in AI applications and data analysis",
      link: "#",
    },
  ];

  // 直接使用 content.projects，取前2个项目
  const activeProjectsContent = content.projects.slice(0, 2);

  const educationContent = [
    {
      degree: "B.Sc in Data Science and Artificial Intelligence",
      institution: "Indian Institute of Technology, Guwahati (IITG)",
      location: "Online",
      field: "Data Science, Programming, Machine Learning, etc.",
      logo: "/client/src/assets/iitg_logo.png",
      alt: "IITG Logo",
    },
    {
      degree: "B.Eng in Urban Planning",
      institution: "South China University of Technology",
      location: "2020",
      field: "Urban Planning, Architecture, Civil Engineering, Mechanical Engineering, Industrial Design, HCI, etc.",
      logo: "/client/src/assets/scut_logo.png",
      alt: "SCUT Logo",
    },
    {
      degree: "M.Eng in Urban Planning, (Minor in Sustainable Development)",
      institution: "Tongji University",
      location: "2023",
      field: "Spatial Planning, Sustainable Development, Infrastructure and Transportation, etc",
      logo: "/client/src/assets/tongji_logo.png",
      alt: "Tongji Logo",
    },
    {
      degree: "M.Sc in Geomatics (GIS)",
      institution: "The Hong Kong Polytechnic University",
      location: "2024",
      field: "GIS, Geodesy, Remote Sensing, Photogrammetry, etc.",
      logo: "/client/src/assets/polyu_logo.png",
      alt: "PolyU Logo",
    },
    // add more...
  ];

  const professionalExperienceContent = [
    {
      title: "Technician Intern/ Research Assistant",
      location: "University",
      period: "2024 - Present",
      description: [
        "Conducting research in artificial intelligence and machine learning.",
        "Developing and testing AI models and algorithms.",
        "Collaborating with team members on research projects.",
      ],
      link: "#",
    },
  ];

  // Function to handle printing
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 pt-24 pb-16 print:bg-white print:pt-2">
        <div className="container mx-auto px-6 md:px-16 print:px-0">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8 print:shadow-none print:p-0">
              {/* Top navigation bar with Back and Print buttons */}
              <div className="flex justify-between items-center mb-10 print:hidden">
                <Link href="/">
                  <motion.div
                    className="inline-flex items-center text-sm font-medium cursor-pointer px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200"
                    whileHover={{ x: -5 }}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Portfolio
                  </motion.div>
                </Link>

                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePrint();
                  }}
                  className="inline-flex items-center text-sm font-medium cursor-pointer px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4"
                    />
                  </svg>
                  Print Resume
                </a>
              </div>

              {/* Header with name and contact info */}
              <header className="text-center mb-8 print:mb-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-3">
                  Yun Zhuang
                </h1>
                <div className="flex justify-center items-center flex-wrap gap-3 text-gray-600">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-1" />
                    <span>zyunn55[at]outlook.com</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 mr-1" />
                    <a
                      href="https://zyunzy.github.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      zyunzy.github.io
                    </a>
                  </div>
                </div>
              </header>

              {/* Section Navigation - Single Row Layout */}
              <div className="flex justify-center flex-wrap mb-10 print:hidden">
                <div className="flex flex-wrap justify-center gap-2 max-w-4xl">
                  {[
                    {
                      id: "qualifications",
                      label: "Qualifications",
                      icon: <Briefcase className="h-4 w-4 mr-2" />,
                      color: "rgba(255, 214, 224, 0.5)",
                    },
                    {
                      id: "education",
                      label: "Education",
                      icon: <GraduationCap className="h-4 w-4 mr-2" />,
                      color: "rgba(224, 214, 255, 0.5)",
                    },
                    {
                      id: "awards",
                      label: "Awards",
                      icon: <Award className="h-4 w-4 mr-2" />,
                      color: "rgba(193, 240, 219, 0.5)",
                    },
                    {
                      id: "experience",
                      label: "Experience",
                      icon: <Briefcase className="h-4 w-4 mr-2" />,
                      color: "rgba(255, 224, 176, 0.5)",
                    },
                    {
                      id: "projects",
                      label: "Projects",
                      icon: <Code className="h-4 w-4 mr-2" />,
                      color: "rgba(176, 224, 255, 0.5)",
                    },
                    {
                      id: "languages",
                      label: "Languages",
                      icon: <Globe className="h-4 w-4 mr-2" />,
                      color: "rgba(224, 240, 193, 0.5)",
                    },
                    {
                      id: "passions",
                      label: "Passions",
                      icon: <Heart className="h-4 w-4 mr-2" />,
                      color: "rgba(240, 193, 224, 0.5)",
                    },
                  ].map((section) => (
                    <motion.a
                      key={section.id}
                      href={`#${section.id}`}
                      className="flex items-center justify-center whitespace-nowrap px-5 py-2 rounded-full transition-colors hover:shadow-md"
                      style={{ backgroundColor: section.color }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {section.icon}
                      {section.label}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Qualifications Section */}
              <motion.section
                id="qualifications"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                className="mb-16 print:mb-8 print:break-inside-avoid"
              >
                <h2 className="text-2xl font-bold mb-6 relative inline-block">
                  Qualifications Summary
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#FFD6E0]"></span>
                </h2>
                <ul className="space-y-3 mt-6">
                  {qualificationsContent.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="inline-block w-6 h-6 rounded-full bg-[#E0D6FF] flex-shrink-0 mr-3"></span>
                      <span className="text-lg">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.section>

              {/* Education Section */}
              <motion.section
                id="education"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                className="mb-16 print:mb-8 print:break-inside-avoid"
              >
                <h2 className="text-2xl font-bold mb-6 relative inline-block">
                  Education
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#C1F0DB]"></span>
                </h2>
                <div className="space-y-6 mt-6">
                  {educationContent.map((edu, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow print:border-0 print:shadow-none print:p-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <img
                        src={edu.logo}
                        alt={edu.alt}
                        className="w-16 h-16 rounded-full mr-6 flex-shrink-0"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                        <p className="text-gray-600 mb-1">
                          <strong>{edu.institution}</strong> | {edu.location}
                        </p>
                        <p className="text-gray-600">
                          Field <em>{edu.field}</em>
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Honors and Awards Section */}
              <motion.section
                id="awards"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                className="mb-16 print:mb-8 print:break-inside-avoid"
              >
                <h2 className="text-2xl font-bold mb-6 relative inline-block">
                  Honors and Awards
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#C1F0DB]"></span>
                </h2>
                <div className="space-y-8 mt-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Honors
                  </h3>
                  <ul className="space-y-3">
                    {honorsContent.map((item, index) => (
                      <motion.li
                        key={`honors-${index}`}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span className="inline-block w-6 h-6 rounded-full bg-[#C1F0DB] flex-shrink-0 mr-3 flex items-center justify-center">
                          <Award className="h-3 w-3 text-gray-700" />
                        </span>
                        <span className="text-lg">{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-semibold mb-4 mt-12">
                    Awards
                  </h3>
                  <ul className="space-y-3">
                    {awardsContent.map((item, index) => (
                      <motion.li
                        key={`awards-${index}`}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span className="inline-block w-6 h-6 rounded-full bg-[#C1F0DB] flex-shrink-0 mr-3 flex items-center justify-center">
                          <Award className="h-3 w-3 text-gray-700" />
                        </span>
                        <span className="text-lg">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.section>


              {/* Experience Section (Combined Research and Professional) */}
              <motion.section
                id="experience"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                className="mb-16 print:mb-8 print:break-inside-avoid"
              >
                <h2 className="text-2xl font-bold mb-6 relative inline-block">
                  Experience
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#E0D6FF]"></span>
                </h2>
                <div className="space-y-8 mt-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Research Experience
                  </h3>
                  {researchContent.map((item, index) => (
                    <motion.div
                      key={`research-${index}`}
                      className="border-l-4 border-[#E0D6FF] pl-6 py-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-gray-600 mb-2">{item.period}</p>
                      {Array.isArray(item.description) ? (
                        <ul className="list-disc list-inside space-y-1 mb-2">
                          {item.description.map((desc, i) => (
                            <li key={i}>{desc}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="mb-2">{item.description}</p>
                      )}
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline flex items-center print:text-black"
                      >
                        <Globe className="h-4 w-4 mr-1" />
                        {item.link
                          .replace(/^https?:\/\//, "")
                          .replace(/\/$/, "")}
                      </a>
                    </motion.div>
                  ))}

                  <h3 className="text-xl font-semibold mb-4 mt-12">
                    Professional Experience
                  </h3>
                  {professionalExperienceContent.map((exp, index) => (
                    <motion.div
                      key={`professional-${index}`}
                      className="border-l-4 border-[#FFD6E0] pl-6 py-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <div className="text-gray-600">
                          <div className="flex items-center md:justify-end">
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center md:justify-end">
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>
                      <ul className="list-disc list-inside space-y-1 mb-2">
                        {exp.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline flex items-center print:text-black"
                      >
                        <Globe className="h-4 w-4 mr-1" />
                        {exp.link
                          .replace(/^https?:\/\//, "")
                          .replace(/\/$/, "")}
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Active Projects Section */}
              <motion.section
                id="projects"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                className="mb-16 print:mb-8 print:break-inside-avoid"
              >
                <h2 className="text-2xl font-bold mb-6 relative inline-block">
                  Active Projects
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#FFD6E0]"></span>
                </h2>
                <div className="grid gap-6 mt-6">
                  {activeProjectsContent.map((project, index) => (
                    <Link key={index} href={`/project/${project.id}`}>
                      <motion.div
                        className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow print:border-0 print:shadow-none print:p-3 cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                      >
                        <h3 className="text-xl font-bold mb-2 flex items-center">
                          <span className="inline-block w-3 h-3 rounded-full bg-[#FFD6E0] mr-2"></span>
                          {project.title}
                        </h3>
                        <p className="mb-2">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 rounded-full text-xs font-medium"
                              style={{ backgroundColor: tag.color }}
                            >
                              {tag.name}
                            </span>
                          ))}
                        </div>
                        <span className="inline-flex items-center text-blue-600 text-sm font-medium print:text-black">
                          View Details →
                        </span>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </motion.section>

              {/* Languages Section */}
              <motion.section
                id="languages"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                className="mb-16 print:mb-8 print:break-inside-avoid"
              >
                <h2 className="text-2xl font-bold mb-6 relative inline-block">
                  Languages
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#E0D6FF]"></span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
                  {languagesContent.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="inline-block w-6 h-6 rounded-full bg-[#E0D6FF] flex-shrink-0 mr-3 flex items-center justify-center">
                        <Globe className="h-3 w-3 text-gray-700" />
                      </span>
                      <span className="text-lg">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Passions Section */}
              <motion.section
                id="passions"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                className="mb-16 print:mb-8 print:break-inside-avoid"
              >
                <h2 className="text-2xl font-bold mb-6 relative inline-block">
                  Passions
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#FFD6E0]"></span>
                </h2>
                <ul className="space-y-5 mt-6">
                  {passionsContent.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="inline-block w-6 h-6 rounded-full bg-[#FFD6E0] flex-shrink-0 mr-3 flex items-center justify-center">
                        {index === 0 ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3 text-gray-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                              clipRule="evenodd"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3 text-gray-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                        )}
                      </span>
                      <span className="text-lg">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
