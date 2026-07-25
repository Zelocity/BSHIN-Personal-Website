import { useRef, useState } from "react";

type Project = {
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
};

const projects: Project[] = [
  {
    title: "Ranking Video Compiler",
    shortDescription:
      "Create and organize ranked short-form video compilations.",
    description:
      "A full-stack application for importing short-form videos, organizing and reordering clips, trimming footage, and compiling the results into a finished ranking video.",
    image: "/images/projects/ranking-compiler.png",
    category: "Web",
    technologies: ["React", "TypeScript", "Express", "Python", "FFmpeg"],
    githubUrl: "https://github.com/your-username/your-repository",
    liveUrl: "",
  },
  {
    title: "Educational AR Applications",
    shortDescription:
      "Interactive augmented reality experiences for classroom learning.",
    description:
      "A collection of augmented reality applications designed to help students understand chemistry and introductory computer science concepts through interactive simulations.",
    image: "/images/projects/ar-app.png",
    category: "AR / VR",
    technologies: ["Unity", "C#", "AR", "iOS"],
    githubUrl: "",
    liveUrl: "",
  },
  {
    title: "Flower Shop Game",
    shortDescription:
      "A narrative flower-arranging shop game with customer stories.",
    description:
      "A customer-focused shop game featuring flower arrangements, character dialogue, customer preferences, and individual storylines that progress as the player continues playing.",
    image: "/images/projects/flower-game.png",
    category: "Games",
    technologies: ["Unity", "C#", "Game Design"],
    githubUrl: "",
    liveUrl: "",
  },
  {
    title: "Roblox Games",
    shortDescription:
      "Multiplayer progression and collection-based game systems.",
    description:
      "A collection of Roblox projects involving progression systems, collectible items, mutations, shops, weather events, multiplayer interactions, and custom user interfaces.",
    image: "/images/projects/roblox-games.png",
    category: "Games",
    technologies: ["Roblox Studio", "Luau", "Game Systems"],
    githubUrl: "",
    liveUrl: "",
  },
  {
    title: "Autonomous Crisp Car",
    shortDescription: "Computer vision for autonomous vehicle navigation.",
    description:
      "A senior design project that used OpenCV for lane following, traffic-sign detection, and autonomous vehicle behavior.",
    image: "/images/projects/crisp-car.png",
    category: "Computer Vision",
    technologies: ["Python", "OpenCV", "Computer Vision"],
    githubUrl: "",
    liveUrl: "",
  },
];

