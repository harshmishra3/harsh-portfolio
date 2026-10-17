import type { MetadataRoute } from "next";

// TODO: final Vercel URL aane ke baad yahan update karna
const BASE = "https://harsh-portfolio99.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/projects",
    "/services",
    "/for-businesses",
    "/about",
    "/contact",
    "/case-study/apnoai",
    "/case-study/redstone",
    "/case-study/admoteck",
  ];

  return routes.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: new Date("2026-10-17"),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}