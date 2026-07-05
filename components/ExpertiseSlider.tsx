"use client";

import {
  type CSSProperties,
  type PointerEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { expertiseCards } from "@/data/content";
import { SmartImage } from "@/components/SmartImage";

const AUTOPLAY_DELAY = 2100;
const VISIBLE_SIDE_SLIDES = 2;
const DRAG_THRESHOLD = 44;
const DRAG_MAX_OFFSET = 120;

function getCircleOffset(index: number, active: number, total: number) {
  let offset = index - active;

  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;

  return offset;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function wrapIndex(index: number, total: number) {
  return ((index % total) + total) % total;
}

export function ExpertiseSlider() {
  const total = expertiseCards.length;
  const [active, setActive] = useState(() =>
    Math.min(2, Math.max(total - 1, 0))
  );
  const [hovered, setHovered] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const dragState = useRef({
    pointerId: -1,
    startX: 0,
    lastX: 0,
    activeAtStart: 0,
    moved: false,
  });
  const suppressClick = useRef(false);
  const paused = hovered || dragging;

  useEffect(() => {
    if (paused || total <= 1) return;

    const interval = window.setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(interval);
  }, [paused, total]);

  if (!total) return null;

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    if (total <= 1 || (event.pointerType === "mouse" && event.button !== 0)) {
      return;
    }

    dragState.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      lastX: event.clientX,
      activeAtStart: active,
      moved: false,
    };
    setDragging(true);
    setDragOffset(0);
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (dragState.current.pointerId !== event.pointerId) return;

    dragState.current.lastX = event.clientX;
    const delta = event.clientX - dragState.current.startX;

    if (Math.abs(delta) > 6) {
      dragState.current.moved = true;
    }

    setDragOffset(clamp(delta * 0.72, -DRAG_MAX_OFFSET, DRAG_MAX_OFFSET));
  }

  function finishDrag(event: PointerEvent<HTMLDivElement>) {
    if (dragState.current.pointerId !== event.pointerId) return;

    const { activeAtStart, lastX, moved, startX } = dragState.current;
    const delta = lastX - startX;

    if (Math.abs(delta) >= DRAG_THRESHOLD) {
      setActive(wrapIndex(activeAtStart + (delta < 0 ? 1 : -1), total));
    }

    if (moved) {
      suppressClick.current = true;
      window.setTimeout(() => {
        suppressClick.current = false;
      }, 0);
    }

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    dragState.current.pointerId = -1;
    dragState.current.moved = false;
    setDragging(false);
    setDragOffset(0);
  }

  return (
    <div
      className={`expertise-ring ${dragging ? "is-dragging" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={finishDrag}
      onPointerCancel={finishDrag}
      style={{ "--drag-offset": `${dragOffset}px` } as CSSProperties}
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
              aria-label={card.label}
              onClick={(event) => {
                if (suppressClick.current) {
                  event.preventDefault();
                  return;
                }

                setActive(index);
              }}
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
