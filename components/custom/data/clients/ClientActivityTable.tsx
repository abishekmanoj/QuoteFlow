"use client";

import { Activity } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { ClientActivityItem } from "@/lib/dummy-data/clients";

type ClientActivityTableProps = { data: ClientActivityItem[] };

const cardClass = "h-full rounded-2xl border border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-md";

const getActivityToneClass = (value: number, tone: "created" | "sent" | "awarded" | "lost") => {
  if (tone === "created") return "text-indigo-600 dark:text-indigo-300";
  if (tone === "sent") return "text-blue-600 dark:text-blue-300";
  if (tone === "awarded") return "text-emerald-600 dark:text-emerald-300";
  return "text-red-600 dark:text-red-300";
};

export function ClientActivityTable({ data }: ClientActivityTableProps) {
  return (
    <Card className={cardClass}>
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-base sm:text-lg"><Activity className="h-4 w-4 text-primary/80" />Client Activity</CardTitle>
        <CardDescription>Quotation movement by client including created, sent, awarded, lost, and recent activity.</CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="hidden md:block overflow-hidden rounded-2xl border border-white/10">
          <div className="overflow-x-auto">
            <table className="w-full min-w-190 text-sm">
              <thead className="bg-black/5 dark:bg-white/5">
                <tr className="border-b border-white/10 text-left">
                  <th className="px-4 py-3 font-medium text-muted-foreground">Client</th>
                  <th className="px-4 py-3 font-medium text-muted-foreground">Created</th>
                  <th className="px-4 py-3 font-medium text-muted-foreground">Sent</th>
                  <th className="px-4 py-3 font-medium text-muted-foreground">Awarded</th>
                  <th className="px-4 py-3 font-medium text-muted-foreground">Lost</th>
                  <th className="px-4 py-3 font-medium text-muted-foreground">Last Activity</th>
                </tr>
              </thead>

              <tbody>
                {data.map((item) => (
                  <tr key={item.id} className="border-b border-white/10 transition-colors hover:bg-black/5 dark:hover:bg-white/5">
                    <td className="px-4 py-4 align-middle font-medium">{item.clientName}</td>
                    <td className={`px-4 py-4 align-middle font-semibold ${getActivityToneClass(item.quotationsCreated, "created")}`}>{item.quotationsCreated}</td>
                    <td className={`px-4 py-4 align-middle font-semibold ${getActivityToneClass(item.quotationsSent, "sent")}`}>{item.quotationsSent}</td>
                    <td className={`px-4 py-4 align-middle font-semibold ${getActivityToneClass(item.awardedCount, "awarded")}`}>{item.awardedCount}</td>
                    <td className={`px-4 py-4 align-middle font-semibold ${getActivityToneClass(item.lostCount, "lost")}`}>{item.lostCount}</td>
                    <td className="px-4 py-4 align-middle text-muted-foreground">{item.lastActivity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 md:hidden">
          {data.map((item) => (
            <div key={item.id} className="rounded-2xl border border-white/10 bg-white/30 p-4 dark:bg-white/5">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="truncate font-medium">{item.clientName}</div>
                  <div className="mt-1 text-xs text-muted-foreground">Latest: {item.lastActivity}</div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl border border-white/10 bg-black/5 px-3 py-2 dark:bg-white/5">
                  <div className="text-[11px] text-muted-foreground">Created</div>
                  <div className={`mt-1 font-semibold ${getActivityToneClass(item.quotationsCreated, "created")}`}>{item.quotationsCreated}</div>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/5 px-3 py-2 dark:bg-white/5">
                  <div className="text-[11px] text-muted-foreground">Sent</div>
                  <div className={`mt-1 font-semibold ${getActivityToneClass(item.quotationsSent, "sent")}`}>{item.quotationsSent}</div>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/5 px-3 py-2 dark:bg-white/5">
                  <div className="text-[11px] text-muted-foreground">Awarded</div>
                  <div className={`mt-1 font-semibold ${getActivityToneClass(item.awardedCount, "awarded")}`}>{item.awardedCount}</div>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/5 px-3 py-2 dark:bg-white/5">
                  <div className="text-[11px] text-muted-foreground">Lost</div>
                  <div className={`mt-1 font-semibold ${getActivityToneClass(item.lostCount, "lost")}`}>{item.lostCount}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}