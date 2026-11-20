import { GraduationCap, Smile, Sprout, Star, Palette, Heart } from "lucide-react";
import Img from "./Img";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-cream">
      <div className="blob top-10 -left-16 w-72 h-72 bg-sun/40" />
      <div className="blob -bottom-10 right-0 w-96 h-96 bg-sky/30" />
      <div className="blob top-1/2 left-1/3 w-40 h-40 bg-tang/20" />
      <div className="absolute inset-0 dots opacity-60" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-20 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <span className="inline-block rounded-full bg-sun/30 text-ink text-xs font-bold tracking-wider px-4 py-2">
            WELCOME TO ABS PUBLIC SCHOOL
          </span>
          <h1 className="mt-5 text-5xl sm:text-6xl xl:text-7xl font-extrabold leading-[1.02]">
            Where Little Minds Grow Into <span className="hero-txt">Big Dreams.</span>
          </h1>
          <p className="mt-5 text-lg text-ink/75 max-w-xl">
            At ABS Public School, we believe every child has a unique spark. We create a joyful learning
            environment where young minds explore, discover, learn and grow with confidence.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a href="#about" className="btn btn-b">
              Explore Our School
            </a>
            <a href="#admForm" className="btn btn-y">
              Admission Enquiry
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold">
            <li className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-blue/10 text-blue grid place-items-center">
                <GraduationCap className="w-4 h-4" />
              </span>
              Nursery to Class 5th
            </li>
            <li className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-tang/15 text-tang grid place-items-center">
                <Smile className="w-4 h-4" />
              </span>
              Child-Friendly Learning
            </li>
            <li className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-mint/20 text-emerald-600 grid place-items-center">
                <Sprout className="w-4 h-4" />
              </span>
              Holistic Development
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.15} className="relative px-3 sm:px-6 pb-8">
          <Img
            k="hero"
            w={1000}
            eager
            alt="Happy young children learning together with their teacher in a bright classroom"
            className="w-full aspect-[4/3] object-cover rounded-[40px] shadow-2xl shadow-blue/20 border-8 border-white"
          />
          <Img
            k="kids"
            w={400}
            alt="Children playing and learning"
            className="absolute -bottom-2 right-0 w-28 sm:w-40 aspect-square object-cover rounded-3xl border-4 border-white shadow-xl rotate-6"
          />
          <span className="fl absolute -top-4 left-0 w-14 h-14 rounded-2xl bg-sun grid place-items-center fh font-extrabold text-2xl text-ink shadow-lg -rotate-12">
            A
          </span>
          <span
            className="fl absolute top-1/3 -right-1 w-12 h-12 rounded-2xl bg-tang grid place-items-center fh font-extrabold text-xl text-white shadow-lg rotate-12"
            style={{ animationDelay: "1s" }}
          >
            B
          </span>
          <span className="fl absolute -top-2 right-16 text-sun" style={{ animationDelay: "2s" }}>
            <Star className="w-9 h-9 fill-current" />
          </span>
          <span
            className="fl absolute bottom-28 -left-2 w-12 h-12 rounded-full bg-mint grid place-items-center text-white shadow-lg"
            style={{ animationDelay: "1.5s" }}
          >
            <Palette className="w-6 h-6" />
          </span>
          <div className="absolute bottom-0 left-8 right-8 sm:right-auto sm:w-72 bg-white rounded-3xl p-4 shadow-xl flex items-center gap-3">
            <span className="w-11 h-11 rounded-2xl bg-blue text-white grid place-items-center">
              <Heart className="w-5 h-5 fill-current" />
            </span>
            <p className="fh font-bold leading-tight">A Happy Place to Learn &amp; Grow.</p>
          </div>
        </Reveal>
      </div>

      <svg className="wave text-white" viewBox="0 0 1440 50" preserveAspectRatio="none" aria-hidden="true">
        <path fill="currentColor" d="M0 30C240 60 480 0 720 25s480 30 720 5V50H0z" />
      </svg>
    </section>
  );
}
