import Image from "next/image";
import Link from "next/link";
import { CirclePlay } from "lucide-react";

export function LevelUp() {
  return (
    <section className="bg-[#f5f7f9] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto grid w-full max-w-[100rem] items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Copy */}
        <div>
          <h2 className="font-heading text-4xl font-extrabold leading-[1.2] tracking-tight text-[#16191c] sm:text-5xl lg:text-6xl">
            <span className="text-[#1f5063]">Level up</span> your life,{" "}
            <br className="hidden lg:block" />
            and your <span className="text-[#1f5063]">love life,</span>{" "}
            <br className="hidden lg:block" />
            at the <span className="text-[#1f5063]">same time.</span>
          </h2>

          <p className="mt-10 max-w-xl text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            Designed for those weary of the digital noise. We&rsquo;ve built a
            platform where depth isn&rsquo;t just an option, it&rsquo;s the
            foundation of every interaction.
          </p>

          <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-10">
            <Link
              href="/waitlist"
              className="bg-brand-gradient rounded-full px-9 py-4 font-semibold text-white shadow-md transition-opacity hover:opacity-90"
            >
              Begin Your Journey
            </Link>
            <Link
              href="/features"
              className="flex items-center gap-3 font-semibold text-[#16191c] transition-opacity hover:opacity-75"
            >
              <CirclePlay className="size-6 text-[#1f5063]" strokeWidth={2} />
              Explore the Xparience
            </Link>
          </div>
        </div>

        {/* Image with caption overlay */}
        <div className="relative mx-auto w-full max-w-165 overflow-hidden rounded-[2.5rem]">
          <Image
            src="/images/level-up.png"
            alt="A couple talking over coffee in a grand room overlooking the city skyline"
            width={942}
            height={660}
            className="w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/60 to-transparent p-8 pt-16">
            <p className="font-heading text-2xl font-bold text-white sm:text-3xl">
              Curated Experiences
            </p>
            <p className="mt-1 text-sm text-white/85 sm:text-base">
              Beyond the screen, into the soul.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
