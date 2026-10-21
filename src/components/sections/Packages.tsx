import { MessageCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/Section";

const PHONE = "919161372549";

function waHref(system: string) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(
    `Hi Harsh! I'm interested in the "${system}" package. Please share full details and next steps.`
  )}`;
}

const packages = [
  {
    index: "01",
    industry: "Schools",
    system: "Fee Management + Parent Communication System",
    includes: [
      "Fee & instalment tracking with auto WhatsApp reminders",
      "Student database + QR-verified ID cards",
      "Parent updates: attendance, results, circulars",
      "Admission lead funnel + follow-up CRM",
    ],
    price: "₹35,000",
    timeline: "2–3 weeks",
  },
  {
    index: "02",
    industry: "Hospitals & Clinics",
    system: "Appointment Booking + Patient CRM",
    includes: [
      "Online appointment booking + auto reminders",
      "Patient CRM with visit & prescription history",
      "Post-visit follow-up + Google review requests",
      "Doctor / staff schedule + owner dashboard",
    ],
    price: "₹40,000",
    timeline: "2–3 weeks",
  },
  {
    index: "03",
    industry: "Coaching Institutes",
    system: "Student Attendance + Batch Management App",
    includes: [
      "Attendance app with instant parent alerts",
      "Batch & faculty management",
      "Fee tracking + instalment reminders",
      "Admission lead capture → CRM → follow-up",
    ],
    price: "₹30,000",
    timeline: "2 weeks",
  },
  {
    index: "04",
    industry: "RO / Water Purifier Services",
    system: "AMC Renewal + Technician Dispatch OS",
    includes: [
      "AMC renewal engine (D-15 auto reminders)",
      "Technician dispatch + job status tracking",
      "Lead capture → CRM → WhatsApp auto-reply",
      "B2B quotation generator + site-visit scheduler",
    ],
    price: "₹45,000",
    timeline: "3 weeks",
  },
  {
    index: "05",
    industry: "Hotels & Restaurants",
    system: "Booking + Guest CRM + Review Engine",
    includes: [
      "Unified booking calendar + guest CRM",
      "Post-stay feedback + review automation",
      "Loyalty & festival-wish WhatsApp flows",
      "Staff task assignment + occupancy dashboard",
    ],
    price: "₹35,000",
    timeline: "2–3 weeks",
  },
  {
    index: "06",
    industry: "Real Estate",
    system: "Lead CRM + Site-Visit Scheduler",
    includes: [
      "Lead CRM with source tracking (Meta / Google / portals)",
      "Site-visit scheduler + follow-up reminders",
      "Property listing pages with enquiry forms",
      "Owner dashboard: leads, visits, closures",
    ],
    price: "₹40,000",
    timeline: "2–3 weeks",
  },
  {
    index: "07",
    industry: "Gyms & Fitness Studios",
    system: "Membership + Renewal Automation",
    includes: [
      "Membership plans + renewal automation",
      "Attendance tracking + inactive-member alerts",
      "Lead capture → free-trial funnel → CRM",
      "Trainer schedule + revenue dashboard",
    ],
    price: "₹25,000",
    timeline: "2 weeks",
  },
  {
    index: "08",
    industry: "Salons & Spas",
    system: "Appointment + Loyalty System",
    includes: [
      "Appointment booking + slot management",
      "Loyalty points + birthday / festival wishes",
      "Repeat-customer win-back WhatsApp flows",
      "Service menu pages + staff roster",
    ],
    price: "₹20,000",
    timeline: "1–2 weeks",
  },
  {
    index: "09",
    industry: "Retail & Kirana Stores",
    system: "Billing + Inventory + WhatsApp Offers",
    includes: [
      "Billing + inventory tracking",
      "WhatsApp offer broadcasts to customer list",
      "Repeat-purchase reminders (FMCG cycles)",
      "Daily sales dashboard on owner's phone",
    ],
    price: "₹30,000",
    timeline: "2 weeks",
  },
  {
    index: "10",
    industry: "CA / Legal / Consultancy",
    system: "Client Documents + Deadline Tracker",
    includes: [
      "Client document vault with access control",
      "Deadline & hearing-date reminder engine",
      "Client CRM + billing / retainer tracking",
      "Automatic status updates to clients",
    ],
    price: "₹35,000",
    timeline: "2 weeks",
  },
  {
    index: "11",
    industry: "Photographers & Event Planners",
    system: "Booking + Payment Pipeline OS",
    includes: [
      "Enquiry → booking → payment pipeline",
      "Shoot calendar + task checklists",
      "Auto gallery delivery + review requests",
      "Season-offer WhatsApp campaigns",
    ],
    price: "₹30,000",
    timeline: "2 weeks",
  },
  {
    index: "12",
    industry: "Marketing Agencies",
    system: "Lead Dashboard + Client Reporting System",
    includes: [
      "Multi-client lead dashboard",
      "Automated weekly client reports (PDF / WhatsApp)",
      "Ad-spend + ROAS tracking with sheet sync",
      "Proposal & invoice generator",
    ],
    price: "₹40,000",
    timeline: "2–3 weeks",
  },
];

const commonIncludes = [
  "Fast Next.js website",
  "Local SEO + Google Business",
  "Lead forms → CRM",
  "WhatsApp automations",
  "Secure admin login",
  "Analytics dashboard",
  "Staff training",
  "1–3 months support",
];

export function Packages() {
  return (
    <section id="packages" className="border-t border-line">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-24 lg:px-10">
        <SectionHeader
          label="industry packages"
          title={
            <>
              Pick your industry. Get your{" "}
              <span className="serif-italic">system</span>.
            </>
          }
          description="Fixed scope, fixed price, written before we start. Every package is a complete setup — website, CRM, automations and dashboard — delivered in weeks."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <article
              key={pkg.index}
              className="card card-hover flex flex-col p-7"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-sm text-mist">
                  {pkg.index}
                </span>
                <span className="mono-label">{pkg.industry}</span>
              </div>

              <h3 className="mt-5 text-xl font-semibold leading-snug tracking-tight">
                {pkg.system}
              </h3>

              <ul className="mt-5 space-y-2.5">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-fog">
                    <span className="mt-0.5 text-accent-soft">→</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
                <div>
                  <p className="font-mono text-lg">{pkg.price}</p>
                  <p className="mono-label mt-0.5">{pkg.timeline}</p>
                </div>
                <a
                  href={waHref(pkg.system)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-xs font-medium text-paper transition-colors hover:border-mist hover:bg-surface"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  Get this package
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* ---- Common includes band ---- */}
        <div className="mt-10 flex flex-col gap-8 rounded-[1.25rem] border border-[#26262b] bg-[#0a0a0b] p-8 text-[#fafafa] lg:flex-row lg:items-center lg:justify-between lg:p-10">
          <div>
            <span className="mono-label">every package includes</span>
            <div className="mt-5 flex flex-wrap gap-2">
              {commonIncludes.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#26262b] px-3 py-1 font-mono text-[11px] text-[#a1a1aa]"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#a1a1aa]">
              Your industry not on the list? Same 10-system approach, custom
              scope — fixed quote on a free 15-minute call.
            </p>
          </div>
          <a
            href={waHref("Custom Business OS")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#fafafa] px-6 py-3 text-sm font-medium text-[#0a0a0b] transition-opacity hover:opacity-80"
          >
            <MessageCircle className="h-4 w-4" />
            Book free demo call
          </a>
        </div>
      </div>
    </section>
  );
}