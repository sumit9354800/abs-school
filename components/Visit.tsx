import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { CFG } from "@/lib/config";

export default function Visit() {
  const q = encodeURIComponent(CFG.mapQuery);
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHead
          eyebrow="Visit Us"
          title="Come, See Our Little Learners."
          sub="We would love to show you around. Drop in during office hours or call ahead to book a visit."
        />
        <div className="mt-12 grid lg:grid-cols-5 gap-6">
          <Reveal className="lg:col-span-3">
            <div className="overflow-hidden rounded-[32px] border-8 border-white shadow-xl h-[320px] sm:h-[420px] bg-sky-50">
              <iframe
                title="ABS Public School location map"
                src={`https://www.google.com/maps?q=${q}&output=embed`}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="card card-static p-7 h-full flex flex-col justify-center gap-5">
              <div className="flex gap-4">
                <span className="w-12 h-12 shrink-0 rounded-2xl bg-blue/10 text-blue grid place-items-center">
                  <MapPin className="w-6 h-6" />
                </span>
                <div>
                  <h3 className="font-bold text-lg">Address</h3>
                  <p className="text-ink/70 text-sm">{CFG.addr}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="w-12 h-12 shrink-0 rounded-2xl bg-tang/15 text-tang grid place-items-center">
                  <Clock className="w-6 h-6" />
                </span>
                <div>
                  <h3 className="font-bold text-lg">Office Hours</h3>
                  <p className="text-ink/70 text-sm">{CFG.hours}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="w-12 h-12 shrink-0 rounded-2xl bg-mint/20 text-emerald-600 grid place-items-center">
                  <Phone className="w-6 h-6" />
                </span>
                <div>
                  <h3 className="font-bold text-lg">Call Us</h3>
                  <a href={`tel:${CFG.tel}`} className="text-ink/70 text-sm hover:text-blue">
                    {CFG.phone}
                  </a>
                </div>
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${q}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-b w-full"
              >
                <Navigation className="w-5 h-5" /> Get Directions
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
