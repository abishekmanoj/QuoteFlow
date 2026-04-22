"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BarChart, Bar, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell } from "recharts";

type SystemBreakdownItem = { systemName: string; quotationCount: number; totalValue: number; avgMargin: number; };

type SystemBreakdownChartProps = { data: SystemBreakdownItem[]; };

const BAR_COLORS = ["#3B82F6", "#6366F1", "#22C55E", "#F59E0B", "#EF4444"];

function formatCurrency(value: number) {
  if (value >= 1000000) return `AED ${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `AED ${(value / 1000).toFixed(0)}K`;
  return `AED ${value}`;
}

export function SystemBreakdownChart({ data }: SystemBreakdownChartProps) {
  return (
    <Card className="h-full flex flex-col rounded-2xl border border-white/10 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-md hover:shadow-xl">
      <CardHeader className="flex flex-col gap-0.5 pb-2">
        <CardTitle className="text-base font-semibold">System Breakdown</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">Quotation value split across solution categories.</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col pt-2">
        <div className="flex-1 min-h-75">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
              <CartesianGrid horizontal={true} vertical={false} stroke="currentColor" strokeOpacity={0.08} />
              <XAxis type="number" tickLine={false} axisLine={false} tickMargin={10} className="text-xs text-muted-foreground" tickFormatter={(value) => formatCurrency(value)} />
              <YAxis type="category" dataKey="systemName" tickLine={false} axisLine={false} width={120} className="text-xs text-muted-foreground" />
              <Tooltip
                cursor={{ fill: "rgba(255,255,255,0.04)" }}
                contentStyle={{ borderRadius: "16px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(15,23,42,0.88)", backdropFilter: "blur(12px)" }}
                formatter={(value: number, _name: string, props: any) => [formatCurrency(value), props.payload.systemName]}
                labelStyle={{ display: "none" }}
              />
              <Bar dataKey="totalValue" radius={[0, 8, 8, 0]}>
                {data.map((item, index) => <Cell key={item.systemName} fill={BAR_COLORS[index % BAR_COLORS.length]} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-3 grid grid-cols-1 gap-1.5">
          {data.map((item, index) => (
            <div key={item.systemName} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/30 px-3 py-1.5 dark:bg-white/5">
              <div className="flex items-center gap-2 min-w-0">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: BAR_COLORS[index % BAR_COLORS.length] }} />
                <span className="truncate text-sm font-medium">{item.systemName}</span>
              </div>
              <span className="shrink-0 text-xs text-muted-foreground">{formatCurrency(item.totalValue)}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}