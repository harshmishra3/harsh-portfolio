"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const EMAIL = "harshmishra2907@gmail.com";
const WHATSAPP = "https://wa.me/919161372549";

const terminalLines = [
  { prompt: true, text: "$ deploy --project admoteck-growth-engine" },
  { prompt: false, text: "✓ website live on vercel — 48h turnaround" },
  { prompt: false, text: "✓ crm: 3 new leads captured → scored → routed" },
  { prompt: false, text: "✓ whatsapp: auto-replies + follow-ups scheduled" },
  { prompt: false, text: "✓ amc: 2 renewal reminders queued (D-15)" },
  { prompt: false, text: "▸ owner dashboard: revenue forecast +₹1.2L/qtr" },
];

const stack = [
  "Next.js",
  "TypeScript",
  "React",
  "Supabase",
  "Python",
  "SQL",
  "n8n",
  "Meta Ads",
  "Google Ads",
  "SEO",
  "Power BI",
  "Vercel",
  "Render",
  "AI APIs",
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative mx-auto w-full max-w-[1400px] px-6 pb-24 pt-32 lg:px-10 lg:pt-36">
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        {/* ---- Left: Pitch ---- */}
        <div>
          <motion.div {...fadeUp} className="mb-8 flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/profile.jpg"
              alt="Harsh Mishra"
              className="h-14 w-14 rounded-full border border-line object-cover"
            />
            <div>
              <p className="font-semibold tracking-tight">Harsh Mishra</p>
              <p className="mono-label mt-0.5">
                product engineer · (remote)
              </p>
            </div>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ delay: 0.08 }}
            className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          >
            I build{" "}
            <span className="text-gradient">AI-powered</span> business{" "}
            <span className="serif-italic">systems</span>, end to end.
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ delay: 0.16 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-fog sm:text-lg"
          >
            Platforms that run. Automations that sell. Dashboards that decide.
            From <span className="text-paper">ApnoAI</span> to client CRMs — I
            ship the whole stack: build → automate → grow → measure.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-80"
            >
              View selected work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-mist hover:bg-surface"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp: +91 91613 72549
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="text-sm text-fog underline-offset-4 transition-colors hover:text-paper hover:underline"
            >
              {EMAIL}
            </a>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line pt-6 text-xs text-fog"
          >
            <span className="mono-label">trusted by</span>
            <span>RedStone Studio</span>
            <span className="text-line">·</span>
            <span>AdmoTeck</span>
            <span className="text-line">·</span>
            <span>ApnoAI</span>
          </motion.div>
        </div>

        {/* ---- Right: Terminal card ---- */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="overflow-hidden rounded-[1.25rem] border border-[#26262b] bg-[#0a0a0b]"
        >
          <div className="flex items-center gap-2 border-b border-[#26262b] px-5 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#26262b]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#26262b]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#26262b]" />
            <span className="mono-label ml-3">harsh@studio — deploy.log</span>
          </div>
          <div className="space-y-2 px-5 py-5 font-mono text-[13px] leading-6">
            {terminalLines.map((line, i) => (
              <p
                key={i}
                className={line.prompt ? "text-[#fafafa]" : "text-[#a1a1aa]"}
              >
                {line.text.startsWith("▸") ? (
                  <span className="text-[#8b7cff]">{line.text}</span>
                ) : (
                  line.text
                )}
              </p>
            ))}
            <p className="text-[#fafafa]">
              $ <span className="animate-blink">▍</span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* ---- Tech marquee ---- */}
      <div className="mask-fade-x mt-16 overflow-hidden border-y border-line py-4">
        <div className="flex w-max animate-marquee gap-10">
          {[...stack, ...stack].map((tech, i) => (
            <span key={i} className="mono-label whitespace-nowrap">
              {tech} <span className="ml-10 text-line">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}