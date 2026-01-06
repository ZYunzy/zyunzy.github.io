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

    // Add noindex meta tag
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
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
            <div
              onCopy={(e) => e.preventDefault()}
              onCut={(e) => e.preventDefault()}
              onContextMenu={(e) => e.preventDefault()}
              className="select-none whitespace-pre-line text-justify"
            >
              {project.content}
              </div>
              {project.sections?.map((section, idx) => (
                <div key={idx} className="mt-6">
                  {section.type === 'ongoing-paper' && (
                    <div className="bg-white p-4 rounded-lg shadow flex gap-4">
                      {'image' in section && typeof (section as any).image === 'string' && <img src={(section as any).image} className="w-32 h-32 object-cover" />}
                      <div>
                        <h4 className="font-bold">{(section as any).title}</h4>
                        {'authors' in section && typeof (section as any).authors === 'string' && <p className="text-sm text-gray-600">{(section as any).authors}</p>}
                        {'description' in section && typeof (section as any).description === 'string' && <p className="text-sm">{(section as any).description}</p>}
                        {'link' in section && typeof (section as any).link === 'string' && <a href={(section as any).link} className="text-blue-600">Read More →</a>}
                      </div>
                    </div>
                  )}
                  {section.type === 'text-gallery' && (
                    <div className="mt-6">
                      <h4 className="font-bold mb-4">{section.title}</h4>
                      <p className="mb-4">{section.text}</p>
                      <div className="flex overflow-x-auto space-x-4 pb-4">
                        {section.images?.map((img, imgIdx) => (
                          <div key={imgIdx} className="flex-shrink-0 w-64">
                            <img src={img.src} alt={img.caption} className="w-full h-48 object-cover rounded" />
                            <p className="text-sm mt-2">{img.caption}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {section.type === 'image-text' && (
                    <div className={`flex gap-4 ${'layout' in section && section.layout === 'right' ? 'flex-row-reverse' : ''}`}>
                      {'image' in section && typeof (section as any).image === 'string' && <img src={(section as any).image} className="w-1/2" />}
                      <div className="w-1/2">
                        <h4 className="font-bold mb-2">{section.title}</h4>
                        {'text' in section && typeof (section as any).text === 'string' && <p>{(section as any).text}</p>}
                      </div>
                    </div>
                  )}
                  {section.type === 'gallery' && (
                    <div className="mt-6">
                      <h4 className="font-bold mb-4">{section.title}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {section.images?.map((img, imgIdx) => (
                          <div key={imgIdx} className="relative">
                            <img src={img.src} alt={img.caption} className="w-full h-48 object-cover rounded" />
                            <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">{img.caption}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}