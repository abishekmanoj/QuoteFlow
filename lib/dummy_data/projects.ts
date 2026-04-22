/* =========================================================
   PROJECTS PAGE - COMPONENT LIST + DUMMY DATA
   QuoteFlow / OmniQuote
   ========================================================= */

/* =========================================================
   1) TYPES
   ========================================================= */

import type { LucideIcon } from "lucide-react";
import {
  FolderKanban,
  Briefcase,
  CircleDollarSign,
  BarChart3,
  Target,
  PieChart,
  TrendingUp,
  ClipboardList,
  Activity,
  BadgeCheck,
  Clock3,
  AlertTriangle,
  Building2,
} from "lucide-react";

export type KPIChangeTone = "positive" | "negative" | "neutral";

export type ProjectType = "tender" | "job_in_hand";

export type ProjectStatus =
  | "planning"
  | "quoting"
  | "negotiation"
  | "awarded"
  | "lost"
  | "completed";

export type ProjectsPageKPI = {
  title: string;
  value: string;
  change: string;
  changeTone: KPIChangeTone;
  icon: LucideIcon;
  helperText?: string;
};

export type ProjectTypeDistributionItem = {
  type: ProjectType;
  count: number;
  value: number;
};

export type ProjectStatusDistributionItem = {
  status: ProjectStatus;
  count: number;
  value: number;
};

export type ProjectValueTrendPoint = {
  month: string;
  totalProjectValue: number;
  awardedValue: number;
  activeProjectCount: number;
};

export type ProjectRow = {
  id: string;
  projectName: string;
  clientName: string;
  projectType: ProjectType;
  status: ProjectStatus;
  quotationCount: number;
  latestQuotationNo: string;
  totalQuotedValue: number;
  awardedValue: number;
  winRate: number;
  lastActivity: string;
};

export type ProjectPerformanceItem = {
  projectName: string;
  quotationCount: number;
  revisionCount: number;
  totalQuotedValue: number;
  awardedValue: number;
  winRate: number;
};

export type ProjectTypePerformanceItem = {
  projectType: ProjectType;
  totalProjects: number;
  totalQuotedValue: number;
  awardedValue: number;
  winRate: number;
};

export type HighValueProjectItem = {
  projectName: string;
  clientName: string;
  totalQuotedValue: number;
  awardedValue: number;
  status: ProjectStatus;
};

export type ProjectComponentMeta = {
  key: string;
  title: string;
  description: string;
};


/* =========================================================
   2) COMPONENTS TO BUILD
   ========================================================= */

export const projectsPageComponents: ProjectComponentMeta[] = [
  {
    key: "project-kpi-cards",
    title: "Project KPI Cards",
    description:
      "Top-level metrics like total projects, active projects, total project value, average project value, and project conversion rate.",
  },
  {
    key: "project-type-distribution-chart",
    title: "Project Type Distribution Chart",
    description:
      "Pie or donut chart showing project split by tender and job in hand.",
  },
  {
    key: "project-status-distribution-chart",
    title: "Project Status Distribution Chart",
    description:
      "Pie or donut chart showing planning, quoting, negotiation, awarded, lost, and completed projects.",
  },
  {
    key: "project-value-trend-chart",
    title: "Project Value Trend Chart",
    description:
      "Line or area chart showing total project value and awarded value over time.",
  },
  {
    key: "all-projects-table",
    title: "All Projects Table",
    description:
      "Main project table with client, type, status, quotation count, total quoted value, awarded value, and win rate.",
  },
  {
    key: "project-performance-table",
    title: "Project Performance Table",
    description:
      "Performance breakdown of projects by quotations, revisions, win rate, and value.",
  },
  {
    key: "project-type-performance-table",
    title: "Project Type Performance Table",
    description:
      "Compares tender and job in hand projects by count, quoted value, awarded value, and win rate.",
  },
  {
    key: "high-value-projects-list",
    title: "High Value Projects List",
    description:
      "Highlights the most valuable projects by total quoted or awarded value.",
  },
];


/* =========================================================
   3) KPI CARD DUMMY DATA
   ========================================================= */

export const projectsPageKpiData: ProjectsPageKPI[] = [
  {
    title: "Total Projects",
    value: "86",
    change: "+9.3%",
    changeTone: "positive",
    icon: FolderKanban,
    helperText: "distinct project records",
  },
  {
    title: "Active Projects",
    value: "34",
    change: "+5.6%",
    changeTone: "positive",
    icon: Briefcase,
    helperText: "planning + quoting + negotiation",
  },
  {
    title: "Total Project Value",
    value: "AED 7.24M",
    change: "+11.8%",
    changeTone: "positive",
    icon: CircleDollarSign,
    helperText: "across latest quotations",
  },
  {
    title: "Avg Project Value",
    value: "AED 84.2K",
    change: "+2.1%",
    changeTone: "positive",
    icon: BarChart3,
    helperText: "per project",
  },
  {
    title: "Project Conversion Rate",
    value: "29.1%",
    change: "+1.9%",
    changeTone: "positive",
    icon: Target,
    helperText: "projects won / total projects",
  },
];


