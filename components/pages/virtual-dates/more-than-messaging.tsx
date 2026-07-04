import { BrainCog, Heart, Sparkles } from "lucide-react";

const CARDS = [
  {
    icon: BrainCog,
    title: "Discover Dynamics",
    body: "See how you solve problems, laugh, and navigate shared spaces before the first handshake.",
  },
  {
    icon: Heart,
    title: "Build Comfort",
    body: "Familiar voices and shared laughs turn “strangers” into “someone I’m excited to see again.”",
  },
  {
    icon: Sparkles,
    title: "Curated Context",
    body: "Skip the small talk with activities designed to reveal personality and genuine compatibility.",
  },
];

export function MoreThanMessaging() {
  return (
    <section className="bg-[#2e6380] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <h2 className="font-heading text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
        More Than Just Messaging
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-white/85 sm:text-lg sm:leading-8">
        Texting is a prologue; shared experiences are the story. We facilitate
        moments that create genuine familiarity, significantly reducing the
        pressure of that first in-person meeting.
      </p>

      <div className="mx-auto mt-14 grid w-full max-w-[100rem] gap-8 md:grid-cols-3 lg:gap-12">
        {CARDS.map((card) => (
          <div
            key={card.title}
            className="rounded-3xl bg-[#f2f4f6] px-8 py-12 text-center sm:px-10"
          >
            <card.icon
              className="mx-auto size-9 text-[#1f4f63]"
              strokeWidth={1.75}
            />
            <h3 className="font-heading mt-6 text-2xl font-bold text-slate-900">
              {card.title}
            </h3>
            <p className="mx-auto mt-4 max-w-sm text-base leading-relaxed text-slate-600">
              {card.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
