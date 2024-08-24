import { useEffect, useState } from "react";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Education from "../../components/Education/Education";
import Projects from "../../components/Projects/Projects";
import Hero from "./../../components/Hero/Hero";
export default function Home() {
  const [activeSection, setActiveSection] = useState(2);

  useEffect(() => {
    setActiveSection(2);
  }, []);

  return (
    <div>
      <div id="hero" className={activeSection === 1 ? "active" : ""}>
        <Hero />
      </div>
      <div id="about" className={activeSection === 2 ? "active" : ""}>
        <About />
      </div>
      <div id="education" className={activeSection === 3 ? "active" : ""}>
        <Education />
      </div>
      <div id="projects" className={activeSection === 4 ? "active" : ""}>
        <Projects />
      </div>
      <div id="contact" className={activeSection === 5 ? "active" : ""}>
        <Contact title="Contact" para="Let’s Discuss Your " span="Project" />
      </div>
    </div>
  );
}
