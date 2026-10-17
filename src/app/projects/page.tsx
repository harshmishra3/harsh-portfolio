"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, BookOpen, Filter } from "lucide-react";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

type ProjectFilter = "all" | "product" | "client" | "automation";

const caseStudySlugs = ["apnoai", "redstone", "admoteck"];

const projects = [
  {
    slug: "apnoai",
    title: "ApnoAI",
    subtitle: "India's own AI tools & career platform",
    category: "product" as const,
    description:
      "A 7-surface product ecosystem: AI Data Studio, ATS Resume Builder, QR-verified internship engine, SEO blog, developer utilities, services commerce and an automation backbone — all self-built.",
    tech: ["Next.js", "Supabase", "Apps Script", "Render", "AI APIs"],
    metrics: [
      { value: "7", label: "surfaces" },
      { value: "10+", label: "tools" },
      { value: "100%", label: "self-built" },
    ],
    image: "/images/projects/apnoai-home.png",
    liveUrl: "https://apnoai.com",
    year: "2026",
  },
  {
    slug: "redstone",
    title: "RedStone Studio",
    subtitle: "20+ module business OS for a photography studio",
    category: "client" as const,
    description:
      "Bookings, leads, CRM, tasks, finance, analytics and QR-verified ID cards — one admin panel replacing spreadsheets and WhatsApp chaos.",
    tech: ["Next.js", "React", "Meta Lead API", "n8n"],
    metrics: [
      { value: "20+", label: "modules" },
      { value: "1", label: "source of truth" },
    ],
    image: "/images/projects/redstone-dashboard.png",
    liveUrl: "https://www.theredstonestudio.com",
    year: "2026",
  },
  {
    slug: "admoteck",
    title: "AdmoTeck",
    subtitle: "Full-service growth agency engine, Lucknow",
    category: "client" as const,
    description:
      "A conversion-built agency site: Meta Ads, Google Ads, social media, SEO and WhatsApp automation — packaged as one measurable system with a free growth-audit funnel.",
    tech: ["Next.js", "Vercel", "Meta Ads", "Google Ads", "WhatsApp API"],
    metrics: [
      { value: "34", label: "features" },
      { value: "₹3–10", label: "per ₹1 ad spend" },
    ],
    image: "/images/projects/admoteck-home.png",
    liveUrl: "https://admoteck-site.vercel.app",
    year: "2026",
  },
  {
    slug: "automation-engine",
    title: "Automation Engine",
    subtitle: "Reusable automation layer across all projects",
    category: "automation" as const,
    description:
      "Lead capture to CRM to WhatsApp auto-reply, renewal reminders, PDF certificate generation and email workflows — modular automations that plug into any client build.",
    tech: ["n8n", "Google Apps Script", "Render", "WhatsApp API"],
    metrics: [
      { value: "40+", label: "hrs/week saved" },
      { value: "5", label: "workflow types" },
    ],
    image: "/images/projects/apnoai-home.png",
    year: "2026",
  },
];

const filters: { value: ProjectFilter; label: string }[] = [
  { value: "all", label: "All work" },
  { value: "product", label: "Product" },
  { value: "client", label: "Client" },
  { value: "automation", label: "Automation" },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState<ProjectFilter>("all");

  const filtered = projects.filter(
    (p) => filter === "all" || p.category === filter
  );

  return (
    <main className="min-h-screen bg-ink text-paper">
      <Navbar />

      <section className="mx-auto w-full max-w-[1400px] px-6 pb-24 pt-32 lg:px-10 lg:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="mono-label flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            selected work
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Projects that <span className="serif-italic">compound</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-fog sm:text-lg">
            Every project below is live, measurable and built end to end —
            platform, automation, growth, measurement.
          </p>
        </motion.div>

        {/* ---- Filters ---- */}
        <div className="mt-10 flex flex-wrap items-center gap-2 sm:gap-3">
          <Filter className="hidden h-4 w-4 text-mist sm:block" />
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`rounded-full px-4 py-2 text-sm transition-colors sm:px-5 ${
                filter === f.value
                  ? "bg-paper text-ink"
                  : "border border-line text-fog hover:border-mist hover:text-paper"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* ---- Grid ---- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-10 grid gap-6 md:grid-cols-2"
          >
            {filtered.map((project, i) => (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="card card-hover group flex flex-col overflow-hidden"
              >
                <div className="relative overflow-hidden bg-raised">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="aspect-[16/9] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="mono-label">
                      {project.year} · {project.category}
                    </span>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title} live site`}
                        className="rounded-full border border-line p-2 text-fog transition-colors hover:border-mist hover:text-paper"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>

                  <h2 className="mt-5 text-2xl font-semibold tracking-tight">
                    {project.title}
                  </h2>
                  <p className="serif-italic mt-1 text-fog">
                    {project.subtitle}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-fog">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-6 border-t border-line pt-5">
                    {project.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="font-mono text-lg">{m.value}</p>
                        <p className="mono-label mt-0.5">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-fog"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex-1" />

                  {caseStudySlugs.includes(project.slug) && (
                    <Link
                      href={`/case-study/${project.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
                    >
                      <BookOpen className="h-4 w-4" />
                      Read case study
                    </Link>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      <Footer />
    </main>
  );
}