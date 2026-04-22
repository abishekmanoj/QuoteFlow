"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

type TopClient = { id: string; name: string; quotationCount: number; totalValue: number; awardedValue: number; conversionRate: number; };

type TopClientsTableProps = { data: TopClient[]; };

function formatCurrency(value: number) {
  if (value >= 1000000) return `AED ${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `AED ${(value / 1000).toFixed(0)}K`;
  return `AED ${value}`;
}

export function TopClientsTable({ data }: TopClientsTableProps) {
  return (
    <Card className="h-full flex flex-col rounded-2xl border border-white/10 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-md hover:shadow-xl">
      <CardHeader className="flex flex-col gap-0.5 pb-2">
        <CardTitle className="text-base font-semibold">Top Clients</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">Clients ranked by quotation value and awarded performance.</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 pt-2">
        <div className="flex flex-col gap-2">
          {data.map((item, index) => (
            <div key={item.id} className="rounded-xl border border-white/10 bg-white/30 px-3 py-3 dark:bg-white/5">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/50 text-xs font-semibold dark:bg-white/10">{index + 1}</span>
                    <p className="truncate text-sm font-medium">{item.name}</p>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{item.quotationCount} quotations</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm font-medium">{formatCurrency(item.totalValue)}</p>
                  <p className="text-xs text-muted-foreground">Total Value</p>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-lg bg-white/40 px-2.5 py-2 dark:bg-white/10">
                  <p className="text-muted-foreground">Awarded</p>
                  <p className="mt-1 font-medium">{formatCurrency(item.awardedValue)}</p>
                </div>
                <div className="rounded-lg bg-white/40 px-2.5 py-2 dark:bg-white/10">
                  <p className="text-muted-foreground">Conversion</p>
                  <p className="mt-1 font-medium">{item.conversionRate}%</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}