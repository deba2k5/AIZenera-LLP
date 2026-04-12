import {
  MessageCircle, Instagram, Linkedin, Youtube, ExternalLink,
  Users, ArrowRight, Star, Quote, GraduationCap, Sparkles,
  Zap, BookOpen, Trophy, ChevronDown
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useUser } from "@/context/UserContext";
import { motion, useScroll, useTransform, Variants, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { GlowCard } from "@/components/GlowCard";

import heroLogo from "@/assets/pic3d.png";
import heroVideo from "@/assets/Logo_Based_Background_Video_Idea.mp4";
import courseImg1 from "@/assets/Untitled design (32).png";
import courseImg2 from "@/assets/Untitled design (34).png";
import logo4 from "@/assets/4.png";
import logo5 from "@/assets/5.png";
import logo6 from "@/assets/6.png";
import logo7 from "@/assets/7.png";
import logo8 from "@/assets/8.png";
import logo9 from "@/assets/9.png";
import logo10 from "@/assets/10.png";
import logo11 from "@/assets/11.png";

/* ─── Data ──────────────────────────────────────────────────────── */
const socialLinks = [
  { icon: MessageCircle, label: "WhatsApp",  href: "https://chat.whatsapp.com/IxavpJ0dP5O2DboZCNFtnk", color: "#22C55E" },
  { icon: Instagram,     label: "Instagram", href: "https://www.instagram.com/aizenera_official?utm_source=qr&igsh=Z3k5eWNwbG95eG55", color: "#EC4899" },
  { icon: Linkedin,      label: "LinkedIn",  href: "https://www.linkedin.com/company/aizenera/", color: "#3B82F6" },
  { icon: Youtube,       label: "YouTube",   href: "https://youtube.com/@aizenera2025?si=kFuFhukEZ8Zf5OdD", color: "#EF4444" },
];

const partnerLogos = [logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11];

const testimonials = [
  { quote: "The LLM masterclass helped me build a real project I could showcase.", name: "Ananya Sen",   role: "CSE Undergraduate", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=128&h=128&fit=crop&auto=format" },
  { quote: "Clear roadmap and practical sessions. Landed an internship after the course.", name: "Rahul Mehta", role: "ECE Student",       avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=128&h=128&fit=crop&auto=format" },
  { quote: "Best value. Strong community and mentors who actually help.", name: "Priya Sharma", role: "AI Enthusiast",    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=128&h=128&fit=crop&auto=format" },
];

const featuredCourses = [
  { 
    title: "AI Tools Mastery Bootcamp", 
    description: "Imagine completing 8 hours of work in 2 hours. Automate repetitive tasks, boost productivity, and build smarter workflows instantly.",
    price: "₹149", 
    status: "LIVE", 
    date: "2 Days (2 Hours)", 
    image: courseImg1, 
    href: "/courses" 
  },
  { 
    title: "Professional AI & ML Mastery Program", 
    description: "Learn real AI skills that companies actually hire for. From foundations to advanced deployment in 3 months.",
    price: "₹1499", 
    status: "LIVE", 
    date: "3 Months", 
    image: courseImg2, 
    href: "/courses" 
  },
];

const stats = [
  { label: "Active Learners", value: "1,000+", icon: Users,  color: "#A78BFA" },
  { label: "Partner Clubs",   value: "15+",    icon: Trophy, color: "#60A5FA" },
  { label: "Course Rating",   value: "4.8/5",  icon: Star,   color: "#F472B6" },
];

/* ─── Animation variants ─────────────────────────────────────────── */
const fade = (delay = 0): Variants => ({
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } },
});

const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ─── Particle canvas ────────────────────────────────────────────── */
interface Particle { x: number; y: number; vx: number; vy: number; radius: number; alpha: number; }

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let W = (canvas.width  = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const NUM = 140;
    const particles: Particle[] = Array.from({ length: NUM }, () => makeParticle(W, H));

    function makeParticle(w: number, h: number): Particle {
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.3 + Math.random() * 0.7;
      return {
        x: w / 2 + (Math.random() - 0.5) * w * 0.6,
        y: h / 2 + (Math.random() - 0.5) * h * 0.6,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: 0.5 + Math.random() * 1.5,
        alpha: 0.2 + Math.random() * 0.6,
      };
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // Spotlight following mouse
      const grd = ctx.createRadialGradient(mouse.current.x, mouse.current.y, 0, mouse.current.x, mouse.current.y, 340);
      grd.addColorStop(0, "rgba(139, 92, 246, 0.10)");
      grd.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, W, H);

      for (const p of particles) {
        // draw line back to center for warp effect
        const cx = W / 2, cy = H / 2;
        const dx = p.x - cx, dy = p.y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 40) continue;

        const lineLen = Math.min(dist * 0.04, 18);
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x - p.vx * lineLen, p.y - p.vy * lineLen);
        ctx.strokeStyle = `rgba(167,139,250,${p.alpha * 0.6})`;
        ctx.lineWidth = p.radius * 0.5;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,180,255,${p.alpha})`;
        ctx.fill();

        // move outward from center
        const nx = p.x + p.vx;
        const ny = p.y + p.vy;
        if (nx < 0 || nx > W || ny < 0 || ny > H) {
          const angle = Math.random() * Math.PI * 2;
          const speed = 0.3 + Math.random() * 0.7;
          p.x = W / 2 + (Math.random() - 0.5) * 80;
          p.y = H / 2 + (Math.random() - 0.5) * 80;
          p.vx = Math.cos(angle) * speed;
          p.vy = Math.sin(angle) * speed;
          p.alpha = 0.1 + Math.random() * 0.3;
        } else {
          p.x = nx;
          p.y = ny;
          // Slightly accelerate as particles move outward
          p.vx *= 1.003;
          p.vy *= 1.003;
          // Speed cap
          const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
          if (spd > 4) { p.vx *= 0.95; p.vy *= 0.95; }
          p.alpha = Math.min(p.alpha + 0.003, 0.8);
        }
      }
      animRef.current = requestAnimationFrame(draw);
    }

    animRef.current = requestAnimationFrame(draw);

    const handleMouse = (e: MouseEvent) => { mouse.current = { x: e.clientX, y: e.clientY }; };
    const handleResize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
}



/* ─── Main Component ─────────────────────────────────────────────── */
const Home = () => {
  const { user } = useUser();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY       = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const [showIntro, setShowIntro] = useState(true);
  const completeIntro = () => setShowIntro(false);

  return (
    <div className="min-h-screen bg-[#06060f] overflow-x-hidden">

      {/* ── Starfield always visible ── */}
      <ParticleCanvas />

      {/* ── Ambient purple orbs ── */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-15%] left-[-10%] w-[55vw] h-[55vw] rounded-full blur-[180px]"
          style={{ background: "radial-gradient(circle, rgba(109,40,217,0.18), transparent 70%)" }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] rounded-full blur-[160px]"
          style={{ background: "radial-gradient(circle, rgba(88,28,135,0.15), transparent 70%)" }} />
        <div className="absolute top-[35%] left-[40%] w-[30vw] h-[30vw] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle, rgba(14,165,233,0.07), transparent 70%)" }} />
      </div>

      {/* ══════════════════ INTRO ══════════════════ */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[200] bg-[#020205] flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Ambient background for intro */}
            <div className="absolute inset-0 z-0">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
                style={{ background: "radial-gradient(circle at center, rgba(139,92,246,0.1), transparent 70%)" }} />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, scale: 1, letterSpacing: "1.2em" }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="relative z-10 flex flex-col items-center"
              onAnimationComplete={() => setTimeout(completeIntro, 800)}
            >
              <img src={heroLogo} alt="AIZenera" className="w-32 h-32 mb-8 drop-shadow-[0_0_30px_rgba(139,92,246,0.5)]" />
              <h2 className="text-white font-black text-2xl tracking-[1.2em] ml-[1.2em] uppercase opacity-80" style={{ fontFamily: "'Outfit', sans-serif" }}>AIZENERA</h2>
              <div className="mt-8 flex items-center gap-3">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-purple-500/50" />
                <span className="text-[10px] text-white/20 font-black uppercase tracking-[0.4em]">Initializing Core</span>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-purple-500/50" />
              </div>
            </motion.div>

            {/* Subtle scanning line */}
            <motion.div 
              initial={{ top: "-10%" }}
              animate={{ top: "110%" }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent z-20"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══════════════════ HERO ══════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden z-10">
        
        {/* Ambient Gradient Background */}
        <div className="absolute inset-0 z-0 bg-[#020205]">
          <div className="absolute top-0 left-0 w-full h-full opacity-30"
            style={{ 
              background: "radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.15), transparent 50%), radial-gradient(circle at 80% 70%, rgba(79, 70, 229, 0.1), transparent 50%)" 
            }} 
          />
        </div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 pt-28 pb-20 w-full"
        >
          <motion.div
            initial="hidden" animate="visible" variants={stagger}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* ── LEFT ── */}
            <div>
              <motion.div variants={fade(0)}
                className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-purple-500/30 bg-purple-950/20 text-purple-300 backdrop-blur-md"
              >
                <Sparkles className="w-3 h-3 text-purple-400" />
                Future of AI Education
              </motion.div>

              <motion.h1 variants={fade(0.1)}
                className="font-black leading-[0.88] mb-8 tracking-tight"
                style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(3.5rem, 8vw, 6.5rem)" }}
              >
                <span className="text-white block">LEARN</span>
                <span className="block whitespace-nowrap" style={{
                  background: "linear-gradient(135deg, #e0d7ff 0%,#a78bfa 45%,#7c3aed 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
                }}>AI BEYOND</span>
                <span className="text-white/70 block whitespace-nowrap">THE LIMIT</span>
              </motion.h1>

              <motion.p variants={fade(0.2)} className="text-lg text-white/50 leading-relaxed mb-10 max-w-md">
                Practical courses, community support, and mentors who help you build portfolio‑ready projects in AI &amp; Machine Learning.
              </motion.p>

              {user?.firstName && (
                <motion.div variants={fade(0.25)}
                  className="inline-flex items-center gap-3 mb-8 rounded-xl px-5 py-3 border border-purple-500/20 bg-purple-950/20 backdrop-blur-md"
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_#4ade80aa]" />
                  <span className="text-white/70 text-sm">Welcome back, <strong className="text-white">{user.firstName}</strong>!</span>
                </motion.div>
              )}

              <motion.div variants={fade(0.3)} className="flex flex-wrap gap-4">
                <Link to="/courses">
                  <motion.button whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-white text-sm transition-all"
                    style={{ background: "linear-gradient(135deg, #7c3aed, #a78bfa)", boxShadow: "0 0 28px rgba(139,92,246,0.4), inset 0 1px 0 rgba(255,255,255,0.15)" }}
                  >
                    Start Learning <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
                <Link to="/about">
                  <motion.button whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white/70 text-sm border border-white/10 bg-white/3 backdrop-blur-md hover:text-white hover:border-white/20 transition-all"
                  >
                    Our Story
                  </motion.button>
                </Link>
              </motion.div>
            </div>

            {/* ── RIGHT ── */}
            <motion.div variants={fade(0.15)} className="hidden lg:block relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full blur-[80px] pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(109,40,217,0.22), transparent 70%)" }} />

              <motion.div
                animate={{ y: [0, -22, 0], rotateY: [-6, 6, -6], scale: [1, 1.02, 1] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <img src={heroLogo} alt="AIZenera 3D Logo" className="w-full h-auto mix-blend-screen" />
              </motion.div>


            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.8, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <ChevronDown className="w-5 h-5 text-white/20" />
          <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </section>

      {/* ══════════════════ STATS ══════════════════ */}
      <section className="relative py-24 px-6 lg:px-16 z-10">
        <div className="max-w-5xl mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-20" />
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {stats.map((s, i) => (
              <motion.div key={i} variants={fade(i * 0.1)}>
                <GlowCard className="p-8 flex items-center gap-6 cursor-default">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/8"
                    style={{ background: `${s.color}18` }}>
                    <s.icon className="w-7 h-7" style={{ color: s.color }} />
                  </div>
                  <div>
                    <div className="text-4xl font-black text-white leading-none" style={{ fontFamily: "'Outfit', sans-serif" }}>{s.value}</div>
                    <div className="text-xs font-semibold uppercase tracking-widest mt-1" style={{ color: s.color }}>{s.label}</div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════ WHATSAPP CTA ══════════════════ */}
      <section className="py-12 px-6 lg:px-16 z-10 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <GlowCard className="p-10 md:p-14">
              <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ background: "linear-gradient(135deg, rgba(34,197,94,0.3), transparent 60%)" }} />
              <div className="relative flex flex-col md:flex-row items-center gap-8">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #16a34a, #22c55e)", boxShadow: "0 0 40px rgba(34,197,94,0.35)" }}>
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-black text-white mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>Join the Inner Circle</h2>
                  <p className="text-white/50 text-lg mb-6">Get instant access to course updates, hackathons, and exclusive AI resources!</p>
                  <a href="https://chat.whatsapp.com/IxavpJ0dP5O2DboZCNFtnk" target="_blank" rel="noopener noreferrer">
                    <motion.button whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-sm transition-all"
                      style={{ background: "linear-gradient(135deg, #16a34a, #22c55e)", boxShadow: "0 0 28px rgba(34,197,94,0.4)" }}
                    >
                      <MessageCircle className="w-5 h-5" /> Join WhatsApp Channel <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  </a>
                </div>
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════ COURSES ══════════════════ */}
      <section className="py-24 px-6 lg:px-16 z-10 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>

            <motion.div variants={fade(0)} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-purple-500/30 bg-purple-950/20 text-purple-300 backdrop-blur-md">
                  <GraduationCap className="w-3 h-3" /> Featured Courses
                </div>
                <h2 className="font-black text-white leading-tight" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                  Selected{" "}
                  <span style={{ background: "linear-gradient(135deg,#a78bfa,#7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    Courses
                  </span>
                </h2>
                <p className="text-white/40 text-lg mt-3 max-w-md">Master the tools of tomorrow. No fluff, just hard skills that get you hired.</p>
              </div>
              <Link to="/courses">
                <motion.button whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
                  className="whitespace-nowrap px-7 py-3 rounded-full border border-white/10 text-white/60 text-sm font-semibold hover:text-white hover:border-white/25 transition-all backdrop-blur-md"
                >
                  View All Courses →
                </motion.button>
              </Link>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {featuredCourses.map((course, i) => (
                <motion.div key={i} variants={fade(i * 0.1)}>
                  <GlowCard className="group flex flex-col h-full overflow-hidden">
                    {/* Thumbnail */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img src={course.image} alt={course.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#06060f] via-[#06060f]/30 to-transparent" />
                      {/* Status */}
                      <div className="absolute top-4 left-4">
                        <div className={cn(
                          "px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest flex items-center gap-1.5 backdrop-blur-md border",
                          course.status === "LIVE"
                            ? "bg-emerald-500/20 border-emerald-400/40 text-emerald-400"
                            : "bg-white/5 border-white/10 text-white/30"
                        )}>
                          {course.status === "LIVE" && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#4ade80]" />}
                          {course.status}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7 flex flex-col flex-1">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-3xl font-black text-white group-hover:text-purple-300 transition-colors" style={{ fontFamily: "'Outfit', sans-serif" }}>{course.price}</span>
                        <span className="text-[10px] font-semibold text-white/20 uppercase tracking-widest">{course.date}</span>
                      </div>
                      <h3 className="text-base font-bold text-white/80 mb-6 leading-snug group-hover:text-white transition-colors">{course.title}</h3>
                      <div className="mt-auto">
                        {course.status === "LIVE" ? (
                          <Link to={course.href}>
                            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                              className="w-full py-3.5 rounded-xl text-sm font-bold text-white border border-purple-500/30 bg-purple-950/20 hover:bg-purple-900/30 hover:border-purple-400/50 transition-all flex items-center justify-center gap-2"
                            >
                              Enroll Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                          </Link>
                        ) : (
                          <button disabled className="w-full py-3.5 rounded-xl text-xs font-bold text-white/20 border border-white/5 cursor-not-allowed">
                            COURSE CONCLUDED
                          </button>
                        )}
                      </div>
                    </div>
                  </GlowCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════ SOCIALS ══════════════════ */}
      <section className="py-24 px-6 lg:px-16 z-10 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fade(0)} className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-purple-500/30 bg-purple-950/20 text-purple-300 backdrop-blur-md">
                <Sparkles className="w-3 h-3" /> Connect With Us
              </div>
              <h2 className="font-black text-white" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                Get{" "}
                <span style={{ background: "linear-gradient(135deg,#a78bfa,#7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Connected
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fade(i * 0.08)}
                  whileHover={{ y: -10, scale: 1.04 }}
                  className="group relative flex flex-col items-center gap-5 py-10 px-6 rounded-2xl border border-white/8 bg-[#0d0d18] overflow-hidden transition-all duration-300"
                  style={{ "--glow": social.color } as any}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                    style={{ boxShadow: `inset 0 0 60px ${social.color}18`, border: `1px solid ${social.color}40` }} />
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center border border-white/8 bg-white/3 group-hover:border-current transition-colors duration-300"
                    style={{ "--current-border": `${social.color}60` } as any}>
                    <social.icon className="w-8 h-8 transition-all duration-300" style={{ color: social.color, filter: `drop-shadow(0 0 8px ${social.color}80)` }} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/30 group-hover:text-white/80 transition-colors">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════ PARTNERS ══════════════════ */}
      <section className="py-20 px-6 lg:px-16 z-10 relative">
        <div className="max-w-6xl mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/25 to-transparent mb-14" />
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-10">
            <p className="text-white/25 text-xs font-bold uppercase tracking-[0.4em] mb-3">Trusted Partners & Collaborators</p>
            <h3 className="text-xl md:text-2xl font-black text-white/80" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Empowering <span className="text-purple-400">15+</span> Leading Institutions
            </h3>
          </motion.div>
          <Swiper
            modules={[Autoplay]} slidesPerView={2} spaceBetween={40} loop
            breakpoints={{ 640: { slidesPerView: 3 }, 768: { slidesPerView: 4 }, 1024: { slidesPerView: 5 } }}
            autoplay={{ delay: 0, disableOnInteraction: false }} speed={4000}
          >
            {partnerLogos.map((logo, i) => (
              <SwiperSlide key={i}>
                <div className="h-24 md:h-28 flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-500 px-4">
                  <img src={logo} alt="Partner" className="h-full w-full object-contain" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/25 to-transparent mt-14" />
        </div>
      </section>

      {/* ══════════════════ TESTIMONIALS ══════════════════ */}
      <section className="py-24 px-6 lg:px-16 z-10 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.div variants={fade(0)}
              className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-purple-500/30 bg-purple-950/20 text-purple-300 backdrop-blur-md">
              <Star className="w-3 h-3" /> Student Stories
            </motion.div>
            <motion.h2 variants={fade(0.1)} className="font-black text-white" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              What{" "}
              <span style={{ background: "linear-gradient(135deg,#a78bfa,#7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Learners Say
              </span>
            </motion.h2>
          </motion.div>

          <Swiper modules={[Autoplay, Pagination, Navigation]} autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
            pagination={{ clickable: true }} navigation loop className="pb-14">
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <GlowCard className="p-10 md:p-14 mx-1">
                  <div className="absolute top-0 right-0 w-48 h-48 blur-3xl opacity-8 pointer-events-none"
                    style={{ background: "radial-gradient(circle, #7c3aed, transparent)" }} />
                  <Quote className="absolute top-8 right-8 w-14 h-14 text-purple-500/10" />
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 rounded-full blur-lg opacity-50" style={{ background: "linear-gradient(135deg,#7c3aed,#a78bfa)" }} />
                      <img src={t.avatar} alt={t.name} className="relative w-20 h-20 rounded-full object-cover border-2 border-purple-500/30" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <p className="text-xl text-white/70 font-medium italic leading-relaxed mb-5">"{t.quote}"</p>
                      <p className="text-white font-bold text-base" style={{ fontFamily: "'Outfit', sans-serif" }}>{t.name}</p>
                      <p className="text-purple-400 text-xs font-semibold uppercase tracking-widest mt-1">{t.role}</p>
                    </div>
                  </div>
                </GlowCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ══════════════════ FOOTER ══════════════════ */}
      <footer className="relative mt-20 pb-16 px-6 lg:px-16 z-10">
        <div className="max-w-7xl mx-auto">
          {/* Top glow line */}
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent mb-0.5" />
          <div className="rounded-3xl border border-white/6 bg-[#0a0a16]/70 backdrop-blur-2xl p-12 lg:p-20 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
            <div className="absolute -top-40 left-1/4 w-80 h-80 rounded-full blur-[100px] pointer-events-none opacity-8"
              style={{ background: "radial-gradient(circle, #7c3aed, transparent)" }} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-16">
              {/* Brand */}
              <div className="lg:col-span-3">
                <div className="flex items-center gap-4 mb-8">
                  <img src={heroLogo} alt="AIZENERA" className="h-12 w-auto object-contain drop-shadow-[0_0_15px_rgba(124,58,237,0.4)]" />
                  <span className="text-3xl font-black text-white tracking-tighter" style={{ fontFamily: "'Outfit', sans-serif" }}>AIZENERA</span>
                </div>
                <p className="text-white/35 text-base leading-relaxed mb-10 max-w-md">
                  Empowering the next generation of engineers with AI‑driven education and innovative tools.
                </p>
                <div className="flex gap-3 max-w-md">
                  <input type="email" placeholder="Join our newsletter…"
                    className="flex-1 px-5 py-3.5 rounded-xl bg-white/4 border border-white/10 text-white placeholder:text-white/20 text-sm outline-none focus:border-purple-500/40 transition-colors backdrop-blur-md" />
                  <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    className="px-6 py-3.5 rounded-xl text-white text-sm font-bold"
                    style={{ background: "linear-gradient(135deg,#7c3aed,#a78bfa)", boxShadow: "0 0 20px rgba(124,58,237,0.35)" }}>
                    Subscribe
                  </motion.button>
                </div>
              </div>

              {/* Directory */}
              <div className="lg:col-span-1">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/25 mb-8">Directory</h4>
                <ul className="space-y-4">
                  {[{ label: "Home", to: "/" }, { label: "Courses", to: "/courses" }, { label: "Study Material", to: "/study-material" }, { label: "Tools", to: "/tools" }, { label: "Contact", to: "/contact" }].map(l => (
                    <li key={l.label}>
                      <Link to={l.to} className="text-white/35 hover:text-white text-sm font-medium transition-all hover:translate-x-1 inline-block">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div className="lg:col-span-1">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/25 mb-8">Legal</h4>
                <ul className="space-y-4">
                  {[{ label: "Privacy Policy", to: "/privacy-policy" }, { label: "Terms of Service", to: "/terms" }, { label: "Newsroom", to: "/newsroom" }].map(l => (
                    <li key={l.label}>
                      <Link to={l.to} className="text-white/35 hover:text-white text-sm font-medium transition-all hover:translate-x-1 inline-block">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social */}
              <div className="lg:col-span-1">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/25 mb-8">Social</h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map(s => (
                    <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, y: -2 }}
                      className="w-10 h-10 rounded-lg border border-white/10 bg-white/3 flex items-center justify-center text-white/30 transition-all duration-300"
                      style={{ "--hover-color": s.color } as any}
                    >
                      <s.icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/18 text-xs tracking-wide">© 2025 AIZENERA LLP. ALL RIGHTS RESERVED.</p>
              <p className="text-white/18 text-[10px] font-bold tracking-[0.2em] uppercase">MADE WITH PRECISION FOR ENGINEERS</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
