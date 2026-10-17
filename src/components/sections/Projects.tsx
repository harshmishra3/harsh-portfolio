"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/Section";
import { statusLabel } from "@/lib/utils";
import type { Project } from "@/types";

const projects: Project[] = [
  {
    slug: "apnoai",
    title: "ApnoAI",
    subtitle: "India's own AI tools & career platform",
    description:
      "A complete product ecosystem: AI Data Studio (chat with your CSV), ATS Resume Builder with live PDF export, QR-verified internship certificates, a 12+ guide SEO blog engine, developer utilities and a priced services arm — all self-built.",
    status: "live",
    tech: ["Next.js", "Supabase", "Apps Script", "Render", "AI APIs", "GA4 / GSC"],
    features: [
      "Data Studio: CSV/Excel chat with health score, outliers, correlations",
      "Resume Builder: ATS templates, live preview, one-click PDF",
      "Internship engine: Google sign-in → mentor review → QR certs",
      "Blog + SEO engine: 4 categories, 12+ guides, GSC loop",
    ],
    metrics: [
      { value: "7", label: "product surfaces" },
      { value: "10+", label: "browser tools" },
      { value: "100%", label: "self-built stack" },
    ],
    liveUrl: "https://apnoai.com",
    image: "/images/projects/apnoai-home.png",
    span: "wide",
  },
  {
    slug: "redstone",
    title: "RedStone Studio",
    subtitle: "20+ module business OS for a photography studio",
    description:
      "Bookings, leads, CRM, tasks, finance, analytics and QR-verified ID cards — one admin panel replacing spreadsheets and WhatsApp chaos.",
    status: "production",
    tech: ["Next.js", "React", "Meta Lead API", "n8n"],
    features: [
      "Lead → booking → payment pipeline",
      "Team tasks & QR ID cards",
      "Owner analytics dashboard",
    ],
    metrics: [
      { value: "20+", label: "modules" },
      { value: "1", label: "source of truth" },
    ],
    liveUrl: "https://www.theredstonestudio.com",
    image: "/images/projects/redstone-dashboard.png",
    span: "normal",
  },
  {
    slug: "admoteck",
    title: "AdmoTeck",
    subtitle: "Full-service growth agency engine, Lucknow",
    description:
      "A conversion-built agency site and offer system: Meta Ads, Google Ads, social media management, SEO + meta tags and WhatsApp automation — packaged as one measurable system, fronted by a free 30-point growth-audit funnel.",
    status: "live",
    tech: ["Next.js", "Vercel", "Meta Ads", "Google Ads", "WhatsApp API", "SEO"],
    features: [
      "Free 30-point growth audit lead funnel",
      "Live campaign dashboard UI (leads, ROAS, cost/lead)",
      "34-feature service matrix with WhatsApp CTAs",
      "Local proof cards: Page-1 Google + weekly lead ticks",
    ],
    metrics: [
      { value: "34", label: "features shipped" },
      { value: "₹3–10", label: "return per ₹1 ad spend" },
      { value: "1", label: "WhatsApp group ops" },
    ],
    liveUrl: "https://admoteck-site.vercel.app",
    image: "/images/projects/admoteck-home.png",
    span: "wide",
  },
];

const statusDot: Record<Project["status"], string> = {
  live: "bg-emerald-400",
  production: "bg-accent-soft",
  "in-progress": "bg-amber-400",
};

function ProjectCard({ project }: { project: Project }) {
  const wide = project.span === "wide";

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`card card-hover group relative flex flex-col overflow-hidden p-7 lg:p-9 ${
        wide ? "lg:col-span-2" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 font-mono text-xs text-mist">
          <span
            className={`h-1.5 w-1.5 rounded-full ${statusDot[project.status]}`}
          />
          {statusLabel[project.status]}
        </span>
        <span className="mono-label">{project.slug}</span>
      </div>

      <div className="mt-6 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-3xl font-semibold tracking-tight">
            {project.title}
          </h3>
          <p className="serif-italic mt-1 text-lg text-fog">
            {project.subtitle}
          </p>
        </div>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-line p-2.5 text-fog transition-colors hover:border-mist hover:text-paper"
          >
            <ArrowUpRight className="h-4 w-4" />
          </a>
        )}
      </div>

      <p className="mt-5 text-sm leading-relaxed text-fog">
        {project.description}
      </p>

      <div className="mt-7 flex flex-wrap gap-8 border-t border-line pt-6">
        {project.metrics.map((metric) => (
          <div key={metric.label}>
            <p className="font-mono text-xl text-paper">{metric.value}</p>
            <p className="mono-label mt-1">{metric.label}</p>
          </div>
        ))}
      </div>

      <ul className={`mt-6 grid gap-3 ${wide ? "sm:grid-cols-2" : ""}`}>
        {project.features.map((feature) => (
          <li
            key={feature}
            className="flex gap-3 text-sm leading-relaxed text-fog"
          >
            <span className="mt-0.5 text-accent-soft">→</span>
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-fog"
          >
            {tool}
          </span>
        ))}
      </div>

      <div className="relative mt-8 overflow-hidden rounded-xl border border-line bg-raised">
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="aspect-[16/9] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="bg-grid flex aspect-[16/9] w-full flex-col items-center justify-center gap-2">
            <span className="font-mono text-xs text-mist">
              {project.image}
            </span>
            <span className="mono-label">ui case study ships soon</span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="border-t border-line">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-24 lg:px-10">
        <SectionHeader
          label="selected work"
          title={
            <>
              Proof, not <span className="serif-italic">promises</span>.
            </>
          }
          description="Three real systems — one product ecosystem, two client businesses — each built end to end: platform, automation, growth, measurement."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}

          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between rounded-[1.25rem] border border-[#26262b] bg-[#0a0a0b] p-7 text-[#fafafa]"
          >
            <div>
              <span className="mono-label">next slot — q4 2026</span>
              <h3 className="serif-italic mt-6 text-3xl leading-snug">
                Your business could run like this.
              </h3>
              <ul className="mt-7 space-y-3 text-sm leading-relaxed text-[#a1a1aa]">
                {[
                  "Leads → CRM → WhatsApp in seconds",
                  "AMC / renewal revenue on autopilot",
                  "Owner dashboard: revenue & productivity",
                  "48-hour website rescue + local SEO",
                ].map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="mt-0.5 text-[#8b7cff]">→</span>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="https://wa.me/919161372549"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#fafafa] px-5 py-2.5 text-sm font-medium text-[#0a0a0b] transition-opacity hover:opacity-80"
            >
              Start with a free demo call
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.article>
        </div>
      </div>
    </section>
  );
}