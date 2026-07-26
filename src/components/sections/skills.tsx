type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    description: "Programming languages I have used across my projects.",
    skills: [
      "TypeScript",
      "JavaScript",
      "Python",
      "C#",
      "C++",
      "Java",
      "PHP",
      "SQL",
      "Luau",
    ],
  },
  {
    title: "Web Development",
    description: "Tools and frameworks used to build full-stack applications.",
    skills: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "CodeIgniter",
      "REST APIs",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Game & Interactive Development",
    description:
      "Technologies used for games, simulations, and interactive experiences.",
    skills: [
      "Unity",
      "Roblox Studio",
      "AR",
      "VR",
      "iOS",
      "Game Systems",
      "UI Development",
      "Dialogue Systems",
    ],
  },
  {
    title: "Data & Media",
    description:
      "Libraries and tools used for computer vision and media processing.",
    skills: [
      "OpenCV",
      "FFmpeg",
      "MoviePy",
      "yt-dlp",
      "PostgreSQL",
      "MySQL",
      "phpMyAdmin",
    ],
  },
  {
    title: "Development Tools",
    description:
      "Tools used for development, collaboration, testing, and deployment.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "XAMPP",
      "Vitest",
      "Cloudflare Pages",
      "Vercel",
    ],
  },
  {
    title: "Professional Skills",
    description:
      "Skills developed through internships, teaching, and team projects.",
    skills: [
      "Technical Documentation",
      "Problem Solving",
      "Team Collaboration",
      "Teaching",
      "Debugging",
      "Software Design",
      "User Experience",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 px-6 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8">
        <div className="col-span-12 rounded-2xl border border-line/40 bg-card/90 p-6 text-ink shadow-[5px_6px_0_rgba(67,42,34,0.15)] backdrop-blur-sm sm:p-8 lg:col-start-3 lg:col-span-8">
          <header>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rust">
              Skills
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Technologies & tools
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-ink-muted">
              Technologies I have used to build web applications, games,
              educational experiences, and software tools.
            </p>
          </header>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="
                  rounded-2xl border border-line/40
                  bg-card-dark/40 p-5
                  shadow-[3px_4px_0_rgba(67,42,34,0.1)]
                  transition duration-300
                  hover:-translate-y-1
                  hover:border-rust/60
                  hover:shadow-[5px_6px_0_rgba(67,42,34,0.14)]
                  sm:p-6
                "
              >
                <h3 className="text-xl font-semibold text-ink">
                  {group.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-ink-muted">
                  {group.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        rounded-full border border-line/50
                        bg-parchment/50 px-3 py-1.5
                        text-xs font-medium text-ink
                        transition
                        hover:border-rust/70
                        hover:bg-rust/10
                        hover:text-rust
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
