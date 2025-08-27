import ContactSection from "../components/ContactSection";
import ProjectsSection from "../components/ProjectsSection";
import About from "../components/about";
import IntroSection from "../components/Intro";
import LearningSection from "../components/LearningSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white px-4 py-8 sm:px-6 md:px-10 flex justify-center">
      <div className="w-full max-w-2xl space-y-10 text-black border border-gray-200 rounded-xl px-6 py-10 shadow-md">
        <IntroSection />
        <About />
        <ProjectsSection />
        <LearningSection />
        <ContactSection />
      </div>
    </main>
  );
}
