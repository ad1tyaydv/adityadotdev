import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function IntroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-6">
      <img
        src="/avatar.jpg"
        alt="Profile"
        className="w-24 h-24 rounded-full object-cover border border-gray-600"
      />
      <div className="text-center md:text-left">
        <h1 className="text-3xl font-bold">Hi, I'm Aditya</h1>
        <div className="flex items-center justify-center md:justify-start gap-2 mt-1 text-sm text-gray-400">
          <p>@adityadotdev</p>
          <a
            href="https://github.com/ad1tyaydv"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/adityaydvdev/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/adityadotdev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaTwitter />
          </a>
        </div>

        <p className="mt-3 text-gray-300">
          A 18-year-old self-taught developer from India who loves building
          things, primarily using{" "}
          <span className="font-semibold text-yellow-400">JavaScript</span> and modern frameworks.
        </p>
      </div>
    </section>
  );
}