import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function WonderWhy() {
  return (
    <section className="bg-[#f0f2f6] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
        {/* Image + overlaid quote card */}
        <div className="relative mx-auto w-full max-w-md lg:mx-0">
          <div className="relative aspect-4/5 overflow-hidden rounded-[2rem] bg-slate-800 shadow-xl">
            <Image
              src="/images/wonder.png"
              alt="A close profile portrait of a woman wearing an ornate fringed headpiece"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute bottom-5 left-5 right-12 rounded-2xl border border-white/40 bg-white/70 p-6 backdrop-blur-md sm:right-16">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand">
                Experience 01
              </p>
              <p className="font-heading mt-3 text-base font-bold leading-snug text-slate-900">
                &ldquo;The compatibility insights gave us a common language
                before we even met.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div>
          <h2 className="font-heading text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            You Don&rsquo;t Wonder Why
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
            Say goodbye to the &ldquo;why&rdquo; of matching. Our proprietary{" "}
            <br className="hidden lg:block" />
            compatibility insights bridge the gap between curiosity and{" "}
            <br className="hidden lg:block" />
            understanding, revealing the values that connect you from the{" "}
            <br className="hidden lg:block" />
            very first interaction.
          </p>
          <Link
            href="/how-it-works"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-brand transition-opacity hover:opacity-80"
          >
            Learn about our algorithm
            <ArrowRight className="size-4.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
