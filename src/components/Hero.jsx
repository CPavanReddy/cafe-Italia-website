import React from "react";
import "../components/hero.css";

const Hero = () => {
  return (
    <section
      className="hero-section"
      aria-label="Hero - Cafe Italia"
      id="home"
    >
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-title">Welcome To <span>Cafe Italia</span></h1>
        <p className="hero-sub">Experience Authentic Italian Cuisine</p>
        <a className="hero-cta" href="#menu">View Menu</a>
      </div>
    </section>
  );
};

export default Hero;
