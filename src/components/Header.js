import React from 'react';
import { Link } from 'react-scroll';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="custom-header">
      <div className="header-container">
        <h1 className="logo">Fitpulse</h1>
        <nav className="nav-links">
          <Link to="home-section" smooth={true} duration={600} className="nav-link">Home</Link>
          <Link to="features-section" smooth={true} duration={600} className="nav-link">Features</Link>
          <Link to="testimonials-section" smooth={true} duration={600} className="nav-link">Testimonials</Link>
          <Link to="download-section" smooth={true} duration={600} className="nav-link">Download</Link>
          <Link to="contact-section" smooth={true} duration={600} className="nav-link">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
