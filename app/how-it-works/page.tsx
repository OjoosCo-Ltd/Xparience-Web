import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import { HowItWorksHero } from "@/components/pages/how-it-works/how-it-works-hero";
import { ThoughtfulWay } from "@/components/pages/how-it-works/thoughtful-way";
import { DesignedForWellbeing } from "@/components/pages/how-it-works/designed-for-wellbeing";
import { ReservePlace } from "@/components/pages/how-it-works/reserve-place";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "See how Xparience's mindful dating experience works. Escape the cycle of superficial scrolling and join a space designed for depth, intentionality, and meaningful human connection.",
  alternates: { canonical: "/how-it-works" },
};

export default function HowItWorksPage() {
  return (
    <>
      <SiteHeader />
      <main className="contents">
        <HowItWorksHero />
        <Reveal>
          <ThoughtfulWay />
        </Reveal>
        <Reveal>
          <DesignedForWellbeing />
        </Reveal>
        <Reveal>
          <ReservePlace />
        </Reveal>
      </main>
      <SiteFooter />
    </>
  );
}
