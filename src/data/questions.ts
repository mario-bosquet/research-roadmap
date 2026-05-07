export type Option = { label: string; text: string; score: 1 | 2 | 3 | 5 };
export type Question = { id: number; pillarId: string; text: string; options: Option[] };
export type Pillar = { id: string; name: string; short: string; description: string };

export const PILLARS: Pillar[] = [
  {
    id: "tracking",
    name: "Tracking, Attribution & Pixel Architecture",
    short: "Tracking",
    description: "Server-side tracking, conversion API coverage, and deterministic attribution foundations.",
  },
  {
    id: "accounts",
    name: "Account Restructuring & Consolidation",
    short: "Accounts",
    description: "Campaign architecture, budget consolidation, and platform signal density.",
  },
  {
    id: "creative",
    name: "Creative Testing Ecosystem",
    short: "Creative",
    description: "Concept pipelines, hook velocity, and data-driven creative iteration.",
  },
  {
    id: "scaling",
    name: "Scaling Operations & ROAS Optimization",
    short: "Scaling",
    description: "Bid strategies, budget pacing, and margin-aware profitability engines.",
  },
  {
    id: "analytics",
    name: "Analytics, Reporting & Growth Intelligence",
    short: "Analytics",
    description: "Incrementality, LTV modeling, and executive-grade marketing reporting.",
  },
];

const mk = (
  id: number,
  pillarId: string,
  text: string,
  a: string,
  b: string,
  c: string,
  d: string
): Question => ({
  id,
  pillarId,
  text,
  options: [
    { label: "A", text: a, score: 1 },
    { label: "B", text: b, score: 2 },
    { label: "C", text: c, score: 3 },
    { label: "D", text: d, score: 5 },
  ],
});

