import Image from "next/image";
import { BrainCog, CircleCheck } from "lucide-react";

const POINTS = [
  {
    title: "Authentic Alignment",
    body: "Our AI understands your values, lifestyle, and communication style to find matches that resonate beyond the surface.",
  },
  {
    title: "Mindful Interaction",
    body: "Thoughtful prompts and structured experiences replace infinite swiping with focused, quality engagement.",
  },
  {
    title: "Safety & Sanctuary",
    body: "A verified, private community where respect is mandatory and your data is protected with high-tier encryption.",
  },
];

export function DesignedForWellbeing() {
  return (
    <section className="bg-[#e5eff3] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
        {/* Copy */}
        <div>
          <span className="flex size-16 items-center justify-center rounded-full bg-[#d3e2ea]">
            <BrainCog className="size-7 text-[#1f5063]" strokeWidth={1.75} />
          </span>

          <h2 className="font-heading mt-8 text-3xl font-bold tracking-tight text-[#16191c] sm:text-4xl lg:text-3xl lg:leading-[1.3]">
            <span className="lg:whitespace-nowrap">
              Designed for Well-being, Built for
            </span>{" "}
            <br className="hidden lg:block" />
            Meaning.
          </h2>

          <div className="mt-10 space-y-8">
            {POINTS.map((point) => (
              <div key={point.title} className="flex items-start gap-4">
                <CircleCheck className="mt-0.5 size-6 shrink-0 fill-[#1f4f63] stroke-white" />
                <div>
                  <h3 className="font-heading text-lg font-bold text-slate-900">
                    {point.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-slate-600 sm:text-base">
                    {point.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual — phone mockup and NEW MATCH card baked into the PNG */}
        <Image
          src="/images/new-match.png"
          alt="Xparience app on a phone showing daily curated matches, with a new match notification"
          width={1071}
          height={1162}
          className="mx-auto h-auto w-full lg:max-w-none"
        />
      </div>
    </section>
  );
}
