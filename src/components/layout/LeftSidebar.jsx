import { NavLink, Link } from "react-router-dom";
import {
  Cpu, Scale, ShieldAlert, Brain, TrendingUp, PenSquare, Bot, Home,
  ChevronLeft, ChevronRight,
} from "lucide-react";
import Avatar from "../ui/Avatar.jsx";
import { useApp } from "../../context/AppContext.jsx";

const NAV_ITEMS = [
  { to: "/", label: "About", icon: Home, end: true },
  { to: "/technology", label: "Technology", icon: Cpu },
  { to: "/legal", label: "Legal", icon: Scale },
  { to: "/privacy", label: "Privacy", icon: ShieldAlert },
  { to: "/ethics", label: "Ethics", icon: Brain },
  { to: "/strategy", label: "Strategy", icon: TrendingUp },
];

export default function LeftSidebar({ onNewPost, collapsed, onToggleCollapsed }) {
  const { currentUser } = useApp();

  return (
    <aside
      className={`sticky top-0 h-screen flex flex-col py-6 border-r border-border overflow-y-auto transition-[padding] ${
        collapsed ? "px-2" : "px-4"
      }`}
    >
      {/* Logo, clickable to home */}
      <Link
        to="/"
        className={`flex items-center gap-2.5 mb-8 rounded-xl hover:bg-white/5 transition-colors py-1 ${
          collapsed ? "justify-center px-1" : "justify-start px-2"
        }`}
        aria-label="HelixWatch home"
      >
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center flex-shrink-0">
          <Bot size={18} className="text-white" />
        </div>
        {!collapsed && (
          <div className="min-w-0">
            <span className="font-bold text-white text-sm leading-tight block">HelixWatch</span>
            <span className="text-slate-500 text-xs">Privacy · AI · Robotics</span>
          </div>
        )}
      </Link>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        {NAV_ITEMS.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            title={collapsed ? label : undefined}
            className={({ isActive }) =>
              `flex items-center gap-3 py-2.5 rounded-xl text-sm font-medium transition-colors group ${
                collapsed ? "justify-center px-2" : "justify-start px-3"
              } ${
                isActive
                  ? "bg-white/10 text-white"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <Icon
                  size={20}
                  className={`flex-shrink-0 ${isActive ? "text-accent-blue" : "group-hover:text-slate-200"}`}
                />
                {!collapsed && <span>{label}</span>}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* New Post */}
      <button
        onClick={onNewPost}
        title={collapsed ? "New Post" : undefined}
        className={`mt-4 flex items-center gap-2 w-full py-2.5 rounded-full bg-accent-blue hover:bg-blue-500 text-white font-semibold text-sm transition-colors ${
          collapsed ? "justify-center px-2" : "justify-center px-4"
        }`}
      >
        <PenSquare size={18} className="flex-shrink-0" />
        {!collapsed && <span>New Post</span>}
      </button>

      {/* Collapse toggle */}
      <button
        onClick={onToggleCollapsed}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        className="mt-2 flex items-center justify-center gap-1.5 w-full py-2 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition-colors text-xs"
      >
        {collapsed ? (
          <ChevronRight size={16} />
        ) : (
          <>
            <ChevronLeft size={14} />
            <span>Collapse</span>
          </>
        )}
      </button>

      {/* Current user badge */}
      {currentUser && (
        <div
          className={`mt-3 flex items-center gap-3 py-2 rounded-xl hover:bg-white/5 cursor-pointer ${
            collapsed ? "justify-center px-1" : "justify-start px-2"
          }`}
        >
          <Avatar user={currentUser} size="sm" />
          {!collapsed && (
            <div className="min-w-0">
              <p className="text-sm font-medium text-white truncate">{currentUser.name}</p>
              <p className="text-xs text-slate-500 truncate">@{currentUser.handle}</p>
            </div>
          )}
        </div>
      )}
    </aside>
  );
}
