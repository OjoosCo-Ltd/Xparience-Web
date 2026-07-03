import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import { Hero } from "@/components/pages/home/hero";
import { BeyondSection } from "@/components/pages/home/beyond-section";
import { ExperienceSection } from "@/components/pages/home/experience-section";
import { WellbeingSection } from "@/components/pages/home/wellbeing-section";
import { HowItWorksSection } from "@/components/pages/home/how-it-works-section";
import { ReviewsSection } from "@/components/pages/home/reviews-section";
import { WaitlistSection } from "@/components/pages/home/waitlist-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <Hero />
      <Reveal>
        <BeyondSection />
      </Reveal>
      <Reveal>
        <ExperienceSection />
      </Reveal>
      <Reveal>
        <WellbeingSection />
      </Reveal>
      <Reveal>
        <HowItWorksSection />
      </Reveal>
      <Reveal>
        <ReviewsSection />
      </Reveal>
      <Reveal>
        <WaitlistSection />
      </Reveal>
      <SiteFooter />
    </>
  );
}
