import { AllClientsTable } from "@/components/custom/data/clients/AllClientsTable";
import { ClientActivityTable } from "@/components/custom/data/clients/ClientActivityTable";
import { ClientRevenueBarChart } from "@/components/custom/data/clients/ClientRevenueBarChart";
import { ClientRevenueContributionChart } from "@/components/custom/data/clients/ClientRevenueContributionChart";
import { ClientsGrowthTrendChart } from "@/components/custom/data/clients/ClientsGrowthTrendChart";
import { ClientWinRateTable } from "@/components/custom/data/clients/ClientWinRateTable";
import { KPICard } from "@/components/custom/data/clients/KPICard";
import { TopClientsByFrequencyChart } from "@/components/custom/data/clients/TopClientsByFrequencyChart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { clientActivityData, clientGrowthTrendData, clientRevenueBarData, clientRevenueContributionData, clientsPageKpiData, clientsTableData, clientWinRateData, topClientsByFrequencyData } from "@/lib/dummy_data/clients";
import { Activity, Search, Building2, CalendarDays } from "lucide-react";

export default function ClientsPage() {
  return (
    <div className="flex flex-col gap-4 p-4 sm:gap-6 sm:p-6">

      {/* HEADER */}
      <section className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0 space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Clients</h1>
          <p className="text-sm text-muted-foreground">Manage your clients and analyze their performance.</p>
        </div>

        {/* FILTERS */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center lg:justify-end">
          <div className="relative w-full sm:w-60">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search clients..." className="h-10 rounded-xl border-border/60 bg-white/50 pl-9 shadow-sm dark:border-white/10 dark:bg-white/5" />
          </div>

          <Select defaultValue="all">
            <SelectTrigger className="h-10 w-full rounded-xl border-border/60 bg-white/50 shadow-sm dark:border-white/10 dark:bg-white/5 sm:w-44">
              <Building2 className="mr-2 h-4 w-4 text-muted-foreground" />
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent className="p-2">
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="enterprise">Enterprise</SelectItem>
              <SelectItem value="government">Government</SelectItem>
              <SelectItem value="private">Private</SelectItem>
              <SelectItem value="healthcare">Healthcare</SelectItem>
              <SelectItem value="retail">Retail</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all">
            <SelectTrigger className="h-10 w-full rounded-xl border-border/60 bg-white/50 shadow-sm dark:border-white/10 dark:bg-white/5 sm:w-40">
              <Activity className="mr-2 h-4 w-4 text-muted-foreground" />
              <SelectValue placeholder="Health" />
            </SelectTrigger>
            <SelectContent className="p-2">
              <SelectItem value="all">All Health</SelectItem>
              <SelectItem value="excellent">Excellent</SelectItem>
              <SelectItem value="good">Good</SelectItem>
              <SelectItem value="average">Average</SelectItem>
              <SelectItem value="at_risk">At Risk</SelectItem>
            </SelectContent>
          </Select>

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

          <Button className="h-10 rounded-xl border border-border/60 bg-linear-to-b from-white/80 to-white/50 px-4 text-sm font-medium shadow-sm backdrop-blur-xl transition hover:from-white hover:to-white/70 dark:border-white/10 dark:from-white/10 dark:to-white/5 dark:hover:from-white/15 dark:hover:to-white/10">
            Export
          </Button>
        </div>
      </section>

      {/* KPI */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
        {clientsPageKpiData.map((item) => (
          <KPICard key={item.title} {...item} />
        ))}
      </section>

      {/* ROW 1 */}
      <section className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <div className="xl:col-span-2 h-full">
          <ClientsGrowthTrendChart data={clientGrowthTrendData} />
        </div>
        <div className="h-full">
          <ClientRevenueContributionChart data={clientRevenueContributionData} />
        </div>
      </section>

      {/* ROW 2 */}
      <section className="grid grid-cols-1 gap-4">
        <div className="h-full">
          <ClientRevenueBarChart data={clientRevenueBarData} />
        </div>
      </section>

      {/* ROW 3 */}
      <section className="grid grid-cols-1 gap-4">
        <div className="h-full">
          <AllClientsTable data={clientsTableData} />
        </div>
      </section>

      {/* ROW 4 */}
      <section className="grid grid-cols-1 gap-4 2xl:grid-cols-2">
        <div className="h-full">
          <ClientActivityTable data={clientActivityData} />
        </div>
        <div className="h-full">
          <ClientWinRateTable data={clientWinRateData} />
        </div>
      </section>

      {/* ROW 5 */}
      <section className="grid grid-cols-1 gap-4">
        <div className="h-full">
          <TopClientsByFrequencyChart data={topClientsByFrequencyData} />
        </div>
      </section>

    </div>
  );
}