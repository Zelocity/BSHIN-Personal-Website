function About() {
  return (
    <section id="about" className="scroll-mt-16 border-zinc-900 px-6 py-14">
      <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[200px_minmax(0,1fr)_200px]">
        {/* Left image */}
        <img
          src="/images/profile.jpg"
          alt="Brandon"
          className="mx-auto mt-4 aspect-square w-48 rounded-2xl object-cover lg:w-full"
        />

        {/* Wider center card */}
        <div className="w-full rounded-2xl bg-zinc-950/80 p-8 text-left backdrop-blur-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            About
          </p>

          <h2 className="mt-3 text-3xl font-bold">Brandon Shin</h2>

          <div className="mt-5 space-y-4 leading-7 text-zinc-400">
            <p>
              I am a computer science graduate from UC Riverside and an incoming
              Master of Software Engineering student at UC Irvine.
            </p>

            <p>
              My experience includes web development, game development,
              augmented reality, virtual reality, and educational technology.
            </p>

            <p>
              I enjoy combining technical problem-solving with creative design
              to build useful and engaging digital experiences.
            </p>
          </div>
        </div>

        {/* Right image */}
        <img
          src="/images/profile.jpg"
          alt=""
          aria-hidden="true"
          className="mx-auto mt-4 hidden aspect-square w-48 rounded-2xl object-cover lg:block lg:w-full"
        />
      </div>
    </section>
  );
}

export default About;
