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

const YoutubeIcon = () => {
  const pathControls = useAnimation();
  const triangleControls = useAnimation();

  const handleMouseEnter = () => {
    pathControls.start("animate");
    triangleControls.start("animate");
  };

  const handleMouseLeave = () => {
    pathControls.start("normal");
    triangleControls.start("normal");
  };

  return (
    <div
      className="p-1.5 rounded-full bg-black text-white cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
          animate={pathControls}
          d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
        />
        <motion.path
          variants={pathVariants}
          initial="normal"
          animate={triangleControls}
          d="M10 15l5-3-5-3z"
        />
      </svg>
    </div>
  );
};

export default YoutubeIcon;
