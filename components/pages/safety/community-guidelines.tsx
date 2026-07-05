import type { LucideIcon } from "lucide-react";
import { Ban, BrainCog, Users } from "lucide-react";

const GUIDELINES: {
  icon: LucideIcon;
  title: string;
  body: string;
}[] = [
  {
    icon: Users,
    title: "Inclusive Values",
    body: "Xparience is a home for everyone. Regardless of background, identity, or story, we celebrate the diversity that makes our community vibrant. Any form of discrimination is grounds for immediate removal.",
  },
  {
    icon: BrainCog,
    title: "Emotional Intelligence",
    body: "We encourage meaningful, deep interactions. This means respecting boundaries, practicing active listening, and communicating with intentionality and grace.",
  },
  {
    icon: Ban,
    title: "Trust",
    body: "Everyone on Xparience is who they say they are. Every member completes a two-step identity verification: a government ID check and a live face match before they can connect with anyone. It takes a few minutes and it means that when you show up, you are in good company.",
  },
];

export function CommunityGuidelines() {
  return (
    <section className="bg-[#eaedf1] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.6fr] lg:items-center lg:gap-16 lg:px-12">
        {/* Left: heading, intro, zero-tolerance note */}
        <div>
          <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Our Community <br className="hidden lg:block" />
            Guidelines
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
            These pillars define the essence of Xparience. By joining, you agree
            to uphold these values for yourself and others.
          </p>

          <div className="mt-10 rounded-r-2xl border-l-4 border-[#8a4a3a] bg-[#ded4d2] px-6 py-5">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#6d4038]">
              Zero Tolerance Policy
            </p>
            <p className="mt-2 text-base leading-relaxed text-[#8a5548]">
              We maintain a strict stance against harassment, hate speech, and
              exclusionary behavior.
            </p>
          </div>
        </div>

        {/* Right: guideline cards */}
        <div className="flex flex-col gap-6 lg:gap-8">
          {GUIDELINES.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] bg-white px-8 py-8 shadow-sm sm:px-10 sm:py-9"
            >
              <div className="flex items-center gap-3 text-brand">
                <item.icon className="size-6" />
                <h3 className="font-heading text-2xl font-bold tracking-tight">
                  {item.title}
                </h3>
              </div>
              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
