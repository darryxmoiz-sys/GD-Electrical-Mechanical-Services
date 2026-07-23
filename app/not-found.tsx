import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-abyss-500 px-5 text-center">
      <p className="eyebrow text-brass-300">Lost bearing</p>
      <h1 className="mt-4 font-display text-4xl text-paper-50">Page not found</h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-paper-200/80">
        That page isn&apos;t in the log. It may have moved, or the address might be off by a
        digit.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-plate bg-safety-400 px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide text-paper-50 shadow-plate transition-colors hover:bg-safety-300"
      >
        Back to home
      </Link>
    </section>
  );
}
