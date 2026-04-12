import React, { useEffect, useRef, memo } from "react";
import { motion } from "framer-motion";

export const MeshBackground = memo(() => (
  <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#020205]">
    <motion.div
      animate={{
        x: [0, 100, -50, 0],
        y: [0, -50, 100, 0],
        scale: [1, 1.3, 0.9, 1],
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute top-[-10%] left-[-20%] w-[80vw] h-[80vw] rounded-full blur-[160px] opacity-30"
      style={{ background: "radial-gradient(circle, rgba(76, 29, 149, 0.4), transparent 75%)" }}
    />
    <motion.div
      animate={{
        x: [0, -60, 40, 0],
        y: [0, 80, -40, 0],
        scale: [1.2, 1, 1.4, 1.2],
      }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full blur-[140px] opacity-25"
      style={{ background: "radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent 75%)" }}
    />
  </div>
));

export const ParticleCanvas = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    const NUM = 150;
    const particles = Array.from({ length: NUM }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 0.8 + 0.2,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx.fill();
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      }
      requestAnimationFrame(draw);
    }

    const anim = requestAnimationFrame(draw);
    const handleResize = () => { 
      W = canvas.width = window.innerWidth; 
      H = canvas.height = window.innerHeight; 
    };
    window.addEventListener("resize", handleResize);
    return () => { 
      cancelAnimationFrame(anim); 
      window.removeEventListener("resize", handleResize); 
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
});

export const PageHeader = ({ 
  brand, 
  title, 
  subtitle,
  category = "Research"
}: { 
  brand: string, 
  title: string, 
  subtitle: string,
  category?: string 
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    className="mb-16 pt-24"
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="h-[1px] w-12 bg-purple-500" />
      <span className="text-[10px] uppercase tracking-[0.4em] font-black text-purple-400">{brand}</span>
    </div>
    <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none text-white lg:-ml-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
      {title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">{category}</span>
    </h1>
    <p className="mt-8 text-white/40 text-sm max-w-sm font-medium tracking-wide leading-relaxed">
      {subtitle}
    </p>
  </motion.div>
);
