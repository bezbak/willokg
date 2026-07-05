import { clients } from "@/data/content";

export function PartnersSection() {
  const logos = [...clients, ...clients, ...clients];

  return (
    <section className="partners-section" aria-labelledby="clients-title">
      <h2 id="clients-title" className="partners-title">
        НАШИ КЛИЕНТЫ
      </h2>
      <div className="marquee">
        <div className="marquee-track">
          {logos.map((client, index) => (
            <span
              key={`${client.name}-${index}`}
              className={`partner-logo partner-logo--${client.variant}`}
              aria-label={client.name}
            >
              <span className="partner-logo__emblem" aria-hidden="true">
                {client.mark}
              </span>
              <span className="partner-logo__word" aria-hidden="true">
                <span className="partner-logo__primary">{client.primary}</span>
                <span className="partner-logo__secondary">{client.secondary}</span>
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
