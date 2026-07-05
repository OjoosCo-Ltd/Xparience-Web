import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { ArchiveHero } from "@/components/pages/archive/archive-hero";
import { ArchiveGrid } from "@/components/pages/archive/archive-grid";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "The Archive — Xparience",
  description:
    "A curated collection of wisdom, stories, and insights. Explore years of deep dives into human connection, mental well-being, and the art of intentional living.",
};

export default function ArchivePage() {
  return (
    <>
      <SiteHeader />
      <ArchiveHero />
      <ArchiveGrid />
      <SiteFooter />
    </>
  );
}
