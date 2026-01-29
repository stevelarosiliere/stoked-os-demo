"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Clock,
  Users,
  Award,
  TrendingUp,
} from "lucide-react";
import { mentors, type MentorJourneyStage } from "@/lib/data/mentors";
import { JourneyStageBar } from "@/components/shared/journey-stage-bar";
import { MentorHoursChart, MenteeOutcomesChart } from "@/components/mentors/mentor-impact-chart";
import { MentorTimeline } from "@/components/mentors/mentor-timeline";

const stageColors: Record<MentorJourneyStage, string> = {
  New: "bg-blue-50 text-blue-700",
  Active: "bg-green-50 text-green-700",
  Lead: "bg-purple-50 text-purple-700",
  Coach: "bg-amber-50 text-amber-700",
  Alumni: "bg-slate-100 text-slate-600",
};

const statusColors: Record<string, string> = {
  active: "bg-[#22C55E]/10 text-[#22C55E]",
  inactive: "bg-red-50 text-red-600",
  onboarding: "bg-blue-50 text-blue-600",
};

const matchQualityColors: Record<string, string> = {
  Excellent: "bg-[#E8F8F4] text-[#1AB394]",
  Good: "bg-blue-50 text-blue-700",
  Fair: "bg-amber-50 text-amber-700",
};