export const QUESTIONS: Question[] = [
  mk(1, "tracking", "How is your conversion tracking implemented?",
    "Browser pixel only, no server-side setup.",
    "Pixel plus occasional manual event uploads.",
    "Partial Conversions API via a tag manager.",
    "Fully deterministic server-side tracking with first-party data."),
  mk(2, "tracking", "How do you handle iOS 14+ and cookie loss?",
    "We ignore it and accept the data gap.",
    "Aware of the issue but no mitigation in place.",
    "Using platform-native fixes (CAPI, enhanced conversions).",
    "Owned first-party identity graph with deterministic stitching."),
  mk(3, "tracking", "What is the state of your UTM and parameter hygiene?",
    "Inconsistent or missing UTMs across channels.",
    "UTMs applied manually per campaign.",
    "Standardized UTM taxonomy enforced by the team.",
    "Auto-generated UTMs with governance and validation."),
  mk(4, "tracking", "How is attribution modeled?",
    "Last-click platform-reported only.",
    "Comparing platform numbers side by side.",
    "GA4 or data-driven attribution in one tool.",
    "Multi-touch plus geo-lift and incrementality testing."),
  mk(5, "tracking", "How are offline conversions and CRM data integrated?",
    "Not integrated at all.",
    "Occasional CSV uploads.",
    "Scheduled CRM to ad platform syncs.",
    "Real-time server-side CRM value feedback loops."),
  mk(6, "tracking", "How confident are you in platform-reported ROAS?",
    "We take the numbers at face value.",
    "We suspect inflation but cannot quantify it.",
    "We discount reported ROAS with a fixed factor.",
    "We reconcile platform ROAS against blended contribution weekly."),

  mk(7, "accounts", "How is your ad account structured?",
    "Dozens of fragmented campaigns and ad sets.",
    "Loosely grouped by product or audience.",
    "Consolidated around platform best practice (e.g. CBO, ASC).",
    "Signal-dense architecture optimized for algorithmic learning."),
  mk(8, "accounts", "Budget allocation across campaigns?",
    "Even split regardless of performance.",
    "Monthly manual reallocation.",
    "Rule-based reallocation within platforms.",
    "Portfolio-level reallocation across channels by MER."),
  mk(9, "accounts", "Audience strategy?",
    "Cold interest stacks and lookalikes only.",
    "Broad targeting with some exclusions.",
    "Broad plus platform-recommended audience signals.",
    "First-party seeded audiences with value-based lookalikes."),
  mk(10, "accounts", "How is the learning phase managed?",
    "Frequent edits reset learning constantly.",
    "Aware of the learning phase but no rules enforced.",
    "Change control rules to protect learning.",
    "Learning-phase SLAs and event-volume thresholds per ad set."),
  mk(11, "accounts", "Cross-channel coordination (Meta, Google, TikTok, LinkedIn)?",
    "Each channel is run in isolation.",
    "Shared spreadsheet of spend and results.",
    "Weekly cross-channel review cadence.",
    "Unified media plan with shared KPIs and incrementality logic."),
  mk(12, "accounts", "How is naming and taxonomy managed?",
    "Ad-hoc names per campaign owner.",
    "Team-level naming convention.",
    "Documented taxonomy across all channels.",
    "Enforced taxonomy with automated validation at launch."),

  mk(13, "creative", "Creative production cadence?",
    "A handful of static ads per quarter.",
    "A few new creatives each month.",
    "Weekly batches of new concepts.",
    "Daily ad output via a dedicated creative studio."),
  mk(14, "creative", "How are winning hooks and angles identified?",
    "Gut feel from the team.",
    "Occasional post-mortem reviews.",
    "Structured monthly creative reviews.",
    "Systematic hook library with performance tagging."),
  mk(15, "creative", "Testing methodology for creative?",
    "Whatever ad gets launched runs until paused.",
    "Loose A/B comparisons.",
    "Structured testing framework with clear criteria.",
    "Statistical testing with concept, hook, and format matrices."),
  mk(16, "creative", "Use of UGC and creator-driven content?",
    "None.",
    "Occasional one-off creator posts.",
    "A small roster of repeat creators.",
    "Scaled UGC engine producing dozens of variants per week."),
  mk(17, "creative", "Creative brief and iteration workflow?",
    "Verbal or ad-hoc requests.",
    "Shared doc briefs with inconsistent fields.",
    "Standard brief template across the team.",
    "Data-informed briefs sourced from winning-ad analysis."),
  mk(18, "creative", "Format coverage (static, video, carousel, UGC, motion)?",
    "One dominant format.",
    "Two formats in rotation.",
    "Full format coverage with some gaps.",
    "Native format-per-placement coverage at scale."),

  mk(19, "scaling", "Bid strategy maturity?",
    "Default auto bids everywhere.",
    "Mix of default and manual bids with no thesis.",
    "Defined bid strategy per funnel stage.",
    "Target ROAS and value-based bidding tied to LTV."),
  mk(20, "scaling", "How is scaling executed when something works?",
    "We turn up the budget aggressively until it breaks.",
    "Small ad-hoc budget increases.",
    "Documented scaling rules (e.g. 20% every 48h).",
    "Automated scaling tied to CAC and MER guardrails."),
  mk(21, "scaling", "Margin awareness in decisioning?",
    "We optimize to platform ROAS only.",
    "We know blended margin but don't use it in decisions.",
    "Contribution margin reported weekly.",
    "Per-SKU contribution margin feeds bidding in real time."),
  mk(22, "scaling", "Handling of diminishing returns at scale?",
    "We don't see it until it's too late.",
    "Reactive pullbacks after bad weeks.",
    "Spend-efficiency curves reviewed monthly.",
    "Marginal ROAS curves modeled and budgeted against weekly."),
  mk(23, "scaling", "Geographic and segment expansion?",
    "One market, one audience.",
    "Expanded ad-hoc into adjacent markets.",
    "Structured tests of new geos and segments.",
    "Portfolio approach to geo and segment expansion."),
  mk(24, "scaling", "Pacing and budget governance?",
    "Spend drifts unpredictably.",
    "Manual checks against monthly budget.",
    "Automated pacing alerts.",
    "Real-time pacing engine with auto-corrective actions."),

  mk(25, "analytics", "Reporting frequency and depth?",
    "Monthly platform screenshots.",
    "Weekly spreadsheet exports.",
    "Automated BI dashboard refreshed daily.",
    "Executive dashboard with LTV, MER, and forecast views."),
  mk(26, "analytics", "LTV and cohort modeling?",
    "We don't track LTV.",
    "Aggregate LTV across all customers.",
    "Cohort LTV by channel.",
    "Predicted LTV by channel, creative, and segment."),
  mk(27, "analytics", "Incrementality and lift testing?",
    "Never conducted.",
    "Discussed but not executed.",
    "Occasional geo-holdout tests.",
    "Rolling program of geo-lift and conversion-lift studies."),
  mk(28, "analytics", "Forecasting and planning?",
    "Prior year plus a growth target.",
    "Monthly forecast spreadsheet.",
    "Channel-level forecasts refreshed weekly.",
    "Scenario-based forecasting tied to spend curves."),
  mk(29, "analytics", "Data warehouse and source-of-truth?",
    "No warehouse; platform numbers only.",
    "Spreadsheets aggregated by an analyst.",
    "Cloud warehouse with basic ad-platform loads.",
    "Warehouse with modeled marketing mart and governance."),
  mk(30, "analytics", "Executive visibility into paid media?",
    "Leadership sees only headline spend.",
    "Monthly static report to leadership.",
    "Live dashboard shared weekly.",
    "Board-ready view with attribution, MER, and payback metrics."),
];

