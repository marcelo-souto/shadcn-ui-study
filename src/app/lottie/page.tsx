"use client";

import { MouseEventHandler, useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "../../../public/check.json";
import HamburgerIcon from "../../../public/hamburger-icon.json";

import {
  Dialog,
  DialogContent,
  DialogCloseButton,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function LottiePage() {
  const ref = useRef<LottieRefCurrentProps>(null);

  const handleClick: MouseEventHandler<HTMLButtonElement> = ({
    currentTarget,
  }) => {
    if (currentTarget instanceof HTMLButtonElement) {
      if (currentTarget.dataset.open === "false") {
        currentTarget.dataset.open = "true";
        ref.current?.playSegments([0, 24], true);
      } else {
        currentTarget.dataset.open = "false";
        ref.current?.playSegments([24, 0], true);
      }
    }
  };

  return (
    <Container>
      <Dialog>
        <Button asChild>
          <DialogTrigger>Open</DialogTrigger>
        </Button>
        <DialogContent className="flex flex-col items-center gap-4 rounded-lg shadow-md">
          <DialogCloseButton />
          <span>
            <Lottie
              className="scale-150 w-32 h-32"
              animationData={animationData}
              loop={false}
            />
          </span>
          <p className="text-zinc-900 dark:text-zinc-100 text-lg font-medium">
            Usuário cadastrado com sucesso
          </p>
        </DialogContent>
      </Dialog>

      <Button data-open={false} onClick={handleClick} variant="ghost">
        <Lottie
          animationData={HamburgerIcon}
          lottieRef={ref}
          autoplay={false}
          loop={false}
          className="w-6 h-6"
        />
        <span className="sr-only">Menu</span>
      </Button>
    </Container>
  );
}
