import { Card } from "@/components/ui/card";
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

interface KpiCardProps {
  title: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon: LucideIcon;
  iconColor?: string;
  iconBg?: string;
}

export function KpiCard({
  title,
  value,
  change,
  changeLabel,
  icon: Icon,
  iconColor = "text-[#1AB394]",
  iconBg = "bg-[#E8F8F4]",
}: KpiCardProps) {
  const isPositive = change && change > 0;

  return (
    <Card className="p-6 rounded-xl shadow-sm border bg-white">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <p className="text-3xl font-heading font-bold text-slate-900">
            {value}
          </p>
          {change !== undefined && (
            <div className="flex items-center gap-1.5">
              {isPositive ? (
                <TrendingUp className="h-3.5 w-3.5 text-[#22C55E]" />
              ) : (
                <TrendingDown className="h-3.5 w-3.5 text-[#EF4444]" />
              )}
              <span
                className={`text-xs font-semibold ${
                  isPositive ? "text-[#22C55E]" : "text-[#EF4444]"
                }`}
              >
                {isPositive ? "+" : ""}
                {change}%
              </span>
              {changeLabel && (
                <span className="text-xs text-slate-400">{changeLabel}</span>
              )}
            </div>
          )}
        </div>
        <div className={`p-3 rounded-xl ${iconBg}`}>
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
      </div>
    </Card>
  );
}
