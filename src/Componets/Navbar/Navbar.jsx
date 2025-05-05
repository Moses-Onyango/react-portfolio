import React from 'react';
import './Navbar.css';
import ProfilePic from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={ProfilePic} alt="Logo" className="logo" />
      </div>
      
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="nav-connect">
        <a href="#contact" className="connect-btn">Connect With Me</a>
      </div>
    </nav>
  );
};

export default Navbar;
