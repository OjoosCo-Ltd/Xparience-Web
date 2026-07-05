import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import { EventsHero } from "@/components/pages/events/events-hero";
import { InteractiveEvents } from "@/components/pages/events/interactive-events";
import { NeverForget } from "@/components/pages/events/never-forget";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Events — Xparience",
  description:
    "Discover curated virtual experiences, join community events, and connect with others through shared interests.",
};

export default function EventsPage() {
  return (
    <>
      <SiteHeader />
      <EventsHero />
      <Reveal>
        <InteractiveEvents />
      </Reveal>
      <Reveal>
        <NeverForget />
      </Reveal>
      <SiteFooter />
    </>
  );
}
