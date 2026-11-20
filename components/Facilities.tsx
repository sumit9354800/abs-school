import Img from "./Img";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const FAC = [
  { title: "Smart Learning Classrooms", k: "classroom", cls: "col-span-2 row-span-2" },
  { title: "Activity & Play Area", k: "play", cls: "" },
  { title: "Library & Reading Corner", k: "read", cls: "" },
  { title: "Art & Creativity", k: "art", cls: "row-span-2" },
  { title: "Sports & Physical Activities", k: "sport", cls: "col-span-2" },
  { title: "Safe School Environment", k: "safe", cls: "col-span-2 lg:col-span-1" },
];

export default function Facilities() {
  return (
    <section id="facilities" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHead eyebrow="Facilities" title="A Space Where Every Child Feels Inspired." />
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 auto-rows-[170px] sm:auto-rows-[210px] gap-4">
          {FAC.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06} className={f.cls}>
              <figure className="zoom relative overflow-hidden rounded-3xl h-full">
                <Img k={f.k} w={900} alt={`${f.title} – illustrative image`} className="w-full h-full object-cover" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-ink/80 to-transparent text-white fh font-bold text-lg leading-tight">
                  {f.title}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-ink/50">
          Illustrative images and categories — replace with the school&apos;s actual facilities.
        </p>
      </div>
    </section>
  );
}
