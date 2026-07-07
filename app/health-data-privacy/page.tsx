import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { LegalHero } from "@/components/pages/shared/legal-hero";
import { HealthDataContent } from "@/components/pages/health-data-privacy/health-data-content";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Consumer Health Data Privacy Policy — Xparience",
  description:
    "How Xparience collects, uses, and protects any health or well-being information you choose to share while using the platform — and the rights you hold over that data.",
};

export default function HealthDataPrivacyPage() {
  return (
    <>
      <SiteHeader />
      <LegalHero
        chip="Legal · Health Data"
        title={
          <>
            Consumer Health <br className="hidden sm:block" />
            Data Privacy Policy
          </>
        }
        description={
          <>
            How Xparience collects, uses, and protects any health{" "}
            <br className="hidden lg:block" />
            or well-being information you choose to share while{" "}
            <br className="hidden lg:block" />
            using the platform — and the rights you hold over that{" "}
            <br className="hidden lg:block" />
            data.
          </>
        }
        banner={
          <>
            <strong className="font-bold text-[#1f5063]">
              Specialist policy:
            </strong>{" "}
            This policy covers health and well-being data only. It should be
            read alongside our full{" "}
            <a href="/privacy-policy" className="underline hover:text-brand">
              Privacy Policy
            </a>
            . Xparience is <strong className="font-bold">not</strong> a medical
            or healthcare service, we do not provide medical advice, diagnosis,
            or treatment.
          </>
        }
      />
      <HealthDataContent />
      <SiteFooter />
    </>
  );
}
