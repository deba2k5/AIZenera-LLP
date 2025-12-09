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
  Menu
} from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/aizenera-logo.png";

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
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-card border border-border"
      >
        <Menu className="w-6 h-6 text-foreground" />
      </button>

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-full z-50 flex flex-col transition-all duration-300",
          "bg-sidebar border-r border-sidebar-border",
          isCollapsed ? "w-20" : "w-64",
          "lg:translate-x-0",
          isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Logo */}
        <div className="flex items-center justify-center p-4 border-b border-sidebar-border">
          <img 
            src={logo} 
            alt="AIZenera Logo" 
            className={cn(
              "transition-all duration-300",
              isCollapsed ? "w-12 h-12" : "w-32 h-32"
            )}
          />
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-2">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={() => setIsMobileOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "nav-link",
                      isActive && "active"
                    )
                  }
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {!isCollapsed && (
                    <span className="font-body text-sm truncate">{item.label}</span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Collapse button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden lg:flex items-center justify-center p-4 border-t border-sidebar-border hover:bg-sidebar-accent transition-colors"
        >
          {isCollapsed ? (
            <ChevronRight className="w-5 h-5 text-sidebar-foreground" />
          ) : (
            <ChevronLeft className="w-5 h-5 text-sidebar-foreground" />
          )}
        </button>
      </aside>

      {/* Spacer for content */}
      <div className={cn(
        "hidden lg:block transition-all duration-300 flex-shrink-0",
        isCollapsed ? "w-20" : "w-64"
      )} />
    </>
  );
};
