"use client";

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
const coaches = [
  {
    id: "coach-1",
    name: "Marcus Johnson",
    email: "marcus.j@stoked.org",
    avatar: "MJ",
    certifications: ["Skate Certified", "Mentor 101", "Mental Health First Aid"],
    assignedPartners: ["Bronx International HS", "Eagle Academy"],
    activePrograms: 2,
    yearsWithStoked: 4,
    status: "active",
  },
  {
    id: "coach-2",
    name: "Sarah Chen",
    email: "sarah.c@stoked.org",
    avatar: "SC",
    certifications: ["Snow Certified", "Surf Certified", "Mentor 101"],
    assignedPartners: ["Mott Hall Bronx HS"],
    activePrograms: 1,
    yearsWithStoked: 3,
    status: "active",
  },
  {
    id: "coach-3",
    name: "Devon Williams",
    email: "devon.w@stoked.org",
    avatar: "DW",
    certifications: ["Skate Certified", "Snow Certified", "Mentor 101", "Mental Health First Aid"],
    assignedPartners: ["Bronx International HS"],
    activePrograms: 2,
    yearsWithStoked: 5,
    status: "active",
  },
  {
    id: "coach-4",
    name: "Ana Rodriguez",
    email: "ana.r@stoked.org",
    avatar: "AR",
    certifications: ["Surf Certified", "Mentor 101"],
    assignedPartners: ["Bronx Lab School", "DreamYard Prep"],
    activePrograms: 1,
    yearsWithStoked: 2,
    status: "active",
  },
  {
    id: "coach-5",
    name: "Tyler Brooks",
    email: "tyler.b@stoked.org",
    avatar: "TB",
    certifications: ["Snow Certified", "Skate Certified"],
    assignedPartners: ["Eagle Academy", "Bronx Community Charter"],
    activePrograms: 1,
    yearsWithStoked: 3,
    status: "active",
  },
  {
    id: "coach-6",
    name: "Keisha Brown",
    email: "keisha.b@stoked.org",
    avatar: "KB",
    certifications: ["Mentor 101", "Mental Health First Aid"],
    assignedPartners: ["Mott Hall Bronx HS", "Fannie Lou Hamer HS"],
    activePrograms: 1,
    yearsWithStoked: 2,
    status: "active",
  },
  {
    id: "coach-7",
    name: "Jordan Pierce",
    email: "jordan.p@stoked.org",
    avatar: "JP",
    certifications: ["Surf Certified", "Mentor 101"],
    assignedPartners: ["Fannie Lou Hamer HS", "Urban Assembly Bronx"],
    activePrograms: 1,
    yearsWithStoked: 1,
    status: "active",
  },
  {
    id: "coach-8",
    name: "Destiny Harris",
    email: "destiny.h@stoked.org",
    avatar: "DH",
    certifications: ["Skate Certified"],
    assignedPartners: ["Bronx Academy of Letters", "Validus Prep"],
    activePrograms: 1,
    yearsWithStoked: 1,
    status: "active",
  },
  {
    id: "coach-9",
    name: "Rafael Ortiz",
    email: "rafael.o@stoked.org",
    avatar: "RO",
    certifications: ["Snow Certified"],
    assignedPartners: ["South Bronx Prep"],
    activePrograms: 0,
    yearsWithStoked: 0,
    status: "training",
  },
];

const certColors: Record<string, string> = {
  "Skate Certified": "bg-[#E8F8F4] text-[#1AB394]",
  "Snow Certified": "bg-blue-50 text-blue-700",
  "Surf Certified": "bg-cyan-50 text-cyan-700",
  "Mentor 101": "bg-purple-50 text-purple-700",
  "Mental Health First Aid": "bg-rose-50 text-rose-700",
};

export default function CoachesPage() {
  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 rounded-xl shadow-sm border bg-white">
          <p className="text-sm text-slate-500">Total Coaches</p>
          <p className="text-2xl font-heading font-bold text-slate-900">9</p>
        </Card>
        <Card className="p-4 rounded-xl shadow-sm border bg-white">
          <p className="text-sm text-slate-500">Active</p>
          <p className="text-2xl font-heading font-bold text-[#22C55E]">8</p>
        </Card>
        <Card className="p-4 rounded-xl shadow-sm border bg-white">
          <p className="text-sm text-slate-500">In Training</p>
          <p className="text-2xl font-heading font-bold text-[#F59E0B]">1</p>
        </Card>
        <Card className="p-4 rounded-xl shadow-sm border bg-white">
          <p className="text-sm text-slate-500">Avg Tenure</p>
          <p className="text-2xl font-heading font-bold text-slate-900">2.3 yrs</p>
        </Card>
      </div>

      {/* Coach Table */}
      <Card className="rounded-xl shadow-sm border bg-white overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50">
              <TableHead className="font-heading font-semibold text-slate-700">
                Coach
              </TableHead>
              <TableHead className="font-heading font-semibold text-slate-700">
                Certifications
              </TableHead>
              <TableHead className="font-heading font-semibold text-slate-700">
                Assigned Partners
              </TableHead>
              <TableHead className="font-heading font-semibold text-slate-700 text-center">
                Programs
              </TableHead>
              <TableHead className="font-heading font-semibold text-slate-700 text-center">
                Years
              </TableHead>
              <TableHead className="font-heading font-semibold text-slate-700 text-center">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {coaches.map((coach) => (
              <TableRow key={coach.id} className="hover:bg-slate-50/50">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#1AB394] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {coach.avatar}
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">{coach.name}</p>
                      <p className="text-xs text-slate-400">{coach.email}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {coach.certifications.map((cert) => (
                      <Badge
                        key={cert}
                        className={`${certColors[cert] || "bg-slate-100 text-slate-600"} border-0 text-[10px] font-medium`}
                      >
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="space-y-0.5">
                    {coach.assignedPartners.map((partner) => (
                      <p key={partner} className="text-sm text-slate-600">
                        {partner}
                      </p>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <span className="font-medium text-slate-900">
                    {coach.activePrograms}
                  </span>
                </TableCell>
                <TableCell className="text-center">
                  <span className="text-slate-600">
                    {coach.yearsWithStoked}
                  </span>
                </TableCell>
                <TableCell className="text-center">
                  <Badge
                    className={`border-0 text-xs font-medium capitalize ${
                      coach.status === "active"
                        ? "bg-green-50 text-green-700"
                        : coach.status === "training"
                        ? "bg-amber-50 text-amber-700"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {coach.status}
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
