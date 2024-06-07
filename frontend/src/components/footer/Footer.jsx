import React from 'react';
import './footer.css';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Ideabox</h3>
          <p>Ideabox is a platform where you can securely store and manage your unique ideas. Join our community and let your creativity flourish.</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>Email: kumarsomesh002@gmail.com</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="social-media-links">
            <li><a href="https://www.instagram.com/_kumar_somesh_" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a></li>
            <li><a href="https://www.linkedin.com/in/somesh-kumar-404779218/" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Ideabox. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
