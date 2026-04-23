import { AllProjectsTable } from "@/components/custom/data/projects/AllProjectsTable";
import { HighValueProjectsList } from "@/components/custom/data/projects/HighValueProjectsList";
import { KPICard } from "@/components/custom/data/projects/KPICard";
import { ProjectPerformanceTable } from "@/components/custom/data/projects/ProjectPerformanceTable";
import { ProjectTypeDistributionChart } from "@/components/custom/data/projects/ProjectTypeDistributionChart";
import { ProjectTypePerformanceTable } from "@/components/custom/data/projects/ProjectTypePerformanceTable";
import { ProjectValueTrendChart } from "@/components/custom/data/projects/ProjectValueTrendChart";
import { highValueProjectsData, projectPerformanceData, projectsPageKpiData, projectsTableData, projectStatusDistributionData, projectTypeDistributionData, projectTypePerformanceData, projectValueTrendData } from "@/lib/dummy_data/projects";


export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-4 p-4 sm:gap-6 sm:p-6">
      <section className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0 space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Projects
          </h1>
          <p className="text-sm text-muted-foreground">
            Monitor project pipeline, quotation activity, awarded value, and performance across tenders and jobs in hand.
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          FILTERS
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
        {projectsPageKpiData.map((item) => (
          <KPICard
            key={item.title} {...item}
          />
        ))}
      </section>

      <section className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <div className="xl:col-span-2 h-full">
          <ProjectValueTrendChart data={projectValueTrendData} />
        </div>
        <div className="xl:col-span-1 h-full">
          <ProjectTypeDistributionChart data={projectTypeDistributionData} />
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4">
        <div className="h-full">
          <AllProjectsTable data={projectsTableData} />
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <ProjectPerformanceTable data={projectPerformanceData} />
        </div>
        <div className="xl:col-span-1">
          <HighValueProjectsList data={highValueProjectsData} />
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4">
        <ProjectTypePerformanceTable data={projectTypePerformanceData} />
      </section>
    </div>
  );
}