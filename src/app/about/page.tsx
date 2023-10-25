"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { Recycle, ShieldCheck, Sparkles, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const advantagesList = [
  {
    icon: (
      <Sparkles
        size={32}
        className="text-sky-400 group-hover:text-white transition-colors duration-100"
      />
    ),
    title: "Innovation",
    content:
      "We thrive on constant exploration and experimentation, working on the edge of technological possibilities. Our solutions are designed to solve real-world problems, making everyday life more efficient and enjoyable.",
  },
  {
    icon: (
      <ShieldCheck
        size={32}
        className="text-sky-400 group-hover:text-white transition-colors duration-100"
      />
    ),
    title: "Quality",
    content:
      "Excellence is non-negotiable for us. We take pride in crafting high-quality products and services that stand the test of time. Our commitment to quality is a cornerstone of our success.",
  },
  {
    icon: (
      <Users2
        size={32}
        className="text-sky-400 group-hover:text-white transition-colors duration-100"
      />
    ),
    title: "User-Centric Design",
    content:
      "We place the user at the heart of everything we do. Our products are designed with a deep understanding of the end-user's needs and preferences, ensuring a seamless and enjoyable experience.",
  },
  {
    icon: (
      <Recycle
        size={32}
        className="text-sky-400 group-hover:text-white transition-colors duration-100"
      />
    ),
    title: "Sustainability",
    content:
      "We understand our responsibility to the planet and future generations. Sustainability is woven into our business model, from our eco-conscious manufacturing practices to energy-efficient solutions.",
  },
];

const container = {
  visible: {
    transition: { duration: 1, staggerChildren: 0.5, when: "beforeChildren" },
  },
};

const item = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      delay: index * 0.3,
    },
  }),
};

export default function AboutPage() {
  return (
    <main className="flex flex-col lg:flex-row content-start">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
        className="relative min-h-[260px] overflow-hidden row-span-2 group w-full lg:w-3/5"
      >
        <Image
          src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Prédios"
          fill={true}
          className="h-full w-full object-cover object-center group-hover:scale-110 transition-all duration-300 ease-in-out"
        />
      </motion.div>

      <div className="flex flex-col gap-8 w-full lg:w-2/5 p-6 md:p-10 lg:p-14 bg-gradient-to-tr from-zinc-100 via-zinc-100 to-zinc-50 dark:from-black dark:via-zinc-950 dark:to-zinc-950">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
          className="max-w-full lg:max-w-xl"
        >
          <h1 className="text-xl font-extrabold sm:text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-100 mb-2 sm:mb-4 md:mb-8">
            About us
          </h1>
          <p className="text-zinc-900 dark:text-zinc-200 text-[0.875rem] sm:text-[1rem] mb-2 leading-loose">
            <strong>TechMob</strong> is a pioneering technology company
            committed to <strong>innovation</strong>, <strong>quality</strong>,{" "}
            <strong>user-centric design</strong>, and{" "}
            <strong>sustainability</strong>. With a diverse team of visionaries,
            engineers, and creatives, we develop{" "}
            <strong>high-quality software</strong>,<strong>hardware</strong>,{" "}
            <strong>AI</strong>, and <strong>cybersecurity solutions</strong>.
            Our mission is to shape a brighter, more connected, and sustainable
            digital future.
          </p>

          <Button
            size="sm"
            variant="link"
            className="text-sky-400 dark:text-sky-400 font-semibold px-0"
          >
            Ver mais
          </Button>
        </motion.div>

        <motion.ul
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid max-w-full lg:max-w-xl grid-cols-[repeat(auto-fit,minmax(268px,1fr))] gap-8"
        >
          {advantagesList.map((advantage, index) => (
            <motion.li key={index} variants={item} custom={index + 1}>
              <motion.div className="flex flex-col gap-2 group">
                {advantage.icon}
                <h2 className="text-zinc-950 dark:text-zinc-100 text-base sm:text-lg font-semibold mt-3">
                  {advantage.title}
                </h2>
                <p className="text-sm text-zinc-800 dark:text-zinc-300">
                  {advantage.content}
                </p>
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </main>
  );
}
