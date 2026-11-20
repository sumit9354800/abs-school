import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  sub?: string;
  light?: boolean;
  className?: string;
};

export default function SectionHead({ eyebrow, title, sub, light, className = "" }: Props) {
  return (
    <Reveal className={`max-w-3xl mx-auto text-center ${className}`}>
      {eyebrow && (
        <span
          className={`inline-block rounded-full text-xs font-bold tracking-wider px-4 py-1.5 mb-3 ${
            light ? "bg-white/15 text-white" : "bg-sun/30 text-ink"
          }`}
        >
          {eyebrow.toUpperCase()}
        </span>
      )}
      <h2 className="h2 text-4xl sm:text-5xl font-extrabold leading-tight">{title}</h2>
      {sub && <p className={`mt-4 text-lg ${light ? "text-blue-100" : "text-ink/70"}`}>{sub}</p>}
    </Reveal>
  );
}
