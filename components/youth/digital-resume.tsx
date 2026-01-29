"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import type { DigitalResumeItem } from "@/lib/data/youth";

const categoryLabels: Record<string, string> = {
  skill: "Skills",
  certification: "Certifications",
  achievement: "Achievements",
  experience: "Experience",
  education: "Education",
};

const categoryOrder = ["experience", "education", "achievement", "certification", "skill"];

const orgBadgeColors: Record<string, string> = {
  STOKED: "bg-[#E8F8F4] text-[#1AB394]",
  "UC Berkeley": "bg-blue-50 text-blue-700",
  UCB: "bg-blue-50 text-blue-700",
  "UC San Diego": "bg-amber-50 text-amber-700",
  UCSD: "bg-amber-50 text-amber-700",
  "Johnson & Johnson": "bg-rose-50 text-rose-700",
  "J&J": "bg-rose-50 text-rose-700",
  "United States Patent Office": "bg-purple-50 text-purple-700",
  USPTO: "bg-purple-50 text-purple-700",
};

export function DigitalResume({ items }: { items: DigitalResumeItem[] }) {
  const groupedItems = categoryOrder
    .map((category) => ({
      category,
      label: categoryLabels[category],
      items: items.filter((item) => item.category === category),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <div className="space-y-6">
      {groupedItems.map((group) => (
        <div key={group.category}>
          <h3 className="text-sm font-heading font-semibold text-slate-700 mb-3 uppercase tracking-wide">
            {group.label}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {group.items.map((item) => (
              <Card
                key={item.id}
                className="rounded-xl shadow-sm border bg-white p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-sm font-semibold text-slate-800">
                        {item.title}
                      </h4>
                      {item.verified && (
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#1AB394] flex-shrink-0" />
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-slate-500">
                        {item.issuer}
                      </span>
                      <Badge
                        className={`${
                          orgBadgeColors[item.orgBadge] ||
                          "bg-slate-100 text-slate-600"
                        } border-0 text-[10px]`}
                      >
                        {item.orgBadge}
                      </Badge>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">{item.date}</p>
                    <p className="text-sm text-slate-500 mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
