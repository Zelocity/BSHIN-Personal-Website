const headerLinks = [
  { label: "Apps", href: "/apps" },
  { label: "Music", href: "/music" },
  { label: "Guestbook", href: "/guestbook" },
  { label: "Resume", href: "/resume.pdf" },
];

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 bg-taupe-950">
      <div className="flex h-full items-center justify-between px-6">
        <a
          href="/"
          className="text-xl font-bold tracking-tight transition hover:text-violet-400"
        >
          Brandon
        </a>

        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-5 text-sm text-zinc-400">
            {headerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
