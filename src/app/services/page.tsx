"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Code2,
  Megaphone,
  Search,
  ShieldCheck,
  Target,
  Workflow,
} from "lucide-react";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

const process = [
  { step: "01", title: "Consultation", text: "15-min demo call: goals, gaps aur exact quote — usi call pe, likhit mein." },
  { step: "02", title: "Build & automate", text: "Website + CRM + automations. Weekly updates, milestone-wise delivery." },
  { step: "03", title: "Launch & scale", text: "Deploy, test, train your team. Ads + SEO switch on." },
  { step: "04", title: "Measure & optimize", text: "Monthly report: leads, conversion, revenue. System har mahine tez." },
];

const services = [
  {
    icon: Workflow,
    title: "n8n Automation",
    price: "₹15,000",
    tagline: "Save 40+ hours/week with smart workflows.",
    deliverables: ["Lead → CRM → WhatsApp auto-flow", "Email sequences & reminders", "CRM sync across tools"],
    timeline: "5–7 days",
  },
  {
    icon: Bot,
    title: "AI Agents",
    price: "₹25,000",
    tagline: "Intelligent bots working 24/7 for your business.",
    deliverables: ["24/7 website & WhatsApp support", "Smart lead qualification", "Task & booking automation"],
    timeline: "1–2 weeks",
  },
  {
    icon: Code2,
    title: "Web Development",
    price: "₹10,000",
    tagline: "Next.js websites built for speed and SEO.",
    deliverables: ["Next.js / React build", "Mobile-first + SSL", "Search Console + sitemap"],
    timeline: "48h – 1 week",
  },
  {
    icon: Search,
    title: "SEO & Marketing",
    price: "₹12,000",
    tagline: "Dominate Google rankings and get more leads.",
    deliverables: ["Technical + on-page SEO", "Local SEO / Google Business", "Content & rank tracking"],
    timeline: "ongoing",
  },
  {
    icon: Megaphone,
    title: "Performance Ads",
    price: "₹20,000",
    tagline: "Google & Meta ads that actually convert.",
    deliverables: ["Google Search + Meta campaigns", "Landing pages & pixels", "Weekly A/B creative testing"],
    timeline: "setup 3–5 days",
  },
  {
    icon: Target,
    title: "Lead Generation",
    price: "₹18,000",
    tagline: "Qualified leads on a complete autopilot system.",
    deliverables: ["Funnel + landing pages", "Forms → CRM routing", "Conversion optimization"],
    timeline: "1 week",
  },
];

const tiers = [
  {
    name: "Starter",
    price: "₹10,000 – ₹25,000",
    tagline: "For small businesses",
    includes: ["Basic website (3 pages)", "Mobile responsive", "Basic SEO setup", "1 month support"],
    featured: false,
  },
  {
    name: "Professional",
    price: "₹25,000 – ₹50,000",
    tagline: "Most popular choice",
    includes: ["Advanced website (5–7 pages)", "AI chat integration", "Full SEO optimization", "3 months support"],
    featured: true,
  },
  {
    name: "Business",
    price: "₹50,000 – ₹1,00,000",
    tagline: "Complete automation",
    includes: ["Custom website + CRM", "AI agents + n8n setup", "WhatsApp integration", "6 months support"],
    featured: false,
  },
];

