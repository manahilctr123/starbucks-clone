"use client";

import { motion, useAnimation, Variants } from "framer-motion";

const instagramVariants: Variants = {
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

const InstagramIcon = () => {
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
        <motion.rect
          variants={instagramVariants}
          initial="normal"
          animate={controls}
          x="2"
          y="2"
          width="20"
          height="20"
          rx="5"
          ry="5"
        />
        <motion.path
          variants={instagramVariants}
          initial="normal"
          animate={controls}
          d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
        />
        <motion.line
          variants={instagramVariants}
          initial="normal"
          animate={controls}
          x1="17.5"
          y1="6.5"
          x2="17.51"
          y2="6.5"
        />
      </svg>
    </div>
  );
};

export default InstagramIcon;
