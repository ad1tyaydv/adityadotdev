import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Tamatar AI",
      description:
        "An AI app that gives all the answers of your quesions and ask as much questions as much as you can at free of cost, a great user experience, access all your recent chats",
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
        "A card generator app which generates a fun card which you can download and share with your friends.",
      status: "Live",
      link1: "https://github.com/ad1tyaydv/business-card",
      link2: "https://generate-card-now.vercel.app/",
    },
    {
      title: "Password Generator",
      description:
        "A password generating website which generates password in just seconds. You have a variety of options to generate passwords. The passwords generated are not stored anywhere so you dont have to worry about your info.",
      status: "Live",
      link1: "https://github.com/ad1tyaydv/Password-Generator",
      link2: "https://cookpass.vercel.app/",
    },
    {
      title: "Password Saver",
      description:
        "A password saver website which saves all your password at one place. So no need to search them when you need. Just save all your passwords at your finger tips.",
      status: "Live",
      link1: "https://github.com/ad1tyaydv/password-saver",
      link2: "https://password-saver-teal.vercel.app/",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-5">
      <h2 className="text-xl font-semibold mb-4">Projects</h2>

      <div className="space-y-8">
        {projects.map((project) => (
          <div key={project.title}>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold">{project.title}</h3>

              {project.status === "In Progress" && (
                <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                  In Progress
                </span>
              )}
              
              <a
                href={project.link1}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-black"
              >
                <FaGithub size={18} />
              </a>

              <a
                href={project.link2}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-black"
              >
                <FaExternalLinkAlt size={14} />
              </a>
            </div>
            <p className="text-gray-600 mt-1 text-sm">{project.description}</p>
          </div>
        ))}
      </div>
      <hr className="mt-6 border-t border-gray-300" />
    </div>
  );
}
