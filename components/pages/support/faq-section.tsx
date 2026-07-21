import type { ReactNode } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS: { question: string; answer: ReactNode; hidden?: boolean }[] = [
  // About Xparience
  {
    question: "What is Xparience?",
    answer: (
      <>
        Xparience is a dating and lifestyle platform designed for adults who
        are serious about finding genuine, meaningful connections. Unlike
        traditional dating apps, Xparience combines intelligent compatibility
        matching with the option of personalised human-assisted matchmaking
        and dating/life coaching, creating an experience that is both
        intentional and high quality.
        <br />
        Every person on Xparience is identity-verified, so you can match with
        confidence knowing that the people you meet are exactly who they say
        they are.
      </>
    ),
  },
  {
    question: "Who is Xparience for?",
    answer: (
      <>
        Xparience is for adults aged 21 and over who are looking for
        meaningful connections, whether that is a long-term relationship, a
        genuine companionship, or simply meeting like-minded people in a
        respectful environment.
        <br />
        If you are tired of superficial swiping and are ready for something
        more intentional, Xparience was built for you.
      </>
    ),
  },
  {
    question: "How is Xparience different from other dating apps?",
    answer: (
      <>
        A few things set Xparience apart:
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            Every user is identity-verified before they can access the
            platform — no fake profiles, no catfishing
          </li>
          <li>
            Our proprietary compatibility matching is built around
            compatibility and intentionality, not just photos
          </li>
          <li>
            Elite members get access to real human matchmakers and dating and
            life coaches
          </li>
          <li>
            We are a premium platform, which means a higher-quality, more
            serious community
          </li>
          <li>We prioritise your privacy and data security at every step</li>
        </ul>
      </>
    ),
  },
  {
    question: "Where is Xparience available?",
    answer: (
      <>
        Xparience is currently available in the United Kingdom. We are
        available on mobile (iOS and Android). We plan to expand to additional
        markets in the future.
      </>
    ),
  },
  // Getting Started
  {
    question: "How do I join Xparience?",
    answer: (
      <>
        Joining is straightforward. You can register to join our waitlist now
        and be part of our beta testers.
        <br />
        You can also register by creating an account with your name, date of
        birth, and email address. You then build your profile, after which you
        will be required to complete a quick identity and age verification
        check, which takes just a few minutes. Once verified, you will be able
        to access the platform and start matching with like-minded
        individuals.
      </>
    ),
  },
  {
    question: "Is there an age requirement?",
    answer: (
      <>
        Yes. Xparience is strictly an adults-only platform. You must be 21 or
        over to join. We verify the age of every user during the onboarding
        process — there are no exceptions to this requirement.
      </>
    ),
  },
  {
    question: "Why do I need to verify my identity?",
    answer: (
      <>
        Identity verification is at the heart of what makes Xparience
        different. It means everyone you interact with on the platform is a
        real, verified person who is who they claim to be.
        <br />
        It is also a legal requirement under the UK Online Safety Act 2023,
        which requires platforms like ours to confirm that all users are 21 or
        over. We take this seriously — your safety matters to us.
      </>
    ),
  },
  {
    question: "What documents do I need to verify my identity?",
    answer: (
      <>
        You will need a valid government-issued photo ID: a passport, driving
        licence, or national identity card. You will also need to complete a
        quick real-time selfie check, which is matched against your ID.
        <br />
        The verification process is completed using a hybrid approach. Your
        documents are processed securely and stored only for as long as
        legally required.
      </>
    ),
  },
  {
    question: "How long does verification take?",
    answer: (
      <>
        In most cases, automated verification is completed within a few
        minutes. In the case of a manual review, this can take up to 24 hours.
        We will notify you by email once your verification is complete.
      </>
    ),
  },
  // Matching and Features
  {
    question: "How does the matching work?",
    answer: (
      <>
        Our proprietary system analyses your profile, preferences, values, and
        behaviour on the platform to suggest people who are genuinely
        compatible with you, not just people who look appealing at first
        glance. The more you engage with the platform, the better your matches
        become.
        <br />
        We focus on intentional compatibility over volume. You will receive
        fewer but more meaningful suggestions.
      </>
    ),
  },
  {
    question: "What is the Elite human-assisted matchmaking service?",
    hidden: true,
    answer: (
      <>
        Elite is our premium tier that gives you access to a dedicated human
        matchmaker who works with you personally to understand what you are
        looking for and introduces you to curated, hand-selected matches.
        <br />
        You also get access to dating and life coaches who can help you
        navigate your journey with confidence.
        <br />
        Elite is ideal for people who want a truly personalised, white-glove
        experience.
      </>
    ),
  },
  {
    question: "Can I control who sees my profile?",
    answer: (
      <>
        Yes. You have control over your profile visibility. You can choose to
        show or hide your profile from certain users, pause your profile if
        you need a break, and control exactly what information is visible to
        others.
        <br />
        Your full name, contact details, and identity documents are never
        visible to other users; only you and Xparience can see those.
      </>
    ),
  },
  {
    question: "What happens if I meet someone I am not comfortable with?",
    answer: (
      <>
        Your safety is our priority. You can block and report any user
        directly within the app. Our team reviews all reports and takes
        appropriate action, which can include removing content or suspending
        accounts.
        <br />
        If you ever feel unsafe, please contact us immediately at
        support@xparience.com.
      </>
    ),
  },
  // Privacy and Safety
  {
    question: "How does Xparience protect my data?",
    answer: (
      <>
        We take data protection seriously. OjoosCo Ltd is registered with the
        UK Information Commissioner&rsquo;s Office (ICO) and complies fully
        with UK GDPR and the Data Protection Act 2018.
        <br />
        Your data is encrypted, stored securely, and never sold or shared with
        third parties for advertising purposes. You can read our full Privacy
        Policy for details.
      </>
    ),
  },
  {
    question: "What happens to my biometric data after verification?",
    answer: (
      <>
        Your biometric data (the facial scan used during verification) is
        processed by our third-party provider and our internal team and is
        deleted immediately after the verification check is complete. OjoosCo
        Ltd does not store your biometric data. Your ID document image is
        deleted within 30 days of successful verification.
      </>
    ),
  },
  {
    question:
      "Is my sexual orientation and relationship preference data kept private?",
    answer: (
      <>
        Absolutely. Any sensitive information you share on your profile,
        including sexual orientation or relationship preferences, is treated
        as special category data under UK GDPR, which carries the highest
        level of legal protection.
        <br />
        This data is never shared with third parties for marketing purposes,
        and it is only used to improve your matches on the platform. You can
        withdraw your consent for this processing at any time via your account
        settings.
      </>
    ),
  },
  {
    question: "Can I delete my account and data?",
    answer: (
      <>
        Yes, at any time. You can delete your account from the app&rsquo;s
        Settings menu. When you do, your profile is removed immediately, and
        your personal data is deleted in line with our retention policy.
        <br />
        Some data may be retained for a limited period when required by law —
        for example, financial transaction records. Full details are in our
        Privacy Policy.
      </>
    ),
  },
  // Subscriptions and Pricing
  {
    question: "Is Xparience free to use?",
    hidden: true,
    answer: (
      <>
        Xparience offers a free tier that gives you access to core features,
        including profile creation, matches, wellbeing resources, and
        interest-based groups. Premium tiers unlock additional features,
        including virtual dates, conversation assistants, and access to our
        Elite human-assisted matchmaking and coaching services.
      </>
    ),
  },
  {
    question: "How do I cancel my subscription?",
    hidden: true,
    answer: (
      <>
        You can cancel your subscription at any time from the app&rsquo;s
        Settings menu. Cancellation takes effect at the end of your current
        billing period. You will continue to have access to premium features
        until then. We do not charge cancellation fees.
      </>
    ),
  },
  {
    question: "Do you offer refunds?",
    hidden: true,
    answer: (
      <>
        We do not offer refunds for unused portions of a subscription period,
        except where required by UK consumer law. If you believe you are
        entitled to a refund or have been charged in error, please contact us
        at support@xparience.com, and we will be happy to help.
      </>
    ),
  },
  // Support
  {
    question: "How do I contact Xparience?",
    answer: (
      <>
        You can reach our support team at support@xparience.com. We aim to
        respond to all enquiries within 2 business days.
        <br />
        For data protection or privacy requests, you can also contact us at
        support@xparience.com.
      </>
    ),
  },
  {
    question: "I have a complaint — what should I do?",
    answer: (
      <>
        We are sorry to hear that. Please contact us at support@xparience.com
        with as much detail as possible, and we will do our best to resolve
        things quickly. If you are not satisfied with our response, you have
        the right to escalate your complaint to the UK Information
        Commissioner&rsquo;s Office (ico.org.uk) for data protection matters,
        or to seek legal advice.
      </>
    ),
  },
  {
    question: "Is Xparience available in languages other than English?",
    answer: (
      <>
        Currently, Xparience is available only in English. We may expand to
        additional languages as we grow.
      </>
    ),
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="bg-[#f5f7f9] px-5 py-16 sm:px-8 sm:py-24">
      <h2 className="font-heading text-center text-3xl font-extrabold tracking-tight text-[#1f4f63] sm:text-4xl">
        Frequently Asked Questions
      </h2>
      <p className="mt-4 text-center text-base text-slate-600 sm:text-lg">
        Simple answers to common curiosities about the Xparience journey.
      </p>

      <Accordion
        type="single"
        collapsible
        defaultValue="faq-0"
        className="mx-auto mt-12 w-full max-w-4xl gap-6"
      >
        {FAQS.filter((faq) => !faq.hidden).map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="rounded-3xl border-none bg-[#eff1f4] px-8 not-last:border-none sm:px-9"
          >
            <AccordionTrigger className="py-7 text-lg font-bold text-[#17546d] hover:no-underline sm:text-xl [&_[data-slot=accordion-trigger-icon]]:size-5 [&_[data-slot=accordion-trigger-icon]]:text-[#17546d]">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="pb-8 pt-1 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
