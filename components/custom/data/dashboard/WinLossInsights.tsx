"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

type WinLossInsight = { label: string; value: number; };

type WinLossInsightsProps = { data: WinLossInsight[]; };

export function WinLossInsights({ data }: WinLossInsightsProps) {
  return (
    <Card className="h-full flex flex-col rounded-2xl border border-white/10 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-md hover:shadow-xl">
      <CardHeader className="flex flex-col gap-0.5 pb-2">
        <CardTitle className="text-base font-semibold">Win / Loss Insights</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">Quick performance metrics from your quotation pipeline.</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col justify-center pt-2">
        <div className="grid grid-cols-2 gap-3">
          {data.map((item) => (
            <div key={item.label} className="flex flex-col justify-center rounded-xl border border-white/10 bg-white/30 px-3 py-3 text-center dark:bg-white/5">
              <span className="text-lg font-semibold">{item.value}</span>
              <span className="mt-1 text-xs text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}