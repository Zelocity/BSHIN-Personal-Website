import { useState } from "react";
import PixelPanel from "../ui/PixelPanel";

type ExperienceLink = {
  label: string;
  url: string;
};

type ExperienceItem = {
  company: string;
  role: string;
  date: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  photos: string[];
  video: string;
  links: ExperienceLink[];
};

const experiences: ExperienceItem[] = [
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
    photos: [
      "/images/experience/tatum-1.png",
      "/images/experience/tatum-2.png",
    ],
    video: "",
    links: [
      {
        label: "Visit Tatum Games",
        url: "https://tatumgames.com",
      },
    ],
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
    photos: [
      "/images/experience/xcite-1.png",
      "/images/experience/xcite-2.png",
      "/images/experience/xcite-3.png",
    ],
    video: "/videos/xcite-demo.mp4",
    links: [
      {
        label: "View project",
        url: "https://example.com",
      },
    ],
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
    photos: ["/images/experience/black-rocket-1.png"],
    video: "",
    links: [],
  },
];

function Experience() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const toggleJob = (index: number) => {
    setExpandedJob((current) => (current === index ? null : index));
  };

  return (
    <section id="experience" className="scroll-mt-16 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="grid grid-cols-12 gap-8">
          <PixelPanel
            className="col-span-12 lg:col-start-3 lg:col-span-8"
            contentClassName="p-6 sm:p-8"
          >
            <header>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-accent">
                Experience
              </p>

              <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
                Work experience
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-muted">
                Roles where I have developed software, created interactive
                experiences, and helped others learn technology.
              </p>

              <div className="mt-6 border-t-2 border-dashed border-divider/50" />
            </header>
          </PixelPanel>
        </div>

        {/* Job timeline */}
        <div className="mt-2 space-y-2">
          {experiences.map((experience, index) => {
            const isExpanded = expandedJob === index;
            const isLast = index === experiences.length - 1;
            const detailsId = `experience-details-${index}`;

            return (
              <article
                key={`${experience.company}-${experience.role}`}
                className="grid grid-cols-12 gap-8"
              >
                {/* Desktop date */}
                <div className="hidden pt-6 pr-6 text-right lg:col-span-2 lg:block">
                  <p className="text-sm font-bold text-panel-highlight">
                    {experience.date}
                  </p>

                  <p className="mt-1 text-sm leading-5 text-panel-highlight/70">
                    {experience.location}
                  </p>
                </div>

                {/* Timeline and job card */}
                <div
                  className="
                    relative col-span-12 pl-10
                    lg:col-start-3 lg:col-span-8 lg:pl-0
                  "
                >
                  {/* Timeline line */}
                  {!isLast && (
                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none absolute
                        -bottom-12 left-2 top-8
                        border-l-2 border-dashed border-accent
                        lg:-left-8
                      "
                    />
                  )}

                  {/* Timeline marker */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none absolute
                      left-2 top-8 z-20
                      flex h-6 w-6 -translate-x-1/2
                      items-center justify-center
                      border-2 border-panel-highlight
                      bg-accent
                      shadow-[3px_3px_0_var(--theme-shadow)]
                      lg:-left-8
                    "
                  >
                    <span className="h-2 w-2 bg-accent-text" />
                  </div>

                  {/* Connector */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none absolute
                      left-2 top-[43px] z-10
                      w-8 border-t-2 border-dashed border-accent
                      lg:-left-8
                    "
                  />

                  {/* Individual job container */}
                  <PixelPanel
                    variant="secondary"
                    shadowSize={5}
                    className="
                      transition-transform duration-200
                      hover:-translate-x-0.5
                      hover:-translate-y-0.5
                    "
                    contentClassName="overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => toggleJob(index)}
                      aria-expanded={isExpanded}
                      aria-controls={detailsId}
                      className="
                        w-full cursor-pointer p-6 text-left
                        text-ink outline-none
                        focus-visible:ring-4
                        focus-visible:ring-inset
                        focus-visible:ring-accent
                        sm:p-8
                      "
                    >
                      {/* Mobile date */}
                      <div className="mb-4 lg:hidden">
                        <p className="text-sm font-bold text-ink">
                          {experience.date}
                        </p>

                        <p className="mt-1 text-sm text-muted">
                          {experience.location}
                        </p>
                      </div>

                      {/* Job title */}
                      <div className="flex items-start justify-between gap-5">
                        <div>
                          <h3 className="text-xl font-bold text-ink">
                            {experience.role}
                          </h3>

                          <p className="mt-1 font-bold text-accent">
                            {experience.company}
                          </p>
                        </div>

                        <span
                          aria-hidden="true"
                          className={`
                            flex h-9 w-9 shrink-0
                            items-center justify-center
                            border-2 border-frame
                            bg-panel text-lg font-bold text-accent
                            shadow-[3px_3px_0_var(--theme-shadow)]
                            transition duration-300
                            ${
                              isExpanded
                                ? "translate-x-1 translate-y-1 rotate-180 shadow-none"
                                : ""
                            }
                          `}
                        >
                          ↓
                        </span>
                      </div>

                      <p className="mt-5 leading-7 text-muted">
                        {experience.description}
                      </p>

                      {/* Responsibilities */}
                      <ul className="mt-5 space-y-3">
                        {experience.responsibilities.map((responsibility) => (
                          <li
                            key={responsibility}
                            className="flex gap-3 leading-7 text-muted"
                          >
                            <span
                              aria-hidden="true"
                              className="
                                mt-[11px] h-2 w-2 shrink-0
                                bg-accent
                                shadow-[2px_2px_0_var(--theme-shadow)]
                              "
                            />

                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="mt-6 flex flex-wrap gap-3">
                        {experience.technologies.map((technology) => (
                          <span
                            key={technology}
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
                            "
                          >
                            {technology}
                          </span>
                        ))}
                      </div>

                      <p className="mt-6 text-sm font-bold uppercase tracking-wide text-accent">
                        {isExpanded ? "Hide work samples" : "View work samples"}
                      </p>
                    </button>

                    {/* Expandable work samples */}
                    <div
                      id={detailsId}
                      className={`
                        grid transition-[grid-template-rows]
                        duration-500 ease-in-out
                        ${isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
                      `}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t-2 border-dashed border-divider/50 px-6 pb-6 pt-6 sm:px-8 sm:pb-8">
                          <h4 className="text-lg font-bold uppercase tracking-wide text-ink">
                            Work samples
                          </h4>

                          {/* Photos */}
                          {experience.photos.length > 0 && (
                            <div className="mt-5 grid gap-5 sm:grid-cols-2">
                              {experience.photos.map((photo, photoIndex) => (
                                <img
                                  key={photo}
                                  src={photo}
                                  alt={`${experience.company} work sample ${
                                    photoIndex + 1
                                  }`}
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
                          )}

                          {/* Video */}
                          {experience.video && (
                            <video
                              controls
                              preload="metadata"
                              className="
                                mt-6 aspect-video w-full
                                border-4 border-frame
                                bg-frame
                                shadow-[5px_5px_0_var(--theme-shadow)]
                              "
                            >
                              <source src={experience.video} type="video/mp4" />
                              Your browser does not support video playback.
                            </video>
                          )}

                          {/* Links */}
                          {experience.links.length > 0 && (
                            <div className="mt-6 flex flex-wrap gap-4">
                              {experience.links.map((link) => (
                                <a
                                  key={link.url}
                                  href={link.url}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="
                                    border-2 border-frame
                                    bg-accent px-4 py-2
                                    text-sm font-bold text-accent-text
                                    shadow-[4px_4px_0_var(--theme-shadow)]
                                    transition duration-150
                                    hover:-translate-x-0.5
                                    hover:-translate-y-0.5
                                    hover:bg-accent-hover
                                    hover:shadow-[6px_6px_0_var(--theme-shadow)]
                                    active:translate-x-1
                                    active:translate-y-1
                                    active:shadow-none
                                  "
                                >
                                  {link.label} ↗
                                </a>
                              ))}
                            </div>
                          )}

                          {experience.photos.length === 0 &&
                            !experience.video &&
                            experience.links.length === 0 && (
                              <p className="mt-4 text-muted">
                                Work samples will be added soon.
                              </p>
                            )}
                        </div>
                      </div>
                    </div>
                  </PixelPanel>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