/* =========================================================
   4) PROJECT TYPE DISTRIBUTION DATA
   ========================================================= */

export const projectTypeDistributionData: ProjectTypeDistributionItem[] = [
  { type: "tender", count: 48, value: 4520000 },
  { type: "job_in_hand", count: 38, value: 2720000 },
];


/* =========================================================
   5) PROJECT STATUS DISTRIBUTION DATA
   ========================================================= */

export const projectStatusDistributionData: ProjectStatusDistributionItem[] = [
  { status: "planning", count: 10, value: 540000 },
  { status: "quoting", count: 15, value: 1680000 },
  { status: "negotiation", count: 9, value: 1120000 },
  { status: "awarded", count: 25, value: 2140000 },
  { status: "lost", count: 18, value: 980000 },
  { status: "completed", count: 9, value: 780000 },
];


/* =========================================================
   6) PROJECT VALUE TREND DATA
   ========================================================= */

export const projectValueTrendData: ProjectValueTrendPoint[] = [
  { month: "Jan", totalProjectValue: 480000, awardedValue: 138000, activeProjectCount: 16 },
  { month: "Feb", totalProjectValue: 540000, awardedValue: 156000, activeProjectCount: 18 },
  { month: "Mar", totalProjectValue: 525000, awardedValue: 149000, activeProjectCount: 17 },
  { month: "Apr", totalProjectValue: 610000, awardedValue: 201000, activeProjectCount: 20 },
  { month: "May", totalProjectValue: 655000, awardedValue: 224000, activeProjectCount: 22 },
  { month: "Jun", totalProjectValue: 720000, awardedValue: 248000, activeProjectCount: 24 },
  { month: "Jul", totalProjectValue: 705000, awardedValue: 239000, activeProjectCount: 23 },
  { month: "Aug", totalProjectValue: 760000, awardedValue: 284000, activeProjectCount: 26 },
  { month: "Sep", totalProjectValue: 742000, awardedValue: 271000, activeProjectCount: 25 },
  { month: "Oct", totalProjectValue: 825000, awardedValue: 318000, activeProjectCount: 28 },
  { month: "Nov", totalProjectValue: 868000, awardedValue: 341000, activeProjectCount: 30 },
  { month: "Dec", totalProjectValue: 910000, awardedValue: 376000, activeProjectCount: 34 },
];


/* =========================================================
   7) ALL PROJECTS TABLE DATA
   ========================================================= */

export const projectsTableData: ProjectRow[] = [
  {
    id: "p_001",
    projectName: "Dubai Hills Parking Upgrade",
    clientName: "Emaar Properties",
    projectType: "job_in_hand",
    status: "negotiation",
    quotationCount: 3,
    latestQuotationNo: "QF-2026-001",
    totalQuotedValue: 184500,
    awardedValue: 0,
    winRate: 0,
    lastActivity: "2026-04-21",
  },
  {
    id: "p_002",
    projectName: "AUH-04 Scissor Lift Package",
    clientName: "Khazna Data Centers",
    projectType: "tender",
    status: "awarded",
    quotationCount: 2,
    latestQuotationNo: "QF-2026-002",
    totalQuotedValue: 326000,
    awardedValue: 326000,
    winRate: 100,
    lastActivity: "2026-04-20",
  },
  {
    id: "p_003",
    projectName: "Mall ANPR Expansion",
    clientName: "Majid Al Futtaim",
    projectType: "tender",
    status: "quoting",
    quotationCount: 1,
    latestQuotationNo: "QF-2026-003",
    totalQuotedValue: 248900,
    awardedValue: 0,
    winRate: 0,
    lastActivity: "2026-04-18",
  },
  {
    id: "p_004",
    projectName: "Parking Guidance Renewal",
    clientName: "ENBD",
    projectType: "job_in_hand",
    status: "lost",
    quotationCount: 4,
    latestQuotationNo: "QF-2026-004",
    totalQuotedValue: 142300,
    awardedValue: 0,
    winRate: 0,
    lastActivity: "2026-04-17",
  },
  {
    id: "p_005",
    projectName: "Smart Parking Upgrade",
    clientName: "Cleveland Clinic Abu Dhabi",
    projectType: "job_in_hand",
    status: "quoting",
    quotationCount: 2,
    latestQuotationNo: "QF-2026-005",
    totalQuotedValue: 411750,
    awardedValue: 0,
    winRate: 0,
    lastActivity: "2026-04-20",
  },
  {
    id: "p_006",
    projectName: "Access Control Retrofit",
    clientName: "Nakheel",
    projectType: "tender",
    status: "completed",
    quotationCount: 3,
    latestQuotationNo: "QF-2026-006",
    totalQuotedValue: 156800,
    awardedValue: 156800,
    winRate: 100,
    lastActivity: "2026-04-15",
  },
];


