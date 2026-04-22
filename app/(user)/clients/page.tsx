import { AllClientsTable } from "@/components/custom/data/clients/AllClientsTable";
import { ClientActivityTable } from "@/components/custom/data/clients/ClientActivityTable";
import { ClientRevenueBarChart } from "@/components/custom/data/clients/ClientRevenueBarChart";
import { ClientRevenueContributionChart } from "@/components/custom/data/clients/ClientRevenueContributionChart";
import { ClientsGrowthTrendChart } from "@/components/custom/data/clients/ClientsGrowthTrendChart";
import { ClientWinRateTable } from "@/components/custom/data/clients/ClientWinRateTable";
import { KPICard } from "@/components/custom/data/clients/KPICard";
import { TopClientsByFrequencyChart } from "@/components/custom/data/clients/TopClientsByFrequencyChart";
import { clientActivityData, clientGrowthTrendData, clientRevenueBarData, clientRevenueContributionData, clientsPageKpiData, clientsTableData, clientWinRateData, topClientsByFrequencyData } from "@/lib/dummy_data/clients";

export default function ClientsPage() {
  return (
    <div className="flex flex-col gap-4 p-4 sm:gap-6 sm:p-6">

      {/* HEADER */}
      <section className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0 space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Clients</h1>
          <p className="text-sm text-muted-foreground">Manage your clients and analyze their performance.</p>
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