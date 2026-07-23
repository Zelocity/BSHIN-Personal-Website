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
      <Background />

      <Header />
      <SideNavigation />

      <main className="pt-16">
        {/* <Hero /> */}
        <About />
        {/* <Projects />
        <Contact /> */}
      </main>
    </div>
  );
}

export default App;
