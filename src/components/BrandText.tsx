import type { ReactNode } from "react";
import { Radar, Activity, Share2, Eye, Network, Waves } from "lucide-react";

type IntelKey = "sov" | "nlp" | "sentiment" | "entity" | "network" | "signal";

const INTEL_TERMS: { key: IntelKey; pattern: RegExp; label: string }[] = [
  { key: "sov", pattern: /\bshare of voice\b|\bsov\b/i, label: "Share of Voice" },
  { key: "nlp", pattern: /\bnlp\b/i, label: "NLP" },
  { key: "sentiment", pattern: /\bsentiment\b/i, label: "Sentiment" },
  { key: "entity", pattern: /\bentity\b|\bentities\b/i, label: "Entity" },
  { key: "network", pattern: /\bnetwork\b/i, label: "Network" },
  { key: "signal", pattern: /\bsignal\b|\bsignals\b/i, label: "Signal" },
];

const MATCH_RE = /\b(share of voice|sov|nlp|sentiment|entity|entities|network|signals?)\b/gi;

function IntelIcon({ term, className = "" }: { term: IntelKey; className?: string }) {
  const cls = `inline-block align-[-0.15em] ${className}`;
  switch (term) {
    case "sov":
      return <Radar className={cls} strokeWidth={1.75} />;
    case "nlp":
      return <Waves className={cls} strokeWidth={1.75} />;
    case "sentiment":
      return <Activity className={cls} strokeWidth={1.75} />;
    case "entity":
      return <Share2 className={cls} strokeWidth={1.75} />;
    case "network":
      return <Network className={cls} strokeWidth={1.75} />;
    case "signal":
      return <Eye className={cls} strokeWidth={1.75} />;
  }
}

export function BrandText({
  text,
  iconClassName = "h-4 w-4 text-white/80",
}: {
  text: string;
  iconClassName?: string;
}) {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  const re = new RegExp(MATCH_RE.source, "gi");
  let i = 0;
  while ((match = re.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const raw = match[0];
    const term = INTEL_TERMS.find((t) => t.pattern.test(raw))!;
    nodes.push(
      <span
        key={`i-${i++}-${match.index}`}
        className="inline-flex items-center gap-1.5 align-baseline"
        title={term.label}
      >
        <IntelIcon term={term.key} className={iconClassName} />
        <span>{raw}</span>
      </span>
    );
    lastIndex = match.index + raw.length;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return <>{nodes}</>;
}