export default function MentorDetailPage() {
  const params = useParams();
  const mentorId = params.id as string;
  const mentor = mentors.find((m) => m.id === mentorId);
  const [activeTab, setActiveTab] = useState("profile");

  if (!mentor) {
    return (
      <div className="space-y-6">
        <Link
          href="/mentors"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-[#1AB394] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Mentors
        </Link>
        <p className="text-slate-500">Mentor not found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Back link */}
      <Link
        href="/mentors"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-[#1AB394] transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Mentors
      </Link>

      {/* Gradient Header */}
      <Card className="rounded-xl shadow-sm border bg-gradient-to-r from-[#1AB394]/10 to-[#1AB394]/5 p-6">
        <div className="flex items-start gap-5">
          <div className="w-16 h-16 rounded-full bg-[#1AB394] flex items-center justify-center text-white text-xl font-heading font-bold flex-shrink-0">
            {mentor.avatar}
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-2xl font-heading font-bold text-slate-900">
                {mentor.firstName} {mentor.lastName}
              </h1>
              <Badge className={`${stageColors[mentor.stage]} border-0 text-xs font-medium`}>
                {mentor.stage}
              </Badge>
              <Badge className={`${statusColors[mentor.status]} border-0 text-xs font-medium capitalize`}>
                {mentor.status}
              </Badge>
            </div>
            <p className="text-sm text-slate-600">{mentor.bio}</p>
          </div>
        </div>
      </Card>

      {/* KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 rounded-xl shadow-sm border bg-white">
          <div className="flex items-center gap-2 mb-1">
            <Clock className="h-4 w-4 text-slate-400" />
            <p className="text-sm text-slate-500">Hours Logged</p>
          </div>
          <p className="text-2xl font-heading font-bold text-slate-900">
            {mentor.hoursLogged}
          </p>
        </Card>
        <Card className="p-4 rounded-xl shadow-sm border bg-white">
          <div className="flex items-center gap-2 mb-1">
            <Users className="h-4 w-4 text-slate-400" />
            <p className="text-sm text-slate-500">Current Mentees</p>
          </div>
          <p className="text-2xl font-heading font-bold text-slate-900">
            {mentor.currentMentees}
          </p>
        </Card>
        <Card className="p-4 rounded-xl shadow-sm border bg-white">
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp className="h-4 w-4 text-slate-400" />
            <p className="text-sm text-slate-500">Impact Score</p>
          </div>
          <p className="text-2xl font-heading font-bold text-[#1AB394]">
            {mentor.impactScore > 0 ? mentor.impactScore : "N/A"}
          </p>
        </Card>
        <Card className="p-4 rounded-xl shadow-sm border bg-white">
          <div className="flex items-center gap-2 mb-1">
            <Award className="h-4 w-4 text-slate-400" />
            <p className="text-sm text-slate-500">Certifications</p>
          </div>
          <p className="text-2xl font-heading font-bold text-slate-900">
            {mentor.certifications.length}
          </p>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="mentees">Mentees</TabsTrigger>
          <TabsTrigger value="journey">Journey</TabsTrigger>
          <TabsTrigger value="impact">Impact</TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="rounded-xl shadow-sm border bg-white p-6">
              <CardHeader className="p-0 pb-4">
                <CardTitle className="text-base font-heading font-semibold text-slate-900">
                  About
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-4">
                <p className="text-sm text-slate-600">{mentor.bio}</p>

                <div>
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-2">
                    Skills
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {mentor.skills.map((skill) => (
                      <Badge
                        key={skill}
                        className="bg-[#E8F8F4] text-[#1AB394] border-0 text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-2">
                    Interests
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {mentor.interests.map((interest) => (
                      <Badge
                        key={interest}
                        className="bg-slate-100 text-slate-600 border-0 text-xs"
                      >
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-1">
                    Availability
                  </p>
                  <p className="text-sm text-slate-600">{mentor.availability}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl shadow-sm border bg-white p-6">
              <CardHeader className="p-0 pb-4">
                <CardTitle className="text-base font-heading font-semibold text-slate-900">
                  Training Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-4">
                {mentor.trainingProgress.map((tp) => (
                  <div key={tp.moduleId}>
                    <div className="flex items-center justify-between mb-1.5">
                      <Link
                        href={`/training/${tp.moduleId}`}
                        className="text-sm font-medium text-slate-700 hover:text-[#1AB394] transition-colors"
                      >
                        {tp.moduleName}
                      </Link>
                      <span className="text-xs text-slate-400">
                        {tp.progress}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[#1AB394]"
                        style={{ width: `${tp.progress}%` }}
                      />
                    </div>
                  </div>
                ))}

                {mentor.certifications.length > 0 && (
                  <div className="pt-2 border-t border-slate-100">
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-2">
                      Certifications
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {mentor.certifications.map((cert) => (
                        <Badge
                          key={cert}
                          className="bg-[#E8F8F4] text-[#1AB394] border-0 text-xs"
                        >
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Mentees Tab */}
        <TabsContent value="mentees">
          <div className="space-y-4">
            {mentor.mentees.length > 0 ? (
              <>
                <h3 className="text-sm font-heading font-semibold text-slate-700">
                  {mentor.mentees.filter((m) => m.status === "active").length > 0
                    ? "Current Matches"
                    : "Past Matches"}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mentor.mentees.map((match) => (
                    <Card
                      key={match.youthId}
                      className="rounded-xl shadow-sm border bg-white p-5"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-bold">
                            {match.youthName
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-slate-800">
                              {match.youthName}
                            </p>
                            <Badge
                              className={`${
                                match.status === "active"
                                  ? "bg-green-50 text-green-700"
                                  : "bg-slate-100 text-slate-600"
                              } border-0 text-[10px] mt-0.5`}
                            >
                              {match.status}
                            </Badge>
                          </div>
                        </div>
                        <Badge
                          className={`${matchQualityColors[match.matchQuality]} border-0 text-xs`}
                        >
                          {match.matchQuality}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-6 text-sm text-slate-500">
                        <span>{match.sessions} sessions</span>
                        {match.outcomesImprovement > 0 && (
                          <span className="text-[#1AB394] font-medium">
                            +{match.outcomesImprovement}% outcomes
                          </span>
                        )}
                      </div>
                    </Card>
                  ))}
                </div>
              </>
            ) : (
              <Card className="rounded-xl shadow-sm border bg-white p-6">
                <p className="text-sm text-slate-500">
                  No mentees assigned yet. This mentor is still completing
                  training.
                </p>
              </Card>
            )}
          </div>
        </TabsContent>

        {/* Journey Tab */}
        <TabsContent value="journey">
          <div className="space-y-6">
            <Card className="rounded-xl shadow-sm border bg-white p-6">
              <CardHeader className="p-0 pb-6">
                <CardTitle className="text-base font-heading font-semibold text-slate-900">
                  Journey Stage
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <JourneyStageBar currentStage={mentor.stage} />
              </CardContent>
            </Card>

            <Card className="rounded-xl shadow-sm border bg-white p-6">
              <CardHeader className="p-0 pb-5">
                <CardTitle className="text-base font-heading font-semibold text-slate-900">
                  Timeline
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <MentorTimeline events={mentor.timeline} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Impact Tab */}
        <TabsContent value="impact">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="p-4 rounded-xl shadow-sm border bg-white">
                <p className="text-sm text-slate-500">Total Hours</p>
                <p className="text-2xl font-heading font-bold text-slate-900">
                  {mentor.hoursLogged}
                </p>
              </Card>
              <Card className="p-4 rounded-xl shadow-sm border bg-white">
                <p className="text-sm text-slate-500">Mentees Served</p>
                <p className="text-2xl font-heading font-bold text-slate-900">
                  {mentor.mentees.length}
                </p>
              </Card>
              <Card className="p-4 rounded-xl shadow-sm border bg-white">
                <p className="text-sm text-slate-500">Impact Score</p>
                <p className="text-2xl font-heading font-bold text-[#1AB394]">
                  {mentor.impactScore > 0 ? mentor.impactScore : "N/A"}
                </p>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <MentorHoursChart data={mentor.hoursOverTime} />
              {mentor.menteeOutcomes.length > 0 && (
                <MenteeOutcomesChart data={mentor.menteeOutcomes} />
              )}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
