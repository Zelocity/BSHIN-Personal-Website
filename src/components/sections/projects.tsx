import { useRef, useState } from "react";
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
  featured: boolean;
};

type ProjectsView = "featured" | "all";

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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: false,
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
    featured: false,
  },
];

const categories = ["All", "Web", "Games", "AR / VR", "Computer Vision"];

function Projects() {
  const [projectsView, setProjectsView] = useState<ProjectsView>("featured");

  const [activeCategory, setActiveCategory] = useState("All");

  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const sectionRef = useRef<HTMLElement | null>(null);

  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const handleViewChange = (view: ProjectsView) => {
    setProjectsView(view);
    setExpandedProject(null);

    if (view === "all") {
      setActiveCategory("All");
    }

    window.requestAnimationFrame(() => {
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

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
    <section ref={sectionRef} id="projects" className="scroll-mt-16 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        {/* Shared heading */}
        <div className="grid grid-cols-12 gap-8">
          <PixelPanel
            className="col-span-12 lg:col-start-3 lg:col-span-8"
            contentClassName="p-5 sm:p-6"
          >
            <header>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent sm:text-sm">
                Projects
              </p>

              <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-ink sm:text-3xl">
                    {projectsView === "featured"
                      ? "Featured work"
                      : "Project archive"}
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base">
                    {projectsView === "featured"
                      ? "A selection of projects that best represent my work in software, games, and interactive technology."
                      : "Browse my complete collection of applications, games, educational experiences, and software projects."}
                  </p>
                </div>

                {/* View switcher */}
                <div className="flex shrink-0 gap-2">
                  <button
                    type="button"
                    onClick={() => handleViewChange("featured")}
                    aria-pressed={projectsView === "featured"}
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
                        projectsView === "featured"
                          ? "bg-accent text-accent-text"
                          : "bg-panel-secondary text-ink hover:bg-panel-highlight hover:text-accent"
                      }
                    `}
                  >
                    Featured
                  </button>

                  <button
                    type="button"
                    onClick={() => handleViewChange("all")}
                    aria-pressed={projectsView === "all"}
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
                        projectsView === "all"
                          ? "bg-accent text-accent-text"
                          : "bg-panel-secondary text-ink hover:bg-panel-highlight hover:text-accent"
                      }
                    `}
                  >
                    All projects
                  </button>
                </div>
              </div>

              <div className="mt-4 border-t-2 border-dashed border-divider/50" />

              {/* Category filters */}
              {projectsView === "all" && (
                <div className="mt-5">
                  <div className="flex flex-wrap gap-3">
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
                </div>
              )}
            </header>
          </PixelPanel>
        </div>

        {/* Featured projects */}
        {projectsView === "featured" && (
          <>
            <div className="mt-6 grid grid-cols-12 gap-8">
              <div
                className="
                  col-span-12 grid items-stretch gap-4
                  md:auto-rows-fr md:grid-cols-3
                  lg:col-start-3 lg:col-span-8
                "
              >
                {featuredProjects.map((project) => (
                  <ProjectPanel
                    key={project.title}
                    className="
                      h-full
                      transition-transform duration-200
                      hover:-translate-x-0.5
                      hover:-translate-y-0.5
                    "
                    contentClassName="h-full"
                  >
                    <article className="flex h-full flex-col p-4">
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

                      <div className="mt-4 flex flex-wrap items-start justify-between gap-2">
                        <h3 className="text-base font-bold leading-5 text-ink">
                          {project.title}
                        </h3>

                        <span
                          className="
                            border border-frame
                            bg-panel px-2 py-0.5
                            text-[9px] font-bold uppercase
                            tracking-wide text-muted
                          "
                        >
                          {project.category}
                        </span>
                      </div>

                      <p className="mt-2 text-sm leading-5 text-muted">
                        {project.shortDescription}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 3).map((technology) => (
                          <span
                            key={technology}
                            className="
                                border border-frame
                                bg-panel px-2 py-0.5
                                text-[10px] font-bold text-ink
                              "
                          >
                            {technology}
                          </span>
                        ))}

                        {project.technologies.length > 3 && (
                          <span className="px-1 py-0.5 text-[10px] text-muted">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {(project.githubUrl || project.liveUrl) && (
                        <div className="mt-auto flex flex-wrap gap-2 pt-4">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="
                                border-2 border-frame
                                bg-panel px-2.5 py-1.5
                                text-[11px] font-bold text-ink
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
                              Source ↗
                            </a>
                          )}

                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="
                                border-2 border-frame
                                bg-accent px-2.5 py-1.5
                                text-[11px] font-bold text-accent-text
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
                              Demo ↗
                            </a>
                          )}
                        </div>
                      )}
                    </article>
                  </ProjectPanel>
                ))}
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={() => handleViewChange("all")}
                className="
                  border-2 border-frame
                  bg-accent px-5 py-2.5
                  text-sm font-bold text-accent-text
                  shadow-[4px_4px_0_var(--theme-shadow)]
                  transition duration-150
                  hover:-translate-x-0.5
                  hover:-translate-y-0.5
                  hover:bg-accent-hover
                  hover:shadow-[6px_6px_0_var(--theme-shadow)]
                  focus-visible:outline-none
                  focus-visible:ring-4
                  focus-visible:ring-accent/40
                  active:translate-x-1
                  active:translate-y-1
                  active:shadow-none
                "
              >
                Browse all projects ↓
              </button>
            </div>
          </>
        )}

        {/* All projects */}
        {projectsView === "all" && (
          <>
            <div className="mt-6 grid grid-cols-12 gap-8">
              <div className="col-span-12 space-y-3 lg:col-start-3 lg:col-span-8">
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
                      contentClassName="overflow-hidden"
                    >
                      {/* Project summary */}
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
                                text-[9px] font-bold uppercase
                                tracking-wide text-muted
                              "
                            >
                              {project.category}
                            </span>
                          </div>

                          <p className="mt-1 line-clamp-1 text-xs leading-5 text-muted sm:text-sm">
                            {project.shortDescription}
                          </p>

                          <div className="mt-1.5 flex flex-wrap gap-x-2.5 gap-y-1">
                            {project.technologies
                              .slice(0, 3)
                              .map((technology) => (
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

                      {/* Project details */}
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

            {/* Return to featured button */}
            <div className="mt-7 flex justify-center">
              <button
                type="button"
                onClick={() => handleViewChange("featured")}
                className="
                  border-2 border-frame
                  bg-panel-secondary px-5 py-2.5
                  text-sm font-bold text-ink
                  shadow-[4px_4px_0_var(--theme-shadow)]
                  transition duration-150
                  hover:-translate-x-0.5
                  hover:-translate-y-0.5
                  hover:bg-panel-highlight
                  hover:text-accent
                  hover:shadow-[6px_6px_0_var(--theme-shadow)]
                  focus-visible:outline-none
                  focus-visible:ring-4
                  focus-visible:ring-accent/40
                  active:translate-x-1
                  active:translate-y-1
                  active:shadow-none
                "
              >
                ↑ Back to featured projects
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Projects;
