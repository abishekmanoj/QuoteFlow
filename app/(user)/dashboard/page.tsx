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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, CalendarDays, Filter } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4 p-4 sm:gap-6 sm:p-6">

      {/* HEADER */}
      <section className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0 space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Dashboard</h1>
          <p className="text-sm text-muted-foreground">Track quotation performance, pipeline movement, client activity, and revenue insights.</p>
        </div>

        {/* FILTERS */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center lg:justify-end">
          <div className="relative w-full sm:w-55">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search dashboard..." className="h-10 rounded-xl border-border/60 bg-white/50 pl-9 shadow-sm dark:border-white/10 dark:bg-white/5" />
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

          <Button className="h-10 rounded-xl border border-border/60 bg-linear-to-b from-white/80 to-white/50 px-4 text-sm font-medium shadow-sm backdrop-blur-xl transition hover:from-white hover:to-white/70 dark:border-white/10 dark:from-white/10 dark:to-white/5 dark:hover:from-white/15 dark:hover:to-white/10">
            Export
          </Button>
        </div>
      </section>

      {/* KPIS */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {dashboardKpiData.map((item) => <KPICard key={item.title} title={item.title} value={item.value} change={item.change} icon={item.icon} />)}
      </section>

      {/* ROW 1 */}
      <section className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <div className="xl:col-span-2 h-full"><QuotationValueTrendChart data={quotationTrendData} /></div>
        <div className="xl:col-span-1 h-full"><StatusDistributionChart data={statusDistributionData} /></div>
      </section>

      {/* ROW 2  */}
      <section className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <div className="xl:col-span-2"><QuotationCountChart data={quotationTrendData} /></div>
        <div className="xl:col-span-1"><WinLossInsights data={winLossInsightsData} /></div>
      </section>

      {/* ROW 3 */}
      <section className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <div className="xl:col-span-2"><RecentQuotationsTable data={recentQuotationsData} /></div>
        <div className="xl:col-span-1"><ExpiringQuotationsList data={expiringQuotationsData} /></div>
      </section>

      {/* ROW 4 */}
      <section className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <div className="xl:col-span-1"><TopClientsTable data={topClientsData} /></div>
        <div className="xl:col-span-1"><ActivityFeed data={activityFeedData} /></div>
        <div className="xl:col-span-1"><SystemBreakdownChart data={systemBreakdownData} /></div>
      </section>
    </div>
  );
}