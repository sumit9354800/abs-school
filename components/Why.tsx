import { HeartHandshake, Users, Blocks, UserRound, Paintbrush, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { T } from "@/lib/theme";

const ITEMS = [
  { Icon: HeartHandshake, title: "Caring Learning Environment", text: "A warm, safe space where every child feels welcome.", tone: "orange" },
  { Icon: Users, title: "Experienced Teachers", text: "Teachers who guide young learners with patience.", tone: "blue" },
  { Icon: Blocks, title: "Activity-Based Learning", text: "Hands-on activities that make ideas easy to grasp.", tone: "green" },
  { Icon: UserRound, title: "Individual Attention", text: "Attention to each child's pace and needs.", tone: "sky" },
  { Icon: Paintbrush, title: "Creative Development", text: "Room to imagine, express and create.", tone: "yellow" },
  { Icon: ShieldCheck, title: "Values & Discipline", text: "Kindness, respect and good habits from the start.", tone: "blue" },
] as const;

export default function Why() {
  return (
    <section className="bg-sky-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHead eyebrow="Why ABS" title="What Makes Learning Special at ABS?" />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ITEMS.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 0.08}>
              <div className="card p-6 flex gap-4 h-full">
                <span className={`w-14 h-14 shrink-0 rounded-2xl grid place-items-center ${T[c.tone][0]}`}>
                  <c.Icon className="w-7 h-7" />
                </span>
                <div>
                  <h3 className="text-xl font-bold leading-tight">{c.title}</h3>
                  <p className="mt-1 text-sm text-ink/70">{c.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