const guarantees = [
  { title: "Transparent pricing", text: "Fixed quote before we start. No hidden costs, no surprise invoices." },
  { title: "On-time delivery", text: "Clear milestones and weekly updates. Ship when we say we ship." },
  { title: "Secure & confidential", text: "Your data, code and ideas stay private. NDA on request." },
  { title: "Real human support", text: "Direct WhatsApp access to the engineer building your project." },
  { title: "Post-launch care", text: "Fixes, updates and improvements included in every plan." },
  { title: "Quality guarantee", text: "Every delivery passes build → test → review before it reaches you." },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-ink text-paper">
      <Navbar />

      <section className="mx-auto w-full max-w-[1400px] px-6 pb-24 pt-36 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="mono-label flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            services & pricing
          </span>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Everything your business needs to{" "}
            <span className="serif-italic">run itself</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-fog">
            Fixed quotes, written scope, weekly updates. Features add up,
            price adjusts — sab kuch likhit mein, pehle din se.
          </p>
        </motion.div>

        {/* ---- Process ---- */}
        <div className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {process.map((item) => (
            <article key={item.step} className="card p-7">
              <span className="font-mono text-sm text-mist">{item.step}</span>
              <h2 className="mt-5 text-xl font-semibold tracking-tight">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-fog">
                {item.text}
              </p>
            </article>
          ))}
        </div>

        {/* ---- Services ---- */}
        <div className="mt-24">
          <span className="mono-label">what i build</span>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="card card-hover p-7">
                <div className="flex items-start justify-between">
                  <span className="rounded-xl border border-line p-2.5">
                    <service.icon className="h-5 w-5" />
                  </span>
                  <span className="mono-label">from {service.price}</span>
                </div>
                <h2 className="mt-6 text-xl font-semibold tracking-tight">
                  {service.title}
                </h2>
                <p className="serif-italic mt-1 text-fog">{service.tagline}</p>
                <ul className="mt-5 space-y-2">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex gap-3 text-sm text-fog">
                      <span className="mt-0.5 text-accent-soft">→</span>
                      {d}
                    </li>
                  ))}
                </ul>
                <p className="mono-label mt-6 border-t border-line pt-4">
                  timeline: {service.timeline}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* ---- Tiers ---- */}
        <div className="mt-24">
          <span className="mono-label">engagement tiers</span>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {tiers.map((tier) => (
              <article
                key={tier.name}
                className={`flex flex-col p-8 ${
                  tier.featured
                    ? "rounded-[1.25rem] border border-[#26262b] bg-[#0a0a0b] text-[#fafafa]"
                    : "card card-hover"
                }`}
              >
                <div className="flex items-baseline justify-between">
                  <h2 className="text-lg font-semibold tracking-tight">
                    {tier.name}
                  </h2>
                  {tier.featured && (
                    <span className="mono-label text-[#8b7cff]">popular</span>
                  )}
                </div>
                <p className="mt-3 font-mono text-2xl">{tier.price}</p>
                <p
                  className={`mono-label mt-2 ${
                    tier.featured ? "text-[#8a8a93]" : ""
                  }`}
                >
                  {tier.tagline}
                </p>
                <ul
                  className={`mt-6 space-y-3 text-sm ${
                    tier.featured ? "text-[#a1a1aa]" : "text-fog"
                  }`}
                >
                  {tier.includes.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        className={
                          tier.featured ? "text-[#8b7cff]" : "text-accent-soft"
                        }
                      >
                        →
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        {/* ---- Guarantees ---- */}
        <div className="mt-24">
          <span className="mono-label">built on trust, not promises</span>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {guarantees.map((g) => (
              <article key={g.title} className="card p-7">
                <ShieldCheck className="h-5 w-5 text-accent-soft" />
                <h2 className="mt-5 text-lg font-semibold tracking-tight">
                  {g.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-fog">
                  {g.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* ---- CTA ---- */}
        <div className="mt-24 flex flex-col items-start justify-between gap-8 rounded-[1.25rem] border border-[#26262b] bg-[#0a0a0b] p-10 text-[#fafafa] md:flex-row md:items-center">
          <div>
            <h2 className="serif-italic text-3xl leading-snug sm:text-4xl">
              Great businesses aren&apos;t built on busywork.
            </h2>
            <p className="mt-3 text-sm text-[#a1a1aa]">
              Let automation handle the routine — you handle the growth.
            </p>
          </div>
          <a
            href="https://wa.me/919161372549"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#fafafa] px-6 py-3 text-sm font-medium text-[#0a0a0b] transition-opacity hover:opacity-80"
          >
            Book a free 15-min demo
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}