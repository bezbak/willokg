"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { MouseEvent, PropsWithChildren } from "react";
import { cn } from "@/lib/cn";

type MagneticButtonProps = PropsWithChildren<{
  className?: string;
  href?: string;
}>;

const writeHref = "https://wa.me/996999151000";

export function MagneticButton({ children, className = "", href = writeHref }: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  function handleMove(event: MouseEvent<HTMLAnchorElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.24);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.24);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      href={href}
      className={cn("magnetic-button", className)}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </motion.a>
  );
}
