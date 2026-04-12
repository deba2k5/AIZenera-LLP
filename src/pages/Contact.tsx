import { useState, memo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Linkedin, Instagram, Youtube, Sparkles, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { db, auth } from "@/lib/firebase";
import { signInAnonymously } from "firebase/auth";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import emailjs from "@emailjs/browser";
import { GlowCard } from "@/components/GlowCard";
import { MeshBackground, ParticleCanvas, PageHeader } from "@/components/SceneContainer";

const contactInfo = [
  { icon: Mail, label: "Neural Inbox", value: "info@aizenera.com", href: "mailto:info@aizenera.com", color: "rgba(139, 92, 246, 0.4)" },
  { icon: Phone, label: "Direct Uplink", value: "+91 6290277345", href: "tel:+916290277345", color: "rgba(99, 102, 241, 0.4)" },
  { icon: MapPin, label: "Command Center", value: "Kolkata, India", href: "#", color: "rgba(236, 72, 153, 0.4)" },
  { icon: Clock, label: "Sync Latency", value: "Within 24 hours", href: "#", color: "rgba(34, 197, 94, 0.4)" },
];

const socials = [
  { icon: MessageCircle, label: "WhatsApp", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    // Initialize EmailJS with the Public Key on mount
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '2sVHcOgC1K3vKX3dG';
    emailjs.init(publicKey);
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubjectChange = (value: string) => {
    setFormData({ ...formData, subject: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // SILENT AUTH: Ensure we have a session for Firebase interactions
      if (!auth.currentUser) {
        try {
          await signInAnonymously(auth);
        } catch (authError) {
          console.warn("Silent Auth failed", authError);
        }
      }

      // 1. Save to Firestore (Database Record)
      // We wrap this in a sub-try-catch so that database permission issues 
      // do not block the primary goal: sending the email to the admin.
      try {
        const contactsCollection = collection(db, "contacts");
        await addDoc(contactsCollection, {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          subject: formData.subject,
          message: formData.message,
          timestamp: serverTimestamp(),
        });
      } catch (dbError) {
        console.error("Database Log Error (Handled):", dbError);
        // We continue to EmailJS regardless of DB failure
      }

      // 2. Transmit via EmailJS (Direct Notification)
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || "Not provided",
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email,
      };

      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "AIZenera";
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_e3qm4lm";
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "2sVHcOgC1K3vKX3dG";

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      toast({
        title: "SIGNAL TRANSMITTED",
        description: "Your message has been synchronized with our command center.",
      });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error: any) {
      console.error("Transmission Error:", error);
      toast({
        title: "TRANSMISSION FAILED",
        description: error.message?.includes("permission") 
          ? "Database locked. Please contact info@aizenera.com directly."
          : "External interference detected. Please try the secondary uplink.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020205] font-sans text-white overflow-x-hidden relative">
      <MeshBackground />
      <ParticleCanvas />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <PageHeader 
          brand="Communication Protocol"
          title="CONTACT"
          category="TERMINAL"
          subtitle="Initialize a high-bandwidth connection with the Zenera engineering team. No intermediaries."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Input Module */}
          <div className="lg:col-span-8">
            <GlowCard className="p-10" glowColor="rgba(139, 92, 246, 0.2)">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h2 className="text-xl font-black tracking-tight uppercase">Initialize Transmission</h2>
                  <p className="text-[10px] text-white/30 font-black uppercase tracking-[0.2em]">Encrypted Data Entry Form</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-1">Entity Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="IDENTIFY YOURSELF"
                      required
                      className="h-14 bg-white/[0.02] border-white/10 rounded-2xl focus:border-purple-500/50 transition-all font-bold tracking-tight text-white placeholder:text-white/10"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-1">Neural Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="USER@DOMAIN.COM"
                      required
                      className="h-14 bg-white/[0.02] border-white/10 rounded-2xl focus:border-purple-500/50 transition-all font-bold tracking-tight text-white placeholder:text-white/10"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="phone" className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-1">Audio Link (Optional)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXXXXXXX"
                      className="h-14 bg-white/[0.02] border-white/10 rounded-2xl focus:border-purple-500/50 transition-all font-bold tracking-tight text-white placeholder:text-white/10"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="subject" className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-1">Protocol Header</Label>
                    <Select value={formData.subject} onValueChange={handleSubjectChange} required>
                      <SelectTrigger className="h-14 bg-white/[0.02] border-white/10 rounded-2xl focus:ring-0 focus:ring-offset-0 transition-all font-bold tracking-tight text-white">
                        <SelectValue placeholder="Select Frequency" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0f0f1a] border-white/10 text-white">
                        <SelectItem value="general">GENERAL INQUIRY</SelectItem>
                        <SelectItem value="courses">ACADEMIC MODULES</SelectItem>
                        <SelectItem value="partnership">STRATEGIC ALLIANCE</SelectItem>
                        <SelectItem value="technical">SYSTEMS SUPPORT</SelectItem>
                        <SelectItem value="feedback">CORE FEEDBACK</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="message" className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-1">Payload Content</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="ENTER YOUR TRANSMISSION..."
                    rows={6}
                    required
                    className="bg-white/[0.02] border-white/10 rounded-2xl focus:border-purple-500/50 transition-all font-medium tracking-wide text-white/80 placeholder:text-white/10 resize-none p-6"
                  />
                </div>

                <Button 
                  className="w-full h-16 rounded-2xl bg-white text-black font-black uppercase tracking-[0.3em] text-[11px] hover:bg-purple-600 hover:text-white transition-all shadow-2xl disabled:opacity-50" 
                  type="submit" 
                  disabled={isLoading}
                >
                  {isLoading ? "TRANSMITTING..." : "DEPLOY SIGNAL"}
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </GlowCard>
          </div>

          {/* Contact Information Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((info, idx) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <GlowCard className="p-6 h-full flex items-center gap-6 group cursor-pointer" glowColor={info.color}>
                    <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <info.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20 mb-1">{info.label}</p>
                      <p className="font-bold tracking-tight text-white group-hover:text-purple-400 transition-colors uppercase text-xs">{info.value}</p>
                    </div>
                  </GlowCard>
                </motion.div>
              ))}
            </div>

            <GlowCard className="p-10" glowColor="rgba(168, 85, 247, 0.2)">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-white/40">Global Nodes</h3>
              <div className="grid grid-cols-2 gap-4">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-purple-500/30 transition-all group"
                  >
                    <social.icon className="w-5 h-5 text-white/40 group-hover:text-purple-400 group-hover:scale-110 transition-all" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-white/20 group-hover:text-white">{social.label}</span>
                  </a>
                ))}
              </div>
            </GlowCard>

            <GlowCard className="p-10 relative overflow-hidden" glowColor="rgba(34, 197, 94, 0.1)">
              <div className="relative z-10 text-center">
                <Shield className="w-10 h-10 text-emerald-500 mx-auto mb-6 opacity-30" />
                <h3 className="text-xs font-black uppercase tracking-widest mb-2">Protocol Verified</h3>
                <p className="text-[10px] text-white/20 font-medium leading-relaxed">
                  Encryption Layer 7 active. Signal integrity monitored by Zenera Core.
                </p>
              </div>
            </GlowCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Contact);
