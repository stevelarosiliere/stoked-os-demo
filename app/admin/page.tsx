"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  Building2,
  BarChart3,
  Plus,
  ChevronRight,
  Globe,
} from "lucide-react";

const organizations = [
  {
    id: "org-1",
    name: "STOKED NYC",
    status: "live",
    logo: "S",
    color: "bg-[#1AB394]",
    youth: 283,
    partners: 12,
    coaches: 9,
    programs: 9,
    avgAttendance: 80,
    avgBelonging: 82,
    location: "New York, NY",
    activeSince: "2009",
  },
  {
    id: "org-2",
    name: "Big Brothers Big Sisters",
    status: "pending",
    logo: "BB",
    color: "bg-slate-300",
    youth: 0,
    partners: 0,
    coaches: 0,
    programs: 0,
    avgAttendance: 0,
    avgBelonging: 0,
    location: "National",
    activeSince: "Onboarding",
  },
  {
    id: "org-3",
    name: "Boys & Girls Club",
    status: "pending",
    logo: "BG",
    color: "bg-slate-300",
    youth: 0,
    partners: 0,
    coaches: 0,
    programs: 0,
    avgAttendance: 0,
    avgBelonging: 0,
    location: "National",
    activeSince: "Onboarding",
  },
];

const aggregateStats = {
  totalOrgs: 1,
  pendingOrgs: 2,
  totalYouth: 283,
  totalPartners: 12,
};

export default function AdminPage() {
  return (
    <div className="space-y-6">
      {/* Aggregate Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-5 rounded-xl shadow-sm border bg-white">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#E8F8F4]">
              <Globe className="h-5 w-5 text-[#1AB394]" />
            </div>
            <div>
              <p className="text-sm text-slate-500">Active Orgs</p>
              <p className="text-xl font-heading font-bold text-slate-900">
                {aggregateStats.totalOrgs}
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-5 rounded-xl shadow-sm border bg-white">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-50">
              <Building2 className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-slate-500">Pending Orgs</p>
              <p className="text-xl font-heading font-bold text-slate-900">
                {aggregateStats.pendingOrgs}
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-5 rounded-xl shadow-sm border bg-white">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-50">
              <Users className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-slate-500">Network Youth</p>
              <p className="text-xl font-heading font-bold text-slate-900">
                {aggregateStats.totalYouth}
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-5 rounded-xl shadow-sm border bg-white">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-50">
              <BarChart3 className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-slate-500">Network Partners</p>
              <p className="text-xl font-heading font-bold text-slate-900">
                {aggregateStats.totalPartners}
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Org Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {organizations.map((org) => (
          <Card
            key={org.id}
            className={`p-6 rounded-xl shadow-sm border bg-white hover:shadow-md transition-shadow ${
              org.status === "pending" ? "opacity-60" : ""
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div
                  className={`w-11 h-11 rounded-xl ${org.color} flex items-center justify-center text-white font-bold text-sm`}
                >
                  {org.logo}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-slate-900">
                    {org.name}
                  </h3>
                  <p className="text-xs text-slate-500">{org.location}</p>
                </div>
              </div>
              <Badge
                className={`border-0 text-xs font-medium ${
                  org.status === "live"
                    ? "bg-green-50 text-green-700"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                {org.status === "live" ? "Live" : "Pending"}
              </Badge>
            </div>

            {org.status === "live" ? (
              <>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-slate-50">
                    <p className="text-xs text-slate-500">Youth</p>
                    <p className="text-lg font-bold text-slate-900">
                      {org.youth}
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50">
                    <p className="text-xs text-slate-500">Partners</p>
                    <p className="text-lg font-bold text-slate-900">
                      {org.partners}
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50">
                    <p className="text-xs text-slate-500">Attendance</p>
                    <p className="text-lg font-bold text-slate-900">
                      {org.avgAttendance}%
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50">
                    <p className="text-xs text-slate-500">Belonging</p>
                    <p className="text-lg font-bold text-slate-900">
                      {org.avgBelonging}%
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full text-sm text-[#1AB394] border-[#1AB394] hover:bg-[#E8F8F4]"
                >
                  View Dashboard
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-sm text-slate-400 mb-3">
                  Onboarding in progress
                </p>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden max-w-[200px] mx-auto">
                  <div className="h-full w-1/4 bg-slate-300 rounded-full" />
                </div>
              </div>
            )}
          </Card>
        ))}

        {/* Add Organization Card */}
        <Card className="p-6 rounded-xl shadow-sm border-2 border-dashed border-slate-200 bg-white/50 hover:bg-white hover:border-[#1AB394] transition-all cursor-pointer flex items-center justify-center min-h-[280px]">
          <div className="text-center">
            <div className="w-12 h-12 rounded-xl bg-[#E8F8F4] flex items-center justify-center mx-auto mb-3">
              <Plus className="h-6 w-6 text-[#1AB394]" />
            </div>
            <p className="font-heading font-semibold text-slate-700">
              Add Organization
            </p>
            <p className="text-sm text-slate-400 mt-1">
              Onboard a new mentoring org
            </p>
          </div>
        </Card>
      </div>

      {/* Network Value Prop */}
      <Card className="p-8 rounded-xl shadow-sm border bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white">
        <div className="max-w-2xl">
          <h2 className="font-heading text-xl font-bold mb-2">
            The STOKED Network
          </h2>
          <p className="text-slate-300 mb-4">
            Every organization on STOKED OS contributes to shared benchmarks,
            curriculum standards, and coaching certifications. The network gets
            smarter as it grows.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <div>
              <span className="font-bold text-[#1AB394]">Shared</span>{" "}
              <span className="text-slate-400">Curriculum</span>
            </div>
            <div>
              <span className="font-bold text-[#1AB394]">Shared</span>{" "}
              <span className="text-slate-400">Benchmarks</span>
            </div>
            <div>
              <span className="font-bold text-[#1AB394]">Shared</span>{" "}
              <span className="text-slate-400">Coach Standards</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
