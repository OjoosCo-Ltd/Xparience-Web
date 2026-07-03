import Image from "next/image";
import Link from "next/link";
import { CardFan } from "@/components/pages/home/card-fan";

const AVATARS = [
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
];

export function Hero() {
  return (
    // min-h = viewport minus the h-16 sticky header, so the hero (with the
    // fan pinned via mt-auto) fills exactly the first screen.
    <section className="bg-hero-gradient relative flex min-h-[calc(100svh-4rem)] flex-1 flex-col overflow-hidden">
      {/* Faint background wordmark watermark, rotated 45deg */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[26%] aspect-[180/39] w-[1400px] max-w-none -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-contain bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('/images/hero-label.svg')" }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-5 pt-14 text-center sm:pt-20 lg:pt-24">
        {/* Line breaks forced on desktop (lg+) to match the design; wraps
            naturally on smaller screens. */}
        <h1 className="font-heading text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-white">Where Meaningful</span>{" "}
          <br className="hidden lg:block" />
          <span className="text-brand">Connections</span>{" "}
          <span className="text-white">Meet Mindful</span>{" "}
          <br className="hidden lg:block" />
          <span className="text-brand">Growth.</span>
        </h1>

        <p className="mt-6 max-w-xl text-base text-slate-700 sm:text-lg lg:max-w-2xl">
          Not just another dating app. Xparience is built for people who are{" "}
          <br className="hidden lg:block" />
          done with the noise and ready for something that actually feels right.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <Link
            href="#waitlist"
            className="bg-brand-gradient w-full rounded-full px-8 py-3.5 text-center font-semibold text-white shadow-md transition-opacity hover:opacity-90 sm:w-auto"
          >
            Join the Waitlist
          </Link>
          <Link
            href="#how-it-works"
            className="w-full rounded-full bg-[#f2f2f2] px-8 py-3.5 text-center font-semibold text-slate-800 shadow-sm transition-colors hover:bg-[#e8e8e8] sm:w-auto"
          >
            See How it Works
          </Link>
        </div>

        {/* Social proof */}
        <div className="mt-8 flex items-center gap-3">
          <div className="flex -space-x-3">
            {AVATARS.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt=""
                width={40}
                height={40}
                className="size-9 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>
          <span className="text-sm font-medium text-slate-700">
            Join 5,000+ early explorers
          </span>
        </div>
      </div>

      {/* Card fan — pinned to the bottom edge of the hero, no space below */}
      <div className="relative z-0 mt-auto flex justify-center pt-8 sm:pt-12">
        <CardFan />
      </div>
    </section>
  );
}
