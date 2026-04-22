"use client";

import { Badge, Building2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ClientRow, ClientCategory, ClientHealth } from "@/lib/dummy_data/clients";


type AllClientsTableProps = { data: ClientRow[] };

const cardClass = "h-full rounded-2xl border border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-md";

const formatCurrency = (value: number) => {
  if (value >= 1000000) return `AED ${(value / 1000000).toFixed(2)}M`;
  if (value >= 1000) return `AED ${(value / 1000).toFixed(0)}K`;
  return `AED ${value.toLocaleString()}`;
};

const formatCategory = (category: ClientCategory) => {
  switch (category) {
    case "enterprise": return "Enterprise";
    case "government": return "Government";
    case "private": return "Private";
    case "healthcare": return "Healthcare";
    case "retail": return "Retail";
    default: return category;
  }
};

const getCategoryBadgeClass = (category: ClientCategory) => {
  switch (category) {
    case "enterprise": return "border-indigo-500/20 bg-indigo-500/10 text-indigo-600 dark:text-indigo-300";
    case "government": return "border-cyan-500/20 bg-cyan-500/10 text-cyan-600 dark:text-cyan-300";
    case "private": return "border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-300";
    case "healthcare": return "border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-300";
    case "retail": return "border-fuchsia-500/20 bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-300";
    default: return "border-white/10 bg-white/10 text-foreground";
  }
};

const getHealthBadgeClass = (health: ClientHealth) => {
  switch (health) {
    case "excellent": return "border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-300";
    case "good": return "border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-300";
    case "average": return "border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-300";
    case "at_risk": return "border-red-500/20 bg-red-500/10 text-red-600 dark:text-red-300";
    default: return "border-white/10 bg-white/10 text-foreground";
  }
};

const formatHealth = (health: ClientHealth) => {
  switch (health) {
    case "excellent": return "Excellent";
    case "good": return "Good";
    case "average": return "Average";
    case "at_risk": return "At Risk";
    default: return health;
  }
};

