"use client";

import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResumeDownload = () => {
    // Direct path to the resume in the public folder
    const resumePath = "/resume/BipinVK_FullStackResume2025.pdf";

    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = resumePath;
    link.setAttribute("download", "BipinVK_FullStackResume2025.pdf");

    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
        <nav className="hidden md:flex space-x-8  ">
          <Link href="#about" className="nav-link effect-shine">
            About
          </Link>
          <Link href="#projects" className="nav-link effect-shine">
            Projects
          </Link>
          <Link href="#experience" className="nav-link effect-shine">
            Expertise
          </Link>
          <Link href="#experience" className="nav-link effect-shine">
            Experience
          </Link>
         
          <div className="pl-20">
            <button
              onClick={handleResumeDownload}
              className=" hover:underline nav-link effect-shine flex items-center"
            >
              Download Resume
            </button>
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
            <Link href="#about" className="nav-link effect-shine">
              About
            </Link>
            <Link href="#experience" className="nav-link effect-shine">
              Projects
            </Link>
            <Link href="#experience" className="nav-link effect-shine">
              Expertise
            </Link>
            <Link href="#contact" className="nav-link effect-shine">
            Contact
          </Link>
            <div className="pl-20">
              <button
                onClick={handleResumeDownload}
                className="hover:underline nav-link effect-shine flex items-center"
              >
                Download Resume
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
