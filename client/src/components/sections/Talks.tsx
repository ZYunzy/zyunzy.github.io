import { motion } from "framer-motion";
import { ExternalLink, Calendar, MapPin } from "lucide-react";
import aiCoScientistImage from "../../assets/ai_coscientist.png";
import multimodalLegoImage from "../../assets/multimodal_lego.png";
import aiEngineerImage from "../../assets/ai_engineer_talk.png";
import seoulMetaWeekImage from "../../assets/swe_korea.png";

export default function Talks() {
  interface Talk {
    id: number;
    title: string;
    venue: string;
    date: string;
    year: string;
    description: string;
    image: string;
    link: string;
    slidesLink?: string;
  }

  const talks: Talk[] = [
    {
      id: 1,
      title: "My Talk",
      venue: "Conference",
      date: "2024",
      year: "2024",
      description:
        "A talk about my research and work in artificial intelligence.",
      image: aiCoScientistImage,
      link: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="py-20 px-6 md:px-16" id="talks">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 relative">
          Talks
          <span className="absolute -bottom-2 left-0 w-24 h-1 bg-[#FFD6E0]"></span>
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {talks.map((talk) => (
            <motion.div
              key={talk.id}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300"
              variants={itemVariants}
            >
              <div className="aspect-video bg-gray-100 mb-4 rounded-lg overflow-hidden">
                <img
                  src={talk.image}
                  alt={talk.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {talk.date}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {talk.venue}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2">{talk.title}</h3>
              <p className="mb-4 text-gray-700">{talk.description}</p>

              <div className="flex gap-3">
                <a
                  href={talk.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
                >
                  {talk.id === 1 ? "View Schedule" : "Watch Talk"}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>

                {talk.slidesLink && (
                  <a
                    href={talk.slidesLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#FFD6E0] text-black px-4 py-2 rounded-full hover:bg-[#ffc1d4] transition-colors"
                  >
                    View Slides
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
