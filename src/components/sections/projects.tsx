const projects = [
  {
    title: "Ranking Video Compiler",
    description:
      "A full-stack application for importing, organizing, reordering, trimming, and compiling ranked short-form videos.",
    image: "/images/projects/ranking-compiler.png",
    technologies: ["React", "TypeScript", "Express", "Python", "FFmpeg"],
    githubUrl: "https://github.com/your-username/your-repository",
    liveUrl: "",
  },
  {
    title: "Educational AR Applications",
    description:
      "Interactive AR experiences designed to help students understand chemistry and introductory computer science concepts.",
    image: "/images/projects/ar-app.png",
    technologies: ["Unity", "C#", "AR", "iOS"],
    githubUrl: "",
    liveUrl: "",
  },
  {
    title: "Flower Shop Game",
    description:
      "A customer-focused shop game featuring flower arrangements, character dialogue, and progressing customer stories.",
    image: "/images/projects/flower-game.png",
    technologies: ["Unity", "C#", "Game Design"],
    githubUrl: "",
    liveUrl: "",
  },
  {
    title: "Roblox Games",
    description:
      "A collection of multiplayer game systems involving progression, item mutations, shops, weather events, and interactive UI.",
    image: "/images/projects/roblox-games.png",
    technologies: ["Roblox Studio", "Luau", "Game Systems"],
    githubUrl: "",
    liveUrl: "",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-16 border-zinc-800/60 px-6 py-1"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8">
        {/* Same position and width as the About card */}
        <div className="col-span-12 rounded-2xl bg-zinc-950/80 p-6 backdrop-blur-sm sm:p-8 lg:col-start-3 lg:col-span-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              Projects
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Selected work
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
              A selection of applications, games, and interactive experiences I
              have designed and developed.
            </p>
          </div>

          <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 transition duration-300 hover:-translate-y-1 hover:border-violet-500/50"
              >
                <div className="aspect-video overflow-hidden bg-zinc-900">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>

                  <p className="mt-3 flex-1 leading-7 text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-zinc-700 bg-zinc-950/60 px-3 py-1 text-xs text-zinc-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {(project.githubUrl || project.liveUrl) && (
                    <div className="mt-6 flex flex-wrap gap-5 text-sm">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-zinc-300 transition hover:text-violet-400"
                        >
                          Source code →
                        </a>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-zinc-300 transition hover:text-violet-400"
                        >
                          Live demo →
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
