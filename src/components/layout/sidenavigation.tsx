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

function SideNavigation() {
  const [activeHref, setActiveHref] = useState("#home");

  useEffect(() => {
    const sections = navigationLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    let animationFrameId: number | null = null;

    const updateActiveSection = () => {
      const pageBottom =
        document.documentElement.scrollHeight -
        (window.scrollY + window.innerHeight);

      /*
       * Contact may not reach the middle of the screen because it is
       * the final section. Activate it near the bottom of the page.
       */
      if (pageBottom <= 24) {
        setActiveHref("#contact");
        return;
      }

      /*
       * This represents a point slightly above the middle
       * of the browser window.
       */
      const focusPoint = window.innerHeight * 0.42;

      let closestSection = sections[0];
      let smallestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        let distanceFromFocusPoint: number;

        if (rect.top <= focusPoint && rect.bottom >= focusPoint) {
          /*
           * The focus point is inside this section,
           * so it should be active.
           */
          distanceFromFocusPoint = 0;
        } else {
          /*
           * Find how far the section is from the focus point.
           */
          distanceFromFocusPoint = Math.min(
            Math.abs(rect.top - focusPoint),
            Math.abs(rect.bottom - focusPoint),
          );
        }

        if (distanceFromFocusPoint < smallestDistance) {
          smallestDistance = distanceFromFocusPoint;
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
    };
  }, []);

  return (
    <nav
      aria-label="Page sections"
      className="
        fixed right-5 top-1/2 z-40
        hidden -translate-y-1/2
        xl:block
      "
    >
      <ul
        className="
          flex flex-col gap-1.5
          border-2 border-frame
          bg-panel p-2
          shadow-[5px_5px_0_var(--theme-shadow)]
        "
      >
        {navigationLinks.map((link) => {
          const isActive = activeHref === link.href;

          return (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setActiveHref(link.href)}
                aria-current={isActive ? "location" : undefined}
                className={`
                  group flex min-w-[8.5rem]
                  items-center justify-end gap-2
                  border-2 px-3 py-2
                  text-right text-xs font-bold
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
                <span>{link.label}</span>

                <span
                  aria-hidden="true"
                  className={`
                    h-3 w-3 shrink-0
                    border-2 border-frame
                    transition
                    ${
                      isActive
                        ? "bg-accent-text"
                        : "bg-panel-secondary group-hover:bg-accent"
                    }
                  `}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default SideNavigation;
