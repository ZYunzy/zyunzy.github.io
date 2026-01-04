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
    const scriptId = 'clustrmaps-script';
    // 定义查找 widget 的函数，方便复用
    const findWidget = () => 
      document.getElementById('clustrmaps-widget-v2') || 
      document.querySelector('.clustrmaps-container') || 
      document.querySelector('div[id*="clustrmaps"]');

    // 1. 核心处理函数：移动并修正样式
    const moveWidget = (widget: HTMLElement) => {
      if (containerRef.current && !containerRef.current.contains(widget)) {
        // 先清空容器，防止重复添加（虽然 appendChild 会自动移动节点，但为了保险）
        containerRef.current.innerHTML = ''; 
        containerRef.current.appendChild(widget);
        
        // 【关键优化】强制重置样式，覆盖官方脚本的 !important 或内联样式
        widget.style.setProperty('width', '100%', 'important');
        widget.style.setProperty('height', '100%', 'important');
        widget.style.setProperty('display', 'block', 'important');
        // 如果官方脚本设置了 max-width，也需要重置
        widget.style.setProperty('max-width', 'none', 'important'); 
      }
    };

    // 2. 检查脚本是否已存在（处理 React StrictMode 或快速路由切换）
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://clustrmaps.com/map_v2.js?cl=ffffff&w=a&t=m&d=lSzZfQ2Us9dYiV01T5GNc3tqK2pNAxQX2Mbse6RV51s&co=9dc4e0&cmo=5390ff&cmn=ff4900';
      // 这里的 async 很重要，防止阻塞页面加载
      script.async = true; 
      document.head.appendChild(script);
    }

    // 3. 初始检查：如果组件挂载时 Widget 已经存在（例如从缓存恢复），直接移动
    const existingWidget = findWidget();
    if (existingWidget && existingWidget instanceof HTMLElement) {
      moveWidget(existingWidget);
    }

    // 4. MutationObserver 监听：这是为了捕获异步生成的 Widget
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.addedNodes.length) {
          const widget = findWidget();
          if (widget && widget instanceof HTMLElement) {
            moveWidget(widget);
            // 【关键优化】一旦找到并移动了 widget，立即停止监听！
            // 避免持续监听 body 变化导致严重的性能损耗
            observer.disconnect(); 
            return; // 结束循环
          }
        }
      }
    });

    // 监听整个 body 的子节点变化（因为我们不知道它会插在哪里）
    observer.observe(document.body, { childList: true, subtree: true });

    // 5. 清理函数
    return () => {
      observer.disconnect(); // 组件卸载时确保停止监听
      
      // 可选：是否要在组件卸载时删除脚本？
      // 建议删除，因为 Response Header 显示 cache-control: no-store
      // 意味着每次都应该重新请求，且防止污染全局
      if (script) script.remove();
      
      const widget = findWidget();
      if (widget) widget.remove();
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
              <div id="clustrmaps-container" className="w-full min-h-[300px] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                {/* Clustrmaps script will inject the map here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}  