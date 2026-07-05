import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { BlogHero } from "@/components/pages/blog/blog-hero";
import { BlogStories } from "@/components/pages/blog/blog-stories";
import { LatestExplorations } from "@/components/pages/blog/latest-explorations";
import { DispatchCta } from "@/components/pages/blog/dispatch-cta";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "The Archive — Xparience",
  description:
    "A curated collection of wisdom, stories, and insights. Explore years of deep dives into human connection, mental well-being, and the art of intentional living.",
};

export default function BlogPage() {
  return (
    <>
      <SiteHeader />
      <BlogHero />
      <BlogStories />
      <LatestExplorations />
      <DispatchCta />
      <SiteFooter />
    </>
  );
}
