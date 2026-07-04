import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import { CommunityHero } from "@/components/pages/community/community-hero";
import { CommunityTrust } from "@/components/pages/community/community-trust";
import { BeyondOneToOne } from "@/components/pages/community/beyond-one-to-one";
import { NotDating } from "@/components/pages/community/not-dating";
import { WonderWhy } from "@/components/pages/community/wonder-why";
import { ShrinkToFit } from "@/components/pages/community/shrink-to-fit";
import { NavigateAlone } from "@/components/pages/community/navigate-alone";
import { ReadyDifferent } from "@/components/pages/community/ready-different";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Community — Xparience",
  description:
    "Beyond the superficiality of swiping. Experience a community designed for meaningful relationships, intentional introductions, and genuine connection.",
};

export default function CommunityPage() {
  return (
    <>
      <SiteHeader />
      <CommunityHero />
      <Reveal>
        <CommunityTrust />
      </Reveal>
      <Reveal>
        <BeyondOneToOne />
      </Reveal>
      <Reveal>
        <NotDating />
      </Reveal>
      <Reveal>
        <WonderWhy />
      </Reveal>
      <Reveal>
        <ShrinkToFit />
      </Reveal>
      <Reveal>
        <NavigateAlone />
      </Reveal>
      <Reveal>
        <ReadyDifferent />
      </Reveal>
      <SiteFooter />
    </>
  );
}
