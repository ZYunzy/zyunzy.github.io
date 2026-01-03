import { useEffect } from "react";
import { useParams, useLocation } from "wouter";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { content } from "@/data/content";

export default function ProjectDetailPage() {
  const params = useParams();
  const [, setLocation] = useLocation();

  const project = content.projects.find(p => p.id === params.id);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Yun Zhuang`;
    } else {
      document.title = "Project Not Found | Yun Zhuang";
    }
    window.scrollTo(0, 0);
  }, [project]);

  if (!project) {
    return (
      <>
        <Header />
        <main className="pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <button
              onClick={() => setLocation("/projects")}
              className="text-blue-600 hover:underline"
            >
              Back to Projects
            </button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-20 pb-20 px-6 md:px-16">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <button
              onClick={() => setLocation("/projects")}
              className="text-blue-600 hover:underline mb-4 inline-block"
            >
              ← Back to Projects
            </button>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
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
          </div>

          <div className="mb-8">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-800 mb-6">{project.description}</p>
            <div className="whitespace-pre-line">{project.content}</div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}