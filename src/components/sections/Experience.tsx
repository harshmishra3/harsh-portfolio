import { SectionHeader } from "@/components/ui/Section";

const timeline = [
  {
    period: "Jul 2026 — Present",
    role: "Founder & Product Engineer",
    company: "ApnoAI",
    location: "Lucknow / Remote",
    points: [
      "Shipped AI Data Studio, ATS Resume Builder + 10 browser tools",
      "Internship engine: Render worker + Apps Script auto-PDFs & emails",
      "6 priced service lines: n8n, AI agents, web, SEO, ads, lead-gen",
      "Growth loop: on-page SEO + GA4 / Search Console + content engine",
    ],
    stack: ["Next.js", "Supabase", "Apps Script", "Render", "GA4"],
  },
  {
    period: "2026 — Present",
    role: "Freelance Product Engineer",
    company: "Independent — RedStone Studio, AdmoTeck + 1 confidential",
    location: "Gorakhpur / Lucknow",
    points: [
      "RedStone Studio: 20+ module business OS (CRM, bookings, finance, QR IDs)",
      "AdmoTeck: conversion-built growth agency site + audit funnel",
      "Confidential: water-purifier company business OS (in progress)",
    ],
    stack: ["Next.js", "Meta Lead API", "n8n", "WhatsApp API"],
  },
  {
    period: "Jul 2025 — Aug 2025",
    role: "Data Analyst Intern",
    company: "Indolike",
    location: "Remote",
    points: [
      "Sentiment analysis on Amazon reviews (Python, Pandas, NumPy)",
      "Superstore sales EDA: pivots, KPIs and trend reports in Excel",
    ],
    stack: ["Python", "Pandas", "Excel", "SQL"],
  },
  {
    period: "2023 — 2026",
    role: "BCA — AI & Data Analysis",
    company: "LNCT University, Bhopal",
    location: "CGPA 7.9 / 10",
    points: [
      "Forage: TATA GenAI Data Analytics + Deloitte Australia simulations",
      "Certs: Google Digital Garage, Samatrix AI & Data Analytics",
    ],
    stack: ["SQL", "Power BI", "Tableau"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="border-t border-line">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-24 lg:px-10">
        <SectionHeader
          label="experience"
          title={
            <>
              One story: build, automate, grow,{" "}
              <span className="serif-italic">measure</span>.
            </>
          }
          description="Product engineering, client systems and data analytics — not three careers, one compounding loop."
        />

        <ol className="relative space-y-12 border-l border-line pl-10">
          {timeline.map((item, index) => (
            <li key={item.role} className="relative">
              <span
                className={`absolute -left-[45px] top-1.5 h-2.5 w-2.5 rounded-full ${
                  index === 0 ? "bg-accent" : "bg-line"
                }`}
              />
              <p className="mono-label">{item.period}</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                {item.role}
              </h3>
              <p className="serif-italic mt-1 text-lg text-fog">
                {item.company} · {item.location}
              </p>
              <ul className="mt-5 space-y-2.5">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-fog">
                    <span className="mt-0.5 text-accent-soft">→</span>
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.stack.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-fog"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}