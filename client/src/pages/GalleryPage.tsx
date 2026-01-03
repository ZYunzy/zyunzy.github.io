import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Gallery from "@/components/sections/Gallery";

export default function GalleryPage() {
  useEffect(() => {
    document.title = "Gallery | Yun Zhuang";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="pt-20">
        <Gallery />
      </main>
      <Footer />
    </>
  );
}