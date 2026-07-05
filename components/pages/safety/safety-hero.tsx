"use client";

import Image from "next/image";
import { Search } from "lucide-react";

export function SafetyHero() {
  return (
    <section className="relative flex-1 overflow-hidden">
      {/* Misty lake background */}
      <Image
        src="/images/safety-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-24 lg:py-28">
        <span className="inline-block rounded-full bg-[#a9c6d6]/50 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#1c5d7d]">
          Trust &amp; Security
        </span>

        <h1 className="font-heading mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          <span className="text-slate-900">Your Safety is</span>
          <br />
          <span className="text-brand">Our Priority</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          We&rsquo;ve designed Xparience to be a digital sanctuary where human{" "}
          <br className="hidden sm:block" />
          storytelling thrives in a secure, respectful environment.
        </p>

        {/* Visual only for now — not wired to a backend yet */}
        <form
          className="mx-auto mt-10 flex max-w-2xl items-center gap-2 rounded-full bg-white p-2 pl-6 shadow-lg"
          onSubmit={(e) => e.preventDefault()}
        >
          <Search className="size-5 shrink-0 text-slate-400" />
          <input
            type="search"
            placeholder="Search safety topics, guidelines, or help..."
            aria-label="Search safety topics"
            className="w-full bg-transparent text-base text-slate-700 placeholder:text-slate-400 focus:outline-none"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full bg-[#1f4f63] px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-[#173e4e]"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
