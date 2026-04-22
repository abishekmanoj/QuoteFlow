/* =========================================================
   DASHBOARD PAGE - COMPONENT LIST + DUMMY DATA
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
  TrendingUp,
  Users,
  Clock3,
  Activity,
  BarChart3,
  PieChart,
  ClipboardList,
  Target,
  AlertTriangle,
} from "lucide-react";

export type QuotationStatus =
  | "draft"
  | "sent"
  | "awarded"
  | "lost"
  | "expired";

export type ActivityType =
  | "quotation_created"
  | "quotation_sent"
  | "quotation_awarded"
  | "quotation_lost"
  | "revision_added"
  | "client_added";

export type KPIChangeTone = "positive" | "negative" | "neutral";

export type DashboardKPI = {
  title: string;
  value: string;
  change: string;
  changeTone: KPIChangeTone;
  icon: LucideIcon;
  helperText?: string;
};

export type TrendPoint = {
  month: string;
  quotationValue: number;
  awardedValue: number;
  quotationCount: number;
};

export type StatusDistributionItem = {
  status: QuotationStatus;
  count: number;
  value: number;
};

export type TopClient = {
  id: string;
  name: string;
  quotationCount: number;
  totalValue: number;
  awardedValue: number;
  conversionRate: number;
};

export type RecentQuotation = {
  id: string;
  quotationNo: string;
  clientName: string;
  projectName: string;
  value: number;
  status: QuotationStatus;
  revisionNo: number;
  createdAt: string;
};

export type ExpiringQuotation = {
  id: string;
  quotationNo: string;
  clientName: string;
  expiryDate: string;
  daysLeft: number;
  value: number;
  status: QuotationStatus;
};

export type ActivityFeedItem = {
  id: string;
  type: ActivityType;
  title: string;
  description: string;
  timestamp: string;
};

export type SystemBreakdownItem = {
  systemName: string;
  quotationCount: number;
  totalValue: number;
  avgMargin: number;
};

export type WinLossInsight = {
  label: string;
  value: number;
};

export type DashboardComponentMeta = {
  key: string;
  title: string;
  description: string;
};


/* =========================================================
   2) COMPONENTS TO BUILD
   ========================================================= */

export const dashboardComponents: DashboardComponentMeta[] = [
  {
    key: "kpi-cards",
    title: "KPI Cards",
    description:
      "Top-level metrics like total quotations, pipeline value, awarded value, conversion rate, active clients, and expiring quotations.",
  },
  {
    key: "quotation-value-trend-chart",
    title: "Quotation Value Trend Chart",
    description:
      "Line or area chart showing quotation value trend and awarded value trend over time.",
  },
  {
    key: "quotation-count-chart",
    title: "Quotation Count Chart",
    description:
      "Bar chart showing how many quotations were created each month.",
  },
  {
    key: "status-distribution-chart",
    title: "Status Distribution Chart",
    description:
      "Pie or donut chart showing draft, sent, awarded, lost, and expired quotations.",
  },
  {
    key: "recent-quotations-table",
    title: "Recent Quotations Table",
    description:
      "Compact table of latest quotations with client, project, value, revision, date, and status.",
  },
  {
    key: "expiring-quotations-card",
    title: "Expiring Quotations List",
    description:
      "List of quotations that are nearing expiry and need action.",
  },
  {
    key: "top-clients-table",
    title: "Top Clients Table",
    description:
      "Ranked client list based on total quotation value, awarded value, and conversion rate.",
  },
  {
    key: "activity-feed",
    title: "Activity Feed",
    description:
      "Chronological feed of major events such as created quotations, revisions, awards, and client additions.",
  },
  {
    key: "system-breakdown-chart",
    title: "System Breakdown Chart",
    description:
      "Bar chart showing revenue/value split by system category or solution type.",
  },
  {
    key: "win-loss-insights",
    title: "Win/Loss Insight Cards",
    description:
      "Small insight cards showing wins, losses, average revisions, or average margin.",
  },
];


/* =========================================================
   3) KPI CARD DUMMY DATA
   ========================================================= */

