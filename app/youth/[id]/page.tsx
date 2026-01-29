"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Star,
  Trophy,
  Heart,
  Target,
  Flame,
  Mail,
  Phone,
  Calendar,
  User,
  BookOpen,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { carlosProfile } from "@/lib/data/youth";
import { YearGroupTimeline } from "@/components/youth/year-group-timeline";
import { OutcomeTrendChart } from "@/components/youth/outcome-trend-chart";
import { DigitalResume } from "@/components/youth/digital-resume";

// ---------------------------------------------------------------------------
// Static data for short-arc (Marcus) — same as original
// ---------------------------------------------------------------------------

const youth = {
  name: "Marcus Thompson",
  initials: "MT",
  age: 15,
  grade: 10,
  school: "Bronx International High School",
  schoolLink: "/partners/partner-1",
  enrolledDate: "September 15, 2025",
  status: "Active" as const,
};

const milestoneBadges = [
  {
    label: "First Drop-In",
    icon: Star,
    date: "Sept 2025",
    bg: "bg-amber-50",
    text: "text-amber-700",
    iconColor: "text-amber-500",
  },
  {
    label: "10 Sessions",
    icon: Flame,
    date: "Oct 2025",
    bg: "bg-orange-50",
    text: "text-orange-700",
    iconColor: "text-orange-500",
  },
  {
    label: "Mentor Match",
    icon: Heart,
    date: "Nov 2025",
    bg: "bg-rose-50",
    text: "text-rose-700",
    iconColor: "text-rose-500",
  },
  {
    label: "Leadership Nominated",
    icon: Trophy,
    date: "Jan 2026",
    bg: "bg-purple-50",
    text: "text-purple-700",
    iconColor: "text-purple-500",
  },
];

const outcomes: {
  label: string;
  pre: number;
  mid: number;
  post: number;
}[] = [
  { label: "Belonging", pre: 3.2, mid: 3.8, post: 4.1 },
  { label: "Confidence", pre: 2.9, mid: 3.4, post: 3.8 },
  { label: "Connection", pre: 3.0, mid: 3.5, post: 3.9 },
  { label: "Try New Things", pre: 3.3, mid: 4.0, post: 4.5 },
];

type TimelineType =
  | "enrollment"
  | "survey"
  | "session"
  | "milestone"
  | "program-change";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  type: TimelineType;
}

const timelineEvents: TimelineEvent[] = [
  {
    date: "Sept 15, 2025",
    title: "Enrolled in STOKED",
    description: "Joined through Bronx International HS partnership",
    type: "enrollment",
  },
  {
    date: "Sept 22, 2025",
    title: "Pre-Program Survey Completed",
    description: "Baseline scores recorded",
    type: "survey",
  },
  {
    date: "Sept 29, 2025",
    title: "First Risers Session",
    description: "Attended skateboarding intro at LES Skatepark",
    type: "session",
  },
  {
    date: "Oct 15, 2025",
    title: "Milestone: 10 Sessions",
    description:
      "Completed 10 consecutive sessions with 100% attendance",
    type: "milestone",
  },
  {
    date: "Nov 1, 2025",
    title: "Mid-Program Survey",
    description: "Scores improved across all 4 outcomes",
    type: "survey",
  },
  {
    date: "Nov 10, 2025",
    title: "Mentor Match: Coach Devon",
    description:
      "Paired with Coach Devon Williams for 1-on-1 mentoring",
    type: "milestone",
  },
  {
    date: "Dec 5, 2025",
    title: "Risers Program Completed",
    description: "Graduated from Risers skateboarding program",
    type: "program-change",
  },
  {
    date: "Jan 5, 2026",
    title: "Enrolled in Launchpad",
    description: "Transitioned to Launchpad snowboarding program",
    type: "program-change",
  },
  {
    date: "Jan 15, 2026",
    title: "Leadership Nominated",
    description:
      "Nominated by Coach Devon for youth leadership council",
    type: "milestone",
  },
  {
    date: "Jan 20, 2026",
    title: "Post-Program Survey",
    description: "Final scores show significant growth",
    type: "survey",
  },
];

