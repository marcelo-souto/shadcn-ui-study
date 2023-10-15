"use client";

import { useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "../../../public/check.json";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogCloseButton,
  DialogDescription,
  DialogTrigger,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Container } from "@/components/ui/container";

export default function LottiePage() {
  const ref = useRef<LottieRefCurrentProps>(null);

  return (
    <Container>
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent className="flex flex-col items-center gap-4 rounded-lg shadow-md">
          <DialogCloseButton />
          <span>
            <Lottie
              className="scale-150 w-32 h-32"
              lottieRef={ref}
              animationData={animationData}
              loop={false}
            />
          </span>
          <p className="text-zinc-900 text-lg font-medium">
            Usuário cadastrado com sucesso
          </p>
        </DialogContent>
      </Dialog>
    </Container>
  );
}