export const dashboardKpiData: DashboardKPI[] = [
  {
    title: "Total Quotations",
    value: "248",
    change: "+12.4%",
    changeTone: "positive",
    icon: FileText,
    helperText: "vs last month",
  },
  {
    title: "Pipeline Value",
    value: "AED 4.82M",
    change: "+8.1%",
    changeTone: "positive",
    icon: CircleDollarSign,
    helperText: "draft + sent quotations",
  },
  {
    title: "Awarded Value",
    value: "AED 1.94M",
    change: "+15.7%",
    changeTone: "positive",
    icon: BadgeCheck,
    helperText: "confirmed wins",
  },
  {
    title: "Conversion Rate",
    value: "31.6%",
    change: "+2.8%",
    changeTone: "positive",
    icon: TrendingUp,
    helperText: "won / total quotations",
  },
  {
    title: "Active Clients",
    value: "64",
    change: "+5.0%",
    changeTone: "positive",
    icon: Users,
    helperText: "clients with quotation activity",
  },
  {
    title: "Expiring Soon",
    value: "11",
    change: "-3",
    changeTone: "positive",
    icon: Clock3,
    helperText: "within next 7 days",
  },
];


/* =========================================================
   4) QUOTATION VALUE + COUNT TREND DATA
   ========================================================= */

export const quotationTrendData: TrendPoint[] = [
  { month: "Jan", quotationValue: 420000, awardedValue: 125000, quotationCount: 18 },
  { month: "Feb", quotationValue: 510000, awardedValue: 148000, quotationCount: 22 },
  { month: "Mar", quotationValue: 465000, awardedValue: 132000, quotationCount: 20 },
  { month: "Apr", quotationValue: 590000, awardedValue: 201000, quotationCount: 25 },
  { month: "May", quotationValue: 620000, awardedValue: 228000, quotationCount: 29 },
  { month: "Jun", quotationValue: 710000, awardedValue: 256000, quotationCount: 31 },
  { month: "Jul", quotationValue: 680000, awardedValue: 242000, quotationCount: 28 },
  { month: "Aug", quotationValue: 760000, awardedValue: 290000, quotationCount: 33 },
  { month: "Sep", quotationValue: 735000, awardedValue: 274000, quotationCount: 30 },
  { month: "Oct", quotationValue: 810000, awardedValue: 326000, quotationCount: 35 },
  { month: "Nov", quotationValue: 845000, awardedValue: 348000, quotationCount: 37 },
  { month: "Dec", quotationValue: 910000, awardedValue: 392000, quotationCount: 40 },
];


/* =========================================================
   5) STATUS DISTRIBUTION DATA
   ========================================================= */

export const statusDistributionData: StatusDistributionItem[] = [
  { status: "draft", count: 38, value: 620000 },
  { status: "sent", count: 96, value: 4200000 },
  { status: "awarded", count: 78, value: 1940000 },
  { status: "lost", count: 29, value: 860000 },
  { status: "expired", count: 7, value: 120000 },
];


/* =========================================================
   6) RECENT QUOTATIONS TABLE DATA
   ========================================================= */

export const recentQuotationsData: RecentQuotation[] = [
  {
    id: "q_001",
    quotationNo: "QF-2026-001",
    clientName: "Emaar Properties",
    projectName: "Dubai Hills Parking Upgrade",
    value: 184500,
    status: "sent",
    revisionNo: 2,
    createdAt: "2026-04-20",
  },
  {
    id: "q_002",
    quotationNo: "QF-2026-002",
    clientName: "Khazna Data Centers",
    projectName: "AUH-04 Scissor Lift Package",
    value: 326000,
    status: "awarded",
    revisionNo: 1,
    createdAt: "2026-04-19",
  },
  {
    id: "q_003",
    quotationNo: "QF-2026-003",
    clientName: "Majid Al Futtaim",
    projectName: "Mall ANPR Expansion",
    value: 248900,
    status: "draft",
    revisionNo: 0,
    createdAt: "2026-04-18",
  },
  {
    id: "q_004",
    quotationNo: "QF-2026-004",
    clientName: "ENBD",
    projectName: "Parking Guidance Renewal",
    value: 142300,
    status: "lost",
    revisionNo: 3,
    createdAt: "2026-04-17",
  },
  {
    id: "q_005",
    quotationNo: "QF-2026-005",
    clientName: "Cleveland Clinic Abu Dhabi",
    projectName: "Smart Parking Upgrade",
    value: 411750,
    status: "sent",
    revisionNo: 1,
    createdAt: "2026-04-16",
  },
];


/* =========================================================
   7) EXPIRING QUOTATIONS DATA
   ========================================================= */

