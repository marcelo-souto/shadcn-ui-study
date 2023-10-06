"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider, SliderItem } from "@/components/ui/slider";
import { TGame } from "@/types/types";
import Image from "next/image";

const sliderConfig = {
  spaceBetween: 24,
  draggable: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: true,
  breakpoints: {
    576: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
  },
};

const Swiper = ({ data }: { data: TGame[] }) => {
  return (
    <main className="max-w-5xl w-full mx-auto pt-40">
      <Slider settings={sliderConfig}>
        {data.map((game) => (
          <SliderItem key={game.id}>
            <Card className="min-h-[260px]">
              <Image
                src={game.background_image}
                alt={game.name}
                width="1600"
                height="1600"
                className="w-full min-h-[260px] overflow-hidden object-cover object-center"
              />

              <CardHeader>
                <CardTitle className="text-xl dark:text-zinc-200 text-zinc-900 truncate">
                  {game.name}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-base">
                  {game.rating}/{game.rating_top}
                </p>
              </CardContent>
            </Card>
          </SliderItem>
        ))}
      </Slider>
    </main>
  );
};

Swiper.displayName = "Swiper";

export { Swiper };
