import { Star } from "lucide-react";
import React, { useEffect, useRef } from "react";
import AnimatedText from "./ui/animatedText";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomeTop = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial Load Animation
    gsap.fromTo(
      textRef.current,
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
    const elements = mainRef.current?.children;
    // ScrollTrigger Animation for Sections
    if (elements) {
      gsap.fromTo(
        elements,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mainRef.current,
            start: "top 80%", // Starts animation when the section enters 80% of the viewport
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div
      id="about"
      className="h-screen w-full flex justify-center items-center xs:py-4 md:py-16 sm:py-4 lg:py-20 max-w-8xl"
    >
      <div
        ref={textRef}
        className="w-full h-full flex flex-col items-center justify-center xs:py-4 md:py-10 sm:py-4 lg:py-14 max-w-8xl"
      >
        <div className="text-center w-full flex items-center justify-center">
          <AnimatedText />
        </div>

        <main ref={mainRef} className="w-full max-w-4xl">
          <section className="mb-12">
            <h2 className="font-extralight mb-4 flex items-center gap-2">
              <Star size={16} className="text-gray-300" />
              Experience
            </h2>
            <div className="flex flex-col">
              <span>Augusta Hitech Soft Solutions, Coimbatore, India</span>
              <span>2023 to PRESENT</span>
              <p className="text-gray-400 text-sm">Software Developer</p>
            </div>
          </section>
          <section className="mb-12">
            <h2 className="font-extralight mb-4 flex items-center gap-2">
              <Star size={16} className="text-gray-300" />
              Skill Set
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <li>· Full-Stack Web Development</li>
              <li>· Artificial Intelligence Solutions</li>
              <li>· Security and Authentication</li>
              <li>· Mobile Applications</li>
              <li>· UI/UX Design</li>
              <li>· Technical Consulting</li>
            </ul>
          </section>
        </main>

        <div className="w-full mx-10 flex justify-between text-gray-500 text-xs text-center">
          <p>Bipin V K ™</p>
          <p>Portfolio © 2025</p>
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
