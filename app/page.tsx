import { Header } from "@/components/Header";
import { NoiseOverlay } from "@/components/NoiseOverlay";
import { ExpertiseSection } from "@/sections/ExpertiseSection";
import { FooterSection } from "@/sections/FooterSection";
import { HeroSection } from "@/sections/HeroSection";
import { PartnersSection } from "@/sections/PartnersSection";
import { PricingSection } from "@/sections/PricingSection";
import { ProcessSection } from "@/sections/ProcessSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ExpertiseSection />
        <PartnersSection />
        <ProcessSection />
        <PricingSection />
        <FooterSection />
      </main>
      <NoiseOverlay />
    </>
  );
}
