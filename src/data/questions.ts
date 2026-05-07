export type Option = { label: string; text: string; score: 1 | 2 | 3 | 5 };
export type Question = { id: number; pillarId: string; text: string; options: Option[] };
export type Pillar = { id: string; name: string; short: string; description: string };

export const PILLARS: Pillar[] = [
  {
    id: "listening",
    name: "Global Listening Architecture & Data Acquisition",
    short: "Listening",
    description: "Multi-channel tracking, API integrations, and complex keyword matrices that feed every downstream intelligence workflow.",
  },
  {
    id: "analytics",
    name: "Conversational Analytics & Sentiment Scoring",
    short: "Analytics",
    description: "NLP-driven sentiment tracking, intent classification, and entity recognition across conversations at scale.",
  },
  {
    id: "competitive",
    name: "Competitor Intelligence & Market Mapping",
    short: "Competitive",
    description: "Share of Voice analysis, threat detection, and whitespace identification across the competitive landscape.",
  },
  {
    id: "forecasting",
    name: "Predictive Trend Forecasting & Signal Detection",
    short: "Forecasting",
    description: "Real-time alerting mechanisms, anomaly detection, and automated executive reporting on emerging signals.",
  },
  {
    id: "governance",
    name: "Intelligence Governance & Executive Reporting",
    short: "Governance",
    description: "Taxonomy stewardship, data quality controls, and the board-grade reporting layer that closes the loop from signal to decision.",
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
  mk(1, "listening", "How is your social and digital listening coverage scoped?",
    "One platform only (e.g. X or Meta) with manual searches.",
    "A basic tool covering two or three social channels.",
    "Multi-channel listening across social, news, forums, and review sites.",
    "Enterprise coverage across social, news, podcasts, reviews, forums, and dark social via API."),
  mk(2, "listening", "How are your keyword and boolean query matrices managed?",
    "A short flat list maintained by one person.",
    "Several saved queries, refined ad-hoc.",
    "Governed boolean library with operators and negative keywords.",
    "Versioned query matrices reviewed quarterly with linguist oversight."),
  mk(3, "listening", "How is data acquired from closed or paywalled sources?",
    "We only collect what is free and visible in the UI.",
    "Occasional manual scraping.",
    "Licensed firehose access to one or two major sources.",
    "Enterprise firehose licensing across Reddit, X, TikTok, and news wires."),
  mk(4, "listening", "Language and geographic coverage?",
    "Single language, single market.",
    "English only, multi-market.",
    "Primary languages across core markets.",
    "Native-language coverage across 15+ markets with region-aware tuning."),
  mk(5, "listening", "Data retention and historical depth?",
    "Rolling 30-day window only.",
    "Up to 6 months retained in-tool.",
    "24 months searchable via the vendor.",
    "Full historical archive in an owned warehouse with replay capability."),
  mk(6, "listening", "Mention volume and data throughput?",
    "Under 10k mentions per month.",
    "Tens of thousands of mentions per month.",
    "Hundreds of thousands with basic filtering.",
    "Millions of mentions per month with deduplication and spam filtering."),

  mk(7, "analytics", "Sentiment classification approach?",
    "Vendor-default sentiment, rarely reviewed.",
    "Vendor sentiment with periodic spot-checks.",
    "Custom-trained sentiment model tuned for our category.",
    "Aspect-based sentiment with human-in-the-loop validation and drift monitoring."),
  mk(8, "analytics", "Intent classification maturity?",
    "We do not classify intent.",
    "Manual tagging of a small sample.",
    "Rule-based intent categories applied at ingest.",
    "Transformer-based intent models mapped to commercial funnel stages."),
  mk(9, "analytics", "Entity and topic extraction?",
    "Keyword counts only.",
    "Basic named entity recognition on a subset of content.",
    "NER plus topic modeling across all conversations.",
    "Knowledge-graph-linked entity extraction with disambiguation and ontology alignment."),
  mk(10, "analytics", "Multilingual and multimodal analysis?",
    "English text only.",
    "Machine-translated then analyzed in English.",
    "Native-language NLP for top markets.",
    "Native NLP plus image, video, and audio analysis with brand logo detection."),
  mk(11, "analytics", "Sarcasm, emoji, and slang handling?",
    "Ignored, accepted as noise.",
    "Aware of the limitation, no mitigation.",
    "Custom lexicons for top modifiers.",
    "Continuously retrained models with annotated edge-case corpora."),
  mk(12, "analytics", "How is NLP output validated?",
    "It is not validated.",
    "Occasional manual sampling.",
    "Quarterly accuracy audits against a labeled set.",
    "Continuous evaluation with precision, recall, and F1 reported weekly."),

  mk(13, "competitive", "How is Share of Voice measured?",
    "We do not track SOV.",
    "Manual counts from periodic reports.",
    "Automated SOV across 3-5 core competitors.",
    "Dynamic SOV across the full competitive set including challengers and adjacent categories."),
  mk(14, "competitive", "Competitor set definition?",
    "A static list that rarely changes.",
    "Reviewed annually by marketing.",
    "Reviewed quarterly with strategy team input.",
    "Dynamic competitor graph updated by market signals and emerging entrants."),
  mk(15, "competitive", "Campaign and launch detection?",
    "We find out when customers tell us.",
    "Manual monitoring by an analyst.",
    "Alerts on core competitor owned channels.",
    "Automated detection of competitor launches, pricing, and messaging shifts in near-real-time."),
  mk(16, "competitive", "Share of sentiment and perception mapping?",
    "Not measured.",
    "Overall sentiment compared once a quarter.",
    "Sentiment by competitor on key attributes.",
    "Attribute-level perception maps refreshed weekly across the competitive set."),
  mk(17, "competitive", "Whitespace and demand-gap identification?",
    "Ad-hoc intuition from the marketing team.",
    "Qualitative readouts from agency partners.",
    "Structured whitespace analysis twice a year.",
    "Always-on whitespace detection surfacing unmet conversation clusters to strategy."),
  mk(18, "competitive", "Influencer and creator intelligence?",
    "No visibility into the influencer layer.",
    "A manual list of known creators per competitor.",
    "Tracked creator affinity and reach by competitor.",
    "Full creator graph with earned vs paid attribution and authenticity scoring."),

  mk(19, "forecasting", "Trend detection method?",
    "We notice trends when they are already mainstream.",
    "Weekly readouts from the insights team.",
    "Automated volume-based trend alerts.",
    "Multi-factor early-signal detection combining velocity, novelty, and network spread."),
  mk(20, "forecasting", "Real-time alerting?",
    "No alerts; we review reports.",
    "Email digests at fixed intervals.",
    "Threshold-based alerts to a shared channel.",
    "Tiered alerting with anomaly detection routed to owners by severity and topic."),
  mk(21, "forecasting", "Crisis and reputation risk monitoring?",
    "Reactive only — we respond after escalation.",
    "After-hours monitoring by a duty analyst.",
    "24/7 monitoring with a defined escalation ladder.",
    "Predictive crisis modeling with pre-approved response playbooks."),
  mk(22, "forecasting", "Forecasting approach?",
    "No forecasting; we report history.",
    "Simple year-over-year trend extrapolation.",
    "Time-series forecasts on key volume and sentiment metrics.",
    "Probabilistic forecasts with scenario planning across demand, sentiment, and SOV."),
  mk(23, "forecasting", "Anomaly detection coverage?",
    "We react to obvious spikes only.",
    "Volume anomalies flagged manually.",
    "Statistical anomaly detection on core metrics.",
    "Multivariate anomaly detection across volume, sentiment, entities, and geography."),
  mk(24, "forecasting", "Signal-to-decision turnaround?",
    "Days to weeks — insights travel via decks.",
    "48-72 hours via a weekly report.",
    "Same-day via a live dashboard.",
    "Sub-hour via automated executive briefs routed to decision owners."),

  mk(25, "governance", "Reporting cadence and depth?",
    "Quarterly slide decks.",
    "Monthly readouts with cherry-picked charts.",
    "Weekly live dashboards for core KPIs.",
    "Always-on executive view with board-ready SOV, sentiment, and forecast layers."),
  mk(26, "governance", "Data quality and spam filtering?",
    "We accept the vendor's raw data.",
    "Basic spam filters applied.",
    "Custom spam and bot filters tuned for our category.",
    "Multi-stage quality pipeline with deduplication, bot detection, and language QA."),
  mk(27, "governance", "Taxonomy and tagging governance?",
    "Ad-hoc tags per project.",
    "A shared tag list maintained informally.",
    "Documented taxonomy reviewed annually.",
    "Versioned taxonomy with change-control, linguist review, and automated validation."),
  mk(28, "governance", "Data warehouse and source-of-truth?",
    "Exports from vendor tools, stored in decks.",
    "A shared spreadsheet aggregates the feeds.",
    "Cloud warehouse with vendor API loads.",
    "Warehouse with modeled intelligence marts, lineage, and governance."),
  mk(29, "governance", "Integration with CRM, CX, and product data?",
    "Listening data lives in isolation.",
    "Occasional manual joins for a specific project.",
    "Scheduled joins with CRM for core audiences.",
    "Unified customer graph joining listening, CRM, CX, and product telemetry."),
  mk(30, "governance", "Executive engagement with intelligence?",
    "Leadership sees headline numbers only.",
    "Monthly static report to leadership.",
    "Live dashboard reviewed weekly with strategy.",
    "Intelligence briefings shape quarterly strategy and board decisions."),
];

export function getMaturityLevel(total: number): { level: number; name: string; summary: string } {
  const bands: Array<{ min: number; max: number; name: string; summary: string }> = [
    { min: 30, max: 41, name: "Nascent", summary: "Foundational gaps across listening coverage, NLP pipelines, and reporting. Strategic intervention is required before intelligence can inform decisions." },
    { min: 42, max: 53, name: "Exploratory", summary: "Early awareness without structure. Data is being collected but the architecture to extract decision-grade signal is missing." },
    { min: 54, max: 65, name: "Emerging", summary: "Pockets of capability. Sentiment and competitive mapping debt still constrain executive confidence in the intelligence layer." },
    { min: 66, max: 77, name: "Developing", summary: "Credible progress on multiple pillars. Data quality and predictive modeling remain the primary friction points." },
    { min: 78, max: 89, name: "Operational", summary: "The intelligence operation is running but not yet a strategic asset. Signal-to-decision latency remains the bottleneck." },
    { min: 90, max: 101, name: "Integrated", summary: "Listening is integrated with CRM and strategy. Competitive and sentiment views are repeatable across core markets." },
    { min: 102, max: 113, name: "Advanced", summary: "Advanced intelligence architecture in place. Focus shifts to predictive forecasting, causal inference, and executive automation." },
    { min: 114, max: 125, name: "Optimized", summary: "Highly optimized stack. Listening, NLP, and forecasting operate as a single compounding intelligence engine." },
    { min: 126, max: 137, name: "Transformative", summary: "Market intelligence is a transformative decision lever. Conversational analytics and competitor mapping are at elite tier." },
    { min: 138, max: 150, name: "Category-Defining", summary: "Category-defining market intelligence. The company sets the benchmark competitors chase." },
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
  listening: {
    initiative: "Global Listening Architecture & Multi-Channel Data Acquisition",
    baseHours: 460,
    tiers: {
      foundational: [
        "Boolean Query Matrix & Keyword Governance",
        "Multi-Channel Data Ingest Pipeline",
        "Spam & Bot Filtering Layer",
        "Source Licensing & Firehose Configuration",
      ],
      intermediate: [
        "Multilingual Coverage Framework",
        "Dark Social & Closed Community Ingest",
        "Review & Forum Integration Layer",
        "Historical Archive & Warehouse Replay",
      ],
      advanced: [
        "Unified Mention Deduplication Engine",
        "Geo-Aware Coverage Orchestrator",
        "Automated Source Discovery Pipeline",
      ],
      edge: [
        "Autonomous Query Expansion Engine",
        "Real-Time Cross-Source Stream Fusion",
      ],
    },
  },
  analytics: {
    initiative: "Conversational Analytics, NLP & Sentiment Intelligence",
    baseHours: 480,
    tiers: {
      foundational: [
        "Category-Tuned Sentiment Model",
        "Named Entity Recognition Pipeline",
        "Topic Modeling Framework",
        "Lexicon & Annotation Standard",
      ],
      intermediate: [
        "Intent Classification Engine",
        "Aspect-Based Sentiment Decomposition",
        "Multilingual NLP Stack",
        "Emoji, Slang & Sarcasm Handling Layer",
      ],
      advanced: [
        "Image, Video & Audio Analysis Service",
        "Knowledge-Graph Entity Linking",
        "Continuous Model Evaluation Harness",
      ],
      edge: [
        "Human-In-The-Loop Annotation Studio",
        "Domain-Adapted Foundation Model Pipeline",
      ],
    },
  },
  competitive: {
    initiative: "Competitor Intelligence, Share of Voice & Market Mapping",
    baseHours: 420,
    tiers: {
      foundational: [
        "Share of Voice Measurement Framework",
        "Competitor Set Definition & Governance",
        "Perception Attribute Tracker",
        "Competitor Campaign Detection Feed",
      ],
      intermediate: [
        "Share of Sentiment Decomposition",
        "Creator & Influencer Intelligence Graph",
        "Pricing & Messaging Shift Monitor",
        "Whitespace & Demand Gap Analyzer",
      ],
      advanced: [
        "Dynamic Competitor Graph Engine",
        "Attribute-Level Perception Mapping Service",
        "Earned vs Paid Attribution Layer",
      ],
      edge: [
        "Adjacent-Category Signal Scout",
        "Real-Time Competitive Threat Scoring",
      ],
    },
  },
  forecasting: {
    initiative: "Predictive Forecasting, Signal Detection & Real-Time Alerting",
    baseHours: 440,
    tiers: {
      foundational: [
        "Real-Time Alerting & Routing Framework",
        "Volume & Sentiment Anomaly Detection",
        "Crisis Response Escalation Ladder",
        "Trend Surfacing Dashboard",
      ],
      intermediate: [
        "Early-Signal Velocity Model",
        "Time-Series Forecasting Service",
        "Predictive Crisis Risk Scoring",
        "Automated Executive Brief Generator",
      ],
      advanced: [
        "Multivariate Anomaly Detection Engine",
        "Scenario Planning & Probabilistic Forecasts",
        "Network Spread & Diffusion Modeling",
      ],
      edge: [
        "Causal Inference Platform for Signals",
        "Autonomous Intelligence Copilot",
      ],
    },
  },
  governance: {
    initiative: "Intelligence Governance, Data Quality & Executive Reporting",
    baseHours: 400,
    tiers: {
      foundational: [
        "Cloud Intelligence Data Warehouse",
        "Unified Executive Dashboard",
        "Versioned Taxonomy & Tag Standard",
        "Data Quality & Lineage Layer",
      ],
      intermediate: [
        "CRM & CX Data Integration",
        "Board-Ready Reporting Cadence",
        "Bot & Spam QA Pipeline",
        "Intelligence Access & Role Model",
      ],
      advanced: [
        "Unified Customer & Audience Graph",
        "Automated Governance & Change Control",
        "Intelligence Consumption Telemetry",
      ],
      edge: [
        "Natural-Language Warehouse Copilot",
        "Decision-Attribution Feedback Loop",
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
