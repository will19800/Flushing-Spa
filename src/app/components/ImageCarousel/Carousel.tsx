"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import "./Carousel.css";

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <section className="embla1">
      <div className="embla__viewport1" ref={emblaRef}>
        <div className="embla__container1">
          {slides.map((src, index) => (
            <div className="embla__slide1" key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="embla__slide__img1"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
