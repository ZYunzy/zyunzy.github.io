import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import News from "@/components/sections/News";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Talks from "@/components/sections/Talks";
import Contact from "@/components/sections/Contact";
import CursorFollower from "@/components/ui/cursor-follower";
import { useSectionVisibility } from "@/hooks/use-section-visibility";
import Gallery from "@/components/sections/Gallery";

export default function HomePage() {
  const { registerSection } = useSectionVisibility();

  useEffect(() => {
    // Set title
    document.title = "Yun Zhuang | Portfolio";

    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Add noindex meta tag
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <>
      <CursorFollower />
      <Header />
      <main>
        <Hero />
        <section id="news" ref={registerSection} className="section-fade">
          <News />
        </section>
        <section id="about" ref={registerSection} className="section-fade">
          <About />
        </section>
        <section id="projects" ref={registerSection} className="section-fade">
          <Projects />
        </section>
        <section id="gallery" ref={registerSection} className="section-fade">
          <Gallery />
        </section>
        <section id="contact" ref={registerSection} className="section-fade">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}
