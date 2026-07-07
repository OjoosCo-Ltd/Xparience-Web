import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { LegalHero } from "@/components/pages/shared/legal-hero";
import { CookieContent } from "@/components/pages/cookie-policy/cookie-content";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Cookie Policy — Xparience",
  description:
    "How Xparience uses cookies, what choices you have, and how we protect your privacy under UK GDPR and PECR.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <SiteHeader />
      <LegalHero
        chip="Legal · Compliance"
        title="Cookie Policy"
        description={
          <>
            How Xparience uses cookies, what choices you have,{" "}
            <br className="hidden lg:block" />
            and how we protect your privacy under UK GDPR and{" "}
            <br className="hidden lg:block" />
            PECR.
          </>
        }
      />
      <CookieContent />
      <SiteFooter />
    </>
  );
}
