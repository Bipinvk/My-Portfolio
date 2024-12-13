import { useRef, useEffect } from "react";

const AnimatedText: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const colors = ["#7c7d7d", "#ebebeb", "#ffffff", "#a7a7a7", "#d9d9d9"]; // Define colors
    const words: NodeListOf<HTMLSpanElement> | null =
      textRef.current?.querySelectorAll("span.word") || null;

    const handleScroll = () => {
      if (!words) return;

      words.forEach((word) => {
        const wordTop = word.getBoundingClientRect().top;
        const distanceFromTop = window.innerHeight - wordTop + 200; // Adjust offset as needed
        const colorIndex =
          Math.floor(Math.abs(distanceFromTop) / 50) % colors.length;
        word.style.color = colors[colorIndex];
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const text = [
    "Tu amiga & Versatile Developer based in India.",
    "With 2 years of professional experience in multidisciplinary development.",
    "Driven by a passion for creating impactful solutions.",
    "Currently delivering value to clients and projects worldwide.",
  ];

  return (
    <div className="text-center mb-12 w-full flex items-center justify-center">
      <p className="text-gray-300  text-2xl text-justify" ref={textRef}>
        {text.map((line, lineIndex) => (
          <span key={lineIndex} className="block ">
            {line.split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="word inline-block">
                {word}&nbsp;
              </span>
            ))}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
};

export default AnimatedText;
