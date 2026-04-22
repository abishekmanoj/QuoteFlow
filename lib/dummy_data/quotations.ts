/* =========================================================
   QUOTATIONS PAGE - COMPONENT LIST + DUMMY DATA
   QuoteFlow / OmniQuote
   ========================================================= */

/* =========================================================
   1) TYPES
   ========================================================= */

import type { LucideIcon } from "lucide-react";
import {
  FileText,
  CircleDollarSign,
  BadgeCheck,
  XCircle,
  Percent,
  RefreshCw,
  PieChart,
  BarChart3,
  TrendingUp,
  Activity,
  Users,
  Target,
  ClipboardList,
  AlertTriangle,
} from "lucide-react";

export type QuotationStatus =
  | "draft"
  | "sent"
  | "awarded"
  | "lost"
  | "expired";

export type QuotationTemplateType = "international" | "local" | "simple";

export type KPIChangeTone = "positive" | "negative" | "neutral";

export type QuotationsPageKPI = {
  title: string;
  value: string;
  change: string;
  changeTone: KPIChangeTone;
  icon: LucideIcon;
  helperText?: string;
};

export type StatusDistributionItem = {
  status: QuotationStatus;
  count: number;
  value: number;
};

export type QuotationValueTrendPoint = {
  month: string;
  totalValue: number;
  wonValue: number;
  lostValue: number;
  avgQuoteValue: number;
};

export type WinLossMonthlyPoint = {
  month: string;
  wonCount: number;
  lostCount: number;
  sentCount: number;
};

export type StatusOverTimePoint = {
  month: string;
  draft: number;
  sent: number;
  awarded: number;
  lost: number;
  expired: number;
};

