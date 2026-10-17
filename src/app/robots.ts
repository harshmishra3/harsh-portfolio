import type { MetadataRoute } from "next";

// TODO: deploy ke baad final Vercel URL daalna
const BASE = "https://harsh-portfolio99.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    sitemap: `${BASE}/sitemap.xml`,
  };
}