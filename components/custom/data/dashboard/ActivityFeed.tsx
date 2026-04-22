"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BadgeCheck, FileText, PencilLine, Send, UserPlus, XCircle } from "lucide-react";

type ActivityType = "quotation_created" | "quotation_sent" | "quotation_awarded" | "quotation_lost" | "revision_added" | "client_added";

type ActivityFeedItem = { id: string; type: ActivityType; title: string; description: string; timestamp: string; };

type ActivityFeedProps = { data: ActivityFeedItem[]; };

function getActivityIcon(type: ActivityType) {
  switch (type) {
    case "quotation_created": return FileText;
    case "quotation_sent": return Send;
    case "quotation_awarded": return BadgeCheck;
    case "quotation_lost": return XCircle;
    case "revision_added": return PencilLine;
    case "client_added": return UserPlus;
  }
}

function getActivityIconStyle(type: ActivityType) {
  switch (type) {
    case "quotation_created": return "bg-blue-500/10 text-blue-500";
    case "quotation_sent": return "bg-indigo-500/10 text-indigo-500";
    case "quotation_awarded": return "bg-green-500/10 text-green-500";
    case "quotation_lost": return "bg-red-500/10 text-red-500";
    case "revision_added": return "bg-amber-500/10 text-amber-500";
    case "client_added": return "bg-cyan-500/10 text-cyan-500";
  }
}

export function ActivityFeed({ data }: ActivityFeedProps) {
  return (
    <Card className="h-full flex flex-col rounded-2xl border border-white/10 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-md hover:shadow-xl">
      <CardHeader className="flex flex-col gap-0.5 pb-2">
        <CardTitle className="text-base font-semibold">Activity Feed</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">Latest quotation and client activity across the system.</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 pt-2">
        <div className="flex flex-col gap-3">
          {data.map((item) => {
            const Icon = getActivityIcon(item.type);

            return (
              <div key={item.id} className="flex gap-3 rounded-xl border border-white/10 bg-white/30 px-3 py-3 dark:bg-white/5">
                <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${getActivityIconStyle(item.type)}`}>
                  <Icon className="h-4 w-4" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-medium">{item.title}</p>
                    <span className="shrink-0 text-xs text-muted-foreground">{item.timestamp}</span>
                  </div>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}