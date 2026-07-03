"use client";

import { heroCards } from "@/data/content";
import { motion, useAnimationFrame, useMotionValue, useSpring, useTransform } from "framer-motion";
import { SmartImage } from "@/components/SmartImage";
import { PointerEvent, useRef, useState } from "react";

const CARD_COUNT = heroCards.length;
const STEP = 360 / CARD_COUNT;

export function HeroCarousel3D() {
  const rotation = useMotionValue(0);
  const smoothRotation = useSpring(rotation, { stiffness: 48, damping: 18, mass: 0.7 });
  const transform = useTransform(smoothRotation, (value) => `translateZ(clamp(180px, 26vw, 340px)) rotateY(${value}deg)`);
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, rotation: 0 });

  useAnimationFrame((_, delta) => {
    if (!dragging) rotation.set(rotation.get() - delta * 0.0065);
  });

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    setDragging(true);
    dragStart.current = { x: event.clientX, rotation: rotation.get() };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!dragging) return;
    rotation.set(dragStart.current.rotation + (event.clientX - dragStart.current.x) * 0.22);
  }

  function onPointerUp() {
    setDragging(false);
  }

  return (
    <div className="hero-stage" onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={onPointerUp}>
      <motion.div className="hero-ring" style={{ transform }}>
        {heroCards.map((card, index) => (
          <article key={card.title} className="hero-card" style={{ transform: `rotateY(${index * STEP}deg) translateZ(clamp(-560px, -38vw, -260px))` }}>
            <span className="card-fallback" />
            <SmartImage src={card.image} alt={card.title} fill sizes="(max-width: 768px) 34vw, 180px" className="object-cover" priority />
          </article>
        ))}
      </motion.div>
    </div>
  );
}
