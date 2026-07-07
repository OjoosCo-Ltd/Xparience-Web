import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { LegalHero } from "@/components/pages/shared/legal-hero";
import { AccessibilityContent } from "@/components/pages/accessibility/accessibility-content";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Accessibility — Xparience",
  description:
    "Accessible to as many people as possible — from profile creation and matching to messaging and Virtual Dates.",
};

export default function AccessibilityPage() {
  return (
    <>
      <SiteHeader />
      <LegalHero
        chip="Inclusion · Standards"
        title={
          <>
            Accessibility at <br className="hidden lg:block" />
            Xparience
          </>
        }
        description={
          <>
            &ldquo;Accessible to as many people as possible &mdash; from{" "}
            <br className="hidden lg:block" />
            profile creation and matching to messaging and{" "}
            <br className="hidden lg:block" />
            Virtual Dates.&rdquo;
          </>
        }
      />
      <AccessibilityContent />
      <SiteFooter />
    </>
  );
}
