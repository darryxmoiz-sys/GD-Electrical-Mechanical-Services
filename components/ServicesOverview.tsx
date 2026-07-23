"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

export default function ServicesOverview() {
  return (
    <section className="bg-abyss-500 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Capability"
            title="Seven services. One standard."
            description="Specialist marine electrical and mechanical engineering — not a general trade stretched to fit the water."
          />
          <Link
            href="/services"
            className="eyebrow shrink-0 text-brass-300 underline decoration-brass-500/40 underline-offset-4 hover:text-brass-200"
          >
            Full service list →
          </Link>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-plate border border-steel-600/30 bg-steel-600/20 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group bg-abyss-500 p-7 transition-colors hover:bg-abyss-600"
            >
              <span className="font-mono text-xs text-steel-400">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-display text-lg text-paper-50 group-hover:text-brass-200">
                {service.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-paper-300/75">
                {service.shortDescription}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
