"use client";

import { useEffect, useRef, useState } from "react";
import { ill, imgUrl } from "@/lib/images";

type Props = {
  k: string;
  w?: number;
  alt: string;
  className?: string;
  eager?: boolean;
};

/** Photo with automatic colourful illustration fallback if the image fails to load. */
export default function Img({ k, w = 800, alt, className = "", eager = false }: Props) {
  const [bad, setBad] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) setBad(true);
  }, []);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={bad ? ill(k) : imgUrl(k, w)}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      onError={() => setBad(true)}
      className={`img-fb ${className}`}
    />
  );
}
