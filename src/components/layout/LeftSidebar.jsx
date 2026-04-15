import { NavLink } from "react-router-dom";
import {
  Home, Cpu, Scale, ShieldAlert, Brain, TrendingUp, PenSquare, Bot,
} from "lucide-react";
import Avatar from "../ui/Avatar.jsx";
import { useApp } from "../../context/AppContext.jsx";

const NAV_ITEMS = [
  { to: "/", label: "Home", icon: Home, end: true },
  { to: "/technology", label: "Technology", icon: Cpu },
  { to: "/legal", label: "Legal", icon: Scale },
  { to: "/privacy", label: "Privacy", icon: ShieldAlert },
  { to: "/ethics", label: "Ethics", icon: Brain },
  { to: "/strategy", label: "Strategy", icon: TrendingUp },
];

export default function LeftSidebar({ onNewPost }) {
  const { currentUser } = useApp();

  return (
    <aside className="sticky top-0 h-screen flex flex-col py-6 px-2 xl:px-4 border-r border-border overflow-y-auto">
      {/* Logo */}
      <div className="flex items-center justify-center xl:justify-start gap-2.5 px-1 xl:px-2 mb-8">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center flex-shrink-0">
          <Bot size={18} className="text-white" />
        </div>
        <div className="hidden xl:block">
          <span className="font-bold text-white text-sm leading-tight block">HelixWatch</span>
          <span className="text-slate-500 text-xs">Privacy · AI · Robotics</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        {NAV_ITEMS.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex items-center justify-center xl:justify-start gap-3 px-2 xl:px-3 py-2.5 rounded-xl text-sm font-medium transition-all group ${
                isActive
                  ? "bg-white/10 text-white"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <Icon size={20} className={isActive ? "text-accent-blue" : "group-hover:text-slate-200"} />
                <span className="hidden xl:block">{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* New Post button */}
      <button
        onClick={onNewPost}
        className="mt-4 flex items-center justify-center xl:justify-start gap-2 w-full px-2 xl:px-4 py-2.5 rounded-full bg-accent-blue hover:bg-blue-500 text-white font-semibold text-sm transition-colors"
      >
        <PenSquare size={18} />
        <span className="hidden xl:block">New Post</span>
      </button>

      {/* Current user badge */}
      {currentUser && (
        <div className="mt-4 flex items-center justify-center xl:justify-start gap-3 px-1 xl:px-2 py-2 rounded-xl hover:bg-white/5 cursor-pointer">
          <Avatar user={currentUser} size="sm" />
          <div className="hidden xl:block min-w-0">
            <p className="text-sm font-medium text-white truncate">{currentUser.name}</p>
            <p className="text-xs text-slate-500 truncate">@{currentUser.handle}</p>
          </div>
        </div>
      )}
    </aside>
  );
}
