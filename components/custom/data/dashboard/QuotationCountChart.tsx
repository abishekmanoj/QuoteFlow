"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BarChart, Bar, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

type TrendPoint = { month: string; quotationValue: number; awardedValue: number; quotationCount: number; };

type QuotationCountChartProps = { data: TrendPoint[]; };

export function QuotationCountChart({ data }: QuotationCountChartProps) {
  return (
    <Card className="h-full flex flex-col rounded-2xl border border-white/10 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-md hover:shadow-xl">
      <CardHeader className="flex flex-col gap-0.5 pb-2">
        <CardTitle className="text-base font-semibold">Quotation Count</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">Number of quotations created per month.</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col pt-2">
        <div className="flex-1 min-h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              
              <CartesianGrid vertical={false} stroke="currentColor" strokeOpacity={0.08} />

              <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={10} className="text-xs text-muted-foreground" />
              <YAxis tickLine={false} axisLine={false} tickMargin={10} className="text-xs text-muted-foreground" />

              <Tooltip
                cursor={{ fill: "rgba(255,255,255,0.05)" }}
                contentStyle={{ borderRadius: "16px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(15,23,42,0.88)", backdropFilter: "blur(12px)" }}
                formatter={(value: number) => [`${value} quotations`, "Count"]}
              />

              <Bar dataKey="quotationCount" radius={[8, 8, 0, 0]} fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
          <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
          <span>Quotations Created</span>
        </div>
      </CardContent>
    </Card>
  );
}