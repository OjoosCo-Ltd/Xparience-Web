import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import { PricingSection } from "@/components/pages/pricing/pricing-section";
import { PlanComparison } from "@/components/pages/pricing/plan-comparison";
import { PricingTestimonials } from "@/components/pages/pricing/pricing-testimonials";
import { PricingFaq } from "@/components/pages/pricing/pricing-faq";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Pricing — Xparience",
  description:
    "Simple, transparent pricing for deeper connections. Unlock intentional tools and exclusive environments designed to foster genuine human intimacy.",
};

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <PricingSection />
      <Reveal>
        <PlanComparison />
      </Reveal>
      <Reveal>
        <PricingTestimonials />
      </Reveal>
      <Reveal>
        <PricingFaq />
      </Reveal>
      <SiteFooter />
    </>
  );
}
