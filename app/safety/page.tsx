import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import { SafetyHero } from "@/components/pages/safety/safety-hero";
import { SafetyPillars } from "@/components/pages/safety/safety-pillars";
import { CommunityGuidelines } from "@/components/pages/safety/community-guidelines";
import { PrivacyProtection } from "@/components/pages/safety/privacy-protection";
import { SafetyTips } from "@/components/pages/safety/safety-tips";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Safety — Xparience",
  description:
    "We've designed Xparience to be a digital sanctuary where human storytelling thrives in a secure, respectful environment.",
};

export default function SafetyPage() {
  return (
    <>
      <SiteHeader />
      <SafetyHero />
      <Reveal>
        <SafetyPillars />
      </Reveal>
      <Reveal>
        <CommunityGuidelines />
      </Reveal>
      <Reveal>
        <PrivacyProtection />
      </Reveal>
      <Reveal>
        <SafetyTips />
      </Reveal>
      <SiteFooter />
    </>
  );
}
