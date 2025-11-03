import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Montserrat } from "next/font/google";
import { ModeToggle } from "@/helpers/theme-toggle-button";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Intro() {
  return (
    <div className="px-4 py-8 relative bg-white text-black dark:bg-[#19181A] dark:text-white transition-colors duration-300">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left mt-8">
        <div className="order-1 md:order-2 md:w-1/2 flex justify-center">
          <img
            src="image.png"
            alt="Aditya Yadav"
            className="w-44 h-44 rounded-full object-cover border border-gray-300 dark:border-gray-700"
          />
        </div>

        <div className="order-2 md:order-1 md:w-1/2">
          <h1 className={`text-4xl font-bold ${montserrat.className}`}>
            Aditya Yadav
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-xl mt-1">
            Full Stack Developer
          </p>

          <div className="flex justify-center md:justify-start gap-6 mt-4 text-xl text-gray-700 dark:text-gray-300">
            <a
              href="https://github.com/ad1tyaydv"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/adityaydvdev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/adityadotdev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>

      <hr className="mt-12 border-t border-gray-300 dark:border-gray-700 max-w-2xl mx-auto" />
    </div>
  );
}
