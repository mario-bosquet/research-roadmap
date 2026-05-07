export type GlossaryTier = "foundational" | "intermediate" | "advanced" | "edge";

export type GlossaryEntry = {
  slug: string;
  label: string;
  pillarId: "tracking" | "accounts" | "creative" | "scaling" | "analytics";
  tier: GlossaryTier;
  summary: string;
};

export const GLOSSARY: GlossaryEntry[] = [
  {
    slug: "server-side-tag-management",
    label: "Server-Side Tag Management Infrastructure",
    pillarId: "tracking",
    tier: "foundational",
    summary:
      "A server-side container that receives and forwards tracking events from your own domain to each ad platform. It restores data lost to ad blockers and browser privacy controls, and is the single biggest lever for tracking integrity.",
  },
  {
    slug: "conversions-api",
    label: "Conversions API Implementation",
    pillarId: "tracking",
    tier: "foundational",
    summary:
      "Server-to-server conversion events sent directly to each ad platform with user and event context. It dramatically improves signal quality, event match quality, and attributed conversion counts in a post-iOS14 world.",
  },
  {
    slug: "utm-taxonomy",
    label: "UTM Taxonomy & Governance Framework",
    pillarId: "tracking",
    tier: "foundational",
    summary:
      "A documented and enforced standard for how every campaign, ad, and channel is tagged. It is the precondition for any honest multi-channel reporting and eliminates the silent reporting errors that mislead budget decisions.",
  },
  {
    slug: "cross-domain-tracking-repair",
    label: "Cross-Domain Tracking Repair",
    pillarId: "tracking",
    tier: "foundational",
    summary:
      "Stitches user journeys across marketing sites, checkout subdomains, and third-party checkout providers. It recovers conversions that would otherwise appear as direct or unattributed traffic.",
  },
  {
    slug: "first-party-identity-graph",
    label: "First-Party Identity Graph",
    pillarId: "tracking",
    tier: "intermediate",
    summary:
      "A company-owned view of who each visitor is across devices, based on logged-in states, hashed emails, and CRM identifiers. It unlocks deterministic matching in ad platforms independent of third-party cookies.",
  },
  {
    slug: "offline-conversion-crm-sync",
    label: "Offline Conversion & CRM Sync Pipeline",
    pillarId: "tracking",
    tier: "intermediate",
    summary:
      "An automated flow that pushes qualified leads, closed-won revenue, and refunds back into ad platforms. It teaches the algorithms to optimize for real revenue outcomes rather than surface-level form fills.",
  },
  {
    slug: "enhanced-conversions",
    label: "Enhanced Conversions & Value Optimization Setup",
    pillarId: "tracking",
    tier: "intermediate",
    summary:
      "Passes hashed first-party identifiers and dynamic purchase values alongside conversion events. It materially lifts attributed conversions and is a prerequisite for value-based bidding at scale.",
  },
  {
    slug: "consent-mode-privacy",
    label: "Consent Mode & Privacy Compliance Layer",
    pillarId: "tracking",
    tier: "intermediate",
    summary:
      "A compliant mechanism for respecting user consent while preserving modeled conversions where permissible. It keeps the business legal in GDPR and CCPA regimes without gutting the measurement stack.",
  },
  {
    slug: "multi-touch-attribution-model",
    label: "Multi-Touch Attribution Model",
    pillarId: "tracking",
    tier: "advanced",
    summary:
      "Distributes credit across every touchpoint on the path to conversion using data-driven weights. It replaces last-click mythology with a defensible view of which channels are actually producing pipeline.",
  },
  {
    slug: "geo-lift-testing",
    label: "Geo-Lift & Incrementality Testing Framework",
    pillarId: "tracking",
    tier: "advanced",
    summary:
      "Controlled geographic experiments that isolate the true incremental impact of a channel or campaign. It is the only methodology that can prove paid media is driving revenue that organic would not have captured.",
  },
  {
    slug: "blended-spend-reconciliation",
    label: "Blended-Spend Reconciliation Engine",
    pillarId: "tracking",
    tier: "advanced",
    summary:
      "Reconciles platform-reported conversions against finance-grade revenue and blended MER. It collapses the gap between what each channel claims and what the business actually received.",
  },
  {
    slug: "deterministic-identity-stitching",
    label: "Deterministic Identity Stitching Across Devices",
    pillarId: "tracking",
    tier: "edge",
    summary:
      "Unifies a single customer across mobile, desktop, and logged-in sessions using first-party identifiers. It enables cross-device measurement and retargeting that probabilistic graphs cannot match.",
  },
  {
    slug: "cookieless-attribution-stack",
    label: "Cookieless-Ready Attribution Stack",
    pillarId: "tracking",
    tier: "edge",
    summary:
      "A measurement architecture that does not rely on third-party cookies or mobile identifiers. It future-proofs the business against the next wave of privacy and browser changes.",
  },

  {
    slug: "campaign-consolidation-audit",
    label: "Campaign Consolidation Audit & Rebuild",
    pillarId: "accounts",
    tier: "foundational",
    summary:
      "A systematic audit that collapses fragmented ad sets into the smallest number of signal-rich campaigns. It ends the algorithmic starvation caused by over-segmentation and is usually the fastest performance unlock.",
  },
  {
    slug: "advantage-performance-max-setup",
    label: "Advantage+ / Performance Max Structural Setup",
    pillarId: "accounts",
    tier: "foundational",
    summary:
      "Deploys Meta Advantage+ Shopping and Google Performance Max with the asset groups, audience signals, and exclusions configured for your catalog. It is where most scaled accounts now capture disproportionate efficiency.",
  },
  {
    slug: "naming-convention-taxonomy",
    label: "Naming Convention & Taxonomy Enforcement",
    pillarId: "accounts",
    tier: "foundational",
    summary:
      "A machine-readable naming standard applied across every campaign, ad set, and creative. It makes any BI tool or spreadsheet immediately comprehensible and removes the reporting noise caused by inconsistent labels.",
  },
  {
    slug: "audience-exclusion-framework",
    label: "Audience Exclusion & Suppression Framework",
    pillarId: "accounts",
    tier: "foundational",
    summary:
      "A governed set of suppression lists that keep retargeting away from existing customers and disqualified leads. It stops you from paying to reach people who will never convert and sharpens the signal for those who will.",
  },
  {
    slug: "value-based-lookalike",
    label: "Value-Based Lookalike & Seed Audience System",
    pillarId: "accounts",
    tier: "intermediate",
    summary:
      "Seed audiences weighted by customer lifetime value rather than raw conversions. It focuses the algorithm on the prospects who look like your most valuable buyers instead of your noisiest ones.",
  },
  {
    slug: "cbo-asc-migration",
    label: "CBO & ASC Migration Playbook",
    pillarId: "accounts",
    tier: "intermediate",
    summary:
      "A staged migration to campaign-budget optimization and Advantage+ Shopping Campaigns without resetting learning. It is how high-spending accounts consolidate budget without losing the trajectory they already built.",
  },
  {
    slug: "learning-phase-protection",
    label: "Learning-Phase Protection Rules",
    pillarId: "accounts",
    tier: "intermediate",
    summary:
      "A change-control protocol that prevents edits during active learning and enforces event-volume thresholds. It ends the self-inflicted performance dips caused by over-editing.",
  },
  {
    slug: "cross-channel-budget-framework",
    label: "Cross-Channel Budget Allocation Framework",
    pillarId: "accounts",
    tier: "intermediate",
    summary:
      "A decision framework that moves budget between Meta, Google, TikTok, and LinkedIn based on blended efficiency. It replaces channel-by-channel optimization with portfolio thinking.",
  },
  {
    slug: "signal-density-optimization",
    label: "Signal Density Optimization Engine",
    pillarId: "accounts",
    tier: "advanced",
    summary:
      "A process that concentrates conversions, value signals, and first-party data into the fewest auctions possible. Algorithms perform best where signal is densest, and this is how elite accounts stay ahead.",
  },
  {
    slug: "portfolio-bidding",
    label: "Portfolio Bidding Across Channels",
    pillarId: "accounts",
    tier: "advanced",
    summary:
      "Coordinates target ROAS and CAC constraints across channels so budget flows to the highest marginal return. It is the practical mechanism for scaling multi-channel media profitably.",
  },
  {
    slug: "campaign-launch-validator",
    label: "Automated Campaign Launch Validator",
    pillarId: "accounts",
    tier: "advanced",
    summary:
      "A pre-launch check that validates naming, pixel firing, tracking parameters, and budget against policy. It eliminates the 'we shipped it broken' failures that silently cost accounts a week of learning.",
  },
  {
    slug: "mer-budget-rebalancing",
    label: "Algorithmic Budget Rebalancing by MER",
    pillarId: "accounts",
    tier: "edge",
    summary:
      "Daily reallocation of spend across channels driven by real-time Marketing Efficiency Ratio rather than platform ROAS. It is how elite operators hold blended targets with precision.",
  },
  {
    slug: "unified-media-planning",
    label: "Unified Media Planning Operating Model",
    pillarId: "accounts",
    tier: "edge",
    summary:
      "A single media plan and operating cadence across paid social, paid search, and affiliate channels. It is the organizational shape that unlocks compounding efficiency instead of channel-level competition.",
  },

  {
    slug: "creative-brief-system",
    label: "Creative Brief & Performance Tagging System",
    pillarId: "creative",
    tier: "foundational",
    summary:
      "Every creative ships with a structured brief and tags for hook, angle, format, and offer. It is the substrate that turns creative output into a learning system rather than anecdote.",
  },
  {
    slug: "hook-library",
    label: "Structured Hook Library",
    pillarId: "creative",
    tier: "foundational",
    summary:
      "A living repository of hooks categorized by emotional register, audience, and proven performance. It prevents the team from rediscovering the same winners every quarter and accelerates concept velocity.",
  },
  {
    slug: "static-video-production",
    label: "Static + Video Production Workflow",
    pillarId: "creative",
    tier: "foundational",
    summary:
      "A repeatable pipeline for producing both static and video ads from the same core concepts. It prevents creative pipeline from becoming a single point of failure and keeps both format families fed.",
  },
  {
    slug: "creative-naming-versioning",
    label: "Creative Naming & Versioning Standard",
    pillarId: "creative",
    tier: "foundational",
    summary:
      "Every asset carries a deterministic name encoding concept, variant, and iteration. It makes creative reporting possible and prevents the infamous 'which version won?' confusion.",
  },
  {
    slug: "ugc-creator-network",
    label: "UGC Creator Network & Sourcing Pipeline",
    pillarId: "creative",
    tier: "intermediate",
    summary:
      "A curated roster of creators, briefs, and delivery SLAs producing authentic UGC at volume. It unlocks the format that now dominates feed while keeping cost per asset disciplined.",
  },
  {
    slug: "weekly-creative-testing",
    label: "Weekly Creative Testing Framework",
    pillarId: "creative",
    tier: "intermediate",
    summary:
      "A structured weekly ritual for launching, reading, and resolving creative tests against clear thresholds. It replaces opinion-driven launches with a rhythm the whole team can operate against.",
  },
  {
    slug: "ad-concept-matrix",
    label: "Ad Concept Matrix (Hook / Angle / Format)",
    pillarId: "creative",
    tier: "intermediate",
    summary:
      "A systematic matrix that recombines proven hooks, angles, and formats into dozens of testable variants. It turns every winner into a parent asset that seeds a new generation of tests.",
  },
  {
    slug: "winning-ad-teardown",
    label: "Winning-Ad Teardown & Iteration Process",
    pillarId: "creative",
    tier: "intermediate",
    summary:
      "A repeatable teardown ritual that extracts what made a winner work and spins up structured iterations. It is the practice that separates accounts that scale creative from those that get one-hit wonders.",
  },
  {
    slug: "creative-analytics-dashboard",
    label: "Creative Performance Analytics Dashboard",
    pillarId: "creative",
    tier: "advanced",
    summary:
      "Granular dashboards that cut performance by hook, angle, format, and creator at a glance. It is what makes data-driven creative direction possible rather than opinion-driven.",
  },
  {
    slug: "modular-creative-production",
    label: "Modular Creative Production System",
    pillarId: "creative",
    tier: "advanced",
    summary:
      "A production process where scripts, footage, and graphics are produced as components that combine into many ads. It collapses cost per variant while preserving brand consistency.",
  },
  {
    slug: "statistical-creative-testing",
    label: "Statistical Creative Testing Protocol",
    pillarId: "creative",
    tier: "advanced",
    summary:
      "A testing protocol with pre-defined sample sizes, significance thresholds, and decision rules. It eliminates the false confidence that comes from reading undercooked tests.",
  },
  {
    slug: "ai-ad-variant-studio",
    label: "AI-Assisted Ad Variant Generation Studio",
    pillarId: "creative",
    tier: "edge",
    summary:
      "A production surface that uses generative models to spin winning concepts into dozens of compliant variants. It compresses creative refresh cycles from weeks to days at enterprise scale.",
  },
  {
    slug: "creative-lp-matching",
    label: "Creative-To-Landing Page Matching Engine",
    pillarId: "creative",
    tier: "edge",
    summary:
      "An automation layer that matches each ad creative to a tailored landing experience. It captures the conversion rate lift that comes from consistency between promise and destination.",
  },

  {
    slug: "roas-cac-guardrails",
    label: "Target ROAS & CAC Guardrail Framework",
    pillarId: "scaling",
    tier: "foundational",
    summary:
      "Explicit ROAS and CAC thresholds per campaign stage, documented and operated by the team. It ends the ambiguity about what 'performing' means and is the backbone of any scaling decision.",
  },
  {
    slug: "pacing-dashboard",
    label: "Daily Pacing & Budget Governance Dashboard",
    pillarId: "scaling",
    tier: "foundational",
    summary:
      "A single view that shows where every dollar of budget is tracking against plan, by day and channel. It prevents the overspend and underspend that quietly erode margin each month.",
  },
  {
    slug: "scaling-rules-playbook",
    label: "Scaling Rules & Change Control Playbook",
    pillarId: "scaling",
    tier: "foundational",
    summary:
      "Documented rules for when, how, and by how much to scale campaigns. It replaces panic-scaling with a disciplined operating system the team can execute without a senior operator on every decision.",
  },
  {
    slug: "contribution-margin-reporting",
    label: "Contribution Margin Reporting Layer",
    pillarId: "scaling",
    tier: "foundational",
    summary:
      "Reports every campaign against per-SKU contribution margin, not just revenue. It prevents the classic error of scaling high-ROAS, low-margin lines that destroy cash.",
  },
  {
    slug: "value-based-bidding",
    label: "Value-Based Bidding Configuration",
    pillarId: "scaling",
    tier: "intermediate",
    summary:
      "Bidding strategies that optimize toward the dynamic value of each conversion rather than a static conversion count. It teaches algorithms to chase your best customers, not just the cheapest ones.",
  },
  {
    slug: "marginal-roas-modeling",
    label: "Marginal ROAS Curve Modeling",
    pillarId: "scaling",
    tier: "intermediate",
    summary:
      "A model of how ROAS changes with each incremental dollar of spend per channel. It lets leadership say with confidence where the next dollar should go and where it should not.",
  },
  {
    slug: "geo-segment-expansion",
    label: "Structured Geo & Segment Expansion Framework",
    pillarId: "scaling",
    tier: "intermediate",
    summary:
      "A repeatable framework for testing new geographies and customer segments without polluting core campaigns. It is how growth compounds beyond the original ideal customer profile.",
  },
  {
    slug: "automated-budget-rebalancing",
    label: "Automated Budget Rebalancing Rules",
    pillarId: "scaling",
    tier: "intermediate",
    summary:
      "Rule-based automations that shift budget between ad sets and campaigns against defined efficiency targets. It captures the daily swings that manual operators cannot respond to fast enough.",
  },
  {
    slug: "ltv-bidding-strategy",
    label: "LTV-Informed Bidding Strategy",
    pillarId: "scaling",
    tier: "advanced",
    summary:
      "Bid strategies informed by predicted lifetime value, not just first-purchase revenue. It is what makes aggressive first-order CAC economically rational in subscription and repeat-purchase businesses.",
  },
  {
    slug: "portfolio-scaling-engine",
    label: "Portfolio Scaling & Diminishing-Returns Engine",
    pillarId: "scaling",
    tier: "advanced",
    summary:
      "A portfolio engine that allocates spend across channels against modeled diminishing returns. It stops the overspend on saturated channels and redirects toward underexploited ones.",
  },
  {
    slug: "pacing-auto-corrector",
    label: "Real-Time Pacing Auto-Corrector",
    pillarId: "scaling",
    tier: "advanced",
    summary:
      "Automated budget nudges that keep spend on plan as performance drifts intraday. It removes the weekend and overnight leakage that plagues most accounts.",
  },
  {
    slug: "predictive-scaling-forecaster",
    label: "Predictive Scaling Forecaster",
    pillarId: "scaling",
    tier: "edge",
    summary:
      "A forecaster that projects spend, conversions, and efficiency at multiple budget scenarios. It gives leadership decision-grade clarity before committing to the next scaling step.",
  },
  {
    slug: "margin-aware-allocator",
    label: "Margin-Aware Dynamic Budget Allocator",
    pillarId: "scaling",
    tier: "edge",
    summary:
      "An allocator that moves daily spend toward the SKUs and campaigns with the highest contribution margin. It is the mechanism that turns paid media into a profit engine, not just a revenue engine.",
  },

  {
    slug: "marketing-data-warehouse",
    label: "Cloud Marketing Data Warehouse",
    pillarId: "analytics",
    tier: "foundational",
    summary:
      "A centralized warehouse where ad spend, conversions, CRM, and finance data converge. It is the infrastructure that makes every downstream dashboard and model possible.",
  },
  {
    slug: "unified-paid-media-dashboard",
    label: "Unified Paid Media Dashboard",
    pillarId: "analytics",
    tier: "foundational",
    summary:
      "A single dashboard that reconciles spend and performance across every paid channel. It ends the 'whose number is right?' arguments and becomes the team's source of truth.",
  },
  {
    slug: "mer-reporting-layer",
    label: "MER & Blended-ROAS Reporting Layer",
    pillarId: "analytics",
    tier: "foundational",
    summary:
      "Reports Marketing Efficiency Ratio and blended ROAS alongside platform figures. It prevents the false confidence that comes from siloed platform reporting and ties media back to business outcomes.",
  },
  {
    slug: "cohort-channel-report",
    label: "Cohort & Channel Performance Report",
    pillarId: "analytics",
    tier: "foundational",
    summary:
      "A cohort view of revenue, retention, and payback split by acquisition channel. It exposes which channels produce the customers that actually compound and which quietly churn.",
  },
  {
    slug: "ltv-payback-modeling",
    label: "Predicted LTV & Payback Modeling",
    pillarId: "analytics",
    tier: "intermediate",
    summary:
      "Predictive models for customer lifetime value and payback window by cohort and channel. It turns CAC decisions into long-horizon economics instead of first-order gambles.",
  },
  {
    slug: "incrementality-program",
    label: "Incrementality Testing Program",
    pillarId: "analytics",
    tier: "intermediate",
    summary:
      "A rolling program of geo, conversion, and holdout tests that measure true incremental lift. It is the discipline that separates media that drives growth from media that merely harvests existing demand.",
  },
  {
    slug: "weekly-forecasting",
    label: "Weekly Forecasting & Scenario Planning",
    pillarId: "analytics",
    tier: "intermediate",
    summary:
      "A weekly forecast that projects spend, revenue, and efficiency under defined scenarios. It gives leadership a decision rhythm far tighter than monthly retrospection.",
  },
  {
    slug: "creative-intelligence-layer",
    label: "Creative Performance Intelligence Layer",
    pillarId: "analytics",
    tier: "intermediate",
    summary:
      "An analytics layer that connects creative attributes to business-grade outcomes, not just CTR. It is how creative decisions begin to align with the P&L instead of the feed.",
  },
  {
    slug: "mmm-service",
    label: "Marketing Mix Modeling Service",
    pillarId: "analytics",
    tier: "advanced",
    summary:
      "A statistical model that decomposes revenue across paid, organic, and external factors. It survives tracking loss and gives leadership a top-down, finance-grade view of channel contribution.",
  },
  {
    slug: "executive-kpi-board-view",
    label: "Executive KPI Board-Ready View",
    pillarId: "analytics",
    tier: "advanced",
    summary:
      "A concise board-grade view of MER, CAC, LTV, payback, and forecast variance. It closes the credibility gap between marketing and finance in executive meetings.",
  },
  {
    slug: "anomaly-detection",
    label: "Automated Anomaly Detection on Spend & Performance",
    pillarId: "analytics",
    tier: "advanced",
    summary:
      "Real-time alerts that flag unusual spend, CPA, or conversion behavior before it compounds. It removes the quiet Monday-morning surprises that cost accounts their monthly target.",
  },
  {
    slug: "causal-inference-platform",
    label: "Causal Inference & Lift Measurement Platform",
    pillarId: "analytics",
    tier: "edge",
    summary:
      "A dedicated platform for running causal experiments and quantifying true channel lift at scale. It is the gold standard for organizations where media is a multi-million-dollar line item.",
  },
  {
    slug: "growth-intelligence-copilot",
    label: "Unified Growth Intelligence Copilot",
    pillarId: "analytics",
    tier: "edge",
    summary:
      "A conversational analytics layer that lets operators ask questions of the marketing warehouse in natural language. It collapses the distance between question and decision for the entire growth team.",
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
