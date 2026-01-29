"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import { Card } from "@/components/ui/card";

export function MentorHoursChart({
  data,
}: {
  data: { month: string; hours: number }[];
}) {
  return (
    <Card className="rounded-xl shadow-sm border bg-white p-6">
      <h3 className="text-sm font-heading font-semibold text-slate-900 mb-4">
        Hours Over Time
      </h3>
      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 11, fill: "#94A3B8" }}
              axisLine={{ stroke: "#E2E8F0" }}
            />
            <YAxis
              tick={{ fontSize: 11, fill: "#94A3B8" }}
              axisLine={{ stroke: "#E2E8F0" }}
            />
            <Tooltip
              contentStyle={{
                borderRadius: "8px",
                border: "1px solid #E2E8F0",
                fontSize: "12px",
              }}
            />
            <Line
              type="monotone"
              dataKey="hours"
              stroke="#1AB394"
              strokeWidth={2}
              dot={{ r: 4, fill: "#1AB394" }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

export function MenteeOutcomesChart({
  data,
}: {
  data: { metric: string; before: number; after: number }[];
}) {
  return (
    <Card className="rounded-xl shadow-sm border bg-white p-6">
      <h3 className="text-sm font-heading font-semibold text-slate-900 mb-4">
        Mentee Outcomes (Before / After)
      </h3>
      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
            <XAxis
              dataKey="metric"
              tick={{ fontSize: 11, fill: "#94A3B8" }}
              axisLine={{ stroke: "#E2E8F0" }}
            />
            <YAxis
              domain={[0, 5]}
              tick={{ fontSize: 11, fill: "#94A3B8" }}
              axisLine={{ stroke: "#E2E8F0" }}
            />
            <Tooltip
              contentStyle={{
                borderRadius: "8px",
                border: "1px solid #E2E8F0",
                fontSize: "12px",
              }}
            />
            <Legend wrapperStyle={{ fontSize: "12px" }} />
            <Bar dataKey="before" fill="#CBD5E1" name="Before" radius={[4, 4, 0, 0]} />
            <Bar dataKey="after" fill="#1AB394" name="After" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
