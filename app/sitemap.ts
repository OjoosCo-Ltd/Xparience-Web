import type { MetadataRoute } from "next";

const BASE_URL = "https://www.xparience.com";

const ROUTES: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/how-it-works", priority: 0.8 },
  { path: "/pricing", priority: 0.8 },
  { path: "/virtual-dates", priority: 0.8 },
  { path: "/date-suggestions", priority: 0.8 },
  { path: "/events", priority: 0.8 },
  { path: "/community", priority: 0.8 },
  { path: "/well-being", priority: 0.8 },
  { path: "/safety", priority: 0.8 },
  { path: "/waitlist", priority: 0.8 },
  { path: "/archive", priority: 0.6 },
  { path: "/support", priority: 0.6 },
  { path: "/contact", priority: 0.6 },
  { path: "/press", priority: 0.6 },
  { path: "/accessibility", priority: 0.3 },
  { path: "/privacy-policy", priority: 0.3 },
  { path: "/terms", priority: 0.3 },
  { path: "/cookie-policy", priority: 0.3 },
  { path: "/health-data-privacy", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority,
  }));
}
