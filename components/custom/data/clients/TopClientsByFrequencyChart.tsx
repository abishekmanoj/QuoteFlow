"use client";

import { ClipboardList } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ClientQuoteFrequencyItem } from "@/lib/dummy_data/clients";

type TopClientsByFrequencyChartProps = { data: ClientQuoteFrequencyItem[] };

const cardClass = "h-full rounded-2xl border border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-md";
const BAR_COLOR = "#6366F1";
const BAR_COLORS = ["#6366F1", "#7C3AED", "#3B82F6", "#06B6D4", "#22C55E", "#F59E0B"];
const AXIS_DARK = "rgba(255,255,255,0.72)";
const AXIS_LIGHT = "rgba(15,23,42,0.72)";
const GRID_DARK = "rgba(255,255,255,0.08)";
const GRID_LIGHT = "rgba(15,23,42,0.08)";
const TOOLTIP_DARK_BG = "rgba(15,23,42,0.92)";
const TOOLTIP_LIGHT_BG = "rgba(255,255,255,0.96)";
const TOOLTIP_DARK_BORDER = "rgba(255,255,255,0.12)";
const TOOLTIP_LIGHT_BORDER = "rgba(15,23,42,0.08)";

const truncate = (value: string, max = 18) => value.length > max ? `${value.slice(0, max)}…` : value;

export function TopClientsByFrequencyChart({ data }: TopClientsByFrequencyChartProps) {
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
        <CardTitle className="flex items-center gap-2 text-base sm:text-lg"><ClipboardList className="h-4 w-4 text-primary/80" />Top Clients by Frequency</CardTitle>
        <CardDescription>Clients receiving the highest number of quotations across the pipeline.</CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/30 px-3 py-1 text-xs text-muted-foreground dark:bg-white/5"><span className="h-2 w-2 rounded-full" style={{ backgroundColor: BAR_COLOR }} />Quotation Count</div>
        </div>

        <div className="h-90 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 8, right: 8, left: 8, bottom: 8 }} barCategoryGap="22%">
              <CartesianGrid vertical={false} stroke={gridColor} />
              <XAxis dataKey="clientName" tickLine={false} axisLine={false} interval={0} height={56} tickMargin={12} tick={({ x, y, payload }) => <g transform={`translate(${x},${y})`}><text x={0} y={0} dy={12} textAnchor="middle" fill={axisColor} fontSize={12}>{truncate(payload.value)}</text></g>} />
              <YAxis tickLine={false} axisLine={false} tickMargin={10} width={42} tick={{ fill: axisColor, fontSize: 12 }} allowDecimals={false} />
              <Tooltip
                cursor={{ fill: isDarkMode ? "rgba(255,255,255,0.03)" : "rgba(15,23,42,0.03)" }}
                contentStyle={{ borderRadius: "16px", border: `1px solid ${tooltipBorder}`, background: tooltipBg, backdropFilter: "blur(12px)", boxShadow: "0 10px 30px rgba(0,0,0,0.18)" }}
                labelStyle={{ color: tooltipText, fontWeight: 600, marginBottom: 8 }}
                itemStyle={{ color: tooltipSubText }}
                formatter={(value: number) => [value, "Quotation Count"]}
              />
              <Bar dataKey="quotationCount" radius={[10, 10, 0, 0]} maxBarSize={42}>
                {data.map((item, index) => <Cell key={item.clientName} fill={BAR_COLORS[index % BAR_COLORS.length]} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
          {data.map((item, index) => (
            <div key={item.clientName} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/30 px-3 py-2 dark:bg-white/5">
              <div className="flex min-w-0 items-center gap-2">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: BAR_COLORS[index % BAR_COLORS.length] }} />
                <span className="truncate text-sm font-medium">{item.clientName}</span>
              </div>
              <span className="text-xs font-semibold text-muted-foreground">{item.quotationCount}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}