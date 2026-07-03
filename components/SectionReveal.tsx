"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

export function SectionReveal({ children }: PropsWithChildren) {
  return (
    <motion.div
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
