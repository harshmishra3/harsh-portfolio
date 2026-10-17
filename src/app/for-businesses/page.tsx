"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  GraduationCap,
  Hotel,
  Stethoscope,
  Wrench,
} from "lucide-react";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

const industries = [
  {
    icon: Stethoscope,
    title: "Hospitals & Clinics",
    pain: "Patient records on paper, appointment no-shows, manual follow-ups.",
    solution: [
      "Patient CRM with visit history & prescriptions",
      "Automated appointment reminders (WhatsApp / SMS)",
      "Post-treatment follow-up sequences",
      "Google review requests after every visit",
    ],
    metrics: [
      { value: "60%", label: "fewer no-shows" },
      { value: "3x", label: "google reviews" },
    ],
  },
  {
    icon: GraduationCap,
    title: "Schools & Coaching",
    pain: "Fee collection chaos, parent communication gaps, no admission lead tracking.",
    solution: [
      "Student database + fee tracking + instalments",
      "Parent WhatsApp updates (attendance, results)",
      "Admission lead capture → CRM → follow-up",
      "Automated report card generation",
    ],
    metrics: [
      { value: "40%", label: "faster fees" },
      { value: "100%", label: "parent reach" },
    ],
  },
  {
    icon: Hotel,
    title: "Hotels & Restaurants",
    pain: "Bookings scattered across calls and WhatsApp, no repeat-guest system.",
    solution: [
      "Unified booking calendar + guest CRM",
      "Post-stay feedback + review requests",
      "Loyalty & festival-wish automation",
      "Staff task assignment & tracking",
    ],
    metrics: [
      { value: "2x", label: "repeat bookings" },
      { value: "50%", label: "less manual work" },
    ],
  },
  {
    icon: Wrench,
    title: "Service Businesses (RO, AC, AMC)",
    pain: "Missed AMC renewals, idle technicians, no B2B pipeline.",
    solution: [
      "AMC renewal automation (D-15 reminders)",
      "Technician dispatch + job tracking",
      "B2B quotation generator + site visits",
      "Post-service Google review engine",
    ],
    metrics: [
      { value: "2x", label: "amc renewals" },
      { value: "48h", label: "site rescue" },
    ],
  },
  {
    icon: Building2,
    title: "Startups & SMBs",
    pain: "Leads lost in WhatsApp, no CRM, founder doing everything manually.",
    solution: [
      "Lead capture → CRM → auto-follow-up",
      "Sales pipeline + quotation system",
      "Team task management",
      "Owner analytics dashboard",
    ],
    metrics: [
      { value: "3x", label: "lead conversion" },
      { value: "40+", label: "hrs/week saved" },
    ],
  },
];

export default function ForBusinessesPage() {
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
            for businesses
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Your industry, your <span className="serif-italic">system</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-fog sm:text-lg">
            Every business below gets the same 10-system approach: leads,
            CRM, automations and analytics — built in weeks, not quarters.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <motion.article
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="card card-hover p-6 sm:p-7"
            >
              <span className="inline-flex rounded-xl border border-line p-3">
                <industry.icon className="h-6 w-6" />
              </span>

              <h2 className="mt-6 text-2xl font-semibold tracking-tight">
                {industry.title}
              </h2>

              <p className="mono-label mb-2 mt-5">the pain</p>
              <p className="text-sm text-fog">{industry.pain}</p>

              <p className="mono-label mb-3 mt-6">the system</p>
              <ul className="space-y-2">
                {industry.solution.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-fog">
                    <span className="mt-0.5 text-accent-soft">→</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex gap-6 border-t border-line pt-5">
                {industry.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="font-mono text-lg">{m.value}</p>
                    <p className="mono-label mt-0.5">{m.label}</p>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: industries.length * 0.08 }}
            className="flex flex-col justify-between rounded-[1.25rem] border border-[#26262b] bg-[#0a0a0b] p-6 text-[#fafafa] sm:p-7"
          >
            <div>
              <span className="mono-label">your industry not listed?</span>
              <h3 className="serif-italic mt-5 text-2xl leading-snug">
                Same 10-system approach, any vertical.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#a1a1aa]">
                Leads, CRM, automations, analytics — one system. Live in
                weeks, not quarters.
              </p>
            </div>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#fafafa] px-5 py-2.5 text-sm font-medium text-[#0a0a0b] transition-opacity hover:opacity-80"
            >
              Start with a free demo call
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.article>
        </div>
      </section>

      <Footer />
    </main>
  );
}