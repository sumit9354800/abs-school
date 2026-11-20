"use client";

import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Img from "./Img";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const PICS = [
  { k: "kids", ar: "aspect-[3/4]" },
  { k: "play", ar: "aspect-square" },
  { k: "story", ar: "aspect-[4/3]" },
  { k: "event", ar: "aspect-[4/5]" },
  { k: "art", ar: "aspect-square" },
  { k: "sport", ar: "aspect-[3/4]" },
];

export default function Gallery() {
  const [i, setI] = useState<number | null>(null);
  const n = PICS.length;

  const go = useCallback((d: number) => setI((v) => (v === null ? v : (v + d + n) % n)), [n]);

  useEffect(() => {
    if (i === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setI(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [i, go]);

  return (
    <section id="gallery" className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHead eyebrow="Gallery" title="Moments That Make Us Smile." sub="Tap any photo to view it larger." />
        <div className="mt-12 columns-2 md:columns-3 gap-4">
          {PICS.map((p, idx) => (
            <Reveal key={p.k} delay={(idx % 3) * 0.06}>
              <button
                type="button"
                onClick={() => setI(idx)}
                className="block w-full mb-4 text-left"
                aria-label={`Open photo ${idx + 1}`}
              >
                <Img
                  k={p.k}
                  w={700}
                  alt="School moment – illustrative image"
                  className={`gimg w-full ${p.ar} object-cover rounded-3xl shadow-md`}
                />
              </button>
            </Reveal>
          ))}
        </div>
        <p className="mt-2 text-center text-xs text-ink/50">Illustrative images — replace with photos from your school.</p>
      </div>

      {i !== null && (
        <div
          className="fixed inset-0 z-[100] bg-ink/90 backdrop-blur-sm grid place-items-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={() => setI(null)}
        >
          <button
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/15 text-white grid place-items-center hover:bg-white/25"
            aria-label="Close"
            onClick={() => setI(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <button
            className="absolute left-3 sm:left-8 w-11 h-11 rounded-full bg-white/15 text-white grid place-items-center hover:bg-white/25"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute right-3 sm:right-8 w-11 h-11 rounded-full bg-white/15 text-white grid place-items-center hover:bg-white/25"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div onClick={(e) => e.stopPropagation()} className="max-w-4xl w-full">
            <Img
              k={PICS[i].k}
              w={1400}
              alt="School moment – illustrative image"
              className="w-full max-h-[80vh] object-contain rounded-3xl"
            />
            <p className="mt-3 text-center text-sm text-white/70">
              {i + 1} / {n}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
