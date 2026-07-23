"use client";

import { motion } from "framer-motion";
import { partners } from "@/lib/data";

export default function TrustStrip() {
  return (
    <section className="texture-plate border-y border-brass-600/30 bg-abyss-600 py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow text-brass-300">Referred &amp; Trusted</p>
            <h2 className="mt-2 font-display text-2xl text-paper-50 sm:text-3xl">
              Built on the Volvo Penta network and a working partner list.
            </h2>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-plate border border-steel-600/40 bg-abyss-500/60 p-4"
            >
              <p className="font-display text-sm leading-snug text-brass-200">{partner.name}</p>
              <p className="mt-2 text-xs leading-relaxed text-paper-300/70">{partner.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
