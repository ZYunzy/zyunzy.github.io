import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, ExternalLink, MapPin } from "lucide-react";

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<"artworks" | "design">("design");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const artworks = [
    {
      id: "art-1",
      title: "My Painting Work",
      date: "January 1, 2024",
      description: "A beautiful painting showcasing my artistic skills.",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=1864&auto=format&fit=crop",
      category: "Painting",
      link: "#",
    },
    {
      id: "art-2",
      title: "Photography Collection",
      date: "February 1, 2024",
      description: "A series of photographs capturing nature and life.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1864&auto=format&fit=crop",
      category: "Photography",
      link: "#",
    },
  ];

  const design = [
    {
      id: 1,
      title: "Icon Design",
      venue: "Software, Conference",
      date: "June - August, 2024",
      year: "2024",
      description: "Icon design for software GeoMarX and International Conference of Social Computing 2024.",
      image: [
        "https://res.cloudinary.com/dkjpqq37r/image/upload/v1767529134/geomarxpng_t7hlmy.png",
        "https://res.cloudinary.com/dkjpqq37r/image/upload/v1767529134/icsc_f5vb5b.png"
      ],
      link: "#",
    },
    {
      id: 2,
      title: "Poster Design",
      venue: "Seminar",
      date: "September - November, 2024",
      year: "2024",
      description: "Poster design for Seminar.",
      image: [
        "https://res.cloudinary.com/dkjpqq37r/image/upload/v1767528950/461725524306_.pic_hd_tt4tti.jpg",
        "https://res.cloudinary.com/dkjpqq37r/image/upload/v1767528921/2471732193081_.pic_hd_vlbh6f.jpg"
      ],
      link: "#",
    },
    {
      id: 3,
      title: "UI Design",
      venue: "Navigation App",
      date: "April, 2023",
      year: "2023",
      description: "UI design for Navigation App.",
      image: "https://res.cloudinary.com/dkjpqq37r/image/upload/v1767529135/appui_tr8nov.svg",
      link: "#",
    },
  ];

  const currentItems = activeTab === "artworks" ? artworks : design;

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % currentItems.length);
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + currentItems.length) % currentItems.length);
    }
  };

  return (
    <div className="py-20 px-6 md:px-16 bg-gray-50" id="gallery">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 relative">
          Gallery
          <span className="absolute -bottom-2 left-0 w-24 h-1 bg-[#FFD6E0]"></span>
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-1 shadow-sm">
            <button
              onClick={() => setActiveTab("design")}
              className={`px-6 py-2 rounded-full font-medium transition ${
                activeTab === "design"
                  ? "bg-[#FFD6E0] text-white"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Design
            </button>
            <button
              onClick={() => setActiveTab("artworks")}
              className={`px-6 py-2 rounded-full font-medium transition ${
                activeTab === "artworks"
                  ? "bg-[#FFD6E0] text-white"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Artworks
            </button>
          </div>
        </div>

        {activeTab === "artworks" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.map((art, index) => (
              <motion.div
                key={art.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedIndex(index)}
              >
                <div className="aspect-video bg-gray-100 relative overflow-hidden">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{art.date}</span>
                    <span className="ml-4">{art.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{art.title}</h3>
                  <p className="text-gray-600 mb-4">{art.description}</p>
                  <a
                    href={art.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 inline-flex items-center text-sm font-medium hover:text-blue-800"
                  >
                    View Details
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === "design" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {design.map((designItem, index) => (
              <motion.div
                key={designItem.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedIndex(index)}
              >
                <div className="aspect-video bg-gray-100 relative overflow-hidden">
                  <img
                    src={Array.isArray(designItem.image) ? designItem.image[0] : designItem.image}
                    alt={designItem.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{designItem.date}</span>
                    <span className="ml-4">{designItem.venue}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{designItem.title}</h3>
                  <p className="text-gray-600 mb-4">{designItem.description}</p>
                  <a
                    href={designItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 inline-flex items-center text-sm font-medium hover:text-blue-800"
                  >
                    View Details
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Image Modal */}
        {selectedIndex !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition"
            >
              ‹
            </button>
            <div className="max-w-4xl max-h-full p-4 relative">
              {/* multi image */}
              {Array.isArray(currentItems[selectedIndex].image) ? (
                currentItems[selectedIndex].image.map((img, idx) => (
                  <img key={idx} src={img} alt={`${currentItems[selectedIndex].title} ${idx + 1}`} className="max-w-full max-h-full object-contain mb-4" />
                ))
              ) : (
                <img src={currentItems[selectedIndex].image} alt={currentItems[selectedIndex].title} className="max-w-full max-h-full object-contain" />
              )}
              <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 text-white p-4 rounded">
                <h3 className="text-xl font-bold mb-2">{currentItems[selectedIndex].title}</h3>
                <p className="text-sm">{currentItems[selectedIndex].description}</p>
              </div>
            </div>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition"
            >
              ›
            </button>
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition"
            >
              ×
            </button>
          </div>
        )}
      </div>
    </div>
  );
}