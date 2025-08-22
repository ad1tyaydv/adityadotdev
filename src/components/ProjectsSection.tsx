interface Project {
  title: string;
  year: string;
  description: string;
  image: string;
  tech: string[];
  links: { label: string; url: string }[];
}

const projects: Project[] = [
  {
    title: "Not-A-Basic-Chat-App",
    year: "2024",
    description:
      "Built a real-time messaging app with AI-powered text-to-speech, speech-to-text, and smart auto-complete using MERN, Socket.io, and Chakra UI.",
    image: "/projects/chat-app.png",
    tech: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "GSAP",
      "TailwindCSS",
      "+7 more",
    ],
    links: [
      { label: "Website", url: "#" },
      { label: "GitHub", url: "#" },
      { label: "Demo", url: "#" },
    ],
  },
  {
    title: "Zracy – AI-Powered Social Media Experiment",
    year: "2024",
    description:
      "An experimental Instagram-inspired social platform with an autonomous AI that posts content, moderates posts, and interacts with users through comments.",
    image: "/projects/zracy.png",
    tech: [
      "React Native",
      "Expo",
      "NativeWind",
      "Supabase",
      "Clerk",
      "Cloudinary",
      "+1 more",
    ],
    links: [
      { label: "GitHub", url: "#" },
      { label: "Demo", url: "#" },
    ],
  },
];

export default function ProjectsSection() {
  return (
    <section className="px-4 py-16 sm:px-6 md:px-10 max-w-6xl mx-auto text-white">
      <h2 className="text-3xl font-bold text-center mb-2">My Projects</h2>
      <p className="text-center text-gray-400 mb-10">
        From Frontend Magic to Backend Systems
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#121212] border border-gray-700 rounded-md p-4 shadow hover:shadow-lg transition duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded mb-4 h-48 object-cover w-full"
            />

            <h3 className="font-semibold text-lg">{project.title}</h3>
            <p className="text-sm text-gray-400">{project.year}</p>
            <p className="mt-2 text-sm text-gray-300 line-clamp-4">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-[#1c1c1c] border border-gray-600 text-gray-300 text-xs px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-4 flex gap-3 flex-wrap">
              {project.links.map((link, j) => (
                <a
                  key={j}
                  href={link.url}
                  target="_blank"
                  className="text-sm bg-gray-800 text-white border border-gray-600 px-3 py-1 rounded hover:bg-white hover:text-black transition"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
