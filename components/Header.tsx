"use client";

import { navItems } from "@/data/content";
import { motion, useScroll, useTransform } from "framer-motion";

export function Header() {
  const { scrollY } = useScroll();
  const background = useTransform(scrollY, [0, 120], ["rgba(5,5,5,0)", "rgba(5,5,5,0.68)"]);
  const border = useTransform(scrollY, [0, 120], ["rgba(255,255,255,0)", "rgba(255,255,255,0.08)"]);

  return (
    <motion.header className="fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-xl" style={{ background, borderColor: border }}>
      <nav className="mx-auto flex h-[72px] w-full max-w-[930px] items-center justify-between px-6 sm:h-[76px]">
        <a href="#" className="logo-word" aria-label="Willo">
          WILLO
        </a>
        <div className="flex items-center gap-[clamp(18px,4vw,44px)]">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="nav-link">
              {item}
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
