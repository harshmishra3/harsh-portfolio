import { SectionHeader } from "@/components/ui/Section";

const pillars = [
  {
    number: "01",
    title: "Build",
    tagline: "Platforms that run.",
    points: [
      "Next.js + TypeScript products shipped end-to-end",
      "Supabase, REST & AI API integrations",
      "Vercel / Render deploys with clean rollbacks",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "REST", "Vercel"],
  },
  {
    number: "02",
    title: "Automate",
    tagline: "Systems that sell while you sleep.",
    points: [
      "n8n workflows: lead → CRM → WhatsApp in seconds",
      "Google Apps Script + Render workers: auto PDFs & emails",
      "AI agents for support, follow-ups and lead qualification",
    ],
    stack: ["n8n", "Apps Script", "AI APIs", "WhatsApp API"],
  },
  {
    number: "03",
    title: "Grow & Measure",
    tagline: "Traffic, leads, revenue — in numbers.",
    points: [
      "SEO + Meta/Google Ads funnels that compound",
      "GA4 / Search Console / Power BI dashboards",
      "Python + SQL EDA to decide the next business move",
    ],
    stack: ["SEO", "Meta Ads", "GA4", "Power BI", "Python", "SQL"],
  },
];

export function About() {
  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-24 lg:px-10">
        <SectionHeader
          label="how i work"
          title={
            <>
              One engineer, three{" "}
              <span className="serif-italic">compounding</span> powers.
            </>
          }
          description="Most people ship a website and disappear. I build the platform, wire the automations behind it, then grow and measure it — so the system gets stronger every month."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.number}
              className="card card-hover group relative overflow-hidden p-7"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="flex items-baseline justify-between">
                <span className="font-mono text-sm text-mist">
                  {pillar.number}
                </span>
                <span className="mono-label">{pillar.stack.length} tools</span>
              </div>

              <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                {pillar.title}
              </h3>
              <p className="serif-italic mt-1 text-lg text-fog">
                {pillar.tagline}
              </p>

              <ul className="mt-6 space-y-3">
                {pillar.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-fog"
                  >
                    <span className="mt-0.5 text-accent-soft">→</span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-2">
                {pillar.stack.map((tool) => (
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
  );
}