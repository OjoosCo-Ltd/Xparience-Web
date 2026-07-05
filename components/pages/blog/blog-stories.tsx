"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  "All Stories",
  "Dating Tips",
  "Mental Wellness",
  "Relationship Advice",
  "Technology",
  "Success Stories",
];

const SIDE_POSTS = [
  {
    image: "/images/blog-impressions.png",
    alt: "Two people holding hands across a wooden table",
    category: "Wellness",
    title: "The Psychology of First Impressions",
    description:
      "Why our brains decide in seconds and how to stay open to long-term potential.",
  },
  {
    image: "/images/blog-tribe.png",
    alt: "A group of friends chatting and laughing indoors",
    category: "Connections",
    title: "Finding Your Tribe in a New City",
    description:
      "Practical strategies for building platonic and romantic roots after a move.",
  },
  {
    image: "/images/blog-retreat.png",
    alt: "An illustration of an open book by a window looking out on a forest at dusk",
    category: "Advice",
    title: "The Art of the Solo Retreat",
    description:
      "How stepping back from social noise helps you reconnect with what you truly want.",
  },
];

export function BlogStories() {
  const [active, setActive] = useState("All Stories");

  return (
    <section className="bg-[#f5f7f9]">
      {/* Category filter bar, overlapping the hero above */}
      <div className="relative z-10 mx-auto -mt-10 w-full max-w-336 px-5 sm:px-8">
        <div className="flex gap-2 overflow-x-auto rounded-full bg-white p-2 shadow-lg lg:justify-center [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={cn(
                "shrink-0 rounded-full px-6 py-3 text-[15px] font-semibold transition-colors",
                active === cat
                  ? "bg-[#1f4f63] text-white"
                  : "text-slate-600 hover:text-brand",
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-360 gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_1fr] lg:gap-14 lg:px-12 lg:py-20">
        {/* Featured post */}
        <article className="relative min-h-100 overflow-hidden rounded-[2rem] bg-slate-700 lg:min-h-full">
          <Image
            src="/images/blog-featured.png"
            alt="A couple sharing coffee on a sofa by a sunlit window"
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-black/10" />
          <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
            <span className="inline-block rounded-full bg-[#f3d9e0] px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#8a4a5a]">
              Virtual Dating
            </span>
            <h2 className="font-heading mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Beyond the Screen: How to Build Real Intimacy Online
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              In a world of swipes, discover the intentional steps that turn
              digital matches into profound human connections.
            </p>
            <Link
              href="/blog"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-white transition-opacity hover:opacity-80"
            >
              Read More
              <ArrowRight className="size-4.5" />
            </Link>
          </div>
        </article>

        {/* Side posts */}
        <div className="flex flex-col gap-8">
          {SIDE_POSTS.map((post) => (
            <Link
              key={post.title}
              href="/blog"
              className="group flex gap-5 sm:gap-6"
            >
              <div className="relative size-28 shrink-0 overflow-hidden rounded-2xl bg-slate-300 sm:size-36">
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  sizes="144px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#b8674f]">
                  {post.category}
                </p>
                <h3 className="font-heading mt-2 text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-brand sm:text-2xl">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
