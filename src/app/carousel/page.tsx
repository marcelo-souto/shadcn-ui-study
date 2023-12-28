"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Container } from "@/components/ui/container";

import { EmblaOptionsType } from "embla-carousel";
import AutoPlay from "embla-carousel-autoplay";

const opts: EmblaOptionsType = {
  loop: true,
  align: "center",
  containScroll: false,
};

export default function CarouselPage() {
  return (
    <Container as="main" className="pt-11">
      <Carousel
        opts={opts}
        plugins={[
          AutoPlay({
            delay: 1000,
          }),
        ]}
      >
        <CarouselContent>
          {Array.from({ length: 6 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="flex items-center justify-center h-64 bg-gray-300 rounded-md">
                <p className="text-black text-4xl text-center">{index + 1}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Container>
  );
}
