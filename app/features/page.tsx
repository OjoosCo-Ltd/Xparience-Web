import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import { FeaturesHero } from "@/components/pages/features/features-hero";
import { SharedExperiences } from "@/components/pages/features/shared-experiences";
import { CommunityWellbeing } from "@/components/pages/features/community-wellbeing";
import { CuratedDates } from "@/components/pages/features/curated-dates";
import { VibrantCommunity } from "@/components/pages/features/vibrant-community";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Features — Xparience",
  description:
    "Don't just chat. Transform your connection with shared real-time experiences: watch movies, play games, shop, and plan meals together.",
};

export default function FeaturesPage() {
  return (
    <>
      <SiteHeader />
      <FeaturesHero />
      <Reveal>
        <SharedExperiences />
      </Reveal>
      <Reveal>
        <CommunityWellbeing />
      </Reveal>
      <Reveal>
        <CuratedDates />
      </Reveal>
      <Reveal>
        <VibrantCommunity />
      </Reveal>
      <SiteFooter />
    </>
  );
}
