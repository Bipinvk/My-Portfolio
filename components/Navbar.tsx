"use client";

import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // GSAP animation on navbar links
    gsap.fromTo(
      ".nav-link",
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 }
    );

    // GSAP animation on scroll effect
    gsap.fromTo(
      ".navbar",
      { y: 0 },
      {
        y: 0,
        duration: 0.4,
        scrollTrigger: {
          trigger: ".navbar",
          start: "top top",
          end: "bottom top",
          toggleActions: "play pause resume reset",
        },
      }
    );
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-xs border-b border-gray-200 navbar py-3">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo/Name on the left */}
        <div className="text-2xl font-thin text-black">
          Bipin V K <span className="font-light text-gray-300">™</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-600">
          <a href="#about" className="nav-link hover:text-black">
            About
          </a>
          <a href="#projects" className="nav-link hover:text-black">
            Projects
          </a>
          <a href="#expertise" className="nav-link hover:text-black">
            Expertise
          </a>
          <a href="#experience" className="nav-link hover:text-black">
            Experience
          </a>
          <div className="pl-20">
            <a href="#contact" className="nav-link hover:text-black">
              ↳ Contact
            </a>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none text-black"
        >
          <span className="material-icons">menu</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-start space-y-2 px-6 py-4">
            <a href="#about" className="nav-link hover:text-black">
              About
            </a>
            <a href="#projects" className="nav-link hover:text-black">
              Projects
            </a>
            <a href="#expertise" className="nav-link hover:text-black">
              Expertise
            </a>
            <a href="#experience" className="nav-link hover:text-black">
              Experience
            </a>
            <a href="#contact" className="nav-link hover:text-black">
              ↳ Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
