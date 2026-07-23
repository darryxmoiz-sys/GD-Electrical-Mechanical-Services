"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { contactDetails } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.7, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-brass-600/30">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-abyss-600/60 via-abyss-500/85 to-abyss-500" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-6xl px-5 py-28 sm:px-8 sm:py-36"
      >
        <motion.p variants={item} className="eyebrow flex items-center gap-3 text-brass-300">
          <span className="h-px w-8 bg-brass-400" />
          Torpoint, UK — Private &amp; Commercial Marine Engineering
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-6 max-w-3xl font-display text-4xl leading-[1.08] text-paper-50 sm:text-5xl md:text-6xl"
        >
          Marine electrical and mechanical engineering that gets vessels back to work.
        </motion.h1>

        <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-paper-200/85">
          From fly-by-wire installs on private yachts bound for open ocean to anchor and
          capstan repairs on working fishing boats — Gareth and the GD E&amp;M network
          handle the systems that have to be right, every time.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="rounded-plate bg-safety-400 px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide text-paper-50 shadow-plate transition-colors hover:bg-safety-300"
          >
            Get in touch
          </Link>
          <Link
            href="/projects"
            className="rounded-plate border border-brass-500/60 px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide text-brass-200 transition-colors hover:bg-brass-500/10"
          >
            View the log
          </Link>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 grid max-w-2xl grid-cols-2 gap-6 border-t border-steel-600/40 pt-8 sm:grid-cols-4"
        >
          {[
            ["7", "Core services"],
            ["6+", "Flagship projects"],
            ["5", "Trade partners"],
            ["1", "Volvo Penta referral network"],
          ].map(([num, label]) => (
            <div key={label}>
              <p className="font-display text-2xl text-brass-200">{num}</p>
              <p className="mt-1 text-xs leading-snug text-paper-300/70">{label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
