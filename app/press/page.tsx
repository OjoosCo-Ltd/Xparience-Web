import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { PressHero } from "@/components/pages/press/press-hero";
import { PressAbout } from "@/components/pages/press/press-about";
import { PressReleases } from "@/components/pages/press/press-releases";
import { BrandResources } from "@/components/pages/press/brand-resources";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Press — Xparience",
  description:
    "Insights, updates, and the latest stories from the forefront of meaningful digital connection.",
};

export default function PressPage() {
  return (
    <>
      <SiteHeader />
      <PressHero />
      <PressAbout />
      <PressReleases />
      <BrandResources />
      <SiteFooter />
    </>
  );
}
