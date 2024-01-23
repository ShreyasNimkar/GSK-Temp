import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import CSSPlugin from "gsap/CSSPlugin"; // Required for GSAP to work properly with React

const C = CSSPlugin; // Needed for GSAP to recognize CSSPlugin

const HeroComponent = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    // Get the title element
    const titleElement = titleRef.current;

    // Use GSAP to animate the fade in
    gsap.fromTo(
      titleElement,
      { opacity: 0 },
      { opacity: 1, duration: 4, ease: "power2.out" }
    );
  }, []);

  return (
    <div
      ref={titleRef}
      className="h-[100vh]  max-sm:mt-48 text-white  z-10 w-full  text-center justify-around items-center"
    >
      <p className="text-2xl">All your trades,</p>{" "}
      <p className="text-7xl font-bold py-1">
        right here<span className="text-[#CE2D4F]">!</span>
      </p>
      <p className="text-sm">
        With Smart Invest’s revolutionary new product,
        <br /> Post Trade Processing is easier than ever before
      </p>
      <div
        href="#_"
        class="relative cursor-pointer inline-flex items-center px-32 py-1 overflow-hidden text-lg font-medium text-[#11B5E4] border-2 border-[#11B5E4] rounded-full hover:text-white group hover:bg-gray-50 mt-12"
      >
        <span class="absolute left-0 block w-full h-0 transition-all bg-[#11B5E4] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
        <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span class="relative">Button Text</span>
      </div>
    </div>
  );
};

export default HeroComponent;
