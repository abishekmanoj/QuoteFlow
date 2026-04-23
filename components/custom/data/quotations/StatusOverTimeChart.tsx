"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type StatusOverTimePoint = {
  month: string;
  draft: number;
  sent: number;
  awarded: number;
  lost: number;
  expired: number;
};

type StatusOverTimeChartProps = {
  data: StatusOverTimePoint[];
};

export function StatusOverTimeChart({ data }: StatusOverTimeChartProps) {
  return (
    <Card className="h-full rounded-2xl border border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-md">
      <CardHeader className="flex flex-col gap-1">
        <CardTitle className="text-base font-semibold">Status Over Time</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">Monitor how quotation statuses move across each month.</CardDescription>
      </CardHeader>

      <CardContent className="pt-2">
        <div className="h-85 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }} barGap={4}>
              <CartesianGrid vertical={false} stroke="rgba(148,163,184,0.18)" />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={10} />
              <YAxis tickLine={false} axisLine={false} tickMargin={10} />
              <Tooltip
                cursor={{ fill: "rgba(255,255,255,0.04)" }}
                contentStyle={{ borderRadius: "16px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(15,23,42,0.9)", backdropFilter: "blur(12px)" }}
                formatter={(value: number, name: string) => {
                  const labelMap: Record<string, string> = { draft: "Draft", sent: "Sent", awarded: "Awarded", lost: "Lost", expired: "Expired" };
                  return [value, labelMap[name] ?? name];
                }}
              />
              <Bar dataKey="draft" stackId="status" fill="#94a3b8" radius={[0, 0, 0, 0]} />
              <Bar dataKey="sent" stackId="status" fill="#6366f1" radius={[0, 0, 0, 0]} />
              <Bar dataKey="awarded" stackId="status" fill="#22c55e" radius={[0, 0, 0, 0]} />
              <Bar dataKey="lost" stackId="status" fill="#ef4444" radius={[0, 0, 0, 0]} />
              <Bar dataKey="expired" stackId="status" fill="#f59e0b" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-slate-400" /><span>Draft</span></div>
          <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-indigo-500" /><span>Sent</span></div>
          <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-green-500" /><span>Awarded</span></div>
          <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-red-500" /><span>Lost</span></div>
          <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-amber-500" /><span>Expired</span></div>
        </div>
      </CardContent>
    </Card>
  );
}