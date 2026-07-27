import type { Project } from "../../config/projects";

import ExternalProjectLinks from "../ui/externalprojectlinks";
import PixelPanel from "../ui/pixelpanel";
import ProjectStatusBadge from "../ui/projectstatusbadge";
import TechnologyTags from "../ui/technologytags";

import ProjectDetailList from "./projectdetaillist";

type ProjectDetailPanelProps = {
  project: Project;
  onBack: () => void;
};

function ProjectDetailPanel({ project, onBack }: ProjectDetailPanelProps) {
  return (
    <div className="pb-10">
      {/* Top back button */}
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-start-3 lg:col-span-8">
          <button
            type="button"
            onClick={onBack}
            className="
              border-2 border-frame
              bg-panel-secondary px-4 py-2
              text-sm font-bold text-ink
              shadow-[3px_3px_0_var(--theme-shadow)]
              transition duration-150
              hover:-translate-x-0.5
              hover:-translate-y-0.5
              hover:bg-panel-highlight
              hover:text-accent
              active:translate-x-0.5
              active:translate-y-0.5
              active:shadow-none
              focus-visible:outline-none
              focus-visible:ring-4
              focus-visible:ring-accent/40
            "
          >
            ← Back to projects
          </button>
        </div>
      </div>

      {/* Project heading */}
      <div className="mt-6 grid grid-cols-12 gap-8">
        <PixelPanel
          className="col-span-12 lg:col-start-3 lg:col-span-8"
          contentClassName="p-5 sm:p-8"
        >
          <header>
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="
                  border border-frame
                  bg-panel-secondary px-2 py-1
                  text-[10px] font-bold uppercase
                  tracking-wide text-muted
                "
              >
                {project.category}
              </span>

              <ProjectStatusBadge status={project.status} />

              <span className="text-xs font-bold uppercase tracking-wide text-accent">
                {project.date}
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-bold text-ink sm:text-4xl">
              {project.title}
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
              {project.description}
            </p>

            <div className="mt-5">
              <TechnologyTags technologies={project.technologies} />
            </div>
          </header>
        </PixelPanel>
      </div>

      {/* Main image */}
      <div className="mt-8 grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-start-3 lg:col-span-8">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="
              aspect-video w-full object-cover
              border-4 border-frame
              bg-panel
              shadow-[6px_6px_0_var(--theme-shadow)]
            "
          />
        </div>
      </div>

      {/* Role and problem */}
      {(project.role || project.problem) && (
        <div className="mt-8 grid grid-cols-12 gap-8">
          <div
            className="
              col-span-12 grid items-stretch gap-5
              md:grid-cols-2
              lg:col-start-3 lg:col-span-8
            "
          >
            {project.role && (
              <PixelPanel
                variant="secondary"
                shadowSize={4}
                className="h-full"
                contentClassName="h-full p-5 sm:p-6"
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                  My role
                </p>

                <p className="mt-3 text-sm leading-7 text-muted">
                  {project.role}
                </p>
              </PixelPanel>
            )}

            {project.problem && (
              <PixelPanel
                variant="secondary"
                shadowSize={4}
                className="h-full"
                contentClassName="h-full p-5 sm:p-6"
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                  The problem
                </p>

                <p className="mt-3 text-sm leading-7 text-muted">
                  {project.problem}
                </p>
              </PixelPanel>
            )}
          </div>
        </div>
      )}

      {/* Solution */}
      {project.solution && (
        <div className="mt-6 grid grid-cols-12 gap-8">
          <PixelPanel
            variant="secondary"
            shadowSize={4}
            className="col-span-12 lg:col-start-3 lg:col-span-8"
            contentClassName="p-5 sm:p-6"
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              The solution
            </p>

            <p className="mt-3 text-sm leading-7 text-muted">
              {project.solution}
            </p>
          </PixelPanel>
        </div>
      )}

      {/* Features, challenges, and results */}
      <div className="mt-6 grid grid-cols-12 gap-8">
        <div
          className="
            col-span-12 grid items-stretch gap-5
            md:grid-cols-2
            lg:col-start-3 lg:col-span-8 lg:grid-cols-3
          "
        >
          <ProjectDetailList title="Key features" items={project.features} />

          <ProjectDetailList title="Challenges" items={project.challenges} />

          <ProjectDetailList title="Results" items={project.results} />
        </div>
      </div>

      {/* Gallery */}
      {project.gallery.length > 0 && (
        <section className="mt-10">
          <div className="grid grid-cols-12 gap-8">
            <PixelPanel
              className="col-span-12 lg:col-start-3 lg:col-span-8"
              contentClassName="p-5 sm:p-6"
            >
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                Gallery
              </p>

              <h3 className="mt-2 text-2xl font-bold text-ink">
                Project screenshots
              </h3>
            </PixelPanel>
          </div>

          <div className="mt-6 grid grid-cols-12 gap-8">
            <div
              className="
                col-span-12 grid gap-5
                sm:grid-cols-2
                lg:col-start-3 lg:col-span-8
              "
            >
              {project.gallery.map((image, index) => (
                <img
                  key={`${image}-${index}`}
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  loading="lazy"
                  className="
                    aspect-video w-full object-cover
                    border-4 border-frame
                    bg-panel
                    shadow-[5px_5px_0_var(--theme-shadow)]
                  "
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* YouTube video */}
      {project.youtubeUrl && (
        <div className="mt-10 grid grid-cols-12 gap-8">
          <PixelPanel
            className="col-span-12 lg:col-start-3 lg:col-span-8"
            contentClassName="p-5 sm:p-6"
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
              Video
            </p>

            <h3 className="mt-2 text-2xl font-bold text-ink">
              Project demonstration
            </h3>

            <iframe
              src={project.youtubeUrl}
              title={`${project.title} demonstration`}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="
                mt-5 aspect-video w-full
                border-4 border-frame
                bg-frame
              "
            />
          </PixelPanel>
        </div>
      )}

      {/* External links */}
      {project.links.length > 0 && (
        <div className="mt-10 grid grid-cols-12 gap-8">
          <PixelPanel
            variant="secondary"
            shadowSize={4}
            className="col-span-12 lg:col-start-3 lg:col-span-8"
            contentClassName="p-5 sm:p-6"
          >
            <h3 className="text-xl font-bold text-ink">Project links</h3>

            <div className="mt-4 flex flex-wrap gap-3">
              <ExternalProjectLinks project={project} />
            </div>
          </PixelPanel>
        </div>
      )}

      {/* Bottom back button */}
      <div className="mt-10 grid grid-cols-12 gap-8">
        <div className="col-span-12 flex justify-center lg:col-start-3 lg:col-span-8">
          <button
            type="button"
            onClick={onBack}
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
              active:translate-x-1
              active:translate-y-1
              active:shadow-none
              focus-visible:outline-none
              focus-visible:ring-4
              focus-visible:ring-accent/40
            "
          >
            ← Back to projects
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailPanel;
