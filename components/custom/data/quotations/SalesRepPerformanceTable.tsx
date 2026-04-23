"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type SalesRepPerformance = {
  id: string;
  name: string;
  totalQuotations: number;
  wonQuotations: number;
  lostQuotations: number;
  winRate: number;
  wonValue: number;
};

type SalesRepPerformanceTableProps = {
  data: SalesRepPerformance[];
};

function formatCurrency(value: number) {
  if (value >= 1000000) return `AED ${(value / 1000000).toFixed(2)}M`;
  if (value >= 1000) return `AED ${(value / 1000).toFixed(0)}K`;
  return `AED ${value}`;
}

function getWinRateClass(winRate: number) {
  if (winRate >= 35) return "text-green-600 dark:text-green-400";
  if (winRate >= 25) return "text-amber-600 dark:text-amber-400";
  return "text-red-600 dark:text-red-400";
}

export function SalesRepPerformanceTable({ data }: SalesRepPerformanceTableProps) {
  return (
    <Card className="h-full rounded-2xl border border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-md">
      <CardHeader className="flex flex-col gap-1">
        <CardTitle className="text-base font-semibold">Sales Rep Performance</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">Compare quotations handled, wins, losses, win rate, and awarded value by sales rep.</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="hidden overflow-x-auto xl:block">
          <table className="w-full min-w-180 text-sm">
            <thead>
              <tr className="border-b border-white/10 text-left text-muted-foreground">
                <th className="px-3 py-3 font-medium">Sales Rep</th>
                <th className="px-3 py-3 font-medium">Total Quotations</th>
                <th className="px-3 py-3 font-medium">Won</th>
                <th className="px-3 py-3 font-medium">Lost</th>
                <th className="px-3 py-3 font-medium">Win Rate</th>
                <th className="px-3 py-3 font-medium">Won Value</th>
              </tr>
            </thead>

            <tbody>
              {data.map((rep) => (
                <tr key={rep.id} className="border-b border-white/5 transition-colors hover:bg-white/30 dark:hover:bg-white/5">
                  <td className="px-3 py-4 align-top font-medium">{rep.name}</td>
                  <td className="px-3 py-4 align-top">{rep.totalQuotations}</td>
                  <td className="px-3 py-4 align-top">{rep.wonQuotations}</td>
                  <td className="px-3 py-4 align-top">{rep.lostQuotations}</td>
                  <td className={`px-3 py-4 align-top font-medium ${getWinRateClass(rep.winRate)}`}>{rep.winRate.toFixed(1)}%</td>
                  <td className="px-3 py-4 align-top font-medium">{formatCurrency(rep.wonValue)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 gap-3 xl:hidden">
          {data.map((rep) => (
            <div key={rep.id} className="rounded-2xl border border-white/10 bg-white/30 p-4 dark:bg-white/5">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="truncate font-medium">{rep.name}</div>
                  <div className="mt-1 text-sm text-muted-foreground">Total Quotations: {rep.totalQuotations}</div>
                </div>
                <div className={`text-sm font-semibold ${getWinRateClass(rep.winRate)}`}>{rep.winRate.toFixed(1)}%</div>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                <div><span className="text-muted-foreground">Won:</span> <span className="font-medium">{rep.wonQuotations}</span></div>
                <div><span className="text-muted-foreground">Lost:</span> <span className="font-medium">{rep.lostQuotations}</span></div>
                <div className="col-span-2"><span className="text-muted-foreground">Won Value:</span> <span className="font-medium">{formatCurrency(rep.wonValue)}</span></div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}