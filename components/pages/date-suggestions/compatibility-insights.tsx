import type { LucideIcon } from "lucide-react";
import {
  ChartSpline,
  Heart,
  Leaf,
  Music,
  Palette,
  Utensils,
} from "lucide-react";

const TAGS: { icon: LucideIcon; label: string }[] = [
  { icon: Utensils, label: "Loves food experiences" },
  { icon: Leaf, label: "Enjoys nature" },
  { icon: Palette, label: "Creative Spirits" },
  { icon: Music, label: "Classical music fans" },
];

const CARDS = [
  {
    icon: ChartSpline,
    iconWrap: "bg-[#cfe4f5] text-[#1c5d7d]",
    title: "High Sync",
    body: "Your verbal communication styles overlap by 88%, suggesting effortless conversation.",
  },
  {
    icon: Heart,
    iconWrap: "bg-[#e3e6ea] text-slate-600",
    title: "Chemistry",
    body: "Shared values regarding personal growth and wellness create a strong core foundation.",
  },
];

export function CompatibilityInsights() {
  return (
    <section className="bg-[#e9edf1] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
        {/* Left: copy + tags */}
        <div>
          <h2 className="font-heading text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Compatibility Insights
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
            We don&rsquo;t just suggest activities; we reveal the underlying
            &lsquo;why&rsquo; <br className="hidden lg:block" />
            that makes your connection unique.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            {TAGS.map((tag) => (
              <span
                key={tag.label}
                className="inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-base font-medium text-slate-800 shadow-sm"
              >
                <tag.icon className="size-5 text-brand" />
                {tag.label}
              </span>
            ))}
          </div>
        </div>

        {/* Right: insight cards */}
        <div className="grid gap-5 sm:grid-cols-2">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-[1.5rem] border border-black/5 bg-white/60 p-7 shadow-sm"
            >
              <span
                className={`flex size-12 items-center justify-center rounded-2xl ${card.iconWrap}`}
              >
                <card.icon className="size-6" />
              </span>
              <h3 className="font-heading mt-6 text-xl font-bold text-slate-900">
                {card.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
