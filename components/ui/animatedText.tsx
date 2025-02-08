import React, { useRef, useEffect } from "react";

const AnimatedText: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const colors = ["#7c7d7d", "#ebebeb", "#ffffff", "#a7a7a7", "#d9d9d9"];
    const words: NodeListOf<HTMLSpanElement> | null =
      textRef.current?.querySelectorAll("span.word") || null;

    const handleScroll = () => {
      if (!words) return;

      words.forEach((word, index) => {
        const wordRect = word.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate the distance of the word from the top of the viewport
        const distanceFromTop = windowHeight - wordRect.top;

        // Use the index and distance to create a staggered color transition
        const colorIndex = Math.floor(
          (Math.abs(distanceFromTop) / 50 + index * 0.5) % colors.length
        );

        word.style.color = colors[colorIndex];
        word.style.transition = "color 0.3s ease-in-out";
      });
    };

    // Initial call to set initial colors
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const text = [
    "Versatile Developer based in India.",
    "With 2 years of professional experience in multidisciplinary development.",
    "Driven by a passion for creating impactful solutions.",
    "Currently delivering value to clients and projects worldwide.",
  ];

  return (
    <div className="text-center mb-12 w-full flex items-center justify-center">
      <p className="text-gray-300 text-xl text-justify" ref={textRef}>
        {text.map((line, lineIndex) => (
          <span key={lineIndex} className="block">
            {line.split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="word inline-block mr-1">
                {word}&nbsp;
              </span>
            ))}
            <br />
          </span>
        ))}
      </p>
      <span className="md:min-w-52"></span>
    </div>
  );
};

export default AnimatedText;
