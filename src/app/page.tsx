import ContactSection from "../components/ContactSection";
import EducationSection from "../components/EducationSection";
import ProjectsSection from "../components/ProjectsSection";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";

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

        <Skills />
        <WorkExperience />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </div>
    </main>
  );
}
