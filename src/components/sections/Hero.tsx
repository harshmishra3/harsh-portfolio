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

const metrics = [
  { value: "3", label: "platforms shipped" },
  { value: "20+", label: "admin modules built" },
  { value: "6", label: "service lines live" },
  { value: "40+", label: "hrs/week saved per client" },
];

const stack = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind",
  "Supabase",
  "Node.js",
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
    <section className="relative mx-auto w-full max-w-[1400px] px-6 pb-24 pt-36 lg:px-10">
      <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        {/* ---- Left: Pitch ---- */}
        <div>
          <motion.p
            {...fadeUp}
            className="mono-label mb-6 flex items-center gap-2"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            available for q4 2026 projects — remote (ist)
          </motion.p>

          <motion.h1
            {...fadeUp}
            transition={{ delay: 0.08 }}
            className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            I build{" "}
            <span className="text-gradient">AI-powered</span> business{" "}
            <span className="serif-italic">systems</span>, end to end.
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ delay: 0.16 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-fog"
          >
            Platforms that run. Automations that sell. Dashboards that decide.
            From <span className="text-paper">ApnoAI</span> to client CRMs — I
            ship the whole stack: build → automate → grow → measure.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.24 }}
            className="mt-9 flex flex-wrap items-center gap-4"
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
              Book a demo call
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="text-sm text-fog underline-offset-4 transition-colors hover:text-paper hover:underline"
            >
              {EMAIL}
            </a>
          </motion.div>
        </div>

        {/* ---- Right: Terminal card (DARK — signature contrast) ---- */}
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
              <p key={i} className={line.prompt ? "text-[#fafafa]" : "text-[#a1a1aa]"}>
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

      {/* ---- Metrics strip ---- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="mt-24 grid grid-cols-2 border-y border-line md:grid-cols-4"
      >
        {metrics.map((m, i) => (
          <div
            key={m.label}
            className={`px-6 py-7 ${i !== 0 ? "border-l border-line max-md:[&:nth-child(3)]:border-l-0" : ""}`}
          >
            <p className="text-3xl font-semibold tracking-tight">{m.value}</p>
            <p className="mono-label mt-2">{m.label}</p>
          </div>
        ))}
      </motion.div>

      {/* ---- Tech marquee ---- */}
      <div className="mask-fade-x overflow-hidden border-b border-line py-4">
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