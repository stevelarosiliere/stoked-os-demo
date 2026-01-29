"use client";

import { Bell, Search } from "lucide-react";
import { usePathname } from "next/navigation";

const pageTitles: Record<string, string> = {
  "/": "Executive Dashboard",
  "/partners": "Partner Schools",
  "/programs": "Programs",
  "/coaches": "Coach Management",
  "/outcomes": "Outcomes & Impact",
  "/admin": "Platform Administration",
};

export function Header() {
  const pathname = usePathname();

  const getTitle = () => {
    if (pathname.startsWith("/partners/")) return "Partner Detail";
    if (pathname.startsWith("/youth/")) return "Youth Journey";
    return pageTitles[pathname] || "STOKED OS";
  };

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-sm border-b border-slate-200 px-8 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-heading font-bold text-slate-900">
            {getTitle()}
          </h1>
          <p className="text-sm text-slate-500 mt-0.5">
            STOKED NYC &middot; Spring 2026
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-9 pr-4 py-2 w-64 rounded-lg bg-slate-100 border-0 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1AB394]/30"
            />
          </div>
          <button className="relative p-2 rounded-lg hover:bg-slate-100 transition-colors">
            <Bell className="h-5 w-5 text-slate-500" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#EF4444] rounded-full" />
          </button>
        </div>
      </div>
    </header>
  );
}
