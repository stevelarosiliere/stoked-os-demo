"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Video,
  BookOpen,
  HelpCircle,
  FileText,
  ClipboardCheck,
  CheckCircle2,
  Clock,
  Lock,
  Award,
  ShieldCheck,
} from "lucide-react";
import {
  trainingModules,
  disengagedMenteeProtocol,
  type TrainingLevel,
} from "@/lib/data/training";
import { ProtocolTreeView } from "@/components/training/protocol-tree";

const levelColors: Record<TrainingLevel, string> = {
  Foundation: "bg-[#E8F8F4] text-[#1AB394]",
  Advanced: "bg-blue-50 text-blue-700",
  Specialty: "bg-purple-50 text-purple-700",
};

const levelGradients: Record<TrainingLevel, string> = {
  Foundation: "from-[#1AB394]/10 to-[#1AB394]/5",
  Advanced: "from-blue-500/10 to-blue-500/5",
  Specialty: "from-purple-500/10 to-purple-500/5",
};

const lessonTypeIcons: Record<string, typeof Video> = {
  video: Video,
  reading: BookOpen,
  quiz: HelpCircle,
  scenario: FileText,
  assessment: ClipboardCheck,
};

const statusIcons: Record<string, { icon: typeof CheckCircle2; color: string }> = {
  completed: { icon: CheckCircle2, color: "text-[#22C55E]" },
  "in-progress": { icon: Clock, color: "text-amber-500" },
  locked: { icon: Lock, color: "text-slate-300" },
};

