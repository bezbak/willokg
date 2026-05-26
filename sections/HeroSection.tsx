import { HeroCarousel3D } from "@/components/HeroCarousel3D";
import { MagneticButton } from "@/components/MagneticButton";

export function HeroSection() {
  return (
    <section className="hero-section" id="дизайн">
      <div className="hero-glow" />
      <div className="hero-copy">
        <h1>ЦИФРОВЫЕ РЕШЕНИЯ ДЛЯ РОСТА БИЗНЕСА</h1>
        <p>ПРОЕКТИРОВАНИЕ UI/UX, КОММЕРЧЕСКИЙ МОУШН И СЕРВЕРНЫЕ РЕШЕНИЯ</p>
      </div>
      <HeroCarousel3D />
      <MagneticButton className="hero-button">НАПИСАТЬ</MagneticButton>
    </section>
  );
}
