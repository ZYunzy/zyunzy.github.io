import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Projects from "@/components/sections/Projects";

export default function ProjectsPage() {
  useEffect(() => {
    document.title = "Projects | Yun Zhuang";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="pt-20">
        <Projects />
      </main>
      <Footer />
    </>
  );
}