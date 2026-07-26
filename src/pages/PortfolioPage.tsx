import Header from "../components/layout/header";
import SideNavigation from "../components/layout/sidenavigation";
import Background from "../components/layout/background";
import SectionFadeManager from "../components/ui/sectionfademanager";

import About from "../components/sections/about";
import Education from "../components/sections/education";
import Experience from "../components/sections/experience";
import Projects from "../components/sections/projects";
import Skills from "../components/sections/skills";
import Contact from "../components/sections/contact";

function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-zinc-950 text-white">
      {/* Background layer */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <Background
          dotSize={1}
          gap={35}
          baseColor="#395254"
          glowColor="#7c7d7c"
          proximity={80}
          glowIntensity={0.1}
          waveSpeed={10}
          driftAmount={3}
          driftSpeed={3}
        />
      </div>

      {/* Website content */}
      <div className="relative z-10">
        <Header />
        {/* <SideNavigation /> */}

        <main className="pt-16">
          <SectionFadeManager />
          <About />
          <Skills />
          <Education />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default HomePage;
