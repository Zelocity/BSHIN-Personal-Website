const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function SideNavigation() {
  return (
    <nav
      aria-label="Page sections"
      className="
        fixed right-5 top-1/8 z-40 
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
