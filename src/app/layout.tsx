import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  // TODO: deploy ke baad final Vercel URL daalna
  metadataBase: new URL("https://harsh-portfolio99.vercel.app"),
  title: {
    default:
      "Harsh Mishra — Product Engineer | AI, Automation & Growth Systems",
    template: "%s | Harsh Mishra",
  },
  description:
    "Product engineer building AI-powered business systems end to end — Next.js platforms, n8n automations, CRM & admin panels, SEO and growth engineering. Founder of ApnoAI.",
  keywords: [
    "Harsh Mishra",
    "Product Engineer",
    "Full-Stack Developer",
    "Next.js Developer",
    "n8n Automation Expert",
    "AI Tools Developer",
    "CRM Developer India",
    "ApnoAI",
  ],
  openGraph: {
    title: "Harsh Mishra — Product Engineer",
    description:
      "I build AI-powered business systems end to end: platforms, automations, and growth engines.",
    type: "website",
    images: [
      {
        url: "/images/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Harsh Mishra — Product Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Mishra — Product Engineer",
    description:
      "AI-powered business systems, end to end: build, automate, grow, measure.",
    images: ["/images/og-cover.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${instrument.variable} ${jetbrains.variable} bg-ink text-paper font-sans antialiased`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Harsh Mishra",
              jobTitle: "Product Engineer",
              email: "mailto:harshmishra2907@gmail.com",
              url: "https://harsh-portfolio99.vercel.app",
              sameAs: [
                "https://apnoai.com",
                "https://github.com/harshmishra3",
                "https://www.linkedin.com/in/harsh-mishra-759350289",
              ],
              knowsAbout: [
                "Next.js",
                "React",
                "n8n Automation",
                "AI Agents",
                "SEO",
                "Data Analytics",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}