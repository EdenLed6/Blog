import { NavLink } from "react-router-dom";
import { Cpu, Scale, ShieldAlert, Brain, TrendingUp, Info } from "lucide-react";

const NAV_ITEMS = [
  { to: "/", label: "About", icon: Info, end: true },
  { to: "/technology", label: "Tech", icon: Cpu },
  { to: "/legal", label: "Legal", icon: Scale },
  { to: "/privacy", label: "Privacy", icon: ShieldAlert },
  { to: "/ethics", label: "Ethics", icon: Brain },
  { to: "/strategy", label: "Strategy", icon: TrendingUp },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur border-t border-border flex md:hidden">
      {NAV_ITEMS.map(({ to, label, icon: Icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className={({ isActive }) =>
            `flex-1 flex flex-col items-center justify-center py-3 gap-1 transition-colors touch-manipulation ${
              isActive ? "text-accent-blue" : "text-slate-500"
            }`
          }
        >
          <Icon size={22} />
          <span className="text-xs font-medium">{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
