import type { LucideIcon } from "lucide-react";
import { CircleCheck, Sparkles, TrendingUp } from "lucide-react";

const BENEFITS: {
  icon: LucideIcon;
  title: string;
  body: string;
}[] = [
  {
    icon: CircleCheck,
    title: "Reduces Planning Stress",
    body: "Stop debating where to go. Let our AI handle the logistics and reservation scouting, so you can focus on the connection.",
  },
  {
    icon: Sparkles,
    title: "Creates Shared Experiences",
    body: "Move beyond superficial chat. Build lasting memories through thoughtfully selected activities that provoke meaningful dialogue.",
  },
  {
    icon: TrendingUp,
    title: "Improves Compatibility",
    body: "Discover new facets of your partner's personality through experiences designed to challenge and delight you both.",
  },
];

export function DateBenefits() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 md:grid-cols-3 lg:gap-16 lg:px-12">
        {BENEFITS.map((benefit) => (
          <div key={benefit.title}>
            <span className="flex size-16 items-center justify-center rounded-full bg-[#e7ecf1] text-brand">
              <benefit.icon className="size-7" />
            </span>
            <h3 className="font-heading mt-8 text-2xl font-bold tracking-tight text-slate-900">
              {benefit.title}
            </h3>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-slate-600 sm:leading-8">
              {benefit.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
