import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Marine Electrical & Mechanical Services",
  description:
    "Fly-by-wire installation, DC systems fault-finding, CCTV, engine room inspections, anchor & capstan repair and general marine engineering across Plymouth and Cornwall.",
};

export default function ServicesPage() {
  return (
    <>
      <header className="border-b border-brass-600/30 bg-abyss-600 py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Capability"
            title="Specialist marine engineering, service by service."
            description="Seven core services covering the electrical and mechanical systems that keep vessels — private and commercial — reliably on the water."
          />
        </div>
      </header>

      <section className="bg-abyss-500 py-20">
        <div className="mx-auto max-w-6xl divide-y divide-steel-600/30 px-5 sm:px-8">
          {services.map((service, i) => (
            <div key={service.id} className="grid gap-8 py-14 lg:grid-cols-[auto_1fr_1fr]">
              <span className="font-mono text-sm text-brass-400">{String(i + 1).padStart(2, "0")}</span>

              <div>
                <h2 className="font-display text-2xl text-paper-50 sm:text-3xl">{service.name}</h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-paper-200/80">
                  {service.detail}
                </p>
              </div>

              <ul className="space-y-3 self-start">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-paper-200/85">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-verdigris-300" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-brass-600/30 bg-abyss-600 py-20">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <h2 className="font-display text-2xl text-paper-50 sm:text-3xl">
            Not sure which service you need?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-paper-200/80">
            Describe the problem and we&apos;ll point you in the right direction — most jobs
            touch more than one system anyway.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-block rounded-plate bg-safety-400 px-7 py-3 font-body text-sm font-semibold uppercase tracking-wide text-paper-50 shadow-plate transition-colors hover:bg-safety-300"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
