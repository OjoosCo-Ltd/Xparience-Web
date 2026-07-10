import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ShrinkToFit() {
  return (
    <section className="bg-[#f2f4f8] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
        {/* Copy */}
        <div>
          <h2 className="font-heading text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            You Don&rsquo;t Shrink to Fit
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
            Standard dating apps force you into tiny boxes. Xparience celebrates
            the nuances of your personality with prompts designed to evoke
            storytelling, not just data points.
          </p>
          <Link
            href="/how-it-works"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-brand transition-opacity hover:opacity-80"
          >
            Discover member prompts
            <ArrowRight className="size-4.5" />
          </Link>
        </div>

        {/* Prompt card artwork */}
        <div className="w-full">
          <Image
            src="/images/emotional.png"
            alt="An example member prompt about emotional intelligence and the depth it reveals"
            width={1104}
            height={856}
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
