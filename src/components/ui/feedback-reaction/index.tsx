"use client";

import React from "react";
import { Toggle } from "../toggle";
import { cn } from "@/lib/utils";
import { MotionProps, motion } from "framer-motion";

type FeedbackReactionProps = React.HTMLAttributes<HTMLDivElement> & MotionProps;

const FeedbackReaction = ({ className, ...props }: FeedbackReactionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        type: "spring",
        stiffness: 100,
      }}
      className={cn("flex p-2 gap-1 w-fit h-fit", className)}
      {...props}
    >
      <Toggle className="rounded-full w-10 h-10 dark:bg-zinc-900 dark:hover:bg-emerald-500/10 text-zinc-400 dark:hover:text-emerald-500 data-[state=on]:bg-emerald-500/10 data-[state=on]:text-emerald-500">
        <span className="material-symbols-rounded text-lg">thumb_up</span>
      </Toggle>
      <Toggle className="rounded-full w-10 h-10 dark:bg-zinc-900 dark:hover:bg-emerald-500/10 text-zinc-400 dark:hover:text-emerald-500 data-[state=on]:bg-emerald-500/10 data-[state=on]:text-emerald-500">
        <span className="material-symbols-rounded text-lg">thumb_down</span>
      </Toggle>
    </motion.div>
  );
};

FeedbackReaction.displayName = "FeedbackReaction";

export { FeedbackReaction };
