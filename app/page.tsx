import Link from "next/link";
import type { Metadata } from "next";
import LoadingScreen from "@/components/LoadingScreen";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import TrustStrip from "@/components/TrustStrip";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Marine Electrical & Mechanical Engineers in Plymouth & Cornwall",
  description:
    "GD Electrical & Mechanical Services — specialist marine electrical and mechanical engineering for private and commercial vessels across Torpoint, Plymouth and the South West.",
};

export default function HomePage() {
  const highlights = projects.slice(0, 3);

  return (
    <>
      <LoadingScreen />
      <Hero />
      <ServicesOverview />

      <section className="bg-abyss-600 py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="The Log"
              title="Recent work, on the record."
              description="A handful of the jobs that show the range — private and commercial, straightforward and complex."
            />
            <Link
              href="/projects"
              className="eyebrow shrink-0 text-brass-300 underline decoration-brass-500/40 underline-offset-4 hover:text-brass-200"
            >
              All flagship projects →
            </Link>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="bg-abyss-500 py-24">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="eyebrow text-brass-300">Get in touch</p>
          <h2 className="mt-3 font-display text-3xl text-paper-50 sm:text-4xl">
            Tell us what&apos;s going on with the vessel.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-paper-200/80">
            Private yacht or working commercial vessel, one-off callout or full refit — get in
            touch and we&apos;ll get back to you with next steps.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-plate bg-safety-400 px-7 py-3 font-body text-sm font-semibold uppercase tracking-wide text-paper-50 shadow-plate transition-colors hover:bg-safety-300"
            >
              Send an enquiry
            </Link>
            <a
              href="tel:+447873944007"
              className="rounded-plate border border-brass-500/60 px-7 py-3 font-body text-sm font-semibold uppercase tracking-wide text-brass-200 transition-colors hover:bg-brass-500/10"
            >
              Call 07873 944 007
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
