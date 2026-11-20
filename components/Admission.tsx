"use client";

import { FormEvent, useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, Loader2 } from "lucide-react";
import { CFG, waLink } from "@/lib/config";

type Status = "idle" | "sending" | "sent" | "saved" | "error";
type Errs = Record<string, boolean>;

export default function Admission() {
  const [status, setStatus] = useState<Status>("idle");
  const [errs, setErrs] = useState<Errs>({});
  const [note, setNote] = useState("");
  const [waText, setWaText] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const fd = new FormData(f);
    const v = {
      parent: String(fd.get("parent") ?? "").trim(),
      child: String(fd.get("child") ?? "").trim(),
      mobile: String(fd.get("mobile") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      cls: String(fd.get("cls") ?? ""),
      msg: String(fd.get("msg") ?? "").trim(),
      consent: fd.get("consent") === "on",
    };

    const bad: Errs = {
      parent: !v.parent,
      child: !v.child,
      mobile: !/^[6-9]\d{9}$/.test(v.mobile),
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email),
      cls: !v.cls,
      consent: !v.consent,
    };
    setErrs(bad);
    if (Object.values(bad).some(Boolean)) {
      setStatus("error");
      setNote("Please fix the highlighted fields. Mobile must be a valid 10-digit number.");
      return;
    }

    setStatus("sending");
    setNote("");
    try {
      const r = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(v),
      });
      const j = await r.json();
      if (!r.ok || !j.ok) throw new Error(j.error || "Failed");

      setWaText(
        `Hello, I would like to enquire about admission at ABS Public School.\n` +
          `Parent: ${v.parent}\nChild: ${v.child}\nClass: ${v.cls}\nMobile: ${v.mobile}\nEmail: ${v.email}` +
          (v.msg ? `\nMessage: ${v.msg}` : "")
      );
      setStatus(j.forwarded ? "sent" : "saved");
      f.reset();
    } catch {
      setStatus("error");
      setNote("Something went wrong. Please try again, or call / WhatsApp us directly.");
    }
  }

  const cls = (k: string) => `field mt-1 ${errs[k] ? "err" : ""}`;
  const clear = (k: string) => () => errs[k] && setErrs((p) => ({ ...p, [k]: false }));

  return (
    <section
      id="admission"
      className="relative overflow-hidden bg-gradient-to-br from-blue to-indigo-800 text-white py-16 lg:py-24"
    >
      <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-sun/30" />
      <div className="absolute bottom-10 left-1/3 w-20 h-20 rounded-3xl bg-tang/40 rotate-12" />
      <div className="absolute top-1/2 right-0 w-32 h-32 rounded-full bg-mint/25" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-5 gap-10 items-start">
        <div className="lg:col-span-2">
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Give Your Child a Beautiful Start to Learning.
          </h2>
          <p className="mt-5 text-lg text-blue-100">
            Begin your child&apos;s learning journey with ABS Public School. Connect with us to know more about
            admissions from Nursery to Class 5th.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a href="#admForm" className="btn btn-y">
              Admission Enquiry
            </a>
            <a href={`tel:${CFG.tel}`} className="btn btn-w">
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-g">
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
          <ul className="mt-8 space-y-3 text-blue-50">
            <li className="flex gap-3">
              <Phone className="w-5 h-5 shrink-0 mt-0.5" />
              <span>{CFG.phone}</span>
            </li>
            <li className="flex gap-3">
              <Mail className="w-5 h-5 shrink-0 mt-0.5" />
              <span className="break-all">{CFG.email}</span>
            </li>
            <li className="flex gap-3">
              <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
              <span>{CFG.addr}</span>
            </li>
            <li className="flex gap-3">
              <Clock className="w-5 h-5 shrink-0 mt-0.5" />
              <span>{CFG.hours}</span>
            </li>
          </ul>
        </div>

        <form
          id="admForm"
          onSubmit={onSubmit}
          noValidate
          className="lg:col-span-3 bg-white text-ink rounded-[32px] p-5 sm:p-8 grid sm:grid-cols-2 gap-4 shadow-2xl"
        >
          <div>
            <label className="text-sm font-bold" htmlFor="f-p">
              Parent Name *
            </label>
            <input id="f-p" name="parent" required className={cls("parent")} autoComplete="name" onInput={clear("parent")} aria-invalid={!!errs.parent} />
          </div>
          <div>
            <label className="text-sm font-bold" htmlFor="f-c">
              Child Name *
            </label>
            <input id="f-c" name="child" required className={cls("child")} onInput={clear("child")} aria-invalid={!!errs.child} />
          </div>
          <div>
            <label className="text-sm font-bold" htmlFor="f-m">
              Mobile Number *
            </label>
            <input
              id="f-m"
              name="mobile"
              required
              inputMode="numeric"
              maxLength={10}
              className={cls("mobile")}
              autoComplete="tel-national"
              onInput={clear("mobile")}
              aria-invalid={!!errs.mobile}
            />
          </div>
          <div>
            <label className="text-sm font-bold" htmlFor="f-e">
              Email Address *
            </label>
            <input id="f-e" name="email" type="email" required className={cls("email")} autoComplete="email" onInput={clear("email")} aria-invalid={!!errs.email} />
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm font-bold" htmlFor="f-k">
              Applying For Class *
            </label>
            <select id="f-k" name="cls" required className={cls("cls")} defaultValue="" onChange={clear("cls")} aria-invalid={!!errs.cls}>
              <option value="">Select class</option>
              {["Nursery", "LKG", "UKG", "Class 1", "Class 2", "Class 3", "Class 4", "Class 5"].map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm font-bold" htmlFor="f-s">
              Message
            </label>
            <textarea id="f-s" name="msg" rows={3} className="field mt-1" />
          </div>
          <label className="sm:col-span-2 flex gap-3 text-sm text-ink/70">
            <input type="checkbox" name="consent" className="mt-1 w-4 h-4 accent-blue" onChange={clear("consent")} aria-invalid={!!errs.consent} />
            <span className={errs.consent ? "text-red-600 font-semibold" : ""}>
              I agree to be contacted by ABS Public School regarding this admission enquiry. *
            </span>
          </label>

          <button className="btn btn-b sm:col-span-2" type="submit" disabled={status === "sending"}>
            {status === "sending" ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" /> Sending…
              </>
            ) : (
              <>
                <Send className="w-5 h-5" /> Submit Admission Enquiry
              </>
            )}
          </button>

          <div className="sm:col-span-2" role="status" aria-live="polite">
            {status === "error" && note && (
              <p className="rounded-xl p-3 text-sm bg-red-50 text-red-700">{note}</p>
            )}
            {status === "sent" && (
              <p className="rounded-xl p-3 text-sm bg-emerald-50 text-emerald-800">
                Thank you! Your enquiry has been sent. Our team will contact you soon.
              </p>
            )}
            {status === "saved" && (
              <div className="rounded-xl p-4 text-sm bg-amber-50 text-amber-900 space-y-3">
                <p>
                  Thank you! Your details are ready. To make sure the school receives your enquiry right away,
                  please tap the button below to send it on WhatsApp.
                </p>
                <a href={waLink(waText)} target="_blank" rel="noopener noreferrer" className="btn btn-g">
                  <MessageCircle className="w-5 h-5" /> Send on WhatsApp
                </a>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
