"use client";

import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showScroll && (
      <button
        className="flex hover:animate-bounce items-center effect-shine fixed bottom-6 right-6 p-3 rounded-full  shadow-lg  focus:outline-none"
        onClick={scrollToTop}
      >
        Scroll To Top
      </button>
    )
  );
};
export default ScrollToTop;
