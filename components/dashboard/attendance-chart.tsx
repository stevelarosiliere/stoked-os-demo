"use client";

import { Card } from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Aug", attendance: 72 },
  { month: "Sep", attendance: 74 },
  { month: "Oct", attendance: 76 },
  { month: "Nov", attendance: 78 },
  { month: "Dec", attendance: 75 },
  { month: "Jan", attendance: 80 },
];

export function AttendanceChart() {
  return (
    <Card className="p-6 rounded-xl shadow-sm border bg-white">
      <h3 className="text-sm font-heading font-semibold text-slate-900 mb-4">
        Attendance Over Time
      </h3>
      <div className="h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="attendanceGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1AB394" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#1AB394" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 12, fill: "#94A3B8" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              domain={[60, 90]}
              tick={{ fontSize: 12, fill: "#94A3B8" }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `${v}%`}
            />
            <Tooltip
              contentStyle={{
                borderRadius: "8px",
                border: "1px solid #E2E8F0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
              formatter={(value) => [`${value}%`, "Attendance"]}
            />
            <Area
              type="monotone"
              dataKey="attendance"
              stroke="#1AB394"
              strokeWidth={2.5}
              fill="url(#attendanceGrad)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
