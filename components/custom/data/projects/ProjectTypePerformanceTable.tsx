"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ProjectType = "tender" | "job_in_hand";

type ProjectTypePerformanceItem = {
  projectType: ProjectType;
  totalProjects: number;
  totalQuotedValue: number;
  awardedValue: number;
  winRate: number;
};

type Props = {
  data: ProjectTypePerformanceItem[];
};

function formatCurrency(value: number) {
  if (value >= 1_000_000) return `AED ${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `AED ${(value / 1_000).toFixed(0)}K`;
  return `AED ${value.toLocaleString()}`;
}

function formatProjectType(type: ProjectType) {
  return type === "job_in_hand" ? "Job in Hand" : "Tender";
}

function getProjectTypeBadgeClass(type: ProjectType) {
  switch (type) {
    case "tender":
      return "border-indigo-500/30 bg-indigo-500/10 text-indigo-600 dark:text-indigo-300";
    case "job_in_hand":
      return "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-300";
    default:
      return "border-border bg-background text-foreground";
  }
}

export function ProjectTypePerformanceTable({ data }: Props) {
  return (
    <Card className="h-full rounded-2xl border border-white/10 bg-white/40 backdrop-blur-xl dark:bg-white/5">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold sm:text-lg">
          Project Type Performance
        </CardTitle>
        <CardDescription>
          Compare tenders and jobs in hand by volume, value, and conversion.
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-2">
        <div className="hidden overflow-x-auto md:block">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="border-b border-white/10 text-left">
                <th className="px-3 py-3 font-medium text-muted-foreground">
                  Type
                </th>
                <th className="px-3 py-3 font-medium text-muted-foreground">
                  Total Projects
                </th>
                <th className="px-3 py-3 font-medium text-muted-foreground">
                  Total Quoted Value
                </th>
                <th className="px-3 py-3 font-medium text-muted-foreground">
                  Awarded Value
                </th>
                <th className="px-3 py-3 font-medium text-muted-foreground">
                  Win Rate
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((item) => (
                <tr
                  key={item.projectType}
                  className="border-b border-white/5 transition-colors hover:bg-white/20 dark:hover:bg-white/5"
                >
                  <td className="px-3 py-4">
                    <Badge
                      variant="outline"
                      className={`rounded-full border px-2.5 py-1 text-[11px] font-medium ${getProjectTypeBadgeClass(item.projectType)}`}
                    >
                      {formatProjectType(item.projectType)}
                    </Badge>
                  </td>

                  <td className="px-3 py-4 font-medium">{item.totalProjects}</td>

                  <td className="px-3 py-4 font-medium">
                    {formatCurrency(item.totalQuotedValue)}
                  </td>

                  <td className="px-3 py-4 font-medium">
                    {formatCurrency(item.awardedValue)}
                  </td>

                  <td className="px-3 py-4">
                    <span className="font-medium">{item.winRate}%</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 gap-3 md:hidden">
          {data.map((item) => (
            <div
              key={item.projectType}
              className="rounded-2xl border border-white/10 bg-white/30 p-4 dark:bg-white/5"
            >
              <div className="flex items-center justify-between gap-3">
                <Badge
                  variant="outline"
                  className={`rounded-full border px-2.5 py-1 text-[11px] font-medium ${getProjectTypeBadgeClass(item.projectType)}`}
                >
                  {formatProjectType(item.projectType)}
                </Badge>

                <span className="text-sm font-medium">{item.winRate}%</span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl border border-white/10 bg-white/40 px-3 py-2 dark:bg-white/5">
                  <div className="text-xs text-muted-foreground">
                    Total Projects
                  </div>
                  <div className="mt-1 font-medium">{item.totalProjects}</div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/40 px-3 py-2 dark:bg-white/5">
                  <div className="text-xs text-muted-foreground">Win Rate</div>
                  <div className="mt-1 font-medium">{item.winRate}%</div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/40 px-3 py-2 dark:bg-white/5">
                  <div className="text-xs text-muted-foreground">
                    Total Quoted Value
                  </div>
                  <div className="mt-1 font-medium">
                    {formatCurrency(item.totalQuotedValue)}
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/40 px-3 py-2 dark:bg-white/5">
                  <div className="text-xs text-muted-foreground">
                    Awarded Value
                  </div>
                  <div className="mt-1 font-medium">
                    {formatCurrency(item.awardedValue)}
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