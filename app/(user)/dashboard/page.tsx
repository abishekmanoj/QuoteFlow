import { activityFeedData, dashboardKpiData, expiringQuotationsData, quotationTrendData, recentQuotationsData, statusDistributionData, systemBreakdownData, topClientsData, winLossInsightsData } from "@/lib/dummy_data/dashboard";
import { KPICard } from "@/components/custom/data/dashboard/KPICard";
import { QuotationValueTrendChart } from "@/components/custom/data/dashboard/QuotationValueTrendChart";
import { StatusDistributionChart } from "@/components/custom/data/dashboard/StatusDistributionChart";
import { QuotationCountChart } from "@/components/custom/data/dashboard/QuotationCountChart";
import { WinLossInsights } from "@/components/custom/data/dashboard/WinLossInsights";
import { RecentQuotationsTable } from "@/components/custom/data/dashboard/RecentQuotationsTable";
import { ExpiringQuotationsList } from "@/components/custom/data/dashboard/ExpiringQuotationsList";
import { ActivityFeed } from "@/components/custom/data/dashboard/ActivityFeed";
import { SystemBreakdownChart } from "@/components/custom/data/dashboard/SystemBreakdownChart";
import { TopClientsTable } from "@/components/custom/data/dashboard/TopClientsTable";


export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4 p-4 sm:gap-6 sm:p-6">
      <section className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0 space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Dashboard</h1>
          <p className="text-sm text-muted-foreground">Track quotation performance, pipeline movement, client activity, and revenue insights.</p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            FILTERS
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {dashboardKpiData.map((item) => <KPICard key={item.title} title={item.title} value={item.value} change={item.change} icon={item.icon} />)}
      </section>

      <section className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <div className="xl:col-span-2 h-full"><QuotationValueTrendChart data={quotationTrendData} /></div>
        <div className="xl:col-span-1 h-full"><StatusDistributionChart data={statusDistributionData} /></div>
      </section>

      <section className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <div className="xl:col-span-2"><QuotationCountChart data={quotationTrendData} /></div>
        <div className="xl:col-span-1"><WinLossInsights data={winLossInsightsData} /></div>
      </section>

      <section className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <div className="xl:col-span-2"><RecentQuotationsTable data={recentQuotationsData} /></div>
        <div className="xl:col-span-1"><ExpiringQuotationsList data={expiringQuotationsData} /></div>
      </section>

      <section className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <div className="xl:col-span-1"><TopClientsTable data={topClientsData} /></div>
        <div className="xl:col-span-1"><ActivityFeed data={activityFeedData} /></div>
        <div className="xl:col-span-1"><SystemBreakdownChart data={systemBreakdownData} /></div>
      </section>
    </div>
  );
}