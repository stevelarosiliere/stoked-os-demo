"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Users,
  UserCheck,
  BookOpen,
  TrendingUp,
  Award,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// ─── Partner Data ────────────────────────────────────────────────────────────

interface PartnerData {
  id: string;
  name: string;
  type: string;
  principal: string;
  email: string;
  phone: string;
  address: string;
  activeSince: string;
  youthEnrolled: number;
  avgAttendance: number;
  activePrograms: number;
  assignedCoaches: number;
  attendanceTrend: { week: string; attendance: number }[];
  programs: {
    name: string;
    type: string;
    coach: string;
    enrolled: number;
    startDate: string;
    endDate: string;
  }[];
  outcomes: {
    dimension: string;
    pre: number;
    post: number;
  }[];
}

const partnersData: Record<string, PartnerData> = {
  "partner-1": {
    id: "partner-1",
    name: "Bronx International High School",
    type: "high-school",
    principal: "Dr. Maria Santos",
    email: "msantos@bronxinternational.edu",
    phone: "(718) 555-0142",
    address: "2780 Reservoir Ave, Bronx, NY 10468",
    activeSince: "Sept 2024",
    youthEnrolled: 45,
    avgAttendance: 87,
    activePrograms: 3,
    assignedCoaches: 2,
    attendanceTrend: [
      { week: "W1", attendance: 78 },
      { week: "W2", attendance: 80 },
      { week: "W3", attendance: 79 },
      { week: "W4", attendance: 82 },
      { week: "W5", attendance: 83 },
      { week: "W6", attendance: 84 },
      { week: "W7", attendance: 85 },
      { week: "W8", attendance: 86 },
      { week: "W9", attendance: 88 },
      { week: "W10", attendance: 87 },
      { week: "W11", attendance: 89 },
      { week: "W12", attendance: 91 },
    ],
    programs: [
      {
        name: "Skateboarding 101",
        type: "Action Sport",
        coach: "Marcus Johnson",
        enrolled: 18,
        startDate: "Sep 2024",
        endDate: "Jun 2025",
      },
      {
        name: "Surf & Turf",
        type: "Action Sport",
        coach: "Aisha Williams",
        enrolled: 15,
        startDate: "Oct 2024",
        endDate: "May 2025",
      },
      {
        name: "Snowboarding Experience",
        type: "Action Sport",
        coach: "Marcus Johnson",
        enrolled: 12,
        startDate: "Dec 2024",
        endDate: "Mar 2025",
      },
    ],
    outcomes: [
      { dimension: "Belonging", pre: 3.1, post: 4.0 },
      { dimension: "Confidence", pre: 3.0, post: 3.9 },
      { dimension: "Connection", pre: 3.2, post: 4.2 },
      { dimension: "Try New Things", pre: 3.0, post: 4.1 },
    ],
  },
  "partner-2": {
    id: "partner-2",
    name: "Bronx Lab School",
    type: "high-school",
    principal: "James Henderson",
    email: "jhenderson@bronxlab.edu",
    phone: "(718) 555-0198",
    address: "890 Cauldwell Ave, Bronx, NY 10456",
    activeSince: "Sept 2024",
    youthEnrolled: 38,
    avgAttendance: 82,
    activePrograms: 2,
    assignedCoaches: 2,
    attendanceTrend: [
      { week: "W1", attendance: 75 },
      { week: "W2", attendance: 76 },
      { week: "W3", attendance: 77 },
      { week: "W4", attendance: 78 },
      { week: "W5", attendance: 79 },
      { week: "W6", attendance: 80 },
      { week: "W7", attendance: 81 },
      { week: "W8", attendance: 80 },
      { week: "W9", attendance: 82 },
      { week: "W10", attendance: 83 },
      { week: "W11", attendance: 84 },
      { week: "W12", attendance: 85 },
    ],
    programs: [
      {
        name: "Skateboarding 101",
        type: "Action Sport",
        coach: "Devon Clarke",
        enrolled: 20,
        startDate: "Sep 2024",
        endDate: "Jun 2025",
      },
      {
        name: "Surf & Turf",
        type: "Action Sport",
        coach: "Aisha Williams",
        enrolled: 18,
        startDate: "Oct 2024",
        endDate: "May 2025",
      },
    ],
    outcomes: [
      { dimension: "Belonging", pre: 3.0, post: 3.8 },
      { dimension: "Confidence", pre: 2.9, post: 3.7 },
      { dimension: "Connection", pre: 3.1, post: 4.0 },
      { dimension: "Try New Things", pre: 2.8, post: 3.9 },
    ],
  },
  "partner-3": {
    id: "partner-3",
    name: "Eagle Academy for Young Men",
    type: "middle-school",
    principal: "David Banks Jr.",
    email: "dbanks@eagleacademy.edu",
    phone: "(718) 555-0267",
    address: "4143 Third Ave, Bronx, NY 10457",
    activeSince: "Oct 2024",
    youthEnrolled: 42,
    avgAttendance: 85,
    activePrograms: 2,
    assignedCoaches: 1,
    attendanceTrend: [
      { week: "W1", attendance: 80 },
      { week: "W2", attendance: 81 },
      { week: "W3", attendance: 82 },
      { week: "W4", attendance: 83 },
      { week: "W5", attendance: 82 },
      { week: "W6", attendance: 84 },
      { week: "W7", attendance: 85 },
      { week: "W8", attendance: 84 },
      { week: "W9", attendance: 86 },
      { week: "W10", attendance: 85 },
      { week: "W11", attendance: 87 },
      { week: "W12", attendance: 88 },
    ],
    programs: [
      {
        name: "Skateboarding 101",
        type: "Action Sport",
        coach: "Marcus Johnson",
        enrolled: 24,
        startDate: "Oct 2024",
        endDate: "Jun 2025",
      },
      {
        name: "Snowboarding Experience",
        type: "Action Sport",
        coach: "Marcus Johnson",
        enrolled: 18,
        startDate: "Dec 2024",
        endDate: "Mar 2025",
      },
    ],
    outcomes: [
      { dimension: "Belonging", pre: 3.2, post: 4.1 },
      { dimension: "Confidence", pre: 3.1, post: 4.0 },
      { dimension: "Connection", pre: 3.0, post: 3.9 },
      { dimension: "Try New Things", pre: 3.1, post: 4.0 },
    ],
  },
};

