"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { trainingStats, trainingModules, type TrainingLevel } from "@/lib/data/training";

type FilterType = "All" | TrainingLevel;

const levelColors: Record<TrainingLevel, string> = {
  Foundation: "bg-[#E8F8F4] text-[#1AB394]",
  Advanced: "bg-blue-50 text-blue-700",
  Specialty: "bg-purple-50 text-purple-700",
};

const statusColors: Record<string, string> = {
  published: "bg-green-50 text-green-700",
  draft: "bg-slate-100 text-slate-600",
};

const filters: FilterType[] = ["All", "Foundation", "Advanced", "Specialty"];

const levelCounts: Record<TrainingLevel, number> = {
  Foundation: trainingModules.filter((m) => m.level === "Foundation").length,
  Advanced: trainingModules.filter((m) => m.level === "Advanced").length,
  Specialty: trainingModules.filter((m) => m.level === "Specialty").length,
};

export default function TrainingPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  const filtered =
    activeFilter === "All"
      ? trainingModules
      : trainingModules.filter((m) => m.level === activeFilter);

  return (
    <div className="space-y-6">
      {/* KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 rounded-xl shadow-sm border bg-white">
          <p className="text-sm text-slate-500">Total Modules</p>
          <p className="text-2xl font-heading font-bold text-slate-900">
            {trainingStats.totalModules}
          </p>
        </Card>
        <Card className="p-4 rounded-xl shadow-sm border bg-white">
          <p className="text-sm text-slate-500">Published</p>
          <p className="text-2xl font-heading font-bold text-[#22C55E]">
            {trainingStats.publishedModules}
          </p>
        </Card>
        <Card className="p-4 rounded-xl shadow-sm border bg-white">
          <p className="text-sm text-slate-500">Avg Completion</p>
          <p className="text-2xl font-heading font-bold text-slate-900">
            {trainingStats.avgCompletionRate}%
          </p>
        </Card>
        <Card className="p-4 rounded-xl shadow-sm border bg-white">
          <p className="text-sm text-slate-500">Mentors Certified</p>
          <p className="text-2xl font-heading font-bold text-[#1AB394]">
            {trainingStats.mentorsCertified}
          </p>
        </Card>
      </div>

      {/* Filter Chips */}
      <div className="flex items-center gap-2">
        {filters.map((filter) => (
          <Button
            key={filter}
            variant={activeFilter === filter ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter(filter)}
            className={
              activeFilter === filter
                ? "bg-[#1AB394] hover:bg-[#148F76] text-white"
                : "text-slate-600 hover:text-slate-900"
            }
          >
            {filter}
            {filter !== "All" && (
              <span className="ml-1.5 text-xs opacity-70">
                ({levelCounts[filter as TrainingLevel]})
              </span>
            )}
          </Button>
        ))}
      </div>

      {/* Module Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((mod) => (
          <Link key={mod.id} href={`/training/${mod.id}`}>
            <Card className="p-6 rounded-xl shadow-sm border bg-white hover:shadow-md transition-shadow h-full">
              <div className="flex items-start justify-between mb-3">
                <Badge
                  className={`${levelColors[mod.level]} border-0 text-xs font-medium`}
                >
                  {mod.level}
                </Badge>
                <Badge
                  className={`${statusColors[mod.status]} border-0 text-xs font-medium capitalize`}
                >
                  {mod.status}
                </Badge>
              </div>

              <h3 className="font-heading font-semibold text-slate-900 text-base mb-1">
                {mod.title}
              </h3>
              <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                {mod.description}
              </p>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">
                    {mod.lessonsCompleted}/{mod.totalLessons} lessons
                  </span>
                  <span className="text-slate-500">{mod.estimatedHours}h est.</span>
                </div>
                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#1AB394]"
                    style={{ width: `${mod.progress}%` }}
                  />
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
