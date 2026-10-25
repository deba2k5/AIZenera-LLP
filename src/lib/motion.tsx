import { Children, cloneElement, isValidElement, useEffect, useRef, type ReactNode } from "react";

const reduced = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Splits text (including nested elements like <em>) into masked words that slide up
 * one after another. Animates when an ancestor gets `.is-visible` (see useReveal).
 */
export function SplitText({ children, delay = 0, step = 55 }: { children: ReactNode; delay?: number; step?: number }) {
  let i = 0;
  const split = (node: ReactNode): ReactNode => {
    if (typeof node === "string") {
      return node.split(/(\s+)/).map((part) => {
        if (!part) return null;
        if (/^\s+$/.test(part)) return part;
        const d = delay + i * step;
        const k = `w${i++}`;
        return (
          <span key={k} className="sw">
            <span className="sw-i" style={{ transitionDelay: `${d}ms` }}>{part}</span>
          </span>
        );
      });
    }
    if (Array.isArray(node)) return Children.map(node, split);
    if (isValidElement<{ children?: ReactNode }>(node)) {
      return cloneElement(node, { key: `e${i}` }, split(node.props.children));
    }
    return node;
  };
  return <>{split(children)}</>;
}

/** Moves its content slowly against the scroll. Put it inside an overflow-hidden box. */
export function Parallax({ speed = 0.12, className = "", children }: { speed?: number; className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    const box = el?.parentElement;
    if (!el || !box || reduced()) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = box.getBoundingClientRect();
      const vh = window.innerHeight;
      if (r.bottom < -100 || r.top > vh + 100) return;
      const max = r.height * 0.08;
      const off = Math.max(-max, Math.min(max, (r.top + r.height / 2 - vh / 2) * -speed));
      el.style.transform = `translate3d(0, ${off.toFixed(1)}px, 0) scale(1.18)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [speed]);
  return (
    <div ref={ref} className={`h-full w-full will-change-transform ${className}`} style={{ transform: "scale(1.18)" }}>
      {children}
    </div>
  );
}

/** Endless horizontal ticker. Pauses on hover. */
export function Marquee({ items, className = "" }: { items: string[]; className?: string }) {
  const row = (hidden = false) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((t, idx) => (
        <span key={t + idx} className="flex items-center">
          <span className={idx % 2 ? "text-stroke" : ""}>{t}</span>
          <span className="mx-6 text-[0.5em] text-accent sm:mx-10">✦</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className={`group flex overflow-hidden ${className}`}>
      <div className="flex w-max animate-marquee py-[0.12em] leading-[1.35] group-hover:[animation-play-state:paused]">
        {row()}
        {row(true)}
      </div>
    </div>
  );
}

/** Thin accent line at the very top showing how far down the page you are. */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (ref.current) ref.current.style.transform = `scaleX(${h > 0 ? window.scrollY / h : 0})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return <div ref={ref} aria-hidden="true" className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-accent to-[#8E5BFF]" style={{ transform: "scaleX(0)" }} />;
}
