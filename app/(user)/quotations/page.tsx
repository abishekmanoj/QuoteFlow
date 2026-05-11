import { QuotationValueTrendChart } from "@/components/custom/data/quotations/QuotationValueTrendChart";
import { AllQuotationsTable } from "@/components/custom/data/quotations/AllQuotataionsTable";
import { EstimatorPerformanceTable } from "@/components/custom/data/quotations/EstimationPerformanceTable";
import { KPICard } from "@/components/custom/data/quotations/KPICard";
import { MarginBandChart } from "@/components/custom/data/quotations/MarginBandChart";
import { QuotationStatusDistributionChart } from "@/components/custom/data/quotations/QuotationStatusDistributionChart";
import { RevisionImpactChart } from "@/components/custom/data/quotations/RevisionImpact";
import { SalesRepPerformanceTable } from "@/components/custom/data/quotations/SalesRepPerformanceTable";
import { StatusOverTimeChart } from "@/components/custom/data/quotations/StatusOverTimeChart";
import { WinLossMonthlyChart } from "@/components/custom/data/quotations/WinLossMonthlyChart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {  estimatorPerformanceData, quotationMarginBandData, quotationsPageKpiData, quotationsTableData, quotationStatusDistributionData, quotationStatusOverTimeData, quotationValueTrendData, revisionImpactData, salesRepPerformanceData, winLossMonthlyData } from "@/lib/dummy_data/quotations";
import { Search, CalendarDays, Filter, ClipboardList } from "lucide-react";

export default function QuotationsPage() {
  return (
    <div className="flex flex-col gap-4 p-4 sm:gap-6 sm:p-6">
      <section className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        {/* HEADER */}
        <div className="min-w-0 space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Quotations</h1>
          <p className="text-sm text-muted-foreground">Track quotations, monitor performance, and analyze conversion across your pipeline.</p>
        </div>
        
        {/* FILTERS */}
        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center lg:justify-end">
          <div className="relative w-full sm:w-60">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search quotations..." className="h-10 rounded-xl border-border/60 bg-white/50 pl-9 shadow-sm dark:border-white/10 dark:bg-white/5" />
          </div>

          <Select defaultValue="12m">
            <SelectTrigger className="h-10 w-full rounded-xl border-border/60 bg-white/50 shadow-sm dark:border-white/10 dark:bg-white/5 sm:w-40">
              <CalendarDays className="mr-2 h-4 w-4 text-muted-foreground" />
              <SelectValue placeholder="Date range" />
            </SelectTrigger>

            <SelectContent className="p-2">
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="3m">Last 3 months</SelectItem>
              <SelectItem value="6m">Last 6 months</SelectItem>
              <SelectItem value="12m">Last 12 months</SelectItem>
              <SelectItem value="ytd">Year to date</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all">
            <SelectTrigger className="h-10 w-full rounded-xl border-border/60 bg-white/50 shadow-sm dark:border-white/10 dark:bg-white/5 sm:w-38">
              <Filter className="mr-2 h-4 w-4 text-muted-foreground" />
              <SelectValue placeholder="Status" />
            </SelectTrigger>

            <SelectContent className="p-2">
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="sent">Sent</SelectItem>
              <SelectItem value="awarded">Awarded</SelectItem>
              <SelectItem value="lost">Lost</SelectItem>
              <SelectItem value="expired">Expired</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all">
            <SelectTrigger className="h-10 w-full rounded-xl border-border/60 bg-white/50 shadow-sm dark:border-white/10 dark:bg-white/5 sm:w-42">
              <ClipboardList className="mr-2 h-4 w-4 text-muted-foreground" />
              <SelectValue placeholder="Project Type" />
            </SelectTrigger>

            <SelectContent className="p-2">
              <SelectItem value="all">All Projects</SelectItem>
              <SelectItem value="tender">Tender</SelectItem>
              <SelectItem value="job_in_hand">Job in Hand</SelectItem>
            </SelectContent>
          </Select>

          <Button className="h-10 rounded-xl border border-border/60 bg-linear-to-b from-white/80 to-white/50 px-4 text-sm font-medium shadow-sm backdrop-blur-xl transition hover:from-white hover:to-white/70 dark:border-white/10 dark:from-white/10 dark:to-white/5 dark:hover:from-white/15 dark:hover:to-white/10">
            New Quotation
          </Button>
        </div>


      </section>

      {/* KPI */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {quotationsPageKpiData.map((item) => (
          <KPICard key={item.title} {...item} />
        ))}
      </section>

      {/* ROW 1 */}
      <section className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <div className="xl:col-span-2 h-full">
          <QuotationValueTrendChart data={quotationValueTrendData} />
        </div>
        <div className="h-full">
          <QuotationStatusDistributionChart data={quotationStatusDistributionData} />
        </div>
      </section>

      {/* ROW 2 */}
      <section className="grid grid-cols-1 gap-4 2xl:grid-cols-2">
        <div className="h-full">
          <WinLossMonthlyChart data={winLossMonthlyData} />
        </div>
        <div className="h-full">
          <StatusOverTimeChart data={quotationStatusOverTimeData} />
        </div>
      </section>

      {/* ROW 3 */}
      <section className="grid grid-cols-1 gap-4">
        <div className="h-full">
          <AllQuotationsTable data={quotationsTableData} />
        </div>
      </section>

      {/* ROW 4 */}
      <section className="grid grid-cols-1 gap-4 2xl:grid-cols-2">
        <div className="h-full">
          <SalesRepPerformanceTable data={salesRepPerformanceData} />
        </div>
        <div className="h-full">
          <EstimatorPerformanceTable data={estimatorPerformanceData} />
        </div>
      </section>

      {/* ROW 5 */}
      <section className="grid grid-cols-1 gap-4 2xl:grid-cols-2">
        <div className="h-full">
          <RevisionImpactChart data={revisionImpactData} />
        </div>
        <div className="h-full">
          <MarginBandChart data={quotationMarginBandData} />
        </div>
      </section>
    </div>
  );
}