import React from "react";
import "../components/footer.css";

const Footer = () => (
  <footer className="footer">
    <h3 className="footer-logo">Cafe Italia</h3>
    <ul className="footer-links">
      <li>Home</li>
      <li>Menu</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
    <div className="footer-icons">
      <i className="fab fa-facebook"></i>
      <i className="fab fa-instagram"></i>
      <i className="fab fa-twitter"></i>
    </div>
    <p className="footer-text">
      © 2025 Cafe Italia. All Rights Reserved.
    </p>
  </footer>
);

export default Footer;
