"use client";

import type { MentorTimelineEvent } from "@/lib/data/mentors";

const dotColorMap: Record<MentorTimelineEvent["type"], string> = {
  onboarding: "bg-blue-500",
  certification: "bg-[#1AB394]",
  match: "bg-purple-500",
  milestone: "bg-amber-500",
  recognition: "bg-rose-500",
};

const ringColorMap: Record<MentorTimelineEvent["type"], string> = {
  onboarding: "ring-blue-100",
  certification: "ring-[#E8F8F4]",
  match: "ring-purple-100",
  milestone: "ring-amber-100",
  recognition: "ring-rose-100",
};

export function MentorTimeline({ events }: { events: MentorTimelineEvent[] }) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-[9px] top-2 bottom-2 w-0.5 bg-slate-200" />
      <div className="space-y-6">
        {events.map((event) => (
          <div key={event.id} className="relative flex gap-4">
            <div
              className={`absolute -left-8 top-1 h-[18px] w-[18px] rounded-full ring-4 ${dotColorMap[event.type]} ${ringColorMap[event.type]} flex items-center justify-center`}
            >
              <span className="h-2 w-2 rounded-full bg-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-slate-400 mb-0.5">
                {new Date(event.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <p className="text-sm font-semibold text-slate-800">
                {event.title}
              </p>
              <p className="text-sm text-slate-500 mt-0.5">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
