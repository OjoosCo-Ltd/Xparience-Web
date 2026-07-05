import type { LucideIcon } from "lucide-react";
import { Heart, MessagesSquare, ShieldCheck, ShieldUser } from "lucide-react";
import { cn } from "@/lib/utils";

const PILLARS: {
  icon: LucideIcon;
  iconWrap: string;
  title: string;
  body: string;
}[] = [
  {
    icon: Heart,
    iconWrap: "bg-[#cfdde3] text-[#1f4f63]",
    title: "Respectful interactions",
    body: "Our community is built on empathy. We foster connections where every voice is heard with kindness.",
  },
  {
    icon: MessagesSquare,
    iconWrap: "bg-[#d3e6f2] text-[#1c3d50]",
    title: "Secure communication",
    body: "Encrypted messaging ensures your personal stories remain between you and your matches.",
  },
  {
    icon: ShieldUser,
    iconWrap: "bg-[#f3ddd6] text-[#8a4a3a]",
    title: "User privacy",
    body: "You have complete control over what you share and who sees your digital footprints.",
  },
  {
    icon: ShieldCheck,
    iconWrap: "bg-[#cfdde3] text-[#1f4f63]",
    title: "Community moderation",
    body: "Active AI and human moderation working together to keep the experience authentic and safe.",
  },
];

export function SafetyPillars() {
  return (
    <section className="bg-[#f5f7fa] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-6 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:gap-8 lg:px-12">
        {PILLARS.map((pillar) => (
          <div
            key={pillar.title}
            className="rounded-[2rem] bg-[#eef1f5] p-8 sm:p-9"
          >
            <span
              className={cn(
                "flex size-14 items-center justify-center rounded-full",
                pillar.iconWrap,
              )}
            >
              <pillar.icon className="size-6" />
            </span>
            <h3 className="font-heading mt-8 text-2xl font-bold leading-snug text-slate-900">
              {pillar.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {pillar.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
