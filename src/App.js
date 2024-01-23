import React, { useEffect } from "react";
import gsap from "gsap";
import CSSPlugin from "gsap/CSSPlugin"; // Required for GSAP to work properly with React
import HeroComponent from "./components/HeroComponent";
import VideoComponent from "./components/VideoComponent";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const C = CSSPlugin; // Needed for GSAP to recognize CSSPlugin

const App = () => {
  return (
    <>
      <Navbar />

      <HeroComponent />

      <VideoComponent />
      <Footer />
    </>
  );
};

export default App;
