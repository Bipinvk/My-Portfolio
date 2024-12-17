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
  const videoRef = useRef(null);

  useEffect(() => {
    // Text Animation for Multidisciplinary
    gsap.fromTo(
      multidisciplinaryRef.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
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
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      }
    );

    // Video Animation
    gsap.fromTo(
      videoRef.current,
      {
        opacity: 0,
        scale: 0.9,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.3,
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
      className="w-full h-screen flex items-center justify-center px-4 py-20 md:py-24"
    >
      <div className="max-w-6xl w-full flex flex-col items-center justify-center space-y-10 lg:space-y-12 md:space-y-14 sm:space-y-8">
        <div className="w-full max-w-xl justify-start">
          <h1
            ref={multidisciplinaryRef}
            className="text-gray-200 text-3xl md:text-4xl lg:text-4xl text-center opacity-0"
          >
            Multi-disciplinary
            <br />
            Creative Devel✧per
          </h1>
        </div>

        <div className="w-full max-w-sm ">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto aspect-video object-cover rounded-lg shadow-lg opacity-0"
            src="/footer/top.mp4"
          ></video>
        </div>

        <div className="w-full max-w-xl text-center">
          <h2
            ref={experienceRef}
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-2 opacity-0"
          >
            Turning <span className="effect-shine ">Ideas</span> to Experiences
            <br /> through Creativity
          </h2>

          <Link
            data-aos="fade-up"
            href="#contact"
            className="inline-block text-gray-400 effect-shine nav-link group"
          >
            <span className="hover:animate-bounce inline-block group-hover:animate-none mr-2">
              ↳{" "}
            </span>
            Book a Meeting
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
