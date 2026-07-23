const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function SideNavigation() {
  return (
    <nav
      aria-label="Page sections"
      className="
        fixed right-5 top-1/2 z-40 hidden
        -translate-y-1/2 rounded-xl
        border border-zinc-800
        bg-zinc-950/80 p-2
        shadow-lg backdrop-blur-md
        md:block
      "
    >
      <ul className="flex flex-col gap-1">
        {navigationLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="
                block rounded-lg px-3 py-2
                text-right text-sm text-zinc-400
                transition
                hover:bg-zinc-800 hover:text-white
              "
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SideNavigation;
