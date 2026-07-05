"use client";

import { Search } from "lucide-react";

export function ArchiveHero() {
  return (
    <section className="bg-[#f5f7f9] px-5 pb-16 pt-24 text-center sm:pb-20 sm:pt-32">
      <h1 className="font-heading text-5xl font-extrabold tracking-tight text-[#1f4f63] sm:text-6xl lg:text-7xl">
        The Archive
      </h1>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-700 sm:text-xl sm:leading-9">
        A curated collection of wisdom, stories, and insights. Explore years{" "}
        <br className="hidden lg:block" />
        of deep dives into human connection, mental well-being, and the art{" "}
        <br className="hidden lg:block" />
        of intentional living.
      </p>

      {/* Search — visual only for now */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="mx-auto mt-14 flex w-full max-w-4xl items-center gap-4 rounded-full bg-[#eef0f3] px-7 py-5"
      >
        <Search className="size-5 shrink-0 text-slate-500" />
        <input
          type="search"
          placeholder="Search for topics, articles, or keywords..."
          aria-label="Search the archive"
          className="w-full bg-transparent text-base text-slate-700 placeholder:text-slate-400 focus:outline-none sm:text-lg"
        />
      </form>
    </section>
  );
}
