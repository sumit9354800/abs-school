import { Trophy, Flag, Sparkles, Palette, Users, Cake, Bus } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { T } from "@/lib/theme";

/** ✏️ Illustrative yearly calendar — adjust to the school's real events. */
const EVENTS = [
  { when: "Jan", title: "Republic Day", text: "Flag hoisting, patriotic songs and a proud morning.", Icon: Flag, tone: "orange" },
  { when: "Aug", title: "Independence Day", text: "Little voices celebrating freedom with songs and skits.", Icon: Flag, tone: "green" },
  { when: "Nov", title: "Children's Day", text: "A day made special for every child — games, treats and fun.", Icon: Cake, tone: "pink" },
  { when: "Yearly", title: "Annual Day", text: "Dance, drama and music — our stars take the stage.", Icon: Sparkles, tone: "yellow" },
  { when: "Yearly", title: "Sports Day", text: "Races, relays and team spirit on the field.", Icon: Trophy, tone: "sky" },
  { when: "Yearly", title: "Art Exhibition", text: "Our young artists proudly display their creations.", Icon: Palette, tone: "blue" },
  { when: "Termly", title: "Parent–Teacher Meets", text: "Sharing progress and growing together.", Icon: Users, tone: "green" },
  { when: "Yearly", title: "Field Trips", text: "Learning outside the classroom, with plenty of smiles.", Icon: Bus, tone: "orange" },
] as const;

export default function Events() {
  return (
    <section id="events" className="relative overflow-hidden bg-gradient-to-b from-white to-sky-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHead
          eyebrow="Events & Celebrations"
          title="Every Season Brings a Celebration."
          sub="Festivals, performances and field days that create memories for life."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {EVENTS.map((e, i) => (
            <Reveal key={e.title} delay={(i % 4) * 0.07}>
              <article className="card p-6 h-full relative overflow-hidden">
                <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${T[e.tone][0]}`}>{e.when}</span>
                <span className={`absolute top-5 right-5 w-11 h-11 rounded-2xl grid place-items-center text-white ${T[e.tone][1]}`}>
                  <e.Icon className="w-5 h-5" />
                </span>
                <h3 className="text-xl font-bold mt-5">{e.title}</h3>
                <p className="mt-1 text-sm text-ink/70">{e.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-ink/50">Illustrative calendar — confirm actual events and dates with the school.</p>
      </div>
    </section>
  );
}
