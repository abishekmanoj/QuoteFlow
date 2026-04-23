"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

type QuotationValueTrendPoint = {
  month: string;
  totalValue: number;
  wonValue: number;
  lostValue: number;
  avgQuoteValue: number;
};

type QuotationValueTrendChartProps = {
  data: QuotationValueTrendPoint[];
};

function formatCurrency(value: number) {
  if (value >= 1000000) return `AED ${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `AED ${(value / 1000).toFixed(0)}K`;
  return `AED ${value}`;
}

export function QuotationValueTrendChart({ data }: QuotationValueTrendChartProps) {
  return (
    <Card className="h-full rounded-2xl border border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-md">
      <CardHeader className="flex flex-col gap-1">
        <CardTitle className="text-base font-semibold">Quotation Value Trend</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">Track quotation pipeline value and awarded value over time.</CardDescription>
      </CardHeader>

      <CardContent className="pt-2">
        <div className="h-90 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="quotationValueFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.22} />
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="awardedValueFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22c55e" stopOpacity={0.16} />
                  <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                </linearGradient>
              </defs>

              <CartesianGrid vertical={false} stroke="rgba(148,163,184,0.18)" />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={10} />
              <YAxis tickLine={false} axisLine={false} tickMargin={10} tickFormatter={(value) => formatCurrency(value)} />
              <Tooltip
                cursor={{ stroke: "rgba(255,255,255,0.15)" }}
                contentStyle={{ borderRadius: "16px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(15,23,42,0.9)", backdropFilter: "blur(12px)" }}
                formatter={(value: number, name: string) => [formatCurrency(value), name === "totalValue" ? "Quotation Value" : "Awarded Value"]}
              />

              <Area type="monotone" dataKey="totalValue" stroke="#6366f1" fill="url(#quotationValueFill)" strokeWidth={3} dot={{ r: 2, fill: "#6366f1", strokeWidth: 0 }} activeDot={{ r: 5, fill: "#6366f1", strokeWidth: 0 }} />
              <Area type="monotone" dataKey="wonValue" stroke="#22c55e" fill="url(#awardedValueFill)" strokeWidth={3} dot={{ r: 2, fill: "#22c55e", strokeWidth: 0 }} activeDot={{ r: 5, fill: "#22c55e", strokeWidth: 0 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-indigo-500" /><span>Quotation Value</span></div>
          <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-green-500" /><span>Awarded Value</span></div>
        </div>
      </CardContent>
    </Card>
  );
}