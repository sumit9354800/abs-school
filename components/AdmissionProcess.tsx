import { MessageSquare, School, Handshake, FileText, PartyPopper } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { T } from "@/lib/theme";

const STEPS = [
  { title: "Enquire", text: "Fill the form, call or WhatsApp us.", Icon: MessageSquare, tone: "blue" },
  { title: "Visit the School", text: "Meet our team and see the classrooms.", Icon: School, tone: "orange" },
  { title: "Friendly Interaction", text: "A relaxed, pressure-free meeting with your child.", Icon: Handshake, tone: "green" },
  { title: "Documents & Registration", text: "Submit the required documents to confirm.", Icon: FileText, tone: "yellow" },
  { title: "Welcome to ABS!", text: "Your child begins a happy learning journey.", Icon: PartyPopper, tone: "pink" },
] as const;

export default function AdmissionProcess() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHead
          eyebrow="Admission Process"
          title="Joining ABS Is Easy."
          sub="Five simple steps from your first enquiry to your child's first day."
        />
        <ol className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          <div
            className="hidden lg:block absolute top-9 left-[10%] right-[10%] border-t-4 border-dashed border-blue/20"
            aria-hidden="true"
          />
          {STEPS.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={i * 0.1} className="text-center relative">
                <span
                  className={`relative mx-auto w-[72px] h-[72px] rounded-3xl grid place-items-center text-white shadow-lg rotate-3 ${T[s.tone][1]}`}
                >
                  <s.Icon className="w-8 h-8" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-ink text-white text-xs font-extrabold grid place-items-center border-2 border-white">
                    {i + 1}
                  </span>
                </span>
                <h3 className="text-xl font-bold mt-5">{s.title}</h3>
                <p className="text-sm text-ink/70 mt-1">{s.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
        <Reveal className="mt-12 text-center">
          <a href="#admForm" className="btn btn-b">
            Start Your Enquiry
          </a>
        </Reveal>
      </div>
    </section>
  );
}
