import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectsSection() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-5 bg-white text-black dark:bg-[#19181A] dark:text-white transition-colors duration-300">
      <h2 className="text-xl font-semibold mb-4">Projects</h2>

      <div className="space-y-8">

        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold">EncryptoNotes</h3>
            <a
              href="https://encryptonotes.adityayadav.website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <FaExternalLinkAlt size={14} />
            </a>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mt-1 text-sm leading-relaxed">
            Create notes for studies or a post for X. Not even I can read them.
            All the content gets stored in db with full encryption, so no fear of data getting leaked.
          </p>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold">Tamatar AI</h3>
            <a
              href="https://github.com/ad1tyaydv/Tamatar_AI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://tamatar-ai.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <FaExternalLinkAlt size={14} />
            </a>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mt-1 text-sm leading-relaxed">
            An AI app that gives all the answers of your questions and lets you ask
            as many as you want for free, featuring great UX and recent chat access.
          </p>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold">AI-Fiesta Opensource</h3>
            <a
              href="https://github.com/ad1tyaydv/ai-fiesta-opensource"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://opensource-ai-fiesta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <FaExternalLinkAlt size={14} />
            </a>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mt-1 text-sm leading-relaxed">
            AI-Fiesta OpenSource is a multi-AI chat app that lets users send a single
            prompt to multiple AI models and compare their responses side by side.
          </p>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold">Card Generator</h3>
            <a
              href="https://github.com/ad1tyaydv/business-card"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://generate-card-now.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <FaExternalLinkAlt size={14} />
            </a>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mt-1 text-sm leading-relaxed">
            A fun card generator app that lets you create, download, and share personalized cards easily.
          </p>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold">Password Generator</h3>
            <a
              href="https://github.com/ad1tyaydv/Password-Generator"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://cookpass.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <FaExternalLinkAlt size={14} />
            </a>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mt-1 text-sm leading-relaxed">
            A password generator website offering strong and customizable password options.
            No data storage - full privacy ensured.
          </p>
        </div>

      </div>

      <hr className="mt-6 border-t border-gray-300 dark:border-gray-700" />
    </div>
  );
}
