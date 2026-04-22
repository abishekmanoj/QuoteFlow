/* =========================================================
   CLIENTS PAGE - COMPONENT LIST + DUMMY DATA
   QuoteFlow / OmniQuote
   ========================================================= */

/* =========================================================
   1) TYPES
   ========================================================= */

import type { LucideIcon } from "lucide-react";
import {
  Users,
  UserCheck,
  CircleDollarSign,
  BarChart3,
  Repeat,
  PieChart,
  TrendingUp,
  Building2,
  Target,
  Activity,
  ClipboardList,
  BadgeCheck,
  XCircle,
  Clock3,
} from "lucide-react";

export type KPIChangeTone = "positive" | "negative" | "neutral";

export type ClientHealth =
  | "excellent"
  | "good"
  | "average"
  | "at_risk";

export type ClientCategory =
  | "enterprise"
  | "government"
  | "private"
  | "healthcare"
  | "retail";

export type ClientsPageKPI = {
  title: string;
  value: string;
  change: string;
  changeTone: KPIChangeTone;
  icon: LucideIcon;
  helperText?: string;
};

export type ClientRevenueContributionItem = {
  name: string;
  value: number;
};

export type ClientRevenueBarItem = {
  clientName: string;
  totalQuotedValue: number;
  awardedValue: number;
};

export type ClientGrowthPoint = {
  month: string;
  totalClients: number;
  activeClients: number;
  newClients: number;
};

export type ClientRow = {
  id: string;
  name: string;
  category: ClientCategory;
  contactPerson: string;
  email: string;
  phone: string;
  quotationCount: number;
  totalQuotedValue: number;
  awardedValue: number;
  winRate: number;
  lastActivity: string;
  health: ClientHealth;
};

export type ClientActivityItem = {
  id: string;
  clientName: string;
  quotationsCreated: number;
  quotationsSent: number;
  awardedCount: number;
  lostCount: number;
  lastActivity: string;
};

export type ClientWinRateItem = {
  clientName: string;
  totalQuotations: number;
  wonQuotations: number;
  winRate: number;
};

export type ClientQuoteFrequencyItem = {
  clientName: string;
  quotationCount: number;
};

export type ClientComponentMeta = {
  key: string;
  title: string;
  description: string;
};


/* =========================================================
   2) COMPONENTS TO BUILD
   ========================================================= */

export const clientsPageComponents: ClientComponentMeta[] = [
  {
    key: "client-kpi-cards",
    title: "Client KPI Cards",
    description:
      "Top-level metrics like total clients, active clients, total revenue, average revenue per client, and repeat client percentage.",
  },
  {
    key: "client-revenue-contribution-chart",
    title: "Client Revenue Contribution Chart",
    description:
      "Pie or donut chart showing which clients contribute the most quoted or awarded value.",
  },
  {
    key: "client-revenue-bar-chart",
    title: "Client Revenue Bar Chart",
    description:
      "Bar chart comparing total quoted value and awarded value by client.",
  },
  {
    key: "client-growth-trend-chart",
    title: "Client Growth Trend Chart",
    description:
      "Line chart showing total client growth, active client growth, and new clients over time.",
  },
  {
    key: "all-clients-table",
    title: "All Clients Table",
    description:
      "Main client table with contact info, quotation count, quoted value, awarded value, win rate, and health.",
  },
  {
    key: "client-activity-table",
    title: "Client Activity Table",
    description:
      "Shows quotation movement by client like created, sent, awarded, lost, and last activity.",
  },
  {
    key: "client-win-rate-table",
    title: "Client Win Rate Table",
    description:
      "Ranks clients by total quotations, won quotations, and win rate.",
  },
  {
    key: "top-clients-by-frequency-chart",
    title: "Top Clients by Frequency Chart",
    description:
      "Bar chart showing which clients receive the most quotations.",
  },
];


/* =========================================================
   3) KPI CARD DUMMY DATA
   ========================================================= */

export const clientsPageKpiData: ClientsPageKPI[] = [
  {
    title: "Total Clients",
    value: "64",
    change: "+6.7%",
    changeTone: "positive",
    icon: Users,
    helperText: "all client records",
  },
  {
    title: "Active Clients",
    value: "41",
    change: "+4.1%",
    changeTone: "positive",
    icon: UserCheck,
    helperText: "clients with quotation activity",
  },
  {
    title: "Awarded Revenue",
    value: "AED 1.94M",
    change: "+15.7%",
    changeTone: "positive",
    icon: CircleDollarSign,
    helperText: "from awarded quotations",
  },
  {
    title: "Avg Revenue / Client",
    value: "AED 47.3K",
    change: "+3.2%",
    changeTone: "positive",
    icon: BarChart3,
    helperText: "awarded value per active client",
  },
  {
    title: "Repeat Clients",
    value: "58.2%",
    change: "+2.4%",
    changeTone: "positive",
    icon: Repeat,
    helperText: "clients with multiple quotations",
  },
];


