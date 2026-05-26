import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PILLARS, QUESTIONS } from "../data/questions";
import { BrandText } from "./BrandText";

const ACCENT = "#93ADFF";
const ACCENT_DARK = "#778bca";

type Props = {
  onComplete: (answers: Record<number, number>) => void;
};

export default function Audit({ onComplete }: Props) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const question = QUESTIONS[index];
  const pillar = useMemo(() => PILLARS.find((p) => p.id === question.pillarId)!, [question]);
  const progress = ((index + 1) / QUESTIONS.length) * 100;
  const selected = answers[question.id];

  const choose = (score: number) => {
    const next = { ...answers, [question.id]: score };
    setAnswers(next);
    setTimeout(() => {
      if (index < QUESTIONS.length - 1) setIndex(index + 1);
      else onComplete(next);
    }, 240);
  };

  return (
    <div className="relative min-h-screen">
      <header className="relative z-10 border-b border-slate-900/80">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <img src="/Original_3D_horizontal.png" alt="Keenfunnel" className="h-7 w-auto" />
            <span className="hidden h-4 w-px bg-slate-800 sm:block" />
            <span className="hidden text-[11px] font-semibold tracking-[0.22em] text-slate-300 sm:inline">
              INTELLIGENCE DIAGNOSTIC
            </span>
          </div>
          <div className="text-[11px] tracking-widest text-slate-400">
            DIAGNOSTIC PROGRESS: {String(index + 1).padStart(2, "0")} / {QUESTIONS.length}
          </div>
        </div>
        <div className="h-[2px] w-full bg-slate-900">
          <motion.div
            className="h-full"
            style={{ backgroundImage: `linear-gradient(to right, ${ACCENT}33, ${ACCENT})` }}
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 140, damping: 22 }}
          />
        </div>
      </header>

      <main className="relative z-10 mx-auto flex max-w-3xl flex-col px-6 py-14 md:py-20">
        {/* Question header: no separator line, topic text with new gradient */}
        <div className="mb-6 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.22em]">
          <span style={{ backgroundImage: `linear-gradient(to right, ${ACCENT}, ${ACCENT_DARK})`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
            Pillar {PILLARS.findIndex((p) => p.id === pillar.id) + 1}
          </span>
          <span
            style={{ backgroundImage: `linear-gradient(to right, #DCC8F8, #FCFCBF, #FFD4F7, #C8DDFF, #B2E0FF, #9ABDFF, #93ADFF)`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}
          >
            {pillar.short}
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={question.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28 }}
          >
            <div className="text-xs tracking-[0.22em] text-slate-500">
              QUESTION {String(question.id).padStart(2, "0")}
            </div>
            <h2 className="mt-3 font-display text-lg font-normal leading-snug tracking-[0.06em] text-text-ui md:text-xl">
              <BrandText text={question.text} iconClassName="h-5 w-5 text-slate-200/80" />
            </h2>

            <div className="mt-8 space-y-3.5">
              {question.options.map((opt) => {
                const isSelected = selected === opt.score;
                return (
                  <button
                    key={opt.label}
                    onClick={() => choose(opt.score)}
                    className={`group flex w-full items-start gap-4 rounded-lg border px-6 py-5 text-left transition-all duration-300 hover:scale-[1.02] ${
                      isSelected
                        ? "border-[#93ADFF]/60 bg-[#93ADFF]/10 shadow-[0_0_0_1px_rgba(147,173,255,0.5)]"
                        : "border-slate-800/90 bg-slate-950/60 hover:border-[#93ADFF]/40 hover:bg-slate-900/80 hover:shadow-[0_0_0_1px_rgba(147,173,255,0.2)]"
                    }`}
                  >
                    <div
                      className={`mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded border text-[11px] font-semibold tracking-wider transition ${
                        isSelected
                          ? "border-[#93ADFF] text-[#0a0c18]"
                          : "border-slate-700 text-slate-400 group-hover:border-slate-500 group-hover:text-slate-200"
                      }`}
                      style={isSelected ? { backgroundImage: `linear-gradient(to right, ${ACCENT}, ${ACCENT_DARK})` } : {}}
                    >
                      {opt.label}
                    </div>
                    <div className="text-[18px] leading-relaxed text-slate-200">
                      <BrandText text={opt.text} iconClassName="h-5 w-5 text-slate-200/80" />
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 flex items-center justify-between">
          <button
            disabled={index === 0}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            className="inline-flex items-center gap-2 text-xs tracking-widest text-slate-400 transition hover:text-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> PREVIOUS
          </button>
          <div className="flex items-center gap-1.5">
            {PILLARS.map((p) => {
              const done = QUESTIONS.filter((q) => q.pillarId === p.id).every((q) => answers[q.id]);
              const active = pillar.id === p.id;
              return (
                <span
                  key={p.id}
                  className="h-1.5 w-6 rounded-full transition"
                  style={
                    active
                      ? { backgroundImage: `linear-gradient(to right, ${ACCENT}, ${ACCENT_DARK})` }
                      : done
                      ? { backgroundColor: `${ACCENT}66` }
                      : { backgroundColor: "#1e293b" }
                  }
                />
              );
            })}
          </div>
          <button
            disabled={!selected || index === QUESTIONS.length - 1}
            onClick={() => setIndex((i) => Math.min(QUESTIONS.length - 1, i + 1))}
            className="inline-flex items-center gap-2 text-xs tracking-widest text-slate-400 transition hover:text-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
          >
            NEXT <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </main>
    </div>
  );
}
