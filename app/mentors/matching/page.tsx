"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles } from "lucide-react";
import { potentialMatches, mentors } from "@/lib/data/mentors";
import { detailedYouth } from "@/lib/data/youth";

const scoreColor = (score: number) => {
  if (score >= 90) return "text-[#1AB394]";
  if (score >= 80) return "text-blue-600";
  if (score >= 70) return "text-amber-600";
  return "text-slate-500";
};

const scoreBg = (score: number) => {
  if (score >= 90) return "bg-[#E8F8F4] border-[#1AB394]/30";
  if (score >= 80) return "bg-blue-50 border-blue-200";
  if (score >= 70) return "bg-amber-50 border-amber-200";
  return "bg-slate-50 border-slate-200";
};

export default function MatchingPage() {
  const unmatchedMentors = mentors.filter((m) => m.currentMentees === 0 && m.status !== "inactive");
  const unmatchedYouth = detailedYouth.filter(
    (y) => y.status === "active" && !y.mentorName
  );

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

      {/* Header */}
      <div>
        <h1 className="text-2xl font-heading font-bold text-slate-900">
          Mentor Matching
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          AI-suggested mentor-youth matches based on interests, availability,
          skills, and cultural fit.
        </p>
      </div>

      {/* Match Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {potentialMatches.map((match) => (
          <Card
            key={match.id}
            className="rounded-xl shadow-sm border bg-white p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-4">
              {/* Mentor side */}
              <div className="flex-1 text-right">
                <Link href={`/mentors/${match.mentorId}`}>
                  <div className="inline-flex items-center gap-2 justify-end">
                    <div>
                      <p className="text-sm font-semibold text-slate-800 hover:text-[#1AB394] transition-colors">
                        {match.mentorName}
                      </p>
                      <p className="text-xs text-slate-400">Mentor</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#1AB394] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {match.mentorAvatar}
                    </div>
                  </div>
                </Link>
              </div>

              {/* Score circle */}
              <div
                className={`w-14 h-14 rounded-full flex flex-col items-center justify-center border-2 ${scoreBg(match.compatibilityScore)}`}
              >
                <span
                  className={`text-lg font-bold ${scoreColor(match.compatibilityScore)}`}
                >
                  {match.compatibilityScore}
                </span>
                <span className="text-[8px] text-slate-400 -mt-0.5">%</span>
              </div>

              {/* Youth side */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-bold flex-shrink-0">
                    {match.youthAvatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      {match.youthName}
                    </p>
                    <p className="text-xs text-slate-400">Youth</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Shared interests */}
            <div className="mt-3 flex flex-wrap gap-1.5 justify-center">
              {match.sharedInterests.map((interest) => (
                <Badge
                  key={interest}
                  className="bg-slate-100 text-slate-600 border-0 text-[10px]"
                >
                  {interest}
                </Badge>
              ))}
            </div>

            <p className="text-xs text-slate-400 text-center mt-2">
              {match.reason}
            </p>

            <div className="mt-3 flex justify-center">
              <Button
                size="sm"
                className="bg-[#1AB394] hover:bg-[#148F76] text-white text-xs"
              >
                <Sparkles className="h-3.5 w-3.5 mr-1" />
                Create Match
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Sidebar info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="rounded-xl shadow-sm border bg-white p-5">
          <h3 className="text-sm font-heading font-semibold text-slate-900 mb-3">
            Unmatched Mentors
          </h3>
          {unmatchedMentors.length > 0 ? (
            <div className="space-y-2">
              {unmatchedMentors.map((m) => (
                <div key={m.id} className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#1AB394] flex items-center justify-center text-white text-[10px] font-bold">
                    {m.avatar}
                  </div>
                  <span className="text-sm text-slate-600">
                    {m.firstName} {m.lastName}
                  </span>
                  <Badge className="bg-slate-100 text-slate-500 border-0 text-[10px] ml-auto">
                    {m.stage}
                  </Badge>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate-400">All mentors are matched.</p>
          )}
        </Card>

        <Card className="rounded-xl shadow-sm border bg-white p-5">
          <h3 className="text-sm font-heading font-semibold text-slate-900 mb-3">
            Unmatched Youth
          </h3>
          {unmatchedYouth.length > 0 ? (
            <div className="space-y-2">
              {unmatchedYouth.map((y) => (
                <div key={y.id} className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-[10px] font-bold">
                    {y.avatar}
                  </div>
                  <span className="text-sm text-slate-600">
                    {y.firstName} {y.lastName}
                  </span>
                  <Badge className="bg-slate-100 text-slate-500 border-0 text-[10px] ml-auto">
                    Grade {y.grade}
                  </Badge>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate-400">
              All active youth have mentors assigned.
            </p>
          )}
        </Card>
      </div>
    </div>
  );
}