/* =========================================================
   4) CLIENT REVENUE CONTRIBUTION DATA
   ========================================================= */

export const clientRevenueContributionData: ClientRevenueContributionItem[] = [
  { name: "Emaar Properties", value: 465000 },
  { name: "Khazna Data Centers", value: 512000 },
  { name: "Majid Al Futtaim", value: 291000 },
  { name: "ENBD", value: 176000 },
  { name: "Dubai Municipality", value: 132000 },
  { name: "Others", value: 364000 },
];


/* =========================================================
   5) CLIENT REVENUE BAR CHART DATA
   ========================================================= */

export const clientRevenueBarData: ClientRevenueBarItem[] = [
  {
    clientName: "Emaar Properties",
    totalQuotedValue: 1285000,
    awardedValue: 465000,
  },
  {
    clientName: "Khazna Data Centers",
    totalQuotedValue: 974000,
    awardedValue: 512000,
  },
  {
    clientName: "Majid Al Futtaim",
    totalQuotedValue: 842500,
    awardedValue: 291000,
  },
  {
    clientName: "ENBD",
    totalQuotedValue: 603000,
    awardedValue: 176000,
  },
  {
    clientName: "Dubai Municipality",
    totalQuotedValue: 488000,
    awardedValue: 132000,
  },
  {
    clientName: "Cleveland Clinic Abu Dhabi",
    totalQuotedValue: 456000,
    awardedValue: 201000,
  },
];


/* =========================================================
   6) CLIENT GROWTH TREND DATA
   ========================================================= */

export const clientGrowthTrendData: ClientGrowthPoint[] = [
  { month: "Jan", totalClients: 34, activeClients: 21, newClients: 3 },
  { month: "Feb", totalClients: 37, activeClients: 23, newClients: 3 },
  { month: "Mar", totalClients: 40, activeClients: 25, newClients: 3 },
  { month: "Apr", totalClients: 43, activeClients: 27, newClients: 3 },
  { month: "May", totalClients: 46, activeClients: 29, newClients: 3 },
  { month: "Jun", totalClients: 49, activeClients: 31, newClients: 3 },
  { month: "Jul", totalClients: 52, activeClients: 33, newClients: 3 },
  { month: "Aug", totalClients: 55, activeClients: 35, newClients: 3 },
  { month: "Sep", totalClients: 57, activeClients: 36, newClients: 2 },
  { month: "Oct", totalClients: 60, activeClients: 38, newClients: 3 },
  { month: "Nov", totalClients: 62, activeClients: 39, newClients: 2 },
  { month: "Dec", totalClients: 64, activeClients: 41, newClients: 2 },
];


/* =========================================================
   7) ALL CLIENTS TABLE DATA
   ========================================================= */

export const clientsTableData: ClientRow[] = [
  {
    id: "c_001",
    name: "Emaar Properties",
    category: "enterprise",
    contactPerson: "Ahmed Khalid",
    email: "ahmed.khalid@emaar.ae",
    phone: "+971-50-123-4567",
    quotationCount: 24,
    totalQuotedValue: 1285000,
    awardedValue: 465000,
    winRate: 37.5,
    lastActivity: "2026-04-21",
    health: "excellent",
  },
  {
    id: "c_002",
    name: "Khazna Data Centers",
    category: "enterprise",
    contactPerson: "Mohammed Tariq",
    email: "m.tariq@khazna.ae",
    phone: "+971-52-234-5678",
    quotationCount: 12,
    totalQuotedValue: 974000,
    awardedValue: 512000,
    winRate: 41.7,
    lastActivity: "2026-04-20",
    health: "excellent",
  },
  {
    id: "c_003",
    name: "Majid Al Futtaim",
    category: "retail",
    contactPerson: "Sara Nazeer",
    email: "sara.nazeer@maf.ae",
    phone: "+971-54-345-6789",
    quotationCount: 18,
    totalQuotedValue: 842500,
    awardedValue: 291000,
    winRate: 33.3,
    lastActivity: "2026-04-18",
    health: "good",
  },
  {
    id: "c_004",
    name: "ENBD",
    category: "private",
    contactPerson: "Rayan Thomas",
    email: "rayan.thomas@enbd.ae",
    phone: "+971-56-456-7890",
    quotationCount: 10,
    totalQuotedValue: 603000,
    awardedValue: 176000,
    winRate: 30.0,
    lastActivity: "2026-04-17",
    health: "good",
  },
  {
    id: "c_005",
    name: "Dubai Municipality",
    category: "government",
    contactPerson: "Faisal Rahman",
    email: "f.rahman@dm.gov.ae",
    phone: "+971-58-567-8901",
    quotationCount: 8,
    totalQuotedValue: 488000,
    awardedValue: 132000,
    winRate: 25.0,
    lastActivity: "2026-04-16",
    health: "average",
  },
  {
    id: "c_006",
    name: "Cleveland Clinic Abu Dhabi",
    category: "healthcare",
    contactPerson: "Noor Ali",
    email: "noor.ali@clevelandclinic.ae",
    phone: "+971-55-678-9012",
    quotationCount: 9,
    totalQuotedValue: 456000,
    awardedValue: 201000,
    winRate: 44.4,
    lastActivity: "2026-04-20",
    health: "excellent",
  },
];