const programs = [
  {
    name: "Risers Skateboarding",
    term: "Fall '25",
    status: "Completed" as const,
  },
  {
    name: "Launchpad Snowboarding",
    term: "Spring '26",
    status: "Active" as const,
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const dotColorMap: Record<TimelineType, string> = {
  enrollment: "bg-[#1AB394]",
  session: "bg-[#1AB394]",
  survey: "bg-amber-400",
  milestone: "bg-purple-500",
  "program-change": "bg-blue-500",
};

const ringColorMap: Record<TimelineType, string> = {
  enrollment: "ring-[#E8F8F4]",
  session: "ring-[#E8F8F4]",
  survey: "ring-amber-100",
  milestone: "ring-purple-100",
  "program-change": "ring-blue-100",
};

function scoreToPct(score: number) {
  return (score / 5) * 100;
}

const orgBadgeColors: Record<string, string> = {
  STOKED: "bg-[#E8F8F4] text-[#1AB394]",
  "UC Berkeley": "bg-blue-50 text-blue-700",
  "UC San Diego": "bg-amber-50 text-amber-700",
  "Johnson & Johnson": "bg-rose-50 text-rose-700",
};

// ---------------------------------------------------------------------------
// Carlos Layout (Long-arc, 15-year profile)
// ---------------------------------------------------------------------------

function CarlosLayout() {
  const carlos = carlosProfile;
  const [activeTab, setActiveTab] = useState("journey");

  const firstOutcome = carlos.outcomesOverTime[0];
  const lastOutcome = carlos.outcomesOverTime[carlos.outcomesOverTime.length - 1];

  return (
    <div className="space-y-6">
      <Link
        href="/partners"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-[#1AB394] transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Partners
      </Link>

      {/* Profile Header */}
      <Card className="rounded-xl shadow-sm border bg-gradient-to-r from-[#1AB394]/10 to-purple-500/5 p-6">
        <div className="flex items-start gap-5">
          <Avatar className="h-20 w-20 text-xl flex-shrink-0">
            <AvatarFallback className="bg-[#1AB394] text-white font-heading font-bold text-2xl">
              {carlos.avatar}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-2xl font-heading font-bold text-slate-900">
                {carlos.firstName} {carlos.lastName}
              </h1>
              <Badge className="bg-purple-50 text-purple-700 border-0 text-xs">
                Alumni
              </Badge>
              <Badge className="bg-amber-50 text-amber-700 border-0 text-xs">
                Board Member
              </Badge>
            </div>

            <p className="text-base font-medium text-slate-700 italic">
              &ldquo;{carlos.headline}&rdquo;
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500">
              <span className="flex items-center gap-1">
                <Briefcase className="h-3.5 w-3.5" />
                {carlos.currentRole}
              </span>
              <span className="flex items-center gap-1">
                <GraduationCap className="h-3.5 w-3.5" />
                {carlos.education}
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {carlos.organizations.map((org) => (
                <Badge
                  key={org}
                  className={`${
                    orgBadgeColors[org] || "bg-slate-100 text-slate-600"
                  } border-0 text-xs`}
                >
                  {org}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 rounded-xl shadow-sm border bg-white">
          <p className="text-sm text-slate-500">Years with STOKED</p>
          <p className="text-2xl font-heading font-bold text-slate-900">
            {carlos.yearsWithStoked}
          </p>
        </Card>
        <Card className="p-4 rounded-xl shadow-sm border bg-white">
          <p className="text-sm text-slate-500">Programs</p>
          <p className="text-2xl font-heading font-bold text-slate-900">
            {carlos.programsCount}
          </p>
        </Card>
        <Card className="p-4 rounded-xl shadow-sm border bg-white">
          <p className="text-sm text-slate-500">Organizations</p>
          <p className="text-2xl font-heading font-bold text-slate-900">
            {carlos.organizationsCount}
          </p>
        </Card>
        <Card className="p-4 rounded-xl shadow-sm border bg-white">
          <p className="text-sm text-slate-500">Outcomes Growth</p>
          <p className="text-2xl font-heading font-bold text-[#1AB394]">
            +{carlos.outcomesGrowth}%
          </p>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="journey">Journey</TabsTrigger>
          <TabsTrigger value="outcomes">Outcomes</TabsTrigger>
          <TabsTrigger value="resume">Digital Resume</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
        </TabsList>

        {/* Journey Tab */}
        <TabsContent value="journey">
          <Card className="rounded-xl shadow-sm border bg-white p-6">
            <CardHeader className="p-0 pb-4">
              <CardTitle className="text-base font-heading font-semibold text-slate-900">
                15-Year Journey
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <YearGroupTimeline events={carlos.extendedTimeline} />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Outcomes Tab */}
        <TabsContent value="outcomes">
          <div className="space-y-6">
            <Card className="rounded-xl shadow-sm border bg-white p-6">
              <CardHeader className="p-0 pb-4">
                <CardTitle className="text-base font-heading font-semibold text-slate-900">
                  Outcomes Over 15 Years (2011 - 2026)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <OutcomeTrendChart data={carlos.outcomesOverTime} />
              </CardContent>
            </Card>

            {/* Growth summary cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {(["belonging", "confidence", "connection", "tryNewThings", "leadership", "resilience"] as const).map(
                (metric) => {
                  const start = firstOutcome[metric];
                  const end = lastOutcome[metric];
                  const growth = ((end - start) / start * 100).toFixed(0);
                  const labels: Record<string, string> = {
                    belonging: "Belonging",
                    confidence: "Confidence",
                    connection: "Connection",
                    tryNewThings: "Try New Things",
                    leadership: "Leadership",
                    resilience: "Resilience",
                  };
                  return (
                    <Card key={metric} className="p-3 rounded-xl shadow-sm border bg-white">
                      <p className="text-xs text-slate-400">{labels[metric]}</p>
                      <p className="text-lg font-heading font-bold text-slate-900">
                        {start} &rarr; {end}
                      </p>
                      <p className="text-xs font-medium text-[#1AB394]">
                        +{growth}%
                      </p>
                    </Card>
                  );
                }
              )}
            </div>
          </div>
        </TabsContent>

        {/* Digital Resume Tab */}
        <TabsContent value="resume">
          <Card className="rounded-xl shadow-sm border bg-white p-6">
            <CardHeader className="p-0 pb-4">
              <CardTitle className="text-base font-heading font-semibold text-slate-900">
                Digital Resume
              </CardTitle>
              <p className="text-sm text-slate-500 mt-1">
                Verified credentials across organizations. This follows him everywhere.
              </p>
            </CardHeader>
            <CardContent className="p-0">
              <DigitalResume items={carlos.digitalResume} />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Timeline Tab (simple vertical) */}
        <TabsContent value="timeline">
          <Card className="rounded-xl shadow-sm border bg-white p-6">
            <CardHeader className="p-0 pb-5">
              <CardTitle className="text-base font-heading font-semibold text-slate-900">
                Full Timeline ({carlos.extendedTimeline.length} Events)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative pl-8">
                <div className="absolute left-[9px] top-2 bottom-2 w-0.5 bg-slate-200" />
                <div className="space-y-6">
                  {carlos.extendedTimeline.map((event) => {
                    const dotColor: Record<string, string> = {
                      enrollment: "bg-[#1AB394]",
                      survey: "bg-amber-400",
                      session: "bg-[#1AB394]",
                      milestone: "bg-purple-500",
                      "program-change": "bg-blue-500",
                      certification: "bg-emerald-500",
                      opportunity: "bg-cyan-500",
                      "cross-org": "bg-indigo-500",
                      career: "bg-rose-500",
                      education: "bg-orange-500",
                      board: "bg-violet-500",
                      recognition: "bg-pink-500",
                    };
                    const ringColor: Record<string, string> = {
                      enrollment: "ring-[#E8F8F4]",
                      survey: "ring-amber-100",
                      session: "ring-[#E8F8F4]",
                      milestone: "ring-purple-100",
                      "program-change": "ring-blue-100",
                      certification: "ring-emerald-100",
                      opportunity: "ring-cyan-100",
                      "cross-org": "ring-indigo-100",
                      career: "ring-rose-100",
                      education: "ring-orange-100",
                      board: "ring-violet-100",
                      recognition: "ring-pink-100",
                    };
                    return (
                      <div key={event.id} className="relative flex gap-4">
                        <div
                          className={`absolute -left-8 top-1 h-[18px] w-[18px] rounded-full ring-4 ${
                            dotColor[event.type] || "bg-slate-400"
                          } ${
                            ringColor[event.type] || "ring-slate-100"
                          } flex items-center justify-center`}
                        >
                          <span className="h-2 w-2 rounded-full bg-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-slate-400 mb-0.5">
                            {new Date(event.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </p>
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-semibold text-slate-800">
                              {event.title}
                            </p>
                            <Badge
                              className={`${
                                orgBadgeColors[event.organization] ||
                                "bg-slate-100 text-slate-600"
                              } border-0 text-[10px]`}
                            >
                              {event.organization}
                            </Badge>
                          </div>
                          <p className="text-sm text-slate-500 mt-0.5">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Marcus Layout (Short-arc, existing layout preserved)
// ---------------------------------------------------------------------------

function MarcusLayout() {
  return (
    <div className="space-y-6">
      {/* Back link */}
      <Link
        href="/partners"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-[#1AB394] transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Partners
      </Link>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6">
        {/* ===== LEFT COLUMN ===== */}
        <div className="space-y-6">
          {/* ---------- Profile Header ---------- */}
          <Card className="rounded-xl shadow-sm border bg-white p-6">
            <div className="flex items-start gap-5">
              {/* Avatar */}
              <Avatar className="h-20 w-20 text-xl">
                <AvatarFallback className="bg-[#1AB394] text-white font-heading font-bold text-2xl">
                  {youth.initials}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 space-y-1.5">
                <div className="flex items-center gap-3 flex-wrap">
                  <h1 className="text-2xl font-heading font-bold text-slate-900">
                    {youth.name}
                  </h1>
                  <Badge className="bg-[#22C55E]/10 text-[#22C55E] border-[#22C55E]/20 hover:bg-[#22C55E]/20">
                    {youth.status}
                  </Badge>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500">
                  <span className="flex items-center gap-1">
                    <User className="h-3.5 w-3.5" />
                    Age {youth.age}, Grade {youth.grade}
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="h-3.5 w-3.5" />
                    <Link
                      href={youth.schoolLink}
                      className="text-[#1AB394] hover:underline"
                    >
                      {youth.school}
                    </Link>
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    Enrolled {youth.enrolledDate}
                  </span>
                </div>
              </div>
            </div>
          </Card>

          {/* ---------- Milestone Badges ---------- */}
          <Card className="rounded-xl shadow-sm border bg-white p-6">
            <CardHeader className="p-0 pb-4">
              <CardTitle className="text-base font-heading font-semibold text-slate-900">
                Milestone Badges
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="flex flex-wrap gap-3">
                {milestoneBadges.map((badge) => {
                  const Icon = badge.icon;
                  return (
                    <div
                      key={badge.label}
                      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 ${badge.bg}`}
                    >
                      <Icon className={`h-4 w-4 ${badge.iconColor}`} />
                      <span
                        className={`text-sm font-semibold ${badge.text}`}
                      >
                        {badge.label}
                      </span>
                      <span className="text-xs text-slate-400">
                        {badge.date}
                      </span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* ---------- Outcomes Progress ---------- */}
          <Card className="rounded-xl shadow-sm border bg-white p-6">
            <CardHeader className="p-0 pb-4">
              <CardTitle className="text-base font-heading font-semibold text-slate-900">
                Outcomes Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {/* Legend */}
              <div className="flex items-center gap-5 mb-5 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-slate-300" />
                  Pre
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-amber-400" />
                  Mid
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#1AB394]" />
                  Post
                </span>
              </div>

              <div className="space-y-5">
                {outcomes.map((o) => (
                  <div key={o.label}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700">
                        {o.label}
                      </span>
                      <span className="text-xs text-slate-400">
                        {o.pre} &rarr; {o.mid} &rarr; {o.post}
                      </span>
                    </div>

                    {/* Stacked progress bars */}
                    <div className="relative h-3 w-full rounded-full bg-slate-100 overflow-hidden">
                      {/* Post (full width, back layer) */}
                      <div
                        className="absolute inset-y-0 left-0 rounded-full bg-[#1AB394] transition-all"
                        style={{ width: `${scoreToPct(o.post)}%` }}
                      />
                      {/* Mid */}
                      <div
                        className="absolute inset-y-0 left-0 rounded-full bg-amber-400 transition-all"
                        style={{ width: `${scoreToPct(o.mid)}%` }}
                      />
                      {/* Pre (top layer, shortest) */}
                      <div
                        className="absolute inset-y-0 left-0 rounded-full bg-slate-300 transition-all"
                        style={{ width: `${scoreToPct(o.pre)}%` }}
                      />
                    </div>

                    {/* Dot markers */}
                    <div className="relative mt-1 h-4">
                      <div
                        className="absolute -translate-x-1/2 flex flex-col items-center"
                        style={{ left: `${scoreToPct(o.pre)}%` }}
                      >
                        <span className="inline-block h-2 w-2 rounded-full bg-slate-400" />
                      </div>
                      <div
                        className="absolute -translate-x-1/2 flex flex-col items-center"
                        style={{ left: `${scoreToPct(o.mid)}%` }}
                      >
                        <span className="inline-block h-2 w-2 rounded-full bg-amber-400" />
                      </div>
                      <div
                        className="absolute -translate-x-1/2 flex flex-col items-center"
                        style={{ left: `${scoreToPct(o.post)}%` }}
                      >
                        <span className="inline-block h-2 w-2 rounded-full bg-[#1AB394]" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* ---------- Journey Timeline ---------- */}
          <Card className="rounded-xl shadow-sm border bg-white p-6">
            <CardHeader className="p-0 pb-5">
              <CardTitle className="text-base font-heading font-semibold text-slate-900">
                Journey Timeline
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative pl-8">
                {/* Vertical line */}
                <div className="absolute left-[9px] top-2 bottom-2 w-0.5 bg-slate-200" />

                <div className="space-y-6">
                  {timelineEvents.map((event, idx) => (
                    <div key={idx} className="relative flex gap-4">
                      {/* Dot */}
                      <div
                        className={`absolute -left-8 top-1 h-[18px] w-[18px] rounded-full ring-4 ${dotColorMap[event.type]} ${ringColorMap[event.type]} flex items-center justify-center`}
                      >
                        <span className="h-2 w-2 rounded-full bg-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-slate-400 mb-0.5">
                          {event.date}
                        </p>
                        <p className="text-sm font-semibold text-slate-800">
                          {event.title}
                        </p>
                        <p className="text-sm text-slate-500 mt-0.5">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ===== RIGHT COLUMN (Sidebar) ===== */}
        <div className="space-y-6">
          {/* ---------- Assigned Coach ---------- */}
          <Card className="rounded-xl shadow-sm border bg-white p-6">
            <CardHeader className="p-0 pb-4">
              <CardTitle className="text-base font-heading font-semibold text-slate-900">
                Assigned Coach
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-blue-100 text-blue-700 font-heading font-bold">
                    DW
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    Devon Williams
                  </p>
                  <p className="text-xs text-slate-500">
                    Status:{" "}
                    <span className="text-[#22C55E] font-medium">
                      Active
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="secondary"
                  className="text-xs bg-slate-100 text-slate-600"
                >
                  Skate Certified
                </Badge>
                <Badge
                  variant="secondary"
                  className="text-xs bg-slate-100 text-slate-600"
                >
                  Mentor 101
                </Badge>
              </div>

              <Button className="w-full bg-[#1AB394] hover:bg-[#148F76] text-white">
                <Mail className="h-4 w-4" />
                Message Coach
              </Button>
            </CardContent>
          </Card>

          {/* ---------- Mentor Match ---------- */}
          <Card className="rounded-xl shadow-sm border bg-white p-6">
            <CardHeader className="p-0 pb-4">
              <CardTitle className="text-base font-heading font-semibold text-slate-900">
                Mentor Match
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-3">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-purple-100 text-purple-700 font-heading font-bold text-sm">
                    DW
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    Coach Devon Williams
                  </p>
                </div>
              </div>
              <Separator />
              <div className="space-y-2 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5 text-slate-400" />
                  <span>Matched since Nov 10, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-3.5 w-3.5 text-slate-400" />
                  <span>Meeting frequency: Bi-weekly</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ---------- Emergency Contact ---------- */}
          <Card className="rounded-xl shadow-sm border bg-white p-6">
            <CardHeader className="p-0 pb-4">
              <CardTitle className="text-base font-heading font-semibold text-slate-900">
                Emergency Contact
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-3">
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-slate-700">
                  <User className="h-3.5 w-3.5 text-slate-400" />
                  <span className="font-medium">Patricia Thompson</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <Heart className="h-3.5 w-3.5 text-slate-400" />
                  <span>Mother</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <Phone className="h-3.5 w-3.5 text-slate-400" />
                  <span>(718) 555-0142</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ---------- Programs ---------- */}
          <Card className="rounded-xl shadow-sm border bg-white p-6">
            <CardHeader className="p-0 pb-4">
              <CardTitle className="text-base font-heading font-semibold text-slate-900">
                Programs
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-3">
              {programs.map((prog) => (
                <div
                  key={prog.name}
                  className="flex items-center justify-between text-sm"
                >
                  <div>
                    <p className="font-medium text-slate-700">
                      {prog.name}
                    </p>
                    <p className="text-xs text-slate-400">{prog.term}</p>
                  </div>
                  {prog.status === "Completed" ? (
                    <Badge className="bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-100">
                      Completed &#10003;
                    </Badge>
                  ) : (
                    <Badge className="bg-[#22C55E]/10 text-[#22C55E] border-[#22C55E]/20 hover:bg-[#22C55E]/20">
                      Active
                    </Badge>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main Component — routes between layouts
// ---------------------------------------------------------------------------

export default function YouthProfilePage() {
  const params = useParams();
  const id = params.id as string;

  if (id === "youth-carlos") {
    return <CarlosLayout />;
  }

  // Default: Marcus / short-arc layout
  return <MarcusLayout />;
}
