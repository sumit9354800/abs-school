import { Scissors, Music, BookOpen, Trophy, Brush, PartyPopper } from "lucide-react";
import Img from "./Img";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { T } from "@/lib/theme";

const ACTS = [
  { title: "Art & Craft", k: "art", Icon: Scissors, tone: "orange" },
  { title: "Music & Dance", k: "event", Icon: Music, tone: "blue" },
  { title: "Storytelling", k: "story", Icon: BookOpen, tone: "green" },
  { title: "Sports & Games", k: "play", Icon: Trophy, tone: "sky" },
  { title: "Drawing & Painting", k: "kids", Icon: Brush, tone: "yellow" },
  { title: "Celebrations & Events", k: "sport", Icon: PartyPopper, tone: "orange" },
] as const;

export default function Activities() {
  return (
    <section id="activities" className="bg-amber-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHead eyebrow="Activities" title="Learning Goes Beyond Books." />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACTS.map((a, i) => (
            <Reveal key={a.title} delay={(i % 3) * 0.08}>
              <article className="card zoom overflow-hidden">
                <div className="overflow-hidden relative">
                  <Img
                    k={a.k}
                    w={700}
                    alt={`Children enjoying ${a.title.toLowerCase()}`}
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <span
                    className={`absolute top-3 left-3 w-11 h-11 rounded-2xl grid place-items-center text-white shadow-lg ${T[a.tone][1]}`}
                  >
                    <a.Icon className="w-5 h-5" />
                  </span>
                </div>
                <h3 className="text-xl font-bold p-5">{a.title}</h3>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
