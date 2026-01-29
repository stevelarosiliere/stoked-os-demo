"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  LayoutDashboard,
  Building2,
  Users,
  BarChart3,
  BookOpen,
  Shield,
  Settings,
} from "lucide-react";

const navItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/partners", label: "Partners", icon: Building2 },
  { href: "/programs", label: "Programs", icon: BookOpen },
  { href: "/coaches", label: "Coaches", icon: Users },
  { href: "/outcomes", label: "Outcomes", icon: BarChart3 },
  { href: "/admin", label: "Platform", icon: Shield },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-[240px] bg-[#0F172A] flex flex-col">
      <div className="flex items-center gap-3 px-6 py-5 border-b border-white/10">
        <Image
          src="/stoked-icon.png"
          alt="STOKED"
          width={32}
          height={32}
          className="rounded"
        />
        <span className="font-heading text-white font-bold text-lg tracking-tight">
          STOKED OS
        </span>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href));
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-[#1AB394] text-white"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Icon className="h-5 w-5 flex-shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="px-3 pb-4 space-y-1">
        <Link
          href="#"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
        >
          <Settings className="h-5 w-5" />
          Settings
        </Link>
      </div>

      <div className="px-4 pb-5 border-t border-white/10 pt-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#1AB394] flex items-center justify-center text-white text-xs font-bold">
            SL
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">Steve L.</p>
            <p className="text-xs text-slate-400 truncate">STOKED NYC</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
