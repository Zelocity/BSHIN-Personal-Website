function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[75vh] scroll-mt-16 border-t border-zinc-900 px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto flex max-w-7xl flex-col justify-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
          Contact
        </p>

        <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          Have a project or opportunity in mind?
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          I am interested in software engineering, game development, educational
          technology, and creative development opportunities.
        </p>

        <a
          href="mailto:your-email@example.com"
          className="mt-10 w-fit rounded-lg bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-500"
        >
          Send me an email
        </a>

        <div className="mt-12 flex flex-wrap gap-6 text-sm text-zinc-500">
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
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            Résumé
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
