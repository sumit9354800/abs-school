import { Sun, BookOpen, Apple, Palette, Library, Smile } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { T } from "@/lib/theme";

/** ✏️ Sample schedule — replace with the school's actual timings. */
const DAY = [
  { time: "8:30 AM", title: "Welcome & Assembly", text: "Prayer, rhymes and a cheerful start to the day.", Icon: Sun, tone: "yellow" },
  { time: "9:00 AM", title: "Concept Time", text: "Language and numbers through stories, songs and play.", Icon: BookOpen, tone: "blue" },
  { time: "10:30 AM", title: "Snack Break & Play", text: "Healthy snacks, new friends and free play.", Icon: Apple, tone: "green" },
  { time: "11:00 AM", title: "Activity Hour", text: "Art, music, dance or games — something new each day.", Icon: Palette, tone: "orange" },
  { time: "12:00 PM", title: "Story & Reading Circle", text: "Listening, speaking and imagining together.", Icon: Library, tone: "sky" },
  { time: "12:30 PM", title: "Wrap-up & Happy Goodbyes", text: "Sharing the day's learning and heading home smiling.", Icon: Smile, tone: "pink" },
] as const;

export default function DayInSchool() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHead
          eyebrow="A Day at ABS"
          title="A Day Full of Little Joys."
          sub="Here is how a typical day unfolds for our youngest learners."
        />
        <div className="relative mt-14">
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-sun via-tang to-blue/60" aria-hidden="true" />
          <ol className="space-y-8">
            {DAY.map((d, i) => {
              const left = i % 2 === 0;
              return (
                <li key={d.title} className="relative sm:grid sm:grid-cols-2 sm:gap-14">
                  <span
                    className={`absolute left-6 sm:left-1/2 -translate-x-1/2 top-4 w-12 h-12 rounded-full border-4 border-white shadow-lg grid place-items-center text-white ${T[d.tone][1]}`}
                  >
                    <d.Icon className="w-5 h-5" />
                  </span>
                  <Reveal className={`pl-20 sm:pl-0 ${left ? "sm:text-right" : "sm:col-start-2"}`} y={20}>
                    <div className="card p-5">
                      <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${T[d.tone][0]}`}>{d.time}</span>
                      <h3 className="text-xl font-bold mt-2">{d.title}</h3>
                      <p className="text-sm text-ink/70 mt-1">{d.text}</p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
        <p className="mt-8 text-center text-xs text-ink/50">Sample schedule — timings may differ by class.</p>
      </div>
    </section>
  );
}