export const expiringQuotationsData: ExpiringQuotation[] = [
  {
    id: "e_001",
    quotationNo: "QF-2026-011",
    clientName: "Sobha Realty",
    expiryDate: "2026-04-24",
    daysLeft: 2,
    value: 118000,
    status: "sent",
  },
  {
    id: "e_002",
    quotationNo: "QF-2026-014",
    clientName: "Nakheel",
    expiryDate: "2026-04-25",
    daysLeft: 3,
    value: 269500,
    status: "sent",
  },
  {
    id: "e_003",
    quotationNo: "QF-2026-017",
    clientName: "Dubai Municipality",
    expiryDate: "2026-04-27",
    daysLeft: 5,
    value: 94000,
    status: "draft",
  },
  {
    id: "e_004",
    quotationNo: "QF-2026-019",
    clientName: "Meraas",
    expiryDate: "2026-04-28",
    daysLeft: 6,
    value: 156400,
    status: "sent",
  },
];


/* =========================================================
   8) TOP CLIENTS DATA
   ========================================================= */

export const topClientsData: TopClient[] = [
  {
    id: "c_001",
    name: "Emaar Properties",
    quotationCount: 24,
    totalValue: 1285000,
    awardedValue: 465000,
    conversionRate: 37.5,
  },
  {
    id: "c_002",
    name: "Khazna Data Centers",
    quotationCount: 12,
    totalValue: 974000,
    awardedValue: 512000,
    conversionRate: 41.7,
  },
  {
    id: "c_003",
    name: "Majid Al Futtaim",
    quotationCount: 18,
    totalValue: 842500,
    awardedValue: 291000,
    conversionRate: 33.3,
  },
  {
    id: "c_004",
    name: "ENBD",
    quotationCount: 10,
    totalValue: 603000,
    awardedValue: 176000,
    conversionRate: 30.0,
  },
  {
    id: "c_005",
    name: "Dubai Municipality",
    quotationCount: 8,
    totalValue: 488000,
    awardedValue: 132000,
    conversionRate: 25.0,
  },
];


/* =========================================================
   9) ACTIVITY FEED DATA
   ========================================================= */

export const activityFeedData: ActivityFeedItem[] = [
  {
    id: "a_001",
    type: "quotation_awarded",
    title: "Quotation awarded",
    description: "QF-2026-002 was awarded by Khazna Data Centers.",
    timestamp: "2 hours ago",
  },
  {
    id: "a_002",
    type: "revision_added",
    title: "Revision submitted",
    description: "Revision 2 created for QF-2026-001 for Emaar Properties.",
    timestamp: "4 hours ago",
  },
  {
    id: "a_003",
    type: "quotation_sent",
    title: "Quotation sent",
    description: "QF-2026-005 sent to Cleveland Clinic Abu Dhabi.",
    timestamp: "Yesterday",
  },
  {
    id: "a_004",
    type: "client_added",
    title: "New client added",
    description: "A new client record was created for Sobha Realty.",
    timestamp: "Yesterday",
  },
  {
    id: "a_005",
    type: "quotation_created",
    title: "Quotation drafted",
    description: "QF-2026-003 was created for Majid Al Futtaim.",
    timestamp: "2 days ago",
  },
];


/* =========================================================
   10) SYSTEM BREAKDOWN DATA
   ========================================================= */

export const systemBreakdownData: SystemBreakdownItem[] = [
  {
    systemName: "ANPR System",
    quotationCount: 42,
    totalValue: 1280000,
    avgMargin: 24.5,
  },
  {
    systemName: "Barrier System",
    quotationCount: 35,
    totalValue: 940000,
    avgMargin: 21.8,
  },
  {
    systemName: "Parking Guidance System",
    quotationCount: 28,
    totalValue: 1560000,
    avgMargin: 26.3,
  },
  {
    systemName: "Access Control",
    quotationCount: 18,
    totalValue: 620000,
    avgMargin: 19.7,
  },
  {
    systemName: "Scissor Lift",
    quotationCount: 9,
    totalValue: 870000,
    avgMargin: 17.9,
  },
];


/* =========================================================
   11) WIN / LOSS INSIGHTS DATA
   ========================================================= */

export const winLossInsightsData: WinLossInsight[] = [
  { label: "Won Quotations", value: 78 },
  { label: "Lost Quotations", value: 29 },
  { label: "Avg Revision Count", value: 1.8 },
  { label: "Avg Margin %", value: 22.4 },
];


/* =========================================================
   12) OPTIONAL ICON MAPS FOR SMALL STAT CARDS / FEEDS
   ========================================================= */

export const dashboardSectionIcons = {
  activity: Activity,
  analytics: BarChart3,
  status: PieChart,
  quotations: ClipboardList,
  performance: Target,
  alerts: AlertTriangle,
};


