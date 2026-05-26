import { partners } from "@/data/content";

export function PartnersSection() {
  const logos = [...partners, ...partners, ...partners];

  return (
    <section className="partners-section" aria-label="Партнеры и проекты">
      <div className="marquee">
        <div className="marquee-track">
          {logos.map((partner, index) => (
            <span key={`${partner}-${index}`} className="partner-logo">
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
