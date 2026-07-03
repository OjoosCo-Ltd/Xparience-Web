import Image from "next/image";
import { ShieldCheck } from "lucide-react";

const CHECKLIST = [
  "Guided empathy building exercises",
  "Well-being support tools",
  "Curated Date Suggestions",
];

export function WellbeingSection() {
  return (
    <section className="bg-[#1f4f63] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
        {/* Image */}
        <Image
          src="/images/lasting.png"
          alt="A couple relaxing on a sofa watching TV together"
          width={912}
          height={789}
          className="mx-auto w-full max-w-135 rounded-[2.5rem] object-cover"
        />

        {/* Copy */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white">
            Well-Being
          </p>
          <h2 className="font-heading mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.65rem] lg:leading-tight">
            A Lasting Experience for the Soul
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/85 sm:text-lg sm:leading-8">
            Meaningful connections begin with personal well-being. Xparience
            offers mindfulness tools, wellness assessments, and access to life,
            dating, and wellness coaches to help users grow individually while
            building healthier relationships. Through interest-based groups and
            engaging events, users can connect, learn, and share experiences
            with people who truly align with them.
          </p>

          <ul className="mt-8 space-y-4">
            {CHECKLIST.map((item) => (
              <li key={item} className="flex items-center gap-3 text-white">
                <ShieldCheck className="size-6 shrink-0" strokeWidth={1.75} />
                <span className="text-base sm:text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
