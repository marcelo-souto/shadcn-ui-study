"use client";

import "swiper/css/bundle";
import "./slider.css";

import { PropsWithChildren, ReactNode, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperProps, SwiperSlide, SwiperRef } from "swiper/react";
import { Pagination, A11y, Scrollbar, Autoplay } from "swiper/modules";

type TSliderProps = PropsWithChildren & {
  settings: SwiperProps;
};

const modules = [Pagination, A11y, Scrollbar, Autoplay];

const Slider = ({ children, settings }: TSliderProps) => {

  const { navigation, ...otherSettings } = settings;

  const swiperRef = useRef<SwiperRef>(null);

  const handleNextSlide = () => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
  };

  const handlePrevSlide = () => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
  };

  return (
    <div className="flex justify-center items-center relative px-8">
      
      <Swiper ref={swiperRef} modules={modules} {...otherSettings}>
        {children}
      </Swiper>

      {navigation && (
        <div className="absolute w-full flex justify-between z-10 text-zinc-900 dark:text-zinc-200">
          <button onClick={handlePrevSlide}>
            <ChevronLeft size={24} />
          </button>
          <button onClick={handleNextSlide}>
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </div>
  );
};

Slider.displayName = "Slider";

const SliderItem = ({ children }: { children: ReactNode }) => {
  return <SwiperSlide>{children}</SwiperSlide>;
};

SliderItem.displayName = SwiperSlide.displayName;

export { Slider, SliderItem };
