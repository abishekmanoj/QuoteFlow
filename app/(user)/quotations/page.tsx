import { QuotationValueTrendChart } from "@/components/custom/data/dashboard/QuotationValueTrendChart";
import { AllQuotationsTable } from "@/components/custom/data/quotations/AllQuotataionsTable";
import { EstimatorPerformanceTable } from "@/components/custom/data/quotations/EstimationPerformanceTable";
import { KPICard } from "@/components/custom/data/quotations/KPICard";
import { MarginBandChart } from "@/components/custom/data/quotations/MarginBandChart";
import { QuotationStatusDistributionChart } from "@/components/custom/data/quotations/QuotationStatusDistributionChart";
import { RevisionImpactChart } from "@/components/custom/data/quotations/RevisionImpact";
import { SalesRepPerformanceTable } from "@/components/custom/data/quotations/SalesRepPerformanceTable";
import { StatusOverTimeChart } from "@/components/custom/data/quotations/StatusOverTimeChart";
import { WinLossMonthlyChart } from "@/components/custom/data/quotations/WinLossMonthlyChart";
import {  estimatorPerformanceData, quotationMarginBandData, quotationsPageKpiData, quotationsTableData, quotationStatusDistributionData, quotationStatusOverTimeData, quotationValueTrendData, revisionImpactData, salesRepPerformanceData, winLossMonthlyData } from "@/lib/dummy_data/quotations";

export default function QuotationsPage() {
  return (
    <div className="flex flex-col gap-4 p-4 sm:gap-6 sm:p-6">
      {/* HEADER */}
      <section className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0 space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Quotations</h1>
          <p className="text-sm text-muted-foreground">Track quotations, monitor performance, and analyze conversion across your pipeline.</p>
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