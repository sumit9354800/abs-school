import { Shapes, BookA, Pencil, Puzzle, Lightbulb, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { T } from "@/lib/theme";

const STAGES = [
  { title: "Nursery", text: "Early exploration, colours, shapes, sounds and social interaction.", Icon: Shapes, tone: "sky" },
  { title: "LKG", text: "Foundational language, numbers and creative activities.", Icon: BookA, tone: "orange" },
  { title: "UKG", text: "Early literacy, numeracy and school readiness.", Icon: Pencil, tone: "green" },
  {
    title: "Class 1st – 2nd",
    text: "Foundational academic development, communication and problem-solving.",
    Icon: Puzzle,
    tone: "yellow",
  },
  {
    title: "Class 3rd – 5th",
    text: "Concept-based learning, independent thinking and knowledge development.",
    Icon: Lightbulb,
    tone: "blue",
  },
] as const;

export default function Academics() {
  return (
    <section id="academics" className="bg-cream py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHead
          eyebrow="Academics"
          title="Learning Stages Designed for Every Little Step."
          sub="From first words to first big ideas — a gentle, step-by-step journey from Nursery to Class 5th."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-6 gap-5">
          {STAGES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} className={i < 3 ? "lg:col-span-2" : "lg:col-span-3"}>
              <article className="card p-6 pt-8 flex flex-col relative overflow-hidden h-full">
                <span className={`absolute top-0 inset-x-0 h-2 ${T[s.tone][1]}`} />
                <span className={`w-16 h-16 rounded-3xl grid place-items-center rotate-3 ${T[s.tone][0]}`}>
                  <s.Icon className="w-8 h-8" />
                </span>
                <h3 className="text-2xl font-bold mt-5">{s.title}</h3>
                <p className="mt-2 text-ink/70 text-sm flex-1">{s.text}</p>
                <a
                  href="#admForm"
                  className="mt-4 font-bold text-blue inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <div className="rounded-[32px] bg-white border border-blue/10 p-6 sm:p-8 shadow-sm">
            <h3 className="fh text-2xl font-bold text-center">What your child learns</h3>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {[
                "📖 English",
                "🔢 Mathematics",
                "🇮🇳 Hindi",
                "🌿 EVS / Science",
                "💻 Computer Basics",
                "🎨 Art & Craft",
                "🎵 Music & Dance",
                "🤸 Physical Education",
                "🌟 Moral Values",
              ].map((x) => (
                <span key={x} className="rounded-full bg-sky-50 border border-sky/30 px-4 py-2 text-sm font-bold">
                  {x}
                </span>
              ))}
            </div>
            <p className="mt-4 text-center text-xs text-ink/50">Sample subject list — confirm with the school.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
