import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import { DateHero } from "@/components/pages/date-suggestions/date-hero";
import { CuratedExperiences } from "@/components/pages/date-suggestions/curated-experiences";
import { CompatibilityInsights } from "@/components/pages/date-suggestions/compatibility-insights";
import { ExploreMood } from "@/components/pages/date-suggestions/explore-mood";
import { DateBenefits } from "@/components/pages/date-suggestions/date-benefits";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Date Suggestions — Xparience",
  description:
    "Our intelligent algorithm analyses your interests, personality, and shared chemistry to architect real-world date experiences, thoughtfully curated for two.",
};

export default function DateSuggestionsPage() {
  return (
    <>
      <SiteHeader />
      <DateHero />
      <Reveal>
        <CuratedExperiences />
      </Reveal>
      <Reveal>
        <CompatibilityInsights />
      </Reveal>
      <Reveal>
        <ExploreMood />
      </Reveal>
      <Reveal>
        <DateBenefits />
      </Reveal>
      <SiteFooter />
    </>
  );
}
