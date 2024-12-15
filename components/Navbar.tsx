"use client";
import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { X, Menu } from "lucide-react"; // Using lucide-react for icons

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const navRef = useRef(null);
  const lastScrollY = useRef(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResumeDownload = () => {
    const resumePath = "/resume/BipinVK_FullStackResume2025.pdf";
    const link = document.createElement("a");
    link.href = resumePath;
    link.setAttribute("download", "BipinVK_FullStackResume2025.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show/hide navbar based on scroll direction
      if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        setIsNavVisible(false);
        // setIsMenuOpen(false);
      } else {
        // Scrolling up
        setIsNavVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // GSAP animations
    gsap.fromTo(
      ".nav-link",
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 }
    );

    // Cleanup event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      ref={navRef}
      className={`
        fixed top-0 left-0 w-full z-50 shadow-sm border-gray-200 navbar 
        lg:py-3 md:py-1 bg-black/70 px-4 sm:px-8 transition-all duration-300 
        ${isNavVisible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="mx-auto py-4 flex justify-between items-center">
        {/* Logo/Name on the left */}
        <Link className="text-xl font-thin " href={"/"}>
          Bipin V K ™
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8  ">
          <Link href="#about" className="nav-link effect-shine">
            About
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
          <span>
            {isMenuOpen == true ? (
              <X size={18} className="hover:text-gray-400" />
            ) : (
              <span className="material-icons effect-shine">menu</span>
            )}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden  shadow-lg">
          <nav className="flex flex-col items-end space-y-2 ">
            <Link href="#about" className="nav-link effect-shine">
              About
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
