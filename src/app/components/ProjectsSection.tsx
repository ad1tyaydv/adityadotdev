import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

export default function ProjectsSection() {
  const projects = [
    {
      title: "FastURL",
      description: "Transform long URLs into custom short links with advanced link performance analytics, branded url shortener features, and instant QR code generation.\n\nFastURL is your all-in-one link management platform for digital marketing links, and real time click tracking.",
      link: "https://fasturl.in",
      image: "/fasturl.png",
    },
    {
      title: "EncryptoNotes",
      description: "Create notes for studies or a post for X. Not even I can read them. All the content gets stored in db with full encryption, so no fear of data getting leaked.",
      link: "https://encryptonotes.adityayadav.website",
      image: "/encryptoNotes.png",
    },
    {
      title: "Tamatar AI",
      description: "An AI app that gives all the answers of your questions and lets you ask as many as you want for free, featuring great UX and recent chat access.",
      github: "https://github.com/ad1tyaydv/Tamatar_AI",
      link: "https://tamatar-ai.vercel.app/",
      image: "/tamatarAI.png",
    },
    {
      title: "AI-Fiesta Opensource",
      description: "AI-Fiesta OpenSource is a multi-AI chat app that lets users send a single prompt to multiple AI models and compare their responses side by side.",
      github: "https://github.com/ad1tyaydv/ai-fiesta-opensource",
      link: "https://opensource-ai-fiesta.vercel.app/",
      image: "/aiFiesta.png",
    },
    {
      title: "Card Generator",
      description: "A fun card generator app that lets you create, download, and share personalized cards easily.",
      github: "https://github.com/ad1tyaydv/business-card",
      link: "https://generate-card-now.vercel.app/",
      image: "/cardGen.png",
    },
    {
      title: "Password Generator",
      description: "A password generator website offering strong and customizable password options. No data storage - full privacy ensured.",
      github: "https://github.com/ad1tyaydv/Password-Generator",
      link: "https://cookpass.vercel.app/",
      image: "/passwordGen.png",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-5 bg-white text-black dark:bg-[#19181A] dark:text-white transition-colors duration-300">
      <h2 className="text-4xl font-bebas tracking-wide mb-10">Projects</h2>

      <div className="space-y-20">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group flex flex-col md:flex-row gap-8 items-start"
          >
            {/* Image Container - Always on the left on desktop */}
            <div className="w-full md:w-1/2 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 aspect-video relative shadow-sm">
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              /> 
            </div>

            {/* Text Content - Always on the right on desktop */}
            <div className="w-full md:w-1/2 md:text-left">
              <div className="flex items-center gap-3 md:justify-start justify-center">
                <h3 className="text-2xl font-bold font-poppins">{project.title}</h3>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm leading-relaxed whitespace-pre-line">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <hr className="mt-12 border-t border-gray-300 dark:border-gray-700" />
    </div>
  );
}
