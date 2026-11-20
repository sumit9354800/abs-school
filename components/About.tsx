import { Eye, Target, Compass } from "lucide-react";
import Img from "./Img";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { T } from "@/lib/theme";

const CARDS = [
  {
    Icon: Eye,
    title: "Our Vision",
    text: "To nurture confident, creative and responsible young learners.",
    tone: "blue",
    bg: "bg-blue/5",
  },
  {
    Icon: Target,
    title: "Our Mission",
    text: "To make learning meaningful, enjoyable and accessible for every child.",
    tone: "orange",
    bg: "bg-tang/10",
  },
  {
    Icon: Compass,
    title: "Our Approach",
    text: "A balanced approach combining academics, creativity, activities and values.",
    tone: "green",
    bg: "bg-mint/10",
  },
] as const;

export default function About() {
  return (
    <section id="about" className="bg-white py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHead
          eyebrow="About Us"
          title="Growing Together, Learning Every Day."
          sub="ABS Public School is dedicated to creating a positive and engaging environment for young learners. We encourage curiosity, creativity and confidence through meaningful learning experiences."
        />

        <Reveal className="mt-12 grid grid-cols-3 grid-rows-2 gap-4 h-64 sm:h-[26rem]">
          <Img
            k="classroom"
            w={1000}
            alt="Bright, joyful classroom"
            className="col-span-2 row-span-2 w-full h-full object-cover rounded-[32px]"
          />
          <Img k="read" w={600} alt="Children reading" className="w-full h-full object-cover rounded-[32px]" />
          <Img k="art" w={600} alt="Children doing art" className="w-full h-full object-cover rounded-[32px]" />
        </Reveal>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className={`card p-7 h-full ${c.bg}`}>
                <span className={`w-14 h-14 rounded-2xl grid place-items-center ${T[c.tone][0]}`}>
                  <c.Icon className="w-7 h-7" />
                </span>
                <h3 className="text-2xl font-bold mt-5">{c.title}</h3>
                <p className="mt-2 text-ink/70">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
