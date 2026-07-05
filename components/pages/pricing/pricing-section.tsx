"use client";

import { useState } from "react";
import Link from "next/link";
import { CircleCheck } from "lucide-react";
import { cn } from "@/lib/utils";

type Period = "monthly" | "quarterly" | "yearly";

const PERIODS: { key: Period; label: string; discount?: string }[] = [
  { key: "monthly", label: "Monthly" },
  { key: "quarterly", label: "Quarterly" },
  { key: "yearly", label: "Yearly", discount: "(-20%)" },
];

const SUFFIX: Record<Period, string> = {
  monthly: "/month",
  quarterly: "/quarter",
  yearly: "/year",
};

const PLANS = [
  {
    name: "Free",
    description: <>Begin your journey into deeper connection.</>,
    prices: { monthly: "£0", quarterly: "£0", yearly: "£0" },
    features: [
      "Basic digital profile",
      "5 connection invites / week",
      "Well-Being space",
      "Well-being space community",
      "Ads shown",
    ],
    cta: "Join Free",
    highlighted: false,
    buttonStyle: "bg-[#e4e7eb] text-slate-800 hover:bg-slate-300",
  },
  {
    name: "Basic",
    description: <>Step things up in your voyage for intimacy</>,
    prices: { monthly: "£14.99", quarterly: "£35", yearly: "£130" },
    features: [
      "Virtual dates",
      "6-9 connection invites / week",
      "Tone Enhancer",
      "Conversation Deepener (5 / wk)",
      "Ads shown",
    ],
    cta: "Choose Basic",
    highlighted: false,
    buttonStyle: "bg-[#e4e7eb] text-slate-800 hover:bg-slate-300",
  },
  {
    name: "Premium",
    description: <>Elevate your search for intimacy.</>,
    prices: { monthly: "£29.99", quarterly: "£80", yearly: "£310" },
    features: [
      "10+ connection invites / week",
      "Virtual dates",
      "Unlimited Tone Enhancer",
      "Conversation Deepener (10 / wk)",
      "The full experience, ad-free.",
    ],
    cta: "Upgrade Now",
    highlighted: true,
    buttonStyle: "bg-brand-gradient text-white hover:opacity-90",
  },
  {
    name: "Elite",
    description: (
      <>
        The ultimate experience. <br className="hidden lg:block" />
        including a real human in your corner
      </>
    ),
    prices: { monthly: "£39.99", quarterly: "£110", yearly: "£420" },
    features: [
      "All Premium features",
      "VIP curated experiences",
      "1-on-1 coaching session / month",
      "Personal human matchmaker",
    ],
    cta: "Go Exclusive",
    highlighted: false,
    buttonStyle: "bg-[#16191c] text-white hover:bg-black",
  },
];

export function PricingSection() {
  const [period, setPeriod] = useState<Period>("monthly");

  return (
    <section className="bg-[#f5f7f9] px-5 pb-20 pt-20 sm:px-8 sm:pb-24 sm:pt-24 lg:px-12">
      {/* Hero */}
      <div className="text-center">
        <span className="inline-block rounded-full bg-[#bfe0f2] px-5 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#1f4f63]">
          Premium Access
        </span>
        <h1 className="font-heading mt-8 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Simple, Transparent Pricing for{" "}
          <br className="hidden sm:block" />
          <span className="text-[#1f4f63]">Deeper Connections</span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
          Unlock intentional tools and exclusive environments designed to
          transcend <br className="hidden lg:block" />
          the scroll and foster genuine human intimacy.
        </p>

        {/* Billing period toggle */}
        <div className="mt-10 inline-flex rounded-full bg-[#e8eaee] p-1.5">
          {PERIODS.map(({ key, label, discount }) => (
            <button
              key={key}
              type="button"
              onClick={() => setPeriod(key)}
              className={cn(
                "rounded-full px-6 py-2.5 text-sm font-semibold transition-colors sm:px-8 sm:text-base",
                period === key
                  ? "bg-white text-[#1f4f63] shadow-sm"
                  : "text-slate-600 hover:text-slate-900",
              )}
            >
              {label}
              {discount && (
                <span className="ml-1.5 font-bold text-[#b97718]">
                  {discount}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Plan cards */}
      <div className="mx-auto mt-20 grid w-full max-w-[96rem] items-stretch gap-6 sm:grid-cols-2 lg:mt-28 xl:grid-cols-4">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "relative flex flex-col rounded-[2rem] p-8 sm:p-9",
              plan.highlighted
                ? "border-2 border-[#1f4f63] bg-white lg:-mt-8 lg:-mb-4"
                : "bg-[#eef0f4]",
            )}
          >
            {plan.highlighted && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#1f4f63] px-6 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white">
                Most Popular
              </span>
            )}

            <h2 className="font-heading text-2xl font-bold text-slate-900 sm:text-[1.6rem]">
              {plan.name}
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
              {plan.description}
            </p>

            <p className="mt-8">
              <span
                className={cn(
                  "font-heading text-5xl font-extrabold tracking-tight",
                  plan.highlighted ? "text-[#1f4f63]" : "text-slate-900",
                )}
              >
                {plan.prices[period]}
              </span>
              <span className="ml-1 text-slate-500">{SUFFIX[period]}</span>
            </p>

            <ul className="mb-10 mt-8 space-y-4">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-[15px] text-slate-700"
                >
                  {plan.highlighted ? (
                    <CircleCheck className="size-5 shrink-0 fill-[#1f4f63] stroke-white" />
                  ) : (
                    <CircleCheck
                      className="size-5 shrink-0 text-slate-700"
                      strokeWidth={1.75}
                    />
                  )}
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href="/waitlist"
              className={cn(
                "mt-auto block rounded-full py-3.5 text-center font-semibold transition-all",
                plan.buttonStyle,
              )}
            >
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
