import React, { useEffect, useState } from "react";
import { MotionAnimate } from "react-motion-animate";

export default function TypewriterEffect ({ text, speed = 100 }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prevText) => prevText + text[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(intervalId); // Ensure the interval is cleared after the text finishes
      }
    }, speed);

    return () => clearInterval(intervalId);  // Cleanup on unmount
  }, [text, speed]);

  return (
    <MotionAnimate animation="fadeInUp" speed={0.5}>
      <span>{displayedText}</span>
    </MotionAnimate>
  );
};
