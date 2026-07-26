import PixelPanel from "../ui/PixelPanel";

type ContactLink = {
  label: string;
  href: string;
  external?: boolean;
};

const contactLinks: ContactLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/your-username",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/your-username",
    external: true,
  },
  {
    label: "Résumé",
    href: "/resume.pdf",
    external: true,
  },
];

function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 px-6 py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8">
        <PixelPanel
          className="col-span-12 lg:col-start-3 lg:col-span-8"
          contentClassName="p-5 sm:p-6"
        >
          <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
            {/* Contact message */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent sm:text-sm">
                Contact
              </p>

              <h2 className="mt-2 max-w-2xl text-2xl font-bold text-ink sm:text-3xl">
                Have a project or opportunity in mind?
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base">
                I am interested in software engineering, game development,
                educational technology, and creative development opportunities.
              </p>
            </div>

            {/* Main email button */}
            <a
              href="mailto:your-email@example.com"
              className="
                inline-flex w-fit items-center justify-center
                border-2 border-frame
                bg-accent px-5 py-3
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
              Send me an email
            </a>
          </div>

          <div className="my-5 border-t-2 border-dashed border-divider/50" />

          {/* Contact links */}
          <div className="flex flex-wrap items-center gap-3">
            <p className="mr-1 text-xs font-bold uppercase tracking-wider text-muted">
              Find me online
            </p>

            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="
                  border-2 border-frame
                  bg-panel-secondary px-3 py-1.5
                  text-xs font-bold text-ink
                  shadow-[2px_2px_0_var(--theme-shadow)]
                  transition duration-150
                  hover:-translate-x-0.5
                  hover:-translate-y-0.5
                  hover:bg-panel-highlight
                  hover:text-accent
                  focus-visible:outline-none
                  focus-visible:ring-4
                  focus-visible:ring-accent/40
                  active:translate-x-0.5
                  active:translate-y-0.5
                  active:shadow-none
                "
              >
                {link.label}
                {link.external && (
                  <span aria-hidden="true" className="ml-1">
                    ↗
                  </span>
                )}
              </a>
            ))}
          </div>
        </PixelPanel>
      </div>
    </section>
  );
}

export default Contact;
