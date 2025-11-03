import ContactSection from "../components/ContactSection";
import ProjectsSection from "../components/ProjectsSection";
import About from "../components/about";
import IntroSection from "../components/Intro";
import LearningSection from "../components/LearningSection";
import GitHubSection from "../components/githubSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background px-4 py-8 sm:px-6 md:px-10 flex justify-center text-foreground dark:bg-[#19181A] transition-colors duration-300">
      <div className="w-full max-w-2xl space-y-10 px-6 py-10 shadow-md dark:bg-[#19181A] transition-colors duration-300">
        <IntroSection />
        <About />
        <GitHubSection />
        <ProjectsSection />
        <LearningSection />
        <ContactSection />
      </div>
    </main>
  );
}
