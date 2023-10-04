import React from 'react'; // Correct import path
import './App.css';
import Header from './Components/header';
import About from './Components/about';
import Footer from './Components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Footer />
      {/* Add other sections/components here */}
    </div>
  );
}

export default App;