/* =========================================================
   8) CLIENT ACTIVITY TABLE DATA
   ========================================================= */

export const clientActivityData: ClientActivityItem[] = [
  {
    id: "ca_001",
    clientName: "Emaar Properties",
    quotationsCreated: 24,
    quotationsSent: 19,
    awardedCount: 9,
    lostCount: 4,
    lastActivity: "2 hours ago",
  },
  {
    id: "ca_002",
    clientName: "Khazna Data Centers",
    quotationsCreated: 12,
    quotationsSent: 10,
    awardedCount: 5,
    lostCount: 2,
    lastActivity: "5 hours ago",
  },
  {
    id: "ca_003",
    clientName: "Majid Al Futtaim",
    quotationsCreated: 18,
    quotationsSent: 14,
    awardedCount: 6,
    lostCount: 3,
    lastActivity: "Yesterday",
  },
  {
    id: "ca_004",
    clientName: "ENBD",
    quotationsCreated: 10,
    quotationsSent: 8,
    awardedCount: 3,
    lostCount: 2,
    lastActivity: "Yesterday",
  },
  {
    id: "ca_005",
    clientName: "Cleveland Clinic Abu Dhabi",
    quotationsCreated: 9,
    quotationsSent: 7,
    awardedCount: 4,
    lostCount: 1,
    lastActivity: "2 days ago",
  },
];


/* =========================================================
   9) CLIENT WIN RATE TABLE DATA
   ========================================================= */

export const clientWinRateData: ClientWinRateItem[] = [
  {
    clientName: "Cleveland Clinic Abu Dhabi",
    totalQuotations: 9,
    wonQuotations: 4,
    winRate: 44.4,
  },
  {
    clientName: "Khazna Data Centers",
    totalQuotations: 12,
    wonQuotations: 5,
    winRate: 41.7,
  },
  {
    clientName: "Emaar Properties",
    totalQuotations: 24,
    wonQuotations: 9,
    winRate: 37.5,
  },
  {
    clientName: "Majid Al Futtaim",
    totalQuotations: 18,
    wonQuotations: 6,
    winRate: 33.3,
  },
  {
    clientName: "ENBD",
    totalQuotations: 10,
    wonQuotations: 3,
    winRate: 30.0,
  },
  {
    clientName: "Dubai Municipality",
    totalQuotations: 8,
    wonQuotations: 2,
    winRate: 25.0,
  },
];


/* =========================================================
   10) TOP CLIENTS BY FREQUENCY DATA
   ========================================================= */

export const topClientsByFrequencyData: ClientQuoteFrequencyItem[] = [
  { clientName: "Emaar Properties", quotationCount: 24 },
  { clientName: "Majid Al Futtaim", quotationCount: 18 },
  { clientName: "Khazna Data Centers", quotationCount: 12 },
  { clientName: "ENBD", quotationCount: 10 },
  { clientName: "Cleveland Clinic Abu Dhabi", quotationCount: 9 },
  { clientName: "Dubai Municipality", quotationCount: 8 },
];


/* =========================================================
   11) OPTIONAL ICON MAPS FOR SECTIONS
   ========================================================= */

export const clientsPageSectionIcons = {
  clients: Building2,
  revenue: CircleDollarSign,
  contribution: PieChart,
  growth: TrendingUp,
  activity: Activity,
  quotations: ClipboardList,
  conversion: Target,
  awarded: BadgeCheck,
  lost: XCircle,
  followup: Clock3,
};


/* =========================================================
   12) SUGGESTED PAGE SECTION ORDER
   ========================================================= */

export const clientsPageSectionOrder = [
  "client-kpi-cards",
  "client-growth-trend-chart",
  "client-revenue-contribution-chart",
  "client-revenue-bar-chart",
  "all-clients-table",
  "client-activity-table",
  "client-win-rate-table",
  "top-clients-by-frequency-chart",
] as const;