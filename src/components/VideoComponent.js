import React, { useEffect } from "react";
import gsap from "gsap";
import CSSPlugin from "gsap/CSSPlugin"; // Required for GSAP to work properly with React
import Footer from "./Footer";

const C = CSSPlugin; // Needed for GSAP to recognize CSSPlugin

const VideoComponent = () => {
  useEffect(() => {
    // Get the background GIF div
    const bgGifDiv = document.querySelector(".bg-gif");

    // Store the original scrollTop value
    const originalScrollTop = bgGifDiv.scrollTop;

    // Delay the GSAP animation for 10 seconds
    setTimeout(() => {
      // Use GSAP to animate the translation after the delay
      gsap.to(bgGifDiv, { y: "100vh", duration: 8, ease: "power2.out" });

      // Set the scrollTop value back to the original after the animation
      gsap.to(bgGifDiv, {
        duration: 0.1,
        delay: 8, // Adjust this delay as needed
      });
    }, 2000); // 10 seconds in milliseconds
  }, []); // Run this effect only once on component mount

  return (
    <>
      <div className="h-[100vh] w-[100vw] bg-gif bg-cover bg-no-repeat -z-10 absolute top-0"></div>
    </>
  );
};

export default VideoComponent;