export function getMaturityLevel(total: number): { level: number; name: string; summary: string } {
  const bands: Array<{ min: number; max: number; name: string; summary: string }> = [
    { min: 30, max: 41, name: "Nascent", summary: "Foundational gaps across tracking, account structure, creative, and measurement. Strategic intervention is required before scaling spend." },
    { min: 42, max: 53, name: "Exploratory", summary: "Early awareness without structure. Spend is flowing but the infrastructure to scale profitably is missing." },
    { min: 54, max: 65, name: "Emerging", summary: "Pockets of capability. Attribution and creative-testing debt still constrain profitable scale." },
    { min: 66, max: 77, name: "Developing", summary: "Credible progress on multiple pillars. Reporting integrity and incrementality remain the primary friction points." },
    { min: 78, max: 89, name: "Operational", summary: "The media operation is running but not yet a margin machine. Creative velocity and attribution depth remain the bottleneck." },
    { min: 90, max: 101, name: "Integrated", summary: "Paid channels are integrated with CRM and finance. Profitable scale is repeatable across core markets." },
    { min: 102, max: 113, name: "Advanced", summary: "Advanced media architecture in place. Focus shifts to incrementality, LTV-driven bidding, and portfolio expansion." },
    { min: 114, max: 125, name: "Optimized", summary: "Highly optimized stack. Creative, media, and measurement operate as a single compounding engine." },
    { min: 126, max: 137, name: "Transformative", summary: "Paid media is a transformative growth lever. Attribution and creative operations are at elite tier." },
    { min: 138, max: 150, name: "Category-Defining", summary: "Category-defining paid acquisition. The company sets the benchmark competitors chase." },
  ];
  for (let i = 0; i < bands.length; i++) {
    const b = bands[i];
    if (total >= b.min && total <= b.max) return { level: i + 1, name: b.name, summary: b.summary };
  }
  if (total < 30) return { level: 1, name: "Nascent", summary: bands[0].summary };
  return { level: 10, name: "Category-Defining", summary: bands[9].summary };
}

export type PillarBlueprint = {
  pillarId: string;
  pillarName: string;
  score: number;
  initiative: string;
  resources: string[];
  hours: number;
};

export type AssetTier = "foundational" | "intermediate" | "advanced" | "edge";

type PillarBlueprintDef = {
  initiative: string;
  baseHours: number;
  tiers: Record<AssetTier, string[]>;
};

