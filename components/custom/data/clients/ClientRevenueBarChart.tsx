"use client";

import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { CircleDollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ClientRevenueBarItem } from "@/lib/dummy_data/clients";


type ClientRevenueBarChartProps = { data: ClientRevenueBarItem[] };

const cardClass = "h-full rounded-2xl border border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-md";
const QUOTED_COLOR = "#6366F1";
const AWARDED_COLOR = "#22C55E";
const AXIS_DARK = "rgba(255,255,255,0.72)";
const AXIS_LIGHT = "rgba(15,23,42,0.72)";
const GRID_DARK = "rgba(255,255,255,0.08)";
const GRID_LIGHT = "rgba(15,23,42,0.08)";
const TOOLTIP_DARK_BG = "rgba(15,23,42,0.92)";
const TOOLTIP_LIGHT_BG = "rgba(255,255,255,0.96)";
const TOOLTIP_DARK_BORDER = "rgba(255,255,255,0.12)";
const TOOLTIP_LIGHT_BORDER = "rgba(15,23,42,0.08)";

const formatCurrency = (value: number) => {
  if (value >= 1000000) return `AED ${(value / 1000000).toFixed(2)}M`;
  if (value >= 1000) return `AED ${(value / 1000).toFixed(0)}K`;
  return `AED ${value}`;
};

const truncate = (value: string, max = 16) => value.length > max ? `${value.slice(0, max)}…` : value;

export function ClientRevenueBarChart({ data }: ClientRevenueBarChartProps) {
  const isDarkMode = typeof document !== "undefined" ? document.documentElement.classList.contains("dark") : true;
  const axisColor = isDarkMode ? AXIS_DARK : AXIS_LIGHT;
  const gridColor = isDarkMode ? GRID_DARK : GRID_LIGHT;
  const tooltipBg = isDarkMode ? TOOLTIP_DARK_BG : TOOLTIP_LIGHT_BG;
  const tooltipBorder = isDarkMode ? TOOLTIP_DARK_BORDER : TOOLTIP_LIGHT_BORDER;
  const tooltipText = isDarkMode ? "#FFFFFF" : "#0F172A";
  const tooltipSubText = isDarkMode ? "#CBD5E1" : "#475569";

  return (
    <Card className={cardClass}>
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-base sm:text-lg"><CircleDollarSign className="h-4 w-4 text-primary" />Quoted vs Awarded Value by Client</CardTitle>
        <CardDescription>Compare total quoted value and awarded value across major clients.</CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/30 px-3 py-1 text-xs text-muted-foreground dark:bg-white/5"><span className="h-2 w-2 rounded-full" style={{ backgroundColor: QUOTED_COLOR }} />Quoted Value</div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/30 px-3 py-1 text-xs text-muted-foreground dark:bg-white/5"><span className="h-2 w-2 rounded-full" style={{ backgroundColor: AWARDED_COLOR }} />Awarded Value</div>
        </div>

        <div className="h-90 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barGap={8} barCategoryGap="24%" margin={{ top: 8, right: 8, left: 8, bottom: 8 }}>
              <CartesianGrid vertical={false} stroke={gridColor} />
              <XAxis dataKey="clientName" tickLine={false} axisLine={false} interval={0} height={56} tickMargin={12} tick={({ x, y, payload }) => <g transform={`translate(${x},${y})`}><text x={0} y={0} dy={12} textAnchor="middle" fill={axisColor} fontSize={12}>{truncate(payload.value)}</text></g>} />
              <YAxis tickLine={false} axisLine={false} tickMargin={10} width={84} tick={{ fill: axisColor, fontSize: 12 }} tickFormatter={(value) => value >= 1000000 ? `${(value / 1000000).toFixed(1)}M` : `${Math.round(value / 1000)}K`} />
              <Tooltip
                cursor={{ fill: isDarkMode ? "rgba(255,255,255,0.03)" : "rgba(15,23,42,0.03)" }}
                contentStyle={{ borderRadius: "16px", border: `1px solid ${tooltipBorder}`, background: tooltipBg, backdropFilter: "blur(12px)", boxShadow: "0 10px 30px rgba(0,0,0,0.18)" }}
                labelStyle={{ color: tooltipText, fontWeight: 600, marginBottom: 8 }}
                itemStyle={{ color: tooltipSubText }}
                formatter={(value: number, name: string) => [formatCurrency(value), name === "totalQuotedValue" ? "Quoted Value" : "Awarded Value"]}
              />
              <Bar dataKey="totalQuotedValue" radius={[10, 10, 0, 0]} maxBarSize={34}>
                {data.map((item) => <Cell key={`quoted-${item.clientName}`} fill={QUOTED_COLOR} />)}
              </Bar>
              <Bar dataKey="awardedValue" radius={[10, 10, 0, 0]} maxBarSize={34}>
                {data.map((item) => <Cell key={`awarded-${item.clientName}`} fill={AWARDED_COLOR} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
          {data.map((item) => (
            <div key={item.clientName} className="rounded-xl border border-white/10 bg-white/30 px-3 py-2 dark:bg-white/5">
              <div className="truncate text-sm font-medium">{item.clientName}</div>
              <div className="mt-1 flex items-center justify-between text-xs text-muted-foreground"><span>Quoted</span><span>{formatCurrency(item.totalQuotedValue)}</span></div>
              <div className="mt-1 flex items-center justify-between text-xs text-muted-foreground"><span>Awarded</span><span>{formatCurrency(item.awardedValue)}</span></div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}