"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

type QuotationStatus = "draft" | "sent" | "awarded" | "lost" | "expired";

type StatusDistributionItem = { status: QuotationStatus; count: number; value: number; };

type StatusDistributionChartProps = { data: StatusDistributionItem[]; };

const STATUS_COLORS: Record<QuotationStatus, string> = {
  draft: "#3B82F6",
  sent: "#6366F1",
  awarded: "#22C55E",
  lost: "#EF4444",
  expired: "#F59E0B",
};

function formatCurrency(value: number) {
  if (value >= 1000000) return `AED ${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `AED ${(value / 1000).toFixed(0)}K`;
  return `AED ${value}`;
}

function formatStatusLabel(status: QuotationStatus) {
  switch (status) {
    case "draft": return "Draft";
    case "sent": return "Sent";
    case "awarded": return "Awarded";
    case "lost": return "Lost";
    case "expired": return "Expired";
    default: return status;
  }
}

export function StatusDistributionChart({ data }: StatusDistributionChartProps) {
  const totalCount = data.reduce((sum, item) => sum + item.count, 0);
  const totalValue = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card className="rounded-2xl border border-white/10 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-md hover:shadow-xl">
      <CardHeader className="flex flex-col gap-1">
        <CardTitle className="text-base font-semibold">Status Distribution</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">Breakdown of quotations by current stage and value.</CardDescription>
      </CardHeader>

      <CardContent className="pt-2">
        <div className="relative h-75 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} dataKey="count" nameKey="status" cx="50%" cy="50%" innerRadius={72} outerRadius={108} paddingAngle={4} cornerRadius={10} stroke="rgba(255,255,255,0.08)" strokeWidth={2}>
                {data.map((entry) => <Cell key={entry.status} fill={STATUS_COLORS[entry.status]} />)}
              </Pie>
              <Tooltip contentStyle={{ borderRadius: "16px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(15,23,42,0.88)", backdropFilter: "blur(12px)" }} formatter={(value: number, _name: string, props: any) => [`${value} quotations`, formatStatusLabel(props.payload.status)]} />
            </PieChart>
          </ResponsiveContainer>

          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-semibold tracking-tight">{totalCount}</span>
            <span className="text-xs text-muted-foreground">Total Quotes</span>
            <span className="mt-1 text-[11px] text-muted-foreground">{formatCurrency(totalValue)}</span>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
            {data.map((item) => (
                <div key={item.status} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/30 px-3 py-1.5 dark:bg-white/5">
                <div className="flex items-center gap-2 min-w-0">
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