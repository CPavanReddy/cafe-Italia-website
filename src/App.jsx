import React from "react";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Specials from "./components/Specials";
import Testimonials from "./components/Testmonials";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import "./App.css"
import Dining from "./components/Dining";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Specials />
       <Dining/>
      <Testimonials />
      <Gallery />
     
      <Contact />
      <Footer />
    </>
  );
}

export default App;
