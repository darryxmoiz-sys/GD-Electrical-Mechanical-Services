"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { contactDetails } from "@/lib/data";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-abyss-500/95 backdrop-blur border-b border-brass-600/40" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="GD Electrical & Mechanical Services — home">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
            <circle cx="17" cy="17" r="15.5" stroke="#B8894F" strokeWidth="1.4" />
            <circle cx="17" cy="17" r="11" stroke="#4F7C74" strokeWidth="1" opacity="0.6" />
            <line x1="17" y1="17" x2="17" y2="7" stroke="#D2601A" strokeWidth="1.6" strokeLinecap="round" className="origin-[17px_17px] transition-transform duration-500 group-hover:rotate-45" />
            <circle cx="17" cy="17" r="1.6" fill="#E4E0D2" />
          </svg>
          <span className="font-display text-lg tracking-wide text-paper-50">
            GD <span className="text-brass-300">E&amp;M</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`eyebrow relative pb-1 transition-colors ${
                  active ? "text-brass-200" : "text-paper-200/80 hover:text-paper-50"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-brass-300" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <a
            href={`tel:${contactDetails.phone}`}
            className="eyebrow rounded-plate border border-brass-500/60 px-4 py-2 text-brass-200 transition-colors hover:bg-brass-500 hover:text-abyss-500"
          >
            {contactDetails.phoneDisplay}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 p-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
        >
          <span className={`h-[1.5px] w-6 bg-paper-100 transition-transform ${open ? "translate-y-[6.5px] rotate-45" : ""}`} />
          <span className={`h-[1.5px] w-6 bg-paper-100 transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-[1.5px] w-6 bg-paper-100 transition-transform ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-brass-600/40 bg-abyss-500 px-5 pb-6 md:hidden"
        >
          <ul className="flex flex-col divide-y divide-steel-600/30">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="eyebrow block py-4 text-paper-100 hover:text-brass-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={`tel:${contactDetails.phone}`}
            className="eyebrow mt-4 block rounded-plate border border-brass-500/60 px-4 py-3 text-center text-brass-200"
          >
            Call {contactDetails.phoneDisplay}
          </a>
        </nav>
      )}
    </header>
  );
}
