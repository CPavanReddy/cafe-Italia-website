import React from "react";
import Hero from "../components/Hero";
import MenuHighlights from "../components/MenuHighlights";
import PrivateDining from "../components/PrivateDining";
import Testimonials from "../components/Testmonials";
import Specials from "../components/Specials";

const Home = () => {
  return (
    <>
      <Hero />
      <MenuHighlights />
      <PrivateDining />
      <Testimonials />
      <Specials/>
    </>
  );
};

export default Home;
