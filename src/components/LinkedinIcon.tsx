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

const LinkedinIcon = () => {
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
          d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
        />
        <motion.rect
          variants={pathVariants}
          initial="normal"
          animate={controls}
          x="2"
          y="9"
          width="4"
          height="12"
        />
        <motion.circle
          variants={pathVariants}
          initial="normal"
          animate={controls}
          cx="4"
          cy="4"
          r="2"
        />
      </svg>
    </div>
  );
};

export default LinkedinIcon;
