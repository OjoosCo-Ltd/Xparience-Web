import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import { VirtualDatesHero } from "@/components/pages/virtual-dates/virtual-dates-hero";
import { MoreThanMessaging } from "@/components/pages/virtual-dates/more-than-messaging";
import { DateExperiences } from "@/components/pages/virtual-dates/date-experiences";
import { NaturalMeeting } from "@/components/pages/virtual-dates/natural-meeting";
import { LevelUp } from "@/components/pages/virtual-dates/level-up";
import { MoreThanScreen } from "@/components/pages/virtual-dates/more-than-screen";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Virtual Dates",
  description:
    "Virtual dating, reimagined. Spark a deeper connection before you meet face-to-face with curated virtual dates — chemistry tested through shared laughter, gaming, and cinematic storytelling.",
  alternates: { canonical: "/virtual-dates" },
};

export default function VirtualDatesPage() {
  return (
    <>
      <SiteHeader />
      <main className="contents">
        <VirtualDatesHero />
        <Reveal>
          <MoreThanMessaging />
        </Reveal>
        <Reveal>
          <DateExperiences />
        </Reveal>
        <Reveal>
          <NaturalMeeting />
        </Reveal>
        <Reveal>
          <LevelUp />
        </Reveal>
        <Reveal>
          <MoreThanScreen />
        </Reveal>
      </main>
      <SiteFooter />
    </>
  );
}
