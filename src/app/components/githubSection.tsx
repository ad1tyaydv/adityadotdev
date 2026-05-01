import { GitHubCalendar } from "react-github-calendar";

export default async function ProofOfWorkSection() {
  return (
    <section className="py-6 px-4 text-left bg-white text-black dark:bg-[#19181A] dark:text-white transition-colors duration-300">
      <h2 className="text-2xl font-[Bebas Neue] font-semibold mb-2">Proof of Work</h2>

      <div className="flex justify-start overflow-hidden">
        <GitHubCalendar
          username="ad1tyaydv"
          blockSize={14}
          blockMargin={4}
          fontSize={14}
          theme={{
            light: ['#f0f0f0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'],
            dark: ['#161B22', '#0E4429', '#006D32', '#26A641', '#39D353'],
          }}
          colorScheme="dark"
        />
      </div>
    </section>
  );
}