"use client";

import { GameCard } from "@/components/ui/game-card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Game } from "@/types/types";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Container } from "@/components/ui/container";

const games = [
  {
    title: "Horizon Forbidden West",
    image: "/horizon-forbidden-west.webp",
    category: "Aventura",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    title: "God Of War Ragnarok",
    image: "/god-of-war.jpg",
    category: "Ação",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    title: "The Last Of Us Part II",
    image: "/the-last-of-us-part-2.webp",
    category: "Sobrevivência",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
];

const Home = () => {
  const [selectedGame, setSelectedGame] = useState<null | Game>(null);

  const handleCardClick = (game: Game) => {
    setSelectedGame(game);
  };

  return (
    <div className="flex flex-col justify-center h-screen max-w-fit m-auto">

      <Container as="main">TESTE AQUI</Container>
      
      <motion.h1
        className="font-bold capitalize text-2xl mb-4 text-zinc-600"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
      >
        Jogos mais pesquisados
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, duration: 0.5 }}
        className="grid grid-cols-3 gap-6"
      >
        {games.map((game) => (
          <GameCard key={game.title} game={game} onClick={handleCardClick} />
        ))}
      </motion.div>

      <Dialog
        modal={true}
        open={!!selectedGame}
        onOpenChange={() => setSelectedGame(null)}
      >
        <DialogContent className="px-0 pt-12 max-w-2xl w-full">
          <DialogHeader>
            <Image
              width="1200"
              height="1200"
              className="w-full h-60 object-cover object-center mb-4"
              src={selectedGame?.image ?? ""}
              alt={selectedGame?.title ?? ""}
            />
            <DialogTitle className="px-4">{selectedGame?.title}</DialogTitle>
            <DialogDescription className="px-4">
              {selectedGame?.description}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

Home.displayName = "Home";

export { Home };
