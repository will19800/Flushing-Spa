"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import "./ReviewCarousel.css";

type SlideData = {
  quote: string;
  customer: string;
  profilePic: string;
  reviewSource: string;
};

type PropType = {
  slides: SlideData[];
  options?: EmblaOptionsType;
};

const OPTIONS: EmblaOptionsType = {
  loop: true,
  align: "center",
  skipSnaps: false,
  containScroll: "trimSnaps",
  dragFree: false,
  startIndex: 1,
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="review-card bg-lightwhite w-96 p-6 rounded-lg shadow-md">
                <div className="flex justify-between align-middle items-center mb-4">
                  <img src="/yellowstar.png" alt="Stars" className="w-24" />
                  <span className="text-pink-400 text-7xl font-bold">“</span>
                </div>

                <p className="review-card-text text-gray-800 text-md h-60">{slide.quote}</p>

                <span className="ml-8 block w-5/6 h-0.5 bg-shadow mb-8" />

                <div className="flex items-center">
                  <img
                    src="/google.png"
                    alt="profile"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-700">
                      {slide.customer}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {slide.reviewSource}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
