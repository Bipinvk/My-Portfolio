"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./GlitchMouseEffect.module.css";

interface MouseGlitchEffectProps {
  children?: React.ReactNode;
  className?: string;
}

const MouseGlitchEffect: React.FC<MouseGlitchEffectProps> = ({
  children,
  className = "",
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const currentContainer = containerRef.current;

    // Use optional chaining and type checking to prevent "is not a function" errors
    if (currentContainer && typeof currentContainer.addEventListener === 'function') {
      currentContainer.addEventListener("mousemove", handleMouseMove);
      currentContainer.addEventListener("mouseenter", handleMouseEnter);
      currentContainer.addEventListener("mouseleave", handleMouseLeave);
    }

    // Fallback to document-level listeners if needed
    const documentMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        if (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        ) {
          setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          });
          setIsHovering(true);
        } else {
          setIsHovering(false);
        }
      }
    };

    document.addEventListener("mousemove", documentMouseMove);

    return () => {
      if (currentContainer) {
        currentContainer.removeEventListener("mousemove", handleMouseMove);
        currentContainer.removeEventListener("mouseenter", handleMouseEnter);
        currentContainer.removeEventListener("mouseleave", handleMouseLeave);
      }
      document.removeEventListener("mousemove", documentMouseMove);
    };
  }, []);

  // Use type assertion to handle CSS custom properties
  const glitchStyle: React.CSSProperties = {
    '--mouse-x': `${mousePosition.x}px`,
    '--mouse-y': `${mousePosition.y}px`,
    '--glitch-active': isHovering ? '1' : '0',
  } as React.CSSProperties;

  return (
    <div
      ref={containerRef}
      className={`${styles.glitchContainer} ${className}`}
      style={glitchStyle}
    >
      {children}
      <div className={styles.glitchOverlay}></div>
    </div>
  );
};

export default MouseGlitchEffect;