import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Intro() {
  return (
    <div className="text-center px-4 py-8">
      <div className="flex justify-center">
        <img
          src="https://assets.leetcode.com/users/Adiydv/avatar_1728301728.png"
          alt="Aditya Yadav"
          className="w-28 h-28 rounded-full object-cover border"
        />
      </div>

      <h1 className="mt-4 text-2xl font-bold">Aditya Yadav</h1>
      <p className="text-gray-500">Developer</p>

      <div className="flex justify-center gap-6 mt-4 text-xl text-gray-700">
        <a
          href="https://github.com/ad1tyaydv"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/adityaydvdev/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/adityadotdev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter / X"
        >
          <FaXTwitter />
        </a>
      </div>

      <hr className="mt-6 border-t border-gray-300 max-w-xs mx-auto" />
    </div>
  );
}
