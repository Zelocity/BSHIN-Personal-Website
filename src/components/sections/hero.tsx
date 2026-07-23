function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen scroll-mt-16 items-center overflow-hidden px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
          Software Engineer · Creative Developer
        </p>

        <h1 className="max-w-5xl text-5xl font-bold leading-tight tracking-tight sm:text-7xl lg:text-8xl">
          Hi, I&apos;m Brandon.
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
          I build software, games, educational applications, and interactive
          digital experiences.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-violet-600 px-5 py-3 font-medium text-white transition hover:bg-violet-500"
          >
            View projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-zinc-700 px-5 py-3 font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900"
          >
            View résumé
          </a>
        </div>

        <div className="mt-12 flex gap-6 text-sm text-zinc-500">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/your-username"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            LinkedIn
          </a>

          <a
            href="mailto:your-email@example.com"
            className="transition hover:text-white"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
