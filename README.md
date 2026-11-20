# ABS Public School – Next.js Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion + Lucide icons.

## Run karne ka tareeka

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # production server
```

Node.js 18.17 ya usse naya chahiye.

## Kya edit karna hai

| Cheez | File |
|---|---|
| Phone, WhatsApp, email, address, office timings, map location, social links | `lib/config.ts` |
| Photos (Unsplash IDs ya apni `/public` wali photos) | `lib/images.ts` |
| Stats numbers (500+ students etc.) | `components/Stats.tsx` |
| Principal ka naam aur message | `components/Principal.tsx` |
| Daily schedule | `components/DayInSchool.tsx` |
| Events calendar | `components/Events.tsx` |
| Parent reviews | `components/Testimonials.tsx` |
| FAQs | `components/FAQ.tsx` |
| Colours / fonts | `tailwind.config.ts`, `app/globals.css` |

Jahan "Placeholder", "Illustrative" ya "Sample" likha hai wahan school ki asli details daalo, phir wo choti note-lines hata do.

## Apni photos lagana

1. Photo ko `public/` folder mein rakho, jaise `public/gallery/1.jpg`.
2. `lib/images.ts` mein `IMG` ki value ko `"/gallery/1.jpg"` kar do.

## Admission form – enquiry kahan jati hai?

Form `app/api/enquiry/route.ts` ko POST karta hai.

- `.env.local` mein `ENQUIRY_WEBHOOK_URL=https://...` set karo (Google Apps Script, Make, Zapier ya n8n webhook). Enquiry us URL par JSON ke roop mein jayegi.
- Agar webhook set nahi hai to form visitor ko "Send on WhatsApp" button dikhata hai, taaki enquiry school tak pahunch jaye.

## Deploy

Sabse aasan: [Vercel](https://vercel.com) par repo import karo. `ENQUIRY_WEBHOOK_URL` ko Environment Variables mein add karna na bhoolein.
