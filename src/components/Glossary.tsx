import { useEffect, useState } from "react";
import { ArrowLeft, BookOpen } from "lucide-react";
import { GLOSSARY, type GlossaryTier } from "../data/glossary";
import { PILLARS } from "../data/questions";
import { BrandText } from "./BrandText";

const TIER_ORDER: GlossaryTier[] = ["foundational", "intermediate", "advanced", "edge"];
const TIER_LABEL: Record<GlossaryTier, string> = {
  foundational: "Foundational",
  intermediate: "Intermediate",
  advanced: "Advanced",
  edge: "Edge / Frontier",
};

type Props = {
  initialSlug?: string;
  onBack: () => void;
};

export default function Glossary({ initialSlug, onBack }: Props) {
  const [highlighted, setHighlighted] = useState<string | null>(null);

  useEffect(() => {
    const hash = (initialSlug || window.location.hash.replace(/^#/, "")).trim();
    if (!hash) return;
    const target = document.getElementById(hash);
    if (!target) return;
    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
      setHighlighted(hash);
      const timeout = setTimeout(() => setHighlighted(null), 2200);
      return () => clearTimeout(timeout);
    });
  }, [initialSlug]);

  const grouped = PILLARS.map((p) => ({
    pillar: p,
    entries: GLOSSARY.filter((g) => g.pillarId === p.id),
  }));

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 border-b border-slate-900/80 bg-[#050608]/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-4 py-2 text-[12px] font-medium tracking-wide text-slate-300 transition hover:border-[#49D27C]/40 hover:text-[#49D27C]"
          >
            <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-0.5" />
            Back to Dashboard
          </button>
          <div className="flex items-center gap-2 text-[11px] tracking-[0.28em] text-[#49D27C]">
            <BookOpen className="h-4 w-4" />
            EXECUTIVE GLOSSARY
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 pb-32 pt-16">
        <div className="border-b border-slate-900 pb-10">
          <div className="text-[11px] tracking-[0.3em] text-slate-500">REFERENCE INDEX</div>
          <h1 className="mt-3 font-display text-3xl font-normal leading-tight tracking-[0.06em] text-clip md:text-4xl">
            The Market Intelligence Lexicon
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-slate-400">
            A definitive reference for every component referenced in your Implementation
            Blueprint. Each definition explains what the asset is and, more importantly, why
            it matters to decision-grade intelligence.
          </p>
        </div>

        <div className="mt-14 space-y-20">
          {grouped.map(({ pillar, entries }) => (
            <section key={pillar.id}>
              <div className="flex items-baseline justify-between border-b border-slate-900 pb-4">
                <div>
                  <div className="text-[11px] tracking-[0.28em] text-[#49D27C]">
                    PILLAR · {pillar.short.toUpperCase()}
                  </div>
                  <h2 className="mt-2 font-display text-xl font-normal tracking-[0.06em] text-text-ui">{pillar.name}</h2>
                </div>
                <div className="text-[11px] tracking-widest text-slate-500">
                  {entries.length} ASSETS
                </div>
              </div>

              <div className="mt-10 space-y-12">
                {TIER_ORDER.map((tier) => {
                  const tierEntries = entries.filter((e) => e.tier === tier);
                  if (!tierEntries.length) return null;
                  return (
                    <div key={tier}>
                      <div className="mb-4 flex items-center gap-3">
                        <span className="text-[10px] font-semibold tracking-[0.32em] text-slate-400">
                          {TIER_LABEL[tier].toUpperCase()}
                        </span>
                        <span className="h-px flex-1 bg-slate-900" />
                        <span className="text-[10px] tracking-widest text-slate-600">
                          {tierEntries.length}
                        </span>
                      </div>
                      <div className="space-y-5">
                        {tierEntries.map((entry) => {
                          const isActive = highlighted === entry.slug;
                          return (
                            <article
                              key={entry.slug}
                              id={entry.slug}
                              className={[
                                "scroll-mt-28 rounded-2xl border p-6 transition-all duration-700",
                                isActive
                                  ? "border-[#49D27C]/60 bg-[#49D27C]/[0.08] shadow-[0_0_0_1px_rgba(73,210,124,0.35),0_20px_60px_-30px_rgba(73,210,124,0.6)]"
                                  : "border-slate-800/80 bg-slate-950/50 hover:border-slate-700",
                              ].join(" ")}
                            >
                              <div className="flex items-start justify-between gap-4">
                                <h3 className="text-[17px] font-semibold leading-snug text-gold-gradient">
                                  <BrandText text={entry.label} iconClassName="h-4 w-4 text-amber-200/80" />
                                </h3>
                                <span className="shrink-0 rounded-full border border-slate-800 bg-slate-900/80 px-2.5 py-1 font-mono text-[10px] tracking-widest text-slate-500">
                                  #{entry.slug}
                                </span>
                              </div>
                              <p className="mt-3 text-[14px] leading-relaxed text-slate-300">
                                <BrandText text={entry.summary} iconClassName="h-4 w-4 text-slate-200/80" />
                              </p>
                            </article>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-24 flex justify-center">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-5 py-2.5 text-[12px] font-medium tracking-wide text-slate-300 transition hover:border-[#49D27C]/40 hover:text-[#49D27C]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </button>
        </div>
      </main>
    </div>
  );
}
