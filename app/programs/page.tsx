"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  Calendar,
  UserCheck,
  BookOpen,
} from "lucide-react";
import Link from "next/link";

type ProgramType = "All" | "Risers" | "Launchpad" | "Pathways";

const programs = [
  {
    id: "program-1",
    name: "Risers Skateboarding",
    type: "Risers" as const,
    partnerId: "partner-1",
    partnerName: "Bronx International HS",
    coachName: "Marcus Johnson",
    startDate: "Sep 8, 2025",
    endDate: "Dec 19, 2025",
    enrolledYouth: 22,
    avgAttendance: 87,
    sessionsCompleted: 14,
    totalSessions: 14,
    status: "completed" as const,
    description: "Introduction to skateboarding culture, safety, and foundational skills for ages 10-13.",
  },
  {
    id: "program-2",
    name: "Risers Surfing",
    type: "Risers" as const,
    partnerId: "partner-2",
    partnerName: "Bronx Lab School",
    coachName: "Ana Rodriguez",
    startDate: "Sep 15, 2025",
    endDate: "Dec 12, 2025",
    enrolledYouth: 18,
    avgAttendance: 82,
    sessionsCompleted: 12,
    totalSessions: 12,
    status: "completed" as const,
    description: "Ocean safety, surf fundamentals, and environmental stewardship.",
  },
  {
    id: "program-3",
    name: "Risers Snowboarding",
    type: "Risers" as const,
    partnerId: "partner-3",
    partnerName: "Eagle Academy",
    coachName: "Tyler Brooks",
    startDate: "Jan 12, 2026",
    endDate: "Mar 27, 2026",
    enrolledYouth: 20,
    avgAttendance: 85,
    sessionsCompleted: 3,
    totalSessions: 12,
    status: "active" as const,
    description: "Mountain safety, snowboarding basics, and resilience through outdoor challenge.",
  },
  {
    id: "program-4",
    name: "Launchpad Skateboarding",
    type: "Launchpad" as const,
    partnerId: "partner-1",
    partnerName: "Bronx International HS",
    coachName: "Devon Williams",
    startDate: "Sep 8, 2025",
    endDate: "Dec 19, 2025",
    enrolledYouth: 16,
    avgAttendance: 90,
    sessionsCompleted: 14,
    totalSessions: 14,
    status: "completed" as const,
    description: "Advanced skill-building, peer mentorship, and competition prep for ages 13-16.",
  },
  {
    id: "program-5",
    name: "Launchpad Snowboarding",
    type: "Launchpad" as const,
    partnerId: "partner-5",
    partnerName: "Mott Hall Bronx HS",
    coachName: "Sarah Chen",
    startDate: "Jan 12, 2026",
    endDate: "Mar 27, 2026",
    enrolledYouth: 15,
    avgAttendance: 83,
    sessionsCompleted: 3,
    totalSessions: 12,
    status: "active" as const,
    description: "Intermediate snowboarding with leadership development and team dynamics.",
  },
  {
    id: "program-6",
    name: "Launchpad Surfing",
    type: "Launchpad" as const,
    partnerId: "partner-4",
    partnerName: "Fannie Lou Hamer HS",
    coachName: "Jordan Pierce",
    startDate: "Apr 6, 2026",
    endDate: "Jun 19, 2026",
    enrolledYouth: 0,
    avgAttendance: 0,
    sessionsCompleted: 0,
    totalSessions: 12,
    status: "upcoming" as const,
    description: "Ocean leadership, advanced techniques, and environmental advocacy.",
  },
  {
    id: "program-7",
    name: "Pathways Leadership",
    type: "Pathways" as const,
    partnerId: "partner-1",
    partnerName: "Bronx International HS",
    coachName: "Devon Williams",
    startDate: "Sep 8, 2025",
    endDate: "Jun 19, 2026",
    enrolledYouth: 12,
    avgAttendance: 92,
    sessionsCompleted: 18,
    totalSessions: 36,
    status: "active" as const,
    description: "Youth leadership council, peer mentoring, and community impact projects for ages 16-19.",
  },
  {
    id: "program-8",
    name: "Pathways Mentoring",
    type: "Pathways" as const,
    partnerId: "partner-3",
    partnerName: "Eagle Academy",
    coachName: "Marcus Johnson",
    startDate: "Jan 12, 2026",
    endDate: "Jun 19, 2026",
    enrolledYouth: 10,
    avgAttendance: 88,
    sessionsCompleted: 3,
    totalSessions: 20,
    status: "active" as const,
    description: "1-on-1 mentor matching, goal setting, and career exploration.",
  },
  {
    id: "program-9",
    name: "Pathways Career Readiness",
    type: "Pathways" as const,
    partnerId: "partner-5",
    partnerName: "Mott Hall Bronx HS",
    coachName: "Keisha Brown",
    startDate: "Apr 6, 2026",
    endDate: "Jun 19, 2026",
    enrolledYouth: 0,
    avgAttendance: 0,
    sessionsCompleted: 0,
    totalSessions: 10,
    status: "upcoming" as const,
    description: "Resume building, interview prep, and industry mentorship connections.",
  },
];

