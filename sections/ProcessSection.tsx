"use client";

import { processSteps } from "@/data/content";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export function ProcessSection() {
  return (
    <section className="process-section">
      <h2>ПРОЦЕСС РЕАЛИЗАЦИИ:</h2>
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        loop
        speed={760}
        autoplay={{ delay: 2800, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="process-swiper"
      >
        {processSteps.map((step) => (
          <SwiperSlide key={step.number}>
            <article className="process-slide">
              <div className="process-number">{step.number}</div>
              <div className="process-copy">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
