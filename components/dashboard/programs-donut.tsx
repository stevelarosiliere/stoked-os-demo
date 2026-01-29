"use client";

import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Risers", value: 3, color: "#1AB394" },
  { name: "Launchpad", value: 3, color: "#148F76" },
  { name: "Pathways", value: 3, color: "#0D5C4D" },
];

export function ProgramsDonut() {
  return (
    <Card className="p-6 rounded-xl shadow-sm border bg-white">
      <h3 className="text-sm font-heading font-semibold text-slate-900 mb-4">
        Programs by Type
      </h3>
      <div className="flex items-center gap-6">
        <div className="h-[180px] w-[180px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={3}
                dataKey="value"
                strokeWidth={0}
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  borderRadius: "8px",
                  border: "1px solid #E2E8F0",
                }}
                formatter={(value, name) => [
                  `${value} programs`,
                  name,
                ]}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-3">
          {data.map((item) => (
            <div key={item.name} className="flex items-center gap-2.5">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-slate-600">
                {item.name}{" "}
                <span className="font-semibold text-slate-900">
                  ({item.value})
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
