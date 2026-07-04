import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function NavigateAlone() {
  return (
    <section className="bg-[#f2f4f8] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
        {/* Illustration */}
        <div className="w-full">
          <Image
            src="/images/navigate-alone.png"
            alt="Illustrations of friends connecting, with a community badge between them"
            width={864}
            height={483}
            className="h-auto w-full"
          />
        </div>

        {/* Copy */}
        <div>
          <h2 className="font-heading text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            You Don&rsquo;t Navigate It Alone
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
            The journey to meaningful connection isn&rsquo;t always simple.{" "}
            <br className="hidden lg:block" />
            Xparience gives you the tools to navigate it with clarity from{" "}
            <br className="hidden lg:block" />
            thoughtful prompts to well-being resources that help you show{" "}
            <br className="hidden lg:block" />
            up at your best.
          </p>
          <Link
            href="/features"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-brand transition-opacity hover:opacity-80"
          >
            Explore our tools
            <ArrowRight className="size-4.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
