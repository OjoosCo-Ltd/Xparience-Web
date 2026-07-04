import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const EXPERIENCES = [
  {
    image: "/images/movie-night.png",
    title: "Movie Night",
    description: "Watch a film together in real time, from wherever you are.",
    alt: "Four retro TVs showing Disney+, Apple TV+, Netflix, and Prime Video logos",
  },
  {
    image: "/images/shop-together-store.png",
    title: "Shop Together",
    description: "Browse, react, and build a wishlist of things you both love",
    alt: "A couple reading a product label together in a supermarket aisle",
  },
  {
    image: "/images/play-a-game.png",
    title: "Play a Game Together",
    description: "Bond over a shared game, no pressure, just fun.",
    alt: "A couple laughing while playing a video game with controllers",
  },
  {
    image: "/images/plan-a-meal.png",
    title: "Plan a Meal Together",
    description: "Discover your food compatibility and plan something delicious.",
    alt: "A couple having a picnic with pizza and sparkling wine at sunset",
  },
];

export function SharedExperiences() {
  return (
    <section className="bg-[#f5f7f9] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2d6e8d]">
          The Experience
        </p>
        <h2 className="font-heading mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Shared Experiences
        </h2>

        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base text-slate-600 sm:text-lg">
            Synchronized activities that make you forget the screen even
            exists.
          </p>
          <Link
            href="/waitlist"
            className="flex shrink-0 items-center gap-1 font-semibold text-brand transition-opacity hover:opacity-80"
          >
            Explore Virtual Dates
            <ChevronRight className="size-4.5" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-14 lg:gap-8">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.title}
              className="relative aspect-square overflow-hidden rounded-[2rem] bg-slate-300 sm:aspect-[1.01/1]"
            >
              <Image
                src={exp.image}
                alt={exp.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              {/* darkens toward the bottom so the copy stays readable */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <h3 className="font-heading text-2xl font-bold text-white sm:text-[1.75rem]">
                  {exp.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/85 sm:text-base">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
