"use client";

import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type RevisionImpactPoint = {
  revisionBucket: string;
  quotationCount: number;
  winRate: number;
};

type RevisionImpactChartProps = {
  data: RevisionImpactPoint[];
};

function getBarColor(winRate: number) {
  if (winRate >= 40) return "#22c55e";
  if (winRate >= 25) return "#f59e0b";
  return "#ef4444";
}

export function RevisionImpactChart({ data }: RevisionImpactChartProps) {
  return (
    <Card className="h-full rounded-2xl border border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-md">
      <CardHeader className="flex flex-col gap-1">
        <CardTitle className="text-base font-semibold">Revision Impact</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">See how quotation win rate changes across revision stages.</CardDescription>
      </CardHeader>

      <CardContent className="pt-2">
        <div className="h-85 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid vertical={false} stroke="rgba(148,163,184,0.18)" />
              <XAxis dataKey="revisionBucket" tickLine={false} axisLine={false} tickMargin={10} />
              <YAxis tickLine={false} axisLine={false} tickMargin={10} unit="%" />
              <Tooltip
                cursor={{ fill: "rgba(255,255,255,0.04)" }}
                contentStyle={{ borderRadius: "16px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(15,23,42,0.9)", backdropFilter: "blur(12px)" }}
                formatter={(value: number, name: string, props) => {
                  if (name === "winRate") return [`${value.toFixed(1)}%`, "Win Rate"];
                  return [value, "Quotation Count"];
                }}
                labelFormatter={(label) => `${label}`}
              />
              <Bar dataKey="winRate" radius={[10, 10, 0, 0]}>
                {data.map((item) => (
                  <Cell key={item.revisionBucket} fill={getBarColor(item.winRate)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 grid gap-2">
          {data.map((item) => (
            <div key={item.revisionBucket} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/30 px-3 py-2 dark:bg-white/5">
              <div className="flex items-center gap-2.5">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: getBarColor(item.winRate) }} />
                <span className="text-sm font-medium">{item.revisionBucket}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span>{item.quotationCount} quotes</span>
                <span className="font-medium text-foreground">{item.winRate.toFixed(1)}%</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}