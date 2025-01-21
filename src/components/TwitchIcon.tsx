"use client";

import { motion, useAnimation, Variants } from "framer-motion";

const pathVariants: Variants = {
  normal: {
    opacity: 1,
    pathLength: 1,
    pathOffset: 0,
    transition: {
      duration: 0.4,
      opacity: { duration: 0.1 },
    },
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    pathOffset: [1, 0],
    transition: {
      duration: 0.6,
      ease: "linear",
      opacity: { duration: 0.1 },
    },
  },
};

const TwitchIcon = () => {
  const controls = useAnimation();

  return (
    <div
      className="p-1.5 rounded-full bg-black text-white cursor-pointer"
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path
          variants={pathVariants}
          initial="normal"
          animate={controls}
          d="M21 2H3v16h5v4l4-4h5l4-4V2z"
        />
        <motion.path
          variants={pathVariants}
          initial="normal"
          animate={controls}
          d="M11 11V7"
        />
        <motion.path
          variants={pathVariants}
          initial="normal"
          animate={controls}
          d="M16 11V7"
        />
      </svg>
    </div>
  );
};

export default TwitchIcon;
