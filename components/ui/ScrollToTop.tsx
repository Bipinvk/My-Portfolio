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
        className="flex hover:border hover:border-zinc-800  items-center effect-shine fixed bottom-6 right-6 p-3  shadow-lg  focus:outline-none bg-zinc-800/50"
        onClick={scrollToTop}
      >
        ↑
      </button>
    )
  );
};
export default ScrollToTop;
