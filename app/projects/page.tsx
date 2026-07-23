import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description:
    "Flagship marine engineering projects across Plymouth, Cornwall and South Devon — fly-by-wire installs, restorations, sea trials and more, private and commercial.",
};

export default function ProjectsPage() {
  return (
    <>
      <header className="border-b border-brass-600/30 bg-abyss-600 py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="The Log"
            title="Six jobs. Every one logged and signed off."
            description="A working record of flagship projects across the private and commercial fleet, each with the scope of work and the partners involved."
          />
        </div>
      </header>

      <section className="bg-abyss-500 py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} detailed />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
