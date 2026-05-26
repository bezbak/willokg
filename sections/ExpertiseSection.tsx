import { ExpertiseSlider } from "@/components/ExpertiseSlider";
import { SectionReveal } from "@/components/SectionReveal";

export function ExpertiseSection() {
  return (
    <section className="expertise-section" id="серверы">
      <SectionReveal>
        <h2 className="chrome-title">ЭКСПЕРТИЗА</h2>
      </SectionReveal>
      <ExpertiseSlider />
    </section>
  );
}
