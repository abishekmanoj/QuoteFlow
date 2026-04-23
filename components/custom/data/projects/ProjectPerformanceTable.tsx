"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ProjectPerformanceItem = {
  projectName: string;
  quotationCount: number;
  revisionCount: number;
  totalQuotedValue: number;
  awardedValue: number;
  winRate: number;
};

type Props = {
  data: ProjectPerformanceItem[];
};

function formatCurrency(value: number) {
  if (value >= 1_000_000) return `AED ${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `AED ${(value / 1_000).toFixed(0)}K`;
  return `AED ${value.toLocaleString()}`;
}

export function ProjectPerformanceTable({ data }: Props) {
  return (
    <Card className="h-full rounded-2xl border border-white/10 bg-white/40 backdrop-blur-xl dark:bg-white/5">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold sm:text-lg">
          Project Performance
        </CardTitle>
        <CardDescription>
          Compare quotation activity, revisions, value, and win rate by project.
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-2">
        <div className="hidden overflow-x-auto xl:block">
          <table className="w-full min-w-[760px] text-sm">
            <thead>
              <tr className="border-b border-white/10 text-left">
                <th className="px-3 py-3 font-medium text-muted-foreground">
                  Project
                </th>
                <th className="px-3 py-3 font-medium text-muted-foreground">
                  Quotes
                </th>
                <th className="px-3 py-3 font-medium text-muted-foreground">
                  Revisions
                </th>
                <th className="px-3 py-3 font-medium text-muted-foreground">
                  Total Value
                </th>
                <th className="px-3 py-3 font-medium text-muted-foreground">
                  Awarded
                </th>
                <th className="px-3 py-3 font-medium text-muted-foreground">
                  Win Rate
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((project) => (
                <tr
                  key={project.projectName}
                  className="border-b border-white/5 transition-colors hover:bg-white/20 dark:hover:bg-white/5"
                >
                  <td className="px-3 py-4 font-medium">{project.projectName}</td>
                  <td className="px-3 py-4">{project.quotationCount}</td>
                  <td className="px-3 py-4">{project.revisionCount}</td>
                  <td className="px-3 py-4 font-medium">
                    {formatCurrency(project.totalQuotedValue)}
                  </td>
                  <td className="px-3 py-4 font-medium">
                    {formatCurrency(project.awardedValue)}
                  </td>
                  <td className="px-3 py-4">
                    <span className="font-medium">{project.winRate}%</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 gap-3 xl:hidden">
          {data.map((project) => (
            <div
              key={project.projectName}
              className="rounded-2xl border border-white/10 bg-white/30 p-4 dark:bg-white/5"
            >
              <div className="min-w-0">
                <div className="truncate font-medium">{project.projectName}</div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl border border-white/10 bg-white/40 px-3 py-2 dark:bg-white/5">
                  <div className="text-xs text-muted-foreground">Quotes</div>
                  <div className="mt-1 font-medium">{project.quotationCount}</div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/40 px-3 py-2 dark:bg-white/5">
                  <div className="text-xs text-muted-foreground">Revisions</div>
                  <div className="mt-1 font-medium">{project.revisionCount}</div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/40 px-3 py-2 dark:bg-white/5">
                  <div className="text-xs text-muted-foreground">Total Value</div>
                  <div className="mt-1 font-medium">
                    {formatCurrency(project.totalQuotedValue)}
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/40 px-3 py-2 dark:bg-white/5">
                  <div className="text-xs text-muted-foreground">Awarded</div>
                  <div className="mt-1 font-medium">
                    {formatCurrency(project.awardedValue)}
                  </div>
                </div>
              </div>

              <div className="mt-4 border-t border-white/10 pt-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Win Rate</span>
                  <span className="font-medium">{project.winRate}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}