// Fallback generator for partners not explicitly defined
function getPartnerData(id: string): PartnerData {
  if (partnersData[id]) return partnersData[id];

  const names: Record<string, string> = {
    "partner-4": "Fannie Lou Hamer Freedom HS",
    "partner-5": "Mott Hall Bronx High School",
    "partner-6": "Urban Assembly Bronx Academy",
    "partner-7": "Bronx Academy of Letters",
    "partner-8": "Validus Preparatory Academy",
    "partner-9": "DreamYard Preparatory School",
    "partner-10": "Bronx Community Charter School",
    "partner-11": "South Bronx Prep",
    "partner-12": "International Community HS",
  };

  const types: Record<string, string> = {
    "partner-4": "high-school",
    "partner-5": "middle-school",
    "partner-6": "high-school",
    "partner-7": "high-school",
    "partner-8": "middle-school",
    "partner-9": "high-school",
    "partner-10": "community",
    "partner-11": "middle-school",
    "partner-12": "high-school",
  };

  const enrolled: Record<string, number> = {
    "partner-4": 30,
    "partner-5": 35,
    "partner-6": 22,
    "partner-7": 18,
    "partner-8": 15,
    "partner-9": 14,
    "partner-10": 10,
    "partner-11": 8,
    "partner-12": 6,
  };

  const attendance: Record<string, number> = {
    "partner-4": 79,
    "partner-5": 83,
    "partner-6": 78,
    "partner-7": 81,
    "partner-8": 76,
    "partner-9": 74,
    "partner-10": 80,
    "partner-11": 72,
    "partner-12": 70,
  };

  const base = attendance[id] || 75;
  const trend = Array.from({ length: 12 }, (_, i) => ({
    week: `W${i + 1}`,
    attendance: Math.min(100, base - 5 + Math.round(i * 0.8 + Math.random() * 2)),
  }));

  return {
    id,
    name: names[id] || "Partner School",
    type: types[id] || "high-school",
    principal: "School Administrator",
    email: "contact@school.edu",
    phone: "(718) 555-0100",
    address: "Bronx, NY 10451",
    activeSince: "Sept 2024",
    youthEnrolled: enrolled[id] || 20,
    avgAttendance: attendance[id] || 75,
    activePrograms: enrolled[id] && enrolled[id] >= 20 ? 2 : 1,
    assignedCoaches: 1,
    attendanceTrend: trend,
    programs: [
      {
        name: "Skateboarding 101",
        type: "Action Sport",
        coach: "Marcus Johnson",
        enrolled: enrolled[id] || 20,
        startDate: "Sep 2024",
        endDate: "Jun 2025",
      },
    ],
    outcomes: [
      { dimension: "Belonging", pre: 3.0, post: 3.8 },
      { dimension: "Confidence", pre: 2.9, post: 3.7 },
      { dimension: "Connection", pre: 3.1, post: 3.9 },
      { dimension: "Try New Things", pre: 2.8, post: 3.8 },
    ],
  };
}

