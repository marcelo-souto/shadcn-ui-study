"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { BarChartBig, Coins, Target, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const advantagesList = [
  {
    icon: (
      <Target
        size={32}
        className="text-sky-400 group-hover:text-white transition-colors duration-100"
      />
    ),
    title: "Lorem ipsum dolor sit amet",
  },
  {
    icon: (
      <Users2
        size={32}
        className="text-sky-400 group-hover:text-white transition-colors duration-100"
      />
    ),
    title: "Lorem ipsum dolor sit amet",
  },
  {
    icon: (
      <Coins
        size={32}
        className="text-sky-400 group-hover:text-white transition-colors duration-100"
      />
    ),
    title: "Lorem ipsum dolor sit amet",
  },
  {
    icon: (
      <BarChartBig
        size={32}
        className="text-sky-400 group-hover:text-white transition-colors duration-100"
      />
    ),
    title: "Lorem ipsum dolor sit amet",
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
    <main className="flex gap-8 sm:gap-10 md:gap-14 content-start pt-12">
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
        className="relative min-h-[260px] overflow-hidden row-span-2 group w-3/5"
      >
        <Image
          src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Prédios"
          fill={true}
          className="h-full w-full object-cover object-center group-hover:scale-125 transition-all duration-300 ease-in-out"
        />
      </motion.div>

      <div className="flex flex-col gap-8 w-2/5">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
          className="max-w-xl"
        >
          <h1 className="text-xl font-extrabold sm:text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-100 mb-2 sm:mb-4 md:mb-8">
            Sobre nós
          </h1>
          <p className="text-zinc-200 text-sm sm:text-base mb-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            sit repellendus explicabo accusantium adipisci quibusdam autem ab
            deserunt blanditiis voluptatem dolores impedit ipsam, sunt itaque
            quod eum obcaecati praesentium aperiam!
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
          className="grid max-w-xl grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8"
        >
          {advantagesList.map((advantage, index) => (
            <motion.li key={index} variants={item} custom={index + 1}>
              <motion.div className="flex flex-col gap-2 group">
                {advantage.icon}
                <h2 className="text-zinc-950 dark:text-zinc-100 text-base sm:text-lg font-semibold mt-3">
                  {advantage.title}
                </h2>
                <p className="text-sm text-zinc-800 dark:text-zinc-300 max-w-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  fugit distinctio suscipit, saepe blanditiis minus, dicta.
                </p>
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </main>
  );
}
