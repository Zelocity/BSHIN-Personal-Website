type EducationItem = {
  school: string;
  degree: string;
  date: string;
  location: string;
  description: string;
  highlights: string[];
  coursework: string[];
  status?: string;
};

const education: EducationItem[] = [
  {
    school: "University of California, Irvine",
    degree: "Master of Software Engineering",
    date: "2026 – Expected 2027",
    location: "Irvine, California",
    status: "Incoming Student",
    description:
      "Graduate program focused on professional software development, team-based engineering, software architecture, testing, and large-scale application development.",
    highlights: [
      "Recipient of a $20,000 student fellowship.",
      "Participating in a studio-based curriculum centered on collaborative software development.",
      "Preparing for a team capstone involving the design and delivery of a production-level software system.",
    ],
    coursework: [
      "Data Structures",
      "Algorithms",
      "Software Architecture",
      "Software Testing",
    ],
  },
  {
    school: "University of California, Riverside",
    degree: "Bachelor of Science in Computer Science",
    date: "Graduated 2025",
    location: "Riverside, California",
    description:
      "Completed a computer science degree with experience in software engineering, algorithms, databases, computer vision, web development, and interactive application development.",
    highlights: [
      "Developed educational augmented and virtual reality applications through the XCITE Center.",
      "Completed an autonomous vehicle senior project using OpenCV.",
      "Built projects involving web development, game development, and computer vision.",
    ],
    coursework: [
      "Data Structures",
      "Algorithms",
      "Databases",
      "Operating Systems",
      "Computer Vision",
    ],
  },
];

function Education() {
  return (
    <section id="education" className="scroll-mt-16 px-6 py-3">
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8">
        <div className="col-span-12 rounded-2xl bg-card p-6 backdrop-blur-sm sm:p-8 lg:col-start-3 lg:col-span-8">
          <header>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              Education
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Academic background
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
              My academic experience in computer science and professional
              software engineering.
            </p>
          </header>

          {/* Education cards */}
          <div className="mt-10 space-y-10">
            {education.map((item) => (
              <article
                key={`${item.school}-${item.degree}`}
                className="
                -mx-6 overflow-hidden rounded-2xl
                border border-zinc-800 bg-zinc-900/60
                transition duration-300
                hover:border-violet-500/50
                sm:-mx-8"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl font-semibold text-white">
                          {item.degree}
                        </h3>

                        {item.status && (
                          <span className="rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
                            {item.status}
                          </span>
                        )}
                      </div>

                      <p className="mt-2 font-medium text-violet-400">
                        {item.school}
                      </p>
                    </div>

                    <div className="shrink-0 sm:text-right">
                      <p className="text-sm font-semibold text-zinc-300">
                        {item.date}
                      </p>

                      <p className="mt-1 text-sm text-zinc-500">
                        {item.location}
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 leading-7 text-zinc-400">
                    {item.description}
                  </p>

                  <div className="mt-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
                      Highlights
                    </h4>

                    <ul className="mt-3 space-y-3">
                      {item.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-3 leading-7 text-zinc-400"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400"
                          />

                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
                      Coursework
                    </h4>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.coursework.map((course) => (
                        <span
                          key={course}
                          className="rounded-full border border-zinc-700 bg-zinc-950/60 px-3 py-1 text-xs text-zinc-300"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
