import Image from "next/image";
import Link from "next/link";

export function DateHero() {
  return (
    <section className="relative flex-1 overflow-hidden bg-[#eef1f6]">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:px-12 lg:py-24">
        {/* Copy */}
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            AI Concierge
          </p>

          <h1 className="font-heading mt-8 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-slate-900">
              Personalised <br />
              Date Ideas,
            </span>
            <br />
            <span className="text-brand">
              Thoughtfully <br />
              Curated for Two
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
            Our intelligent algorithm analyses your deep-seated interests,
            personality nuances, and shared chemistry to architect real-world
            experiences that bridge the digital gap.
          </p>

          <div className="mt-10 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-5">
            <Link
              href="/waitlist"
              className="w-full rounded-full bg-[#1f5069] px-10 py-4 text-center text-base font-semibold text-white shadow-md transition-colors hover:bg-[#173e4e] sm:w-auto"
            >
              Get Started
            </Link>
            <Link
              href="/features"
              className="w-full rounded-full bg-[#e9ebee] px-10 py-4 text-center text-base font-semibold text-slate-800 shadow-sm transition-colors hover:bg-[#dfe2e6] sm:w-auto"
            >
              How It Works
            </Link>
          </div>
        </div>

        {/* Concierge card artwork */}
        <div className="mx-auto w-full max-w-2xl lg:max-w-none lg:justify-self-end">
          <Image
            src="/images/curated.png"
            alt="AI-curated date suggestions: a Twilight Vineyard Pour match and a Serene Gallery tour recommendation"
            width={999}
            height={935}
            priority
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
