import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/Section";

const products = [
  {
    index: "01",
    title: "AI Data Studio",
    description:
      "Upload CSV/Excel → chat in plain English. Health score, data quality, statistics, charts, correlations, outliers, insights — real math, and server deletes your file after download.",
    chips: ["7 analysis tabs", "Real calculations", "Privacy-first"],
    url: "https://apnoai.com/tools/data-analyst",
  },
  {
    index: "02",
    title: "Smart Resume Builder",
    description:
      "ATS / AI / Design templates with live preview, auto-fill from an old PDF, and one-click export. Zero signup, auto-save, mobile-ready — 15-minute average build.",
    chips: ["ATS-safe", "1-click PDF", "PDF auto-fill"],
    url: "https://apnoai.com/tools/resume",
  },
  {
    index: "03",
    title: "Internship & Certification Engine",
    description:
      "Google sign-in application → 3 tracks → mentor-reviewed tasks → certificate with unique ID + QR, verifiable online. Offer letters carry a live QR; enrollment emails are automated.",
    chips: ["3 tracks", "QR verification", "Auto emails"],
    url: "https://apnoai.com/careers",
  },
  {
    index: "04",
    title: "Blog + SEO Engine",
    description:
      "Four categories — AI, Programming, DBMS, Data Analysis — with 12+ beginner guides (AI Hallucinations, RAG, Prompt formula, DBMS keys), wired into Search Console and GA4.",
    chips: ["4 categories", "12+ guides", "GSC / GA4 loop"],
    url: "https://apnoai.com/blog",
  },
  {
    index: "05",
    title: "Developer Utilities",
    description:
      "Multi-language code compiler, QR generator and JSON formatter — small in-browser tools that keep users coming back daily.",
    chips: ["Compiler", "QR generator", "JSON formatter"],
    url: "https://apnoai.com",
  },
  {
    index: "06",
    title: "Services Commerce",
    description:
      "Six priced service lines and three engagement tiers with a booking flow, transparent-pricing guarantees and written scope — productized services, not vague freelancing.",
    chips: ["6 services", "3 tiers", "Fixed quotes"],
    url: "https://apnoai.com/services",
  },
  {
    index: "07",
    title: "Automation Backbone",
    description:
      "Render workers + Google Apps Script: automated enrollment emails, PDF certificate generation and Google-sign-in chat history sync — the invisible layer that makes it all run.",
    chips: ["Render", "Apps Script", "Auto PDFs"],
    url: "https://apnoai.com",
  },
];

export function Ecosystem() {
  return (
    <section id="ecosystem" className="border-t border-line">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-24 lg:px-10">
        <SectionHeader
          label="inside the flagship"
          title={
            <>
              ApnoAI: not a website — an{" "}
              <span className="serif-italic">ecosystem</span>.
            </>
          }
          description="Seven product surfaces, one codebase, zero templates. Every layer below was designed, built, deployed and measured by one engineer."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.index} className="card card-hover group p-7">
              <div className="flex items-start justify-between">
                <span className="font-mono text-sm text-mist">
                  {product.index}
                </span>
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-line p-2 text-fog transition-colors hover:border-mist hover:text-paper"
                >
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">
                {product.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-fog">
                {product.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {product.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-fog"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </article>
          ))}

          <article className="flex flex-col justify-between rounded-[1.25rem] border border-[#26262b] bg-[#0a0a0b] p-7 text-[#fafafa]">
            <div>
              <span className="mono-label">the point</span>
              <h3 className="serif-italic mt-5 text-2xl leading-snug">
                One engineer shipped all seven.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#a1a1aa]">
                Product, automation, growth and measurement — under one roof.
                That is exactly what I will build for your business.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#fafafa] px-5 py-2.5 text-sm font-medium text-[#0a0a0b] transition-opacity hover:opacity-80"
            >
              Let&apos;s talk
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}