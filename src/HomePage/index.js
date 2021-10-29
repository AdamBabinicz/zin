import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import HeroSec from "../components/HeroSection";
import About from "../components/About";
import Service from "../components/ServiceSec";
import Slider from "../components/Slider/Slider";
import Contact from "../components/Contact";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSec />
      <About />
      <Service />
      <Slider />
      <Contact />
    </>
  );
};

export default HomePage;
