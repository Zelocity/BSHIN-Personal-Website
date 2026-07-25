const experiences = [
  {
    company: "Tatum Games",
    role: "Software Development Intern",
    date: "2026 – Present",
    location: "Remote",
    description:
      "Contributed to the MIKROS ecosystem through web development, technical documentation, research, and platform integration tasks.",
    responsibilities: [
      "Developed and updated PHP and CodeIgniter documentation pages.",
      "Worked with Git, GitHub, APIs, databases, and local XAMPP environments.",
      "Created technical documentation for MIKROS Bots and MIKROS MCP.",
    ],
    technologies: ["PHP", "CodeIgniter", "Git", "MySQL", "JavaScript"],
  },
  {
    company: "UC Riverside XCITE Center",
    role: "Undergraduate Developer",
    date: "Add dates",
    location: "Riverside, California",
    description:
      "Designed and developed educational AR and VR applications used to teach chemistry, computer science, and theater concepts.",
    responsibilities: [
      "Developed interactive Unity applications for iOS and virtual reality.",
      "Collaborated with professors to turn course concepts into interactive experiences.",
      "Supported Unity and programming workshops for student summer camps.",
    ],
    technologies: ["Unity", "C#", "AR", "VR", "iOS"],
  },
  {
    company: "Black Rocket Productions",
    role: "Technology Instructor",
    date: "Add dates",
    location: "Add location",
    description:
      "Taught students programming, game development, and creative technology through hands-on projects.",
    responsibilities: [
      "Guided students through programming and game-development activities.",
      "Helped students troubleshoot technical and design problems.",
      "Maintained an approachable and collaborative learning environment.",
    ],
    technologies: ["Teaching", "Game Development", "Programming"],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-16 border-t border-zinc-800/60 px-6 py-20"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8">
        <div className="col-span-12 overflow-visible rounded-2xl bg-zinc-950/80 p-6 backdrop-blur-sm sm:p-8 lg:col-start-3 lg:col-span-8">
          <header>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              Experience
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Work experience
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
              Roles where I have developed software, created interactive
              experiences, and helped others learn technology.
            </p>
          </header>

          {/* Timeline */}
          <div className="relative mt-12">
            {/* Vertical dashed line */}
            <div
              aria-hidden="true"
              className="
                absolute bottom-8 top-8
                -left-6 border-l-2 border-dashed border-zinc-700
                sm:-left-8
                md:-left-[3.75rem]
              "
            />

            {experiences.map((experience, index) => {
              const isLast = index === experiences.length - 1;

              return (
                <article
                  key={`${experience.company}-${experience.role}`}
                  className={`relative ${isLast ? "" : "pb-12"}`}
                >
                  {/* Desktop date */}
                  <div className="absolute -left-[13rem] top-5 hidden w-32 text-right md:block">
                    <p className="text-sm font-semibold text-zinc-200">
                      {experience.date}
                    </p>

                    <p className="mt-1 text-sm text-zinc-500">
                      {experience.location}
                    </p>
                  </div>

                  {/* Timeline dot */}
                  <div
                    aria-hidden="true"
                    className="
                      absolute -left-6 top-8 z-10
                      flex h-5 w-5 -translate-x-1/2
                      items-center justify-center rounded-full
                      border-2 border-violet-400 bg-zinc-950
                      shadow-[0_0_16px_rgba(167,139,250,0.55)]
                      sm:-left-8
                      md:-left-[3.75rem]
                    "
                  >
                    <span className="h-2 w-2 rounded-full bg-violet-400" />
                  </div>

                  {/* Connector from the timeline to the card */}
                  <div
                    aria-hidden="true"
                    className="
                      absolute -left-6 top-[42px]
                      w-6 border-t border-dashed border-violet-400/70
                      sm:-left-8 sm:w-8
                      md:-left-[3.75rem] md:w-7
                    "
                  />

                  {/* Experience card */}
                  <div
                    className="
                    rounded-2xl border border-zinc-800
                    bg-zinc-900/60 p-6
                    transition duration-300
                    hover:border-violet-500/50
                    md:-mx-8 md:p-8
  "
                  >
                    {/* Mobile date */}
                    <div className="mb-4 md:hidden">
                      <p className="text-sm font-semibold text-zinc-300">
                        {experience.date}
                      </p>

                      <p className="mt-1 text-sm text-zinc-500">
                        {experience.location}
                      </p>
                    </div>

                    <h3 className="text-xl font-semibold text-white">
                      {experience.role}
                    </h3>

                    <p className="mt-1 font-medium text-violet-400">
                      {experience.company}
                    </p>

                    <p className="mt-5 leading-7 text-zinc-400">
                      {experience.description}
                    </p>

                    <ul className="mt-5 space-y-3">
                      {experience.responsibilities.map((responsibility) => (
                        <li
                          key={responsibility}
                          className="flex gap-3 leading-7 text-zinc-400"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400"
                          />

                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-zinc-700 bg-zinc-950/60 px-3 py-1 text-xs text-zinc-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
