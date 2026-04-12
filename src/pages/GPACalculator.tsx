import { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Plus, Trash2, RotateCcw, ArrowRight, Sparkles, Brain, Trophy, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GlowCard } from "@/components/GlowCard";
import { MeshBackground, ParticleCanvas, PageHeader } from "@/components/SceneContainer";

interface Subject {
  id: number;
  name: string;
  credits: number;
  grade: string;
}

const gradePoints: Record<string, number> = {
  "O": 10, "E": 9, "A": 8, "B": 7, "C": 6, "D": 5, "F": 0,
};

const grades = ["O", "E", "A", "B", "C", "D", "F"];

const GPACalculator = () => {
  const [subjects, setSubjects] = useState<Subject[]>([
    { id: 1, name: "", credits: 3, grade: "O" },
    { id: 2, name: "", credits: 3, grade: "O" },
    { id: 3, name: "", credits: 3, grade: "O" },
  ]);

  const addSubject = () => {
    const newId = subjects.length > 0 ? Math.max(...subjects.map(s => s.id)) + 1 : 1;
    setSubjects([...subjects, { id: newId, name: "", credits: 3, grade: "O" }]);
  };

  const removeSubject = (id: number) => {
    if (subjects.length > 1) {
      setSubjects(subjects.filter(s => s.id !== id));
    }
  };

  const updateSubject = (id: number, field: keyof Subject, value: string | number) => {
    setSubjects(subjects.map(s => s.id === id ? { ...s, [field]: value } : s));
  };

  const resetCalculator = () => {
    setSubjects([
      { id: 1, name: "", credits: 3, grade: "O" },
      { id: 2, name: "", credits: 3, grade: "O" },
      { id: 3, name: "", credits: 3, grade: "O" },
    ]);
  };

  const calculateGPA = () => {
    const totalCredits = subjects.reduce((sum, s) => sum + s.credits, 0);
    const totalPoints = subjects.reduce((sum, s) => sum + (s.credits * gradePoints[s.grade]), 0);
    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00";
  };

  const gpa = calculateGPA();
  const gpaNumber = parseFloat(gpa);

  return (
    <div className="min-h-screen bg-[#020205] font-sans text-white overflow-x-hidden relative">
      <MeshBackground />
      <ParticleCanvas />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <PageHeader 
          brand="Academic Processor"
          title="GPA"
          category="SYNTHESIZER"
          subtitle="Precision tool for calculating semester indices. Synchronize your academic standing."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Input Console */}
          <div className="lg:col-span-8 space-y-6">
            <GlowCard className="p-10" glowColor="rgba(139, 92, 246, 0.2)">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h2 className="text-xl font-black tracking-tight">Logic Input</h2>
                    <p className="text-xs text-white/30 font-bold uppercase tracking-widest">Subject Matrix Configuration</p>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  onClick={resetCalculator}
                  className="h-12 px-6 rounded-xl border border-white/5 bg-white/[0.02] text-white/40 hover:text-white hover:bg-white/5 transition-all text-[10px] font-black uppercase tracking-widest"
                >
                  <RotateCcw className="w-4 h-4 mr-2" /> Reset Matrix
                </Button>
              </div>

              <div className="space-y-4">
                <AnimatePresence mode="popLayout">
                  {subjects.map((subject, index) => (
                    <motion.div
                      key={subject.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-4 rounded-2xl bg-white/[0.02] border border-white/5 group hover:border-purple-500/20 transition-all"
                    >
                      <div className="md:col-span-5">
                        <Input
                          placeholder={`Archived Module ${index + 1}`}
                          value={subject.name}
                          onChange={(e) => updateSubject(subject.id, "name", e.target.value)}
                          className="h-12 bg-transparent border-none text-white font-bold placeholder:text-white/10 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
                        />
                      </div>
                      <div className="md:col-span-3">
                        <Select
                          value={subject.credits.toString()}
                          onValueChange={(v) => updateSubject(subject.id, "credits", parseInt(v))}
                        >
                          <SelectTrigger className="h-12 bg-white/[0.03] border-white/5 rounded-xl text-xs font-black text-white/60">
                            <SelectValue placeholder="Units" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#0f0f1a] border-white/10">
                            {[1,2,3,4,5,6].map(c => (
                              <SelectItem key={c} value={c.toString()} className="text-white">Unit Value: {c}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="md:col-span-3">
                        <Select
                          value={subject.grade}
                          onValueChange={(v) => updateSubject(subject.id, "grade", v)}
                        >
                          <SelectTrigger className="h-12 bg-white/[0.03] border-white/5 rounded-xl text-xs font-black text-purple-400">
                            <SelectValue placeholder="Grade" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#0f0f1a] border-white/10">
                            {grades.map(g => (
                              <SelectItem key={g} value={g} className="text-white">Grade Index: {g}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="md:col-span-1 flex justify-center">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeSubject(subject.id)}
                          className="text-white/10 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                <Button
                  onClick={addSubject}
                  className="w-full h-14 rounded-2xl bg-white/[0.03] border border-dashed border-white/10 text-white/30 hover:text-white hover:border-purple-500/50 hover:bg-white/[0.05] transition-all flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest mt-8"
                >
                  <Plus className="w-4 h-4" /> Expand Logic Matrix
                </Button>
              </div>
            </GlowCard>
          </div>

          {/* Results Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <GlowCard className="p-10 text-center" glowColor="rgba(168, 85, 247, 0.4)">
              <div className="relative inline-block mb-10 mt-4">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-20px] rounded-full border border-dashed border-purple-500/30"
                />
                <div className="w-40 h-40 rounded-full border-4 border-white/5 bg-white/[0.02] flex flex-col items-center justify-center relative z-10 shadow-[0_0_50px_rgba(139,92,246,0.2)]">
                  <span className="text-xs text-white/30 font-black tracking-[0.2em] uppercase mb-1">Index Score</span>
                  <span className="text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-purple-400">
                    {gpa}
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-black tracking-tight mb-2">Performance Output</h3>
              <p className="text-purple-400 font-black text-[10px] uppercase tracking-[0.3em] mb-10">
                {gpaNumber >= 9 ? "PIONEER STATUS" : gpaNumber >= 8 ? "ARCHITECT STATUS" : "SYNCHRONIZED"}
              </p>

              <div className="space-y-4 pt-8 border-t border-white/5">
                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                  <span className="text-white/20">Total Unit Load</span>
                  <span className="text-white font-bold">{subjects.reduce((sum, s) => sum + s.credits, 0)} Units</span>
                </div>
                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                  <span className="text-white/20">Module Count</span>
                  <span className="text-white font-bold">{subjects.length} Active</span>
                </div>
              </div>
            </GlowCard>

            <GlowCard className="p-8" glowColor="rgba(99, 102, 241, 0.2)">
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="w-5 h-5 text-indigo-400" />
                <h4 className="text-xs font-black uppercase tracking-widest">Reference Index</h4>
              </div>
              <div className="space-y-3">
                {Object.entries(gradePoints).slice(0, 4).map(([grade, points]) => (
                  <div key={grade} className="flex justify-between items-center text-[9px] font-black uppercase tracking-widest text-white/30">
                    <span>Grade {grade}</span>
                    <span className="text-indigo-400">{points} PTS</span>
                  </div>
                ))}
              </div>
            </GlowCard>
          </div>
        </div>

        {/* Action Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 pt-20 border-t border-white/5 text-center"
        >
          <GlowCard className="p-16 flex flex-col md:flex-row items-center justify-between gap-8" glowColor="rgba(34, 197, 94, 0.1)">
            <div className="text-left max-w-xl">
              <Zap className="w-10 h-10 text-emerald-400 mb-6" />
              <h2 className="text-4xl font-black tracking-tighter mb-4">Export Academic Protocol</h2>
              <p className="text-white/40 text-lg font-medium leading-relaxed">
                Convert your calculated semester indices into a production-ready PDF report or JSON configuration.
              </p>
            </div>
            <Button className="h-16 px-12 rounded-2xl bg-white text-black font-black uppercase tracking-[0.2em] text-[10px] hover:bg-emerald-600 hover:text-white transition-all">
              Initialize Export <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </GlowCard>
        </motion.div>
      </div>
    </div>
  );
};

export default memo(GPACalculator);
