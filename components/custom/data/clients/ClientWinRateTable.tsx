"use client";

import { Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { ClientWinRateItem } from "@/lib/dummy-data/clients";

type ClientWinRateTableProps = { data: ClientWinRateItem[] };

const cardClass = "h-full rounded-2xl border border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-md";

const getWinRateToneClass = (winRate: number) => {
  if (winRate >= 40) return "text-emerald-600 dark:text-emerald-300";
  if (winRate >= 30) return "text-blue-600 dark:text-blue-300";
  if (winRate >= 20) return "text-amber-600 dark:text-amber-300";
  return "text-red-600 dark:text-red-300";
};

export function ClientWinRateTable({ data }: ClientWinRateTableProps) {
  return (
    <Card className={cardClass}>
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-base sm:text-lg"><Target className="h-4 w-4 text-primary/80" />Client Win Rate</CardTitle>
        <CardDescription>Client ranking by total quotations, won quotations, and conversion performance.</CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="hidden md:block overflow-hidden rounded-2xl border border-white/10">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-sm">
              <thead className="bg-black/5 dark:bg-white/5">
                <tr className="border-b border-white/10 text-left">
                  <th className="px-4 py-3 font-medium text-muted-foreground">Client</th>
                  <th className="px-4 py-3 font-medium text-muted-foreground">Total Quotations</th>
                  <th className="px-4 py-3 font-medium text-muted-foreground">Won Quotations</th>
                  <th className="px-4 py-3 font-medium text-muted-foreground">Win Rate</th>
                </tr>
              </thead>

              <tbody>
                {data.map((item) => (
                  <tr key={item.clientName} className="border-b border-white/10 transition-colors hover:bg-black/5 dark:hover:bg-white/5">
                    <td className="px-4 py-4 align-middle font-medium">{item.clientName}</td>
                    <td className="px-4 py-4 align-middle font-semibold">{item.totalQuotations}</td>
                    <td className="px-4 py-4 align-middle font-semibold">{item.wonQuotations}</td>
                    <td className="px-4 py-4 align-middle">
                      <div className="flex min-w-[140px] items-center gap-3">
                        <div className="h-2 flex-1 overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
                          <div className="h-full rounded-full bg-emerald-500" style={{ width: `${item.winRate}%` }} />
                        </div>
                        <span className={`text-xs font-semibold ${getWinRateToneClass(item.winRate)}`}>{item.winRate.toFixed(1)}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 md:hidden">
          {data.map((item) => (
            <div key={item.clientName} className="rounded-2xl border border-white/10 bg-white/30 p-4 dark:bg-white/5">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="truncate font-medium">{item.clientName}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{item.wonQuotations} won out of {item.totalQuotations} quotations</div>
                </div>
                <div className={`text-sm font-semibold ${getWinRateToneClass(item.winRate)}`}>{item.winRate.toFixed(1)}%</div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl border border-white/10 bg-black/5 px-3 py-2 dark:bg-white/5">
                  <div className="text-[11px] text-muted-foreground">Total Quotations</div>
                  <div className="mt-1 font-semibold">{item.totalQuotations}</div>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/5 px-3 py-2 dark:bg-white/5">
                  <div className="text-[11px] text-muted-foreground">Won Quotations</div>
                  <div className="mt-1 font-semibold">{item.wonQuotations}</div>
                </div>

                <div className="col-span-2 rounded-xl border border-white/10 bg-black/5 px-3 py-2 dark:bg-white/5">
                  <div className="mb-1 flex items-center justify-between text-[11px] text-muted-foreground">
                    <span>Conversion</span>
                    <span>{item.winRate.toFixed(1)}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
                    <div className="h-full rounded-full bg-emerald-500" style={{ width: `${item.winRate}%` }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}