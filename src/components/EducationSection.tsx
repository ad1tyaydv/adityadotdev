interface EducationItem {
  name: string;
  degree: string;
  year: string;
  logo: string;
}

const educationList: EducationItem[] = [
  {
    name: "Maharaja Agrasen Institute of Technology",
    degree: "B.Tech in Computer Science",
    year: "2023 - 2027",
    logo: "/education/mait.png",
  },
  {
    name: "Siddhartha Public School",
    degree: "Class XII (CBSE) - 84.8%",
    year: "2021 - 2023",
    logo: "/education/sps.png",
  },
  {
    name: "D.A.V. Public School",
    degree: "Class X (CBSE) - 91.6%",
    year: "2010 - 2021",
    logo: "/education/dav.png",
  },
];

export default function EducationSection() {
  return (
    <section className="px-4 py-16 sm:px-6 md:px-10 max-w-4xl mx-auto text-white border-t border-gray-700">
      <h2 className="text-xl font-bold mb-6">Education</h2>

      <div className="space-y-6">
        {educationList.map((edu, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={edu.logo}
                alt={edu.name}
                className="w-10 h-10 rounded-full border border-gray-600 object-cover"
              />
              <div>
                <p className="font-semibold">{edu.name}</p>
                <p className="text-sm text-gray-400">{edu.degree}</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">{edu.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
