"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CARDS = [
  {
    image: "/images/boat-cruise.png",
    eyebrow: "Luxury & Leisure Experiences",
    title: "Boat Cruise",
    alt: "Cruise ships docked at a harbour under dramatic clouds",
  },
  {
    image: "/images/outdoor-outing.jpg",
    eyebrow: "Nature Escape",
    title: "Relaxed Outdoor Outing",
    alt: "A green park with trees under a clear blue sky",
  },
  {
    image: "/images/polo-game.jpg",
    eyebrow: "Social & Sporting Events",
    title: "Polo Game",
    alt: "Two polo players on horseback competing for the ball",
  },
];

export function CuratedDates() {
  // Which card is expanded. Defaults to the first; hover moves it.
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#f3f5f7] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2d6e8d]">
          The Xparience Edge
        </p>
        <h2 className="font-heading mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          AI-Curated Date Experiences
        </h2>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Move from digital chat to real-world magic with personalised
            activity suggestions tailored to your mutual interests and location.
          </p>
          <Link
            href="/waitlist"
            className="flex shrink-0 items-center gap-1 font-semibold text-brand transition-opacity hover:opacity-80"
          >
            Discover More
            <ChevronRight className="size-4.5" />
          </Link>
        </div>

        {/* Expanding card row: the active card grows to full width, the others
            collapse. Hover sets the active card on desktop; on mobile the cards
            simply stack at full width. */}
        <div
          className="mt-10 flex flex-col gap-4 lg:mt-14 lg:flex-row lg:gap-5"
          onMouseLeave={() => setActive(0)}
        >
          {CARDS.map((card, i) => (
            <div
              key={card.title}
              onMouseEnter={() => setActive(i)}
              className={cn(
                "relative aspect-[16/11] overflow-hidden rounded-[1.75rem] bg-slate-300 transition-[flex-grow] duration-500 ease-out lg:aspect-auto lg:h-[470px]",
                active === i ? "lg:grow-[3]" : "lg:grow",
              )}
            >
              <Image
                src={card.image}
                alt={card.alt}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
              {/* darkens toward the bottom so the copy stays readable */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#6fd3c0]">
                  {card.eyebrow}
                </p>
                <h3 className="font-heading mt-2 text-2xl font-semibold text-white sm:text-[1.75rem]">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
