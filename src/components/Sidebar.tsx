import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Home,
  User,
  BookOpen,
  GraduationCap,
  Newspaper,
  Bell,
  Calculator,
  Info,
  Users,
  Shield,
  FileText,
  Wrench,
  Mail,
  ChevronLeft,
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/pic3d.png";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/profile", icon: User, label: "Edit Profile" },
  { to: "/study-material", icon: BookOpen, label: "Study Material" },
  { to: "/courses", icon: GraduationCap, label: "Courses" },
  { to: "/newsroom", icon: Newspaper, label: "Newsroom" },
  { to: "/notice", icon: Bell, label: "Notice" },
  { to: "/gpa-calculator", icon: Calculator, label: "GPA Calculator" },
  { to: "/about", icon: Info, label: "About Us" },
  { to: "/ca-page", icon: Users, label: "CA Page" },
  { to: "/privacy-policy", icon: Shield, label: "Privacy Policy" },
  { to: "/terms", icon: FileText, label: "Terms & Service" },
  { to: "/tools", icon: Wrench, label: "Tools" },
  { to: "/contact", icon: Mail, label: "Contact Us" },
];

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Mobile Navbar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-5 py-3.5"
        style={{
          background: "rgba(10, 10, 20, 0.6)",
          backdropFilter: "blur(24px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="flex items-center gap-2.5">
          <div className="p-1 px-1.5 rounded-lg bg-purple-600/10 border border-purple-500/20">
            <img src={logo} alt="AIZenera" className="h-5 w-5 object-contain" />
          </div>
          <span className="text-white font-display font-black tracking-tight text-base uppercase">AIZENERA</span>
        </div>
        <motion.button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          whileTap={{ scale: 0.95 }}
          className="p-2.5 rounded-xl transition-all"
          style={{
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.1)"
          }}
        >
          {isMobileOpen
            ? <X className="w-5 h-5 text-white" />
            : <Menu className="w-5 h-5 text-white" />
          }
        </motion.button>
      </div>

      {/* Backdrop */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[40]"
            onClick={() => setIsMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        className={cn(
          "fixed left-0 top-0 h-full z-50 flex flex-col transition-all duration-300",
          "lg:translate-x-0",
          isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
        style={{
          width: isCollapsed ? "5rem" : "16rem",
          background: "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
          backdropFilter: "blur(40px)",
          borderRight: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {/* Gradient accent line at top */}
        <div className="h-[2px] w-full" style={{ background: "linear-gradient(90deg, #6366F1, #EC4899, #0EA5E9)" }} />

        {/* Logo area */}
        <div className="flex items-center gap-3 px-6 py-6 border-b border-white/[0.06]">
          <AnimatePresence mode="wait">
            {!isCollapsed ? (
              <motion.div
                key="full-logo-container"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="flex items-center gap-3 overflow-hidden"
              >
                <img
                  src={logo}
                  alt="AIZenera"
                  className="h-8 w-8 object-contain drop-shadow-[0_0_8px_rgba(124,58,237,0.3)]"
                />
                <span className="text-white font-display font-black tracking-tight text-xl">
                  AIZENERA
                </span>
              </motion.div>
            ) : (
              <motion.img
                key="icon-logo"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                src={logo}
                alt="AIZenera"
                className="h-8 w-8 object-contain mx-auto drop-shadow-[0_0_8px_rgba(124,58,237,0.3)]"
              />
            )}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-5 px-3 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to || (item.to === "/" && location.pathname === "/");
            return (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsMobileOpen(false)}
                className={({ isActive: active }) =>
                  cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative overflow-hidden",
                    active
                      ? "text-white"
                      : "text-white/40 hover:text-white/80"
                  )
                }
                style={({ isActive: active }) => active ? {
                  background: "linear-gradient(90deg, rgba(255,255,255,0.08), transparent)",
                  border: "1px solid rgba(255,255,255,0.1)",
                } : {}}
              >
                {({ isActive: active }) => (
                  <>
                    {/* Active left bar */}
                    {active && (
                      <motion.div
                        layoutId="activeBar"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-3/4 rounded-r-md"
                        style={{ background: "linear-gradient(180deg, #818CF8, #A5B4FC)" }}
                      />
                    )}
                    <item.icon className={cn(
                      "w-[18px] h-[18px] flex-shrink-0 transition-all duration-200",
                      active ? "text-indigo-400" : "group-hover:text-white/70",
                      "ml-1"
                    )} />
                    <AnimatePresence>
                      {!isCollapsed && (
                        <motion.span
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: "auto" }}
                          exit={{ opacity: 0, width: 0 }}
                          className="text-sm font-medium whitespace-nowrap overflow-hidden"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {item.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Collapse toggle */}
        <div className="border-t border-white/[0.06] p-3">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden lg:flex w-full items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-white/30 hover:text-white/70 transition-all duration-200 hover:bg-white/[0.04] text-xs font-medium"
          >
            {isCollapsed
              ? <ChevronRight className="w-4 h-4" />
              : <>
                  <ChevronLeft className="w-4 h-4" />
                  <span style={{ fontFamily: "'Inter', sans-serif" }}>Collapse</span>
                </>
            }
          </button>
        </div>
      </motion.aside>

      {/* Spacer for desktop layout */}
      <motion.div
        animate={{ width: isCollapsed ? "5rem" : "16rem" }}
        transition={{ duration: 0.3 }}
        className="hidden lg:block flex-shrink-0"
      />
    </>
  );
};
