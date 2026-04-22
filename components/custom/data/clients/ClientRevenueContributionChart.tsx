"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { PieChart as PieIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ClientRevenueContributionItem } from "@/lib/dummy_data/clients";


type Props = { data: ClientRevenueContributionItem[] };

const cardClass = "h-full rounded-2xl border border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-md";

/* Hardcoded Premium Palette */
const COLORS = [
  "#6366F1", // indigo
  "#22C55E", // green
  "#F59E0B", // amber
  "#EF4444", // red
  "#06B6D4", // cyan
  "#A855F7", // purple
];

export function ClientRevenueContributionChart({ data }: Props) {
  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <Card className={cardClass}>
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-4">
        <div className="space-y-1">
          <CardTitle className="flex items-center gap-2 text-base sm:text-lg"><PieIcon className="h-4 w-4 text-primary" />Revenue Contribution</CardTitle>
          <CardDescription>Distribution of awarded value across clients.</CardDescription>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="h-65 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip
                contentStyle={{
                  borderRadius: "16px",
                  border: "1px solid hsl(var(--border))",
                  background: "hsl(var(--background) / 0.9)",
                  backdropFilter: "blur(12px)",
                }}
                formatter={(value: number) => `AED ${value.toLocaleString()}`}
              />
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={3}
                stroke="transparent"
              >
                {data.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Center Value */}
        <div className="mt-4 text-center">
          <div className="text-lg font-semibold">AED {total.toLocaleString()}</div>
          <div className="text-xs text-muted-foreground">Total Awarded Value</div>
        </div>

        {/* Legend */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          {data.map((item, index) => (
            <div key={item.name} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/30 px-3 py-1.5 text-xs dark:bg-white/5">
              <div className="flex items-center gap-2 min-w-0">
                <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                <span className="truncate">{item.name}</span>
              </div>
              <span className="text-muted-foreground">AED {(item.value / 1000).toFixed(0)}K</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}