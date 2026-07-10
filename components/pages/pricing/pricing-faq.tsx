import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "Is Xparience free to use?",
    answer:
      "Xparience offers a free tier that gives you access to core features, including profile creation, matches, wellbeing resources, and interest-based groups. Premium tiers unlock additional features, including virtual dates, conversation assistants, and access to our Elite human-assisted matchmaking and coaching services.",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "You can cancel your subscription at any time from the app’s Settings menu. Cancellation takes effect at the end of your current billing period. You will continue to have access to premium features until then. We do not charge cancellation fees.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We do not offer refunds for unused portions of a subscription period, except where required by UK consumer law. If you believe you are entitled to a refund or have been charged in error, please contact us at support@xparience.com, and we will be happy to help.",
  },
];

export function PricingFaq() {
  return (
    <section className="bg-[#f5f7f9] px-5 pb-24 sm:px-8 sm:pb-28">
      <h2 className="font-heading text-center text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        Frequently Asked Questions
      </h2>

      <Accordion
        type="single"
        collapsible
        defaultValue="pricing-faq-0"
        className="mx-auto mt-12 w-full max-w-4xl gap-6"
      >
        {FAQS.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`pricing-faq-${i}`}
            className="rounded-3xl border-none bg-[#f0f2f5] px-8 not-last:border-none sm:px-9"
          >
            <AccordionTrigger className="py-7 text-lg font-bold text-slate-900 hover:no-underline sm:text-xl [&_[data-slot=accordion-trigger-icon]]:size-5 [&_[data-slot=accordion-trigger-icon]]:text-[#1f4f63]">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="pb-8 pt-1 text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
