import { useEffect, useRef, useState, memo } from "react";
import { BookOpen, Download, ExternalLink, FileText, Video, Code, Search, Filter, Sparkles, GraduationCap, Brain, Zap, ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { GlowCard } from "@/components/GlowCard";

/* ─── Animated Mesh Background ──────────────────────────────────── */
const MeshBackground = () => (
  <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
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
);

/* ─── Starfield Canvas ─────────────────────────────────────────── */
const ParticleCanvas = memo(() => {
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
    const handleResize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
    window.addEventListener("resize", handleResize);
    return () => { cancelAnimationFrame(anim); window.removeEventListener("resize", handleResize); };
  }, []);
  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
});

/* ─── Mock Data ─────────────────────────────────────────────────── */
const materials = [
  {
    id: 1,
    title: "Quantum Neural Architectures",
    description: "A deep dive into next-generation neural networks and non-linear cognition structures.",
    type: "PDF",
    icon: Brain,
    category: "Generative AI",
    color: "rgba(139, 92, 246, 0.5)",
    featured: true,
  },
  {
    id: 2,
    title: "Zenera Matrix Protocols",
    description: "Complete guide to working within the decentralized Zenera computational environment.",
    type: "MD",
    icon: Shield,
    category: "Protocols",
    color: "rgba(99, 102, 241, 0.4)",
  },
  {
    id: 3,
    title: "Mastering Prompt Alchemy",
    description: "Advanced techniques for high-fidelity generative outputs through lexical precision.",
    type: "DOCX",
    icon: Sparkles,
    category: "NLP",
    color: "rgba(236, 72, 153, 0.4)",
  },
  {
    id: 4,
    title: "The Pythonic Singularity",
    description: "Optimization patterns for large-scale AI modeling and data processing.",
    type: "CODE",
    icon: Code,
    category: "Programming",
    color: "rgba(34, 197, 94, 0.3)",
  },
  {
    id: 5,
    title: "CV: From Pixels to Perception",
    description: "Re-learning Computer Vision through the lens of modern transformer models.",
    type: "VIDEO",
    icon: Video,
    category: "Deep Learning",
    color: "rgba(168, 85, 247, 0.4)",
    featured: true,
  },
  {
    id: 6,
    title: "The Ethics of Sentience",
    description: "Navigating the moral landscape of artificial consciousness and AI governance.",
    type: "PDF",
    icon: BookOpen,
    category: "Ethics",
    color: "rgba(79, 70, 229, 0.4)",
  },
];

const categories = ["All", "Machine Learning", "Deep Learning", "NLP", "Generative AI", "Programming", "Ethics"];

/* ─── StudyMaterial Component ───────────────────────────────────── */
const StudyMaterial = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMaterials = materials.filter(m => 
    (activeCategory === "All" || m.category === activeCategory) &&
    (m.title.toLowerCase().includes(searchQuery.toLowerCase()) || m.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-[#020205] font-sans text-white overflow-x-hidden relative">
      <MeshBackground />
      <ParticleCanvas />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
        
        {/* Editorial Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-purple-500" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-purple-400">Knowledge Nexus</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none" style={{ fontFamily: "'Outfit', sans-serif" }}>
            ZENERA <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">ARCHIVES</span>
          </h1>
          <p className="mt-8 text-white/40 text-sm max-w-sm font-medium tracking-wide leading-relaxed">
            Curated neural assets for deep exploration. Synchronize your cognition with the archive.
          </p>
        </motion.div>

        {/* Global Search and Filter */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          <div className="relative w-full md:max-w-md group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-hover:text-purple-400 transition-colors" />
            <Input 
              placeholder="Query the database..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-14 bg-white/[0.03] border-white/5 rounded-2xl pl-12 text-white font-medium placeholder:text-white/10 focus:bg-white/5 transition-all"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto invisible-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap border-2 ${
                  activeCategory === cat 
                    ? "bg-purple-600 border-purple-400 text-white shadow-[0_0_20px_rgba(139,92,246,0.5)]" 
                    : "bg-white/[0.03] border-white/5 text-white/40 hover:border-white/20 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <AnimatePresence mode="popLayout">
            {filteredMaterials.map((material, idx) => (
              <motion.div
                key={material.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: idx * 0.05 }}
                className={`${material.featured ? "md:col-span-8 h-full" : "md:col-span-4"}`}
              >
                <GlowCard 
                  className="p-8 h-full flex flex-col justify-between group cursor-pointer"
                  glowColor={material.color}
                >
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.03] flex items-center justify-center border border-white/5 group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all">
                        <material.icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-black uppercase tracking-widest text-white/20 bg-white/[0.02] px-3 py-1 rounded-full border border-white/5">
                          {material.type}
                        </span>
                        {material.featured && (
                          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-600/10 border border-purple-500/30">
                            <Zap className="w-3 h-3 text-purple-400 fill-purple-400" />
                            <span className="text-[9px] font-black uppercase tracking-widest text-purple-400">Featured</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <h2 className={`${material.featured ? "text-4xl" : "text-2xl"} font-black tracking-tighter leading-tight mb-4 group-hover:text-purple-400 transition-colors`}>
                      {material.title}
                    </h2>
                    <p className={`text-white/40 font-medium ${material.featured ? "text-lg max-w-lg" : "text-sm"} leading-relaxed mb-8`}>
                      {material.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-400/50">
                      {material.category}
                    </span>
                    <Button variant="ghost" className="rounded-full h-12 w-12 p-0 hover:bg-white/10 hover:text-white border border-white/5 group">
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Footer Elevation Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 pt-24 border-t border-purple-500/10"
        >
          <GlowCard className="p-16 text-center overflow-hidden relative" glowColor="rgba(168, 85, 247, 0.2)">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -top-24 -right-24 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full"
            />
            <GraduationCap className="w-16 h-16 text-purple-500 mx-auto mb-8 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">Missing a core asset?</h2>
            <p className="text-white/40 max-w-md mx-auto mb-10 text-lg">
              Contact the Zenera Architects to request specific documentation or deep-learning resources.
            </p>
            <Button className="h-16 px-12 rounded-2xl bg-white text-black font-black uppercase tracking-[0.3em] text-[10px] hover:bg-purple-500 hover:text-white transition-all shadow-2xl">
              Request Transmission
            </Button>
          </GlowCard>
        </motion.div>
      </div>
    </div>
  );
};

export default StudyMaterial;
