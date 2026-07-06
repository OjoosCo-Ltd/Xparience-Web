import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import { SupportHero } from "@/components/pages/support/support-hero";
import { FaqSection } from "@/components/pages/support/faq-section";
import { ContactSection } from "@/components/pages/support/contact-section";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Support — Xparience",
  description:
    "Find help, guidance, and answers to your questions about Xparience anytime.",
};

export default function SupportPage() {
  return (
    <>
      <SiteHeader />
      <SupportHero />
      <Reveal>
        <FaqSection />
      </Reveal>
      <Reveal>
        <ContactSection />
      </Reveal>
      <SiteFooter />
    </>
  );
}
