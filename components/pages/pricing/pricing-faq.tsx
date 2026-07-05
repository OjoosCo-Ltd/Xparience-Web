import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "Can I switch plans later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    question: "What are “Premium Experiences”?",
    answer:
      "Premium Experiences are our curated virtual dates — shared activities like watching a film together, planning a meal, shopping, or playing a game in real time. Premium and Elite members get the full set of experience templates, designed to make remote time together feel intimate and intentional.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. Your data is encrypted in transit and at rest, and we never sell your personal information. Xparience is registered with the Information Commissioner’s Office under UK GDPR, and you can request an export or deletion of your data at any time.",
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
