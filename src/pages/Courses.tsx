import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Calendar, Clock, Users, Star, ArrowRight, Zap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/GlowCard";
import { MeshBackground, ParticleCanvas, PageHeader } from "@/components/SceneContainer";

const courses = [
  {
    id: 1,
    title: "AI Tools Mastery Bootcamp",
    description: "Automate repetitive tasks, boost productivity, and build smarter workflows instantly. 8 hours of work in 2.",
    price: "149",
    link: "https://forms.gle/8oUDjjn9xJAymuqa9",
    duration: "2 Days",
    enrolled: "500+",
    rating: 5.0,
    category: "Productivity",
    color: "rgba(139, 92, 246, 0.5)",
    featured: true,
    topics: ["Prompt Engineering", "Automation", "Media AI"],
  },
  {
    id: 2,
    title: "Professional AI & ML Program",
    description: "Industry-ready in 3 months with real projects, from Python foundations to advanced model deployment.",
    price: "1499",
    link: "https://forms.gle/UJGdZPCfnHmRaP489",
    duration: "3 Months",
    enrolled: "200+",
    rating: 4.9,
    category: "Engineering",
    color: "rgba(99, 102, 241, 0.5)",
    featured: true,
    topics: ["Python", "Machine Learning", "Deep Learning"],
  },
  {
    id: 3,
    title: "Figma & Framer Masterclass",
    description: "Designing, styling, and building production-ready applications with modern design tools.",
    price: "99",
    duration: "2 Days",
    enrolled: "65+",
    rating: 4.9,
    category: "Design",
    color: "rgba(236, 72, 153, 0.5)",
  },
  {
    id: 4,
    title: "LLM Masterclass",
    description: "Deep dive into Large Language Models, fine-tuning, and building production AI applications.",
    price: "99",
    duration: "3 Days",
    enrolled: "110+",
    rating: 4.9,
    category: "LLMs",
    color: "rgba(34, 197, 94, 0.4)",
  },
  {
    id: 5,
    title: "GenAI Fundamentals",
    description: "Comprehensive course on Generative models, Image Generation, and Text-to-X applications.",
    price: "149",
    duration: "30 Days",
    enrolled: "400+",
    rating: 4.8,
    category: "GenAI",
    color: "rgba(249, 115, 22, 0.4)",
  },
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-[#020205] font-sans text-white overflow-x-hidden relative">
      <MeshBackground />
      <ParticleCanvas />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <PageHeader 
          brand="Academic Frontier"
          title="MASTER THE"
          category="SINGULARITY"
          subtitle="Equip your neural networks with highly sought-after AI skills. Build the future with real projects."
        />

        {/* Course Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <AnimatePresence mode="popLayout">
            {courses.map((course, idx) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="md:col-span-6 lg:col-span-4"
              >
                <GlowCard 
                  className="p-6 md:p-10 h-full flex flex-col justify-between group cursor-pointer hover:bg-white/[0.02] transition-colors"
                  glowColor={course.color}
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center border border-white/5 group-hover:border-purple-500/50 transition-all">
                          <GraduationCap className="w-5 h-5 text-purple-400" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-purple-400/80">
                          {course.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {course.featured && (
                          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-600/10 border border-purple-500/30">
                            <Zap className="w-3 h-3 text-purple-400 fill-purple-400 animate-pulse" />
                            <span className="text-[9px] font-black uppercase tracking-widest text-purple-400">Featured</span>
                          </div>
                        )}
                        <span className="text-2xl font-black tracking-tighter">₹{course.price}</span>
                      </div>
                    </div>

                    <h2 className={`${course.featured ? "text-4xl" : "text-2xl"} font-black tracking-tighter leading-tight group-hover:text-purple-400 transition-colors`}>
                      {course.title}
                    </h2>
                    
                    <p className={`text-white/40 font-medium ${course.featured ? "text-lg max-w-xl" : "text-sm"} leading-relaxed`}>
                      {course.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {course.topics?.map(topic => (
                        <span key={topic} className="px-3 py-1 text-[9px] font-black uppercase tracking-widest bg-white/[0.02] border border-white/5 rounded-full text-white/30">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-6 mt-8">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2 text-white/30 text-xs font-bold">
                        <Clock className="w-3.5 h-3.5" /> {course.duration}
                      </div>
                      <div className="flex items-center gap-2 text-white/30 text-xs font-bold">
                        <Users className="w-3.5 h-3.5" /> {course.enrolled}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                        <span className="text-xs font-black">{course.rating}</span>
                      </div>
                      <a href={(course as any).link || "#"} target={(course as any).link ? "_blank" : "_self"} rel="noopener noreferrer">
                        <Button className="h-12 w-12 rounded-full p-0 bg-white shadow-xl hover:bg-purple-600 group transition-all">
                          <ArrowRight className="w-5 h-5 text-black group-hover:text-white transition-colors" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Corporate Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <GlowCard className="p-16 text-center lg:text-left overflow-hidden relative" glowColor="rgba(99, 102, 241, 0.2)">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-2xl">
                <Sparkles className="w-12 h-12 text-indigo-400 mb-8 mx-auto lg:mx-0" />
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-none">Custom Neural <br />Training for Orgs</h2>
                <p className="text-white/40 text-lg font-medium leading-relaxed">
                  We design end-to-end AI curriculum for universities and organizations. 
                  Upscale your team with production-ready AI mastery.
                </p>
              </div>
              <Button className="h-20 px-12 rounded-2xl bg-white text-black font-black uppercase tracking-[0.3em] text-[11px] hover:bg-indigo-600 hover:text-white transition-all shadow-2xl">
                Request Archives
              </Button>
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Courses;
