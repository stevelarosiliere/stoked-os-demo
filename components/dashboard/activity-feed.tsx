import { Card } from "@/components/ui/card";
import {
  UserPlus,
  Calendar,
  ClipboardCheck,
  Award,
  BookOpen,
} from "lucide-react";

const iconMap = {
  "user-plus": UserPlus,
  calendar: Calendar,
  clipboard: ClipboardCheck,
  award: Award,
  book: BookOpen,
};

const activities = [
  {
    id: "1",
    icon: "user-plus" as const,
    title: "New Enrollment",
    description: "Jaylen Morris enrolled at Eagle Academy",
    time: "2 hours ago",
    color: "bg-blue-50 text-blue-600",
  },
  {
    id: "2",
    icon: "calendar" as const,
    title: "Session Completed",
    description: "Risers Skateboarding at Bronx International",
    time: "4 hours ago",
    color: "bg-[#E8F8F4] text-[#1AB394]",
  },
  {
    id: "3",
    icon: "clipboard" as const,
    title: "Survey Submitted",
    description: "Mid-program survey: 18 of 22 completed",
    time: "Yesterday",
    color: "bg-amber-50 text-amber-600",
  },
  {
    id: "4",
    icon: "award" as const,
    title: "Milestone Reached",
    description: "Marcus Thompson: Leadership Nominated",
    time: "Yesterday",
    color: "bg-purple-50 text-purple-600",
  },
  {
    id: "5",
    icon: "book" as const,
    title: "Program Started",
    description: "Launchpad Snowboarding Spring '26 launched",
    time: "2 days ago",
    color: "bg-[#E8F8F4] text-[#1AB394]",
  },
  {
    id: "6",
    icon: "user-plus" as const,
    title: "Coach Assigned",
    description: "Sarah Chen assigned to Mott Hall Bronx",
    time: "3 days ago",
    color: "bg-blue-50 text-blue-600",
  },
];

export function ActivityFeed() {
  return (
    <Card className="p-6 rounded-xl shadow-sm border bg-white">
      <h3 className="text-sm font-heading font-semibold text-slate-900 mb-4">
        Recent Activity
      </h3>
      <div className="space-y-3">
        {activities.map((activity) => {
          const Icon = iconMap[activity.icon];
          return (
            <div key={activity.id} className="flex items-start gap-3">
              <div
                className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${activity.color}`}
              >
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-900">
                  {activity.title}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  {activity.description}
                </p>
              </div>
              <span className="text-xs text-slate-400 flex-shrink-0">
                {activity.time}
              </span>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
