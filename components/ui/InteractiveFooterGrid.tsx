"use client";

import React, { useEffect, useRef } from "react";

const InteractiveFooterGrid: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const handleMouseMove = (e: MouseEvent) => {
      const sqrs = grid.querySelectorAll(
        ".grid-item"
      ) as NodeListOf<HTMLDivElement>;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      sqrs.forEach((sqr) => {
        const rect = sqr.getBoundingClientRect();
        const sqrCenterX = rect.left + rect.width / 2;
        const sqrCenterY = rect.top + rect.height / 2;

        const diffX = mouseX - sqrCenterX;
        const diffY = mouseY - sqrCenterY;

        const radians = Math.atan2(diffY, diffX);
        const angle = (radians * 180) / Math.PI;

        sqr.style.transform = `rotate(${angle}deg)`;
      });
    };

    const handleMouseLeave = () => {
      const sqrs = grid.querySelectorAll(
        ".grid-item"
      ) as NodeListOf<HTMLDivElement>;
      sqrs.forEach((sqr) => {
        sqr.style.transform = "rotate(0deg)";
      });
    };

    grid.addEventListener("mousemove", handleMouseMove);
    grid.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      grid.removeEventListener("mousemove", handleMouseMove);
      grid.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={gridRef} className="grid grid-cols-9 gap-6 w-full justify-center">
      {Array.from({ length: 63 }).map((_, index) => (
        <div
          key={index}
          className="grid-item w-2 h-2 bg-yellow-500 transition-transform duration-200 ease-out"
          style={{
            transformOrigin: "center",
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
};

export default InteractiveFooterGrid;
