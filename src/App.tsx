import Header from "./components/layout/header";
import Sidebar from "./components/layout/sidebar";
import SideNavigation from "./components/layout/sidenavigation";
import Background from "./components/layout/background";

import Hero from "./components/sections/hero";
import About from "./components/sections/about";
import Education from "./components/sections/education";
import Projects from "./components/sections/projects";
import Contact from "./components/sections/contact";
import Experience from "./components/sections/experience";
import Skills from "./components/sections/skills";

function App() {
  return (
    <div className="min-h-screen text-white">
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

      <div className="relative z-10">
        <Header />
        <SideNavigation />

        <main className="pt-16">
          {/* <Hero /> */}
          <About />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
