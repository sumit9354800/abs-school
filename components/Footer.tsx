import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";
import { CFG, waLink } from "@/lib/config";

const soc =
  "w-9 h-9 rounded-full bg-white/10 grid place-items-center hover:bg-blue transition";

export default function Footer() {
  return (
    <footer className="bg-ink text-blue-100 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 text-white">
              <span className="w-11 h-11 rounded-2xl bg-blue grid place-items-center fh font-extrabold">ABS</span>
              <span className="fh font-extrabold text-lg">ABS PUBLIC SCHOOL</span>
            </div>
            <p className="mt-4 text-sm">
              A caring, joyful school for children from Nursery to Class 5th, focused on foundational learning and
              all-round development.
            </p>
            <div className="mt-5 flex gap-3">
              <a href={CFG.social.facebook} aria-label="Facebook" className={soc}>
                <Facebook className="w-4 h-4" />
              </a>
              <a href={CFG.social.instagram} aria-label="Instagram" className={soc}>
                <Instagram className="w-4 h-4" />
              </a>
              <a href={CFG.social.youtube} aria-label="YouTube" className={soc}>
                <Youtube className="w-4 h-4" />
              </a>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={`${soc} hover:!bg-emerald-500`}>
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                ["#about", "About Us"],
                ["#academics", "Academics"],
                ["#activities", "Activities"],
                ["#events", "Events"],
                ["#gallery", "Gallery"],
                ["#admission", "Admissions"],
              ].map(([h, l]) => (
                <li key={h}>
                  <a className="hover:text-white" href={h}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-3">Programs &amp; Facilities</h3>
            <ul className="space-y-2 text-sm">
              <li>Nursery, LKG &amp; UKG</li>
              <li>Class 1st – 2nd</li>
              <li>Class 3rd – 5th</li>
              <li>
                <a className="hover:text-white" href="#facilities">
                  Our Facilities
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-3">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <a href={`tel:${CFG.tel}`}>{CFG.phone}</a>
              </li>
              <li className="flex gap-2">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                <a href={`mailto:${CFG.email}`} className="break-all">
                  {CFG.email}
                </a>
              </li>
              <li className="flex gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{CFG.addr}</span>
              </li>
            </ul>
          </div>
        </div>

        <p className="fh text-center text-sun text-xl mt-12">Little Steps Today, Bright Futures Tomorrow.</p>
        <p className="mt-4 pt-5 border-t border-white/10 text-center text-xs">
          © {new Date().getFullYear()} ABS PUBLIC SCHOOL. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
