"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { CFG, NAV } from "@/lib/config";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 10);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-r from-blue via-indigo-600 to-tang text-white text-sm font-bold py-2 px-3">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-1">
          <p className="text-center">
            🎒 Admissions are open for Nursery to Class 5th.{" "}
            <a href="#admission" className="underline underline-offset-2">
              Enquire today
            </a>
          </p>
          <p className="hidden md:flex items-center gap-5 font-semibold text-white/90">
            <a href={`tel:${CFG.tel}`} className="inline-flex items-center gap-1.5 hover:text-white">
              <Phone className="w-3.5 h-3.5" /> {CFG.phone}
            </a>
            <a href={`mailto:${CFG.email}`} className="inline-flex items-center gap-1.5 hover:text-white">
              <Mail className="w-3.5 h-3.5" /> {CFG.email}
            </a>
          </p>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 bg-white/90 backdrop-blur-md transition-shadow ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between gap-3">
          <a href="#home" className="flex items-center gap-2 sm:gap-3 min-w-0">
            <span className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-2xl bg-blue text-white grid place-items-center fh font-extrabold text-base sm:text-lg shadow-md">
              ABS
            </span>
            <span className="leading-tight min-w-0">
              <span className="fh font-extrabold text-base sm:text-lg text-ink block truncate">ABS PUBLIC SCHOOL</span>
              <span className="text-[11px] text-ink/60 hidden sm:block">{CFG.tagline}</span>
            </span>
          </a>

          <nav className="hidden xl:flex gap-6 font-bold text-sm" aria-label="Main">
            {NAV.map((n) => (
              <a key={n.href} className="hover:text-blue transition" href={n.href}>
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href="#admForm" className="btn btn-b !py-2.5 hidden lg:inline-flex">
              Admission Enquiry
            </a>
            <button
              className="xl:hidden p-2"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="xl:hidden px-4 pb-5 border-t bg-white font-bold">
            {NAV.map((n) => (
              <a key={n.href} className="block py-3" href={n.href} onClick={() => setOpen(false)}>
                {n.label}
              </a>
            ))}
            <a href="#admForm" className="btn btn-b w-full mt-2" onClick={() => setOpen(false)}>
              Admission Enquiry
            </a>
          </div>
        )}
      </header>
    </>
  );
}
