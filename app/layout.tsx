import type { Metadata, Viewport } from "next";
import "./globals.css";
import { CFG } from "@/lib/config";

export const metadata: Metadata = {
  title: "ABS Public School | Nursery to Class 5th – Admissions Open",
  description:
    "ABS Public School offers a joyful, caring learning environment for children from Nursery to Class 5th. Connect with us for admission enquiries.",
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "ABS Public School – Where Little Minds Grow Into Big Dreams",
    description: "Nursery to Class 5th. Child-friendly learning and holistic development.",
    type: "website",
    images: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=70",
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2563EB",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "School",
  name: CFG.name,
  description: "Nursery to Class 5th school with child-friendly, activity-based learning.",
  telephone: CFG.phone,
  email: CFG.email,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Nunito+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
