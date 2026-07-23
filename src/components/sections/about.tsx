const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "Unity",
  "C#",
  "Roblox Studio",
  "PostgreSQL",
  "Git",
  "OpenCV",
];

function About() {
  return (
    <section
      id="about"
      className="min-h-screen scroll-mt-16 border-t border-zinc-900 px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            About
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Building useful and engaging experiences.
          </h2>
        </div>

        <div>
          <div className="space-y-6 text-lg leading-8 text-zinc-400">
            <p>
              I am a computer science graduate from UC Riverside and an incoming
              Master of Software Engineering student at UC Irvine.
            </p>

            <p>
              My experience includes full-stack web development, game
              development, augmented and virtual reality, educational
              technology, and interactive media.
            </p>

            <p>
              I enjoy combining technical problem-solving with creative design
              to build tools that are useful, memorable, and enjoyable to use.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Technologies
            </h3>

            <div className="mt-5 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
