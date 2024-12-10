"use client";
import React, { useState, useEffect } from "react";
import { motion, Variant, TargetAndTransition, AnimationControls } from "framer-motion";

interface MousePosition {
  x: number;
  y: number;
}

type CursorVariant = "default" | "text";

type CursorVariants = {
  [key in CursorVariant]: Variant;
};

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0
  });

  const [cursorVariant, setCursorVariant] = useState<CursorVariant>("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants: CursorVariants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      transition: {
        type: "spring",
        mass: 0.8
      }
    },
    text: {
      height: 100,
      width: 100,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "rgba(255,255,255,0.1)",
      mixBlendMode: "difference"
    }
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  useEffect(() => {
    const handleMouseEnterText = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest('a, button, [data-cursor="hover"]')) {
        textEnter();
      }
    };

    const handleMouseLeaveText = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest('a, button, [data-cursor="hover"]')) {
        textLeave();
      }
    };

    document.addEventListener('mouseenter', handleMouseEnterText, true);
    document.addEventListener('mouseleave', handleMouseLeaveText, true);

    return () => {
      document.removeEventListener('mouseenter', handleMouseEnterText, true);
      document.removeEventListener('mouseleave', handleMouseLeaveText, true);
    };
  }, []);

  return (
    <motion.div 
      className="fixed z-50 pointer-events-none rounded-full bg-black"
      variants={variants}
      animate={cursorVariant}
    />
  );
};

export default CustomCursor;