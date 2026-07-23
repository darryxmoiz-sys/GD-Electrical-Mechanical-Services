"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/lib/data";

export default function ProjectCard({
  project,
  index,
  detailed = false,
}: {
  project: Project;
  index: number;
  detailed?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: [0.2, 0.7, 0.3, 1] }}
      className="group relative overflow-hidden rounded-plate border border-steel-600/40 bg-abyss-600 shadow-plate transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} — ${project.vessel}, ${project.location}`}
          fill
          sizes="(min-width: 1024px) 400px, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-abyss-600 via-abyss-600/10 to-transparent" />

        {/* status light */}
        <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-abyss-600/70 px-2.5 py-1 backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-blink rounded-full bg-verdigris-300" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-verdigris-300" />
          </span>
          <span className="eyebrow text-[10px] text-paper-100/90">Complete</span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between gap-3 font-mono text-[11px] text-steel-300">
          <span>{project.coordinates}</span>
          <span
            className={`rounded-sm px-2 py-0.5 text-[10px] uppercase tracking-wider ${
              project.clientType === "Commercial"
                ? "bg-verdigris-600/30 text-verdigris-200"
                : "bg-brass-600/30 text-brass-200"
            }`}
          >
            {project.clientType}
          </span>
        </div>

        <h3 className="mt-3 font-display text-xl text-paper-50">{project.title}</h3>
        <p className="mt-1 font-mono text-xs tracking-wide text-brass-300">
          {project.vessel} — {project.location}
        </p>

        <p className="mt-4 text-sm leading-relaxed text-paper-200/80">{project.summary}</p>

        {detailed && (
          <ul className="mt-4 space-y-1.5 border-t border-steel-600/30 pt-4">
            {project.scope.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-xs text-paper-200/75">
                <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-brass-300" />
                {item}
              </li>
            ))}
          </ul>
        )}

        {project.partners.length > 0 && (
          <p className="mt-4 text-xs text-steel-300">
            With {project.partners.join(", ")}
          </p>
        )}
      </div>
    </motion.article>
  );
}
