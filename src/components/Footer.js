import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-col">
          <h4>FitnessApp</h4>
          <p>Achieve your best self. Train smarter, live better.</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#download">Download</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:support@fitnessapp.com">support@fitnessapp.com</a></li>
            <li><a href="#">+1 800 123 4567</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Social Media</h4>
          <div className="social-icons">
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-twitter-x"></i></a>
            <a href="#"><i className="bi bi-youtube"></i></a> 
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 FitnessApp. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
