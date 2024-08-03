// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Optional: Import CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <nav className="footer-nav">
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
          <a href="#privacy">Privacy Policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
