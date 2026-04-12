import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen bg-background font-body selection:bg-primary/30 selection:text-white relative overflow-hidden">
      {/* Global Ambient Background Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] rounded-full opacity-[0.4] blur-[120px] animate-aurora-1" style={{ background: "radial-gradient(circle, #6366F1, transparent 70%)" }} />
        <div className="absolute bottom-[10%] right-[5%] w-[35vw] h-[35vw] rounded-full opacity-[0.35] blur-[150px] animate-aurora-2" style={{ background: "radial-gradient(circle, #8B5CF6, transparent 70%)" }} />
        <div className="absolute top-[30%] left-[40%] w-[30vw] h-[30vw] rounded-full opacity-[0.25] blur-[100px] animate-aurora-3" style={{ background: "radial-gradient(circle, #0EA5E9, transparent 70%)" }} />
      </div>

      <Sidebar />
      <main className="flex-1 w-full overflow-x-hidden relative z-10 mx-auto max-w-[1600px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};
