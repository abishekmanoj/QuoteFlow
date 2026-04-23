"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ProjectStatus =
  | "planning"
  | "quoting"
  | "negotiation"
  | "awarded"
  | "lost"
  | "completed";

type HighValueProjectItem = {
  projectName: string;
  clientName: string;
  totalQuotedValue: number;
  awardedValue: number;
  status: ProjectStatus;
};

type Props = {
  data: HighValueProjectItem[];
};

const STATUS_CONFIG: Record<ProjectStatus, { label: string; className: string }> = {
  planning: {
    label: "Planning",
    className:
      "border-slate-500/30 bg-slate-500/10 text-slate-600 dark:text-slate-300",
  },
  quoting: {
    label: "Quoting",
    className:
      "border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-300",
  },
  negotiation: {
    label: "Negotiation",
    className:
      "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-300",
  },
  awarded: {
    label: "Awarded",
    className:
      "border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-300",
  },
  lost: {
    label: "Lost",
    className:
      "border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-300",
  },
  completed: {
    label: "Completed",
    className:
      "border-violet-500/30 bg-violet-500/10 text-violet-600 dark:text-violet-300",
  },
};

function formatCurrency(value: number) {
  if (value >= 1_000_000) return `AED ${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `AED ${(value / 1_000).toFixed(0)}K`;
  return `AED ${value.toLocaleString()}`;
}

export function HighValueProjectsList({ data }: Props) {
  return (
    <Card className="h-full rounded-2xl border border-white/10 bg-white/40 backdrop-blur-xl dark:bg-white/5">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold sm:text-lg">
          High Value Projects
        </CardTitle>
        <CardDescription>
          Top projects by quoted value and awarded amount.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-3 pt-2">
        {data.map((project) => (
          <div
            key={`${project.projectName}-${project.clientName}`}
            className="rounded-2xl border border-white/10 bg-white/30 p-4 dark:bg-white/5"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="truncate font-medium">{project.projectName}</div>
                <div className="mt-1 truncate text-sm text-muted-foreground">
                  {project.clientName}
                </div>
              </div>

              <Badge
                variant="outline"
                className={`shrink-0 rounded-full border px-2.5 py-1 text-[11px] font-medium ${STATUS_CONFIG[project.status].className}`}
              >
                {STATUS_CONFIG[project.status].label}
              </Badge>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/10 bg-white/40 px-3 py-2 dark:bg-white/5">
                <div className="text-xs text-muted-foreground">Quoted Value</div>
                <div className="mt-1 font-medium">
                  {formatCurrency(project.totalQuotedValue)}
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/40 px-3 py-2 dark:bg-white/5">
                <div className="text-xs text-muted-foreground">Awarded Value</div>
                <div className="mt-1 font-medium">
                  {formatCurrency(project.awardedValue)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}