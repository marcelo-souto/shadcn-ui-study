"use client";

import { AnimatedText } from "@/components/ui/animated-text";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";

const technologies = [
  "React",
  "Angular",
  "Vue",
  "Ember",
  "Svelte",
  "jQuery",
  "Backbone.js",
  "Meteor",
  "Express.js",
  "Django",
  "Flask",
  "Ruby on Rails",
  "Laravel",
  "Symfony",
  "ASP.NET",
];

const container = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const children = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
    },
  },
};

export default function StaggerAnimationPage() {
  return (
    <Container className="flex flex-col gap-11 mt-8">
      <AnimatedText
        as="h1"
        text="Most Used Technologies"
        once={false}
        repeatDelay={5000}
        className="text-4xl font-bold text-center"
      />

      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-lg mx-auto flex items-center justify-center gap-3 flex-wrap"
      >
        {technologies.map((technology) => (
          <motion.li
            key={technology}
            variants={children}
            className="py-2 px-4 border border-zinc-800 rounded-lg hover:bg-zinc-800 hover:border-zinc-900 transition-colors"
          >
            <p className="text-sm text-zinc-300">{technology}</p>
          </motion.li>
        ))}
      </motion.ul>
    </Container>
  );
}
