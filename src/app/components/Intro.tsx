import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { ModeToggle } from "@/helpers/theme-toggle-button";


export default function Intro() {
  return (
    <div className="relative bg-white text-black dark:bg-[#19181A] dark:text-white transition-colors duration-300 pb-12">
      <div className="w-full h-48 md:h-64 overflow-hidden">
        <img
          src="/introBanner.png"
          alt="Intro Banner"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute top-4 right-4 flex z-20">
        <ModeToggle />
      </div>


      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6 text-center md:text-left">
          {/* Name and Info - Now on the far left on desktop */}
          <div className="flex-grow pb-6 md:pb-8 order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins tracking-tight">
              Aditya Yadav
            </h1>
            <p className="text-gray-600 font-poppins dark:text-gray-400 text-xl mt-1">
              Full Stack Developer
            </p>

            <div className="flex justify-center md:justify-start gap-6 mt-4 text-2xl text-gray-700 dark:text-gray-300">
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

          {/* Profile Image - Now on the far right on desktop, overlapping the banner */}
          <div className="-mt-20 md:-mt-24 flex-shrink-0 order-1 md:order-2">
            <img
              src="image.png"
              alt="Aditya Yadav"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white dark:border-[#19181A] shadow-xl"
            />
          </div>
        </div>
      </div>

      <hr className="mt-12 border-t border-gray-300 dark:border-gray-700 max-w-4xl mx-auto" />
    </div>
  );
}


