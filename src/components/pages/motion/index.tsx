"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const items = [
  {
    title: "Item 1",
    image: "https://via.placeholder.com/150",
    description: "Description for item 1",
  },
  {
    title: "Item 2",
    image: "https://via.placeholder.com/150",
    description: "Description for item 2",
  },
  {
    title: "Item 3",
    image: "https://via.placeholder.com/150",
    description: "Description for item 3",
  },
  {
    title: "Item 4",
    image: "https://via.placeholder.com/150",
    description: "Description for item 4",
  },
  {
    title: "Item 5",
    image: "https://via.placeholder.com/150",
    description: "Description for item 5",
  },
  {
    title: "Item 6",
    image: "https://via.placeholder.com/150",
    description: "Description for item 6",
  },
  {
    title: "Item 7",
    image: "https://via.placeholder.com/150",
    description: "Description for item 7",
  },
  {
    title: "Item 8",
    image: "https://via.placeholder.com/150",
    description: "Description for item 8",
  },
  {
    title: "Item 9",
    image: "https://via.placeholder.com/150",
    description: "Description for item 9",
  },
  {
    title: "Item 10",
    image: "https://via.placeholder.com/150",
    description: "Description for item 10",
  },
];

const ProductCard = ({ title, image, description }: any) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      key={title}
      className="max-w-lg w-full border border-zinc-700 rounded-lg overflow-hidden shadow-lg shadow-zinc-900"
    >
      <CardHeader className="p-0 relative h-40 w-full">
        <Image
          className="object-cover object-center"
          src={image}
          alt={title}
          fill={true}
        />
      </CardHeader>

      <CardContent className="p-4">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>

    </motion.div>
  );
};

const Motion = () => {
  return (
    <div className="flex flex-col items-center max-w-6xl mx-auto min-h-screen gap-4">
      {items.map((item, index) => (
        <ProductCard key={index} {...item} />
      ))}
    </div>
  );
};

Motion.displayName = "Motion";

export { Motion };
