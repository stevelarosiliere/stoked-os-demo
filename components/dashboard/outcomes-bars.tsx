"use client";

import { Card } from "@/components/ui/card";

const outcomes = [
  { label: "Try New Things", value: 85, color: "#1AB394" },
  { label: "Belonging", value: 82, color: "#1AB394" },
  { label: "Connection", value: 78, color: "#1AB394" },
  { label: "Confidence", value: 74, color: "#F59E0B" },
];

export function OutcomesBars() {
  return (
    <Card className="p-6 rounded-xl shadow-sm border bg-white">
      <h3 className="text-sm font-heading font-semibold text-slate-900 mb-5">
        Outcomes Snapshot
      </h3>
      <div className="space-y-4">
        {outcomes.map((outcome) => (
          <div key={outcome.label}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm text-slate-600">{outcome.label}</span>
              <span className="text-sm font-semibold text-slate-900">
                {outcome.value}%
              </span>
            </div>
            <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${outcome.value}%`,
                  backgroundColor: outcome.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
