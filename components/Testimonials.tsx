import { Star } from "lucide-react";
import Img from "./Img";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const TESTI = [
  {
    name: "Parent Name 1",
    role: "Parent of a Nursery student",
    text: "Placeholder: My child looks forward to school every morning and has grown more confident.",
    k: "photo-1494790108377-be9c29b29330",
  },
  {
    name: "Parent Name 2",
    role: "Parent of a Class 2 student",
    text: "Placeholder: The teachers are caring and keep us updated about our child's progress.",
    k: "photo-1500648767791-00dcc994a43e",
  },
  {
    name: "Parent Name 3",
    role: "Parent of a UKG student",
    text: "Placeholder: We love the focus on activities along with studies.",
    k: "photo-1438761681033-6461ffad8d80",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-sky-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHead eyebrow="Testimonials" title="What Parents Say About Us." />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {TESTI.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="card p-6 flex flex-col relative h-full">
                <span className="absolute top-2 right-5 fh text-8xl leading-none text-blue/10" aria-hidden="true">
                  &rdquo;
                </span>
                <div className="flex text-sun gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-ink/80">“{t.text}”</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <Img k={t.k} w={120} alt={`Placeholder photo of ${t.name}`} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-bold">{t.name}</p>
                    <p className="text-xs text-ink/60">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mt-5 text-center text-xs text-ink/50">
          Placeholder testimonials — replace with genuine parent reviews before publishing.
        </p>
      </div>
    </section>
  );
}
