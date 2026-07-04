"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Heart } from "lucide-react";
import { useLeadForm } from "@/lib/use-lead-form";

const AVATARS = [
  "https://randomuser.me/api/portraits/women/72.jpg",
  "https://randomuser.me/api/portraits/men/14.jpg",
  "https://randomuser.me/api/portraits/men/78.jpg",
];

export function HowItWorksHero() {
  const { status, handleSubmit } = useLeadForm("how-it-works-hero");

  return (
    <section
      className="bg-cover bg-center"
      style={{ backgroundImage: "url('/images/different.png')" }}
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:px-12 lg:py-24">
        {/* Copy */}
        <div>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/50 bg-white/20 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-[#1f5063]">
            <span className="size-1.5 rounded-full bg-[#1f5063]" />
            New Standard for Intentional Connection
          </span>

          <h1 className="font-heading mt-10 text-4xl font-extrabold leading-[1.18] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            <span className="text-[#16191c]">Ready to Experience</span>{" "}
            <br className="hidden sm:block" />
            <span className="text-[#1f4f63]">Something Different?</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            Escape the cycle of superficial scrolling. Join a space designed{" "}
            <br className="hidden lg:block" />
            for depth, intentionality, and meaningful human connection.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <input
              name="email"
              type="email"
              required
              placeholder="Enter your email address"
              className="w-full max-w-95 rounded-full bg-white px-6 py-4 text-base text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/70"
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="shrink-0 rounded-2xl bg-[#1f4f63] px-8 py-4 font-semibold text-white shadow-md transition-colors hover:bg-[#193f4f] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "submitting" ? "Joining…" : "Join Waitlist"}
            </button>
          </form>
          {status === "success" ? (
            <p className="mt-4 text-sm font-semibold text-[#1f4f63]">
              Thanks — you&rsquo;re on the list! We&rsquo;ll be in touch soon.
            </p>
          ) : null}
          {status === "error" ? (
            <p className="mt-4 text-sm font-semibold text-[#c0392b]">
              Something went wrong. Please try again.
            </p>
          ) : null}

          <Link
            href="#how"
            className="mt-10 inline-flex items-center gap-2 font-bold text-[#1f4f63] transition-opacity hover:opacity-75"
          >
            See How It Works
            <ArrowDown className="size-5" />
          </Link>

          {/* Social proof */}
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {AVATARS.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt=""
                  width={44}
                  height={44}
                  className="size-11 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <p className="text-base text-slate-700">
              Join 2,400+ others already in queue
            </p>
          </div>
        </div>

        {/* Visual with glass overlay card */}
        <div className="relative mx-auto w-full max-w-135">
          <Image
            src="/images/international.png"
            alt="A couple laughing together at a table in warm sunlight"
            width={864}
            height={900}
            priority
            className="h-auto w-full"
          />
          <div className="absolute inset-x-5 bottom-8 flex items-center gap-5 rounded-2xl bg-white/75 p-5 backdrop-blur-md sm:inset-x-8">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white">
              <Heart className="size-5 fill-[#1f4f63] text-[#1f4f63]" />
            </span>
            <div>
              <p className="font-heading text-lg font-bold text-slate-900">
                Intentional Matching
              </p>
              <p className="text-sm text-slate-700 sm:text-base">
                Prioritizing values over visuals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
