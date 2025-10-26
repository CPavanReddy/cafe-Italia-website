import React, { useState, useEffect } from "react";
import '../components/navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="nav-wrap" role="banner">
      <div className="nav-inner">
        <a href="#home" className="brand">Cafe Italia</a>

        <button
          className={`hamburger ${open ? "open" : ""}`}
          aria-controls="main-nav"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((s) => !s)}
        >
          <span aria-hidden="true" />
        </button>

        <nav id="main-nav" className={`nav-links ${open ? "show" : ""}`} role="navigation">
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#menu" onClick={() => setOpen(false)}>Menu</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </nav>

        <a href="#book" className="book-btn">Book Table</a>
      </div>
    </header>
  );
};

export default Navbar;
