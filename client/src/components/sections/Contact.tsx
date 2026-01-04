import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
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
  const containerRef = useRef<HTMLDivElement>(null);
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
    // 检查是否已经存在（防止 React 两次渲染导致重复）
    if (document.getElementById('clustrmaps')) return;

    // 创建脚本
    const script = document.createElement('script');
    
    // 设置 ID，让脚本能找到自己
    script.id = 'clustrmaps';
    
    // 使用 CDN 地址
    script.src = '//cdn.clustrmaps.com/map_v2.js?cl=ffffff&w=a&t=m&d=lSzZfQ2Us9dYiV01T5GNc3tqK2pNAxQX2Mbse6RV51s&co=9dc4e0&cmo=5390ff&cmn=ff4900';
    
    // 直接插到容器里，而不是 head 里
    // 这样地图就会直接渲染在这个 div 内部
    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    return () => {
      // 清理逻辑
      const scriptNode = document.getElementById('clustrmaps');
      if (scriptNode) scriptNode.remove();
      // 同时也清理生成的地图 widget
      if (containerRef.current) containerRef.current.innerHTML = '';
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
              <div 
                ref={containerRef}
                className="w-full overflow-hidden flex justify-center"
                style={{ minHeight: '300px' }}
              >
                {/* 脚本会插在这里，地图也会在这里生成 */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}  