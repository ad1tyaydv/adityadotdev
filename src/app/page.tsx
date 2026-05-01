import LearningSection from "./components/LearningSection";
import { GitHubCalendar } from "react-github-calendar";
import OnekoCat from "./components/CatFollower";
import Intro from "./components/Intro";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import About from "./components/about";

export default function Home() {
  return (
    <main className="min-h-screen bg-background px-4 py-8 sm:px-6 md:px-10 flex justify-center text-foreground dark:bg-[#19181A] transition-colors duration-300">
      <div className="w-full max-w-2xl space-y-10 px-6 py-10 shadow-md dark:bg-[#19181A] transition-colors duration-300">
        <div className="relative">
          <OnekoCat />
        </div>
        <Intro />
        <About />
        <GitHubCalendar username={"ad1tyaydv"} />
        <ProjectsSection />
        <LearningSection />
        <ContactSection />
      </div>
    </main>
  );
}
