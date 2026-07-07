"use client";

import Link from "next/link";
import { Search, Rocket, Banknote, Sparkles, ShieldCheck, Headset, UserSearch } from "lucide-react";

const TOPIC_CHIPS = ["Account", "Billing", "Virtual Date", "Security"];

const CATEGORIES = [
  {
    icon: UserSearch,
    tile: "bg-[#a3d4f2] text-[#1f4f63]",
    title: "About Xparience",
    href: "/about",
    body: "Learn what Xparience is and how it works",
  },
  {
    icon: Rocket,
    tile: "bg-[#a3d4f2] text-[#1f4f63]",
    title: "Getting Started",
    href: "/how-it-works",
    body: "Everything you need to begin your journey on Xparience",
  },
  {
    icon: Banknote,
    tile: "bg-[#a3d4f2] text-[#1f4f63]",
    title: "Subscriptions and Pricing",
    href: "/pricing",
    body: "Transparency in every transaction. Manage plans and payments.",
  },
  {
    icon: Sparkles,
    tile: "bg-[#f7d9d2] text-[#1f4f63]",
    title: "Matching and Features",
    href: "/features",
    body: "Master the art of meaningful digital connection and immersive events.",
  },
  {
    icon: ShieldCheck,
    tile: "bg-[#f8d3cf] text-[#c74a3b]",
    title: "Privacy and Safety",
    href: "/safety",
    body: "Your peace of mind is paramount. Report issues and stay secure.",
  },
  {
    icon: Headset,
    tile: "bg-[#dfe2e6] text-[#3d4a52]",
    title: "Support",
    href: "#faq",
    body: "Find help, guidance, and answers to your questions anytime",
  },
];

export function SupportHero() {
  return (
    <section className="bg-[#f5f7f9] px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-20 lg:px-12 lg:pt-24">
      {/* Teal panel */}
      <div
        className="mx-auto w-full max-w-[100rem] rounded-[3rem] bg-cover bg-center px-6 pb-48 pt-20 text-center sm:pt-28 lg:pb-56"
        style={{ backgroundImage: "url('/images/waitlist-bg.png')" }}
      >
        <h1 className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          How can we help?
        </h1>

        {/* Visual only for now — search isn't wired to content yet */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-10 flex w-full max-w-3xl items-center gap-3 rounded-full border border-[#ffffff3e] bg-white/20 px-6 py-4 shadow-lg backdrop-blur-sm"
        >
          <Search className="size-5 shrink-0 text-white/80" />
          <input
            type="search"
            placeholder="Search for answers, guides, or help topics..."
            className="w-full bg-transparent text-base text-white placeholder:text-white/75 focus:outline-none"
          />
        </form>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {TOPIC_CHIPS.map((chip) => (
            <button
              key={chip}
              type="button"
              className="rounded-full bg-[#cfdde6] px-6 py-2.5 text-sm font-semibold text-[#1f4f63] transition-colors hover:bg-white"
            >
              {chip}
            </button>
          ))}
        </div>
      </div>

      {/* Category cards, overlapping the panel bottom */}
      <div className="relative z-10 mx-auto -mt-36 grid w-full max-w-[88rem] gap-6 px-0 sm:grid-cols-2 sm:px-6 lg:-mt-40 lg:grid-cols-3 lg:gap-8 lg:px-10">
        {CATEGORIES.map((category) => (
          <Link
            key={category.title}
            href={category.href}
            className="rounded-[2rem] bg-white px-8 py-10 text-center shadow-sm transition-shadow hover:shadow-md"
          >
            <span
              className={`mx-auto flex size-16 items-center justify-center rounded-2xl ${category.tile}`}
            >
              <category.icon className="size-7" strokeWidth={1.75} />
            </span>
            <h2 className="font-heading mt-6 text-xl font-bold text-[#17546d] sm:text-2xl">
              {category.title}
            </h2>
            <p className="mx-auto mt-3 max-w-xs text-base leading-relaxed text-slate-600">
              {category.body}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
