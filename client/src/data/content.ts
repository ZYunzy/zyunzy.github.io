export const content = {
  about: {
    paragraphs: [
      "I'm Yun Zhuang, a researcher passionate about sustainable urban systems.",
    ],
    infoBoxes: [
      {
        title: "Education",
        color: "#87CEEB",
        items: [
          "B.Eng in Urban Planning",
          "M.Eng in Urban Planning",
          "M.Sc in Geomatics (GIS)",
          "B.Sc in Data Science & AI (ongoing)",
        ],
      },
      {
        title: "Skills",
        color: "#32CD32",
        items: [
          "Data Science & AI",
          "Computational Modeling",
          "Programming (Python, R, Java, C++, JavaScript)",
        ],
      },
      {
        title: "Interests",
        color: "#00BFFF",
        items: [
          "Urban Systems",
          "Complex Networks",
          "Infrastructure and Transportation",
          "Sustainability and Resilience",
        ],
      },
      {
        title: "Languages",
        color: "#00FF7F",
        items: [
          "Mandarin",
          "English",
          "Cantonese",
          "Teochew",
          "Japanese",
        ],
      },
    ],
  },
  research: {
    projects: [
      {
        title: "My Research Project",
        description:
          "Research project focused on artificial intelligence and machine learning applications.",
        image:
          "https://images.unsplash.com/photo-1581092921461-7717a5f1ecf9?auto=format&fit=crop&w=600&h=300",
        link: "#",
      },
    ],
  },
  projects: [
    {
      id: "gemini-extension",
      title: "Google Home Gemini Extension",
      description:
        "Led the development of Google Home's Gemini Extension, bringing multimodal AI capabilities to smart home devices, enabling users to interact with their homes through natural language and visual inputs.",
      image:
        "https://images.unsplash.com/photo-1535572290543-960a8046f5af?auto=format&fit=crop&w=800&h=600",
      link: "https://support.google.com/googlenest/answer/12494697",
      gradient: "from-[#32CD32] via-[#00BFFF] to-[#87CEEB]",
      tags: [
        { name: "Gemini AI", color: "#32CD32" },
        { name: "Smart Home", color: "#00BFFF" },
        { name: "Multimodal Interaction", color: "#87CEEB" },
      ],
      content: "Detailed information about the Google Home Gemini Extension project. This multimodal AI integration brought advanced conversational capabilities to smart home devices, allowing users to control their homes through natural language and visual inputs. The project involved close collaboration with Google's AI teams and required extensive testing across various smart home ecosystems.",
    },
    {
      id: "chembuddy",
      title: "ChemBuddy: Multimodal AI Chemistry Assistant",
      description:
        "An AI-powered learning companion that combines computer vision, voice interaction, and sensor data to help students understand chemistry concepts through real-time experiment analysis.",
      image:
        "https://images.unsplash.com/photo-1581092921461-7717a5f1ecf9?auto=format&fit=crop&w=800&h=600",
      link: "",
      gradient: "from-[#00BFFF] via-[#87CEEB] to-[#32CD32]",
      tags: [
        { name: "Multimodal AI", color: "#00BFFF" },
        { name: "Computer Vision", color: "#87CEEB" },
        { name: "Education", color: "#32CD32" },
      ],
      content: "ChemBuddy is an innovative AI-powered chemistry learning assistant that integrates multiple sensory inputs. The system uses computer vision to analyze chemical reactions in real-time, voice interaction for natural communication, and sensor data for precise measurements. This multimodal approach helps students better understand complex chemistry concepts through hands-on experimentation.",
    },
    {
      id: "cognimates",
      title: "Cognimates",
      description:
        "AI education platform for children to train their own machine learning models. Users can also code smart games using their custom models.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&h=600",
      link: "http://cognimatescopilot.com/",
      gradient: "from-[#87CEEB] via-[#32CD32] to-[#00BFFF]",
      tags: [
        { name: "AI Education", color: "#00BFFF" },
        { name: "Creative Coding", color: "#87CEEB" },
        { name: "Child-Computer Interaction", color: "#32CD32" },
      ],
      content: "Cognimates is a pioneering AI education platform designed specifically for children. The platform allows young users to train their own machine learning models through an intuitive interface, then use these models to create interactive games and applications. This hands-on approach makes AI concepts accessible and engaging for the next generation of innovators.",
    },
  ],
  talks: [
    {
      title: "My Talk",
      venue: "Conference",
      year: "2024",
      description:
        "A talk about my research and work in artificial intelligence.",
      image:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&h=338",
      link: "#",
    },
  ],
  publications: [
    {
      title: "My Research Paper",
      venue: "Conference",
      year: "2024",
      authors: "Zhuang, Y.",
      tags: [
        { name: "AI Research", color: "#87CEEB" },
      ],
      abstractLink: "#",
      pdfLink: "#",
    },
  ],
};
