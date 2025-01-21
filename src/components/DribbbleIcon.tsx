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

const DribbbleIcon = () => {
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
        <motion.circle
          variants={pathVariants}
          initial="normal"
          animate={controls}
          cx="12"
          cy="12"
          r="10"
        />
        <motion.path
          variants={pathVariants}
          initial="normal"
          animate={controls}
          d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"
        />
        <motion.path
          variants={pathVariants}
          initial="normal"
          animate={controls}
          d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"
        />
        <motion.path
          variants={pathVariants}
          initial="normal"
          animate={controls}
          d="M8.56 2.75c4.37 6 6 9.42 8 17.72"
        />
      </svg>
    </div>
  );
};

export default DribbbleIcon;
