import React from 'react';
import '../styles/contact.css';

const ContactSection = () => {
  return (
    <section id="contact-section" className="contact-section">
      <h2>Contact Us</h2>
      <div className="underline-wrapper">
    <div className="mixed-underline">
      <div className="solid-part"></div>
      <div className="dashed-part">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
      <p>Have a question or want to get in touch? We'd love to hear from you!</p>
      <div className="contact-buttons">
        <a href="mailto:fitpulse@example.com" className="contact-btn">Email Us</a>
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="contact-btn">WhatsApp</a>
      </div>
    </section>
  );
};

export default ContactSection;