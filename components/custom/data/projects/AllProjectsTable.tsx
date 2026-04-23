"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ProjectType = "tender" | "job_in_hand";

type ProjectStatus =
  | "planning"
  | "quoting"
  | "negotiation"
  | "awarded"
  | "lost"
  | "completed";

type ProjectRow = {
  id: string;
  projectName: string;
  clientName: string;
  projectType: ProjectType;
  status: ProjectStatus;
  quotationCount: number;
  latestQuotationNo: string;
  totalQuotedValue: number;
  awardedValue: number;
  winRate: number;
  lastActivity: string;
};

type Props = {
  data: ProjectRow[];
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

function formatStatus(status: ProjectStatus) {
  switch (status) {
    case "planning":
      return "Planning";
    case "quoting":
      return "Quoting";
    case "negotiation":
      return "Negotiation";
    case "awarded":
      return "Awarded";
    case "lost":
      return "Lost";
    case "completed":
      return "Completed";
    default:
      return status;
  }
}

function getStatusBadgeClass(status: ProjectStatus) {
  switch (status) {
    case "planning":
      return "border-slate-500/30 bg-slate-500/10 text-slate-600 dark:text-slate-300";
    case "quoting":
      return "border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-300";
    case "negotiation":
      return "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-300";
    case "awarded":
      return "border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-300";
    case "lost":
      return "border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-300";
    case "completed":
      return "border-violet-500/30 bg-violet-500/10 text-violet-600 dark:text-violet-300";
    default:
      return "border-border bg-background text-foreground";
  }
}

export function AllProjectsTable({ data }: Props) {
  return (
    <Card className="h-full rounded-2xl border border-white/10 bg-white/40 backdrop-blur-xl dark:bg-white/5">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold sm:text-lg">
          All Projects
        </CardTitle>
        <CardDescription>
          Track project pipeline, quotation activity, and awarded value.
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-2">
        <div className="hidden overflow-x-auto xl:block">
          <table className="w-full min-w-[980px] text-sm">
            <thead>
              <tr className="border-b border-white/10 text-left">
                <th className="px-3 py-3 font-medium text-muted-foreground">
                  Project
                </th>
                <th className="px-3 py-3 font-medium text-muted-foreground">
                  Type
                </th>
                <th className="px-3 py-3 font-medium text-muted-foreground">
                  Status
                </th>
                <th className="px-3 py-3 font-medium text-muted-foreground">
                  Quotes
                </th>
                <th className="px-3 py-3 font-medium text-muted-foreground">
                  Latest Quote
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
                <th className="px-3 py-3 font-medium text-muted-foreground">
                  Last Activity
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((project) => (
                <tr
                  key={project.id}
                  className="border-b border-white/5 transition-colors hover:bg-white/20 dark:hover:bg-white/5"
                >
                  <td className="px-3 py-4 align-top">
                    <div className="min-w-0">
                      <div className="flex items-start gap-2">
                        <div className="min-w-0">
                          <div className="truncate font-medium">
                            {project.projectName}
                          </div>
                          <div className="mt-1 truncate text-xs text-muted-foreground">
                            {project.clientName}
                          </div>
                        </div>

                        <Link
                          href={`/projects/${project.id}`}
                          className="mt-0.5 shrink-0 text-muted-foreground transition hover:text-foreground"
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </td>

                  <td className="px-3 py-4 align-top">
                    <Badge
                      variant="outline"
                      className={`rounded-full border px-2.5 py-1 text-[11px] font-medium ${getProjectTypeBadgeClass(project.projectType)}`}
                    >
                      {formatProjectType(project.projectType)}
                    </Badge>
                  </td>

                  <td className="px-3 py-4 align-top">
                    <Badge
                      variant="outline"
                      className={`rounded-full border px-2.5 py-1 text-[11px] font-medium ${getStatusBadgeClass(project.status)}`}
                    >
                      {formatStatus(project.status)}
                    </Badge>
                  </td>

                  <td className="px-3 py-4 align-top font-medium">
                    {project.quotationCount}
                  </td>

                  <td className="px-3 py-4 align-top text-muted-foreground">
                    {project.latestQuotationNo}
                  </td>

                  <td className="px-3 py-4 align-top font-medium">
                    {formatCurrency(project.totalQuotedValue)}
                  </td>

                  <td className="px-3 py-4 align-top font-medium">
                    {formatCurrency(project.awardedValue)}
                  </td>

                  <td className="px-3 py-4 align-top">
                    <span className="font-medium">{project.winRate}%</span>
                  </td>

                  <td className="px-3 py-4 align-top text-muted-foreground">
                    {project.lastActivity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 gap-3 xl:hidden">
          {data.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-white/10 bg-white/30 p-4 dark:bg-white/5"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="truncate font-medium">
                    {project.projectName}
                  </div>
                  <div className="mt-1 truncate text-sm text-muted-foreground">
                    {project.clientName}
                  </div>

                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <Badge
                      variant="outline"
                      className={`rounded-full border px-2 py-0.5 text-[11px] font-medium ${getProjectTypeBadgeClass(project.projectType)}`}
                    >
                      {formatProjectType(project.projectType)}
                    </Badge>

                    <Badge
                      variant="outline"
                      className={`rounded-full border px-2 py-0.5 text-[11px] font-medium ${getStatusBadgeClass(project.status)}`}
                    >
                      {formatStatus(project.status)}
                    </Badge>
                  </div>
                </div>

                <Link
                  href={`/projects/${project.id}`}
                  className="shrink-0 rounded-full border border-white/10 p-2 text-muted-foreground transition hover:bg-white/40 hover:text-foreground dark:hover:bg-white/10"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl border border-white/10 bg-white/40 px-3 py-2 dark:bg-white/5">
                  <div className="text-xs text-muted-foreground">Quotes</div>
                  <div className="mt-1 font-medium">{project.quotationCount}</div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/40 px-3 py-2 dark:bg-white/5">
                  <div className="text-xs text-muted-foreground">Win Rate</div>
                  <div className="mt-1 font-medium">{project.winRate}%</div>
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

              <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/10 pt-3 text-xs text-muted-foreground">
                <span className="truncate">
                  Latest: {project.latestQuotationNo}
                </span>
                <span>{project.lastActivity}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}