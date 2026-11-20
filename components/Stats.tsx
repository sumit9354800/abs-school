"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { Users, GraduationCap, CalendarDays, Palette } from "lucide-react";
import { T, Tone } from "@/lib/theme";

/** ✏️ Replace these with the school's real numbers. */
const STATS: { n: number; suffix: string; label: string; Icon: typeof Users; tone: Tone }[] = [
  { n: 500, suffix: "+", label: "Happy Students", Icon: Users, tone: "blue" },
  { n: 30, suffix: "+", label: "Caring Teachers", Icon: GraduationCap, tone: "orange" },
  { n: 10, suffix: "+", label: "Years of Learning", Icon: CalendarDays, tone: "green" },
  { n: 6, suffix: "+", label: "Activity Areas", Icon: Palette, tone: "yellow" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [v, setV] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setV(to);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const dur = 1400;
    const tick = (t: number) => {
      const p = Math.min((t - t0) / dur, 1);
      setV(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, to]);

  return (
    <span ref={ref}>
      {v}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-white pb-4 pt-2" aria-label="School at a glance">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 -mt-2">
          {STATS.map((s) => (
            <div key={s.label} className="card card-static p-5 text-center">
              <span className={`mx-auto w-12 h-12 rounded-2xl grid place-items-center ${T[s.tone][0]}`}>
                <s.Icon className="w-6 h-6" />
              </span>
              <p className="fh text-4xl font-extrabold mt-3 text-ink">
                <Counter to={s.n} suffix={s.suffix} />
              </p>
              <p className="text-sm font-bold text-ink/60">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-ink/50">Sample numbers — replace with the school&apos;s actual figures.</p>
      </div>
    </section>
  );
}
