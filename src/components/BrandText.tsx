import type { ReactNode } from "react";

type BrandKey = "meta" | "google" | "tiktok" | "linkedin";

const BRAND_ORDER: { key: BrandKey; pattern: RegExp; label: string }[] = [
  { key: "google", pattern: /google ads|google/i, label: "Google" },
  { key: "meta", pattern: /meta/i, label: "Meta" },
  { key: "tiktok", pattern: /tiktok/i, label: "TikTok" },
  { key: "linkedin", pattern: /linkedin/i, label: "LinkedIn" },
];

const MATCH_RE = /\b(google ads|google|meta|tiktok|linkedin)\b/gi;

function BrandIcon({ brand, className = "" }: { brand: BrandKey; className?: string }) {
  const base = `inline-block align-[-0.15em] ${className}`;
  switch (brand) {
    case "meta":
      return (
        <svg viewBox="0 0 24 24" aria-hidden focusable="false" className={base} fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.6 2.4-7 5.4-1.4-2.4-2.6-3.6-4.4-3.6C.6 6.6 0 7.8 0 9.4c0 2 1 5.6 2.4 8.2.6 1.2 1.6 2 2.8 2 1.4 0 2.2-.6 3.8-3.6 0 0 .6-1.2 1.2-2.2.2.4.4.6.6 1 1.4 2.4 2.4 3.2 3.8 3.2 1.4 0 2.2-.6 2.8-1.8.2-.4.2-.8.2-1-.2-.2-.4 0-.8 0-.6.2-1 0-1.4-.4-.6-.6-1.2-1.6-1.8-2.8-2-3.8-3.6-6.8-4.4-8-.8-1.4-2.2-2.2-3.6-2.2-1 0-1.8.4-2.6 1.2-.6.6-1 1.4-1 2.4 0 1 .4 2 1.2 3 .6.8 1.2 1.2 1.2 1.2C4.4 9.4 4 8.8 4 8c0-.8.6-1.2 1.2-1.2 1 0 1.8.6 2.8 2.4 1 1.8 2 4.4 3 6.4-.4.8-1 1.6-1.6 2.2-.6.6-1 .8-1.6.8-1 0-1.6-.8-2.4-2.4C4.6 14.4 4 12 4 10.4c0-1 .4-1.6 1-1.6 1.2 0 2 1.4 3.2 3.6 0 0 .6-1.2.8-1.6 1.2-2.2 2.6-3.6 5-3.6 2 0 3.8 1.2 5.2 3.6 1.4 2.4 2 5 2 6.6 0 1.2-.4 1.8-1.2 1.8-.6 0-1-.4-1.6-1.2.6-.2 1-.8 1-1.6 0-1-.8-1.8-1.8-1.8-1.2 0-2 1-2 2.2 0 1.8 1.4 3.2 3.4 3.2 2.4 0 4-1.8 4-4.6 0-4-3.4-9.2-7-9.2z" />
        </svg>
      );
    case "google":
      return (
        <svg viewBox="0 0 24 24" aria-hidden focusable="false" className={base} fill="currentColor">
          <path d="M21.35 11.1H12v3.2h5.35c-.23 1.25-1.64 3.68-5.35 3.68-3.22 0-5.85-2.67-5.85-5.98s2.63-5.98 5.85-5.98c1.83 0 3.06.78 3.77 1.46l2.57-2.48C16.78 3.5 14.6 2.5 12 2.5 6.98 2.5 2.9 6.58 2.9 11.6S6.98 20.7 12 20.7c6.92 0 9.5-4.86 9.5-7.33 0-.5-.05-.88-.15-1.27z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg viewBox="0 0 24 24" aria-hidden focusable="false" className={base} fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.9 2.9 0 0 1-5.2 1.74 2.9 2.9 0 0 1 3.58-4.43V9.48a6.35 6.35 0 0 0-5.94 10.8 6.35 6.35 0 0 0 10.85-4.49V8.87a8.16 8.16 0 0 0 4.77 1.53V6.95a4.82 4.82 0 0 1-.84-.26z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" aria-hidden focusable="false" className={base} fill="currentColor">
          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.26zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
        </svg>
      );
  }
}

export function BrandText({
  text,
  iconClassName = "h-4 w-4 text-slate-200/80",
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
    const brand = BRAND_ORDER.find((b) => b.pattern.test(raw))!;
    nodes.push(
      <span
        key={`b-${i++}-${match.index}`}
        className="inline-flex items-center gap-1.5 align-baseline"
        title={brand.label}
      >
        <BrandIcon brand={brand.key} className={iconClassName} />
        <span className="sr-only">{brand.label}</span>
      </span>
    );
    lastIndex = match.index + raw.length;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return <>{nodes}</>;
}
