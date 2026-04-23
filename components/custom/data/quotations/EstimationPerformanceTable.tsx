"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type EstimatorPerformance = {
  id: string;
  name: string;
  totalQuotations: number;
  avgRevisionCount: number;
  winRate: number;
  avgMargin: number;
};

type EstimatorPerformanceTableProps = {
  data: EstimatorPerformance[];
};

function getWinRateClass(winRate: number) {
  if (winRate >= 35) return "text-green-600 dark:text-green-400";
  if (winRate >= 25) return "text-amber-600 dark:text-amber-400";
  return "text-red-600 dark:text-red-400";
}

function getMarginClass(avgMargin: number) {
  if (avgMargin >= 23) return "text-green-600 dark:text-green-400";
  if (avgMargin >= 20) return "text-amber-600 dark:text-amber-400";
  return "text-red-600 dark:text-red-400";
}

export function EstimatorPerformanceTable({ data }: EstimatorPerformanceTableProps) {
  return (
    <Card className="h-full rounded-2xl border border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-md">
      <CardHeader className="flex flex-col gap-1">
        <CardTitle className="text-base font-semibold">Estimator Performance</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">Analyze estimator output using quotation count, revision count, margin, and win rate.</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="hidden overflow-x-auto xl:block">
          <table className="w-full min-w-180 text-sm">
            <thead>
              <tr className="border-b border-white/10 text-left text-muted-foreground">
                <th className="px-3 py-3 font-medium">Estimator</th>
                <th className="px-3 py-3 font-medium">Total Quotations</th>
                <th className="px-3 py-3 font-medium">Avg Revision</th>
                <th className="px-3 py-3 font-medium">Win Rate</th>
                <th className="px-3 py-3 font-medium">Avg Margin</th>
              </tr>
            </thead>

            <tbody>
              {data.map((estimator) => (
                <tr key={estimator.id} className="border-b border-white/5 transition-colors hover:bg-white/30 dark:hover:bg-white/5">
                  <td className="px-3 py-4 align-top font-medium">{estimator.name}</td>
                  <td className="px-3 py-4 align-top">{estimator.totalQuotations}</td>
                  <td className="px-3 py-4 align-top">{estimator.avgRevisionCount.toFixed(1)}</td>
                  <td className={`px-3 py-4 align-top font-medium ${getWinRateClass(estimator.winRate)}`}>{estimator.winRate.toFixed(1)}%</td>
                  <td className={`px-3 py-4 align-top font-medium ${getMarginClass(estimator.avgMargin)}`}>{estimator.avgMargin.toFixed(1)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 gap-3 xl:hidden">
          {data.map((estimator) => (
            <div key={estimator.id} className="rounded-2xl border border-white/10 bg-white/30 p-4 dark:bg-white/5">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="truncate font-medium">{estimator.name}</div>
                  <div className="mt-1 text-sm text-muted-foreground">Total Quotations: {estimator.totalQuotations}</div>
                </div>
                <div className={`text-sm font-semibold ${getWinRateClass(estimator.winRate)}`}>{estimator.winRate.toFixed(1)}%</div>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                <div><span className="text-muted-foreground">Avg Revision:</span> <span className="font-medium">{estimator.avgRevisionCount.toFixed(1)}</span></div>
                <div><span className="text-muted-foreground">Avg Margin:</span> <span className={`font-medium ${getMarginClass(estimator.avgMargin)}`}>{estimator.avgMargin.toFixed(1)}%</span></div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}