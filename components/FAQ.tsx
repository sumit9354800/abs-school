"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "Which classes are available at ABS Public School?",
    a: "ABS Public School offers education from Nursery to Class 5th, including LKG and UKG.",
  },
  {
    q: "How can I apply for admission?",
    a: "Submit the admission enquiry form on this page, or call or WhatsApp us. Our team will guide you through the next steps.",
  },
  {
    q: "What documents are required for admission?",
    a: "Please contact the school office for the current list of required documents. [Add school-specific list here.]",
  },
  {
    q: "How can parents contact the school?",
    a: "You can call, WhatsApp or email us using the contact details on this page, or fill in the enquiry form.",
  },
  {
    q: "Does the school organize extracurricular activities?",
    a: "Yes. Activities such as art, music, storytelling and sports are part of learning at ABS. [Confirm specific activities with school.]",
  },
  {
    q: "How can I schedule a school visit?",
    a: "Send us an enquiry or call the school office, and our team will help arrange a convenient visit.",
  },
  {
    q: "Is school transport available?",
    a: "Please ask the school office about transport routes and availability. [Confirm with school.]",
  },
  {
    q: "What is the age criteria for Nursery admission?",
    a: "Age criteria follow the school's admission policy. Please contact the office for current details. [Add age criteria here.]",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <SectionHead eyebrow="FAQ" title="Frequently Asked Questions." className="mb-10" />
        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={(i % 4) * 0.05} y={14}>
                <div className="card card-static !rounded-2xl">
                  <h3>
                    <button
                      className="w-full flex justify-between items-center gap-4 text-left p-5 font-bold text-lg"
                      aria-expanded={isOpen}
                      aria-controls={`fa${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                    >
                      {f.q}
                      <span className="shrink-0 w-8 h-8 rounded-full bg-blue/10 text-blue grid place-items-center">
                        <Plus className={`w-4 h-4 transition-transform ${isOpen ? "rotate-45" : ""}`} />
                      </span>
                    </button>
                  </h3>
                  <div id={`fa${i}`} role="region" className={`faq-a ${isOpen ? "open" : ""}`}>
                    <div>
                      <p className="px-5 pb-5 text-ink/70">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
