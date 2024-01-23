import React from "react";
import gsap from "gsap";
import CSSPlugin from "gsap/CSSPlugin"; // Required for GSAP to work properly with React
import { useEffect } from "react";
const Footer = () => {
  useEffect(() => {
    // Get the background GIF div
    const bgGifDiv = document.querySelector("#footer");

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
      <div
        id="footer"
        className="flex text-white justify-around items-center h-[10vh] absolute top-[100vh]"
      >
        <div className="w-[70vw] flex justify-center gap-x-3 items-center h-full">
          <div className="w-[10%]">asd</div>
          <div className="w-[10%]">asd</div>
          <div className="w-[10%]">asd</div>
          <div className="w-[10%]">asd</div>
          <div className="w-[10%]">asd</div>
        </div>
        <div className="w-[30vw] h-full">
          <div className="h-full flex justify-start items-center">Terms</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
