import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { BadgeCheck, Handshake, ShieldCheck } from "lucide-react";

const TIPS: {
  icon: LucideIcon;
  iconColor: string;
  title: string;
  body: string;
}[] = [
  {
    icon: ShieldCheck,
    iconColor: "text-[#8a4a3a]",
    title: "Protect Information",
    body: "Avoid sharing sensitive details like your home address, financial info, or workplace until trust is firmly established.",
  },
  {
    icon: Handshake,
    iconColor: "text-[#2d6e8d]",
    title: "Respect Boundaries",
    body: "Always ask before moving a conversation to other platforms. Respecting a 'no' is the foundation of digital etiquette.",
  },
  {
    icon: BadgeCheck,
    iconColor: "text-[#2d6e8d]",
    title: "Verify Connections",
    body: "Look for the verification badge on profiles. It signals that our team has confirmed the user's authentic identity.",
  },
];

export function SafetyTips() {
  return (
    <section className="bg-[#f5f7fa] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <h2 className="font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Practical Safety Tips
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3 lg:mt-12 lg:gap-8">
          {TIPS.map((tip) => (
            <div
              key={tip.title}
              className="rounded-[1.75rem] border border-slate-200/80 bg-white/40 p-8 sm:p-9"
            >
              <tip.icon className={`size-8 ${tip.iconColor}`} />
              <h3 className="font-heading mt-8 text-2xl font-bold tracking-tight text-slate-900">
                {tip.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {tip.body}
              </p>
            </div>
          ))}
        </div>

        {/* CTA panel */}
        <div className="mt-12 rounded-[2rem] bg-[#1f5069] px-6 py-16 text-center sm:px-12 sm:py-20 lg:mt-16">
          <h3 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Still have questions?
          </h3>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg sm:leading-8">
            Our dedicated safety advocates are available 24/7 to provide guidance
            and <br className="hidden sm:block" />
            support whenever you need it.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/support"
              className="w-full rounded-full bg-white px-9 py-4 text-center text-base font-semibold text-brand shadow-md transition-colors hover:bg-slate-100 sm:w-auto"
            >
              Contact Support
            </Link>
            <Link
              href="/safety"
              className="w-full rounded-full border border-white/40 px-9 py-4 text-center text-base font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              Safety FAQ
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
