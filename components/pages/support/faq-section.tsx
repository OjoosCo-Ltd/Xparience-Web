import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "Who is Xparience for?",
    answer: (
      <>
        Xparience is for adults aged 21 and over who are looking for meaningful
        connections, whether that is a long-term relationship, a genuine
        companionship, or simply meeting like-minded people in a respectful
        environment.
        <br />
        If you are tired of superficial swiping and are ready for something
        more intentional, Xparience was built for you.
      </>
    ),
  },
  {
    question: "Where is Xparience available?",
    answer: (
      <>
        Xparience is launching first in the United Kingdom, with early access
        rolling out to waitlist members ahead of the public release.
        <br />
        More regions will follow soon after launch — join the waitlist and
        we&rsquo;ll let you know the moment Xparience arrives where you are.
      </>
    ),
  },
  {
    question: "Can I control who sees my profile?",
    answer: (
      <>
        Yes. Privacy is core to how Xparience works. Your profile is never part
        of an open, endlessly searchable feed — it is only shown to the small
        number of curated matches we introduce you to.
        <br />
        You can also pause your visibility at any time, and safety tools for
        reporting and blocking are always one tap away.
      </>
    ),
  },
  {
    question: "Is Xparience free to use?",
    answer: (
      <>
        Xparience is free to join, and the core experience — matching,
        conversations, and interest-based groups — is free to use.
        <br />
        Premium plans unlock more, like curated virtual date templates and
        advanced well-being tools. Early waitlist members receive special
        launch benefits.
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
        {FAQS.map((faq, i) => (
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
