
export default function Skills() {

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "MongoDB",
              "JavaScript",
              "Postman",
              "Clerk",
              "React Native",
              "NeonDB",
              "Tailwind CSS",
              "AWS",
              "Express.js",
              "Figma",
              "PostgreSQL",
              "Shadcn UI",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-[#1c1c1c] text-sm rounded-md border border-gray-700 text-gray-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
    )
}