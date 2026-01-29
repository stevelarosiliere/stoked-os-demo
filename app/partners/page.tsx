"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";

const partners = [
  { id: "partner-1", name: "Bronx International High School", type: "high-school", youthEnrolled: 45, avgAttendance: 87, activePrograms: 3, assignedCoaches: 2, status: "active" },
  { id: "partner-2", name: "Bronx Lab School", type: "high-school", youthEnrolled: 38, avgAttendance: 82, activePrograms: 2, assignedCoaches: 2, status: "active" },
  { id: "partner-3", name: "Eagle Academy for Young Men", type: "middle-school", youthEnrolled: 42, avgAttendance: 85, activePrograms: 2, assignedCoaches: 1, status: "active" },
  { id: "partner-4", name: "Fannie Lou Hamer Freedom HS", type: "high-school", youthEnrolled: 30, avgAttendance: 79, activePrograms: 2, assignedCoaches: 1, status: "active" },
  { id: "partner-5", name: "Mott Hall Bronx High School", type: "middle-school", youthEnrolled: 35, avgAttendance: 83, activePrograms: 2, assignedCoaches: 1, status: "active" },
  { id: "partner-6", name: "Urban Assembly Bronx Academy", type: "high-school", youthEnrolled: 22, avgAttendance: 78, activePrograms: 1, assignedCoaches: 1, status: "active" },
  { id: "partner-7", name: "Bronx Academy of Letters", type: "high-school", youthEnrolled: 18, avgAttendance: 81, activePrograms: 1, assignedCoaches: 1, status: "active" },
  { id: "partner-8", name: "Validus Preparatory Academy", type: "middle-school", youthEnrolled: 15, avgAttendance: 76, activePrograms: 1, assignedCoaches: 1, status: "onboarding" },
  { id: "partner-9", name: "DreamYard Preparatory School", type: "high-school", youthEnrolled: 14, avgAttendance: 74, activePrograms: 1, assignedCoaches: 1, status: "active" },
  { id: "partner-10", name: "Bronx Community Charter School", type: "community", youthEnrolled: 10, avgAttendance: 80, activePrograms: 1, assignedCoaches: 1, status: "active" },
  { id: "partner-11", name: "South Bronx Prep", type: "middle-school", youthEnrolled: 8, avgAttendance: 72, activePrograms: 1, assignedCoaches: 1, status: "onboarding" },
  { id: "partner-12", name: "International Community HS", type: "high-school", youthEnrolled: 6, avgAttendance: 70, activePrograms: 1, assignedCoaches: 1, status: "paused" },
];

const typeBadgeStyles: Record<string, string> = {
  "high-school": "bg-blue-50 text-blue-700 border-blue-200",
  "middle-school": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "community": "bg-purple-50 text-purple-700 border-purple-200",
};

const typeLabels: Record<string, string> = {
  "high-school": "High School",
  "middle-school": "Middle School",
  "community": "Community",
};

const statusBadgeStyles: Record<string, string> = {
  active: "bg-emerald-50 text-emerald-700 border-emerald-200",
  onboarding: "bg-amber-50 text-amber-700 border-amber-200",
  paused: "bg-red-50 text-red-700 border-red-200",
};

const statusLabels: Record<string, string> = {
  active: "Active",
  onboarding: "Onboarding",
  paused: "Paused",
};

export default function PartnersPage() {
  const [search, setSearch] = useState("");

  const filtered = partners.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search partner schools..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1AB394]/30 focus:border-[#1AB394] transition-colors"
          />
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Building2 className="h-4 w-4" />
          <span>{filtered.length} schools</span>
        </div>
      </div>

      {/* Partners Table */}
      <Card className="rounded-xl shadow-sm border bg-white overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50/80">
              <TableHead className="pl-6 font-heading font-semibold text-slate-700">
                School Name
              </TableHead>
              <TableHead className="font-heading font-semibold text-slate-700">
                Type
              </TableHead>
              <TableHead className="font-heading font-semibold text-slate-700 text-right">
                Youth Enrolled
              </TableHead>
              <TableHead className="font-heading font-semibold text-slate-700 text-right">
                Attendance
              </TableHead>
              <TableHead className="font-heading font-semibold text-slate-700 text-right">
                Programs
              </TableHead>
              <TableHead className="font-heading font-semibold text-slate-700 text-right">
                Coaches
              </TableHead>
              <TableHead className="font-heading font-semibold text-slate-700 pr-6">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((partner) => (
              <TableRow
                key={partner.id}
                className="group cursor-pointer hover:bg-[#E8F8F4]/40 transition-colors"
              >
                <TableCell className="pl-6 py-4">
                  <Link
                    href={`/partners/${partner.id}`}
                    className="flex items-center gap-3"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#E8F8F4] flex items-center justify-center flex-shrink-0">
                      <Building2 className="h-4.5 w-4.5 text-[#1AB394]" />
                    </div>
                    <span className="font-medium text-slate-900 group-hover:text-[#1AB394] transition-colors">
                      {partner.name}
                    </span>
                  </Link>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={typeBadgeStyles[partner.type]}
                  >
                    {typeLabels[partner.type]}
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-semibold text-slate-900">
                  {partner.youthEnrolled}
                </TableCell>
                <TableCell className="text-right">
                  <span
                    className={`font-semibold ${
                      partner.avgAttendance >= 80
                        ? "text-[#22C55E]"
                        : partner.avgAttendance >= 75
                        ? "text-[#F59E0B]"
                        : "text-[#EF4444]"
                    }`}
                  >
                    {partner.avgAttendance}%
                  </span>
                </TableCell>
                <TableCell className="text-right text-slate-700">
                  {partner.activePrograms}
                </TableCell>
                <TableCell className="text-right text-slate-700">
                  {partner.assignedCoaches}
                </TableCell>
                <TableCell className="pr-6">
                  <Badge
                    variant="outline"
                    className={statusBadgeStyles[partner.status]}
                  >
                    {statusLabels[partner.status]}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
            {filtered.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={7}
                  className="text-center py-12 text-slate-400"
                >
                  No partner schools match your search.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
