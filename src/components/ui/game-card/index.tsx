import { Card, CardDescription, CardHeader, CardTitle } from "../card";
import { Game } from "@/types/types";
import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type GameCardProps = {
  game: Game;
  onClick?: (game: Game) => void;
};

const GameCard = ({ game, onClick }: GameCardProps) => {

  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <Card
      key={game.title}
      onMouseEnter={() => setIsAnimating(true)}
      onMouseLeave={() => setIsAnimating(false)}
      className="group bg-card w-96 shrink-0 overflow-hidden shadow-transparent hover:scale-105 hover:cursor-pointer hover:shadow-lg hover:shadow-orange-200 transition-all duration-300"
    >
      <div className="relative overflow-hidden">
        <Image
          width="300"
          height="200"
          src={game.image}
          alt={game.title}
          className="w-full h-32 object-cover object-center group-hover:scale-110 transition-all duration-300"
        />
        <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-orange-500 w-fit capitalize text-white font-semibold text-xs rounded-md">
          <p>{game.category}</p>
        </div>
      </div>
      <CardHeader className="relative">
        <motion.div
          className="absolute text-zinc-200 right-0 top-0"
          initial={{ rotate: 46, x: 100 }}
          animate={{
            rotate: isAnimating ? -45 : 46,
            x: isAnimating ? 0 : 100,
            y: isAnimating ? 40 : 0,
            scale: isAnimating ? 1.4 : 1,
          }}
          transition={{ stiffness: 100, duration: 0.2 }}
        >
          <Gamepad2 size={72} />
        </motion.div>
        <CardTitle className="mb-2 text-xl text-zinc-700">{game.title}</CardTitle>
        <CardDescription className="text-zinc-400 text-xs mb-4">
          {game.description}
          <span
            onClick={() => onClick && onClick(game)}
            className="block mt-4 text-orange-500 cursor-pointer text-xs hover:underline underline-offset-2"
          >
            Ver mais
          </span>
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

GameCard.displayName = "GameCard";

export { GameCard };
