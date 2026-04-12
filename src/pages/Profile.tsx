import { useEffect, useRef, useState, useCallback, memo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { User, Mail, Phone, MapPin, Save, Camera, Loader2, Sparkles, GraduationCap, Globe, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useUser } from "@/context/UserContext";
import { motion, AnimatePresence } from "framer-motion";
import { GlowCard } from "@/components/GlowCard";

/* ─── Animated Mesh Background ──────────────────────────────────── */
const MeshBackground = () => (
  <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
    <motion.div
      animate={{
        x: [0, 80, -40, 0],
        y: [0, -40, 80, 0],
        scale: [1, 1.3, 0.9, 1],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute top-[-25%] left-[-15%] w-[70vw] h-[70vw] rounded-full blur-[140px] opacity-40"
      style={{ background: "radial-gradient(circle, rgba(76, 29, 149, 0.3), transparent 75%)" }}
    />
    <motion.div
      animate={{
        x: [0, -60, 40, 0],
        y: [0, 80, -40, 0],
        scale: [1.2, 1, 1.4, 1.2],
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-[-15%] right-[-15%] w-[60vw] h-[60vw] rounded-full blur-[120px] opacity-35"
      style={{ background: "radial-gradient(circle, rgba(30, 27, 75, 0.4), transparent 75%)" }}
    />
    <motion.div
      animate={{
        opacity: [0.15, 0.3, 0.15],
        scale: [1, 1.1, 1],
      }}
      transition={{ duration: 18, repeat: Infinity }}
      className="absolute top-[20%] left-[30%] w-[50vw] h-[50vw] rounded-full blur-[160px]"
      style={{ background: "radial-gradient(circle, rgba(139, 92, 246, 0.15), transparent 70%)" }}
    />
  </div>
);

/* ─── Particle canvas system (Stars) ────────────────────────────── */
interface Particle { x: number; y: number; vx: number; vy: number; radius: number; alpha: number; }

const ParticleCanvas = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let W = (canvas.width  = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const NUM = 120;
    const particles: Particle[] = Array.from({ length: NUM }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: 0.4 + Math.random() * 0.8,
      alpha: 0.1 + Math.random() * 0.5,
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
    return () => {
      cancelAnimationFrame(anim);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
});

/* ─── Profile Component ─────────────────────────────────────────── */
const Profile = () => {
  const { toast } = useToast();
  const { user, updateUser, loading } = useUser();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [avatar, setAvatar] = useState<string | null>(user?.avatarDataUrl || null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    college: "",
    course: "",
    year: "",
    bio: "",
  });

  useEffect(() => {
    if (user) {
      setProfile({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        phone: user.phone || "",
        college: user.college || "",
        course: user.course || "",
        year: user.year || "",
        bio: user.bio || "",
      });
      setAvatar(user.avatarDataUrl || null);
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await updateUser({ ...profile, avatarDataUrl: avatar });
      toast({ title: "Zen synchronization complete", description: "Your matrix is up to date." });
    } catch (err: any) {
      toast({ title: "Update failed", description: err.message, variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAvatarClick = () => fileInputRef.current?.click();
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setAvatar(reader.result as string);
    reader.readAsDataURL(file);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#06060f] flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-purple-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020205] font-sans text-white overflow-x-hidden relative">
      <MeshBackground />
      <ParticleCanvas />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
        
        {/* Editorial Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-purple-500" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-purple-400">Security Nexus</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none" style={{ fontFamily: "'Outfit', sans-serif" }}>
            ZENERA <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">CORE</span>
          </h1>
          <p className="mt-8 text-white/40 text-sm max-w-sm font-medium tracking-wide leading-relaxed">
            Refine your digital persona. Modifications are permanent and secured across the Zenera Matrix.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* Tile 1: User Identity (Avatar) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4"
          >
            <GlowCard className="p-10 flex flex-col items-center justify-center text-center group" glowColor="rgba(139,92,246,0.5)">
              <div className="relative mb-8">
                <div className="w-44 h-44 rounded-full p-1 bg-gradient-to-tr from-purple-600 to-indigo-600 shadow-[0_0_50px_rgba(139,92,246,0.3)] relative">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#0b0b18] bg-[#1a1a2e]">
                    {avatar ? (
                      <img src={avatar} alt="Avatar" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-purple-900/10">
                        <User className="w-20 h-20 text-white/10" />
                      </div>
                    )}
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleAvatarClick} 
                    type="button"
                    className="absolute bottom-2 right-2 w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center border-2 border-white/20 shadow-xl hover:bg-purple-500 transition-colors"
                  >
                    <Camera className="w-6 h-6" />
                  </motion.button>
                </div>
              </div>
              <h2 className="text-3xl font-black tracking-tight text-white leading-none mb-2">
                {profile.firstName || "ZENERA"} {profile.lastName || "USER"}
              </h2>
              <p className="text-purple-400 font-black text-[10px] uppercase tracking-[0.3em] mb-6">Quantum Identity</p>
              
              <div className="w-full pt-6 border-t border-white/5 flex justify-between px-4">
                <Shield className="w-5 h-5 text-purple-400/30" />
                <Globe className="w-5 h-5 text-purple-400/30" />
                <Sparkles className="w-5 h-5 text-purple-400/30" />
              </div>
              <input ref={fileInputRef} type="file" accept="image/*" onChange={handleAvatarChange} className="hidden" />
            </GlowCard>
          </motion.div>

          {/* Tile 2: General Bio */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-8"
          >
            <GlowCard className="p-10 h-full" glowColor="rgba(99,102,241,0.3)">
              <div className="flex items-center gap-3 mb-8">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white/30">Data Feed / Bio</h3>
              </div>
              <div className="relative group h-[240px]">
                <Textarea
                  name="bio"
                  value={profile.bio}
                  onChange={handleChange}
                  placeholder="Insert consciousness data..."
                  className="bg-white/[0.02] border-white/10 text-white placeholder:text-white/10 rounded-2xl p-6 text-lg font-medium tracking-wide leading-relaxed h-full resize-none focus:bg-white/[0.05] focus:border-purple-500/50 transition-all border-dashed border-2"
                />
              </div>
            </GlowCard>
          </motion.div>

          {/* Tile 3: Personal Data */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-7"
          >
            <GlowCard className="p-10" glowColor="rgba(168,85,247,0.3)">
              <div className="flex items-center gap-3 mb-10">
                <User className="w-5 h-5 text-purple-400" />
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white/30">Biometrics</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label className="text-[9px] font-black uppercase tracking-widest text-white/40 ml-1">First ID</Label>
                  <Input name="firstName" value={profile.firstName} onChange={handleChange} className="h-14 bg-white/5 border-white/5 text-white font-bold text-base rounded-xl px-5 focus:bg-white/10 focus:border-purple-500/50 transition-all" />
                </div>
                <div className="space-y-3">
                  <Label className="text-[9px] font-black uppercase tracking-widest text-white/40 ml-1">Last ID</Label>
                  <Input name="lastName" value={profile.lastName} onChange={handleChange} className="h-14 bg-white/5 border-white/5 text-white font-bold text-base rounded-xl px-5 focus:bg-white/10 focus:border-purple-500/50 transition-all" />
                </div>
                <div className="md:col-span-2 space-y-3">
                  <Label className="text-[9px] font-black uppercase tracking-widest text-white/40 ml-1">Universal Registry (Email)</Label>
                  <Input name="email" type="email" value={profile.email} onChange={handleChange} className="h-14 bg-white/5 border-white/5 text-white font-bold text-base rounded-xl px-5 focus:bg-white/10 focus:border-purple-500/50 transition-all" />
                </div>
                <div className="md:col-span-2 space-y-3">
                  <Label className="text-[9px] font-black uppercase tracking-widest text-white/40 ml-1">Signal (Phone)</Label>
                  <Input name="phone" value={profile.phone} onChange={handleChange} className="h-14 bg-white/5 border-white/5 text-white font-bold text-base rounded-xl px-5 focus:bg-white/10 focus:border-purple-500/50 transition-all" />
                </div>
              </div>
            </GlowCard>
          </motion.div>

          {/* Tile 4: Academic Matrix */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="md:col-span-5"
          >
            <GlowCard className="p-10 h-full" glowColor="rgba(236,72,153,0.2)">
              <div className="flex items-center gap-3 mb-10">
                <GraduationCap className="w-5 h-5 text-purple-400" />
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white/30">Academic Nexus</h3>
              </div>
              <div className="space-y-8">
                <div className="space-y-3">
                  <Label className="text-[9px] font-black uppercase tracking-widest text-white/40 ml-1">Neural Academy (College)</Label>
                  <div className="relative">
                    <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                    <Input name="college" value={profile.college} onChange={handleChange} className="h-14 bg-white/5 border-white/5 text-white font-bold text-base rounded-xl px-5 focus:bg-white/10 focus:border-purple-500/50 transition-all" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <Label className="text-[9px] font-black uppercase tracking-widest text-white/40 ml-1">Training Domain</Label>
                    <Input name="course" value={profile.course} onChange={handleChange} className="h-14 bg-white/5 border-white/5 text-white font-bold text-base rounded-xl px-5 focus:bg-white/10 focus:border-purple-500/50 transition-all" />
                  </div>
                  <div className="space-y-3">
                    <Label className="text-[9px] font-black uppercase tracking-widest text-white/40 ml-1">Level (Year)</Label>
                    <Input name="year" value={profile.year} onChange={handleChange} className="h-14 bg-white/5 border-white/5 text-white font-bold text-base rounded-xl px-5 focus:bg-white/10 focus:border-purple-500/50 transition-all" />
                  </div>
                </div>
                
                <div className="pt-6">
                  <motion.button 
                    whileHover={{ scale: 1.02, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-20 rounded-2xl font-black text-white tracking-[0.4em] uppercase text-xs flex items-center justify-center gap-3 transition-all shadow-[0_20px_60px_-15px_rgba(139,92,246,0.5)] overflow-hidden relative group"
                    style={{ background: "linear-gradient(135deg, #4c1d95, #7c3aed)" }}
                  >
                    <AnimatePresence mode="wait">
                      {isSubmitting ? (
                        <motion.div key="submitting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3">
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>SYNCHRONIZING...</span>
                        </motion.div>
                      ) : (
                        <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3">
                          <Save className="w-5 h-5 group-hover:animate-bounce" />
                          <span>COMMIT DATA</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.button>
                </div>
              </div>
            </GlowCard>
          </motion.div>

        </form>
      </div>
    </div>
  );
};

export default Profile;



