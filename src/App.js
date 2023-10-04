import React from 'react'; // Correct import path
import './App.css';
import Header from './Components/header';
import About from './Components/about';
import Skills from './Components/skills';
import Footer from './Components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Footer />
      {/* Add other sections/components here */}
    </div>
  );
}

export default App;
