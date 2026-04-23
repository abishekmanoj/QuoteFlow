"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type ProjectValueTrendPoint = {
  month: string;
  totalProjectValue: number;
  awardedValue: number;
  activeProjectCount: number;
};

type ProjectValueTrendChartProps = {
  data: ProjectValueTrendPoint[];
};

function formatCurrency(value: number) {
  if (value >= 1_000_000) return `AED ${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `AED ${(value / 1_000).toFixed(0)}K`;
  return `AED ${value}`;
}

export function ProjectValueTrendChart({
  data,
}: ProjectValueTrendChartProps) {
  return (
    <Card className="h-full rounded-2xl border border-white/10 bg-white/40 shadow-md backdrop-blur-xl dark:bg-white/5 dark:border-white/10">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold sm:text-lg">
          Project Value Trend
        </CardTitle>
        <CardDescription>
          Track total quoted project value and awarded value over time.
        </CardDescription>
      </CardHeader>

      <CardContent className="h-80 pt-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="totalProjectValueFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="currentColor" stopOpacity={0.28} />
                <stop offset="95%" stopColor="currentColor" stopOpacity={0.03} />
              </linearGradient>
              <linearGradient id="awardedValueFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="currentColor" stopOpacity={0.18} />
                <stop offset="95%" stopColor="currentColor" stopOpacity={0.02} />
              </linearGradient>
            </defs>

            <CartesianGrid
              vertical={false}
              stroke="currentColor"
              strokeOpacity={0.08}
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              className="text-xs"
            />

            <YAxis
              tickFormatter={formatCurrency}
              tickLine={false}
              axisLine={false}
              width={80}
              className="text-xs"
            />

            <Tooltip
              cursor={{ stroke: "currentColor", strokeOpacity: 0.12 }}
              content={({ active, payload, label }) => {
                if (!active || !payload?.length) return null;

                const totalProjectValue = payload.find(
                  (item) => item.dataKey === "totalProjectValue"
                )?.value as number | undefined;

                const awardedValue = payload.find(
                  (item) => item.dataKey === "awardedValue"
                )?.value as number | undefined;

                const activeProjectCount = payload[0]?.payload
                  ?.activeProjectCount as number | undefined;

                return (
                  <div className="min-w-55 rounded-2xl border border-white/10 bg-background/95 p-3 shadow-xl backdrop-blur">
                    <div className="mb-2 text-sm font-semibold">{label}</div>

                    <div className="space-y-1.5 text-sm">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-muted-foreground">Total Value</span>
                        <span className="font-medium">
                          {formatCurrency(totalProjectValue ?? 0)}
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-4">
                        <span className="text-muted-foreground">Awarded Value</span>
                        <span className="font-medium">
                          {formatCurrency(awardedValue ?? 0)}
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-4">
                        <span className="text-muted-foreground">Active Projects</span>
                        <span className="font-medium">
                          {activeProjectCount ?? 0}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              }}
            />

            <Area
              type="monotone"
              dataKey="totalProjectValue"
              stroke="currentColor"
              strokeOpacity={0.95}
              strokeWidth={2.4}
              fill="url(#totalProjectValueFill)"
            />

            <Area
              type="monotone"
              dataKey="awardedValue"
              stroke="currentColor"
              strokeOpacity={0.45}
              strokeWidth={2}
              fill="url(#awardedValueFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}