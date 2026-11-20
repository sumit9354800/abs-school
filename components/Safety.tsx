import { ShieldCheck, Video, Bus, Stethoscope, Droplets, UserCheck } from "lucide-react";
import Img from "./Img";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { T } from "@/lib/theme";

/** ✏️ Illustrative — keep only what the school actually provides. */
const ITEMS = [
  { title: "Safe & Secure Campus", text: "A protected, child-friendly environment.", Icon: ShieldCheck, tone: "blue" },
  { title: "CCTV Monitoring", text: "Added peace of mind for parents.", Icon: Video, tone: "orange" },
  { title: "School Transport", text: "Safe pick-up and drop facility.", Icon: Bus, tone: "yellow" },
  { title: "First-Aid Care", text: "Basic medical support when needed.", Icon: Stethoscope, tone: "pink" },
  { title: "Clean Drinking Water", text: "Fresh, safe water for every child.", Icon: Droplets, tone: "sky" },
  { title: "Caring Staff", text: "Attentive supervision throughout the day.", Icon: UserCheck, tone: "green" },
] as const;

export default function Safety() {
  return (
    <section className="bg-cream py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="relative">
            <Img
              k="bus"
              w={900}
              alt="School transport – illustrative image"
              className="w-full aspect-[4/3] object-cover rounded-[40px] shadow-2xl shadow-blue/15 border-8 border-white"
            />
            <div className="absolute -bottom-5 -right-2 sm:right-6 bg-white rounded-3xl p-4 shadow-xl flex items-center gap-3">
              <span className="w-11 h-11 rounded-2xl bg-mint text-white grid place-items-center">
                <ShieldCheck className="w-5 h-5" />
              </span>
              <p className="fh font-bold leading-tight">Your child&apos;s safety,
                <br />our first priority.
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHead eyebrow="Safety & Care" title="Safe, Secure & Caring." className="!text-left !mx-0" />
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {ITEMS.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 0.08}>
                <div className="flex gap-3 items-start rounded-2xl bg-white p-4 border border-blue/5 shadow-sm">
                  <span className={`w-11 h-11 shrink-0 rounded-xl grid place-items-center ${T[s.tone][0]}`}>
                    <s.Icon className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="font-bold leading-tight">{s.title}</h3>
                    <p className="text-sm text-ink/65 mt-0.5">{s.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-4 text-xs text-ink/50">Illustrative list — confirm actual facilities with the school.</p>
        </div>
      </div>
    </section>
  );
}
