import { motion, AnimatePresence } from "framer-motion";
import { Bell, AlertCircle, Info, Clock, ArrowRight, ShieldAlert, Zap, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/GlowCard";
import { MeshBackground, ParticleCanvas, PageHeader } from "@/components/SceneContainer";

const notices = [
  {
    id: 1,
    title: "LLM MASTERCLASS ENTROPY",
    description: "Registration window is collapsing. Final opportunity to synchronize with the production-ready LLM workflow. High priority signal.",
    type: "urgent",
    date: "Dec 7, 2024",
    deadline: "Dec 11, 2024",
    color: "rgba(239, 68, 68, 0.4)", // Red
    featured: true
  },
  {
    id: 2,
    title: "EARLY BIRD DISCONTINUITY",
    description: "Discount protocols extended for the LLM Masterclass. Lock in transmission code ₹149 before regular pricing re-stabilizes.",
    type: "important",
    date: "Dec 5, 2024",
    deadline: "Dec 10, 2024",
    color: "rgba(245, 158, 11, 0.4)", // Amber
  },
  {
    id: 3,
    title: "ARCHIVE SYNC COMPLETED",
    description: "New study assets for RAG systems and lexical alchemy have been uploaded to the Zenera Archives.",
    type: "info",
    date: "Dec 3, 2024",
    color: "rgba(59, 130, 246, 0.4)", // Blue
  },
  {
    id: 4,
    title: "COMMUNITY DISCORD NEXUS",
    description: "Join the core neural network for real-time collaboration with fellow architects and visionaries.",
    type: "info",
    date: "Dec 1, 2024",
    color: "rgba(139, 92, 246, 0.4)", // Purple
  },
  {
    id: 5,
    title: "GENAI CERTIFICATION DEPLOYED",
    description: "Credentials for all Masterclass graduates are now available in the Security Nexus. Log in to claim.",
    type: "important",
    date: "Nov 28, 2024",
    color: "rgba(16, 185, 129, 0.4)", // Emerald
  },
];

const Notice = () => {
  return (
    <div className="min-h-screen bg-[#020205] font-sans text-white overflow-x-hidden relative">
      <MeshBackground />
      <ParticleCanvas />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 lg:py-32">
        <PageHeader 
          brand="Signal Reception"
          title="ACTIVE"
          category="FREQUENCIES"
          subtitle="Mandatory readings and time-sensitive protocols for the Zenera community."
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <AnimatePresence>
            {notices.map((notice, idx) => (
              <motion.div
                key={notice.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                className={`${notice.featured ? "md:col-span-12" : "md:col-span-6"}`}
              >
                <GlowCard 
                  className={`p-10 flex flex-col justify-between group relative overflow-hidden ${notice.type === 'urgent' ? 'border-red-500/20' : ''}`}
                  glowColor={notice.color}
                >
                  {/* Subtle noise pattern for urgent */}
                  {notice.type === 'urgent' && (
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
                  )}

                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center border border-white/5 transition-colors ${
                          notice.type === 'urgent' ? 'text-red-500' : 'text-purple-400'
                        }`}>
                          {notice.type === 'urgent' ? <ShieldAlert className="w-5 h-5" /> : <Radio className="w-5 h-5" />}
                        </div>
                        <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${
                          notice.type === 'urgent' ? 'text-red-500' : 
                          notice.type === 'important' ? 'text-amber-500' : 'text-blue-500'
                        }`}>
                          {notice.type} signal
                        </span>
                      </div>
                      <span className="text-[10px] font-black tracking-widest text-white/20 uppercase">
                        Received: {notice.date}
                      </span>
                    </div>

                    <h2 className={`${notice.featured ? "text-4xl md:text-5xl" : "text-2xl"} font-black tracking-tighter leading-tight group-hover:text-white transition-colors`}>
                      {notice.title}
                    </h2>
                    
                    <p className={`text-white/40 font-medium ${notice.featured ? "text-lg max-w-2xl" : "text-sm"} leading-relaxed`}>
                      {notice.description}
                    </p>

                    {notice.deadline && (
                      <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/20 w-fit">
                        <Clock className="w-4 h-4 text-red-500" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-red-400">
                          Critical Deadline: {notice.deadline}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-between">
                    <Button variant="ghost" className="p-0 text-white/30 hover:text-white flex items-center gap-2 font-black text-[10px] uppercase tracking-widest transition-all">
                      Acknowledge Signal <ArrowRight className="w-4 h-4" />
                    </Button>
                    <div className="h-2 w-2 rounded-full bg-purple-500/50 group-hover:bg-purple-500 transition-colors shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Transmission Center */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 border-t border-white/5 pt-24"
        >
          <GlowCard className="p-16 text-center" glowColor="rgba(168, 85, 247, 0.1)">
            <div className="w-20 h-20 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mx-auto mb-8">
              <Bell className="w-10 h-10 text-purple-500 animate-bounce" />
            </div>
            <h2 className="text-4xl font-black tracking-tighter mb-4">Frequency Subscription</h2>
            <p className="text-white/40 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
              Enable priority notifications to receive mandatory technical signals directly to your interface.
            </p>
            <Button className="h-16 px-12 rounded-2xl bg-white text-black font-black uppercase tracking-[0.3em] text-[10px] hover:bg-purple-600 hover:text-white transition-all shadow-2xl">
              Enable Uplink
            </Button>
          </GlowCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Notice;
