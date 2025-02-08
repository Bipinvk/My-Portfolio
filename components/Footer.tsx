import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate text
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      }
    );

    // Animate video
    gsap.fromTo(
      videoRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top 80%",
        },
      }
    );

    const element = linksRef.current?.children;
    // Animate links
    if (element) {
      gsap.fromTo(
        element,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: linksRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <footer className="w-full h-screen" id="contact">
      <div className="w-full h-full flex flex-col items-center justify-center max-w-8xl">
        <section className="w-full max-w-6xl container mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Animated Text */}
            <div
              ref={textRef}
              className="flex items-center justify-center md:justify-start text-center md:text-left"
            >
              <p className="text-xl lg:text-2xl font-medium md:text-lg sm:text-2xl">
                Feel free to contact me.
                <br /> {"Let's"} work together to bring your ideas to life!{" "}
                <br />
                Have a great day {":)"}
              </p>
            </div>

            {/* Animated Video */}
            <div className="flex justify-center items-center">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-24 max-md:w-full max-md:h-24 object-cover rounded-lg webgl-transition-mobile"
                src="footer/video2.mp4"
              ></video>
            </div>

            {/* Animated Links */}
            <div
              ref={linksRef}
              className="flex text-sm items-center justify-center md:items-start gap-4 sm:text-sm md:text-base lg:text-md"
            >
              <div className="flex flex-col items-center md:items-start">
                <Link
                  href="mailto:bipinvk47@gmail.com"
                  className="flex items-center space-x-2 hover:text-blue-500 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  EMAIL
                </Link>
                <Link
                  href="https://github.com/Bipinvk"
                  className="flex items-center space-x-2 hover:text-gray-700 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GITHUB
                </Link>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <Link
                  href="https://wa.me/9048491610"
                  className="flex items-center space-x-2 hover:text-green-500 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WHATSAPP
                </Link>
                <Link
                  href="https://instagram.com/_3ipin"
                  className="flex items-center space-x-2 hover:text-pink-500 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  INSTAGRAM
                </Link>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <Link
                  href="https://linkedin.com/in/bipin-v-k-499b751a6"
                  className="flex items-center space-x-2 hover:text-gray-700 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LINKEDIN
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="absolute bottom-4 px-4 w-full mx-10 flex justify-between text-gray-500 text-xs text-center">
          <p>Built by Bipin with 🤍</p>
          <p>Portfolio © 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
