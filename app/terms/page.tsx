import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { LegalHero } from "@/components/pages/shared/legal-hero";
import { TermsContent } from "@/components/pages/terms/terms-content";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Terms of Use — Xparience",
  description:
    "Please read these terms carefully before accessing or using Xparience. By creating an account or using any part of our service, you agree to be bound by these terms.",
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <LegalHero
        chip="Legal · Platform Rules"
        title="Terms of Use"
        description={
          <>
            Please read these terms carefully before accessing or{" "}
            <br className="hidden lg:block" />
            using Xparience. By creating an account or using any{" "}
            <br className="hidden lg:block" />
            part of our service, you agree to be bound by these{" "}
            <br className="hidden lg:block" />
            terms.
          </>
        }
      />
      <TermsContent />
      <SiteFooter />
    </>
  );
}
