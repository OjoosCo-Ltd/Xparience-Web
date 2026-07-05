import Image from "next/image";
import Link from "next/link";

export function WellbeingPageHero() {
  return (
    <section className="bg-[#f5f7f9]">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_1.15fr] lg:gap-6 lg:px-12 lg:py-24">
        {/* Copy */}
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1f5063]">
            The Digital Experience
          </p>

          <h1 className="font-heading mt-6 text-5xl font-extrabold leading-[1.12] tracking-tight text-[#16191c] sm:text-6xl lg:text-7xl">
            We&rsquo;re here for <br className="hidden lg:block" />
            the <span className="text-[#1f5063]">spark</span>, the{" "}
            <br className="hidden lg:block" />
            <span className="text-[#1f5063]">flame</span>, and the{" "}
            <br className="hidden lg:block" />
            <span className="text-[#1f5063]">long haul.</span>
          </h1>

          <p className="mt-10 max-w-xl text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            Navigating rejection, processing deep conversations, and fostering
            personal growth shouldn&rsquo;t be done in isolation. Xparience
            provides the emotional tools to help you stay centered.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#explore"
              className="bg-brand-gradient rounded-full px-9 py-4 text-center font-semibold text-white shadow-md transition-opacity hover:opacity-90"
            >
              Explore Well-Being
            </Link>
            <Link
              href="#guide"
              className="rounded-full bg-[#e8eaee] px-9 py-4 text-center font-semibold text-slate-800 transition-colors hover:bg-slate-200"
            >
              Watch the Guide
            </Link>
          </div>
        </div>

        {/* Visual — the "Daily Intent" card is baked into the PNG */}
        <Image
          src="/images/flame.png"
          alt="A calm ocean sunset, with a Daily Intent card reading “I am more than a profile. My value is inherent, and my journey is valid.”"
          width={1023}
          height={1235}
          priority
          className="mx-auto h-auto w-full max-w-165 lg:max-w-none"
        />
      </div>
    </section>
  );
}
