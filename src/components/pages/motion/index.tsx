"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const Motion = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen">
      <motion.button
        onClick={() => setIsLoading(!isLoading)}
        className="flex items-center justify-center py-3 px-6 cursor-pointer text-white"
        initial={{ background: "#ff008c", borderRadius: "12%", width: 100 }}
        animate={{
          background: isLoading ? "#7700ff" : "#ff008c",
          borderRadius: isLoading ? "50%" : "12%",
          width: isLoading ? 50 : 100,
        }}
      >
        {isLoading ? "O" : "SUBMIT"}
      </motion.button>
    </div>
  );
};

Motion.displayName = "Motion";

export { Motion };
