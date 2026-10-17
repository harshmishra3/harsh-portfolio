"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

const facts = [
  { label: "Location", value: "Gorakhpur, India" },
  { label: "Availability", value: "Remote (IST)" },
  { label: "Education", value: "BCA — AI & Data, 7.9 CGPA" },
  { label: "Languages", value: "Hindi, English" },
];

const principles = [
  {
    number: "01",
    title: "Ship end-to-end",
    text: "From design to deployment — no half handoffs. Platform, automation, growth and measurement by one engineer.",
  },
  {
    number: "02",
    title: "Automate the routine",
    text: "Anything that repeats goes to a machine: follow-ups, reminders, PDFs, emails. Humans only make decisions.",
  },
  {
    number: "03",
    title: "Measure everything",
    text: "Every lead, renewal and rupee is tracked. GA4, Search Console, Power BI — numbers do not lie.",
  },
  {
    number: "04",
    title: "Write it down",
    text: "Scope, pricing and timelines in writing from day one. A WhatsApp summary is the contract. That is why clients return.",
  },
];

const toolbox = [
  { group: "Build", tools: ["Next.js", "TypeScript", "React", "Tailwind", "Supabase", "REST APIs", "Vercel", "Render"] },
  { group: "Automate", tools: ["n8n", "Google Apps Script", "WhatsApp API", "AI APIs", "Auto PDF generation"] },
  { group: "Grow", tools: ["On-page SEO", "Meta Ads", "Google Ads", "Content strategy", "Local SEO / GBP"] },
  { group: "Measure", tools: ["GA4", "Search Console", "Python", "SQL", "Power BI", "Excel dashboards"] },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-ink text-paper">
      <Navbar />

      <section className="mx-auto w-full max-w-[1400px] px-6 pb-24 pt-32 lg:px-10 lg:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="mono-label flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            about
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            One engineer, one{" "}
            <span className="serif-italic">compounding</span> loop.
          </h1>
        </motion.div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <div className="aspect-square overflow-hidden rounded-2xl border border-line bg-raised">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/profile.jpg"
                alt="Harsh Mishra"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-6 space-y-3 text-sm">
              {facts.map((fact, i) => (
                <div
                  key={fact.label}
                  className={`flex justify-between gap-4 pb-3 ${
                    i !== facts.length - 1 ? "border-b border-line" : ""
                  }`}
                >
                  <span className="text-fog">{fact.label}</span>
                  <span className="text-right">{fact.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-7 text-base leading-relaxed text-fog sm:text-lg">
            <p>
              I am a product engineer from Gorakhpur, India. I build
              AI-powered business systems end to end — platforms that run,
              automations that sell, dashboards that decide.
            </p>
            <p>
              Most developers ship a website and disappear. I build the
              platform, wire the automations behind it, then grow and measure
              it — so the system gets stronger every month.
            </p>
            <p>
              My flagship product,{" "}
              <a
                href="https://apnoai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper underline-offset-4 hover:underline"
              >
                ApnoAI
              </a>
              , is a complete ecosystem: AI Data Studio, ATS Resume Builder,
              QR-verified internship engine, SEO blog, developer utilities and
              a priced services arm — all self-built.
            </p>
            <p>
              For clients I apply the same 10-system approach: a fast Next.js
              site with local SEO, CRM with WhatsApp auto-follow-ups, AMC
              renewal engine, B2B pipeline, technician dispatch and an owner
              analytics dashboard. The goal is never a deliverable — it is a{" "}
              <span className="text-paper">system that runs itself</span>.
            </p>
            <p>
              Recruiter, founder or business owner — one message is enough. I
              usually reply within 2 hours (IST).
            </p>
          </div>
        </div>

        <div className="mt-24">
          <span className="mono-label">how i operate</span>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => (
              <article key={p.number} className="card card-hover p-6 sm:p-7">
                <span className="font-mono text-sm text-mist">{p.number}</span>
                <h2 className="mt-5 text-xl font-semibold tracking-tight">
                  {p.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-fog">
                  {p.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <span className="mono-label">toolbox</span>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {toolbox.map((group) => (
              <article key={group.group} className="card p-6 sm:p-7">
                <h2 className="serif-italic text-2xl">{group.group}</h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-fog"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}