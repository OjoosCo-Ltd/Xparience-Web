"use client";

import { Search } from "lucide-react";

export function BlogHero() {
  return (
    <section className="bg-brand-radial relative overflow-hidden bg-brand">
      <div className="mx-auto w-full max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-24 lg:py-28">
        <h1 className="font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Insights for Meaningful <br className="hidden sm:block" />
          Connection
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg sm:leading-8">
          Explore the depths of human intimacy, digital wellness, and the art of{" "}
          <br className="hidden lg:block" />
          intentional dating in our curated sanctuary for growth.
        </p>

        {/* Search — visual only for now */}
        <form
          className="mx-auto mt-10 flex max-w-2xl items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-4 backdrop-blur focus-within:border-white/40"
          onSubmit={(e) => e.preventDefault()}
        >
          <Search className="size-5 shrink-0 text-white/70" />
          <input
            type="search"
            placeholder="Search the archive..."
            aria-label="Search the archive"
            className="w-full bg-transparent text-base text-white placeholder:text-white/60 focus:outline-none"
          />
        </form>
      </div>
    </section>
  );
}
