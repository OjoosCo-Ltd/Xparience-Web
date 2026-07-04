import Image from "next/image";
import { MessagesSquare, Sparkles, Users } from "lucide-react";

const FEATURES = [
  {
    icon: Users,
    iconBg: "bg-[#cfe7f7]",
    title: "Shared Experiences",
    body: "Curated virtual dates and activities that break the ice through meaningful collaboration.",
  },
  {
    icon: MessagesSquare,
    iconBg: "bg-[#cfe4f7]",
    title: "Interest Based Groups",
    body: "Join interest-based groups and meet like minded people that enjoy the things you do",
  },
  {
    icon: Sparkles,
    iconBg: "bg-[#fbdcd8]",
    title: "Emotional Well-being",
    body: "A mindful approach to dating designed to reduce burnout and celebrate individual authenticity.",
  },
];

export function SharedSection() {
  return (
    <section className="bg-[#f7f9fb] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-[100rem] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
        {/* Feature cards */}
        <div className="space-y-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="flex items-start gap-6 rounded-3xl bg-[#eff1f4] p-7 sm:p-8"
            >
              <span
                className={`flex size-14 shrink-0 items-center justify-center rounded-2xl ${feature.iconBg}`}
              >
                <feature.icon className="size-6 text-[#1f5063]" strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="font-heading text-xl font-bold text-[#17546d] sm:text-2xl">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-slate-600 sm:text-lg">
                  {feature.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Image */}
        <Image
          src="/images/shared.png"
          alt="Shadow of a couple making a heart shape with their hands"
          width={696}
          height={624}
          className="mx-auto w-full max-w-160 rounded-3xl object-cover"
        />
      </div>
    </section>
  );
}
