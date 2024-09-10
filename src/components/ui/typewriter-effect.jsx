"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [cursorBlink, setCursorBlink] = useState(true);

  // Current word and its characters
  const currentWord = words[currentWordIndex]?.text || "";

  useEffect(() => {
    let typingTimeout;

    if (isTyping) {
      if (currentCharIndex < currentWord.length) {
        typingTimeout = setTimeout(() => {
          setCurrentCharIndex((prev) => prev + 1); // Typing forward
        }, 100);
      } else {
        // Start reversing (deleting characters)
        setTimeout(() => setIsTyping(false), 1000); // Pause before deleting
      }
    } else {
      if (currentCharIndex > 0) {
        typingTimeout = setTimeout(() => {
          setCurrentCharIndex((prev) => prev - 1); // Deleting backward
        }, 50);
      } else {
        // Move to the next word after fully deleting the current one
        setIsTyping(true);
        setCurrentWordIndex((prev) => (prev + 1) % words.length); // Loop through words
      }
    }

    return () => clearTimeout(typingTimeout);
  }, [currentCharIndex, isTyping, currentWord.length, words.length]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorBlinkInterval = setInterval(() => {
      setCursorBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorBlinkInterval);
  }, []);

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <motion.div className="overflow-hidden pb-2">
        <div
          className="text-xs sm:text-base md:text-l lg:text:xl xl:text-3xl font-semibold text-blue-300"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {currentWord.slice(0, currentCharIndex)}
        </div>
      </motion.div>
      <motion.span
        animate={{ opacity: cursorBlink ? 1 : 0 }}
        className={cn(
          "block rounded-sm w-[4px] h-4 sm:h-5 xl:h-10 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
