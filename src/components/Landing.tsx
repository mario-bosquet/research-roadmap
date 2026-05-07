import { motion } from "framer-motion";
import {
  Sparkles,
  ClipboardList,
  LayoutDashboard,
  Download,
  CalendarCheck,
  Power,
} from "lucide-react";
import { SpotlightCard, SpotlightButton } from "./Spotlight";
import Footer from "./Footer";

type Props = { onStart: () => void };

export default function Landing({ onStart }: Props) {
  return (
    <div className="relative min-h-screen">
      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2.5">
          <img
            src="/NEW_horizontal.png"
            alt="Keenfunnel"
            className="h-8 w-auto"
          />
        </div>
        <div className="hidden items-center gap-6 text-xs tracking-widest text-slate-400 md:flex">
          <span>INTELLIGENCE BLUEPRINT v4.2</span>
          <span className="h-1 w-1 rounded-full bg-[#49D27C]" />
          <span>ENTERPRISE B2B</span>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-6 pt-10 pb-24 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-10"
        >
          <div className="w-full lg:w-2/3 text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/50 px-4 py-2 text-[14px] font-medium tracking-widest text-slate-300 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-[#49D27C]" />
              MARKET INTELLIGENCE &amp; SOCIAL LISTENING BLUEPRINT
            </div>

            <h1 className="mt-8 font-display text-4xl font-normal leading-[1.1] tracking-tight text-clip md:text-6xl">
              See the Market Before It Moves
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-[1.55] text-slate-300 md:text-xl">
              A 30-point strategic diagnostic spanning global listening architecture, conversational analytics,
              competitor intelligence, predictive forecasting, and executive reporting. Engineered for CMOs and
              strategy directors deploying enterprise-grade market intelligence.
            </p>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col items-center gap-5">
            <SpotlightButton
              onClick={onStart}
              className="animate-idle-halo"
              innerClassName="px-7 py-6 flex items-center justify-center"
            >
              <Power className="h-8 w-8 text-black group-hover:text-[#5BEB84] transition-colors duration-300" strokeWidth={2.5} />
            </SpotlightButton>
            <div className="text-xs tracking-widest text-slate-500">
              ~8 MINUTES · 30 QUESTIONS · CONFIDENTIAL
            </div>

            <div className="flex items-center">
              <div className="flex -space-x-3">
                {[
                  "https://i.pravatar.cc/64?img=12",
                  "https://i.pravatar.cc/64?img=32",
                  "https://i.pravatar.cc/64?img=47",
                  "https://i.pravatar.cc/64?img=68",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="h-8 w-8 rounded-full border-2 border-[#111426] object-cover"
                  />
                ))}
              </div>
              <div className="ml-3 font-sans text-sm text-text-on-dark">
                trusted by <span className="text-[#49D27C] font-medium">+600</span> enterprise strategists
              </div>
            </div>
          </div>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.7 }}
          className="mt-16"
        >
          <div className="flex items-end justify-between">
            <div>
              <div className="text-[11px] tracking-[0.22em] text-[#49D27C]">HOW IT WORKS</div>
              <h2 className="mt-2 font-display text-xl font-normal tracking-[0.06em] text-text-ui md:text-2xl">
                A four-step path from diagnostic to deployed intelligence.
              </h2>
            </div>
            <div className="hidden text-[11px] tracking-widest text-slate-500 md:block">
              END-TO-END · 4 STEPS
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-4">
            {[
              {
                step: "01",
                icon: ClipboardList,
                title: "The Diagnostic",
                body: "Complete a 30-question diagnostic across 5 core pillars of your market intelligence and social listening architecture.",
              },
              {
                step: "02",
                icon: LayoutDashboard,
                title: "The Blueprint",
                body: "Instantly unlock your intelligence maturity evaluation, engineering hour estimates, and a tailored deployment timeline.",
              },
              {
                step: "03",
                icon: Download,
                title: "Export & Share",
                body: "Download your customized blueprint as a PDF or generate a shareable link for internal CMO and strategy stakeholders.",
              },
              {
                step: "04",
                icon: CalendarCheck,
                title: "Executive Briefing",
                body: "Book a strategic session with our team. Share your PDF or link beforehand so our intelligence strategists can analyze your baseline before the call.",
              },
            ].map(({ step, icon: Icon, title, body }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + i * 0.08, duration: 0.55 }}
              >
                <SpotlightCard>
                  <div className="flex h-full flex-col p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#49D27C]/30 bg-[#49D27C]/10">
                        <Icon className="h-5 w-5 text-[#49D27C]" />
                      </div>
                      <span className="text-[10px] font-semibold tracking-[0.22em] text-slate-500">
                        STEP {step}
                      </span>
                    </div>
                    <div className="mt-5 text-base font-semibold tracking-tight text-gold-gradient">
                      {title}
                    </div>
                    <div className="mt-2 text-sm leading-relaxed text-slate-400">
                      {body}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </main>

      <Footer />
    </div>
  );
}