const PILLAR_BLUEPRINTS: Record<string, PillarBlueprintDef> = {
  tracking: {
    initiative: "Deterministic Tracking & First-Party Attribution Backbone",
    baseHours: 420,
    tiers: {
      foundational: [
        "Server-Side Tag Management Infrastructure",
        "Conversions API Implementation",
        "UTM Taxonomy & Governance Framework",
        "Cross-Domain Tracking Repair",
      ],
      intermediate: [
        "First-Party Identity Graph",
        "Offline Conversion & CRM Sync Pipeline",
        "Enhanced Conversions & Value Optimization Setup",
        "Consent Mode & Privacy Compliance Layer",
      ],
      advanced: [
        "Multi-Touch Attribution Model",
        "Geo-Lift & Incrementality Testing Framework",
        "Blended-Spend Reconciliation Engine",
      ],
      edge: [
        "Deterministic Identity Stitching Across Devices",
        "Cookieless-Ready Attribution Stack",
      ],
    },
  },
  accounts: {
    initiative: "Consolidated Account Architecture & Signal Density Program",
    baseHours: 360,
    tiers: {
      foundational: [
        "Campaign Consolidation Audit & Rebuild",
        "Advantage+ / Performance Max Structural Setup",
        "Naming Convention & Taxonomy Enforcement",
        "Audience Exclusion & Suppression Framework",
      ],
      intermediate: [
        "Value-Based Lookalike & Seed Audience System",
        "CBO & ASC Migration Playbook",
        "Learning-Phase Protection Rules",
        "Cross-Channel Budget Allocation Framework",
      ],
      advanced: [
        "Signal Density Optimization Engine",
        "Portfolio Bidding Across Channels",
        "Automated Campaign Launch Validator",
      ],
      edge: [
        "Algorithmic Budget Rebalancing by MER",
        "Unified Media Planning Operating Model",
      ],
    },
  },
  creative: {
    initiative: "Creative Testing Ecosystem & Concept Velocity Studio",
    baseHours: 480,
    tiers: {
      foundational: [
        "Creative Brief & Performance Tagging System",
        "Structured Hook Library",
        "Static + Video Production Workflow",
        "Creative Naming & Versioning Standard",
      ],
      intermediate: [
        "UGC Creator Network & Sourcing Pipeline",
        "Weekly Creative Testing Framework",
        "Ad Concept Matrix (Hook / Angle / Format)",
        "Winning-Ad Teardown & Iteration Process",
      ],
      advanced: [
        "Creative Performance Analytics Dashboard",
        "Modular Creative Production System",
        "Statistical Creative Testing Protocol",
      ],
      edge: [
        "AI-Assisted Ad Variant Generation Studio",
        "Creative-To-Landing Page Matching Engine",
      ],
    },
  },
  scaling: {
    initiative: "ROAS Optimization & Profitable Scaling Operations",
    baseHours: 440,
    tiers: {
      foundational: [
        "Target ROAS & CAC Guardrail Framework",
        "Daily Pacing & Budget Governance Dashboard",
        "Scaling Rules & Change Control Playbook",
        "Contribution Margin Reporting Layer",
      ],
      intermediate: [
        "Value-Based Bidding Configuration",
        "Marginal ROAS Curve Modeling",
        "Structured Geo & Segment Expansion Framework",
        "Automated Budget Rebalancing Rules",
      ],
      advanced: [
        "LTV-Informed Bidding Strategy",
        "Portfolio Scaling & Diminishing-Returns Engine",
        "Real-Time Pacing Auto-Corrector",
      ],
      edge: [
        "Predictive Scaling Forecaster",
        "Margin-Aware Dynamic Budget Allocator",
      ],
    },
  },
  analytics: {
    initiative: "Marketing Intelligence Stack & Executive Reporting",
    baseHours: 400,
    tiers: {
      foundational: [
        "Cloud Marketing Data Warehouse",
        "Unified Paid Media Dashboard",
        "MER & Blended-ROAS Reporting Layer",
        "Cohort & Channel Performance Report",
      ],
      intermediate: [
        "Predicted LTV & Payback Modeling",
        "Incrementality Testing Program",
        "Weekly Forecasting & Scenario Planning",
        "Creative Performance Intelligence Layer",
      ],
      advanced: [
        "Marketing Mix Modeling Service",
        "Executive KPI Board-Ready View",
        "Automated Anomaly Detection on Spend & Performance",
      ],
      edge: [
        "Causal Inference & Lift Measurement Platform",
        "Unified Growth Intelligence Copilot",
      ],
    },
  },
};

export function getAssetTier(score: number): AssetTier | null {
  if (score >= 30) return null;
  if (score <= 15) return "foundational";
  if (score <= 22) return "intermediate";
  if (score <= 27) return "advanced";
  return "edge";
}

const TIER_DISPLAY_COUNT: Record<AssetTier, number> = {
  foundational: 3,
  intermediate: 3,
  advanced: 3,
  edge: 2,
};

export function buildRoadmap(pillarScores: Record<string, number>): PillarBlueprint[] {
  const out: PillarBlueprint[] = [];
  for (const p of PILLARS) {
    const score = pillarScores[p.id] ?? 0;
    const tier = getAssetTier(score);
    if (!tier) continue;
    const bp = PILLAR_BLUEPRINTS[p.id];
    const pool = bp.tiers[tier];
    const resources = pool.slice(0, TIER_DISPLAY_COUNT[tier]);
    const deficit = Math.max(0, 30 - score);
    const hours = Math.round(bp.baseHours * (0.45 + (deficit / 30) * 0.95));
    out.push({
      pillarId: p.id,
      pillarName: p.name,
      score,
      initiative: bp.initiative,
      resources,
      hours,
    });
  }
  return out;
}

export function getAllPillarAssets(pillarId: string): { tier: AssetTier; assets: string[] }[] {
  const bp = PILLAR_BLUEPRINTS[pillarId];
  if (!bp) return [];
  return (["foundational", "intermediate", "advanced", "edge"] as AssetTier[]).map((tier) => ({
    tier,
    assets: bp.tiers[tier],
  }));
}
