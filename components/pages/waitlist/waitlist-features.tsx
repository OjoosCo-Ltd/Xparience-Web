import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  BrainCog,
  MapPin,
  MessageSquare,
  PartyPopper,
  UsersRound,
} from "lucide-react";
import { cn } from "@/lib/utils";

const TRUST_ITEMS = [
  { icon: MapPin, label: "Launching in the UK" },
  { icon: UsersRound, label: "Join 2,500+ Early Members" },
  { icon: BadgeCheck, label: "Verified Community" },
];

const FEATURES: {
  icon: LucideIcon;
  iconBg: string;
  title: string;
  body: string;
}[] = [
  {
    icon: BrainCog,
    iconBg: "bg-[#d9ecf7]",
    title: "Intentional Matching",
    body: "Experience a connection framework that prioritises shared values and long-term compatibility over superficial swipes.",
  },
  {
    icon: MessageSquare,
    iconBg: "bg-[#eef1f4]",
    title: "Conversation Tools",
    body: "Move beyond small talk with intelligent prompts designed to spark meaningful dialogue and reveal true character.",
  },
  {
    icon: PartyPopper,
    iconBg: "bg-[#eef1f4]",
    title: "Curated Date Experiences",
    body: "Seamlessly transition from digital connection to real-world magic with hand-picked local experiences.",
  },
];

export function WaitlistFeatures() {
  return (
    <>
      {/* Trust strip */}
      <div className="border-y border-black/5 bg-[#f7f9fb]">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-4 px-5 py-10 sm:px-8 lg:flex-row lg:gap-0 lg:py-12 lg:px-12">
          {TRUST_ITEMS.map((item, i) => (
            <div key={item.label} className="flex items-center lg:flex-1 lg:justify-center">
              {i > 0 && (
                <span
                  aria-hidden
                  className="mr-10 hidden h-8 w-px bg-black/10 lg:block"
                />
              )}
              <span className="flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.15em] text-[#1c3d50]">
                <item.icon className="size-5 shrink-0" />
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Feature cards */}
      <section className="bg-[#f3f5f7] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-5 sm:px-8 md:grid-cols-3 lg:gap-8 lg:px-12">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[2rem] bg-white/80 p-8 shadow-sm sm:p-10"
            >
              <span
                className={cn(
                  "flex size-14 items-center justify-center rounded-2xl text-[#1c3d50]",
                  feature.iconBg,
                )}
              >
                <feature.icon className="size-6" />
              </span>
              <h2 className="font-heading mt-8 text-2xl font-bold tracking-tight text-slate-900 sm:text-[1.75rem] sm:leading-snug">
                {feature.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
