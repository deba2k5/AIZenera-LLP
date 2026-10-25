import { Link } from "react-router-dom";
import { site } from "../config/site";

/** The AIZenera "A" mark, drawn as SVG so it stays sharp at any size. Uses currentColor. */
export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 92" className={className} fill="currentColor" aria-hidden="true">
      {/* main diagonal stroke */}
      <path d="M50 18.5 L82.5 72" stroke="currentColor" strokeWidth="34" strokeLinecap="round" fill="none" />
      {/* left droplet */}
      <circle cx="18.5" cy="71.5" r="17.5" />
      {/* neck joining droplet to the top of the stroke */}
      <path d="M14 55 C25 53.5 32 45 33.5 30 L50 18 L50 46 L47.8 46.3 C45.6 42 40.5 41.5 38.4 49 C36.6 55 35.2 59.5 35.6 66 L20 72 Z" />
    </svg>
  );
}

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      to="/"
      className={`group inline-flex items-center gap-2.5 ${light ? "text-ivory" : "text-ink"}`}
      aria-label={`${site.name} — home`}
    >
      <LogoMark className="h-7 w-7 transition-transform duration-500 group-hover:-rotate-6" />
      <span className="text-[1.35rem] font-semibold tracking-[-0.03em]">
        AI<span className="font-serif font-normal italic tracking-normal">Zenera</span>
      </span>
    </Link>
  );
}
