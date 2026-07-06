import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { LegalHero } from "@/components/pages/shared/legal-hero";
import { PrivacyContent } from "@/components/pages/privacy-policy/privacy-content";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Xparience",
  description:
    "How OjoosCo Ltd collects, uses, stores, and protects your personal data when you use the Xparience platform — in full compliance with UK GDPR and the Data Protection Act 2018.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <LegalHero
        chip="Legal · Data Protection"
        title="Privacy Policy"
        description={
          <>
            How OjoosCo Ltd collects, uses, stores, and protects{" "}
            <br className="hidden lg:block" />
            your personal data when you use the Xparience{" "}
            <br className="hidden lg:block" />
            platform — in full compliance with UK GDPR and the{" "}
            <br className="hidden lg:block" />
            Data Protection Act 2018.
          </>
        }
      />
      <PrivacyContent />
      <SiteFooter />
    </>
  );
}
