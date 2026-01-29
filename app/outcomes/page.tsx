"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Separator } from "@/components/ui/separator";
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
import {
  FileText,
  Download,
  Share2,
  Target,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

// --- Data ---

const kpiData = [
  {
    label: "Belonging",
    current: 82,
    target: 80,
    status: "green" as const,
    statusLabel: "Exceeding",
  },
  {
    label: "Confidence",
    current: 74,
    target: 75,
    status: "amber" as const,
    statusLabel: "Approaching",
  },
  {
    label: "Connection",
    current: 78,
    target: 75,
    status: "green" as const,
    statusLabel: "Exceeding",
  },
  {
    label: "Try New Things",
    current: 85,
    target: 80,
    status: "green" as const,
    statusLabel: "Exceeding",
  },
];

const growthData = [
  {
    window: "Pre-Survey",
    belonging: 3.1,
    confidence: 2.8,
    connection: 2.9,
    tryNewThings: 3.0,
  },
  {
    window: "Mid-Survey",
    belonging: 3.6,
    confidence: 3.3,
    connection: 3.4,
    tryNewThings: 3.7,
  },
  {
    window: "Post-Survey",
    belonging: 4.1,
    confidence: 3.7,
    connection: 3.9,
    tryNewThings: 4.3,
  },
];

const partnerComparison = [
  {
    partner: "Bronx Intl",
    belonging: 4.2,
    confidence: 3.9,
    connection: 4.0,
    tryNewThings: 4.4,
  },
  {
    partner: "Eagle Academy",
    belonging: 4.0,
    confidence: 3.6,
    connection: 3.8,
    tryNewThings: 4.1,
  },
  {
    partner: "Bronx Lab",
    belonging: 3.9,
    confidence: 3.5,
    connection: 3.7,
    tryNewThings: 4.0,
  },
  {
    partner: "Mott Hall",
    belonging: 4.1,
    confidence: 3.8,
    connection: 3.9,
    tryNewThings: 4.3,
  },
  {
    partner: "Fannie Lou",
    belonging: 3.8,
    confidence: 3.4,
    connection: 3.6,
    tryNewThings: 3.9,
  },
];

const surveyCompletion = [
  { label: "Pre-Survey", completed: 260, total: 283, percent: 92 },
  { label: "Mid-Survey", completed: 220, total: 283, percent: 78 },
  { label: "Post-Survey", completed: 195, total: 283, percent: 69 },
];

const COLORS = {
  belonging: "#1AB394",
  confidence: "#3B82F6",
  connection: "#8B5CF6",
  tryNewThings: "#F59E0B",
};

// --- Helpers ---

function statusDotColor(status: "green" | "amber" | "red") {
  if (status === "green") return "bg-[#22C55E]";
  if (status === "amber") return "bg-[#F59E0B]";
  return "bg-[#EF4444]";
}

function statusBadgeStyle(status: "green" | "amber" | "red") {
  if (status === "green")
    return "bg-green-50 text-green-700 border-green-200";
  if (status === "amber")
    return "bg-amber-50 text-amber-700 border-amber-200";
  return "bg-red-50 text-red-700 border-red-200";
}

function surveyBarColor(percent: number) {
  if (percent >= 85) return "#22C55E";
  return "#F59E0B";
}

// --- Page ---

export default function OutcomesPage() {
  const [reportOpen, setReportOpen] = useState(false);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-heading font-bold text-slate-900">
            Outcomes Dashboard
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Youth outcome metrics across all programs and partners
          </p>
        </div>
        <Dialog open={reportOpen} onOpenChange={setReportOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[#1AB394] hover:bg-[#148F76] text-white gap-2">
              <FileText className="h-4 w-4" />
              Generate Funder Report
            </Button>
          </DialogTrigger>
          <FunderReportModal />
        </Dialog>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiData.map((kpi) => (
          <Card
            key={kpi.label}
            className="p-6 rounded-xl shadow-sm border bg-white"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-slate-500">
                  {kpi.label}
                </p>
                <p className="text-3xl font-heading font-bold text-slate-900">
                  {kpi.current}%
                </p>
                <div className="flex items-center gap-2">
                  <Target className="h-3.5 w-3.5 text-slate-400" />
                  <span className="text-xs text-slate-400">
                    Target: {kpi.target}%
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div
                  className={`h-3 w-3 rounded-full ${statusDotColor(
                    kpi.status
                  )}`}
                />
                <Badge
                  className={`text-[10px] font-medium border ${statusBadgeStyle(
                    kpi.status
                  )}`}
                >
                  {kpi.statusLabel}
                </Badge>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Growth Over Time */}
        <Card className="p-6 rounded-xl shadow-sm border bg-white">
          <div className="flex items-center gap-2 mb-5">
            <TrendingUp className="h-4 w-4 text-[#1AB394]" />
            <h3 className="text-sm font-heading font-semibold text-slate-900">
              Growth Over Time
            </h3>
          </div>
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis
                  dataKey="window"
                  tick={{ fontSize: 12, fill: "#94A3B8" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  domain={[1, 5]}
                  ticks={[1, 2, 3, 4, 5]}
                  tick={{ fontSize: 12, fill: "#94A3B8" }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: "8px",
                    border: "1px solid #E2E8F0",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    fontSize: "12px",
                  }}
                />
                <Legend
                  verticalAlign="bottom"
                  height={36}
                  iconType="circle"
                  wrapperStyle={{ fontSize: "12px" }}
                />
                <Line
                  type="monotone"
                  dataKey="belonging"
                  name="Belonging"
                  stroke={COLORS.belonging}
                  strokeWidth={2.5}
                  dot={{ r: 4, fill: COLORS.belonging }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="confidence"
                  name="Confidence"
                  stroke={COLORS.confidence}
                  strokeWidth={2.5}
                  dot={{ r: 4, fill: COLORS.confidence }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="connection"
                  name="Connection"
                  stroke={COLORS.connection}
                  strokeWidth={2.5}
                  dot={{ r: 4, fill: COLORS.connection }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="tryNewThings"
                  name="Try New Things"
                  stroke={COLORS.tryNewThings}
                  strokeWidth={2.5}
                  dot={{ r: 4, fill: COLORS.tryNewThings }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* By Partner Comparison */}
        <Card className="p-6 rounded-xl shadow-sm border bg-white">
          <div className="flex items-center gap-2 mb-5">
            <CheckCircle className="h-4 w-4 text-[#1AB394]" />
            <h3 className="text-sm font-heading font-semibold text-slate-900">
              By Partner Comparison
            </h3>
          </div>
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={partnerComparison}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis
                  dataKey="partner"
                  tick={{ fontSize: 11, fill: "#94A3B8" }}
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
                    fontSize: "12px",
                  }}
                />
                <Legend
                  verticalAlign="bottom"
                  height={36}
                  iconType="circle"
                  wrapperStyle={{ fontSize: "12px" }}
                />
                <Bar
                  dataKey="belonging"
                  name="Belonging"
                  fill={COLORS.belonging}
                  radius={[3, 3, 0, 0]}
                />
                <Bar
                  dataKey="confidence"
                  name="Confidence"
                  fill={COLORS.confidence}
                  radius={[3, 3, 0, 0]}
                />
                <Bar
                  dataKey="connection"
                  name="Connection"
                  fill={COLORS.connection}
                  radius={[3, 3, 0, 0]}
                />
                <Bar
                  dataKey="tryNewThings"
                  name="Try New Things"
                  fill={COLORS.tryNewThings}
                  radius={[3, 3, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Survey Completion */}
      <Card className="p-6 rounded-xl shadow-sm border bg-white">
        <h3 className="text-sm font-heading font-semibold text-slate-900 mb-5">
          Survey Completion
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {surveyCompletion.map((survey) => (
            <div key={survey.label} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-600">
                  {survey.label}
                </span>
                <span className="text-sm font-semibold text-slate-900">
                  {survey.percent}%
                </span>
              </div>
              <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{
                    width: `${survey.percent}%`,
                    backgroundColor: surveyBarColor(survey.percent),
                  }}
                />
              </div>
              <p className="text-xs text-slate-400">
                {survey.completed} / {survey.total} responses
              </p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

// --- Funder Report Modal ---

function FunderReportModal() {
  return (
    <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-lg font-heading font-bold text-slate-900">
          Funder Impact Report Preview
        </DialogTitle>
      </DialogHeader>

      {/* PDF-style Preview */}
      <div className="border rounded-lg bg-white p-8 space-y-6 mt-2">
        {/* Header */}
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-heading font-bold text-[#1AB394]">
            STOKED
          </h2>
          <p className="text-lg font-heading font-semibold text-slate-700">
            Funder Impact Report
          </p>
          <p className="text-sm text-slate-500">
            Fall 2025 &ndash; Spring 2026
          </p>
          <p className="text-sm text-slate-500">Organization: STOKED NYC</p>
        </div>

        <Separator />

        {/* Executive Summary */}
        <section>
          <h3 className="text-sm font-heading font-bold text-slate-900 uppercase tracking-wider mb-2">
            Executive Summary
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            STOKED NYC served 283 youth across 12 partner schools in the
            2025-2026 program year. Our youth demonstrated measurable growth
            across all four outcome areas.
          </p>
        </section>

        <Separator />

        {/* Enrollment */}
        <section>
          <h3 className="text-sm font-heading font-bold text-slate-900 uppercase tracking-wider mb-2">
            Enrollment
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            283 youth enrolled across 9 programs at 12 partner schools, a 12%
            increase from the prior year.
          </p>
        </section>

        <Separator />

        {/* Attendance */}
        <section>
          <h3 className="text-sm font-heading font-bold text-slate-900 uppercase tracking-wider mb-2">
            Attendance
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Average attendance rate of 80%, exceeding our 75% target. Attendance
            trended upward throughout the program year.
          </p>
        </section>

        <Separator />

        {/* Outcomes Overview */}
        <section>
          <h3 className="text-sm font-heading font-bold text-slate-900 uppercase tracking-wider mb-3">
            Outcomes Overview
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              {
                label: "Belonging",
                pre: 3.1,
                post: 4.1,
                growth: 32,
                color: COLORS.belonging,
              },
              {
                label: "Confidence",
                pre: 2.8,
                post: 3.7,
                growth: 32,
                color: COLORS.confidence,
              },
              {
                label: "Connection",
                pre: 2.9,
                post: 3.9,
                growth: 34,
                color: COLORS.connection,
              },
              {
                label: "Try New Things",
                pre: 3.0,
                post: 4.3,
                growth: 43,
                color: COLORS.tryNewThings,
              },
            ].map((outcome) => (
              <div
                key={outcome.label}
                className="flex items-center gap-3 bg-slate-50 rounded-lg p-3"
              >
                <div
                  className="h-2.5 w-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: outcome.color }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-800">
                    {outcome.label}
                  </p>
                  <p className="text-xs text-slate-500">
                    {outcome.pre} &rarr; {outcome.post}
                  </p>
                </div>
                <Badge className="bg-green-50 text-green-700 border border-green-200 text-xs font-semibold">
                  +{outcome.growth}%
                </Badge>
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* Youth Spotlight */}
        <section>
          <h3 className="text-sm font-heading font-bold text-slate-900 uppercase tracking-wider mb-2">
            Youth Spotlight
          </h3>
          <div className="bg-[#E8F8F4] rounded-lg p-4">
            <p className="text-sm text-slate-700 leading-relaxed">
              <span className="font-semibold">Marcus T., age 15</span>,
              enrolled at Bronx International HS. Over 3 months, his belonging
              score rose from 3.2 to 4.1. He was nominated for the Youth
              Leadership Council.
            </p>
          </div>
        </section>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-end gap-3 pt-2">
        <Button variant="outline" className="gap-2">
          <Share2 className="h-4 w-4" />
          Share Link
        </Button>
        <Button className="bg-[#1AB394] hover:bg-[#148F76] text-white gap-2">
          <Download className="h-4 w-4" />
          Download PDF
        </Button>
      </div>
    </DialogContent>
  );
}
