function About() {
  return (
    <section id="about" className="scroll-mt-16 px-6 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8">
        <div className="col-span-12 rounded-2xl bg-zinc-950/80 p-6 backdrop-blur-sm sm:p-8 lg:col-start-3 lg:col-span-8">
          <div className="grid items-start gap-8 md:grid-cols-[180px_minmax(0,1fr)]">
            {/* Profile image */}
            <img
              src="/images/profile.jpg"
              alt="Brandon Shin"
              className="mx-auto aspect-square w-44 rounded-2xl border border-zinc-800 object-cover md:mx-0 md:w-full"
            />

            {/* About content */}
            <div className="text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
                About
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Brandon Shin
              </h2>

              <div className="mt-5 space-y-4 leading-7 text-zinc-400">
                <p>
                  I am a computer science graduate from UC Riverside and an
                  incoming Master of Software Engineering student at UC Irvine.
                </p>

                <p>
                  My experience includes web development, game development,
                  augmented reality, virtual reality, and educational
                  technology.
                </p>

                <p>
                  I enjoy combining technical problem-solving with creative
                  design to build useful and engaging digital experiences.
                </p>
              </div>

              {/* Skills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "React",
                  "TypeScript",
                  "Unity",
                  "C#",
                  "Python",
                  "AR / VR",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-700 bg-zinc-900/70 px-3 py-1 text-xs text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
