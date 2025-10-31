import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Tamatar AI",
      description:
        "An AI app that gives all the answers of your questions and lets you ask as many as you want for free, featuring great UX and recent chat access.",
      status: "Live",
      link1: "https://github.com/ad1tyaydv/Tamatar_AI",
      link2: "https://tamatar-ai.vercel.app/",
    },
    {
      title: "AI-Fiesta Opensource",
      description:
        "AI-Fiesta OpenSource is a multi-AI chat app that lets users send a single prompt to multiple AI models and compare their responses side by side.",
      status: "Live",
      link1: "https://github.com/ad1tyaydv/ai-fiesta-opensource",
      link2: "https://opensource-ai-fiesta.vercel.app/",
    },
    {
      title: "Card Generator",
      description:
        "A fun card generator app that lets you create, download, and share personalized cards easily.",
      status: "Live",
      link1: "https://github.com/ad1tyaydv/business-card",
      link2: "https://generate-card-now.vercel.app/",
    },
    {
      title: "Password Generator",
      description:
        "A password generator website offering strong and customizable password options. No data storage — full privacy ensured.",
      status: "Live",
      link1: "https://github.com/ad1tyaydv/Password-Generator",
      link2: "https://cookpass.vercel.app/",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-5 bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <h2 className="text-xl font-semibold mb-4">Projects</h2>

      <div className="space-y-8">
        {projects.map((project) => (
          <div key={project.title}>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold">{project.title}</h3>

              {project.status === "In Progress" && (
                <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-semibold px-2 py-1 rounded-full">
                  In Progress
                </span>
              )}

              <a
                href={project.link1}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <FaGithub size={18} />
              </a>

              <a
                href={project.link2}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <FaExternalLinkAlt size={14} />
              </a>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mt-1 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>

      <hr className="mt-6 border-t border-gray-300 dark:border-gray-700" />
    </div>
  );
}
