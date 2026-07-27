import { useEffect, useRef, useState, type MouseEvent } from "react";

import ThemeToggle from "../ui/themetoggle";

type NavigationLink = {
  label: string;
  href: string;
};

type HeaderProps = {
  forcedActiveHref?: string | null;
  caseStudyOpen?: boolean;
};

const navigationLinks: NavigationLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Header({
  forcedActiveHref = null,
  caseStudyOpen = false,
}: HeaderProps) {
  const [activeHref, setActiveHref] = useState("#home");

  const [menuOpen, setMenuOpen] = useState(false);

  const pendingHrefRef = useRef<string | null>(null);

  const pendingTimeoutRef = useRef<number | null>(null);

  const displayedActiveHref = forcedActiveHref ?? activeHref;

  const visibleNavigationLinks = caseStudyOpen
    ? navigationLinks.filter((link) => link.href === "#projects")
    : navigationLinks;

  /*
   * Close the mobile menu when entering
   * project case-study mode.
   */
  useEffect(() => {
    if (caseStudyOpen) {
      setMenuOpen(false);
    }
  }, [caseStudyOpen]);

  useEffect(() => {
    /*
     * While a case study is open, the active link is
     * controlled through forcedActiveHref.
     */
    if (forcedActiveHref) {
      return;
    }

    const sections = navigationLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    let animationFrameId: number | null = null;

    const getDistanceFromBottom = () => {
      return (
        document.documentElement.scrollHeight -
        (window.scrollY + window.innerHeight)
      );
    };

    const hasReachedClickedSection = (section: HTMLElement, href: string) => {
      const rect = section.getBoundingClientRect();

      if (href === "#contact") {
        return getDistanceFromBottom() <= 32;
      }

      const expectedTop = 64;
      const allowedDifference = 60;

      return Math.abs(rect.top - expectedTop) <= allowedDifference;
    };

    const updateActiveSection = () => {
      const pendingHref = pendingHrefRef.current;

      /*
       * Keep a clicked navigation link active while
       * smooth scrolling is taking place.
       */
      if (pendingHref) {
        const pendingSection = document.getElementById(pendingHref.slice(1));

        setActiveHref(pendingHref);

        if (
          pendingSection &&
          hasReachedClickedSection(pendingSection, pendingHref)
        ) {
          pendingHrefRef.current = null;

          if (pendingTimeoutRef.current !== null) {
            window.clearTimeout(pendingTimeoutRef.current);

            pendingTimeoutRef.current = null;
          }
        }

        return;
      }

      /*
       * Contact is the final homepage section.
       */
      if (getDistanceFromBottom() <= 32) {
        setActiveHref("#contact");
        return;
      }

      const focusPoint = window.innerHeight * 0.4;

      let closestSection = sections[0];

      let smallestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        let distance: number;

        if (rect.top <= focusPoint && rect.bottom >= focusPoint) {
          distance = 0;
        } else {
          distance = Math.min(
            Math.abs(rect.top - focusPoint),
            Math.abs(rect.bottom - focusPoint),
          );
        }

        if (distance < smallestDistance) {
          smallestDistance = distance;
          closestSection = section;
        }
      });

      setActiveHref(`#${closestSection.id}`);
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

      if (pendingTimeoutRef.current !== null) {
        window.clearTimeout(pendingTimeoutRef.current);

        pendingTimeoutRef.current = null;
      }
    };
  }, [forcedActiveHref]);

  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();

    const section = document.getElementById(href.slice(1));

    if (!section) {
      return;
    }

    pendingHrefRef.current = href;

    setActiveHref(href);
    setMenuOpen(false);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", href);

    if (pendingTimeoutRef.current !== null) {
      window.clearTimeout(pendingTimeoutRef.current);
    }

    pendingTimeoutRef.current = window.setTimeout(() => {
      pendingHrefRef.current = null;
      pendingTimeoutRef.current = null;
    }, 2000);
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
          mx-auto grid h-full max-w-7xl
          grid-cols-12 gap-8 px-6
        "
      >
        <div
          className="
            relative col-span-12
            flex h-full items-center
            lg:col-start-3 lg:col-span-8
          "
        >
          {/* Brandon logo */}
          <a
            href="#home"
            onClick={(event) => handleNavigation(event, "#home")}
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
              {visibleNavigationLinks.map((link) => {
                const isActive = displayedActiveHref === link.href;

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(event) => handleNavigation(event, link.href)}
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

          {/* Right-side controls */}
          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />

            {/* Mobile menu button */}
            {!caseStudyOpen && (
              <button
                type="button"
                onClick={() => setMenuOpen((current) => !current)}
                aria-expanded={menuOpen}
                aria-controls="mobile-navigation"
                aria-label={menuOpen ? "Close navigation" : "Open navigation"}
                className="
                  flex h-9 w-10
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
            )}
          </div>

          {/* Mobile navigation */}
          {menuOpen && !caseStudyOpen && (
            <nav
              id="mobile-navigation"
              aria-label="Mobile page sections"
              className="
                absolute right-0
                top-[calc(100%+8px)]
                w-52
                border-2 border-frame
                bg-panel p-3
                shadow-[6px_6px_0_var(--theme-shadow)]
                xl:hidden
              "
            >
              <ul className="space-y-2">
                {visibleNavigationLinks.map((link) => {
                  const isActive = displayedActiveHref === link.href;

                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={(event) => handleNavigation(event, link.href)}
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
        </div>
      </div>
    </header>
  );
}

export default Header;
