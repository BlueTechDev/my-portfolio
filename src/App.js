import React from 'react';
import './App.css';
import Header from './Components/header'; // Update import path
import About from './Components/about'; // Update import path
import Skills from './Components/skills'; // Update import path
import Education from './Components/education'; // Update import path
import Projects from './Components/projects'; // Update import path
import Resume from './Components/resume'; // Update import path
import Contact from './Components/contact'; // Update import path
import Footer from './Components/footer'; // Update import path

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
