"use client";

import React, { useState, useEffect, useRef } from 'react';
import styles from './CustomCursor.module.css';

interface CustomCursorProps {
  children?: React.ReactNode;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringText, setIsHoveringText] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnterText = (e: Event) => {
      // Use type guard and check for element
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === 'P' || target.tagName === 'SPAN' || target.tagName === 'A')) {
        setIsHoveringText(true);
      }
    };

    const handleMouseLeaveText = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === 'P' || target.tagName === 'SPAN' || target.tagName === 'A')) {
        setIsHoveringText(false);
      }
    };

    // Add event listeners to document
    document.addEventListener('mousemove', handleMouseMove);
    
    // Use querySelectorAll to find all text-based elements
    const textElements = document.querySelectorAll('p, span, a');
    textElements.forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnterText);
      element.addEventListener('mouseleave', handleMouseLeaveText);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      
      textElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnterText);
        element.removeEventListener('mouseleave', handleMouseLeaveText);
      });
    };
  }, []);

  return (
    <>
      {children}
      <div 
        ref={cursorRef}
        className={`${styles.customCursor} ${isHoveringText ? styles.hoveringText : ''}`}
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px` 
        }}
      />
    </>
  );
};

export default CustomCursor;