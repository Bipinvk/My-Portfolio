"use client";

import React, { useState, useEffect } from "react";

const Hero = () => {
  const words = ["Innovation", "Experiences", "Solutions", "Possibilities"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, [words.length]);


  return (
    <div className="relative pb-20 pt-36">
      {/* Content */}
      <div className="relative z-10 flex justify-center items-center flex-col max-w-screen-lg mx-auto">
        {/* Tagline */}
        <p className="uppercase tracking-widest text-xs text-center text-blue-500 mb-2">
          Transforming ideas into innovation
        </p>

        {/* Title */}
        <h1 className="text-center text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-bold leading-tight">
          Collaborating with Bi📌 to craft
          <span className="text-blue-500"> {words[currentWordIndex]}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mt-4">
          Hi! I&apos;m Bipin, a Full Stack Developer crafting elegant solutions
          for complex problems.
        </p>

        {/* Button */}
        <a
          href="#about"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 text-sm md:text-base lg:text-lg font-medium text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Show my work
        </a>
      </div>

      {/* <ScrollToTop /> */}
    </div>
  );
};

export default Hero;
