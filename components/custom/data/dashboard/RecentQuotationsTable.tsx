"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

type QuotationStatus = "draft" | "sent" | "awarded" | "lost" | "expired";

type RecentQuotation = {
  id: string;
  quotationNo: string;
  clientName: string;
  projectName: string;
  value: number;
  status: QuotationStatus;
  revisionNo: number;
  createdAt: string;
};

type RecentQuotationsTableProps = { data: RecentQuotation[]; };

function formatCurrency(value: number) {
  if (value >= 1000000) return `AED ${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `AED ${(value / 1000).toFixed(0)}K`;
  return `AED ${value}`;
}

function getStatusStyle(status: QuotationStatus) {
  switch (status) {
    case "draft": return "bg-blue-500/10 text-blue-500";
    case "sent": return "bg-indigo-500/10 text-indigo-500";
    case "awarded": return "bg-green-500/10 text-green-500";
    case "lost": return "bg-red-500/10 text-red-500";
    case "expired": return "bg-amber-500/10 text-amber-500";
  }
}

export function RecentQuotationsTable({ data }: RecentQuotationsTableProps) {
  return (
    <Card className="h-full flex flex-col rounded-2xl border border-white/10 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-md hover:shadow-xl">
      
      <CardHeader className="flex flex-col gap-0.5 pb-2">
        <CardTitle className="text-base font-semibold">Recent Quotations</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">Latest quotations across clients and projects.</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 overflow-auto pt-2">
        <div className="min-w-175">
          
          {/* HEADER */}
          <div className="grid grid-cols-6 gap-3 border-b border-white/10 pb-2 text-xs text-muted-foreground">
            <span>Quotation</span>
            <span>Client</span>
            <span>Project</span>
            <span className="text-right">Value</span>
            <span className="text-center">Rev</span>
            <span className="text-right">Status</span>
          </div>

          {/* ROWS */}
          <div className="mt-2 flex flex-col gap-1">
            {data.map((item) => (
              <div key={item.id} className="grid grid-cols-6 gap-3 rounded-lg px-2 py-2 hover:bg-white/20 dark:hover:bg-white/5 transition">
                
                <span className="text-sm font-medium truncate">{item.quotationNo}</span>
                
                <span className="text-sm text-muted-foreground truncate">{item.clientName}</span>
                
                <span className="text-sm text-muted-foreground truncate">{item.projectName}</span>
                
                <span className="text-sm text-right">{formatCurrency(item.value)}</span>
                
                <span className="text-sm text-center text-muted-foreground">{item.revisionNo}</span>
                
                <div className="flex justify-end">
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${getStatusStyle(item.status)}`}>
                    {item.status}
                  </span>
                </div>

              </div>
            ))}
          </div>

        </div>
      </CardContent>
    </Card>
  );
}