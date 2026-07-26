import { useState } from "react";
import PixelPanel from "../ui/pixelpanel";
import ProjectPanel from "../ui/projectpanel";

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
  };

  const handleProjectToggle = (projectTitle: string) => {
    setExpandedProject((currentProject) =>
      currentProject === projectTitle ? null : projectTitle,
    );
  };

  return (
    <section id="projects" className="scroll-mt-16 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="grid grid-cols-12 gap-8">
          <PixelPanel
            className="col-span-12 lg:col-start-3 lg:col-span-8"
            contentClassName="p-5 sm:p-6"
          >
            <header>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent sm:text-sm">
                Projects
              </p>

              <h2 className="mt-2 text-2xl font-bold text-ink sm:text-3xl">
                Selected work
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base">
                Explore my applications, games, educational experiences, and
                software projects.
              </p>

              <div className="mt-4 border-t-2 border-dashed border-divider/50" />
            </header>

            {/* Filters */}
            <div className="mt-5 flex flex-wrap gap-3">
              {categories.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => handleCategoryChange(category)}
                    aria-pressed={isActive}
                    className={`
                      border-2 border-frame
                      px-3 py-1.5
                      text-xs font-bold
                      shadow-[2px_2px_0_var(--theme-shadow)]
                      transition duration-150
                      hover:-translate-x-0.5
                      hover:-translate-y-0.5
                      focus-visible:outline-none
                      focus-visible:ring-4
                      focus-visible:ring-accent/40
                      ${
                        isActive
                          ? "bg-accent text-accent-text"
                          : "bg-panel-secondary text-ink hover:bg-panel-highlight hover:text-accent"
                      }
                    `}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            <p className="mt-4 text-xs font-bold uppercase tracking-wide text-muted">
              {filteredProjects.length}{" "}
              {filteredProjects.length === 1 ? "project" : "projects"}
            </p>
          </PixelPanel>
        </div>

        {/* Project list — no fixed height or scrollbar */}
        <div className="ml-2 mt-5 grid grid-cols-12 gap-8">
          <div className="col-span-12 space-y-2 lg:col-start-3 lg:col-span-8">
            {filteredProjects.map((project) => {
              const isExpanded = expandedProject === project.title;

              const detailsId = `project-details-${project.title
                .toLowerCase()
                .replaceAll(" ", "-")
                .replaceAll("/", "-")}`;

              return (
                <ProjectPanel
                  key={project.title}
                  expanded={isExpanded}
                  className="
                    transition-transform duration-200
                    hover:-translate-x-0.5
                    hover:-translate-y-0.5
                  "
                  contentClassName="overflow-hidden"
                >
                  {/* Compact project row */}
                  <button
                    type="button"
                    onClick={() => handleProjectToggle(project.title)}
                    aria-expanded={isExpanded}
                    aria-controls={detailsId}
                    className="
                      flex w-full cursor-pointer
                      items-center gap-3
                      p-3 text-left text-ink
                      outline-none
                      focus-visible:ring-4
                      focus-visible:ring-inset
                      focus-visible:ring-accent
                      sm:p-4
                    "
                  >
                    <img
                      src={project.image}
                      alt=""
                      loading="lazy"
                      className="
                        hidden h-14 w-20 shrink-0
                        border-2 border-frame
                        bg-panel object-cover
                        shadow-[2px_2px_0_var(--theme-shadow)]
                        sm:block
                      "
                    />

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base font-bold text-ink sm:text-lg">
                          {project.title}
                        </h3>

                        <span
                          className="
                            border border-frame
                            bg-panel px-2 py-0.5
                            text-[9px] font-bold
                            uppercase tracking-wide text-muted
                          "
                        >
                          {project.category}
                        </span>
                      </div>

                      <p className="mt-1 line-clamp-1 text-xs leading-5 text-muted sm:text-sm">
                        {project.shortDescription}
                      </p>

                      <div className="mt-1.5 flex flex-wrap gap-x-2.5 gap-y-1">
                        {project.technologies.slice(0, 3).map((technology) => (
                          <span
                            key={technology}
                            className="text-[11px] font-bold text-accent"
                          >
                            {technology}
                          </span>
                        ))}

                        {project.technologies.length > 3 && (
                          <span className="text-[11px] text-muted">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <span
                      aria-hidden="true"
                      className={`
                        flex h-8 w-8 shrink-0
                        items-center justify-center
                        border-2 border-frame
                        bg-panel text-base font-bold text-accent
                        shadow-[2px_2px_0_var(--theme-shadow)]
                        transition duration-300
                        ${
                          isExpanded
                            ? "translate-x-0.5 translate-y-0.5 rotate-180 shadow-none"
                            : ""
                        }
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
                      <div className="border-t-2 border-dashed border-divider/50 p-4">
                        <div className="grid gap-4 md:grid-cols-[12rem_minmax(0,1fr)]">
                          <img
                            src={project.image}
                            alt={`${project.title} preview`}
                            loading="lazy"
                            className="
                              aspect-video w-full object-cover
                              border-2 border-frame
                              bg-panel
                              shadow-[3px_3px_0_var(--theme-shadow)]
                            "
                          />

                          <div>
                            <h4 className="text-sm font-bold uppercase tracking-wide text-ink">
                              Project overview
                            </h4>

                            <p className="mt-2 text-sm leading-6 text-muted">
                              {project.description}
                            </p>

                            <div className="mt-3 flex flex-wrap gap-2">
                              {project.technologies.map((technology) => (
                                <span
                                  key={technology}
                                  className="
                                      border border-frame
                                      bg-panel px-2 py-1
                                      text-[10px] font-bold text-ink
                                    "
                                >
                                  {technology}
                                </span>
                              ))}
                            </div>

                            {(project.githubUrl || project.liveUrl) && (
                              <div className="mt-4 flex flex-wrap gap-3">
                                {project.githubUrl && (
                                  <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="
                                      border-2 border-frame
                                      bg-panel px-3 py-1.5
                                      text-xs font-bold text-ink
                                      shadow-[2px_2px_0_var(--theme-shadow)]
                                      transition duration-150
                                      hover:-translate-x-0.5
                                      hover:-translate-y-0.5
                                      hover:bg-panel-highlight
                                      hover:text-accent
                                      active:translate-x-0.5
                                      active:translate-y-0.5
                                      active:shadow-none
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
                                      border-2 border-frame
                                      bg-accent px-3 py-1.5
                                      text-xs font-bold text-accent-text
                                      shadow-[2px_2px_0_var(--theme-shadow)]
                                      transition duration-150
                                      hover:-translate-x-0.5
                                      hover:-translate-y-0.5
                                      hover:bg-accent-hover
                                      active:translate-x-0.5
                                      active:translate-y-0.5
                                      active:shadow-none
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
                </ProjectPanel>
              );
            })}

            {filteredProjects.length === 0 && (
              <ProjectPanel contentClassName="p-6 text-center">
                <p className="text-sm text-muted">
                  No projects are currently available in this category.
                </p>
              </ProjectPanel>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
