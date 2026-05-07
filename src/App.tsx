import { useMemo, useState } from "react";
import Landing from "./components/Landing";
import Audit from "./components/Audit";
import Dashboard from "./components/Dashboard";
import Glossary from "./components/Glossary";
import FloatingTranslateWidget from "./components/FloatingTranslateWidget";
import { PILLARS, QUESTIONS, buildRoadmap } from "./data/questions";

type Stage = "landing" | "audit" | "dashboard" | "glossary";
type SharedPayload = { pillarScores: Record<string, number> };

function decodeSharedPayload(): SharedPayload | null {
  if (typeof window === "undefined") return null;
  try {
    const param = new URLSearchParams(window.location.search).get("share");
    if (!param) return null;
    const json = decodeURIComponent(escape(atob(param)));
    const parsed = JSON.parse(json);
    if (!parsed || typeof parsed.pillarScores !== "object" || parsed.pillarScores === null) {
      return null;
    }
    const cleaned: Record<string, number> = {};
    for (const p of PILLARS) {
      const v = parsed.pillarScores[p.id];
      cleaned[p.id] = typeof v === "number" && Number.isFinite(v) ? v : 0;
    }
    return { pillarScores: cleaned };
  } catch (e) {
    console.warn("Invalid shared diagnostic payload", e);
    return null;
  }
}

export default function App() {
  const [shared] = useState<SharedPayload | null>(() => decodeSharedPayload());
  const [stage, setStage] = useState<Stage>(() => (shared ? "dashboard" : "landing"));
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [glossarySlug, setGlossarySlug] = useState<string | undefined>(undefined);

  const openGlossary = (slug?: string) => {
    setGlossarySlug(slug);
    if (typeof window !== "undefined") {
      const url = `${window.location.pathname}${slug ? `#${slug}` : ""}`;
      window.history.pushState({}, "", url);
      window.scrollTo({ top: 0, behavior: "auto" });
    }
    setStage("glossary");
  };

  const closeGlossary = () => {
    if (typeof window !== "undefined") {
      window.history.pushState({}, "", window.location.pathname);
    }
    setStage("dashboard");
  };

  const totals = useMemo(() => {
    if (shared) {
      const total = Object.values(shared.pillarScores).reduce((a, b) => a + b, 0);
      return { total, pillarScores: shared.pillarScores };
    }
    const pillarScores: Record<string, number> = {};
    PILLARS.forEach((p) => (pillarScores[p.id] = 0));
    let total = 0;
    for (const q of QUESTIONS) {
      const v = answers[q.id] ?? 0;
      pillarScores[q.pillarId] += v;
      total += v;
    }
    return { total, pillarScores };
  }, [answers, shared]);

  const roadmap = useMemo(() => buildRoadmap(totals.pillarScores), [totals.pillarScores]);

  const restart = () => {
    setAnswers({});
    setStage("landing");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050608] text-slate-100">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(73,210,124,0.18),transparent_60%)]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(73,210,124,0.12),transparent_65%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />
      </div>

      <div className="relative z-10">
        {stage === "landing" && <Landing onStart={() => setStage("audit")} />}
        {stage === "audit" && (
          <Audit
            onComplete={(a) => {
              setAnswers(a);
              setStage("dashboard");
            }}
          />
        )}
        {stage === "dashboard" && (
          <Dashboard
            total={totals.total}
            pillarScores={totals.pillarScores}
            roadmap={roadmap}
            onRestart={restart}
            onOpenGlossary={openGlossary}
          />
        )}
        {stage === "glossary" && (
          <Glossary initialSlug={glossarySlug} onBack={closeGlossary} />
        )}
      </div>

      <FloatingTranslateWidget />
    </div>
  );
}
