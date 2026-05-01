import { Subtitles } from "lucide-react";
import { FaArrowRight } from "react-icons/fa6";

export default function LearningSection() {
  const learningItems = [
    {
      title: "100xDevs - Cohort 3",
      subtitle: "Webdev & DevOps",
    },
    {
      title: "Rohit Negi",
      subtitle: "Data Structures & Algorithm",
    },
    {
      title: "",
      subtitle: "Learning through hands-on practice and online resources",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-5 bg-white text-black dark:bg-[#19181A] dark:text-white transition-colors duration-300">
      <h2 className="text-4xl font-bebas tracking-wide mb-6">From Where I Learn</h2>

      <div className="space-y-8">
        {learningItems.map((item, index) => (
          <div key={index} className="flex gap-4 items-start">
            <FaArrowRight className="text-gray-500 dark:text-gray-400 mt-2" size={14} />
            <div>
              <p className="text-xl font-bold font-poppins">{item.title}</p>
              <p className="text-gray-600 dark:text-gray-300 text-base">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      <hr className="mt-8 border-t border-gray-300 dark:border-gray-700" />
    </div>
  );
}
