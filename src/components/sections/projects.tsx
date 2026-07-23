const projects = [
  {
    title: "Ranking Video Compiler",
    description:
      "A full-stack application for importing, arranging, trimming, and compiling ranked short-form video clips.",
    technologies: ["React", "TypeScript", "Express", "Python", "FFmpeg"],
    image: "/images/projects/ranking-compiler.png",
    githubUrl: "https://github.com/your-username/your-repository",
    liveUrl: "",
  },
  {
    title: "Educational AR Applications",
    description:
      "Interactive augmented-reality experiences designed to help students understand chemistry and computer science concepts.",
    technologies: ["Unity", "C#", "AR", "iOS"],
    image: "/images/projects/ar-app.png",
    githubUrl: "",
    liveUrl: "",
  },
  {
    title: "Flower Shop Game",
    description:
      "A customer-focused Unity game featuring flower arrangements, character dialogue, and progressing customer stories.",
    technologies: ["Unity", "C#", "Game Design"],
    image: "/images/projects/flower-game.png",
    githubUrl: "",
    liveUrl: "",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen scroll-mt-16 border-t border-zinc-900 bg-zinc-900/20 px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
          Projects
        </p>

        <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Selected things I&apos;ve built.
          </h2>

          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            View all on GitHub →
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition hover:-translate-y-1 hover:border-zinc-600"
            >
              <div className="aspect-video overflow-hidden bg-zinc-900">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>

                <p className="mt-3 flex-1 leading-7 text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-5 text-sm">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-300 transition hover:text-violet-400"
                    >
                      GitHub →
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