// ─── Badge Styles ────────────────────────────────────────────────────────────

const typeBadgeStyles: Record<string, string> = {
  "high-school": "bg-blue-50 text-blue-700 border-blue-200",
  "middle-school": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "community": "bg-purple-50 text-purple-700 border-purple-200",
};

const typeLabels: Record<string, string> = {
  "high-school": "High School",
  "middle-school": "Middle School",
  "community": "Community",
  "Action Sport": "Action Sport",
};

// ─── Custom Tooltip ──────────────────────────────────────────────────────────

function ChartTooltip({ active, payload, label }: {
  active?: boolean;
  payload?: Array<{ value: number; name: string; color: string }>;
  label?: string;
}) {
  if (!active || !payload) return null;
  return (
    <div className="bg-white border border-slate-200 rounded-lg px-3 py-2 shadow-lg">
      <p className="text-xs font-semibold text-slate-600 mb-1">{label}</p>
      {payload.map((entry, i) => (
        <p key={i} className="text-xs" style={{ color: entry.color }}>
          {entry.name}: {entry.value}
          {entry.name === "Attendance" ? "%" : ""}
        </p>
      ))}
    </div>
  );
}

// ─── Page Component ──────────────────────────────────────────────────────────

export default function PartnerDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const partner = getPartnerData(id);

  return (
    <div className="space-y-6">
      {/* Back Link */}
      <Link
        href="/partners"
        className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#1AB394] transition-colors group"
      >
        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
        Back to Partner Schools
      </Link>

      {/* Header Card */}
      <Card className="rounded-xl shadow-sm border bg-white overflow-hidden">
        <div className="bg-gradient-to-r from-[#0F172A] to-[#1e293b] px-8 py-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-heading font-bold text-white mb-1">
                {partner.name}
              </h2>
              <p className="text-slate-300 text-sm">{partner.principal}, Principal</p>
            </div>
            <Badge className="bg-[#1AB394] text-white border-0 px-3 py-1 text-xs font-semibold">
              Active since {partner.activeSince}
            </Badge>
          </div>
        </div>
        <div className="px-8 py-4 flex flex-wrap items-center gap-6 border-b border-slate-100">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Mail className="h-4 w-4 text-slate-400" />
            <a href={`mailto:${partner.email}`} className="hover:text-[#1AB394] transition-colors">
              {partner.email}
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Phone className="h-4 w-4 text-slate-400" />
            {partner.phone}
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <MapPin className="h-4 w-4 text-slate-400" />
            {partner.address}
          </div>
          <Badge variant="outline" className={typeBadgeStyles[partner.type]}>
            {typeLabels[partner.type]}
          </Badge>
        </div>
      </Card>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-6 rounded-xl shadow-sm border bg-white">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <p className="text-sm font-medium text-slate-500">Youth Enrolled</p>
              <p className="text-3xl font-heading font-bold text-slate-900">
                {partner.youthEnrolled}
              </p>
            </div>
            <div className="p-3 rounded-xl bg-[#E8F8F4]">
              <Users className="h-6 w-6 text-[#1AB394]" />
            </div>
          </div>
        </Card>
        <Card className="p-6 rounded-xl shadow-sm border bg-white">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <p className="text-sm font-medium text-slate-500">Avg Attendance</p>
              <p className="text-3xl font-heading font-bold text-slate-900">
                {partner.avgAttendance}%
              </p>
              <div className="flex items-center gap-1.5">
                <TrendingUp className="h-3.5 w-3.5 text-[#22C55E]" />
                <span className="text-xs font-semibold text-[#22C55E]">+5%</span>
                <span className="text-xs text-slate-400">vs last quarter</span>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-amber-50">
              <Calendar className="h-6 w-6 text-amber-600" />
            </div>
          </div>
        </Card>
        <Card className="p-6 rounded-xl shadow-sm border bg-white">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <p className="text-sm font-medium text-slate-500">Active Programs</p>
              <p className="text-3xl font-heading font-bold text-slate-900">
                {partner.activePrograms}
              </p>
            </div>
            <div className="p-3 rounded-xl bg-blue-50">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </Card>
        <Card className="p-6 rounded-xl shadow-sm border bg-white">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <p className="text-sm font-medium text-slate-500">Assigned Coaches</p>
              <p className="text-3xl font-heading font-bold text-slate-900">
                {partner.assignedCoaches}
              </p>
            </div>
            <div className="p-3 rounded-xl bg-purple-50">
              <UserCheck className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="bg-slate-100 p-1">
          <TabsTrigger value="overview" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
            Overview
          </TabsTrigger>
          <TabsTrigger value="programs" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
            Programs
          </TabsTrigger>
          <TabsTrigger value="youth" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
            Youth
          </TabsTrigger>
          <TabsTrigger value="outcomes" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
            Outcomes
          </TabsTrigger>
        </TabsList>

        {/* ── Overview Tab ─────────────────────────────────────────────────── */}
        <TabsContent value="overview" className="space-y-6">
          {/* Attendance Trend Chart */}
          <Card className="p-6 rounded-xl shadow-sm border bg-white">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-base font-heading font-semibold text-slate-900">
                  Attendance Trend
                </h3>
                <p className="text-sm text-slate-500 mt-0.5">
                  Weekly session attendance over 12 weeks
                </p>
              </div>
              <Badge className="bg-[#E8F8F4] text-[#1AB394] border-0 font-semibold">
                <TrendingUp className="h-3.5 w-3.5 mr-1.5" />
                Improving
              </Badge>
            </div>
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={partner.attendanceTrend}>
                  <defs>
                    <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1AB394" stopOpacity={0.15} />
                      <stop offset="100%" stopColor="#1AB394" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis
                    dataKey="week"
                    tick={{ fontSize: 12, fill: "#94A3B8" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    domain={[60, 100]}
                    tick={{ fontSize: 12, fill: "#94A3B8" }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => `${v}%`}
                  />
                  <Tooltip content={<ChartTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="attendance"
                    name="Attendance"
                    stroke="#1AB394"
                    strokeWidth={2.5}
                    dot={{ r: 4, fill: "#1AB394", strokeWidth: 2, stroke: "#fff" }}
                    activeDot={{ r: 6, fill: "#1AB394", strokeWidth: 2, stroke: "#fff" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Active Programs */}
          <div>
            <h3 className="text-base font-heading font-semibold text-slate-900 mb-4">
              Active Programs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {partner.programs.map((program, idx) => (
                <Card
                  key={idx}
                  className="rounded-xl shadow-sm border bg-white hover:shadow-md transition-shadow"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-base font-heading font-semibold text-slate-900">
                        {program.name}
                      </CardTitle>
                      <Badge
                        variant="outline"
                        className="bg-[#E8F8F4] text-[#1AB394] border-[#1AB394]/20 text-xs"
                      >
                        {program.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <UserCheck className="h-4 w-4 text-slate-400" />
                      <span>Coach: <span className="font-medium text-slate-800">{program.coach}</span></span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Users className="h-4 w-4 text-slate-400" />
                      <span>
                        <span className="font-medium text-slate-800">{program.enrolled}</span> youth enrolled
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Calendar className="h-4 w-4 text-slate-400" />
                      <span>{program.startDate} &ndash; {program.endDate}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Pre/Post Outcomes Chart */}
          <Card className="p-6 rounded-xl shadow-sm border bg-white">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-base font-heading font-semibold text-slate-900">
                  Pre/Post Outcomes Comparison
                </h3>
                <p className="text-sm text-slate-500 mt-0.5">
                  Average survey responses on a 1 to 5 scale
                </p>
              </div>
              <Badge className="bg-[#E8F8F4] text-[#1AB394] border-0 font-semibold">
                <Award className="h-3.5 w-3.5 mr-1.5" />
                Positive Growth
              </Badge>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={partner.outcomes}
                  barCategoryGap="20%"
                  barGap={4}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis
                    dataKey="dimension"
                    tick={{ fontSize: 12, fill: "#64748B" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    domain={[0, 5]}
                    ticks={[0, 1, 2, 3, 4, 5]}
                    tick={{ fontSize: 12, fill: "#94A3B8" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: "8px",
                      border: "1px solid #E2E8F0",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    }}
                  />
                  <Legend
                    iconType="circle"
                    iconSize={8}
                    wrapperStyle={{ paddingTop: "12px", fontSize: "13px" }}
                  />
                  <Bar
                    dataKey="pre"
                    name="Pre-Program"
                    fill="#94A3B8"
                    radius={[4, 4, 0, 0]}
                    maxBarSize={48}
                  />
                  <Bar
                    dataKey="post"
                    name="Post-Program"
                    fill="#1AB394"
                    radius={[4, 4, 0, 0]}
                    maxBarSize={48}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </TabsContent>

        {/* ── Programs Tab ─────────────────────────────────────────────────── */}
        <TabsContent value="programs" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {partner.programs.map((program, idx) => (
              <Card
                key={idx}
                className="rounded-xl shadow-sm border bg-white hover:shadow-md transition-shadow"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-base font-heading font-semibold text-slate-900">
                      {program.name}
                    </CardTitle>
                    <Badge
                      variant="outline"
                      className="bg-[#E8F8F4] text-[#1AB394] border-[#1AB394]/20 text-xs"
                    >
                      {program.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <UserCheck className="h-4 w-4 text-slate-400" />
                    <span>Coach: <span className="font-medium text-slate-800">{program.coach}</span></span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Users className="h-4 w-4 text-slate-400" />
                    <span>
                      <span className="font-medium text-slate-800">{program.enrolled}</span> youth enrolled
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Calendar className="h-4 w-4 text-slate-400" />
                    <span>{program.startDate} &ndash; {program.endDate}</span>
                  </div>
                  <div className="pt-2 border-t border-slate-100">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Session Progress</span>
                      <span className="font-semibold text-slate-700">
                        {Math.round((idx + 1) * 8 + 4)}/24 sessions
                      </span>
                    </div>
                    <div className="mt-2 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#1AB394] rounded-full"
                        style={{ width: `${Math.round(((idx + 1) * 8 + 4) / 24 * 100)}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* ── Youth Tab ────────────────────────────────────────────────────── */}
        <TabsContent value="youth" className="space-y-6">
          <Card className="p-6 rounded-xl shadow-sm border bg-white">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-base font-heading font-semibold text-slate-900">
                  Enrolled Youth
                </h3>
                <p className="text-sm text-slate-500 mt-0.5">
                  {partner.youthEnrolled} youth across {partner.activePrograms} programs
                </p>
              </div>
              <Button variant="outline" size="sm" className="text-sm">
                <Users className="h-4 w-4 mr-1.5" />
                View All Youth
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { name: "Jordan Williams", grade: "10th", programs: 2, attendance: 92 },
                { name: "Aaliyah Jackson", grade: "11th", programs: 1, attendance: 88 },
                { name: "Marcus Rivera", grade: "9th", programs: 2, attendance: 95 },
                { name: "Destiny Brown", grade: "10th", programs: 1, attendance: 85 },
                { name: "Jaylen Thomas", grade: "11th", programs: 3, attendance: 90 },
                { name: "Kiara Martinez", grade: "9th", programs: 1, attendance: 87 },
              ].map((youth, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 hover:border-[#1AB394]/30 hover:bg-[#E8F8F4]/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1AB394] to-[#148F76] flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    {youth.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900 truncate">{youth.name}</p>
                    <p className="text-xs text-slate-500">
                      {youth.grade} &middot; {youth.programs} program{youth.programs > 1 ? "s" : ""}
                    </p>
                  </div>
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      youth.attendance >= 90
                        ? "bg-emerald-50 text-emerald-700"
                        : youth.attendance >= 80
                        ? "bg-amber-50 text-amber-700"
                        : "bg-red-50 text-red-700"
                    }`}
                  >
                    {youth.attendance}%
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        {/* ── Outcomes Tab ─────────────────────────────────────────────────── */}
        <TabsContent value="outcomes" className="space-y-6">
          <Card className="p-6 rounded-xl shadow-sm border bg-white">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-base font-heading font-semibold text-slate-900">
                  Full Outcomes Report
                </h3>
                <p className="text-sm text-slate-500 mt-0.5">
                  Pre and post program survey results, 1 to 5 scale
                </p>
              </div>
              <Button variant="outline" size="sm" className="text-sm">
                Export Report
              </Button>
            </div>
            <div className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={partner.outcomes}
                  barCategoryGap="20%"
                  barGap={4}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis
                    dataKey="dimension"
                    tick={{ fontSize: 12, fill: "#64748B" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    domain={[0, 5]}
                    ticks={[0, 1, 2, 3, 4, 5]}
                    tick={{ fontSize: 12, fill: "#94A3B8" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: "8px",
                      border: "1px solid #E2E8F0",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    }}
                  />
                  <Legend
                    iconType="circle"
                    iconSize={8}
                    wrapperStyle={{ paddingTop: "12px", fontSize: "13px" }}
                  />
                  <Bar
                    dataKey="pre"
                    name="Pre-Program"
                    fill="#94A3B8"
                    radius={[4, 4, 0, 0]}
                    maxBarSize={48}
                  />
                  <Bar
                    dataKey="post"
                    name="Post-Program"
                    fill="#1AB394"
                    radius={[4, 4, 0, 0]}
                    maxBarSize={48}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Outcome Detail Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-100">
              {partner.outcomes.map((outcome, idx) => {
                const improvement = Number((outcome.post - outcome.pre).toFixed(1));
                return (
                  <div
                    key={idx}
                    className="text-center p-4 rounded-lg bg-slate-50/80"
                  >
                    <p className="text-sm font-medium text-slate-500 mb-2">
                      {outcome.dimension}
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <div>
                        <p className="text-lg font-bold text-slate-400">{outcome.pre}</p>
                        <p className="text-[10px] uppercase tracking-wider text-slate-400">Pre</p>
                      </div>
                      <div className="text-[#1AB394] font-bold text-sm">
                        +{improvement}
                      </div>
                      <div>
                        <p className="text-lg font-bold text-[#1AB394]">{outcome.post}</p>
                        <p className="text-[10px] uppercase tracking-wider text-[#1AB394]">Post</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
