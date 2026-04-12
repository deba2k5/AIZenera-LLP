import { NavLink, useLocation } from "react-router-dom";
import { Home, GraduationCap, Wrench, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navItems = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/courses", icon: GraduationCap, label: "Courses" },
  { to: "/tools", icon: Wrench, label: "Tools" },
  { to: "/profile", icon: User, label: "Profile" },
];

export const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] w-[90%] max-w-sm">
      <div 
        className="flex items-center justify-around px-4 py-3 rounded-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
        style={{
          background: "rgba(10, 10, 20, 0.75)",
          backdropFilter: "blur(20px)",
        }}
      >
        {navItems.map((item) => {
          const isActive = location.pathname === item.to;
          
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={cn(
                "relative flex flex-col items-center gap-1 p-2 transition-all duration-300",
                isActive ? "text-white" : "text-white/40"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="bottomNavActive"
                  className="absolute inset-0 rounded-xl bg-purple-600/20 border border-purple-500/20"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <item.icon className={cn(
                "w-5 h-5 transition-transform duration-300",
                isActive && "scale-110 text-purple-400"
              )} />
              <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};
