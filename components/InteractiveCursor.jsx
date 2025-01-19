"use client";
import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const InteractiveCursor = ({ isHovered }) => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springX = useSpring(cursorX, { stiffness: 120, damping: 20 });
  const springY = useSpring(cursorY, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const mouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="cursor bg-black h-8 w-8 rounded-full fixed top-0 left-0 sm:display-none"
      style={{
        translateX: springX,
        translateY: springY,
        x: -16,
        y: -16,
        pointerEvents: "none",
        zIndex: 99999,
        mixBlendMode: "difference",
        backgroundColor: "white",
      }}
      animate={{
        scale: isHovered ? 6 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20, 
      }}
    ></motion.div>
  );
};

export default InteractiveCursor;
