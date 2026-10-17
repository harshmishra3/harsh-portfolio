"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Download, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SectionHeader } from "@/components/ui/Section";

const schema = z.object({
  name: z.string().min(2, "Name please"),
  email: z.string().email("Valid email please"),
  message: z.string().min(10, "Min 10 characters please"),
});

type FormValues = z.infer<typeof schema>;

const inputClass =
  "w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-paper placeholder:text-mist focus:border-accent focus:outline-none";

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormValues) => {
    const text = encodeURIComponent(
      `Hi Harsh! I'm ${data.name} (${data.email}).\n\n${data.message}`
    );
    window.open(`https://wa.me/919161372549?text=${text}`, "_blank");
    reset();
  };

  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-24 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* ---- Left: pitch + direct links ---- */}
          <div>
            <SectionHeader
              label="contact"
              title={
                <>
                  Let&apos;s build your{" "}
                  <span className="serif-italic">system</span>.
                </>
              }
              description="Recruiter, founder or local business — one message is enough. I usually reply within 2 hours (IST)."
            />

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
                <MapPin className="h-4 w-4" /> Gorakhpur, IN — remote (IST)
              </p>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 font-medium text-paper transition-colors hover:border-mist hover:bg-surface"
              >
                <Download className="h-4 w-4" /> Download resume
              </a>
            </div>
          </div>

          {/* ---- Right: form → WhatsApp ---- */}
          <form onSubmit={handleSubmit(onSubmit)} className="card p-8">
            <div className="space-y-5">
              <div>
                <label className="mono-label mb-2 block" htmlFor="name">
                  name
                </label>
                <input id="name" className={inputClass} placeholder="Your name" {...register("name")} />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label className="mono-label mb-2 block" htmlFor="email">
                  email
                </label>
                <input id="email" type="email" className={inputClass} placeholder="you@company.com" {...register("email")} />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label className="mono-label mb-2 block" htmlFor="message">
                  message
                </label>
                <textarea id="message" rows={5} className={inputClass} placeholder="What should we build or fix?" {...register("message")} />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.message.message}</p>
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
      </div>
    </section>
  );
}