import React from 'react';
import { Link } from "react-scroll";
import './App.css';
import Header from "./Components/header";
import About from "./Components/about";
import Skills from "./Components/skills";
import Education from "./Components/education";
import Projects from "./Components/projects";
import Resume from "./Components/resume";
import Contact from "./Components/contact";
import Footer from './Components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Resume />
      <Contact />
      <Footer />

      {/* Navigation Links */}
      <div className="nav-links">
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="education"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Education
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default App;
