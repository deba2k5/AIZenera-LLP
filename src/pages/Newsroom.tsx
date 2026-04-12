import { motion, AnimatePresence } from "framer-motion";
import { Newspaper, Calendar, ExternalLink, ArrowRight, Zap, Megaphone, Globe, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/GlowCard";
import { MeshBackground, ParticleCanvas, PageHeader } from "@/components/SceneContainer";

const newsItems = [
  {
    id: 1,
    title: "IEM Smart Makeathon 2025 Collaboration",
    content: "AIZenera partnered with IEM Kolkata for one of Eastern India's largest innovation challenges, providing mentorship and AI architecture workshops.",
    date: "Sep 2024",
    category: "Partnership",
    color: "rgba(139, 92, 246, 0.4)",
    icon: Shield,
    size: "large"
  },
  {
    id: 2,
    title: "IEM HackOasis 2.0 Knowledge Partner",
    content: "Conducted AI/ML bootcamps for over 500 participants, focusing on healthcare and edu-tech solutions.",
    date: "Sep 2024",
    category: "Community",
    color: "rgba(99, 102, 241, 0.4)",
    icon: Globe,
    size: "medium"
  },
  {
    id: 3,
    title: "Hackspire 2025 Education Lead",
    content: "Hosting pre-event masterclasses on Lexical precision and Prompt Alchemy to empower 400+ developers.",
    date: "Nov 2024",
    category: "Workshop",
    color: "rgba(236, 72, 153, 0.4)",
    icon: Megaphone,
    size: "small"
  },
  {
    id: 4,
    title: "Calcutta Hacks Ecosystem Partner",
    content: "Organized judgment panels and internship opportunities for high-performance neural engineering projects.",
    date: "Dec 2024",
    category: "Ecosystem",
    color: "rgba(34, 197, 94, 0.4)",
    icon: Zap,
    size: "medium"
  },
  {
    id: 5,
    title: "DIVERSION 2026",
    content: "Official AI masterclass partner for the upcoming premier tech fest. Scaling student potential through advanced workshops.",
    date: "Upcoming",
    category: "Announcement",
    color: "rgba(168, 85, 247, 0.5)",
    icon: ArrowRight,
    size: "large"
  },
  {
    id: 6,
    title: "Community Milestone: 1000+ Synchronized",
    content: "The Zenera neural network has officially surpassed 1000 active members in our learning community.",
    date: "Nov 2024",
    category: "Milestone",
    color: "rgba(79, 70, 229, 0.4)",
    icon: Users,
    size: "small"
  }
];

const Newsroom = () => {
  return (
    <div className="min-h-screen bg-[#020205] font-sans text-white overflow-x-hidden relative">
      <MeshBackground />
      <ParticleCanvas />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <PageHeader 
          brand="Transmission Terminal"
          title="SIGNAL &"
          category="FREQUENCIES"
          subtitle="Real-time updates from the Zenera ecosystem. Collaborations, milestones, and strategic announcements."
        />

        {/* News Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          <AnimatePresence>
            {newsItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                className={`flex ${
                  item.size === "large" ? "md:col-span-8" : 
                  item.size === "medium" ? "md:col-span-6" : "md:col-span-4"
                }`}
              >
                <GlowCard 
                  className="p-10 w-full flex flex-col justify-between group"
                  glowColor={item.color}
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.03] flex items-center justify-center border border-white/5 group-hover:bg-white/[0.06] transition-all">
                        <item.icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/30 bg-white/[0.03] px-4 py-1.5 rounded-full border border-white/5">
                        {item.date}
                      </span>
                    </div>

                    <div>
                      <span className="text-[9px] font-black uppercase tracking-[0.3em] text-purple-500 mb-3 block">
                        {item.category}
                      </span>
                      <h2 className={`${item.size === "large" ? "text-4xl" : "text-2xl"} font-black tracking-tighter leading-tight mb-4 group-hover:text-purple-400 transition-colors`}>
                        {item.title}
                      </h2>
                      <p className={`text-white/40 font-medium ${item.size === "large" ? "text-lg leading-relaxed" : "text-sm leading-snug"} max-w-2xl`}>
                        {item.content}
                      </p>
                    </div>
                  </div>

                  <div className="pt-8 mt-8 border-t border-white/5 flex items-center justify-between">
                    <Button variant="ghost" className="p-0 text-white/40 hover:text-white transition-colors group/link flex items-center gap-2 font-black text-[10px] uppercase tracking-widest">
                      Deep Access <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Global Connection CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <GlowCard className="p-16 text-center relative overflow-hidden" glowColor="rgba(139, 92, 246, 0.2)">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
            <Globe className="w-16 h-16 text-purple-500 mx-auto mb-8 animate-pulse" />
            <h2 className="text-5xl font-black tracking-tighter mb-6">Stay Synchronized</h2>
            <p className="text-white/40 max-w-xl mx-auto mb-10 text-lg leading-relaxed font-medium">
              Join our global neural network on LinkedIn and Twitter for immediate transmission of high-priority signals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="h-16 px-10 rounded-2xl bg-white text-black font-black uppercase tracking-[0.2em] text-[10px] hover:bg-purple-600 hover:text-white transition-all">
                Connect on LinkedIn
              </Button>
              <Button className="h-16 px-10 rounded-2xl bg-white/[0.05] border border-white/10 text-white font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white/10 transition-all">
                The X Feed
              </Button>
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Newsroom;
