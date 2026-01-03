import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Twitter,
  Linkedin,
  Github,
  BookOpen,
} from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      text: "zyunn55[at]outlook.com",
      href: undefined,
      color: "#f0c1d8ff",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      text: "Guangzhou, Guangdong, China & Kowloon, Hong Kong SAR",
      href: undefined,
      color: "#C1F0DB",
    },
  ];

  const socialLinks = [
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://twitter.com/yunzhuang",
      ariaLabel: "Twitter",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/yunzhuang",
      ariaLabel: "LinkedIn",
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/ZYunzy",
      ariaLabel: "GitHub",
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      href: "https://medium.com/@yunzhuang",
      ariaLabel: "Medium",
    },
  ];
    
  useEffect(() => {
    // Load Clustrmaps script
    const script = document.createElement('script');
    script.src = '//cdn.clustrmaps.com/map_v2.js?cl=ffffff&w=a&t=m&d=lSzZfQ2Us9dYiV01T5GNc3tqK2pNAxQX2Mbse6RV51s&co=9dc4e0&cmo=5390ff&cmn=ff4900';
    script.id = 'clustrmaps';
    script.type = 'text/javascript';
    document.body.appendChild(script);

    // Move the map to the container after it loads
    const moveMap = () => {
      const mapWidget = document.querySelector('div[id*="clustrmaps"]') as HTMLElement;
      const container = document.getElementById('clustrmaps-container');
      
      if (mapWidget) {
        if (container && !container.contains(mapWidget)) {
          // Move to container
          container.innerHTML = '';
          container.appendChild(mapWidget);
          mapWidget.style.width = '100%';
          mapWidget.style.height = '100%';
          mapWidget.style.borderRadius = '8px';
          mapWidget.style.overflow = 'hidden';
          mapWidget.style.display = 'block';
        } else if (!container) {
          // Hide if container doesn't exist (other pages)
          mapWidget.style.display = 'none';
        }
      }
    };

    // Use MutationObserver to watch for DOM changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          moveMap();
        }
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Check with delays
    setTimeout(moveMap, 1000);
    setTimeout(moveMap, 3000);
    setTimeout(moveMap, 5000);

    return () => {
      observer.disconnect();
      // Remove the map when component unmounts
      const mapWidget = document.querySelector('div[id*="clustrmaps"]');
      if (mapWidget) {
        mapWidget.remove();
      }
      const existingScript = document.getElementById('clustrmaps');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="py-20 px-6 md:px-16">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 relative">
          Contact
          <span className="absolute -bottom-2 left-0 w-24 h-1 bg-[#E0D6FF]"></span>
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* contract at left */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-lg mb-8">
                I'm always interested in new research collaborations, speaking
                opportunities, or discussions about AI education and family
                learning.
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div
                      className={`w-12 h-12 rounded-full bg-[${item.color}] flex items-center justify-center mr-5`}
                    >
                      {item.icon}
                    </div>
                    {item.href ? (
                      <a href={item.href} className="hover:underline text-lg">
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-lg">{item.text}</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex space-x-5 mt-10">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    aria-label={link.ariaLabel}
                    className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#FFD6E0] transition-colors duration-300"
                    whileHover={{ y: -5 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* map at right */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Visitor Map</h3>
              <div id="clustrmaps-container" className="w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
                <p className="text-gray-500">Loading visitor map...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}  