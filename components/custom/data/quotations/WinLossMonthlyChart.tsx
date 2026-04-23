"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type WinLossMonthlyPoint = {
  month: string;
  wonCount: number;
  lostCount: number;
  sentCount: number;
};

type WinLossMonthlyChartProps = {
  data: WinLossMonthlyPoint[];
};

export function WinLossMonthlyChart({ data }: WinLossMonthlyChartProps) {
  return (
    <Card className="h-full rounded-2xl border border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-md">
      <CardHeader className="flex flex-col gap-1">
        <CardTitle className="text-base font-semibold">Win vs Loss Monthly</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">Compare awarded and lost quotations month by month.</CardDescription>
      </CardHeader>

      <CardContent className="pt-2">
        <div className="h-85 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }} barGap={8}>
              <CartesianGrid vertical={false} stroke="rgba(148,163,184,0.18)" />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={10} />
              <YAxis tickLine={false} axisLine={false} tickMargin={10} />
              <Tooltip
                cursor={{ fill: "rgba(255,255,255,0.04)" }}
                contentStyle={{ borderRadius: "16px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(15,23,42,0.9)", backdropFilter: "blur(12px)" }}
                formatter={(value: number, name: string) => {
                  const labelMap: Record<string, string> = { wonCount: "Won", lostCount: "Lost", sentCount: "Sent" };
                  return [value, labelMap[name] ?? name];
                }}
              />
              <Bar dataKey="wonCount" name="wonCount" radius={[10, 10, 0, 0]} fill="#22c55e" />
              <Bar dataKey="lostCount" name="lostCount" radius={[10, 10, 0, 0]} fill="#ef4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-green-500" /><span>Won</span></div>
          <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-red-500" /><span>Lost</span></div>
        </div>
      </CardContent>
    </Card>
  );
}