import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/logo512.png"

function Header() {
  return (
    <header className="header">
      <div style={{marginLeft:"5vw"}}>
        <Link to="/portfolio" className='logo'>
          <img src={logo} alt='logo' style={{width:'5vw'}}/>
        </Link>
      </div>
      <nav>
        <Link to="/about" className='btn'>About</Link>
        <Link to="/projects" className='btn'>Projects</Link>
        <Link to="/contact" className='btn'>Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
