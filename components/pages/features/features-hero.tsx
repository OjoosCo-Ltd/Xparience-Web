import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export function FeaturesHero() {
  return (
    <section className="relative flex-1 overflow-hidden bg-[#eef1f4]">
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:px-12 lg:py-24">
        {/* Copy + CTAs */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#c9e4f6] px-4 py-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#1c5d7d]">
            <Sparkles className="size-4" />
            Immersive Virtual Dating
          </span>

          <h1 className="font-heading mt-8 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#2a5169] sm:text-5xl lg:text-[4rem]">
            Experience Real <br className="hidden lg:block" />
            Life, Digitally.
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
            Don&rsquo;t just chat. Transform your connection with shared{" "}
            <br className="hidden lg:block" />
            real-time experiences: watch movies, play games, shop,{" "}
            <br className="hidden lg:block" />
            and plan meals together.
          </p>

          <div className="mt-10 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-5">
            <Link
              href="/waitlist"
              className="bg-brand-gradient w-full rounded-full px-9 py-4 text-center text-base font-semibold text-white shadow-md transition-opacity hover:opacity-90 sm:w-auto"
            >
              Start Your Experience
            </Link>
            <Link
              href="#demo"
              className="w-full rounded-full bg-[#e9ebee] px-9 py-4 text-center text-base font-semibold text-slate-800 shadow-sm transition-colors hover:bg-[#dfe2e6] sm:w-auto"
            >
              View Demo
            </Link>
          </div>
        </div>

        {/* Floating feature cards artwork from the design */}
        <div className="mx-auto w-full max-w-md lg:max-w-lg lg:justify-self-end">
          <Image
            src="/images/features.png"
            alt="Xparience shared experiences — movie night, dinner planning, game duel, and shared cart cards"
            width={962}
            height={1025}
            priority
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
