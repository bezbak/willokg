"use client";

import { useEffect, useState } from "react";
import { expertiseCards } from "@/data/content";
import { SmartImage } from "@/components/SmartImage";

const AUTOPLAY_DELAY = 2100;
const VISIBLE_SIDE_SLIDES = 2;

function getCircleOffset(index: number, active: number, total: number) {
  let offset = index - active;

  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;

  return offset;
}

export function ExpertiseSlider() {
  const total = expertiseCards.length;
  const [active, setActive] = useState(() =>
    Math.min(2, Math.max(total - 1, 0))
  );
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || total <= 1) return;

    const interval = window.setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(interval);
  }, [paused, total]);

  if (!total) return null;

  return (
    <div
      className="expertise-ring"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="expertise-ring-stage">
        {expertiseCards.map((card, index) => {
          const offset = getCircleOffset(index, active, total);
          const visible = Math.abs(offset) <= VISIBLE_SIDE_SLIDES;

          const position = Math.max(
            -VISIBLE_SIDE_SLIDES,
            Math.min(VISIBLE_SIDE_SLIDES, offset)
          );

          return (
            <button
              key={card.label}
              type="button"
              className={`expertise-ring-slide ${offset === 0 ? "is-active" : ""
                }`}
              data-position={position}
              aria-hidden={!visible}
              onClick={() => setActive(index)}
              style={{
                zIndex: 100 - Math.abs(offset),
                pointerEvents: visible ? "auto" : "none",
              }}
            >
              <article className="expertise-card">
                <span className="card-fallback" />

                <SmartImage
                  src={card.image}
                  alt={card.label}
                  fill
                  sizes="(max-width: 768px) 62vw, 300px"
                  className="object-cover"
                  priority={index === active}
                />

                <h3>
                  {card.title.split("\n").map((line) => (
                    <span key={`${card.label}-${line}`}>{line}</span>
                  ))}
                </h3>
              </article>
            </button>
          );
        })}
      </div>

      <div className="expertise-ring-pagination">
        {expertiseCards.map((card, index) => (
          <button
            key={card.label}
            type="button"
            className={`expertise-ring-dot ${index === active ? "is-active" : ""
              }`}
            onClick={() => setActive(index)}
            aria-label={`Открыть слайд ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}