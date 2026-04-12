import React, { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  variant?: "dark" | "light";
}

export function GlowCard({ children, className = "", glowColor = "#a78bfa", variant = "dark" }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0, show: false });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top, show: true });
  }, []);

  const isLight = variant === "light";

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPos(p => ({ ...p, show: false }))}
      className={cn(
        "relative overflow-hidden rounded-2xl border transition-all duration-300 backdrop-blur-xl",
        isLight 
          ? "border-white/20 bg-white/70 shadow-[0_8px_32px_rgba(255,255,255,0.1)] hover:bg-white/80" 
          : "border-white/8 bg-[#0d0d18]/50 hover:border-purple-500/30",
        "hover:-translate-y-1",
        className
      )}
    >
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
      {pos.show && (
        <div
          className="pointer-events-none absolute z-10 rounded-full blur-3xl opacity-20 transition-opacity"
          style={{
            width: 300,
            height: 300,
            left: pos.x - 150,
            top: pos.y - 150,
            background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
          }}
        />
      )}
      <div className="relative z-20 h-full">{children}</div>
    </div>
  );
}

