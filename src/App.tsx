import Header from "./components/layout/header";
import Sidebar from "./components/layout/sidebar";
import SideNavigation from "./components/layout/sidenavigation";
import Background from "./components/layout/background";

import Hero from "./components/sections/hero";
import About from "./components/sections/about";
import Projects from "./components/sections/projects";
import Contact from "./components/sections/contact";

function App() {
  return (
    <div className="min-h-screen text-white">
      <Background
        dotSize={2}
        gap={25}
        baseColor="#403a36"
        glowColor="#827a6c"
        proximity={80}
        glowIntensity={0.1}
        waveSpeed={10}
        driftAmount={2}
        driftSpeed={3}
      />

      <div className="relative z-10">
        <Header />
        <SideNavigation />

        <main className="pt-16">
          {/* <Hero /> */}
          <About />
          {/* <Projects />
          <Contact /> */}
        </main>
      </div>
    </div>
  );
}

export default App;
