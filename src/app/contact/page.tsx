"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Download,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Clock,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "framer-motion";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  message: z.string().min(10, "Please write at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

const inputClass =
  "w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-paper placeholder:text-mist focus:border-accent focus:outline-none";

const steps = [
  { step: "1", title: "You message me", text: "WhatsApp or form — whatever is faster for you." },
  { step: "2", title: "Free 15-min demo call", text: "Live walkthrough of tools, automations and your exact use case." },
  { step: "3", title: "Written quote & timeline", text: "Fixed price, clear scope — in writing before any work starts." },
];

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormValues) => {
    const companyLine = data.company ? `Company: ${data.company}\n` : "";
    const text = encodeURIComponent(
      `Hi Harsh! I'm ${data.name} (${data.email}).\n${companyLine}\n${data.message}`
    );
    window.open(`https://wa.me/919161372549?text=${text}`, "_blank");
    reset();
  };

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
            contact
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Let&apos;s build your <span className="serif-italic">system</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-fog sm:text-lg">
            Recruiter, founder or local business — one message is enough. I
            usually reply within 2 hours (IST).
          </p>
        </motion.div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* ---- Left: direct contact ---- */}
          <div>
            <div className="flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/profile.jpg"
                alt="Harsh Mishra"
                className="h-14 w-14 rounded-full border border-line object-cover"
              />
              <div>
                <p className="font-semibold tracking-tight">Harsh Mishra</p>
                <p className="mono-label mt-1">product engineer</p>
              </div>
            </div>

            <div className="mt-8 space-y-4 text-sm">
              <a
                href="https://wa.me/919161372549"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-fog transition-colors hover:text-paper"
              >
                <MessageCircle className="h-4 w-4" /> +91 91613 72549 (WhatsApp)
              </a>
              <a
                href="mailto:harshmishra2907@gmail.com"
                className="flex items-center gap-3 text-fog transition-colors hover:text-paper"
              >
                <Mail className="h-4 w-4" /> harshmishra2907@gmail.com
              </a>
              <p className="flex items-center gap-3 text-fog">
                <MapPin className="h-4 w-4" /> Gorakhpur, India — remote (IST)
              </p>
              <p className="flex items-center gap-3 text-fog">
                <Clock className="h-4 w-4" /> Mon–Sat, 10:00–19:00 IST
              </p>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 font-medium text-paper transition-colors hover:border-mist hover:bg-surface"
              >
                <Download className="h-4 w-4" /> Download resume
              </a>
            </div>

            <div className="mt-10">
              <span className="mono-label">what happens next</span>
              <div className="mt-5 space-y-4">
                {steps.map((s) => (
                  <div key={s.step} className="card flex gap-4 p-5">
                    <span className="font-mono text-sm text-mist">
                      {s.step}
                    </span>
                    <div>
                      <p className="text-sm font-semibold">{s.title}</p>
                      <p className="mt-1 text-sm text-fog">{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ---- Right: form ---- */}
          <form onSubmit={handleSubmit(onSubmit)} className="card h-fit p-6 sm:p-8">
            <div className="space-y-5">
              <div>
                <label className="mono-label mb-2 block" htmlFor="name">
                  name *
                </label>
                <input
                  id="name"
                  className={inputClass}
                  placeholder="Your name"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="mono-label mb-2 block" htmlFor="email">
                  email *
                </label>
                <input
                  id="email"
                  type="email"
                  className={inputClass}
                  placeholder="you@company.com"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="mono-label mb-2 block" htmlFor="company">
                  company (optional)
                </label>
                <input
                  id="company"
                  className={inputClass}
                  placeholder="Business or organization"
                  {...register("company")}
                />
              </div>

              <div>
                <label className="mono-label mb-2 block" htmlFor="message">
                  message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={inputClass}
                  placeholder="What should we build or fix?"
                  {...register("message")}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-80"
              >
                <Send className="h-4 w-4" /> Send via WhatsApp
              </button>
              <p className="mono-label text-center">
                opens whatsapp with your message pre-filled
              </p>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}