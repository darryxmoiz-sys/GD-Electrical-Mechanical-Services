import Link from "next/link";
import { contactDetails, serviceArea } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="texture-plate border-t border-brass-600/30 bg-abyss-600">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <span className="font-display text-xl text-paper-50">
              GD <span className="text-brass-300">Electrical &amp; Mechanical</span>
            </span>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-paper-300/80">
              Marine electrical and mechanical engineering for private and commercial vessels,
              based in Torpoint and working the length of the South West marina network.
            </p>
          </div>

          <div>
            <h3 className="eyebrow text-brass-300">Contact</h3>
            <ul className="mt-3 space-y-2 text-sm text-paper-200/85">
              <li>
                <a href={`tel:${contactDetails.phone}`} className="hover:text-brass-200">
                  {contactDetails.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${contactDetails.email}`} className="hover:text-brass-200">
                  {contactDetails.email}
                </a>
              </li>
              <li>Torpoint, Cornwall, UK</li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-brass-300">Service Area</h3>
            <ul className="mt-3 grid grid-cols-1 gap-1 text-sm text-paper-200/85">
              {serviceArea.slice(0, 6).map((place) => (
                <li key={place}>{place}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline my-10" />

        <div className="flex flex-col items-start justify-between gap-4 text-xs text-steel-300 sm:flex-row sm:items-center">
          <p className="font-mono">
            © {new Date().getFullYear()} GD Electrical &amp; Mechanical Services. All rights reserved.
          </p>
          <nav className="flex gap-5" aria-label="Footer">
            <Link href="/services" className="hover:text-brass-200">Services</Link>
            <Link href="/projects" className="hover:text-brass-200">Projects</Link>
            <Link href="/about" className="hover:text-brass-200">About</Link>
            <Link href="/contact" className="hover:text-brass-200">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
