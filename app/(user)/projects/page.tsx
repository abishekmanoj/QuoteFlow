import { AllProjectsTable } from "@/components/custom/data/projects/AllProjectsTable";
import { HighValueProjectsList } from "@/components/custom/data/projects/HighValueProjectsList";
import { KPICard } from "@/components/custom/data/projects/KPICard";
import { ProjectPerformanceTable } from "@/components/custom/data/projects/ProjectPerformanceTable";
import { ProjectTypeDistributionChart } from "@/components/custom/data/projects/ProjectTypeDistributionChart";
import { ProjectTypePerformanceTable } from "@/components/custom/data/projects/ProjectTypePerformanceTable";
import { ProjectValueTrendChart } from "@/components/custom/data/projects/ProjectValueTrendChart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { highValueProjectsData, projectPerformanceData, projectsPageKpiData, projectsTableData, projectTypeDistributionData, projectTypePerformanceData, projectValueTrendData } from "@/lib/dummy_data/projects";
import { Search, CalendarDays, Filter, Briefcase } from "lucide-react";


export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-4 p-4 sm:gap-6 sm:p-6">

      {/* HEADER */}
      <section className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0 space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Projects
          </h1>
          <p className="text-sm text-muted-foreground">
            Monitor project pipeline, quotation activity, awarded value, and performance across tenders and jobs in hand.
          </p>
        </div>

        {/* FILTERS */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center lg:justify-end">
          <div className="relative w-full sm:w-56">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search projects..."
              className="h-10 rounded-xl border-border/60 bg-white/50 pl-9 shadow-sm dark:border-white/10 dark:bg-white/5"
            />
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
            <SelectTrigger className="h-10 w-full rounded-xl border-border/60 bg-white/50 shadow-sm dark:border-white/10 dark:bg-white/5 sm:w-40">
              <Filter className="mr-2 h-4 w-4 text-muted-foreground" />
              <SelectValue placeholder="Project type" />
            </SelectTrigger>
            <SelectContent className="p-2">
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="tender">Tender</SelectItem>
              <SelectItem value="job_in_hand">Job in Hand</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all">
            <SelectTrigger className="h-10 w-full rounded-xl border-border/60 bg-white/50 shadow-sm dark:border-white/10 dark:bg-white/5 sm:w-44">
              <Briefcase className="mr-2 h-4 w-4 text-muted-foreground" />
              <SelectValue placeholder="Project status" />
            </SelectTrigger>
            <SelectContent className="p-2">
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="planning">Planning</SelectItem>
              <SelectItem value="quoting">Quoting</SelectItem>
              <SelectItem value="negotiation">Negotiation</SelectItem>
              <SelectItem value="awarded">Awarded</SelectItem>
              <SelectItem value="lost">Lost</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>

          <Button className="h-10 rounded-xl border border-border/60 bg-linear-to-b from-white/80 to-white/50 px-4 text-sm font-medium shadow-sm backdrop-blur-xl transition hover:from-white hover:to-white/70 dark:border-white/10 dark:from-white/10 dark:to-white/5 dark:hover:from-white/15 dark:hover:to-white/10">
            Export
          </Button>
        </div>
      </section>

      {/* KPI ROWS */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
        {projectsPageKpiData.map((item) => (
          <KPICard
            key={item.title} {...item}
          />
        ))}
      </section>

      {/* ROW 1 */}  
      <section className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <div className="xl:col-span-2 h-full">
          <ProjectValueTrendChart data={projectValueTrendData} />
        </div>
        <div className="xl:col-span-1 h-full">
          <ProjectTypeDistributionChart data={projectTypeDistributionData} />
        </div>
      </section>

      {/* ROW 2 */} 
      <section className="grid grid-cols-1 gap-4">
        <div className="h-full">
          <AllProjectsTable data={projectsTableData} />
        </div>
      </section>

      {/* ROW 3 */} 
      <section className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <ProjectPerformanceTable data={projectPerformanceData} />
        </div>
        <div className="xl:col-span-1">
          <HighValueProjectsList data={highValueProjectsData} />
        </div>
      </section>
      
      {/* ROW 4 */} 
      <section className="grid grid-cols-1 gap-4">
        <ProjectTypePerformanceTable data={projectTypePerformanceData} />
      </section>
    </div>
  );
}