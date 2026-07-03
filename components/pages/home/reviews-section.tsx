"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const UNSPLASH = "?auto=format&fit=crop&w=540&h=540&q=80";

const TESTIMONIALS = [
  {
    quote:
      "“The ‘Watch Together’ feature actually feels like we’re on the same couch. No lag, just pure connection.”",
    name: "Marcus & Sarah",
    attribution:
      "Matched during the early beta and eight months in — their first date was a film night, three time zones apart.",
    image: "/images/review1.png",
  },
  {
    quote:
      "“The ‘Watch Together’ feature actually feels like we’re on the same couch. No lag, just pure connection.”",
    name: "Marcus & Sarah",
    attribution:
      "Matched during the early beta and eight months in — their first date was a film night, three time zones apart.",
    image: "/images/review2.png",
  },
  {
    quote:
      "“The conversation prompts made our first chat feel easy. No awkward openers, just real talk from minute one.”",
    name: "Amara & Josh",
    attribution:
      "Matched over shared wellness goals and met in person two months later.",
    image: `https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2${UNSPLASH}`,
  },
  {
    quote:
      "“We shopped for our first apartment pieces on a virtual date. It sounds odd until you try it — then it just makes sense.”",
    name: "Priya & Daniel",
    attribution:
      "Long-distance for six months before closing the gap; the shared wishlist moved in with them.",
    image: `https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91${UNSPLASH}`,
  },
  {
    quote:
      "“Xparience made slowing down feel exciting. Every date had intention behind it, and it showed.”",
    name: "Elena & Chris",
    attribution:
      "Both done with swipe culture — they credit the pacing tools for their first real connection.",
    image: `https://images.unsplash.com/photo-1463453091185-61582044d556${UNSPLASH}`,
  },
];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof TESTIMONIALS)[number];
}) {
  return (
    <div className="flex items-center">
      {/* Circular photo overlapping the card's left edge */}
      <div className="relative z-10 -mr-16 size-44 shrink-0 overflow-hidden rounded-full border-8 border-white shadow-lg sm:-mr-24 sm:size-64 sm:border-[12px] lg:size-72">
        <Image
          src={testimonial.image}
          alt=""
          fill
          sizes="288px"
          className="object-cover"
        />
      </div>

      <div className="w-[62vw] max-w-160 rounded-3xl bg-white py-8 pl-24 pr-8 sm:py-10 sm:pl-32 sm:pr-12">
        <div className="font-heading text-6xl font-extrabold leading-none text-slate-700">
          &ldquo;
        </div>
        <p className="text-lg font-medium leading-relaxed text-[#2d6e8d] sm:text-2xl sm:leading-9">
          {testimonial.quote}
        </p>
        <div className="mt-6 flex items-center gap-3 sm:mt-8">
          <span className="h-px w-8 bg-slate-300" />
          <span className="text-sm font-bold uppercase tracking-[0.15em] text-[#1f4f63]">
            {testimonial.name}
          </span>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">
          {testimonial.attribution}
        </p>
      </div>
    </div>
  );
}

export function ReviewsSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const slideTo = (i: number) => {
    const scroller = scrollerRef.current;
    const target = scroller?.children[i] as HTMLElement | undefined;
    target?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  // Track which card is nearest the viewport center as the user scrolls.
  const handleScroll = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const center = scroller.scrollLeft + scroller.clientWidth / 2;
    let nearest = 0;
    let minDistance = Infinity;
    Array.from(scroller.children).forEach((child, i) => {
      const el = child as HTMLElement;
      const distance = Math.abs(el.offsetLeft + el.offsetWidth / 2 - center);
      if (distance < minDistance) {
        minDistance = distance;
        nearest = i;
      }
    });
    setIndex(nearest);
  };

  return (
    <section className="bg-[#262f2f] py-16 sm:py-20 lg:py-24">
      {/* Native scroll-snap slider: the active card shows in full and the
          next one is cut off at the screen edge until the user swipes. */}
      <div
        ref={scrollerRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory gap-10 overflow-x-auto pl-16 pr-5 sm:gap-16 sm:pl-40 sm:pr-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {TESTIMONIALS.map((testimonial, i) => (
          <div key={i} className="shrink-0 snap-center">
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>

      {/* Arrows, bottom-right: back only appears once there's a previous card */}
      <div className="mt-10 flex justify-end gap-3 pr-10 sm:pr-24">
        {index > 0 && (
          <button
            type="button"
            onClick={() => slideTo(index - 1)}
            aria-label="Previous review"
            className="flex size-12 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
          >
            <ArrowLeft className="size-5" />
          </button>
        )}
        {index < TESTIMONIALS.length - 1 && (
          <button
            type="button"
            onClick={() => slideTo(index + 1)}
            aria-label="Next review"
            className="flex size-12 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
          >
            <ArrowRight className="size-5" />
          </button>
        )}
      </div>
    </section>
  );
}