export default function TrainingDetailPage() {
  const params = useParams();
  const moduleId = params.id as string;
  const mod = trainingModules.find((m) => m.id === moduleId);
  const [activeTab, setActiveTab] = useState("lessons");

  if (!mod) {
    return (
      <div className="space-y-6">
        <Link
          href="/training"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-[#1AB394] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Training
        </Link>
        <p className="text-slate-500">Module not found.</p>
      </div>
    );
  }

  const showProtocol = mod.id === "training-6";
  const isFullyCertified = mod.progress === 100;

  return (
    <div className="space-y-6">
      {/* Back link */}
      <Link
        href="/training"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-[#1AB394] transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Training
      </Link>

      {/* Gradient Header */}
      <Card
        className={`rounded-xl shadow-sm border bg-gradient-to-r ${levelGradients[mod.level]} p-6`}
      >
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <Badge
              className={`${levelColors[mod.level]} border-0 text-xs font-medium`}
            >
              {mod.level}
            </Badge>
            <h1 className="text-2xl font-heading font-bold text-slate-900">
              {mod.title}
            </h1>
            <p className="text-sm text-slate-600 max-w-2xl">{mod.description}</p>
            <div className="flex items-center gap-2 pt-1">
              <Award className="h-4 w-4 text-slate-400" />
              <span className="text-sm text-slate-500">
                Certification: {mod.certificationName}
              </span>
            </div>
          </div>
        </div>
      </Card>

      {/* KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 rounded-xl shadow-sm border bg-white">
          <p className="text-sm text-slate-500">Lessons Completed</p>
          <p className="text-2xl font-heading font-bold text-slate-900">
            {mod.lessonsCompleted}/{mod.totalLessons}
          </p>
        </Card>
        <Card className="p-4 rounded-xl shadow-sm border bg-white">
          <p className="text-sm text-slate-500">Time Spent</p>
          <p className="text-2xl font-heading font-bold text-slate-900">
            {Math.round(mod.estimatedHours * (mod.progress / 100))}h / {mod.estimatedHours}h
          </p>
        </Card>
        <Card className="p-4 rounded-xl shadow-sm border bg-white">
          <p className="text-sm text-slate-500">Assessment Status</p>
          <p
            className={`text-2xl font-heading font-bold ${
              isFullyCertified
                ? "text-[#22C55E]"
                : mod.progress >= 80
                ? "text-amber-500"
                : "text-slate-400"
            }`}
          >
            {isFullyCertified ? "Passed" : mod.progress >= 80 ? "In Progress" : "Locked"}
          </p>
        </Card>
        <Card className="p-4 rounded-xl shadow-sm border bg-white">
          <p className="text-sm text-slate-500">Prerequisites Met</p>
          <p className="text-2xl font-heading font-bold text-[#22C55E]">
            {mod.prerequisites.length === 0 ? "N/A" : "Yes"}
          </p>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="lessons">Lessons</TabsTrigger>
          {showProtocol && (
            <TabsTrigger value="protocol">Protocol Engine</TabsTrigger>
          )}
          <TabsTrigger value="certification">Certification</TabsTrigger>
        </TabsList>

        {/* Lessons Tab */}
        <TabsContent value="lessons">
          <Card className="rounded-xl shadow-sm border bg-white overflow-hidden">
            <div className="divide-y divide-slate-100">
              {mod.lessons.map((lesson) => {
                const TypeIcon = lessonTypeIcons[lesson.type] || FileText;
                const statusInfo = statusIcons[lesson.status];
                const StatusIcon = statusInfo.icon;

                return (
                  <div
                    key={lesson.id}
                    className={`flex items-center gap-4 px-6 py-4 ${
                      lesson.status === "locked" ? "opacity-50" : ""
                    }`}
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100">
                      <TypeIcon className="h-4 w-4 text-slate-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className={`text-sm font-medium ${
                          lesson.status === "locked"
                            ? "text-slate-400"
                            : "text-slate-800"
                        }`}
                      >
                        {lesson.order}. {lesson.title}
                      </p>
                      <div className="flex items-center gap-3 mt-0.5">
                        <span className="text-xs text-slate-400 capitalize">
                          {lesson.type}
                        </span>
                        <span className="text-xs text-slate-400">
                          {lesson.duration}
                        </span>
                      </div>
                    </div>
                    <StatusIcon className={`h-5 w-5 ${statusInfo.color}`} />
                  </div>
                );
              })}
            </div>
          </Card>
        </TabsContent>

        {/* Protocol Engine Tab */}
        {showProtocol && (
          <TabsContent value="protocol">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-[#1AB394]" />
                <div>
                  <h3 className="text-sm font-heading font-semibold text-slate-900">
                    {disengagedMenteeProtocol.name}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {disengagedMenteeProtocol.description}
                  </p>
                </div>
              </div>
              <ProtocolTreeView protocol={disengagedMenteeProtocol} />
            </div>
          </TabsContent>
        )}

        {/* Certification Tab */}
        <TabsContent value="certification">
          <Card className="rounded-xl shadow-sm border bg-white p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    isFullyCertified
                      ? "bg-[#E8F8F4]"
                      : "bg-slate-100"
                  }`}
                >
                  <Award
                    className={`h-6 w-6 ${
                      isFullyCertified ? "text-[#1AB394]" : "text-slate-400"
                    }`}
                  />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-slate-900">
                    {mod.certificationName}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {isFullyCertified
                      ? "Certification earned"
                      : `${mod.progress}% complete`}
                  </p>
                </div>
              </div>

              {isFullyCertified && (
                <>
                  <div className="text-sm text-slate-600 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400">Date Earned:</span>
                      <span className="font-medium">January 10, 2026</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400">Valid Through:</span>
                      <span className="font-medium">January 10, 2027</span>
                    </div>
                  </div>
                  <div className="mt-4 p-4 rounded-lg bg-gradient-to-r from-[#1AB394]/10 to-[#1AB394]/5 border border-[#1AB394]/20">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="h-8 w-8 text-[#1AB394]" />
                      <div>
                        <p className="font-heading font-bold text-slate-900">
                          {mod.certificationName}
                        </p>
                        <p className="text-xs text-slate-500">
                          STOKED Mentoring Organization
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {!isFullyCertified && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Progress</span>
                    <span className="font-medium text-slate-700">
                      {mod.progress}%
                    </span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#1AB394]"
                      style={{ width: `${mod.progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-slate-400">
                    Complete all lessons and pass the final assessment to earn
                    your certification.
                  </p>
                </div>
              )}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
