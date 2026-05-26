"use client";

import { expertiseCards } from "@/data/content";
import { SmartImage } from "@/components/SmartImage";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export function ExpertiseSlider() {
  return (
    <Swiper
      modules={[Autoplay, EffectCoverflow, Pagination]}
      effect="coverflow"
      centeredSlides
      grabCursor
      loop
      slidesPerView="auto"
      speed={900}
      autoplay={{ delay: 2100, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      coverflowEffect={{ rotate: 38, stretch: 8, depth: 210, modifier: 1.18, slideShadows: false }}
      className="expertise-swiper"
    >
      {expertiseCards.map((card) => (
        <SwiperSlide key={card.label} className="expertise-slide">
          <article className="expertise-card">
            <span className="card-fallback" />
            <SmartImage src={card.image} alt={card.label} fill sizes="(max-width: 768px) 62vw, 260px" className="object-cover" />
            <h3>
              {card.title.split("\n").map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h3>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
