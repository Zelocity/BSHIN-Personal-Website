const sectionLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function Sidebar() {
  return (
    <aside className="fixed bottom-0 right-0 top-16 hidden w-40 border-l border-zinc-800 bg-zinc-950/90 px-5 py-8 backdrop-blur md:flex md:flex-col">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
        Navigate
      </p>

      <nav className="mt-8" aria-label="Page sections">
        <ul className="space-y-4">
          {sectionLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block text-sm text-zinc-400 transition hover:translate-x-1 hover:text-violet-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto flex flex-col gap-3 text-xs text-zinc-500">
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
      </div>
    </aside>
  );
}

export default Sidebar;
