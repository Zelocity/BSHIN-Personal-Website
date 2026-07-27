import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { projectCategories, projects } from "../../config/projects";

import type { Project, ProjectStatus } from "../../config/projects";

import PixelPanel from "../ui/pixelpanel";
import ProjectPanel from "../ui/projectpanel";

type ProjectsView = "featured" | "all";

type ProjectStatusBadgeProps = {
  status: ProjectStatus;
  compact?: boolean;
};

function ProjectStatusBadge({
  status,
  compact = false,
}: ProjectStatusBadgeProps) {
  const isCompleted = status === "completed";

  return (
    <span
      className={`
        border font-bold uppercase tracking-wide
        ${compact ? "px-2 py-0.5 text-[9px]" : "px-2 py-1 text-[9px]"}
        ${
          isCompleted
            ? "border-emerald-950 bg-emerald-700 text-emerald-50"
            : "border-amber-950 bg-amber-400 text-amber-950"
        }
      `}
    >
      {isCompleted ? "Completed" : "In progress"}
    </span>
  );
}

type TechnologyTagsProps = {
  technologies: string[];
  limit?: number;
};

function TechnologyTags({ technologies, limit }: TechnologyTagsProps) {
  const visibleTechnologies =
    limit === undefined ? technologies : technologies.slice(0, limit);

  const remainingCount =
    limit === undefined ? 0 : Math.max(technologies.length - limit, 0);

  return (
    <div className="flex flex-wrap gap-1.5">
      {visibleTechnologies.map((technology) => (
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

      {remainingCount > 0 && (
        <span className="flex items-center px-1 py-1 text-[10px] font-bold text-muted">
          +{remainingCount}
        </span>
      )}
    </div>
  );
}

type ExternalProjectLinksProps = {
  project: Project;
  compact?: boolean;
};

function ExternalProjectLinks({
  project,
  compact = false,
}: ExternalProjectLinksProps) {
  if (project.links.length === 0) {
    return null;
  }

  return (
    <>
      {project.links.map((link) => (
        <a
          key={`${project.id}-${link.label}`}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            border-2 border-frame
            bg-panel font-bold text-ink
            shadow-[2px_2px_0_var(--theme-shadow)]
            transition duration-150
            hover:-translate-x-0.5
            hover:-translate-y-0.5
            hover:bg-panel-highlight
            hover:text-accent
            active:translate-x-0.5
            active:translate-y-0.5
            active:shadow-none
            ${compact ? "px-2.5 py-1.5 text-[11px]" : "px-3 py-1.5 text-xs"}
          `}
        >
          {link.label} ↗
        </a>
      ))}
    </>
  );
}

function Projects() {
  const [projectsView, setProjectsView] = useState<ProjectsView>("featured");

  const [activeCategory, setActiveCategory] = useState("All");

  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(
    null,
  );

  const sectionRef = useRef<HTMLElement | null>(null);

  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const featuredGridClasses =
    featuredProjects.length === 1
      ? "md:grid-cols-1"
      : featuredProjects.length === 2
        ? "md:grid-cols-2"
        : "md:grid-cols-3";

  const scrollToProjects = () => {
    window.requestAnimationFrame(() => {
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const handleViewChange = (view: ProjectsView) => {
    setProjectsView(view);
    setExpandedProjectId(null);

    if (view === "all") {
      setActiveCategory("All");
    }

    scrollToProjects();
  };

  const handleCategoryChange = (category: string) => {
    if (category === activeCategory) {
      return;
    }

    setActiveCategory(category);
    setExpandedProjectId(null);
  };

  const handleProjectToggle = (projectId: string) => {
    setExpandedProjectId((currentProjectId) =>
      currentProjectId === projectId ? null : projectId,
    );
  };

  return (
    <section ref={sectionRef} id="projects" className="scroll-mt-16 px-6 py-10">
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

              <div className="mt-2 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
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

              <div className="mt-5 border-t-2 border-dashed border-divider/50" />

              {/* Category filters */}
              {projectsView === "all" && (
                <div className="mt-5">
                  <div className="flex flex-wrap gap-3">
                    {projectCategories.map((category) => {
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
            <div className="mt-7 grid grid-cols-12 gap-8">
              <div
                className={`
                  col-span-12 grid items-stretch gap-5
                  lg:col-start-3 lg:col-span-8
                  ${featuredGridClasses}
                `}
              >
                {featuredProjects.map((project) => (
                  <ProjectPanel
                    key={project.id}
                    className="
                      group h-full
                      transition-transform duration-200
                      hover:-translate-x-1
                      hover:-translate-y-1
                    "
                    contentClassName="h-full"
                  >
                    <article className="flex h-full flex-col p-4 sm:p-5">
                      {/* Project image */}
                      <div
                        className="
                          relative overflow-hidden
                          border-2 border-frame
                          bg-panel
                          shadow-[3px_3px_0_var(--theme-shadow)]
                        "
                      >
                        <img
                          src={project.image}
                          alt={project.imageAlt}
                          loading="lazy"
                          className="
                            aspect-video w-full object-cover
                            transition-transform duration-300
                            group-hover:scale-[1.03]
                          "
                        />

                        <div className="absolute right-2 top-2">
                          <ProjectStatusBadge status={project.status} compact />
                        </div>
                      </div>

                      {/* Category and date */}
                      <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                        <span
                          className="
                            border border-frame
                            bg-panel px-2 py-1
                            text-[9px] font-bold uppercase
                            tracking-wide text-muted
                          "
                        >
                          {project.category}
                        </span>

                        <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-accent">
                          {project.date}
                        </span>
                      </div>

                      {/* Project title */}
                      <h3
                        className="
                          mt-3 text-lg font-bold leading-6 text-ink
                          transition-colors duration-200
                          group-hover:text-accent
                        "
                      >
                        {project.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-muted">
                        {project.shortDescription}
                      </p>

                      {/* Always-visible featured description */}
                      <div className="mt-4 border-t border-dashed border-divider/50 pt-4">
                        <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-accent">
                          About this project
                        </h4>

                        <p className="mt-2 text-sm leading-6 text-muted">
                          {project.description}
                        </p>
                      </div>

                      {/* Technology tags and links */}
                      <div className="mt-auto pt-5">
                        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
                          Technologies
                        </p>

                        <TechnologyTags
                          technologies={project.technologies}
                          limit={4}
                        />

                        <div
                          className="
                            mt-4 flex flex-wrap items-center gap-2
                            border-t border-dashed
                            border-divider/50 pt-4
                          "
                        >
                          <Link
                            to={`/projects/${project.slug}`}
                            className="
                              border-2 border-frame
                              bg-accent px-3 py-2
                              text-xs font-bold
                              text-accent-text
                              shadow-[2px_2px_0_var(--theme-shadow)]
                              transition duration-150
                              hover:-translate-x-0.5
                              hover:-translate-y-0.5
                              hover:bg-accent-hover
                              hover:shadow-[3px_3px_0_var(--theme-shadow)]
                              active:translate-x-0.5
                              active:translate-y-0.5
                              active:shadow-none
                            "
                          >
                            View case study →
                          </Link>

                          <ExternalProjectLinks project={project} compact />
                        </div>
                      </div>
                    </article>
                  </ProjectPanel>
                ))}

                {featuredProjects.length === 0 && (
                  <ProjectPanel
                    className="md:col-span-3"
                    contentClassName="p-6 text-center"
                  >
                    <p className="text-sm text-muted">
                      No featured projects have been selected yet.
                    </p>
                  </ProjectPanel>
                )}
              </div>
            </div>

            <div className="mt-8 flex justify-center">
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
            <div className="mt-7 grid grid-cols-12 gap-8">
              <div className="col-span-12 space-y-4 lg:col-start-3 lg:col-span-8">
                {filteredProjects.map((project) => {
                  const isExpanded = expandedProjectId === project.id;

                  const detailsId = `project-details-${project.id}`;

                  return (
                    <ProjectPanel
                      key={project.id}
                      className="
                        group
                        transition-transform duration-200
                        hover:-translate-x-0.5
                        hover:-translate-y-0.5
                      "
                      contentClassName="overflow-hidden"
                    >
                      {/* Compact project row */}
                      <button
                        type="button"
                        onClick={() => handleProjectToggle(project.id)}
                        aria-expanded={isExpanded}
                        aria-controls={detailsId}
                        className="
                          flex w-full cursor-pointer
                          items-center gap-4
                          p-4 text-left text-ink
                          transition-colors duration-200
                          hover:bg-panel-highlight/10
                          focus-visible:outline-none
                          focus-visible:ring-2
                          focus-visible:ring-inset
                          focus-visible:ring-frame
                          sm:p-5
                        "
                      >
                        <img
                          src={project.image}
                          alt=""
                          loading="lazy"
                          className="
                            hidden h-16 w-24 shrink-0
                            border-2 border-frame
                            bg-panel object-cover
                            shadow-[2px_2px_0_var(--theme-shadow)]
                            transition-transform duration-200
                            group-hover:-translate-y-0.5
                            sm:block
                          "
                        />

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3
                              className="
                                text-base font-bold text-ink
                                transition-colors duration-200
                                group-hover:text-accent
                                sm:text-lg
                              "
                            >
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

                            <ProjectStatusBadge
                              status={project.status}
                              compact
                            />
                          </div>

                          <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-accent">
                            {project.date}
                          </p>

                          <p className="mt-1 line-clamp-1 text-xs leading-5 text-muted sm:text-sm">
                            {project.shortDescription}
                          </p>

                          <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
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
                            bg-panel font-bold text-accent
                            shadow-[2px_2px_0_var(--theme-shadow)]
                            transition duration-300
                            group-hover:-translate-x-0.5
                            group-hover:-translate-y-0.5
                            group-hover:bg-panel-highlight
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

                      {/* Expandable project details */}
                      <div
                        id={detailsId}
                        className={`
                          grid transition-[grid-template-rows]
                          duration-500 ease-in-out
                          ${isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
                        `}
                      >
                        <div className="overflow-hidden">
                          <div
                            className="
                              border-t-2 border-dashed
                              border-divider/50
                              px-4 pb-5 pt-4
                              sm:px-5
                            "
                          >
                            <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-accent">
                              About this project
                            </h4>

                            <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">
                              {project.description}
                            </p>

                            <div className="mt-4">
                              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
                                Technologies
                              </p>

                              <TechnologyTags
                                technologies={project.technologies}
                              />
                            </div>

                            <div
                              className="
                                mt-5 flex flex-wrap gap-3
                                border-t border-dashed
                                border-divider/50 pt-4
                              "
                            >
                              <Link
                                to={`/projects/${project.slug}`}
                                className="
                                  border-2 border-frame
                                  bg-accent px-3 py-1.5
                                  text-xs font-bold
                                  text-accent-text
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
                                Full case study →
                              </Link>

                              <ExternalProjectLinks project={project} />
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

            <div className="mt-8 flex justify-center">
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
