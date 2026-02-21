import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-container">
      <h2 className="contact-title">Initiate Handshake</h2>
      
      <p className="contact-text">
        Whether you have a question, a potential role, or just want to talk 
        about the latest CVE, my inbox is open. I'll do my best to get back to you.
      </p>
      
      <a href="mailto:hello@example.com" className="email-button">
        Drop a message
      </a>

      <div className="social-links">
        <a href="https://github.com/denisghera" target="_blank" rel="noreferrer">GitHub</a>
        <span className="separator">//</span>
        <a href="https://www.linkedin.com/in/denisghera/" target="_blank" rel="noreferrer">LinkedIn</a>
        <span className="separator">//</span>
        <a href="https://app.hackthebox.com/users/2491775" target="_blank" rel="noreferrer">Hack The Box</a>
      </div>

      <footer className="footer-bottom">
        <p>Built by Denis &copy; {new Date().getFullYear()}</p>
      </footer>
    </section>
  );
}

export default Contact;