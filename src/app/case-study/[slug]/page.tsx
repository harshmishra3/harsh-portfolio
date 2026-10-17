import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

const caseStudies: Record<
  string,
  {
    title: string;
    subtitle: string;
    year: string;
    role: string;
    stack: string[];
    problem: string[];
    system: string[];
    results: { value: string; label: string }[];
    image?: string;
    liveUrl?: string;
  }
> = {
  apnoai: {
    title: "ApnoAI",
    subtitle: "From zero to a 7-surface AI product ecosystem",
    year: "2026",
    role: "Founder & Product Engineer",
    stack: ["Next.js", "Supabase", "Apps Script", "Render", "AI APIs", "GA4 / GSC"],
    problem: [
      "Students ko free, private AI tools nahi milte the — sab paid ya signup-walled",
      "Internship certificates verify karna impossible tha — fake listings everywhere",
      "Ek hi platform pe tools, career services aur content ka koi unified system nahi",
    ],
    system: [
      "AI Data Studio: CSV/Excel chat with 7 analysis tabs, real math, privacy-first deletes",
      "ATS Resume Builder: live preview, PDF auto-fill, one-click export",
      "Internship engine: Google sign-in → mentor review → QR-verified certificates",
      "Blog + SEO engine: 4 categories, 12+ guides, Search Console loop",
      "Services commerce: 6 priced lines, 3 tiers, booking flow",
      "Automation backbone: Render workers + Apps Script auto-PDFs & emails",
    ],
    results: [
      { value: "7", label: "product surfaces" },
      { value: "10+", label: "browser tools" },
      { value: "QR", label: "verified certs" },
      { value: "100%", label: "self-built" },
    ],
    image: "/images/projects/apnoai-home.png",
    liveUrl: "https://apnoai.com",
  },
  redstone: {
    title: "RedStone Studio",
    subtitle: "20+ module business OS for a wedding photography studio",
    year: "2026",
    role: "Freelance Product Engineer",
    stack: ["Next.js", "React", "Meta Lead API", "n8n"],
    problem: [
      "Bookings aur leads WhatsApp + spreadsheets mein bikhi hui",
      "Meta ads se aane wale leads ka koi tracking ya follow-up system nahi",
      "Owner ko revenue aur team productivity ka koi live view nahi",
    ],
    system: [
      "Lead → booking → payment pipeline, ek hi CRM mein",
      "Meta Lead Forms integration: har lead seedha CRM + auto alert",
      "Team tasks, engineer assignment aur QR-verified ID cards",
      "Finance tracking + owner analytics dashboard",
      "n8n workflows: follow-up reminders aur status updates",
    ],
    results: [
      { value: "20+", label: "modules" },
      { value: "1", label: "source of truth" },
      { value: "0", label: "spreadsheets left" },
    ],
    image: "/images/projects/redstone-dashboard.png",
    liveUrl: "https://www.theredstonestudio.com",
  },
  admoteck: {
    title: "AdmoTeck",
    subtitle: "Conversion-built growth agency engine, Lucknow",
    year: "2026",
    role: "Freelance Product Engineer",
    stack: ["Next.js", "Vercel", "Meta Ads", "Google Ads", "WhatsApp API", "SEO"],
    problem: [
      "Local businesses 4 alag agencies + 4 alag bills jhel rahe the",
      "Ad spend ka koi measurable proof nahi — leads ka pata nahi chalta tha",
      "Agency ko leads capture karne ka koi own funnel nahi tha",
    ],
    system: [
      "Free 30-point growth audit funnel as lead magnet",
      "Live campaign dashboard UI: leads, ROAS, cost/lead",
      "34-feature service matrix with per-card WhatsApp CTAs",
      "Local proof cards: Page-1 Google + weekly lead ticks",
      "Meta + Google Ads landing pages with full conversion tracking",
    ],
    results: [
      { value: "34", label: "features shipped" },
      { value: "₹3–10", label: "return per ₹1" },
      { value: "1", label: "whatsapp group ops" },
    ],
    image: "/images/projects/admoteck-home.png",
    liveUrl: "https://admoteck-site.vercel.app",
  },
};

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies[slug];

  if (!study) notFound();

  return (
    <main className="min-h-screen bg-ink text-paper">
      <Navbar />

      <section className="mx-auto w-full max-w-[1100px] px-6 pb-24 pt-36 lg:px-10">
        <Link
          href="/projects"
          className="mono-label inline-flex items-center gap-2 transition-colors hover:text-paper"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> all work
        </Link>

        <div className="mt-8">
          <span className="mono-label">case study — {study.year}</span>
          <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-6xl">
            {study.title}
          </h1>
          <p className="serif-italic mt-3 text-2xl text-fog">
            {study.subtitle}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-line px-4 py-1.5 font-mono text-[11px] text-fog">
              {study.role}
            </span>
            {study.stack.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-line px-4 py-1.5 font-mono text-[11px] text-fog"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {study.image && (
          <div className="relative mt-12 overflow-hidden rounded-2xl border border-line bg-raised">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={study.image}
              alt={`${study.title} preview`}
              className="aspect-[16/9] w-full object-cover object-top"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />
          </div>
        )}

        <div className="mt-16 grid gap-14 lg:grid-cols-2">
          <div>
            <span className="mono-label">the problem</span>
            <ul className="mt-6 space-y-4">
              {study.problem.map((p) => (
                <li key={p} className="flex gap-3 text-base leading-relaxed text-fog">
                  <span className="mt-1 text-red-400">✕</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="mono-label">the system</span>
            <ul className="mt-6 space-y-4">
              {study.system.map((s) => (
                <li key={s} className="flex gap-3 text-base leading-relaxed text-fog">
                  <span className="mt-1 text-accent-soft">→</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 border-y border-line py-10 md:grid-cols-4">
          {study.results.map((r) => (
            <div key={r.label}>
              <p className="font-mono text-3xl">{r.value}</p>
              <p className="mono-label mt-2">{r.label}</p>
            </div>
          ))}
        </div>

        {study.liveUrl && (
          <a
            href={study.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-80"
          >
            See it live
            <ArrowUpRight className="h-4 w-4" />
          </a>
        )}
      </section>

      <Footer />
    </main>
  );
}