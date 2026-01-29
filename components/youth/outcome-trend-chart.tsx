"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import type { OutcomesOverTime } from "@/lib/data/youth";

const lineColors = {
  belonging: "#1AB394",
  confidence: "#3B82F6",
  connection: "#8B5CF6",
  tryNewThings: "#F59E0B",
  leadership: "#EF4444",
  resilience: "#06B6D4",
};

export function OutcomeTrendChart({ data }: { data: OutcomesOverTime[] }) {
  return (
    <div className="h-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
          <XAxis
            dataKey="year"
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
          <Line
            type="monotone"
            dataKey="belonging"
            stroke={lineColors.belonging}
            strokeWidth={2}
            dot={{ r: 4 }}
            name="Belonging"
          />
          <Line
            type="monotone"
            dataKey="confidence"
            stroke={lineColors.confidence}
            strokeWidth={2}
            dot={{ r: 4 }}
            name="Confidence"
          />
          <Line
            type="monotone"
            dataKey="connection"
            stroke={lineColors.connection}
            strokeWidth={2}
            dot={{ r: 4 }}
            name="Connection"
          />
          <Line
            type="monotone"
            dataKey="tryNewThings"
            stroke={lineColors.tryNewThings}
            strokeWidth={2}
            dot={{ r: 4 }}
            name="Try New Things"
          />
          <Line
            type="monotone"
            dataKey="leadership"
            stroke={lineColors.leadership}
            strokeWidth={2}
            dot={{ r: 4 }}
            name="Leadership"
          />
          <Line
            type="monotone"
            dataKey="resilience"
            stroke={lineColors.resilience}
            strokeWidth={2}
            dot={{ r: 4 }}
            name="Resilience"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
