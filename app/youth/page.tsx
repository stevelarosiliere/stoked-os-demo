"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { detailedYouth, youthStats, jordanProfile } from "@/lib/data/youth";

const statusColors: Record<string, string> = {
  active: "bg-green-50 text-green-700",
  graduated: "bg-blue-50 text-blue-700",
  inactive: "bg-slate-100 text-slate-500",
};

const programMap: Record<string, string> = {
  "program-1": "Risers: Skate",
  "program-2": "Risers: Surf",
  "program-3": "Risers: Snow",
  "program-4": "Launchpad: Skate",
  "program-5": "Launchpad: Surf",
  "program-6": "Launchpad: Snow",
  "program-7": "Pathways",
};

const programColors: Record<string, string> = {
  "program-1": "bg-[#E8F8F4] text-[#1AB394]",
  "program-2": "bg-cyan-50 text-cyan-700",
  "program-3": "bg-blue-50 text-blue-700",
  "program-4": "bg-[#E8F8F4] text-[#1AB394]",
  "program-5": "bg-cyan-50 text-cyan-700",
  "program-6": "bg-blue-50 text-blue-700",
  "program-7": "bg-purple-50 text-purple-700",
};

// Combine detailedYouth (short-arc) + jordanProfile (long-arc) into one roster
const allYouth = [
  ...detailedYouth.map((y) => ({
    id: y.id,
    name: `${y.firstName} ${y.lastName}`,
    avatar: y.avatar,
    age: y.age,
    grade: y.grade,
    school: y.school,
    programs: y.programs,
    milestones: y.milestones.length,
    status: y.status,
    enrollmentDate: y.enrollmentDate,
    coachName: y.assignedCoachName,
    mentorName: y.mentorName,
    outcomesGrowth: Math.round(
      ((y.outcomes.belonging.post - y.outcomes.belonging.pre +
        (y.outcomes.confidence.post - y.outcomes.confidence.pre) +
        (y.outcomes.connection.post - y.outcomes.connection.pre) +
        (y.outcomes.tryNewThings.post - y.outcomes.tryNewThings.pre)) /
        4 /
        ((y.outcomes.belonging.pre +
          y.outcomes.confidence.pre +
          y.outcomes.connection.pre +
          y.outcomes.tryNewThings.pre) /
          4)) *
        100
    ),
  })),
  {
    id: jordanProfile.id,
    name: `${jordanProfile.firstName} ${jordanProfile.lastName}`,
    avatar: jordanProfile.avatar,
    age: jordanProfile.age,
    grade: jordanProfile.grade,
    school: jordanProfile.school,
    programs: ["program-1", "program-4", "program-6", "program-7"],
    milestones: jordanProfile.digitalResume.filter(
      (r) => r.category === "achievement"
    ).length,
    status: jordanProfile.status as "active" | "graduated" | "inactive",
    enrollmentDate: "2022-09-12",
    coachName: "Marcus Johnson",
    mentorName: jordanProfile.mentorName,
    outcomesGrowth: jordanProfile.outcomesGrowth,
  },
];

export default function YouthPage() {
  const activeCount = allYouth.filter((y) => y.status === "active").length;

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 rounded-xl shadow-sm border bg-white">
          <p className="text-sm text-slate-500">Total Enrolled</p>
          <p className="text-2xl font-heading font-bold text-slate-900">
            {youthStats.totalEnrolled}
          </p>
          <p className="text-xs text-[#1AB394] mt-1">
            +{youthStats.enrollmentGrowth}% this year
          </p>
        </Card>
        <Card className="p-4 rounded-xl shadow-sm border bg-white">
          <p className="text-sm text-slate-500">Active Participants</p>
          <p className="text-2xl font-heading font-bold text-[#22C55E]">
            {activeCount}
          </p>
        </Card>
        <Card className="p-4 rounded-xl shadow-sm border bg-white">
          <p className="text-sm text-slate-500">Average Age</p>
          <p className="text-2xl font-heading font-bold text-slate-900">
            {youthStats.avgAge}
          </p>
        </Card>
        <Card className="p-4 rounded-xl shadow-sm border bg-white">
          <p className="text-sm text-slate-500">Grade Distribution</p>
          <div className="flex items-center gap-3 mt-1">
            <span className="text-xs text-slate-600">
              6-8: <strong>{youthStats.gradeDistribution["6-8"]}%</strong>
            </span>
            <span className="text-xs text-slate-600">
              9-10: <strong>{youthStats.gradeDistribution["9-10"]}%</strong>
            </span>
            <span className="text-xs text-slate-600">
              11-12: <strong>{youthStats.gradeDistribution["11-12"]}%</strong>
            </span>
          </div>
        </Card>
      </div>

      {/* Youth Table */}
      <Card className="rounded-xl shadow-sm border bg-white overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50">
              <TableHead className="font-heading font-semibold text-slate-700">
                Participant
              </TableHead>
              <TableHead className="font-heading font-semibold text-slate-700">
                School
              </TableHead>
              <TableHead className="font-heading font-semibold text-slate-700">
                Programs
              </TableHead>
              <TableHead className="font-heading font-semibold text-slate-700 text-center">
                Milestones
              </TableHead>
              <TableHead className="font-heading font-semibold text-slate-700 text-center">
                Growth
              </TableHead>
              <TableHead className="font-heading font-semibold text-slate-700">
                Mentor
              </TableHead>
              <TableHead className="font-heading font-semibold text-slate-700 text-center">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allYouth.map((y) => (
              <TableRow key={y.id} className="hover:bg-slate-50/50">
                <TableCell>
                  <Link
                    href={`/youth/${y.id}`}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#1AB394] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {y.avatar}
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 group-hover:text-[#1AB394] transition-colors">
                        {y.name}
                      </p>
                      <p className="text-xs text-slate-400">
                        Age {y.age} &middot; Grade {y.grade}
                      </p>
                    </div>
                  </Link>
                </TableCell>
                <TableCell>
                  <p className="text-sm text-slate-600">{y.school}</p>
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {y.programs.map((p) => (
                      <Badge
                        key={p}
                        className={`${
                          programColors[p] || "bg-slate-100 text-slate-600"
                        } border-0 text-[10px] font-medium`}
                      >
                        {programMap[p] || p}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <span className="font-medium text-slate-900">
                    {y.milestones}
                  </span>
                </TableCell>
                <TableCell className="text-center">
                  <span className="font-medium text-[#1AB394]">
                    +{y.outcomesGrowth}%
                  </span>
                </TableCell>
                <TableCell>
                  <p className="text-sm text-slate-600">{y.mentorName}</p>
                </TableCell>
                <TableCell className="text-center">
                  <Badge
                    className={`border-0 text-xs font-medium capitalize ${
                      statusColors[y.status] || "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {y.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
