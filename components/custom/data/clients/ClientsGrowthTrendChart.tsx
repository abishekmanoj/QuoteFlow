"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ClientGrowthPoint } from "@/lib/dummy_data/clients";


type Props = { data: ClientGrowthPoint[] };

const cardClass = "h-full rounded-2xl border border-white/20 bg-white/30 shadow-xl backdrop-blur-2xl dark:border-white/10 dark:bg-white/10";

/* Hardcoded Colors */
const TOTAL = "#6366F1"; // Indigo
const ACTIVE = "#22C55E"; // Green
const NEW = "#F59E0B"; // Amber

export function ClientsGrowthTrendChart({ data }: Props) {
  return (
    <Card className={cardClass}>
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
          <TrendingUp className="h-4 w-4 text-primary" />
          Client Growth Trend
        </CardTitle>
        <CardDescription>
          Total clients, active clients, and new clients over time.
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Legend */}
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/30 px-3 py-1 text-xs dark:bg-white/5"><span className="h-2 w-2 rounded-full" style={{ backgroundColor: TOTAL }} />Total</div>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/30 px-3 py-1 text-xs dark:bg-white/5"><span className="h-2 w-2 rounded-full" style={{ backgroundColor: ACTIVE }} />Active</div>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/30 px-3 py-1 text-xs dark:bg-white/5"><span className="h-2 w-2 rounded-full" style={{ backgroundColor: NEW }} />New</div>
        </div>

        <div className="h-80 w-full">
          <ResponsiveContainer>
            <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              
              {/* Gradients */}
              <defs>
                <linearGradient id="totalGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={TOTAL} stopOpacity={0.35}/>
                  <stop offset="95%" stopColor={TOTAL} stopOpacity={0}/>
                </linearGradient>

                <linearGradient id="activeGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={ACTIVE} stopOpacity={0.35}/>
                  <stop offset="95%" stopColor={ACTIVE} stopOpacity={0}/>
                </linearGradient>

                <linearGradient id="newGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={NEW} stopOpacity={0.35}/>
                  <stop offset="95%" stopColor={NEW} stopOpacity={0}/>
                </linearGradient>
              </defs>

              <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />

              <XAxis dataKey="month" tick={{ fill: "rgba(255,255,255,0.7)", fontSize: 12 }} tickLine={false} axisLine={false} />
              <YAxis tick={{ fill: "rgba(255,255,255,0.7)", fontSize: 12 }} tickLine={false} axisLine={false} />

              <Tooltip
                contentStyle={{
                  background: "rgba(15,23,42,0.9)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                  backdropFilter: "blur(10px)",
                }}
              />

              {/* Areas */}
              <Area type="monotone" dataKey="totalClients" stroke={TOTAL} fill="url(#totalGradient)" strokeWidth={2.5} />
              <Area type="monotone" dataKey="activeClients" stroke={ACTIVE} fill="url(#activeGradient)" strokeWidth={2.5} />
              <Area type="monotone" dataKey="newClients" stroke={NEW} fill="url(#newGradient)" strokeWidth={2.5} />

            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}