"use client";

import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { CFG, waLink } from "@/lib/config";

export default function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <>
      {/* WhatsApp + Call (always visible) */}
      <div className="fixed bottom-5 left-4 z-40 flex flex-col gap-3">
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-[52px] h-[52px] rounded-full bg-emerald-500 text-white grid place-items-center shadow-lg shadow-emerald-500/40 hover:scale-110 transition"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <a
          href={`tel:${CFG.tel}`}
          aria-label="Call the school"
          className="w-[52px] h-[52px] rounded-full bg-blue text-white grid place-items-center shadow-lg shadow-blue/40 hover:scale-110 transition lg:hidden"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>

      <button
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-5 right-4 z-40 w-12 h-12 rounded-full bg-sun text-ink shadow-lg grid place-items-center transition ${
          show ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
}
