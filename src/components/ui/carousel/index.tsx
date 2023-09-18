"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";

type CarouselProps = React.ComponentProps<"div"> 

const Carousel = ({ children, className }: CarouselProps) => {

  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (carousel) {
      const carouselScrollWidth = carousel.scrollWidth + 24;
      const carouselOffsetWidth = carousel.offsetWidth;

      setWidth(carouselScrollWidth - carouselOffsetWidth);
    }
  }, [width]);

  return (
    <motion.div
      ref={carouselRef}
      className={cn(
        "min-w-full overflow-x-hidden bg-zinc-200 py-8 rounded-2xl cursor-grab",
        className
      )}
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        className="flex space-x-6 px-6"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

Carousel.displayName = "Carousel";

export { Carousel };
