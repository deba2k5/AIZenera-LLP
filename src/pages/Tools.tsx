import { motion, AnimatePresence } from "framer-motion";
import { Wrench, FileText, Video, Calculator, Brain, Code, ArrowRight, Sparkles, Zap, Cpu, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/GlowCard";
import { MeshBackground, ParticleCanvas, PageHeader } from "@/components/SceneContainer";

const tools = [
  {
    id: 1,
    title: "Resume Analyzer",
    description: "AI-powered feedback on your neural professional profiles. High ATS integration.",
    icon: FileText,
    status: "available",
    category: "Career",
    color: "rgba(139, 92, 246, 0.4)", // Purple
    size: "medium"
  },
  {
    id: 2,
    title: "AI Interview Bot",
    description: "Simulate high-stakes technical transmissions with real-time response analysis.",
    icon: Video,
    status: "available",
    category: "Prep",
    color: "rgba(236, 72, 153, 0.4)", // Pink
    size: "medium",
    link: "https://recruitix-eight.vercel.app/"
  },
  {
    id: 3,
    title: "GPA Processor",
    description: "Calculate semester indices with precision grading logic for Indian institutions.",
    icon: Calculator,
    status: "available",
    category: "Academic",
    color: "rgba(34, 197, 94, 0.4)", // Emerald
    size: "small",
    link: "/gpa-calculator"
  },
  {
    id: 4,
    title: "Neural Code Assistant",
    description: "Debug, optimize, and refactor scripts using state-of-the-art inference engines.",
    icon: Code,
    status: "coming",
    category: "Dev",
    color: "rgba(59, 130, 246, 0.4)", // Blue
    size: "large"
  },
  {
    id: 5,
    title: "Cognitive Study Planner",
    description: "Dynamic schedule synthesis based on personalized learning velocity and goals.",
    icon: Brain,
    status: "coming",
    category: "Focus",
    color: "rgba(249, 115, 22, 0.4)", // Orange
    size: "medium"
  },
  {
    id: 6,
    title: "Concept Generator",
    description: "Rapidly ideate project foundations through skill-indexed brainstorming algorithms.",
    icon: Sparkles,
    status: "coming",
    category: "Ideate",
    color: "rgba(168, 85, 247, 0.4)", // Lavender
    size: "medium"
  },
];

const Tools = () => {
  return (
    <div className="min-h-screen bg-[#020205] font-sans text-white overflow-x-hidden relative">
      <MeshBackground />
      <ParticleCanvas />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <PageHeader 
          brand="Utility Manifest"
          title="NEURAL"
          category="TOOLKIT"
          subtitle="Advanced AI utilities designed to optimize your cognitive performance and academic output."
        />

        {/* Tools bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          <AnimatePresence>
            {tools.map((tool, idx) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className={`flex ${
                  tool.size === "large" ? "md:col-span-12 lg:col-span-8" : 
                  tool.size === "medium" ? "md:col-span-6" : "md:col-span-4"
                }`}
              >
                <GlowCard 
                  className={`p-10 w-full flex flex-col justify-between group h-full ${tool.status === 'coming' ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
                  glowColor={tool.color}
                >
                  <div className="space-y-8">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:border-purple-500/50 transition-all">
                        <tool.icon className="w-7 h-7 text-purple-400" />
                      </div>
                      <div className={`px-4 py-1.5 rounded-full border text-[9px] font-black uppercase tracking-widest ${
                        tool.status === 'available' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-white/5 border-white/5 text-white/20'
                      }`}>
                        {tool.status === 'available' ? 'ONLINE' : 'STAGING'}
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-500 mb-3 block">
                        {tool.category}
                      </span>
                      <h2 className={`${tool.size === 'large' ? 'text-4xl' : 'text-2xl'} font-black tracking-tighter leading-tight mb-4 group-hover:text-white transition-colors`}>
                        {tool.title}
                      </h2>
                      <p className={`text-white/40 font-medium ${tool.size === 'large' ? 'text-lg leading-relaxed max-w-2xl' : 'text-sm'}`}>
                        {tool.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-10 mt-10 border-t border-white/5 flex items-center justify-between">
                    {tool.status === 'available' ? (
                      tool.link?.startsWith('/') ? (
                        <Link to={tool.link} className="w-full">
                          <Button className="w-full h-14 rounded-2xl bg-white text-black font-black uppercase tracking-[0.2em] text-[10px] hover:bg-purple-600 hover:text-white transition-all">
                            Initialize Engine <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      ) : (
                        <a href={tool.link} target="_blank" className="w-full">
                          <Button className="w-full h-14 rounded-2xl bg-white text-black font-black uppercase tracking-[0.2em] text-[10px] hover:bg-purple-600 hover:text-white transition-all">
                            Initialize Engine <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </a>
                      )
                    ) : (
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/10 w-full text-center py-4 rounded-xl bg-white/[0.02] border border-white/5">
                        Feature Encrypted
                      </span>
                    )}
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Suggest Tool */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 pt-24 border-t border-white/5"
        >
          <GlowCard className="p-16 text-center" glowColor="rgba(34, 197, 94, 0.1)">
            <Cpu className="w-16 h-16 text-emerald-500 mx-auto mb-8 animate-pulse" />
            <h2 className="text-5xl font-black tracking-tighter mb-6">Need a custom algorithm?</h2>
            <p className="text-white/40 max-w-xl mx-auto mb-10 text-lg font-medium leading-relaxed">
              We're constantly expanding the toolkit. If your workflow requires a specific automated protocol, send us your requirements.
            </p>
            <Button className="h-16 px-12 rounded-2xl bg-white text-black font-black uppercase tracking-[0.3em] text-[10px] hover:bg-emerald-600 hover:text-white transition-all shadow-2xl">
              Submit Tool Request
            </Button>
          </GlowCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Tools;
