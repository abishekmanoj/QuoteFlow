"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type QuotationStatus = "draft" | "sent" | "awarded" | "lost" | "expired";

type StatusDistributionItem = {
  status: QuotationStatus;
  count: number;
  value: number;
};

type QuotationStatusDistributionChartProps = {
  data: StatusDistributionItem[];
};

const STATUS_COLORS: Record<QuotationStatus, string> = {
  draft: "#94a3b8",
  sent: "#6366f1",
  awarded: "#22c55e",
  lost: "#ef4444",
  expired: "#f59e0b",
};

function formatStatusLabel(status: QuotationStatus) {
  if (status === "draft") return "Draft";
  if (status === "sent") return "Sent";
  if (status === "awarded") return "Awarded";
  if (status === "lost") return "Lost";
  return "Expired";
}

function formatCurrency(value: number) {
  if (value >= 1000000) return `AED ${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `AED ${(value / 1000).toFixed(0)}K`;
  return `AED ${value}`;
}

export function QuotationStatusDistributionChart({ data }: QuotationStatusDistributionChartProps) {
  const totalCount = data.reduce((sum, item) => sum + item.count, 0);

  return (
    <Card className="h-full rounded-2xl border border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-md">
      <CardHeader className="flex flex-col gap-1">
        <CardTitle className="text-base font-semibold">Quotation Status Distribution</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">See how quotations are split across each status.</CardDescription>
      </CardHeader>

      <CardContent className="pt-2">
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip
                contentStyle={{ borderRadius: "16px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(15,23,42,0.9)", backdropFilter: "blur(12px)" }}
                formatter={(value: number, _name, props) => [`${value} quotations`, `${formatStatusLabel(props.payload.status)}`]}
              />
              <Pie data={data} dataKey="count" nameKey="status" innerRadius={72} outerRadius={108} paddingAngle={3} stroke="rgba(255,255,255,0.08)" strokeWidth={1.5}>
                {data.map((entry) => (
                  <Cell key={entry.status} fill={STATUS_COLORS[entry.status]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="-mt-40 mb-20 flex justify-center pointer-events-none">
          <div className="text-center">
            <div className="text-2xl font-semibold tracking-tight">{totalCount}</div>
            <div className="text-xs text-muted-foreground">Total Quotations</div>
          </div>
        </div>

        <div className="mt-4 grid gap-2">
          {data.map((item) => (
            <div key={item.status} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/30 px-3 py-2 dark:bg-white/5">
              <div className="flex min-w-0 items-center gap-2.5">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: STATUS_COLORS[item.status] }} />
                <span className="text-sm font-medium">{formatStatusLabel(item.status)}</span>
                <span className="text-xs text-muted-foreground">{item.count}</span>
              </div>
              <span className="text-xs text-muted-foreground">{formatCurrency(item.value)}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}