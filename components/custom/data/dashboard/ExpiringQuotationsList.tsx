"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

type QuotationStatus = "draft" | "sent" | "awarded" | "lost" | "expired";

type ExpiringQuotation = { id: string; quotationNo: string; clientName: string; expiryDate: string; daysLeft: number; value: number; status: QuotationStatus; };

type ExpiringQuotationsListProps = { data: ExpiringQuotation[]; };

function formatCurrency(value: number) {
  if (value >= 1000000) return `AED ${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `AED ${(value / 1000).toFixed(0)}K`;
  return `AED ${value}`;
}

function getDaysLeftTone(daysLeft: number) {
  if (daysLeft <= 2) return "text-red-500";
  if (daysLeft <= 5) return "text-amber-500";
  return "text-muted-foreground";
}

function getDaysLeftLabel(daysLeft: number) {
  if (daysLeft === 0) return "Expires today";
  if (daysLeft === 1) return "1 day left";
  return `${daysLeft} days left`;
}

export function ExpiringQuotationsList({ data }: ExpiringQuotationsListProps) {
  return (
    <Card className="h-full flex flex-col rounded-2xl border border-white/10 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-md hover:shadow-xl">
      <CardHeader className="flex flex-col gap-0.5 pb-2">
        <CardTitle className="text-base font-semibold">Expiring Quotations</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">Quotations that need follow-up before validity ends.</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 pt-2">
        <div className="flex flex-col gap-2">
          {data.map((item) => (
            <div key={item.id} className="rounded-xl border border-white/10 bg-white/30 px-3 py-3 dark:bg-white/5">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{item.quotationNo}</p>
                  <p className="truncate text-xs text-muted-foreground">{item.clientName}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm font-medium">{formatCurrency(item.value)}</p>
                  <p className={`text-xs ${getDaysLeftTone(item.daysLeft)}`}>{getDaysLeftLabel(item.daysLeft)}</p>
                </div>
              </div>

              <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                <span>Expiry: {item.expiryDate}</span>
                <span className="rounded-full bg-white/40 px-2 py-0.5 dark:bg-white/10">{item.status.charAt(0).toUpperCase() + item.status.slice(1)}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}