// Header.js
import React from 'react';
import './Css/header.css'; // Correct import path

function Header() {
  return (
    <div className='header'>
    <header className='page-header'>
      <nav>
        <h1>Jonah Kroll</h1>
        <ul>
          <li className='nav-links'><a href="#about">About</a></li>
          <li className='nav-links'><a href="#Education">Education</a></li>
          <li className='nav-links'><a href="#experience">Experience</a></li>
          <li className='nav-links'><a href="#features">Projects</a></li>
          <li className='nav-links'><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    </div>
  );
}

export default Header;
