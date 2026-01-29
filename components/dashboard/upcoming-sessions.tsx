import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const sessions = [
  {
    id: 1,
    program: "Risers Skateboarding",
    school: "Bronx International HS",
    date: "Feb 3, 2026",
    time: "3:30 PM",
    coach: "Marcus Johnson",
    type: "Risers",
  },
  {
    id: 2,
    program: "Launchpad Snowboarding",
    school: "Eagle Academy",
    date: "Feb 4, 2026",
    time: "4:00 PM",
    coach: "Sarah Chen",
    type: "Launchpad",
  },
  {
    id: 3,
    program: "Pathways Leadership",
    school: "Mott Hall Bronx HS",
    date: "Feb 5, 2026",
    time: "3:00 PM",
    coach: "Devon Williams",
    type: "Pathways",
  },
  {
    id: 4,
    program: "Risers Surfing",
    school: "Bronx Lab School",
    date: "Feb 6, 2026",
    time: "3:30 PM",
    coach: "Ana Rodriguez",
    type: "Risers",
  },
];

const typeBadgeColor: Record<string, string> = {
  Risers: "bg-[#E8F8F4] text-[#1AB394]",
  Launchpad: "bg-blue-50 text-blue-700",
  Pathways: "bg-purple-50 text-purple-700",
};

export function UpcomingSessions() {
  return (
    <Card className="p-6 rounded-xl shadow-sm border bg-white">
      <h3 className="text-sm font-heading font-semibold text-slate-900 mb-4">
        Upcoming Sessions
      </h3>
      <div className="space-y-3">
        {sessions.map((session) => (
          <div
            key={session.id}
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#E8F8F4] flex items-center justify-center">
              <Calendar className="h-5 w-5 text-[#1AB394]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900 truncate">
                {session.program}
              </p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <MapPin className="h-3 w-3 text-slate-400" />
                <span className="text-xs text-slate-500">{session.school}</span>
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <Badge
                variant="secondary"
                className={`text-xs ${typeBadgeColor[session.type]}`}
              >
                {session.type}
              </Badge>
              <p className="text-xs text-slate-400 mt-1">
                {session.date} &middot; {session.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