export type QuotationRow = {
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

export type SalesRepPerformance = {
  id: string;
  name: string;
  totalQuotations: number;
  wonQuotations: number;
  lostQuotations: number;
  winRate: number;
  wonValue: number;
};

export type EstimatorPerformance = {
  id: string;
  name: string;
  totalQuotations: number;
  avgRevisionCount: number;
  winRate: number;
  avgMargin: number;
};

export type RevisionImpactPoint = {
  revisionBucket: string;
  quotationCount: number;
  winRate: number;
};

export type MarginBandItem = {
  band: string;
  quotationCount: number;
  avgMargin: number;
};

export type QuotationComponentMeta = {
  key: string;
  title: string;
  description: string;
};


/* =========================================================
   2) COMPONENTS TO BUILD
   ========================================================= */

export const quotationsPageComponents: QuotationComponentMeta[] = [
  {
    key: "quotation-kpi-cards",
    title: "Quotation KPI Cards",
    description:
      "Top metrics like total quotations, pipeline value, won value, lost value, average margin, and average revision count.",
  },
  {
    key: "quotation-status-distribution-chart",
    title: "Quotation Status Distribution Chart",
    description:
      "Pie or donut chart showing how quotations are split across draft, sent, awarded, lost, and expired.",
  },
  {
    key: "quotation-value-trend-chart",
    title: "Quotation Value Trend Chart",
    description:
      "Line or area chart showing total quote value, won value, and lost value trend over time.",
  },
  {
    key: "win-loss-monthly-chart",
    title: "Win vs Loss Monthly Chart",
    description:
      "Bar chart comparing won and lost quotations month by month.",
  },
  {
    key: "status-over-time-chart",
    title: "Status Over Time Chart",
    description:
      "Stacked bar chart showing status movement over time.",
  },
  {
    key: "all-quotations-table",
    title: "All Quotations Table",
    description:
      "Main table with quotation number, client, project, estimator, sales rep, value, revision, and status.",
  },
  {
    key: "sales-rep-performance-table",
    title: "Sales Rep Performance Table",
    description:
      "Performance breakdown of sales reps by quotations handled, wins, losses, win rate, and awarded value.",
  },
  {
    key: "estimator-performance-table",
    title: "Estimator Performance Table",
    description:
      "Estimator analytics using quotation count, revision count, margin, and win rate.",
  },
  {
    key: "revision-impact-chart",
    title: "Revision Impact Chart",
    description:
      "Chart showing how quotation win rate changes with revision count.",
  },
  {
    key: "margin-band-chart",
    title: "Margin Band Chart",
    description:
      "Distribution of quotations across different margin bands.",
  },
];


/* =========================================================
   3) KPI CARD DUMMY DATA
   ========================================================= */

export const quotationsPageKpiData: QuotationsPageKPI[] = [
  {
    title: "Total Quotations",
    value: "248",
    change: "+12.4%",
    changeTone: "positive",
    icon: FileText,
    helperText: "all quotations created",
  },
  {
    title: "Pipeline Value",
    value: "AED 4.82M",
    change: "+8.1%",
    changeTone: "positive",
    icon: CircleDollarSign,
    helperText: "draft + sent value",
  },
  {
    title: "Won Value",
    value: "AED 1.94M",
    change: "+15.7%",
    changeTone: "positive",
    icon: BadgeCheck,
    helperText: "awarded quotations",
  },
  {
    title: "Lost Value",
    value: "AED 860K",
    change: "-4.6%",
    changeTone: "positive",
    icon: XCircle,
    helperText: "lost quotations",
  },
  {
    title: "Avg Margin",
    value: "22.4%",
    change: "+1.3%",
    changeTone: "positive",
    icon: Percent,
    helperText: "across latest revisions",
  },
  {
    title: "Avg Revision Count",
    value: "1.8",
    change: "+0.2",
    changeTone: "neutral",
    icon: RefreshCw,
    helperText: "per quotation",
  },
];


/* =========================================================
   4) STATUS DISTRIBUTION DATA
   ========================================================= */

export const quotationStatusDistributionData: StatusDistributionItem[] = [
  { status: "draft", count: 38, value: 620000 },
  { status: "sent", count: 96, value: 4200000 },
  { status: "awarded", count: 78, value: 1940000 },
  { status: "lost", count: 29, value: 860000 },
  { status: "expired", count: 7, value: 120000 },
];


/* =========================================================
   5) QUOTATION VALUE TREND DATA
   ========================================================= */

export const quotationValueTrendData: QuotationValueTrendPoint[] = [
  { month: "Jan", totalValue: 420000, wonValue: 125000, lostValue: 48000, avgQuoteValue: 23333 },
  { month: "Feb", totalValue: 510000, wonValue: 148000, lostValue: 62000, avgQuoteValue: 23182 },
  { month: "Mar", totalValue: 465000, wonValue: 132000, lostValue: 58000, avgQuoteValue: 23250 },
  { month: "Apr", totalValue: 590000, wonValue: 201000, lostValue: 71000, avgQuoteValue: 23600 },
  { month: "May", totalValue: 620000, wonValue: 228000, lostValue: 64000, avgQuoteValue: 21379 },
  { month: "Jun", totalValue: 710000, wonValue: 256000, lostValue: 73000, avgQuoteValue: 22903 },
  { month: "Jul", totalValue: 680000, wonValue: 242000, lostValue: 69000, avgQuoteValue: 24286 },
  { month: "Aug", totalValue: 760000, wonValue: 290000, lostValue: 76000, avgQuoteValue: 23030 },
  { month: "Sep", totalValue: 735000, wonValue: 274000, lostValue: 72000, avgQuoteValue: 24500 },
  { month: "Oct", totalValue: 810000, wonValue: 326000, lostValue: 85000, avgQuoteValue: 23143 },
  { month: "Nov", totalValue: 845000, wonValue: 348000, lostValue: 91000, avgQuoteValue: 22838 },
  { month: "Dec", totalValue: 910000, wonValue: 392000, lostValue: 101000, avgQuoteValue: 22750 },
];


/* =========================================================
   6) WIN / LOSS MONTHLY DATA
   ========================================================= */

export const winLossMonthlyData: WinLossMonthlyPoint[] = [
  { month: "Jan", wonCount: 5, lostCount: 2, sentCount: 8 },
  { month: "Feb", wonCount: 6, lostCount: 3, sentCount: 10 },
  { month: "Mar", wonCount: 5, lostCount: 3, sentCount: 9 },
  { month: "Apr", wonCount: 8, lostCount: 3, sentCount: 11 },
  { month: "May", wonCount: 9, lostCount: 2, sentCount: 12 },
  { month: "Jun", wonCount: 10, lostCount: 3, sentCount: 13 },
  { month: "Jul", wonCount: 9, lostCount: 3, sentCount: 11 },
  { month: "Aug", wonCount: 11, lostCount: 2, sentCount: 14 },
  { month: "Sep", wonCount: 10, lostCount: 2, sentCount: 12 },
  { month: "Oct", wonCount: 12, lostCount: 3, sentCount: 15 },
  { month: "Nov", wonCount: 13, lostCount: 3, sentCount: 16 },
  { month: "Dec", wonCount: 15, lostCount: 3, sentCount: 18 },
];


/* =========================================================
   7) STATUS OVER TIME DATA
   ========================================================= */

export const quotationStatusOverTimeData: StatusOverTimePoint[] = [
  { month: "Jan", draft: 4, sent: 8, awarded: 5, lost: 2, expired: 1 },
  { month: "Feb", draft: 5, sent: 10, awarded: 6, lost: 3, expired: 1 },
  { month: "Mar", draft: 4, sent: 9, awarded: 5, lost: 3, expired: 1 },
  { month: "Apr", draft: 6, sent: 11, awarded: 8, lost: 3, expired: 1 },
  { month: "May", draft: 5, sent: 12, awarded: 9, lost: 2, expired: 1 },
  { month: "Jun", draft: 6, sent: 13, awarded: 10, lost: 3, expired: 1 },
  { month: "Jul", draft: 5, sent: 11, awarded: 9, lost: 3, expired: 1 },
  { month: "Aug", draft: 6, sent: 14, awarded: 11, lost: 2, expired: 1 },
  { month: "Sep", draft: 5, sent: 12, awarded: 10, lost: 2, expired: 1 },
  { month: "Oct", draft: 7, sent: 15, awarded: 12, lost: 3, expired: 1 },
  { month: "Nov", draft: 7, sent: 16, awarded: 13, lost: 3, expired: 1 },
  { month: "Dec", draft: 8, sent: 18, awarded: 15, lost: 3, expired: 1 },
];


/* =========================================================
   8) ALL QUOTATIONS TABLE DATA
   ========================================================= */

export const quotationsTableData: QuotationRow[] = [
  {
    id: "q_001",
    quotationNo: "QF-2026-001",
    clientName: "Emaar Properties",
    projectName: "Dubai Hills Parking Upgrade",
    projectType: "job_in_hand",
    estimator: "Abishek Manoj",
    salesRep: "Rahul Menon",
    templateMix: ["international", "local"],
    revisionNo: 2,
    totalValue: 184500,
    status: "sent",
    createdAt: "2026-04-20",
    updatedAt: "2026-04-21",
  },
  {
    id: "q_002",
    quotationNo: "QF-2026-002",
    clientName: "Khazna Data Centers",
    projectName: "AUH-04 Scissor Lift Package",
    projectType: "tender",
    estimator: "Neeraj Kumar",
    salesRep: "Arun Prakash",
    templateMix: ["international"],
    revisionNo: 1,
    totalValue: 326000,
    status: "awarded",
    createdAt: "2026-04-19",
    updatedAt: "2026-04-21",
  },
  {
    id: "q_003",
    quotationNo: "QF-2026-003",
    clientName: "Majid Al Futtaim",
    projectName: "Mall ANPR Expansion",
    projectType: "tender",
    estimator: "Abishek Manoj",
    salesRep: "Rahul Menon",
    templateMix: ["local", "simple"],
    revisionNo: 0,
    totalValue: 248900,
    status: "draft",
    createdAt: "2026-04-18",
    updatedAt: "2026-04-18",
  },
  {
    id: "q_004",
    quotationNo: "QF-2026-004",
    clientName: "ENBD",
    projectName: "Parking Guidance Renewal",
    projectType: "job_in_hand",
    estimator: "Neeraj Kumar",
    salesRep: "Arun Prakash",
    templateMix: ["international", "simple"],
    revisionNo: 3,
    totalValue: 142300,
    status: "lost",
    createdAt: "2026-04-17",
    updatedAt: "2026-04-20",
  },
  {
    id: "q_005",
    quotationNo: "QF-2026-005",
    clientName: "Cleveland Clinic Abu Dhabi",
    projectName: "Smart Parking Upgrade",
    projectType: "job_in_hand",
    estimator: "Irfan Ali",
    salesRep: "Rahul Menon",
    templateMix: ["international", "local", "simple"],
    revisionNo: 1,
    totalValue: 411750,
    status: "sent",
    createdAt: "2026-04-16",
    updatedAt: "2026-04-20",
  },
  {
    id: "q_006",
    quotationNo: "QF-2026-006",
    clientName: "Nakheel",
    projectName: "Access Control Retrofit",
    projectType: "tender",
    estimator: "Irfan Ali",
    salesRep: "Arun Prakash",
    templateMix: ["local"],
    revisionNo: 2,
    totalValue: 156800,
    status: "expired",
    createdAt: "2026-04-14",
    updatedAt: "2026-04-19",
  },
];


/* =========================================================
   9) SALES REP PERFORMANCE DATA
   ========================================================= */

export const salesRepPerformanceData: SalesRepPerformance[] = [
  {
    id: "sr_001",
    name: "Rahul Menon",
    totalQuotations: 84,
    wonQuotations: 31,
    lostQuotations: 9,
    winRate: 36.9,
    wonValue: 864000,
  },
  {
    id: "sr_002",
    name: "Arun Prakash",
    totalQuotations: 73,
    wonQuotations: 24,
    lostQuotations: 11,
    winRate: 32.9,
    wonValue: 612000,
  },
  {
    id: "sr_003",
    name: "Naveen Raj",
    totalQuotations: 51,
    wonQuotations: 16,
    lostQuotations: 6,
    winRate: 31.4,
    wonValue: 464000,
  },
  {
    id: "sr_004",
    name: "Akhil Thomas",
    totalQuotations: 40,
    wonQuotations: 7,
    lostQuotations: 3,
    winRate: 17.5,
    wonValue: 128000,
  },
];


/* =========================================================
   10) ESTIMATOR PERFORMANCE DATA
   ========================================================= */

export const estimatorPerformanceData: EstimatorPerformance[] = [
  {
    id: "est_001",
    name: "Abishek Manoj",
    totalQuotations: 68,
    avgRevisionCount: 1.9,
    winRate: 34.2,
    avgMargin: 23.8,
  },
  {
    id: "est_002",
    name: "Neeraj Kumar",
    totalQuotations: 74,
    avgRevisionCount: 1.6,
    winRate: 32.4,
    avgMargin: 22.1,
  },
  {
    id: "est_003",
    name: "Irfan Ali",
    totalQuotations: 59,
    avgRevisionCount: 2.1,
    winRate: 29.7,
    avgMargin: 21.4,
  },
  {
    id: "est_004",
    name: "Shyam Narayanan",
    totalQuotations: 47,
    avgRevisionCount: 1.4,
    winRate: 27.6,
    avgMargin: 20.6,
  },
];


/* =========================================================
   11) REVISION IMPACT DATA
   ========================================================= */

export const revisionImpactData: RevisionImpactPoint[] = [
  { revisionBucket: "Rev 0", quotationCount: 72, winRate: 18.5 },
  { revisionBucket: "Rev 1", quotationCount: 94, winRate: 29.8 },
  { revisionBucket: "Rev 2", quotationCount: 51, winRate: 43.1 },
  { revisionBucket: "Rev 3+", quotationCount: 31, winRate: 38.7 },
];


/* =========================================================
   12) MARGIN BAND DATA
   ========================================================= */

export const quotationMarginBandData: MarginBandItem[] = [
  { band: "<10%", quotationCount: 14, avgMargin: 7.8 },
  { band: "10-15%", quotationCount: 28, avgMargin: 12.9 },
  { band: "15-20%", quotationCount: 61, avgMargin: 17.6 },
  { band: "20-25%", quotationCount: 79, avgMargin: 22.4 },
  { band: "25-30%", quotationCount: 46, avgMargin: 27.1 },
  { band: "30%+", quotationCount: 20, avgMargin: 33.2 },
];


/* =========================================================
   13) OPTIONAL ICON MAPS FOR SECTIONS
   ========================================================= */

export const quotationsPageSectionIcons = {
  status: PieChart,
  performance: BarChart3,
  trends: TrendingUp,
  activity: Activity,
  team: Users,
  conversion: Target,
  quotations: ClipboardList,
  risk: AlertTriangle,
};


/* =========================================================
   14) SUGGESTED PAGE SECTION ORDER
   ========================================================= */

export const quotationsPageSectionOrder = [
  "quotation-kpi-cards",
  "quotation-value-trend-chart",
  "quotation-status-distribution-chart",
  "win-loss-monthly-chart",
  "status-over-time-chart",
  "all-quotations-table",
  "sales-rep-performance-table",
  "estimator-performance-table",
  "revision-impact-chart",
  "margin-band-chart",
] as const;