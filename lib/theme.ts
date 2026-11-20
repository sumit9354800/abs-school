/** [soft icon style, solid background] */
export const T = {
  blue: ["bg-blue/10 text-blue", "bg-blue"],
  orange: ["bg-tang/15 text-tang", "bg-tang"],
  green: ["bg-mint/20 text-emerald-600", "bg-mint"],
  yellow: ["bg-sun/30 text-yellow-700", "bg-sun"],
  sky: ["bg-sky/20 text-sky-600", "bg-sky"],
  pink: ["bg-pink-100 text-pink-600", "bg-pink-500"],
} as const;

export type Tone = keyof typeof T;
