"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronRight } from "lucide-react";
import type { ExtendedTimelineEvent, ExtendedTimelineType } from "@/lib/data/youth";

const dotColorMap: Record<ExtendedTimelineType, string> = {
  enrollment: "bg-[#1AB394]",
  survey: "bg-amber-400",
  session: "bg-[#1AB394]",
  milestone: "bg-purple-500",
  "program-change": "bg-blue-500",
  certification: "bg-emerald-500",
  opportunity: "bg-cyan-500",
  "cross-org": "bg-indigo-500",
  career: "bg-rose-500",
  education: "bg-orange-500",
  board: "bg-violet-500",
  recognition: "bg-pink-500",
};

const orgBadgeColors: Record<string, string> = {
  STOKED: "bg-[#E8F8F4] text-[#1AB394]",
  "UC Berkeley": "bg-blue-50 text-blue-700",
  "UC San Diego": "bg-amber-50 text-amber-700",
  "Johnson & Johnson": "bg-rose-50 text-rose-700",
};

export function YearGroupTimeline({
  events,
}: {
  events: ExtendedTimelineEvent[];
}) {
  const years = Array.from(new Set(events.map((e) => e.year))).sort();
  const [expandedYears, setExpandedYears] = useState<Set<number>>(
    new Set(years)
  );

  const toggleYear = (year: number) => {
    setExpandedYears((prev) => {
      const next = new Set(prev);
      if (next.has(year)) {
        next.delete(year);
      } else {
        next.add(year);
      }
      return next;
    });
  };

  return (
    <div className="space-y-2">
      {/* Year markers */}
      <div className="flex items-center gap-2 flex-wrap mb-4 pb-3 border-b border-slate-100">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => toggleYear(year)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
              expandedYears.has(year)
                ? "bg-[#1AB394] text-white"
                : "bg-slate-100 text-slate-500 hover:bg-slate-200"
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Year groups */}
      {years.map((year) => {
        const yearEvents = events.filter((e) => e.year === year);
        const isExpanded = expandedYears.has(year);

        return (
          <div key={year}>
            <button
              onClick={() => toggleYear(year)}
              className="flex items-center gap-2 w-full text-left py-2 hover:bg-slate-50 rounded-lg px-2 transition-colors"
            >
              {isExpanded ? (
                <ChevronDown className="h-4 w-4 text-slate-400" />
              ) : (
                <ChevronRight className="h-4 w-4 text-slate-400" />
              )}
              <span className="text-sm font-heading font-bold text-slate-800">
                {year}
              </span>
              <span className="text-xs text-slate-400">
                {yearEvents.length} event{yearEvents.length !== 1 ? "s" : ""}
              </span>
            </button>

            {isExpanded && (
              <div className="relative pl-10 ml-2 mt-1 mb-3">
                <div className="absolute left-[17px] top-0 bottom-0 w-0.5 bg-slate-200" />
                <div className="space-y-4">
                  {yearEvents.map((event) => (
                    <div key={event.id} className="relative flex gap-3">
                      <div
                        className={`absolute -left-[25px] top-1.5 h-3 w-3 rounded-full ${dotColorMap[event.type]}`}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="text-sm font-semibold text-slate-800">
                            {event.title}
                          </p>
                          <Badge
                            className={`${
                              orgBadgeColors[event.organization] ||
                              "bg-slate-100 text-slate-600"
                            } border-0 text-[10px]`}
                          >
                            {event.organization}
                          </Badge>
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {new Date(event.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                        <p className="text-sm text-slate-500 mt-1">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
