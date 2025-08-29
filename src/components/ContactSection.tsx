export default function ContactSection() {
  return (
    <section className="text-center px-4 py-5" id="contact">
      <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
      <p className="text-gray-600 mb-6">
        Whether you want to discuss a project or just say hi, my inbox is always open.
      </p>

      <div className="space-y-2 text-gray-700">
        <p>
          Email:{" "}
          <a
            href="mailto:adityaydvdev@gmail.com"
            className="text-blue-600 hover:underline"
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
            className="text-blue-600 hover:underline"
          >
            adityadotdev
          </a>
        </p>
        <p>
          📍 Location: India
        </p>
      </div>

      <hr className="mt-8 border-t border-gray-300 max-w-xs mx-auto" />
    </section>
  );
}
