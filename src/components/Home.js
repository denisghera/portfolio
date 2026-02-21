import React from 'react';
import './Home.css';

function Home() {
  return (
    <section className="home-container">
      <div className="intro-badge">CPTS Certified | Penetration Tester</div>
      
      <h1 className="hero-title">
        Hi, I'm Denis. <br />
        I break things (legally).
      </h1>
      
      <p className="hero-subtitle">
        I'm an offensive security practitioner focusing on network and web application 
        penetration testing. I love finding creative exploit chains, automating workflows, 
        and helping organizations secure their infrastructure against real-world threats.
      </p>

      <div className="tech-stack">
        <p>Core Focus & Arsenal:</p>
        <ul className="skill-list">
          <li>Active Directory Exploitation</li>
          <li>Web App Pentesting (OWASP Top 10)</li>
          <li>Python & Bash Scripting</li>
          <li>Privilege Escalation (Win/Nix)</li>
        </ul>
      </div>

      <div className="action-links">
        <a href="#writeups" className="primary-btn">
          Read my write-ups
        </a>
        <a href="https://www.linkedin.com/in/denisghera/" className="secondary-link">Let's connect &rarr;</a>
      </div>
    </section>
  );
}

export default Home;