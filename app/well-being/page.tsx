import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import { WellbeingPageHero } from "@/components/pages/well-being/wellbeing-page-hero";
import { ComplexTides } from "@/components/pages/well-being/complex-tides";
import { WellnessToolkit } from "@/components/pages/well-being/wellness-toolkit";
import { ModernLandscape } from "@/components/pages/well-being/modern-landscape";
import { ArtOfBecoming } from "@/components/pages/well-being/art-of-becoming";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Well-Being — Xparience",
  description:
    "We're here for the spark, the flame, and the long haul. Xparience provides the emotional tools to help you stay centered.",
};

export default function WellBeingPage() {
  return (
    <>
      <SiteHeader />
      <WellbeingPageHero />
      <Reveal>
        <ComplexTides />
      </Reveal>
      <Reveal>
        <WellnessToolkit />
      </Reveal>
      <Reveal>
        <ModernLandscape />
      </Reveal>
      <Reveal>
        <ArtOfBecoming />
      </Reveal>
      <SiteFooter />
    </>
  );
}
