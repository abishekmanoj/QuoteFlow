"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type QuotationStatus = "draft" | "sent" | "awarded" | "lost" | "expired";
type QuotationTemplateType = "international" | "local" | "simple";

type QuotationRow = {
  id: string;
  quotationNo: string;
  clientName: string;
  projectName: string;
  projectType: "tender" | "job_in_hand";
  estimator: string;
  salesRep: string;
  templateMix: QuotationTemplateType[];
  revisionNo: number;
  totalValue: number;
  status: QuotationStatus;
  createdAt: string;
  updatedAt: string;
};

type AllQuotationsTableProps = {
  data: QuotationRow[];
};

function formatCurrency(value: number) {
  if (value >= 1000000) return `AED ${(value / 1000000).toFixed(2)}M`;
  if (value >= 1000) return `AED ${(value / 1000).toFixed(1)}K`;
  return `AED ${value}`;
}

function formatStatus(status: QuotationStatus) {
  if (status === "draft") return "Draft";
  if (status === "sent") return "Sent";
  if (status === "awarded") return "Awarded";
  if (status === "lost") return "Lost";
  return "Expired";
}

function formatProjectType(type: "tender" | "job_in_hand") {
  return type === "job_in_hand" ? "Job in Hand" : "Tender";
}

function getStatusBadgeClass(status: QuotationStatus) {
  if (status === "draft") return "border-slate-500/20 bg-slate-500/10 text-slate-600 dark:text-slate-300";
  if (status === "sent") return "border-indigo-500/20 bg-indigo-500/10 text-indigo-600 dark:text-indigo-300";
  if (status === "awarded") return "border-green-500/20 bg-green-500/10 text-green-600 dark:text-green-300";
  if (status === "lost") return "border-red-500/20 bg-red-500/10 text-red-600 dark:text-red-300";
  return "border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-300";
}

function getTemplateBadgeClass(template: QuotationTemplateType) {
  if (template === "international") return "border-sky-500/20 bg-sky-500/10 text-sky-600 dark:text-sky-300";
  if (template === "local") return "border-violet-500/20 bg-violet-500/10 text-violet-600 dark:text-violet-300";
  return "border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-300";
}

function formatTemplate(template: QuotationTemplateType) {
  if (template === "international") return "International";
  if (template === "local") return "Local";
  return "Simple";
}

export function AllQuotationsTable({ data }: AllQuotationsTableProps) {
  return (
    <Card className="h-full rounded-2xl border border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-md">
      <CardHeader className="flex flex-col gap-1">
        <CardTitle className="text-base font-semibold">All Quotations</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">View quotation details, ownership, value, templates, and current status.</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="hidden overflow-x-auto xl:block">
          <table className="w-full min-w-[1100px] text-sm">
            <thead>
              <tr className="border-b border-white/10 text-left text-muted-foreground">
                <th className="px-3 py-3 font-medium">Quotation</th>
                <th className="px-3 py-3 font-medium">Client / Project</th>
                <th className="px-3 py-3 font-medium">Type</th>
                <th className="px-3 py-3 font-medium">Estimator</th>
                <th className="px-3 py-3 font-medium">Sales Rep</th>
                <th className="px-3 py-3 font-medium">Templates</th>
                <th className="px-3 py-3 font-medium">Revision</th>
                <th className="px-3 py-3 font-medium">Value</th>
                <th className="px-3 py-3 font-medium">Status</th>
                <th className="px-3 py-3 font-medium">Updated</th>
              </tr>
            </thead>

            <tbody>
              {data.map((quotation) => (
                <tr key={quotation.id} className="border-b border-white/5 transition-colors hover:bg-white/30 dark:hover:bg-white/5">
                  <td className="px-3 py-4 align-top">
                    <div className="font-medium">{quotation.quotationNo}</div>
                    <div className="mt-1 text-xs text-muted-foreground">Created {quotation.createdAt}</div>
                  </td>

                  <td className="px-3 py-4 align-top">
                    <div className="font-medium">{quotation.clientName}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{quotation.projectName}</div>
                  </td>

                  <td className="px-3 py-4 align-top">
                    <Badge variant="outline" className="rounded-full border-white/10 bg-white/30 px-2 py-0.5 text-[11px] font-medium dark:bg-white/5">{formatProjectType(quotation.projectType)}</Badge>
                  </td>

                  <td className="px-3 py-4 align-top">
                    <div>{quotation.estimator}</div>
                  </td>

                  <td className="px-3 py-4 align-top">
                    <div>{quotation.salesRep}</div>
                  </td>

                  <td className="px-3 py-4 align-top">
                    <div className="flex max-w-[220px] flex-wrap gap-1.5">
                      {quotation.templateMix.map((template) => (
                        <Badge key={template} variant="outline" className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${getTemplateBadgeClass(template)}`}>{formatTemplate(template)}</Badge>
                      ))}
                    </div>
                  </td>

                  <td className="px-3 py-4 align-top">
                    <div className="font-medium">Rev {quotation.revisionNo}</div>
                  </td>

                  <td className="px-3 py-4 align-top">
                    <div className="font-medium">{formatCurrency(quotation.totalValue)}</div>
                  </td>

                  <td className="px-3 py-4 align-top">
                    <Badge variant="outline" className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${getStatusBadgeClass(quotation.status)}`}>{formatStatus(quotation.status)}</Badge>
                  </td>

                  <td className="px-3 py-4 align-top">
                    <div className="text-sm">{quotation.updatedAt}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 gap-3 xl:hidden">
          {data.map((quotation) => (
            <div key={quotation.id} className="rounded-2xl border border-white/10 bg-white/30 p-4 dark:bg-white/5">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="truncate font-medium">{quotation.quotationNo}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{quotation.clientName}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{quotation.projectName}</div>
                </div>
                <Badge variant="outline" className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${getStatusBadgeClass(quotation.status)}`}>{formatStatus(quotation.status)}</Badge>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                <div><span className="text-muted-foreground">Type:</span> <span className="font-medium">{formatProjectType(quotation.projectType)}</span></div>
                <div><span className="text-muted-foreground">Revision:</span> <span className="font-medium">Rev {quotation.revisionNo}</span></div>
                <div><span className="text-muted-foreground">Estimator:</span> <span className="font-medium">{quotation.estimator}</span></div>
                <div><span className="text-muted-foreground">Sales:</span> <span className="font-medium">{quotation.salesRep}</span></div>
                <div><span className="text-muted-foreground">Value:</span> <span className="font-medium">{formatCurrency(quotation.totalValue)}</span></div>
                <div><span className="text-muted-foreground">Updated:</span> <span className="font-medium">{quotation.updatedAt}</span></div>
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {quotation.templateMix.map((template) => (
                  <Badge key={template} variant="outline" className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${getTemplateBadgeClass(template)}`}>{formatTemplate(template)}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}