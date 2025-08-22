import ContactSection from "../components/ContactSection";
import EducationSection from "../components/EducationSection";
import ProjectsSection from "../components/ProjectsSection";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import IntroSection from "../components/Intro";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0e0e0e] px-4 py-8 sm:px-6 md:px-10 flex justify-center">
      <div className="w-full max-w-2xl space-y-10 text-white">

        <IntroSection />
        <Skills />
        <WorkExperience />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </div>
    </main>
  );
}
