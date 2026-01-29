"use client";

import type { MentorJourneyStage } from "@/lib/data/mentors";

const stages: MentorJourneyStage[] = ["New", "Active", "Lead", "Coach", "Alumni"];

const stageIndex: Record<MentorJourneyStage, number> = {
  New: 0,
  Active: 1,
  Lead: 2,
  Coach: 3,
  Alumni: 4,
};

export function JourneyStageBar({ currentStage }: { currentStage: MentorJourneyStage }) {
  const currentIdx = stageIndex[currentStage];

  return (
    <div className="flex items-center gap-0 w-full">
      {stages.map((stage, idx) => {
        const isCompleted = idx < currentIdx;
        const isCurrent = idx === currentIdx;

        return (
          <div key={stage} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 ${
                  isCompleted
                    ? "bg-[#22C55E] border-[#22C55E] text-white"
                    : isCurrent
                    ? "bg-[#1AB394] border-[#1AB394] text-white"
                    : "bg-white border-slate-200 text-slate-400"
                }`}
              >
                {isCompleted ? "\u2713" : idx + 1}
              </div>
              <span
                className={`text-xs mt-1.5 font-medium ${
                  isCurrent
                    ? "text-[#1AB394]"
                    : isCompleted
                    ? "text-[#22C55E]"
                    : "text-slate-400"
                }`}
              >
                {stage}
              </span>
            </div>
            {idx < stages.length - 1 && (
              <div
                className={`flex-1 h-0.5 mx-1 mt-[-18px] ${
                  idx < currentIdx ? "bg-[#22C55E]" : "bg-slate-200"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
