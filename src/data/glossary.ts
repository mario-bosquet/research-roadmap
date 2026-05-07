export type GlossaryTier = "foundational" | "intermediate" | "advanced" | "edge";

export type GlossaryEntry = {
  slug: string;
  label: string;
  pillarId: "listening" | "analytics" | "competitive" | "forecasting" | "governance";
  tier: GlossaryTier;
  summary: string;
};

export const GLOSSARY: GlossaryEntry[] = [
  {
    slug: "boolean-query-matrix",
    label: "Boolean Query Matrix & Keyword Governance",
    pillarId: "listening",
    tier: "foundational",
    summary:
      "A versioned library of boolean queries, operators, and negative keywords that defines what the organization listens to. It is the precondition for repeatable, auditable intelligence across teams and markets.",
  },
  {
    slug: "multi-channel-ingest",
    label: "Multi-Channel Data Ingest Pipeline",
    pillarId: "listening",
    tier: "foundational",
    summary:
      "A unified pipeline that acquires mentions from social, news, podcasts, forums, and reviews via API. It replaces fragmented tool-by-tool collection with a single auditable data stream.",
  },
  {
    slug: "spam-bot-filtering",
    label: "Spam & Bot Filtering Layer",
    pillarId: "listening",
    tier: "foundational",
    summary:
      "A filtering stage that removes spam, amplification networks, and low-quality content before analysis. It prevents inflated volume metrics from distorting every downstream insight.",
  },
  {
    slug: "source-licensing",
    label: "Source Licensing & Firehose Configuration",
    pillarId: "listening",
    tier: "foundational",
    summary:
      "Licensed firehose access to major platforms such as X, Reddit, and TikTok. It is the only legitimate route to complete data at enterprise volume and is a prerequisite for defensible SOV measurement.",
  },
  {
    slug: "multilingual-coverage",
    label: "Multilingual Coverage Framework",
    pillarId: "listening",
    tier: "intermediate",
    summary:
      "Native-language capture and processing across the markets where the business competes. It removes the translation loss that quietly corrupts sentiment and intent in non-English markets.",
  },
  {
    slug: "dark-social-ingest",
    label: "Dark Social & Closed Community Ingest",
    pillarId: "listening",
    tier: "intermediate",
    summary:
      "Governed ingestion from closed communities, Discord servers, and private forums where early signal forms. It surfaces conversations that never reach public social and arrive too late via traditional tools.",
  },
  {
    slug: "review-forum-integration",
    label: "Review & Forum Integration Layer",
    pillarId: "listening",
    tier: "intermediate",
    summary:
      "Structured capture of review sites, specialist forums, and Q&A platforms. It is where purchase intent and post-purchase sentiment live at highest density.",
  },
  {
    slug: "historical-archive-replay",
    label: "Historical Archive & Warehouse Replay",
    pillarId: "listening",
    tier: "intermediate",
    summary:
      "A warehouse-backed archive that preserves raw mentions and supports retroactive re-analysis. It lets the team apply new models to historical data without re-collecting.",
  },
  {
    slug: "dedup-engine",
    label: "Unified Mention Deduplication Engine",
    pillarId: "listening",
    tier: "advanced",
    summary:
      "A pipeline that collapses duplicate mentions across sources, retweets, and cross-posts into a canonical record. It prevents double-counting that inflates reach and SOV.",
  },
  {
    slug: "geo-coverage-orchestrator",
    label: "Geo-Aware Coverage Orchestrator",
    pillarId: "listening",
    tier: "advanced",
    summary:
      "Coordinates listening configurations per market, with region-specific sources, lexicons, and compliance controls. It makes global intelligence operable without losing local nuance.",
  },
  {
    slug: "source-discovery-pipeline",
    label: "Automated Source Discovery Pipeline",
    pillarId: "listening",
    tier: "advanced",
    summary:
      "An automated pipeline that discovers and vets new sources where category conversation is migrating. It keeps coverage current as audiences shift platforms.",
  },
  {
    slug: "query-expansion-engine",
    label: "Autonomous Query Expansion Engine",
    pillarId: "listening",
    tier: "edge",
    summary:
      "An engine that proposes query refinements based on emerging terms, entities, and slang. It turns the query library into a living asset that evolves with the conversation.",
  },
  {
    slug: "stream-fusion",
    label: "Real-Time Cross-Source Stream Fusion",
    pillarId: "listening",
    tier: "edge",
    summary:
      "A streaming layer that fuses mentions across sources into a unified real-time feed. It is the substrate for signal detection when latency matters.",
  },

  {
    slug: "category-sentiment-model",
    label: "Category-Tuned Sentiment Model",
    pillarId: "analytics",
    tier: "foundational",
    summary:
      "A sentiment classifier fine-tuned on the company's category corpus rather than a generic vendor default. It materially improves precision on the language that actually matters to the brand.",
  },
  {
    slug: "ner-pipeline",
    label: "Named Entity Recognition Pipeline",
    pillarId: "analytics",
    tier: "foundational",
    summary:
      "An NER pipeline that extracts people, brands, products, and locations from every mention. It is the raw material for entity-level perception and competitive mapping.",
  },
  {
    slug: "topic-modeling",
    label: "Topic Modeling Framework",
    pillarId: "analytics",
    tier: "foundational",
    summary:
      "A framework that clusters conversations into evolving topics without relying on predefined categories. It surfaces themes the team did not know to look for.",
  },
  {
    slug: "lexicon-standard",
    label: "Lexicon & Annotation Standard",
    pillarId: "analytics",
    tier: "foundational",
    summary:
      "A documented lexicon and annotation standard shared across analysts, linguists, and model trainers. It ensures every downstream classifier is trained against a coherent ground truth.",
  },
  {
    slug: "intent-classification",
    label: "Intent Classification Engine",
    pillarId: "analytics",
    tier: "intermediate",
    summary:
      "A transformer-based engine that maps mentions to commercial intent stages such as awareness, consideration, or advocacy. It turns raw conversation into pipeline-grade signal.",
  },
  {
    slug: "aspect-sentiment",
    label: "Aspect-Based Sentiment Decomposition",
    pillarId: "analytics",
    tier: "intermediate",
    summary:
      "Sentiment scored per attribute rather than per post, so a single review can be positive on price and negative on service. It is the resolution required for product and CX decisions.",
  },
  {
    slug: "multilingual-nlp",
    label: "Multilingual NLP Stack",
    pillarId: "analytics",
    tier: "intermediate",
    summary:
      "Native-language models for every core market rather than translate-then-analyze shortcuts. It preserves nuance, idiom, and sentiment that translation silently destroys.",
  },
  {
    slug: "emoji-slang-layer",
    label: "Emoji, Slang & Sarcasm Handling Layer",
    pillarId: "analytics",
    tier: "intermediate",
    summary:
      "A specialized layer that interprets emoji, slang, and sarcasm as first-class signals rather than noise. It is often the difference between a meaningful sentiment score and a misleading one.",
  },
  {
    slug: "multimodal-analysis",
    label: "Image, Video & Audio Analysis Service",
    pillarId: "analytics",
    tier: "advanced",
    summary:
      "Multimodal analysis that detects logos, products, and sentiment in images, video, and audio. It captures the conversation that happens beyond text.",
  },
  {
    slug: "entity-linking",
    label: "Knowledge-Graph Entity Linking",
    pillarId: "analytics",
    tier: "advanced",
    summary:
      "A linking layer that disambiguates entities against a controlled knowledge graph. It prevents the common failure where different spellings or contexts fragment a single brand into many.",
  },
  {
    slug: "model-eval-harness",
    label: "Continuous Model Evaluation Harness",
    pillarId: "analytics",
    tier: "advanced",
    summary:
      "A harness that tracks precision, recall, and drift across every classifier week over week. It turns NLP quality from a faith-based claim into an engineering KPI.",
  },
  {
    slug: "annotation-studio",
    label: "Human-In-The-Loop Annotation Studio",
    pillarId: "analytics",
    tier: "edge",
    summary:
      "A studio where analysts label edge cases that are routed back into training. It closes the loop between the organization's domain expertise and its model quality.",
  },
  {
    slug: "domain-foundation-model",
    label: "Domain-Adapted Foundation Model Pipeline",
    pillarId: "analytics",
    tier: "edge",
    summary:
      "A pipeline that adapts foundation models to the organization's corpus and category. It unlocks a capability ceiling that generic vendor models cannot reach.",
  },

  {
    slug: "sov-framework",
    label: "Share of Voice Measurement Framework",
    pillarId: "competitive",
    tier: "foundational",
    summary:
      "A methodology for calculating SOV across a governed competitor set, with consistent source weighting. It replaces vanity mention counts with a defensible competitive KPI.",
  },
  {
    slug: "competitor-set",
    label: "Competitor Set Definition & Governance",
    pillarId: "competitive",
    tier: "foundational",
    summary:
      "A governed list of competitors, adjacent entrants, and benchmarks reviewed on a cadence. It prevents competitive reporting from quietly drifting out of date with the market.",
  },
  {
    slug: "perception-tracker",
    label: "Perception Attribute Tracker",
    pillarId: "competitive",
    tier: "foundational",
    summary:
      "Ongoing measurement of perception on a defined attribute set — quality, price, service, trust. It is the longitudinal view that makes brand-health deltas actionable.",
  },
  {
    slug: "competitor-campaign-detection",
    label: "Competitor Campaign Detection Feed",
    pillarId: "competitive",
    tier: "foundational",
    summary:
      "An automated feed of competitor launches, creative drops, and campaign activations. It removes the lag between a competitor move and the strategy team's awareness of it.",
  },
  {
    slug: "share-of-sentiment",
    label: "Share of Sentiment Decomposition",
    pillarId: "competitive",
    tier: "intermediate",
    summary:
      "SOV weighted by sentiment rather than raw volume, so a loud negative moment is not counted as a win. It is the metric that honest brands use.",
  },
  {
    slug: "creator-graph",
    label: "Creator & Influencer Intelligence Graph",
    pillarId: "competitive",
    tier: "intermediate",
    summary:
      "A graph of the creators, affinities, and reach supporting each competitor. It exposes the earned ecosystem that paid reporting misses entirely.",
  },
  {
    slug: "pricing-messaging-monitor",
    label: "Pricing & Messaging Shift Monitor",
    pillarId: "competitive",
    tier: "intermediate",
    summary:
      "Near-real-time monitoring of competitor pricing pages, copy, and positioning. It surfaces the strategic changes that never hit press releases.",
  },
  {
    slug: "whitespace-analyzer",
    label: "Whitespace & Demand Gap Analyzer",
    pillarId: "competitive",
    tier: "intermediate",
    summary:
      "An analyzer that surfaces conversation clusters where demand is forming but no competitor owns the narrative. It is how intelligence becomes a strategy input rather than a scoreboard.",
  },
  {
    slug: "dynamic-competitor-graph",
    label: "Dynamic Competitor Graph Engine",
    pillarId: "competitive",
    tier: "advanced",
    summary:
      "A graph engine that expands and prunes the competitor set automatically based on market signals. It keeps competitive reporting accurate even as categories blur.",
  },
  {
    slug: "perception-mapping",
    label: "Attribute-Level Perception Mapping Service",
    pillarId: "competitive",
    tier: "advanced",
    summary:
      "Continuous perception maps refreshed weekly across the full competitive set. It is the decision-grade view a CMO can bring into a board meeting.",
  },
  {
    slug: "earned-paid-attribution",
    label: "Earned vs Paid Attribution Layer",
    pillarId: "competitive",
    tier: "advanced",
    summary:
      "A layer that separates earned conversation from paid amplification in competitor reporting. It prevents bought reach from masquerading as genuine brand pull.",
  },
  {
    slug: "adjacent-category-scout",
    label: "Adjacent-Category Signal Scout",
    pillarId: "competitive",
    tier: "edge",
    summary:
      "A scout that monitors adjacent categories where future competitors emerge. It gives leadership the early warning that a new entrant is forming outside the current set.",
  },
  {
    slug: "threat-scoring",
    label: "Real-Time Competitive Threat Scoring",
    pillarId: "competitive",
    tier: "edge",
    summary:
      "A scoring model that ranks competitive moves by severity, reach, and strategic relevance. It collapses a firehose of competitor activity into a prioritized briefing.",
  },

  {
    slug: "alerting-framework",
    label: "Real-Time Alerting & Routing Framework",
    pillarId: "forecasting",
    tier: "foundational",
    summary:
      "Tiered alerts routed to the right owner by topic, severity, and channel. It turns passive dashboards into an operating system that moves when something matters.",
  },
  {
    slug: "anomaly-detection-base",
    label: "Volume & Sentiment Anomaly Detection",
    pillarId: "forecasting",
    tier: "foundational",
    summary:
      "Statistical detection of unusual volume and sentiment movements above baseline. It surfaces the early signal that a spike is forming before it trends.",
  },
  {
    slug: "crisis-escalation",
    label: "Crisis Response Escalation Ladder",
    pillarId: "forecasting",
    tier: "foundational",
    summary:
      "A documented escalation ladder with owners, response windows, and approved language. It ensures that reputational moments are met with action rather than deliberation.",
  },
  {
    slug: "trend-dashboard",
    label: "Trend Surfacing Dashboard",
    pillarId: "forecasting",
    tier: "foundational",
    summary:
      "A live dashboard that surfaces emerging trends with context and recommended owners. It replaces static monthly readouts with always-on situational awareness.",
  },
  {
    slug: "velocity-model",
    label: "Early-Signal Velocity Model",
    pillarId: "forecasting",
    tier: "intermediate",
    summary:
      "A model that combines velocity, novelty, and network spread to identify trends before they are mainstream. It is the head-start that lets a brand participate in a moment rather than chase it.",
  },
  {
    slug: "time-series-forecasting",
    label: "Time-Series Forecasting Service",
    pillarId: "forecasting",
    tier: "intermediate",
    summary:
      "Probabilistic forecasts on volume, sentiment, and SOV over rolling horizons. It gives planners defensible numbers rather than linear extrapolations.",
  },
  {
    slug: "crisis-risk-scoring",
    label: "Predictive Crisis Risk Scoring",
    pillarId: "forecasting",
    tier: "intermediate",
    summary:
      "A scoring model that flags emerging reputation risk while it is still localized. It compresses response windows from hours to minutes.",
  },
  {
    slug: "executive-brief-generator",
    label: "Automated Executive Brief Generator",
    pillarId: "forecasting",
    tier: "intermediate",
    summary:
      "An automated brief that synthesizes signal, sentiment, and SOV deltas for leadership. It closes the gap between analyst output and executive consumption.",
  },
  {
    slug: "multivariate-anomaly",
    label: "Multivariate Anomaly Detection Engine",
    pillarId: "forecasting",
    tier: "advanced",
    summary:
      "Joint anomaly detection across volume, sentiment, entities, and geography. It catches the second-order patterns that univariate detectors miss.",
  },
  {
    slug: "scenario-planning",
    label: "Scenario Planning & Probabilistic Forecasts",
    pillarId: "forecasting",
    tier: "advanced",
    summary:
      "Scenario-based forecasts with confidence bands for strategic planning. It turns intelligence into a decision input across marketing, product, and finance.",
  },
  {
    slug: "diffusion-modeling",
    label: "Network Spread & Diffusion Modeling",
    pillarId: "forecasting",
    tier: "advanced",
    summary:
      "Models how ideas and content propagate across communities and influencer tiers. It reveals whether a spike is organic diffusion or manufactured amplification.",
  },
  {
    slug: "causal-inference-signals",
    label: "Causal Inference Platform for Signals",
    pillarId: "forecasting",
    tier: "edge",
    summary:
      "A platform for running causal experiments on earned media and brand action. It quantifies what conversation actually moved business outcomes rather than correlated with them.",
  },
  {
    slug: "intelligence-copilot",
    label: "Autonomous Intelligence Copilot",
    pillarId: "forecasting",
    tier: "edge",
    summary:
      "A conversational copilot that proactively surfaces findings and drafts briefings for owners. It collapses the distance between signal and action across the organization.",
  },

  {
    slug: "intelligence-warehouse",
    label: "Cloud Intelligence Data Warehouse",
    pillarId: "governance",
    tier: "foundational",
    summary:
      "A centralized warehouse where mentions, sentiment, CRM, and CX data converge. It is the infrastructure that makes every downstream dashboard and model possible.",
  },
  {
    slug: "executive-dashboard",
    label: "Unified Executive Dashboard",
    pillarId: "governance",
    tier: "foundational",
    summary:
      "A single dashboard that reconciles SOV, sentiment, and trend signal across the business. It ends the 'whose number is right?' arguments and becomes the source of truth.",
  },
  {
    slug: "versioned-taxonomy",
    label: "Versioned Taxonomy & Tag Standard",
    pillarId: "governance",
    tier: "foundational",
    summary:
      "A change-controlled taxonomy with review workflow and release notes. It prevents the silent drift that corrupts longitudinal reporting.",
  },
  {
    slug: "data-quality-lineage",
    label: "Data Quality & Lineage Layer",
    pillarId: "governance",
    tier: "foundational",
    summary:
      "End-to-end lineage from raw ingest to executive metric with quality checks at each stage. It is what makes an executive number defensible under scrutiny.",
  },
  {
    slug: "crm-cx-integration",
    label: "CRM & CX Data Integration",
    pillarId: "governance",
    tier: "intermediate",
    summary:
      "Joined listening, CRM, and CX data against a shared customer identity. It turns external signal into internally actionable context for sales and service.",
  },
  {
    slug: "board-reporting-cadence",
    label: "Board-Ready Reporting Cadence",
    pillarId: "governance",
    tier: "intermediate",
    summary:
      "A consistent executive cadence that synthesizes SOV, sentiment, forecasts, and competitive deltas. It closes the credibility gap between marketing and the board.",
  },
  {
    slug: "bot-qa-pipeline",
    label: "Bot & Spam QA Pipeline",
    pillarId: "governance",
    tier: "intermediate",
    summary:
      "A multi-stage pipeline that flags bot and coordinated inauthentic activity before it enters reporting. It protects every downstream metric from manipulation.",
  },
  {
    slug: "intelligence-access-model",
    label: "Intelligence Access & Role Model",
    pillarId: "governance",
    tier: "intermediate",
    summary:
      "A role-based access model for dashboards, raw data, and analyst tools. It keeps sensitive signal compliant while maximizing legitimate access.",
  },
  {
    slug: "customer-audience-graph",
    label: "Unified Customer & Audience Graph",
    pillarId: "governance",
    tier: "advanced",
    summary:
      "A unified graph joining listening, CRM, loyalty, and product telemetry to a single customer. It is the substrate for audience intelligence beyond surface-level segments.",
  },
  {
    slug: "governance-change-control",
    label: "Automated Governance & Change Control",
    pillarId: "governance",
    tier: "advanced",
    summary:
      "Automated policy checks, approvals, and audit trails for taxonomy and model changes. It operationalizes governance without slowing the team down.",
  },
  {
    slug: "consumption-telemetry",
    label: "Intelligence Consumption Telemetry",
    pillarId: "governance",
    tier: "advanced",
    summary:
      "Telemetry on who consumes which dashboards, reports, and alerts. It lets the intelligence team invest against real impact rather than perceived importance.",
  },
  {
    slug: "warehouse-copilot",
    label: "Natural-Language Warehouse Copilot",
    pillarId: "governance",
    tier: "edge",
    summary:
      "A conversational analytics layer that lets operators query the intelligence warehouse in natural language. It collapses the distance between question and decision.",
  },
  {
    slug: "decision-attribution",
    label: "Decision-Attribution Feedback Loop",
    pillarId: "governance",
    tier: "edge",
    summary:
      "A feedback loop that ties intelligence outputs to the decisions they informed and the outcomes that followed. It is how an intelligence function evolves from cost center to profit lever.",
  },
];

const SLUG_BY_LABEL: Record<string, string> = GLOSSARY.reduce(
  (acc, e) => {
    acc[e.label] = e.slug;
    return acc;
  },
  {} as Record<string, string>
);

export function slugForResource(label: string): string {
  return (
    SLUG_BY_LABEL[label] ??
    label
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
  );
}
