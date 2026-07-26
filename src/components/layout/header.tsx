import { useEffect, useState } from "react";

type NavigationLink = {
  label: string;
  href: string;
};

const navigationLinks: NavigationLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  const [activeHref, setActiveHref] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navigationLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    let animationFrameId: number | null = null;

    const updateActiveSection = () => {
      const distanceFromBottom =
        document.documentElement.scrollHeight -
        (window.scrollY + window.innerHeight);

      // Contact might not reach the middle because it is the last section.
      if (distanceFromBottom <= 24) {
        setActiveHref("#contact");
        return;
      }

      const focusPoint = window.innerHeight * 0.4;

      let currentSection = sections[0];

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop <= focusPoint) {
          currentSection = section;
        }
      });

      setActiveHref(`#${currentSection.id}`);
    };

    const scheduleUpdate = () => {
      if (animationFrameId !== null) {
        return;
      }

      animationFrameId = window.requestAnimationFrame(() => {
        updateActiveSection();
        animationFrameId = null;
      });
    };

    updateActiveSection();

    window.addEventListener("scroll", scheduleUpdate, {
      passive: true,
    });

    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);

      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const handleNavigation = (href: string) => {
    setActiveHref(href);
    setMenuOpen(false);
  };

  return (
    <header
      className="
        fixed inset-x-0 top-0 z-50
        h-16 border-b-4 border-frame
        bg-panel text-ink
        shadow-[0_4px_0_var(--theme-shadow)]
      "
    >
      <div
        className="
          relative mx-auto flex h-full max-w-7xl
          items-center px-6
        "
      >
        {/* Brandon logo on the left */}
        <a
          href="#home"
          onClick={() => handleNavigation("#home")}
          className="
            group flex shrink-0 items-center gap-2
            font-bold text-ink
            focus-visible:outline-none
            focus-visible:ring-4
            focus-visible:ring-accent/40
          "
        >
          <span
            aria-hidden="true"
            className="
              flex h-8 w-8 items-center justify-center
              border-2 border-frame
              bg-accent
              text-sm font-bold text-accent-text
              shadow-[3px_3px_0_var(--theme-shadow)]
              transition duration-150
              group-hover:-translate-x-0.5
              group-hover:-translate-y-0.5
            "
          >
            B
          </span>

          <span
            className="
              text-lg tracking-tight
              transition
              group-hover:text-accent
            "
          >
            Brandon
          </span>
        </a>

        {/* Centered desktop navigation */}
        <nav
          aria-label="Page sections"
          className="
            absolute left-1/2 top-1/2
            hidden
            -translate-x-1/2 -translate-y-1/2
            xl:block
          "
        >
          <ul className="flex items-center gap-1">
            {navigationLinks.map((link) => {
              const isActive = activeHref === link.href;

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => handleNavigation(link.href)}
                    aria-current={isActive ? "location" : undefined}
                    className={`
                      inline-flex items-center
                      whitespace-nowrap
                      border-2 px-2.5 py-1.5
                      text-[11px] font-bold
                      uppercase tracking-wide
                      transition duration-150
                      hover:-translate-x-0.5
                      hover:-translate-y-0.5
                      focus-visible:outline-none
                      focus-visible:ring-4
                      focus-visible:ring-accent/40
                      ${
                        isActive
                          ? `
                            border-frame
                            bg-accent
                            text-accent-text
                            shadow-[2px_2px_0_var(--theme-shadow)]
                          `
                          : `
                            border-transparent
                            text-muted
                            hover:border-frame
                            hover:bg-panel-secondary
                            hover:text-accent
                            hover:shadow-[2px_2px_0_var(--theme-shadow)]
                          `
                      }
                    `}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile menu button on the right */}
        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          className="
            ml-auto flex h-9 w-10
            items-center justify-center
            border-2 border-frame
            bg-panel-secondary
            text-lg font-bold text-ink
            shadow-[3px_3px_0_var(--theme-shadow)]
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
            xl:hidden
          "
        >
          <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {/* Mobile navigation menu */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile page sections"
          className="
            absolute right-4 top-[calc(100%+8px)]
            w-52
            border-2 border-frame
            bg-panel p-3
            shadow-[6px_6px_0_var(--theme-shadow)]
            xl:hidden
          "
        >
          <ul className="space-y-2">
            {navigationLinks.map((link) => {
              const isActive = activeHref === link.href;

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => handleNavigation(link.href)}
                    aria-current={isActive ? "location" : undefined}
                    className={`
                      flex w-full items-center
                      justify-between
                      border-2 border-frame
                      px-3 py-2
                      text-xs font-bold
                      uppercase tracking-wide
                      transition duration-150
                      ${
                        isActive
                          ? "bg-accent text-accent-text"
                          : `
                            bg-panel-secondary
                            text-ink
                            hover:bg-panel-highlight
                            hover:text-accent
                          `
                      }
                    `}
                  >
                    <span>{link.label}</span>

                    <span
                      aria-hidden="true"
                      className={`
                        h-2.5 w-2.5
                        border border-frame
                        ${isActive ? "bg-accent-text" : "bg-panel"}
                      `}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
