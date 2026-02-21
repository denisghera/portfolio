// src/App.jsx
import React from 'react';
import './App.css';
import Home from './components/Home';
import WriteUps from './components/WriteUps';
import BackToTop from './components/BackToTop';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-container">
      <div className="bg-lines-container">
        <svg className="bg-line-left" viewBox="0 0 100 1000" preserveAspectRatio="none">
          <path d="M 50,0 V 80 L 80,160 V 260 L 20,420 V 520 L 90,700 V 1000" />
          <path d="M 30,0 V 120 L 90,280 V 380 L 30,540 V 640 L 70,750 V 1000" />
        </svg>
        <svg className="bg-line-right" viewBox="0 0 100 1000" preserveAspectRatio="none">
          <path d="M 50,0 V 80 L 80,160 V 260 L 20,420 V 520 L 90,700 V 1000" />
          <path d="M 30,0 V 120 L 90,280 V 380 L 30,540 V 640 L 70,750 V 1000" />
        </svg>
      </div>

      <nav className="navbar">
        <div className="nav-logo">denis.sec</div>
        <div className="nav-links">
          <a href="#writeups">Write-ups</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <Home />
        <WriteUps />
        <Contact />
      </main>
      <BackToTop />
    </div>
  );
}

export default App;