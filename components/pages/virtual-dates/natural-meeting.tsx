import Image from "next/image";
import { MessagesSquare, ShieldCheck } from "lucide-react";

const POINTS = [
  {
    icon: MessagesSquare,
    title: "No More Awkward Silences",
    body: "You've already built a library of shared jokes and experiences before the menu even arrives.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Through Familiarity",
    body: "Spend time in a controlled virtual environment to establish trust and comfort at your own pace.",
  },
];

export function NaturalMeeting() {
  return (
    <section className="bg-[#f5f7f9] px-5 pb-16 sm:px-8 sm:pb-24 lg:px-12">
      <div className="mx-auto grid w-full max-w-[100rem] items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Copy */}
        <div>
          <h2 className="font-heading text-4xl font-extrabold tracking-tight text-[#16191c] sm:text-5xl">
            Making The First Meeting <br className="hidden lg:block" />
            Feel More Natural
          </h2>

          <div className="mt-12 space-y-10">
            {POINTS.map((point) => (
              <div key={point.title} className="flex items-start gap-6">
                <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-[#26607a]">
                  <point.icon
                    className="size-7 text-[#a7d3ec]"
                    strokeWidth={1.75}
                  />
                </span>
                <div>
                  <h3 className="font-heading text-xl font-bold text-slate-900 sm:text-2xl">
                    {point.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                    {point.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <Image
          src="/images/natural.png"
          alt="A couple laughing together at a candle-lit bistro table"
          width={912}
          height={912}
          className="mx-auto w-full max-w-160 rounded-[2.5rem] object-cover"
        />
      </div>
    </section>
  );
}
