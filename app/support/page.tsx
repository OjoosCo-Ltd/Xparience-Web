import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import { SupportHero } from "@/components/pages/support/support-hero";
import { FaqSection } from "@/components/pages/support/faq-section";
import { ContactSection } from "@/components/pages/support/contact-section";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Find help, guidance, and answers to your questions about Xparience anytime.",
  alternates: { canonical: "/support" },
};

export default function SupportPage() {
  return (
    <>
      <SiteHeader />
      <main className="contents">
        <SupportHero />
        <Reveal>
          <FaqSection />
        </Reveal>
        <Reveal>
          <ContactSection />
        </Reveal>
      </main>
      <SiteFooter />
    </>
  );
}
