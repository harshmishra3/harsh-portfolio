import { Bot, Code2, Megaphone, Search, Target, Workflow } from "lucide-react";
import { SectionHeader } from "@/components/ui/Section";

const services = [
  {
    icon: Workflow,
    title: "n8n Automation",
    description: "Save 40+ hours/week with smart workflows.",
    bullets: ["Lead automation", "CRM sync", "Email sequences"],
    price: "₹15,000",
  },
  {
    icon: Bot,
    title: "AI Agents",
    description: "Intelligent bots working 24/7 for your business.",
    bullets: ["24/7 support", "Smart responses", "Task automation"],
    price: "₹25,000",
  },
  {
    icon: Code2,
    title: "Web Development",
    description: "Next.js websites built for speed and SEO.",
    bullets: ["Next.js / React", "SEO optimized", "Mobile first"],
    price: "₹10,000",
  },
  {
    icon: Search,
    title: "SEO & Marketing",
    description: "Dominate Google rankings and get more leads.",
    bullets: ["Technical SEO", "Content strategy", "Rank tracking"],
    price: "₹12,000",
  },
  {
    icon: Megaphone,
    title: "Performance Ads",
    description: "Google & Meta ads that actually convert.",
    bullets: ["Google Ads", "Meta Ads", "A/B testing"],
    price: "₹20,000",
  },
  {
    icon: Target,
    title: "Lead Generation",
    description: "Qualified leads on a complete autopilot system.",
    bullets: ["Landing pages", "Funnel setup", "Conversion optimization"],
    price: "₹18,000",
  },
];

const tiers = [
  {
    name: "Starter",
    price: "₹10,000 – ₹25,000",
    tagline: "For small businesses",
    includes: [
      "Basic website (3 pages)",
      "Mobile responsive",
      "Basic SEO setup",
      "1 month support",
    ],
    featured: false,
  },
  {
    name: "Professional",
    price: "₹25,000 – ₹50,000",
    tagline: "Most popular choice",
    includes: [
      "Advanced website (5–7 pages)",
      "AI chat integration",
      "SEO optimization",
      "3 months support",
    ],
    featured: true,
  },
  {
    name: "Business",
    price: "₹50,000 – ₹1,00,000",
    tagline: "Complete automation",
    includes: [
      "Custom website",
      "AI agents + n8n setup",
      "CRM & WhatsApp integration",
      "6 months support",
    ],
    featured: false,
  },
];

export function Services() {
  return (
    <section id="services" className="border-t border-line">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-24 lg:px-10">
        <SectionHeader
          label="services & pricing"
          title={
            <>
              Systems you can buy, outcomes you can{" "}
              <span className="serif-italic">measure</span>.
            </>
          }
          description="Transparent, fixed-quote pricing — the same menu that runs on apnoai.com/services. Features add up, price adjusts, everything in writing."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="card card-hover p-7">
              <div className="flex items-start justify-between">
                <span className="rounded-xl border border-line p-2.5">
                  <service.icon className="h-5 w-5" />
                </span>
                <span className="mono-label">from {service.price}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">
                {service.title}
              </h3>
              <p className="serif-italic mt-1 text-fog">
                {service.description}
              </p>
              <ul className="mt-5 space-y-2">
                {service.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-3 text-sm text-fog"
                  >
                    <span className="mt-0.5 text-accent-soft">→</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* ---- Engagement tiers ---- */}
        <div className="mt-16 grid gap-5 lg:grid-cols-3">
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
                <h3 className="text-lg font-semibold tracking-tight">
                  {tier.name}
                </h3>
                {tier.featured && (
                  <span className="mono-label text-[#8b7cff]">popular</span>
                )}
              </div>
              <p
                className={`mt-3 font-mono text-2xl ${
                  tier.featured ? "text-[#fafafa]" : "text-paper"
                }`}
              >
                {tier.price}
              </p>
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

        <p className="mono-label mt-10">
          customization available — more features, price adjusts. see{" "}
          <a
            href="https://apnoai.com/services"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-soft underline-offset-4 hover:underline"
          >
            apnoai.com/services
          </a>
        </p>
      </div>
    </section>
  );
}