const typeColors: Record<string, string> = {
  Risers: "bg-[#E8F8F4] text-[#1AB394]",
  Launchpad: "bg-blue-50 text-blue-700",
  Pathways: "bg-purple-50 text-purple-700",
};

const statusColors: Record<string, string> = {
  active: "bg-green-50 text-green-700",
  completed: "bg-slate-100 text-slate-600",
  upcoming: "bg-amber-50 text-amber-700",
};

const filters: ProgramType[] = ["All", "Risers", "Launchpad", "Pathways"];

export default function ProgramsPage() {
  const [activeFilter, setActiveFilter] = useState<ProgramType>("All");

  const filtered =
    activeFilter === "All"
      ? programs
      : programs.filter((p) => p.type === activeFilter);

  return (
    <div className="space-y-6">
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
                ({programs.filter((p) => p.type === filter).length})
              </span>
            )}
          </Button>
        ))}
      </div>

      {/* Program Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((program) => (
          <Card
            key={program.id}
            className="p-6 rounded-xl shadow-sm border bg-white hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <Badge className={`${typeColors[program.type]} border-0 text-xs font-medium`}>
                {program.type}
              </Badge>
              <Badge
                className={`${statusColors[program.status]} border-0 text-xs font-medium capitalize`}
              >
                {program.status}
              </Badge>
            </div>

            <h3 className="font-heading font-semibold text-slate-900 text-base mb-1">
              {program.name}
            </h3>
            <p className="text-sm text-slate-500 mb-4 line-clamp-2">
              {program.description}
            </p>

            <div className="space-y-2.5 mb-4">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <BookOpen className="h-4 w-4 text-slate-400" />
                <Link
                  href={`/partners/${program.partnerId}`}
                  className="hover:text-[#1AB394] transition-colors"
                >
                  {program.partnerName}
                </Link>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <UserCheck className="h-4 w-4 text-slate-400" />
                {program.coachName}
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Calendar className="h-4 w-4 text-slate-400" />
                {program.startDate} - {program.endDate}
              </div>
            </div>

            <div className="border-t border-slate-100 pt-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5 text-slate-400" />
                    <span className="text-sm font-medium text-slate-700">
                      {program.enrolledYouth}
                    </span>
                  </div>
                  {program.avgAttendance > 0 && (
                    <span className="text-sm text-slate-500">
                      {program.avgAttendance}% attendance
                    </span>
                  )}
                </div>
                {program.status !== "upcoming" && program.totalSessions > 0 && (
                  <span className="text-xs text-slate-400">
                    {program.sessionsCompleted}/{program.totalSessions} sessions
                  </span>
                )}
              </div>
              {program.status !== "upcoming" && program.totalSessions > 0 && (
                <div className="mt-2 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#1AB394]"
                    style={{
                      width: `${(program.sessionsCompleted / program.totalSessions) * 100}%`,
                    }}
                  />
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
