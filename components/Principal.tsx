import { Quote, Heart } from "lucide-react";
import Reveal from "./Reveal";

export default function Principal() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-cream to-amber-50 py-16 lg:py-24">
      <div className="blob -top-10 -right-10 w-64 h-64 bg-sun/30" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative grid lg:grid-cols-5 gap-10 items-center">
        <Reveal className="lg:col-span-2">
          <div className="relative mx-auto max-w-xs">
            <div className="aspect-[4/5] rounded-[40px] bg-gradient-to-br from-blue to-indigo-700 grid place-items-center text-white shadow-2xl shadow-blue/30 -rotate-2">
              <div className="text-center px-6">
                <span className="mx-auto w-24 h-24 rounded-full bg-white/15 grid place-items-center fh text-5xl font-extrabold">
                  P
                </span>
                <p className="fh text-2xl font-bold mt-4">[Principal Name]</p>
                <p className="text-blue-100 text-sm">Principal, ABS Public School</p>
              </div>
            </div>
            <span className="absolute -bottom-4 -right-3 w-16 h-16 rounded-2xl bg-sun text-ink grid place-items-center shadow-lg rotate-6">
              <Heart className="w-7 h-7 fill-current" />
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-3">
          <Quote className="w-12 h-12 text-blue/20 fill-current" />
          <h2 className="h2 h2-left text-4xl sm:text-5xl font-extrabold leading-tight mt-2">
            A Message From Our Principal.
          </h2>
          <div className="mt-6 space-y-4 text-lg text-ink/75">
            <p>
              Dear Parents, the early years are when a child&apos;s love for learning begins. At ABS Public School
              we work to make every day a happy one — filled with curiosity, kindness and discovery.
            </p>
            <p>
              Together with our dedicated teachers, we aim to build strong foundations in academics, values and
              confidence, so that every child is ready for the road ahead. We warmly invite you to visit us and
              see our little learners in action.
            </p>
          </div>
          <p className="mt-6 fh text-xl font-bold text-blue">— [Principal Name]</p>
          <p className="mt-1 text-xs text-ink/50">Placeholder message — replace with the principal&apos;s own words.</p>
        </Reveal>
      </div>
    </section>
  );
}
