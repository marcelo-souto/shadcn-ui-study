"use client";

import { motion, Variants } from "framer-motion";

const animationVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      type: "spring",
      stiffness: 150,
    },
  },
};

const CourseVideo = () => {
  return (
    <motion.div
      variants={animationVariants}
      initial="hidden"
      animate="show"
      className="flex items-center justify-center bg-zinc-900/75 rounded-xl aspect-video"
    >
      <span className="material-symbols-rounded text-8xl text-emerald-800 cursor-pointer hover:text-emerald-500 transition-all duration-300 ease-in-out active:scale-[0.8]">
        play_circle
      </span>
    </motion.div>
  );
};

CourseVideo.displayName = "CourseVideo";

export { CourseVideo };
