"use client";

import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";

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
    <header className="fixed top-0 left-0 w-full z-50  shadow-sm border-gray-200 navbar py-3 bg-black/50 px-8">
      <div className=" mx-auto  py-4 flex justify-between items-center">
        {/* Logo/Name on the left */}
        <div className="text-2xl font-thin ">Bipin V K ™</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 ">
          <Link href="#about" className="nav-link hover:text-black">
            About
          </Link>
          <Link href="#projects" className="nav-link hover:text-black">
            Projects
          </Link>
          <Link href="#expertise" className="nav-link hover:text-black">
            Expertise
          </Link>
          <Link href="#experience" className="nav-link hover:text-black">
            Experience
          </Link>
          <div className="pl-20">
            <Link href="#contact" className="nav-link hover:text-black">
              <span className="animate-bounce">↳ </span>Contact
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none ">
          <span className="material-icons">menu</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden  shadow-lg">
          <nav className="flex flex-col items-end space-y-2 px-6 py-4">
            <Link href="#about" className="nav-link hover:text-black">
              About
            </Link>
            <Link href="#projects" className="nav-link hover:text-black">
              Projects
            </Link>
            <Link href="#expertise" className="nav-link hover:text-black">
              Expertise
            </Link>
            <Link href="#experience" className="nav-link hover:text-black">
              Experience
            </Link>
            <Link href="#contact" className="nav-link hover:text-black">
              ↳ Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
