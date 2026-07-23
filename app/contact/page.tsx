import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { contactDetails, serviceArea } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with GD Electrical & Mechanical Services — marine electrical and mechanical engineers covering Torpoint, Plymouth, Cornwall and South Devon.",
};

export default function ContactPage() {
  return (
    <section className="border-b border-brass-600/30 bg-abyss-600 py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Tell us about the vessel and the job."
          description="Call directly for anything urgent, or send an enquiry below and we'll come back to you with next steps."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-10">
            <div>
              <p className="eyebrow text-brass-300">Direct</p>
              <a
                href={`tel:${contactDetails.phone}`}
                className="mt-3 block font-display text-2xl text-paper-50 hover:text-brass-200"
              >
                {contactDetails.phoneDisplay}
              </a>
              <a
                href={`mailto:${contactDetails.email}`}
                className="mt-2 block text-sm text-paper-200/80 hover:text-brass-200"
              >
                {contactDetails.email}
              </a>
            </div>

            <div>
              <p className="eyebrow text-brass-300">Based</p>
              <p className="mt-3 text-sm text-paper-200/85">Torpoint, Cornwall, United Kingdom</p>
            </div>

            <div>
              <p className="eyebrow text-brass-300">Service Area</p>
              <ul className="mt-3 grid grid-cols-2 gap-y-1.5 text-sm text-paper-200/85">
                {serviceArea.map((place) => (
                  <li key={place}>{place}</li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-steel-300">
                Further afield across the South West by arrangement.
              </p>
            </div>
          </div>

          <div className="rounded-plate border border-steel-600/40 bg-abyss-500 p-6 shadow-plate sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
