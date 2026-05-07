import { useState } from "react";
import { motion } from "framer-motion";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import {
  Download,
  RotateCcw,
  Clock,
  Gauge,
  Video,
  BookOpen,
  Link as LinkIcon,
  Check,
  Map,
  Layers,
  Cpu,
  ShieldCheck,
} from "lucide-react";
import { PILLARS, type PillarBlueprint, getMaturityLevel } from "../data/questions";
import { slugForResource } from "../data/glossary";
import { SpotlightButton, SpotlightCard } from "./Spotlight";
import { BrandText } from "./BrandText";
import Footer from "./Footer";

type Props = {
  total: number;
  pillarScores: Record<string, number>;
  roadmap: PillarBlueprint[];
  onRestart: () => void;
  onOpenGlossary: (slug?: string) => void;
};

export default function Dashboard({ total, pillarScores, roadmap, onRestart, onOpenGlossary }: Props) {
  const maturity = getMaturityLevel(total);
  const [copied, setCopied] = useState(false);

  const handleCopyShareLink = async () => {
    try {
      const payload = JSON.stringify({ v: 1, pillarScores });
      const encoded = btoa(unescape(encodeURIComponent(payload)));
      const shareUrl = `${window.location.origin}${window.location.pathname}?share=${encoded}`;
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error("Failed to generate share link", e);
    }
  };
  const radarData = PILLARS.map((p) => ({
    pillar: p.short,
    score: pillarScores[p.id] ?? 0,
    full: 30,
  }));

  const totalHours = roadmap.reduce((s, r) => s + r.hours, 0);

  const efficiencyPct = Math.round((total / 150) * 100);

  const timelineLabel = (() => {
    if (totalHours <= 0) return "0 Months";
    const base = totalHours / 300;
    const low = Math.max(1, Math.floor(base));
    const high = Math.max(low + 1, Math.ceil(base * 1.4));
    return `${low} - ${high} Months`;
  })();

  const phasePlan = (() => {
    const kickoff = new Date();
    const totalMonths = Math.max(1, totalHours / 160);
    const totalDays = Math.max(28, Math.round(totalMonths * 30));

    const lowestPillar = PILLARS.reduce((acc, p) => {
      const score = pillarScores[p.id] ?? 0;
      const accScore = pillarScores[acc.id] ?? 0;
      return score < accScore ? p : acc;
    }, PILLARS[0]);

    const focusRoadmap =
      roadmap.find((r) => r.pillarId === lowestPillar.id) ?? roadmap[0];
    const focusResources = focusRoadmap?.resources ?? [];
    const [primaryAsset, secondaryAsset] = focusResources;

    const deploymentAssets = (() => {
      if (primaryAsset && secondaryAsset)
        return `your custom ${primaryAsset} and ${secondaryAsset}`;
      if (primaryAsset) return `your custom ${primaryAsset}`;
      return "your prescribed core assets";
    })();

    const orchestrationAsset = focusResources[2] ?? secondaryAsset ?? primaryAsset;

    const phases = [
      {
        name: "Global Listening Architecture & Data Acquisition",
        icon: Map,
        pct: 0.25,
        description: `Stabilize the ${lowestPillar.name.toLowerCase()} layer — your lowest-scoring pillar — and lay the multi-channel ingest, keyword matrices, and source licensing primitives every later initiative compounds on.`,
      },
      {
        name: "Conversational Analytics & Sentiment Scoring",
        icon: Layers,
        pct: 0.3,
        description: `Deployment and integration of ${deploymentAssets} into the intelligence stack, wired through the NLP pipelines that turn raw conversation into decision-grade signal.`,
      },
      {
        name: "Competitor Intelligence & Market Mapping",
        icon: Cpu,
        pct: 0.25,
        description: orchestrationAsset
          ? `Stand up the competitive intelligence engine around ${orchestrationAsset}, with Share of Voice, perception mapping, and whitespace analysis feeding every strategy review.`
          : "Stand up the competitive intelligence engine with Share of Voice measurement, perception mapping, and whitespace analysis feeding every strategy review.",
      },
      {
        name: "Predictive Trend Forecasting & Signal Detection",
        icon: ShieldCheck,
        pct: 0.2,
        description:
          "Lock in real-time alerting, anomaly detection, and automated executive briefings; transfer ownership to your intelligence team with a final governance audit.",
      },
    ];
    let cursor = new Date(kickoff);
    const fmtRange = (d: Date) =>
      d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    const fmtKickoff = kickoff.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    const segments = phases.map((p) => {
      const start = new Date(cursor);
      const days = Math.max(7, Math.round(totalDays * p.pct));
      const end = new Date(start);
      end.setDate(end.getDate() + days);
      cursor = new Date(end);
      return {
        ...p,
        range: `${fmtRange(start)} - ${fmtRange(end)}`,
        durationLabel: `${days} DAYS`,
      };
    });
    return { kickoffLabel: fmtKickoff, segments };
  })();

  return (
    <div className="relative min-h-screen">
      <header className="relative z-10 border-b border-slate-900/80">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-5">
          <div className="flex items-center gap-3">
            <img src="/NEW_horizontal.png" alt="Keenfunnel" className="h-7 w-auto" />
            <span className="hidden h-4 w-px bg-slate-800 sm:block" />
            <span className="hidden text-[11px] font-semibold tracking-[0.22em] text-slate-300 sm:inline">
              INTELLIGENCE BLUEPRINT
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenGlossary()}
              className="inline-flex items-center gap-2 rounded border border-slate-800 bg-slate-950/70 px-3 py-1.5 text-[11px] tracking-widest text-slate-300 transition hover:border-[#49D27C]/40 hover:text-[#49D27C]"
            >
              <BookOpen className="h-3.5 w-3.5" /> GLOSSARY
            </button>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded border border-slate-800 bg-slate-950/70 px-3 py-1.5 text-[11px] tracking-widest text-slate-300 transition hover:border-slate-700 hover:text-white"
            >
              <Download className="h-3.5 w-3.5" /> EXPORT
            </button>
            <button
              onClick={onRestart}
              className="inline-flex items-center gap-2 rounded border border-slate-800 bg-slate-950/70 px-3 py-1.5 text-[11px] tracking-widest text-slate-300 transition hover:border-slate-700 hover:text-white"
            >
              <RotateCcw className="h-3.5 w-3.5" /> NEW DIAGNOSTIC
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-6 py-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 md:grid-cols-[1.25fr_1fr]"
        >
          <div className="rounded-2xl border border-slate-800/90 bg-slate-950/60 p-8">
            <div className="text-[11px] tracking-[0.22em] text-[#49D27C]">MATURITY ASSESSMENT</div>
            <div className="mt-4 flex items-baseline gap-4">
              <div className="text-7xl font-semibold tracking-tight text-gold-gradient">
                L{maturity.level}
              </div>
              <div className="text-2xl font-medium tracking-tight text-slate-200">{maturity.name}</div>
            </div>
            <div className="mt-1 text-sm tracking-widest text-slate-500">
              COMPOSITE SCORE {total} / 150
            </div>

            <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-slate-900">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#49D27C]/20 to-[#49D27C]"
                style={{ width: `${((total - 30) / 120) * 100}%` }}
              />
            </div>
            <div className="mt-2 flex justify-between text-[10px] tracking-widest text-slate-600">
              <span>L1</span><span>L3</span><span>L5</span><span>L7</span><span>L10</span>
            </div>

            <p className="mt-6 text-[15px] leading-relaxed text-slate-300">{maturity.summary}</p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <Stat
                icon={Clock}
                label="Total Implementation Hours"
                value={totalHours.toLocaleString()}
                sub="Vendor-agnostic build envelope"
              />
              <Stat
                icon={Gauge}
                label="Intelligence Coverage"
                value={`${efficiencyPct}%`}
                sub={
                  efficiencyPct < 60
                    ? "High intelligence debt detected"
                    : "Listening stack operating above parity"
                }
                emphasis={efficiencyPct < 60 ? "warn" : "ok"}
              />
              <Stat
                icon={Video}
                label="Projected Roadmap"
                value={timelineLabel}
                sub="Dedicated intelligence pod · 300h / month"
              />
            </div>
          </div>

          <div className="flex flex-col rounded-2xl border border-slate-800/90 bg-slate-950/60 p-6">
            <div className="text-[11px] tracking-[0.22em] text-[#49D27C]">PILLAR RADAR</div>
            <div className="mt-4 h-[560px] w-full flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData} outerRadius="85%" margin={{ top: 24, right: 48, bottom: 24, left: 48 }}>
                  <PolarGrid stroke="#1e293b" />
                  <PolarAngleAxis
                    dataKey="pillar"
                    tick={{ fill: "#cbd5e1", fontSize: 12, letterSpacing: 1 }}
                  />
                  <PolarRadiusAxis
                    angle={90}
                    domain={[0, 30]}
                    tick={{ fill: "#475569", fontSize: 10 }}
                    stroke="#1e293b"
                  />
                  <Radar
                    dataKey="full"
                    stroke="#334155"
                    strokeDasharray="3 3"
                    fill="#1e293b"
                    fillOpacity={0.15}
                  />
                  <Radar
                    dataKey="score"
                    stroke="#49D27C"
                    strokeWidth={2}
                    fill="#49D27C"
                    fillOpacity={0.3}
                    activeDot={{ fill: "#49D27C", stroke: "#49D27C" }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>

        <section className="mt-14">
          {roadmap.length === 0 ? (
            <div className="rounded-2xl border border-slate-800/90 bg-slate-950/60 p-10 text-center">
              <div className="text-xl font-semibold text-slate-100">
                Parity reached across all five pillars.
              </div>
              <p className="mt-2 text-sm text-slate-400">
                Your market intelligence operation is positioned in the elite tier. We recommend a bespoke
                engagement focused on causal inference, executive automation, and adjacent-category expansion.
              </p>
            </div>
          ) : (
            <div className="overflow-hidden rounded-2xl border border-slate-800/90 bg-slate-950/60">
              <div className="border-b border-white/10 px-8 py-6">
                <div className="text-[11px] tracking-[0.22em] text-[#49D27C]">
                  IMPLEMENTATION BLUEPRINT
                </div>
                <h2 className="mt-2 font-display text-2xl font-normal tracking-[0.06em] text-text-ui md:text-3xl">
                  Resource &amp; Effort Analysis
                </h2>
              </div>
              <div className="grid gap-4 border-b border-slate-800/80 bg-slate-900/40 px-6 py-3 text-[10px] tracking-[0.22em] text-slate-500" style={{ gridTemplateColumns: "3fr 4fr 4fr 1fr" }}>
                <div>PILLAR</div>
                <div>STRATEGIC INITIATIVE</div>
                <div>REQUIRED ASSETS / RESOURCE STACK</div>
                <div className="text-right">DURATION</div>
              </div>
              <div className="divide-y divide-slate-800/70">
                {roadmap.map((r) => (
                  <div
                    key={r.pillarId}
                    className="grid gap-4 px-6 py-5 transition hover:bg-slate-900/40"
                    style={{ gridTemplateColumns: "3fr 4fr 4fr 1fr" }}
                  >
                    <div>
                      <div className="text-sm font-semibold text-slate-100">{r.pillarName}</div>
                      <div className="mt-1 text-[11px] tracking-widest text-slate-500">
                        SCORE {r.score} / 30
                      </div>
                      <div className="mt-2 h-1 w-full rounded-full bg-slate-900">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#49D27C]/20 to-[#49D27C]"
                          style={{ width: `${(r.score / 30) * 100}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-100"><BrandText text={r.initiative} /></div>
                    </div>
                    <div>
                      <div className="flex flex-wrap gap-2">
                        {r.resources.map((res) => {
                          const slug = slugForResource(res);
                          return (
                            <button
                              key={res}
                              type="button"
                              onClick={() => onOpenGlossary(slug)}
                              className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-800/70 px-3 py-1 text-[12px] font-medium text-[#49D27C]/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition-all duration-200 hover:scale-105 hover:border-[#49D27C]/50 hover:bg-slate-700 hover:text-[#49D27C] focus:outline-none focus:ring-2 focus:ring-[#49D27C]/40"
                            >
                              <BrandText text={res} iconClassName="h-4 w-4 text-slate-200/80" />
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-semibold tracking-[0.198em] text-gold-gradient">
                        {r.hours.toLocaleString()}
                      </div>
                      <div className="mt-0.5 text-[10px] tracking-widest text-slate-500">HOURS</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between border-t border-slate-800/80 bg-slate-900/40 px-6 py-4">
                <div className="text-[11px] tracking-[0.22em] text-slate-400">
                  TOTAL IMPLEMENTATION ENVELOPE
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-semibold tracking-[0.22em] text-gold-gradient">
                    {Math.round(totalHours / 75).toLocaleString()}
                  </span>
                  <span className="text-xs tracking-[0.22em] uppercase text-slate-500">ESTIMATED NUMBER OF WEEKS</span>
                </div>
              </div>
            </div>
          )}
        </section>

        <section className="mt-16">
          <SpotlightCard>
            <div className="p-8 md:p-10">
              <div className="flex flex-col gap-2 border-b border-slate-800/70 pb-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-[11px] tracking-[0.22em] text-[#49D27C]">
                    START TODAY · IMPLEMENTATION TIMELINE
                  </div>
                  <h2 className="mt-2 font-display text-2xl font-normal tracking-[0.06em] text-text-ui md:text-3xl">
                    A phased rollout, kicking off {phasePlan.kickoffLabel}.
                  </h2>
                </div>
                <div className="text-[11px] tracking-widest text-slate-500">
                  KICKOFF · {phasePlan.kickoffLabel.toUpperCase()}
                </div>
              </div>

              <ol className="relative mt-10 space-y-10 pl-12">
                <span
                  aria-hidden
                  className="pointer-events-none absolute left-[18px] top-2 bottom-2 w-px bg-slate-800"
                />
                {phasePlan.segments.map((p, i) => (
                  <motion.li
                    key={p.name}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 * i, duration: 0.45 }}
                    className="relative"
                  >
                    <div className="absolute -left-12 top-0 flex h-9 w-9 items-center justify-center rounded-[12px] bg-gradient-to-br from-[#07A245] to-[#046A2D] shadow-[0_0_20px_-4px_rgba(73,210,124,0.6)]">
                      <p.icon className="h-4 w-4 text-[#0a0a0a]" strokeWidth={2} />
                    </div>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <div>
                        <div className="text-[10px] font-semibold tracking-[0.28em] text-slate-500">
                          PHASE {String(i + 1).padStart(2, "0")} · {p.durationLabel}
                        </div>
                        <h3 className="mt-1 font-display text-lg font-normal tracking-[0.06em] text-text-ui md:text-xl">
                          <BrandText text={p.name} iconClassName="h-5 w-5 text-slate-200/80" />
                        </h3>
                      </div>
                      <div className="bg-[linear-gradient(to_right,#FFEEB5,#FBE8AA,#FFE6BB,#D5C286,#C2B26D,#B59F45)] bg-clip-text text-sm font-semibold tracking-wide text-transparent">
                        {p.range}
                      </div>
                    </div>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-on-dark">
                      <BrandText text={p.description} iconClassName="h-4 w-4 text-slate-200/80" />
                    </p>
                  </motion.li>
                ))}
              </ol>
            </div>
          </SpotlightCard>
        </section>

        <section className="mt-16 rounded-2xl border border-slate-800/90 bg-gradient-to-br from-slate-950 to-slate-900/40 p-8 md:p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <div className="text-[11px] tracking-[0.22em] text-[#49D27C]">NEXT STEP</div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-gold-gradient md:text-3xl">
                Convert this diagnostic into a deployed intelligence system.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Our senior intelligence strategists will walk you through a confidential implementation
                sequence, vendor-agnostic stack recommendations, and a phased deployment plan.
              </p>
            </div>
            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <SpotlightButton
                as="a"
                href="https://meet.keenfunnel.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Video className="h-4 w-4" />
                VIDEO CALL
              </SpotlightButton>
              <SpotlightButton
                onClick={handleCopyShareLink}
                aria-live="polite"
                tone="sky"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" />
                    COPIED!
                  </>
                ) : (
                  <>
                    <LinkIcon className="h-4 w-4" />
                    COPY LINK
                  </>
                )}
              </SpotlightButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
  sub,
  emphasis,
}: {
  icon: typeof Clock;
  label: string;
  value: string;
  sub?: string;
  emphasis?: "warn" | "ok";
}) {
  const subColor =
    emphasis === "warn"
      ? "text-amber-300/90"
      : emphasis === "ok"
      ? "text-emerald-300/90"
      : "text-slate-500";
  return (
    <div className="rounded-lg border border-slate-800/80 bg-slate-900/40 p-4">
      <Icon className="h-4 w-4 text-[#49D27C]" />
      <div className="mt-2 text-xl font-semibold tracking-tight tracking-[0.07em] text-gold-gradient">{value}</div>
      <div className="mt-1 text-[10px] tracking-widest text-slate-400">{label}</div>
      {sub && <div className={`mt-2 text-[11px] leading-snug ${subColor}`}>{sub}</div>}
    </div>
  );
}
