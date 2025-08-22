import ContactSection from "../components/ContactSection";
import EducationSection from "../components/EducationSection";
import ProjectsSection from "../components/ProjectsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0e0e0e] px-4 py-8 sm:px-6 md:px-10 flex justify-center">
      <div className="w-full max-w-2xl space-y-10 text-white">
        <section className="flex flex-col md:flex-row items-center gap-6">
          <img
            src="/avatar.jpg"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border border-gray-600"
          />
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold">Hi, I'm Aditya</h1>
            <p className="text-sm text-gray-400">@adityadotdev</p>
            <p className="mt-3 text-gray-300">
              A 18-year-old self-taught developer from India who loves building
              things, primarily using{" "}
              <span className="font-semibold text-yellow-400">JavaScript</span>{" "}
              and modern frameworks.
            </p>
          </div>
        </section>

        <section>
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
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Work Experience</h2>
          <div className="bg-[#1c1c1c] border border-gray-700 p-4 rounded-md shadow-sm">
            <h3 className="font-bold text-lg text-white">Stealth Startup</h3>
            <p className="text-sm text-gray-400">
              Learing Currently
            </p>
            <p className="mt-2 text-gray-300 text-sm">
              Building the company from scratch, handling all React/Next.js
              frontend, integrating APIs, managing user auth with Clerk, and
              working on mobile architecture using React Native.
            </p>
          </div>
        </section>
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </div>
    </main>
  );
}
