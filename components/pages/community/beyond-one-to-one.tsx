import Image from "next/image";
import { CalendarDays } from "lucide-react";

const TAGS = [
  { label: "Mindfulness & Flow", className: "bg-[#e6d3cd] text-[#8a4a3a]" },
  { label: "Future Tech", className: "bg-[#d3e6f2] text-[#2d6e8d]" },
  { label: "Culinary Arts", className: "bg-[#daecf7] text-[#2d6e8d]" },
];

export function BeyondOneToOne() {
  return (
    <section className="bg-[#f5f7fa] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Beyond the One-to-One
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
            Meaningful connections aren&rsquo;t always romantic. Our circles and
            curated <br className="hidden lg:block" />
            events allow you to find your tribe based on values and shared
            interests.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {/* Interest-Based Circles card */}
          <div className="rounded-[2.5rem] bg-[#eaedf1] p-6 sm:p-8 lg:col-span-2">
            <div className="grid items-center gap-8 sm:grid-cols-2">
              <div>
                <h3 className="font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Interest-Based Circles
                </h3>
                <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
                  Engage in deep-dive forums and passion-led discussions. Our
                  circles are curated to spark intellectual curiosity and
                  emotional depth.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {TAGS.map((tag) => (
                    <span
                      key={tag.label}
                      className={`rounded-full px-4 py-2 text-sm font-semibold ${tag.className}`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative aspect-square w-full overflow-hidden rounded-[2rem] bg-slate-300">
                <Image
                  src="/images/gathering.png"
                  alt="A group of friends lying in a circle, heads together, laughing"
                  fill
                  sizes="(min-width: 640px) 340px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Curated Member Events card */}
          <div className="flex flex-col rounded-[2rem] bg-[#1f5069] p-8 sm:p-10">
            <CalendarDays className="size-8 text-[#9fcfe6]" />
            <h3 className="font-heading mt-6 text-3xl font-extrabold leading-tight tracking-tight text-[#9fcfe6]">
              Curated Member <br className="hidden lg:block" />
              Events
            </h3>

            <div className="mt-8 rounded-2xl bg-white/10 p-6 lg:mt-auto">
              <p className="text-sm text-white/70">Next Saturday</p>
              <p className="font-heading mt-2 text-xl font-bold leading-snug text-white">
                Private Rooftop Jazz &amp; Conversation
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex -space-x-2">
                  <span className="size-8 rounded-full border-2 border-[#1f5069] bg-white" />
                  <span className="size-8 rounded-full border-2 border-[#1f5069] bg-slate-200" />
                  <span className="size-8 rounded-full border-2 border-[#1f5069] bg-slate-300" />
                </div>
                <span className="text-sm font-medium text-white/80">
                  48 attending
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