const categories = ["All", "Web", "Games", "AR / VR", "Computer Vision"];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const projectListRef = useRef<HTMLDivElement | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const handleCategoryChange = (category: string) => {
    if (category === activeCategory) {
      return;
    }

    setActiveCategory(category);
    setExpandedProject(null);

    projectListRef.current?.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  const handleProjectToggle = (projectTitle: string) => {
    setExpandedProject((currentProject) =>
      currentProject === projectTitle ? null : projectTitle,
    );
  };

  return (
    <section id="projects" className="scroll-mt-16 px-6 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8">
        <div className="col-span-12 rounded-2xl bg-zinc-950/80 p-6 backdrop-blur-sm sm:p-8 lg:col-start-3 lg:col-span-8">
          <header>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              Projects
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Selected work
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
              Explore my applications, games, educational experiences, and
              software projects.
            </p>
          </header>

          {/* Category filters */}
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryChange(category)}
                  className={`
                    rounded-full border px-4 py-2 text-sm
                    transition duration-200
                    ${
                      isActive
                        ? "border-violet-400 bg-violet-500/15 text-violet-300"
                        : "border-zinc-700 bg-zinc-900/60 text-zinc-400 hover:border-zinc-500 hover:text-white"
                    }
                  `}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <p className="mt-5 text-sm text-zinc-500">
            {filteredProjects.length}{" "}
            {filteredProjects.length === 1 ? "project" : "projects"}
          </p>

          {/* Fixed-height project list */}
          <div
            ref={projectListRef}
            className="
            mt-5 space-y-3
            md:h-[39rem]
            md:overflow-y-scroll
            md:overscroll-contain
            md:pr-3
            [scrollbar-gutter:stable]
            [overflow-anchor:none]

            [scrollbar-width:thin]
            [scrollbar-color:#8b5cf6_#18181b]

            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:rounded-full
            [&::-webkit-scrollbar-track]:bg-zinc-900/70

            [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-thumb]:border-2
            [&::-webkit-scrollbar-thumb]:border-solid
            [&::-webkit-scrollbar-thumb]:border-zinc-900
            [&::-webkit-scrollbar-thumb]:bg-violet-500/80

            [&::-webkit-scrollbar-thumb:hover]:bg-violet-400"
          >
            {filteredProjects.map((project) => {
              const isExpanded = expandedProject === project.title;
              const detailsId = `project-details-${project.title
                .toLowerCase()
                .replaceAll(" ", "-")
                .replaceAll("/", "-")}`;

              return (
                <article
                  key={project.title}
                  className={`
                    overflow-hidden rounded-2xl border
                    bg-zinc-900/60 transition duration-300
                    ${
                      isExpanded
                        ? "border-violet-500/50"
                        : "border-zinc-800 hover:border-zinc-700"
                    }
                  `}
                >
                  {/* Compact project row */}
                  <button
                    type="button"
                    onClick={() => handleProjectToggle(project.title)}
                    aria-expanded={isExpanded}
                    aria-controls={detailsId}
                    className="
                      flex w-full cursor-pointer items-center
                      gap-4 p-4 text-left
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-inset
                      focus-visible:ring-violet-400
                    "
                  >
                    <img
                      src={project.image}
                      alt=""
                      loading="lazy"
                      className="
                        hidden h-20 w-28 shrink-0 rounded-xl
                        border border-zinc-800
                        bg-zinc-950 object-cover
                        sm:block
                      "
                    />

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-semibold text-white">
                          {project.title}
                        </h3>

                        <span className="rounded-full border border-zinc-700 bg-zinc-950/70 px-2.5 py-1 text-xs text-zinc-400">
                          {project.category}
                        </span>
                      </div>

                      <p className="mt-1 line-clamp-1 text-sm text-zinc-400">
                        {project.shortDescription}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                        {project.technologies.slice(0, 3).map((technology) => (
                          <span
                            key={technology}
                            className="text-xs text-zinc-500"
                          >
                            {technology}
                          </span>
                        ))}

                        {project.technologies.length > 3 && (
                          <span className="text-xs text-zinc-600">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <span
                      aria-hidden="true"
                      className={`
                        flex h-9 w-9 shrink-0 items-center
                        justify-center rounded-full
                        border border-zinc-700
                        text-lg text-violet-400
                        transition duration-300
                        ${isExpanded ? "rotate-180 bg-violet-500/10" : ""}
                      `}
                    >
                      ↓
                    </span>
                  </button>

                  {/* Expandable details */}
                  <div
                    id={detailsId}
                    className={`
                      grid transition-[grid-template-rows]
                      duration-500 ease-in-out
                      ${isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
                    `}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-zinc-800 p-5 sm:p-6">
                        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
                          <img
                            src={project.image}
                            alt={`${project.title} preview`}
                            loading="lazy"
                            className="
                              aspect-video w-full rounded-xl
                              border border-zinc-800
                              bg-zinc-950 object-cover
                            "
                          />

                          <div>
                            <h4 className="text-lg font-semibold text-white">
                              Project overview
                            </h4>

                            <p className="mt-3 leading-7 text-zinc-400">
                              {project.description}
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2">
                              {project.technologies.map((technology) => (
                                <span
                                  key={technology}
                                  className="
                                    rounded-full border border-zinc-700
                                    bg-zinc-950/70 px-3 py-1
                                    text-xs text-zinc-300
                                  "
                                >
                                  {technology}
                                </span>
                              ))}
                            </div>

                            {(project.githubUrl || project.liveUrl) && (
                              <div className="mt-6 flex flex-wrap gap-3">
                                {project.githubUrl && (
                                  <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="
                                      rounded-lg border border-zinc-700
                                      bg-zinc-950/60 px-4 py-2
                                      text-sm font-medium text-zinc-300
                                      transition
                                      hover:border-violet-400
                                      hover:text-violet-300
                                    "
                                  >
                                    Source code ↗
                                  </a>
                                )}

                                {project.liveUrl && (
                                  <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="
                                      rounded-lg border border-violet-500/40
                                      bg-violet-500/10 px-4 py-2
                                      text-sm font-medium text-violet-300
                                      transition
                                      hover:border-violet-400
                                      hover:bg-violet-500/20
                                    "
                                  >
                                    Live demo ↗
                                  </a>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}

            {filteredProjects.length === 0 && (
              <div className="rounded-2xl border border-dashed border-zinc-700 p-10 text-center">
                <p className="text-zinc-400">
                  No projects are currently available in this category.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
