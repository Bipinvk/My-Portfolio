"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const multidisciplinaryRef = useRef(null);
  const experienceRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Text Animation for Multidisciplinary
    gsap.fromTo(
      multidisciplinaryRef.current,
      {
        opacity: 0,
        x: -50,
        scale: 0.9,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
      }
    );

    // Text Animation for Experience
    gsap.fromTo(
      experienceRef.current,
      {
        opacity: 0,
        x: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      }
    );

    // Scroll-triggered animation for the entire container
    gsap.fromTo(
      containerRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      id="home"
      className="w-full h-screen flex justify-center items-center"
    >
      <div className="h-full py-20 w-full">
        <div className="h-3/6 w-full flex justify-center items-end">
          <div>
            <h1
              ref={multidisciplinaryRef}
              className="text-3xl text-justify opacity-0"
            >
              Multi-disciplinary
              <br />
              Creative developer
            </h1>
            <div></div>
          </div>
        </div>
        <div className="h-3/6 w-full flex justify-between text-gray-300 items-end">
          <div className="">
            <h1 ref={experienceRef} className="text-2xl opacity-0">
              Turning ideas to Experience
              <br /> through collaboration
              <br /> and creativity.
            </h1>

            <Link href="#contact" className="text-gray-500  effect-shine nav-link group ">
              <span className=" hover:animate-bounce inline-block group-hover:animate-none mr-1">
                ↳{" "}
              </span>
              Book a meeting
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
