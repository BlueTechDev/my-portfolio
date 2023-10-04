import React from 'react';
import './App.css';
import Header from "./Components/header";
import About from "./Components/about";
import Skills from "./Components/skills";
import Education from "./Components/education";
import Projects from "./Components/projects";
import Resume from "./Components/resume";
import Contact from "./Components/contact";
import Footer from "./Components/footer";

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
    </div>
  );
}

export default App;
