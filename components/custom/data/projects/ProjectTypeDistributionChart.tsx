"use client";

import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ProjectType = "tender" | "job_in_hand";

type ProjectTypeDistributionItem = {
  type: ProjectType;
  count: number;
  value: number;
};

type Props = {
  data: ProjectTypeDistributionItem[];
};

const TYPE_CONFIG: Record<
  ProjectType,
  { label: string; color: string }
> = {
  tender: {
    label: "Tender",
    color: "#6366F1", // Indigo
  },
  job_in_hand: {
    label: "Job in Hand",
    color: "#22C55E", // Green
  },
};

function formatCurrency(value: number) {
  if (value >= 1_000_000) return `AED ${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `AED ${(value / 1_000).toFixed(0)}K`;
  return `AED ${value}`;
}

export function ProjectTypeDistributionChart({ data }: Props) {
  const totalCount = data.reduce((sum, item) => sum + item.count, 0);

  return (
    <Card className="h-full rounded-2xl border border-white/10 bg-white/40 backdrop-blur-xl dark:bg-white/5">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold sm:text-lg">
          Project Type Distribution
        </CardTitle>
        <CardDescription>
          Tender vs Job in Hand split
        </CardDescription>
      </CardHeader>

      <CardContent className="flex h-[320px] flex-col gap-3 pt-2">
        
        {/* ===== DONUT CHART ===== */}
        <div className="relative h-[220px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip
                content={({ active, payload }) => {
                  if (!active || !payload?.length) return null;

                  const item = payload[0]?.payload as ProjectTypeDistributionItem;
                  const percentage =
                    totalCount > 0
                      ? ((item.count / totalCount) * 100).toFixed(1)
                      : "0";

                  return (
                    <div className="rounded-xl border border-white/10 bg-background/95 p-3 text-sm shadow-lg backdrop-blur">
                      <div className="mb-1 font-medium">
                        {TYPE_CONFIG[item.type].label}
                      </div>
                      <div className="text-muted-foreground">
                        {item.count} projects
                      </div>
                      <div className="font-medium">
                        {formatCurrency(item.value)}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {percentage}%
                      </div>
                    </div>
                  );
                }}
              />

              <Pie
                data={data}
                dataKey="count"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={5}
                stroke="transparent"
              >
                {data.map((entry) => (
                  <Cell
                    key={entry.type}
                    fill={TYPE_CONFIG[entry.type].color}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* CENTER TEXT */}
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-2xl font-semibold">{totalCount}</div>
            <div className="text-xs text-muted-foreground">Projects</div>
          </div>
        </div>

        {/* ===== SINGLE ROW LEGEND ===== */}
        <div className="grid grid-cols-2 gap-2">
          {data.map((item) => {
            const percentage =
              totalCount > 0 ? (item.count / totalCount) * 100 : 0;

            return (
              <div
                key={item.type}
                className="flex items-center justify-between rounded-lg border border-white/10 bg-white/30 px-3 py-2 text-sm dark:bg-white/5"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: TYPE_CONFIG[item.type].color }}
                  />
                  <span className="font-medium">
                    {TYPE_CONFIG[item.type].label}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{item.count}</span>
                  <span>{percentage.toFixed(1)}%</span>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}