export function AllClientsTable({ data }: AllClientsTableProps) {
  return (
    <Card className={cardClass}>
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-base sm:text-lg"><Building2 className="h-4 w-4 text-primary/80" />All Clients</CardTitle>
        <CardDescription>Main client database with contact details, quotation metrics, awarded value, win rate, and account health.</CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="hidden xl:block overflow-hidden rounded-2xl border border-white/10">
          <div className="overflow-x-auto">
            <table className="w-full min-w-280 text-sm">
              <thead className="bg-black/5 dark:bg-white/5">
                <tr className="border-b border-white/10 text-left">
                  <th className="px-4 py-3 font-medium text-muted-foreground">Client</th>
                  <th className="px-4 py-3 font-medium text-muted-foreground">Contact</th>
                  <th className="px-4 py-3 font-medium text-muted-foreground">Quotations</th>
                  <th className="px-4 py-3 font-medium text-muted-foreground">Quoted Value</th>
                  <th className="px-4 py-3 font-medium text-muted-foreground">Awarded Value</th>
                  <th className="px-4 py-3 font-medium text-muted-foreground">Win Rate</th>
                  <th className="px-4 py-3 font-medium text-muted-foreground">Last Activity</th>
                  <th className="px-4 py-3 font-medium text-muted-foreground">Health</th>
                </tr>
              </thead>

              <tbody>
                {data.map((client) => (
                  <tr key={client.id} className="border-b border-white/10 transition-colors hover:bg-black/5 dark:hover:bg-white/5">
                    <td className="px-4 py-4 align-top">
                      <div className="flex min-w-0 flex-col">
                        <span className="truncate font-medium">{client.name}</span>
                        <div className="mt-1"><Badge variant="outline" className={`rounded-full border px-2 py-0.5 text-[11px] font-medium ${getCategoryBadgeClass(client.category)}`}>{formatCategory(client.category)}</Badge></div>
                      </div>
                    </td>

                    <td className="px-4 py-4 align-top">
                      <div className="flex min-w-0 flex-col">
                        <span className="truncate font-medium">{client.contactPerson}</span>
                        <span className="truncate text-xs text-muted-foreground">{client.email}</span>
                        <span className="truncate text-xs text-muted-foreground">{client.phone}</span>
                      </div>
                    </td>

                    <td className="px-4 py-4 align-top font-medium">{client.quotationCount}</td>
                    <td className="px-4 py-4 align-top font-medium">{formatCurrency(client.totalQuotedValue)}</td>
                    <td className="px-4 py-4 align-top font-medium">{formatCurrency(client.awardedValue)}</td>
                    <td className="px-4 py-4 align-top">
                      <div className="flex min-w-28 items-center gap-3">
                        <div className="h-2 flex-1 overflow-hidden rounded-full bg-black/10 dark:bg-white/10"><div className="h-full rounded-full bg-emerald-500" style={{ width: `${client.winRate}%` }} /></div>
                        <span className="text-xs font-medium text-muted-foreground">{client.winRate.toFixed(1)}%</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 align-top text-muted-foreground">{client.lastActivity}</td>
                    <td className="px-4 py-4 align-top">
                      <Badge variant="outline" className={`rounded-full border px-2 py-0.5 text-[11px] font-medium ${getHealthBadgeClass(client.health)}`}>{formatHealth(client.health)}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 xl:hidden">
            {data.map((client) => (
                <div key={client.id} className="rounded-2xl border border-white/10 bg-white/30 p-4 dark:bg-white/5">
                <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                    <div className="truncate font-medium">{client.name}</div>
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                        <Badge variant="outline" className={`rounded-full border px-2 py-0.5 text-[11px] font-medium ${getCategoryBadgeClass(client.category)}`}>
                        {formatCategory(client.category)}
                        </Badge>
                        <Badge variant="outline" className={`rounded-full border px-2 py-0.5 text-[11px] font-medium ${getHealthBadgeClass(client.health)}`}>
                        {formatHealth(client.health)}
                        </Badge>
                    </div>
                    </div>

                    <div className="text-right">
                    <div className="text-sm font-semibold">{client.winRate.toFixed(1)}%</div>
                    <div className="text-[11px] text-muted-foreground">Win Rate</div>
                    </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-xl border border-white/10 bg-black/5 px-3 py-2 dark:bg-white/5">
                    <div className="text-[11px] text-muted-foreground">Contact</div>
                    <div className="mt-1 truncate font-medium">{client.contactPerson}</div>
                    <div className="truncate text-xs text-muted-foreground">{client.email}</div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-black/5 px-3 py-2 dark:bg-white/5">
                    <div className="text-[11px] text-muted-foreground">Phone</div>
                    <div className="mt-1 truncate font-medium">{client.phone}</div>
                    <div className="truncate text-xs text-muted-foreground">Last: {client.lastActivity}</div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-black/5 px-3 py-2 dark:bg-white/5">
                    <div className="text-[11px] text-muted-foreground">Quotations</div>
                    <div className="mt-1 font-semibold">{client.quotationCount}</div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-black/5 px-3 py-2 dark:bg-white/5">
                    <div className="text-[11px] text-muted-foreground">Awarded Value</div>
                    <div className="mt-1 font-semibold">{formatCurrency(client.awardedValue)}</div>
                    </div>

                    <div className="col-span-2 rounded-xl border border-white/10 bg-black/5 px-3 py-2 dark:bg-white/5">
                    <div className="flex items-center justify-between gap-3">
                        <div>
                        <div className="text-[11px] text-muted-foreground">Quoted Value</div>
                        <div className="mt-1 font-semibold">{formatCurrency(client.totalQuotedValue)}</div>
                        </div>

                        <div className="min-w-30 flex-1">
                        <div className="mb-1 flex items-center justify-between text-[11px] text-muted-foreground">
                            <span>Conversion</span>
                            <span>{client.winRate.toFixed(1)}%</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
                            <div className="h-full rounded-full bg-emerald-500" style={{ width: `${client.winRate}%` }} />
                        </div>
                        </div>
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