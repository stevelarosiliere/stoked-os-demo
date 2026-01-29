"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { Users } from "lucide-react";
import { mentors, mentorStats, type MentorJourneyStage } from "@/lib/data/mentors";

type FilterType = "All" | "Active" | "Onboarding" | "Lead" | "Alumni";

const stageColors: Record<MentorJourneyStage, string> = {
  New: "bg-blue-50 text-blue-700",
  Active: "bg-green-50 text-green-700",
  Lead: "bg-purple-50 text-purple-700",
  Coach: "bg-amber-50 text-amber-700",
  Alumni: "bg-slate-100 text-slate-600",
};

const riskDotColors: Record<string, string> = {
  low: "bg-[#22C55E]",
  medium: "bg-amber-400",
  high: "bg-red-500",
};

const filters: FilterType[] = ["All", "Active", "Onboarding", "Lead", "Alumni"];

function filterMentors(filter: FilterType) {
  if (filter === "All") return mentors;
  if (filter === "Active") return mentors.filter((m) => m.status === "active" && m.stage === "Active");
  if (filter === "Onboarding") return mentors.filter((m) => m.status === "onboarding");
  if (filter === "Lead") return mentors.filter((m) => m.stage === "Lead" || m.stage === "Coach");
  if (filter === "Alumni") return mentors.filter((m) => m.stage === "Alumni");
  return mentors;
}

export default function MentorsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");
  const filtered = filterMentors(activeFilter);

  return (
    <div className="space-y-6">
      {/* KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 rounded-xl shadow-sm border bg-white">
          <p className="text-sm text-slate-500">Total Mentors</p>
          <p className="text-2xl font-heading font-bold text-slate-900">
            {mentorStats.totalMentors}
          </p>
        </Card>
        <Card className="p-4 rounded-xl shadow-sm border bg-white">
          <p className="text-sm text-slate-500">Active</p>
          <p className="text-2xl font-heading font-bold text-[#22C55E]">
            {mentorStats.activeMentors}
          </p>
        </Card>
        <Card className="p-4 rounded-xl shadow-sm border bg-white">
          <p className="text-sm text-slate-500">Avg Hours</p>
          <p className="text-2xl font-heading font-bold text-slate-900">
            {mentorStats.avgHours}
          </p>
        </Card>
        <Card className="p-4 rounded-xl shadow-sm border bg-white">
          <p className="text-sm text-slate-500">Retention Rate</p>
          <p className="text-2xl font-heading font-bold text-[#1AB394]">
            {mentorStats.retentionRate}%
          </p>
        </Card>
      </div>

      {/* Filter Chips + Matching Button */}
      <div className="flex items-center justify-between">
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
            </Button>
          ))}
        </div>
        <Link href="/mentors/matching">
          <Button
            variant="outline"
            size="sm"
            className="text-[#1AB394] border-[#1AB394] hover:bg-[#E8F8F4]"
          >
            <Users className="h-4 w-4 mr-1.5" />
            View Matching
          </Button>
        </Link>
      </div>

      {/* Mentor Table */}
      <Card className="rounded-xl shadow-sm border bg-white overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50">
              <TableHead className="font-heading font-semibold text-slate-700">
                Mentor
              </TableHead>
              <TableHead className="font-heading font-semibold text-slate-700">
                Stage
              </TableHead>
              <TableHead className="font-heading font-semibold text-slate-700">
                Training
              </TableHead>
              <TableHead className="font-heading font-semibold text-slate-700 text-center">
                Mentees
              </TableHead>
              <TableHead className="font-heading font-semibold text-slate-700 text-center">
                Hours
              </TableHead>
              <TableHead className="font-heading font-semibold text-slate-700 text-center">
                Impact
              </TableHead>
              <TableHead className="font-heading font-semibold text-slate-700 text-center">
                Risk
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((mentor) => (
              <TableRow key={mentor.id} className="hover:bg-slate-50/50">
                <TableCell>
                  <Link href={`/mentors/${mentor.id}`} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#1AB394] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {mentor.avatar}
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 hover:text-[#1AB394] transition-colors">
                        {mentor.firstName} {mentor.lastName}
                      </p>
                      <p className="text-xs text-slate-400">{mentor.email}</p>
                    </div>
                  </Link>
                </TableCell>
                <TableCell>
                  <Badge
                    className={`${stageColors[mentor.stage]} border-0 text-xs font-medium`}
                  >
                    {mentor.stage}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="w-24">
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[#1AB394]"
                        style={{
                          width: `${
                            mentor.trainingProgress.length > 0
                              ? mentor.trainingProgress.reduce((sum, t) => sum + t.progress, 0) /
                                mentor.trainingProgress.length
                              : 0
                          }%`,
                        }}
                      />
                    </div>
                    <p className="text-[10px] text-slate-400 mt-0.5">
                      {mentor.certifications.length} cert
                      {mentor.certifications.length !== 1 ? "s" : ""}
                    </p>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <span className="font-medium text-slate-900">
                    {mentor.currentMentees}
                  </span>
                </TableCell>
                <TableCell className="text-center">
                  <span className="text-slate-600">{mentor.hoursLogged}</span>
                </TableCell>
                <TableCell className="text-center">
                  <span className="font-medium text-slate-900">
                    {mentor.impactScore > 0 ? mentor.impactScore : "-"}
                  </span>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex items-center justify-center">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${riskDotColors[mentor.retentionRisk]}`}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
