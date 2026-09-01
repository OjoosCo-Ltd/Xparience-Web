import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { WaitlistHero } from "@/components/pages/waitlist/waitlist-hero";
import { WaitlistFeatures } from "@/components/pages/waitlist/waitlist-features";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Join the Waitlist",
  description:
    "Join early access to Xparience — an experience designed for intentional connection, better conversations, and real-world experiences.",
  alternates: { canonical: "/waitlist" },
};

export default function WaitlistPage() {
  return (
    <>
      <SiteHeader />
      <main className="contents">
        <WaitlistHero />
        <WaitlistFeatures />
      </main>
      <SiteFooter />
    </>
  );
}
