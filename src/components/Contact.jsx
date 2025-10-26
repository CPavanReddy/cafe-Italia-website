import React from "react";
import "../components/contact.css";

const Contact = () => (
  <section className="contact-section">
    <h2 className="contact-title">Contact Us</h2>
    <div className="contact-grid">
      <div className="contact-card">
        <h3>Book a Table</h3>
        <p>0161 795 5502</p>
      </div>
      <div className="contact-card">
        <h3>Location</h3>
        <p>23 King Street, Manchester, M1 5DN</p>
      </div>
      <div className="contact-card">
        <h3>Opening Hours</h3>
        <p>Mon - Sat: 11:00am - 11:00pm</p>
        <p>Sunday: 12:00pm - 10:00pm</p>
      </div>
    </div>
  </section>
);

export default Contact;
