"use client";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";

interface LoaderProps {
  duration?: number;
}

const ModernLoader: React.FC<LoaderProps> = ({ duration = 3000 }) => {
  const [progress, setProgress] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setIsLoaded(true);
          return 100;
        }
        return prevProgress + 1;
      });
    }, duration / 100);

    // GSAP animation for the counter
    if (counterRef.current) {
      gsap.fromTo(
        counterRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          repeat: -1,
          yoyo: true,
        }
      );
    }

    return () => clearInterval(interval);
  }, [duration]);

  useEffect(() => {
    if (isLoaded) {
      const loaderElement = loaderRef.current;
      if (loaderElement) {
        gsap.to(loaderElement, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            router.push("/"); 
          },
        });
      }
    }
  }, [isLoaded, router]);

  if (isLoaded) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center "
    >
      {/* Loading Counter */}
      <div ref={counterRef} className="text-sm font-bold text-white absolute flex items-end justify-end">
        {progress}%
      </div>



      {/* Bottom Progress Indicator */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-[4px] bg-gray-800">
        <div
          className="h-full bg-gray-800"
          style={{ width: `${progress}%`, transition: "width 0.1s linear" }}
        ></div>
      </div>
    </div>
  );
};

export default ModernLoader;
