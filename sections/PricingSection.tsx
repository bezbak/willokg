"use client";

import { pricingPlans } from "@/data/content";
import { motion } from "framer-motion";

export function PricingSection() {
  return (
    <section className="pricing-section" id="планы">
      <h2>ПАКЕТЫ</h2>
      <motion.div
        className="pricing-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-12% 0px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.14 } },
        }}
      >
        {pricingPlans.map((plan) => (
          <motion.article
            key={plan.name}
            className={`price-card ${plan.featured ? "featured" : ""}`}
            variants={{
              hidden: { opacity: 0, y: 42, scale: 0.96 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            <h3>{plan.name}</h3>
            <strong>{plan.price}</strong>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
