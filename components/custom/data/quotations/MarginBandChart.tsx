"use client";

import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type MarginBandItem = {
  band: string;
  quotationCount: number;
  avgMargin: number;
};

type MarginBandChartProps = {
  data: MarginBandItem[];
};

function getBarColor(margin: number) {
  if (margin >= 25) return "#22c55e";
  if (margin >= 15) return "#6366f1";
  if (margin >= 10) return "#f59e0b";
  return "#ef4444";
}

export function MarginBandChart({ data }: MarginBandChartProps) {
  return (
    <Card className="h-full rounded-2xl border border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-md">
      <CardHeader className="flex flex-col gap-1">
        <CardTitle className="text-base font-semibold">Margin Band Distribution</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">Understand how quotations are distributed across margin ranges.</CardDescription>
      </CardHeader>

      <CardContent className="pt-2">
        <div className="h-[340px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid vertical={false} stroke="rgba(148,163,184,0.18)" />
              <XAxis dataKey="band" tickLine={false} axisLine={false} tickMargin={10} />
              <YAxis tickLine={false} axisLine={false} tickMargin={10} />
              <Tooltip
                cursor={{ fill: "rgba(255,255,255,0.04)" }}
                contentStyle={{ borderRadius: "16px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(15,23,42,0.9)", backdropFilter: "blur(12px)" }}
                formatter={(value: number, name: string, props) => {
                  if (name === "quotationCount") return [value, "Quotations"];
                  return [`${value.toFixed(1)}%`, "Avg Margin"];
                }}
              />
              <Bar dataKey="quotationCount" radius={[10, 10, 0, 0]}>
                {data.map((item) => (
                  <Cell key={item.band} fill={getBarColor(item.avgMargin)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 grid gap-2">
          {data.map((item) => (
            <div key={item.band} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/30 px-3 py-2 dark:bg-white/5">
              <div className="flex items-center gap-2.5">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: getBarColor(item.avgMargin) }} />
                <span className="text-sm font-medium">{item.band}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span>{item.quotationCount} quotes</span>
                <span className="font-medium text-foreground">{item.avgMargin.toFixed(1)}%</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}