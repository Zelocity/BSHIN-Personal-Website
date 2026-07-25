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

function App() {
  return (
    <div className="relative isolate min-h-screen bg-parchment text-ink">
      <Background
        dotSize={1.5}
        gap={30}
        baseColor="#8f684e"
        glowColor="#a7472d"
        proximity={130}
        glowIntensity={0.45}
        waveSpeed={0.25}
        driftAmount={2.5}
        driftSpeed={0.5}
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
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
