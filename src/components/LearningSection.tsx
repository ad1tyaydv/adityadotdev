import { FaArrowRight } from "react-icons/fa6";

export default function LearningSection() {
  const learningItems = [
    {
      title: "100xDevs - Cohort 3",
      subtitle: "Webdev & DevOps",
    },
    {
      title: "",
      subtitle: "Learning through hands-on practice and online resources",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-lg font-semibold mb-4">From where I learn:</h2>

      <div className="space-y-6">
        {learningItems.map((item, index) => (
          <div key={index} className="flex gap-3 items-start">
            <FaArrowRight className="text-gray-500 mt-1" size={12} />
            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-gray-500 text-sm">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      <hr className="mt-8 border-t border-gray-200" />
    </div>
  );
}
