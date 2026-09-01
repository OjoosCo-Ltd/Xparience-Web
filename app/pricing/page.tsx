import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import { PricingSection } from "@/components/pages/pricing/pricing-section";
import { PlanComparison } from "@/components/pages/pricing/plan-comparison";
import { PricingTestimonials } from "@/components/pages/pricing/pricing-testimonials";
import { PricingFaq, PRICING_FAQS } from "@/components/pages/pricing/pricing-faq";
import { SiteFooter } from "@/components/site-footer";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PRICING_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for the Xparience dating app. Compare Free, Basic, Premium, and Elite plans — virtual dates, coaching, and human matchmaking included.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SiteHeader />
      <main className="contents">
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
      </main>
      <SiteFooter />
    </>
  );
}
