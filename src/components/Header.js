import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div style={{marginLeft:"5vw"}}>
        <Link to="/portfolio">
          <img src="public\logo512.png" alt="logo" className="logo" />
        </Link>
      </div>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
