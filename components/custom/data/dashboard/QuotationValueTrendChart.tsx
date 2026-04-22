"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

type TrendPoint = { month: string; quotationValue: number; awardedValue: number; quotationCount: number; };

type QuotationValueTrendChartProps = { data: TrendPoint[]; };

function formatCurrency(value: number) {
  if (value >= 1000000) return `AED ${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `AED ${(value / 1000).toFixed(0)}K`;
  return `AED ${value}`;
}

export function QuotationValueTrendChart({ data }: QuotationValueTrendChartProps) {
  return (
    <Card className="rounded-2xl border border-white/10 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-md hover:shadow-xl">
      <CardHeader className="flex flex-col gap-1">
        <CardTitle className="text-base font-semibold">Quotation Value Trend</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">Track quotation pipeline value and awarded value over time.</CardDescription>
      </CardHeader>

      <CardContent className="pt-2">
        <div className="h-100 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="quotationValueFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="currentColor" stopOpacity={0.22} />
                  <stop offset="95%" stopColor="currentColor" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="awardedValueFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="currentColor" stopOpacity={0.14} />
                  <stop offset="95%" stopColor="currentColor" stopOpacity={0} />
                </linearGradient>
              </defs>

              <CartesianGrid vertical={false} stroke="currentColor" strokeOpacity={0.08} />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={10} className="text-xs text-muted-foreground" />
              <YAxis tickLine={false} axisLine={false} tickMargin={10} className="text-xs text-muted-foreground" tickFormatter={(value) => formatCurrency(value)} />
              <Tooltip
                cursor={{ stroke: "currentColor", strokeOpacity: 0.12 }}
                contentStyle={{ borderRadius: "16px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(15,23,42,0.85)", backdropFilter: "blur(12px)" }}
                formatter={(value: number, name: string) => [formatCurrency(value), name === "quotationValue" ? "Quotation Value" : "Awarded Value"]}
              />

              <Area type="monotone" dataKey="quotationValue" stroke="hsl(var(--primary))" fill="url(#quotationValueFill)" strokeWidth={2.5} name="Quotation Value" />
              <Area type="monotone" dataKey="awardedValue" stroke="hsl(var(--chart-2))" fill="url(#awardedValueFill)" strokeWidth={2.5} name="Awarded Value" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-primary" /><span>Quotation Value</span></div>
          <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--chart-2))]" /><span>Awarded Value</span></div>
        </div>
      </CardContent>
    </Card>
  );
}