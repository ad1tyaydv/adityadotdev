export default function ContactSection() {
  return (
    <section className="px-4 py-16 sm:px-6 md:px-10 max-w-4xl mx-auto text-white border-t border-gray-700 text-center">
      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
      <p className="text-gray-400 mb-4">
        Want to chat? Just shoot me a dm via{" "}
        <span className="bg-[#1c1c1c] px-2 py-1 rounded border border-gray-600 inline-block">
          📧 Gmail
        </span>{" "}
        or reach out on{" "}
        <span className="bg-[#1c1c1c] px-2 py-1 rounded border border-gray-600 inline-block">
          ✖ Twitter
        </span>
      </p>

      <div className="mb-6">
        <p className="text-gray-400 font-medium mb-2">Support my work</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <span className="bg-[#1c1c1c] px-4 py-2 rounded border border-gray-600 text-sm">🪙 Solana</span>
          <span className="bg-[#1c1c1c] px-4 py-2 rounded border border-gray-600 text-sm">💳 Paytm</span>
          <span className="bg-[#1c1c1c] px-4 py-2 rounded border border-gray-600 text-sm">💸 PayPal</span>
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-6 italic">
        Stay hungry, stay foolish
      </p>
    </section>
  );
}
