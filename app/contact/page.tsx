import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import { ContactHero } from "@/components/pages/contact/contact-hero";
import { ContactFormSection } from "@/components/pages/contact/contact-form-section";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "We're here to help. Whether you have a question, need support, or want to learn more about Xparience, our team is here to help every step of the way.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="contents">
        <ContactHero />
        <Reveal>
          <ContactFormSection />
        </Reveal>
      </main>
      <SiteFooter />
    </>
  );
}
