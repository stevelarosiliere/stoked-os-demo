import { KpiCard } from "@/components/dashboard/kpi-card";
import { AttendanceChart } from "@/components/dashboard/attendance-chart";
import { ProgramsDonut } from "@/components/dashboard/programs-donut";
import { OutcomesBars } from "@/components/dashboard/outcomes-bars";
import { UpcomingSessions } from "@/components/dashboard/upcoming-sessions";
import { ActivityFeed } from "@/components/dashboard/activity-feed";
import { Users, UserCheck, Building2, CalendarCheck } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard
          title="Youth Enrolled"
          value="283"
          change={12}
          changeLabel="vs last quarter"
          icon={Users}
        />
        <KpiCard
          title="Active Coaches"
          value="9"
          icon={UserCheck}
          iconColor="text-blue-600"
          iconBg="bg-blue-50"
        />
        <KpiCard
          title="Partner Schools"
          value="12"
          change={20}
          changeLabel="vs last year"
          icon={Building2}
          iconColor="text-purple-600"
          iconBg="bg-purple-50"
        />
        <KpiCard
          title="Avg Attendance"
          value="80%"
          change={5}
          changeLabel="vs last quarter"
          icon={CalendarCheck}
          iconColor="text-amber-600"
          iconBg="bg-amber-50"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <AttendanceChart />
        </div>
        <ProgramsDonut />
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <OutcomesBars />
        <UpcomingSessions />
        <ActivityFeed />
      </div>
    </div>
  );
}
