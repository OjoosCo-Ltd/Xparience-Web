import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import { AboutHero } from "@/components/pages/about/about-hero";
import { WhatSection } from "@/components/pages/about/what-section";
import { AboutExperienceSection } from "@/components/pages/about/about-experience-section";
import { NotDatingSection } from "@/components/pages/about/not-dating-section";
import { SharedSection } from "@/components/pages/about/shared-section";
import { HumanCentricSection } from "@/components/pages/about/human-centric-section";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "About — Xparience",
  description:
    "Our mission is to foster emotional well-being by creating shared digital experiences that feel as intimate and tangible as physical presence.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <AboutHero />
      <Reveal>
        <WhatSection />
      </Reveal>
      <Reveal>
        <AboutExperienceSection />
      </Reveal>
      <Reveal>
        <NotDatingSection />
      </Reveal>
      <Reveal>
        <SharedSection />
      </Reveal>
      <Reveal>
        <HumanCentricSection />
      </Reveal>
      <SiteFooter />
    </>
  );
}
