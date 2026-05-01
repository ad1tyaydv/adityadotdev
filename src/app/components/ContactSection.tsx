export default function ContactSection() {
  return (
    <section
      id="contact"
      className="text-center px-4 py-5 bg-white text-black dark:bg-[#19181A] dark:text-white transition-colors duration-300"
    >
      <h2 className="text-4xl font-bebas tracking-wide mb-6">Get in Touch</h2>

      <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg">
        Whether you want to discuss a project or just say hi, my inbox is always open.
      </p>

      <div className="space-y-4 text-gray-800 dark:text-gray-200 text-lg">
        <p>
          Email:{" "}
          <a
            href="mailto:adityaydvdev@gmail.com"
            className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
          >
            adityadotdev@gmail.com
          </a>
        </p>
        <p>
          X:{" "}
          <a
            href="https://x.com/adityadotdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
          >
            adityadotdev
          </a>
        </p>
        <p>📍 Location: India</p>
      </div>

      <hr className="mt-12 border-t border-gray-300 dark:border-gray-700 max-w-xs mx-auto" />
    </section>
  );
}
