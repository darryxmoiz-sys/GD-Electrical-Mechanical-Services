import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { partners, serviceArea } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Gareth & GD Electrical & Mechanical Services",
  description:
    "Marine electrical and mechanical engineering built on trade referrals and repeat commercial clients across Torpoint, Plymouth and the South West.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-brass-600/30 bg-abyss-600 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-plate border border-steel-600/40">
            <Image
              src="/images/gareth-portrait.jpg"
              alt="Gareth, principal engineer at GD Electrical & Mechanical Services"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div>
            <p className="eyebrow text-brass-300">About</p>
            <h1 className="mt-3 font-display text-3xl leading-tight text-paper-50 sm:text-4xl">
              A trade built on referral, not advertising.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-paper-200/85">
              GD Electrical &amp; Mechanical Services is run by Gareth, a marine electrical and
              mechanical engineer based in Torpoint. The work is deliberately specialist — marine
              systems only, not domestic electrical work stretched to fit a boat.
            </p>
            <p className="mt-4 text-base leading-relaxed text-paper-200/85">
              The client base splits across private yacht owners and commercial marine operators,
              with commercial work making up the majority of the book. Reputation has been built
              the old way: word of mouth, repeat clients, and a referral relationship with the
              Volvo Penta service centre network that brings in work from further afield —
              including international clients preparing vessels for long ocean passages.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-abyss-500 py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Coverage"
            title="Working the South West marina network."
            description="Based in Torpoint, covering the following ports and marinas as standard — further afield by arrangement."
          />

          <div className="mt-10 flex flex-wrap gap-3">
            {serviceArea.map((place) => (
              <span
                key={place}
                className="rounded-plate border border-steel-600/40 bg-abyss-600 px-4 py-2 font-mono text-xs text-paper-200/85"
              >
                {place}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-brass-600/30 bg-abyss-600 py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Network"
            title="A trade partner network, not a one-man band."
            description="Complex jobs — restorations, refits, sea trials — draw on an established network of trade partners, each covering a different part of the work."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="rounded-plate border border-steel-600/40 bg-abyss-500/60 p-6"
              >
                <h3 className="font-display text-lg text-brass-200">{partner.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper-200/80">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-abyss-500 py-20">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <h2 className="font-display text-2xl text-paper-50 sm:text-3xl">
            Private or commercial, the standard doesn&apos;t change.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-paper-200/80">
            Whether it&apos;s a superyacht refit or a working fishing boat back in service by
            morning, the same fault-finding and workmanship applies.
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