/* =========================================================
   8) PROJECT PERFORMANCE TABLE DATA
   ========================================================= */

export const projectPerformanceData: ProjectPerformanceItem[] = [
  {
    projectName: "Dubai Hills Parking Upgrade",
    quotationCount: 3,
    revisionCount: 5,
    totalQuotedValue: 184500,
    awardedValue: 0,
    winRate: 0,
  },
  {
    projectName: "AUH-04 Scissor Lift Package",
    quotationCount: 2,
    revisionCount: 2,
    totalQuotedValue: 326000,
    awardedValue: 326000,
    winRate: 100,
  },
  {
    projectName: "Mall ANPR Expansion",
    quotationCount: 1,
    revisionCount: 0,
    totalQuotedValue: 248900,
    awardedValue: 0,
    winRate: 0,
  },
  {
    projectName: "Parking Guidance Renewal",
    quotationCount: 4,
    revisionCount: 7,
    totalQuotedValue: 142300,
    awardedValue: 0,
    winRate: 0,
  },
  {
    projectName: "Smart Parking Upgrade",
    quotationCount: 2,
    revisionCount: 1,
    totalQuotedValue: 411750,
    awardedValue: 0,
    winRate: 0,
  },
  {
    projectName: "Access Control Retrofit",
    quotationCount: 3,
    revisionCount: 4,
    totalQuotedValue: 156800,
    awardedValue: 156800,
    winRate: 100,
  },
];


/* =========================================================
   9) PROJECT TYPE PERFORMANCE DATA
   ========================================================= */

export const projectTypePerformanceData: ProjectTypePerformanceItem[] = [
  {
    projectType: "tender",
    totalProjects: 48,
    totalQuotedValue: 4520000,
    awardedValue: 1180000,
    winRate: 24.6,
  },
  {
    projectType: "job_in_hand",
    totalProjects: 38,
    totalQuotedValue: 2720000,
    awardedValue: 960000,
    winRate: 34.2,
  },
];


/* =========================================================
   10) HIGH VALUE PROJECTS DATA
   ========================================================= */

export const highValueProjectsData: HighValueProjectItem[] = [
  {
    projectName: "Smart Parking Upgrade",
    clientName: "Cleveland Clinic Abu Dhabi",
    totalQuotedValue: 411750,
    awardedValue: 0,
    status: "quoting",
  },
  {
    projectName: "AUH-04 Scissor Lift Package",
    clientName: "Khazna Data Centers",
    totalQuotedValue: 326000,
    awardedValue: 326000,
    status: "awarded",
  },
  {
    projectName: "Mall ANPR Expansion",
    clientName: "Majid Al Futtaim",
    totalQuotedValue: 248900,
    awardedValue: 0,
    status: "quoting",
  },
  {
    projectName: "Dubai Hills Parking Upgrade",
    clientName: "Emaar Properties",
    totalQuotedValue: 184500,
    awardedValue: 0,
    status: "negotiation",
  },
  {
    projectName: "Access Control Retrofit",
    clientName: "Nakheel",
    totalQuotedValue: 156800,
    awardedValue: 156800,
    status: "completed",
  },
];


/* =========================================================
   11) OPTIONAL ICON MAPS FOR SECTIONS
   ========================================================= */

export const projectsPageSectionIcons = {
  projects: FolderKanban,
  pipeline: Briefcase,
  revenue: CircleDollarSign,
  analytics: BarChart3,
  conversion: Target,
  type: PieChart,
  trend: TrendingUp,
  quotations: ClipboardList,
  activity: Activity,
  awarded: BadgeCheck,
  followup: Clock3,
  risk: AlertTriangle,
  client: Building2,
};


/* =========================================================
   12) SUGGESTED PAGE SECTION ORDER
   ========================================================= */

export const projectsPageSectionOrder = [
  "project-kpi-cards",
  "project-value-trend-chart",
  "project-type-distribution-chart",
  "project-status-distribution-chart",
  "all-projects-table",
  "project-performance-table",
  "project-type-performance-table",
  "high-value-projects-list",
] as const;