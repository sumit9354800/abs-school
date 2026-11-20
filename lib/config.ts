/**
 * ✏️ EDIT HERE — school details.
 * Sab jagah (header, footer, form, WhatsApp, map) yahin se data aata hai.
 */
export const CFG = {
  name: "ABS Public School",
  tagline: "Learning Today, Leading Tomorrow.",
  wa: "919999999999", // WhatsApp number: country code + number, no "+" or spaces
  tel: "+919999999999",
  phone: "+91 99999 99999",
  email: "info@abspublicschool.example",
  addr: "[School Address – Street, City, State – PIN]",
  mapQuery: "New Delhi, India", // Google Maps search text — put the school's real address here
  hours: "Mon – Sat, 8:30 AM – 2:30 PM", // office timings (replace)
  social: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
  },
};

export const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#academics", label: "Academics" },
  { href: "#facilities", label: "Facilities" },
  { href: "#activities", label: "Activities" },
  { href: "#events", label: "Events" },
  { href: "#gallery", label: "Gallery" },
  { href: "#admission", label: "Contact" },
];

export const waLink = (text = "Hello, I would like to know about admissions at ABS Public School.") =>
  `https://wa.me/${CFG.wa}?text=${encodeURIComponent(text)}`;
