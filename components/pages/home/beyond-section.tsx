"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// Layered profile-card stack: front card left, each following card sits
// behind and to the right, slightly lower.
const CARDS = [
  {
    src: "/images/beyond1.png",
    width: 474,
    height: 814,
    className: "left-0 top-[2%] z-30 w-[54%]",
  },
  {
    src: "/images/beyond2.png",
    width: 458,
    height: 814,
    className: "left-[38%] top-[8%] z-20 w-[48%]",
  },
  {
    src: "/images/beyond3.png",
    width: 436,
    height: 811,
    className: "left-[62%] top-[13%] z-10 w-[38%]",
  },
];

export function BeyondSection() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      // Gentle perpetual float, each card on its own rhythm.
      const startFloat = () => {
        gsap.utils.toArray<HTMLElement>(".beyond-card").forEach((card, i) => {
          gsap.to(card, {
            y: i % 2 === 0 ? -10 : 10,
            duration: 2.4 + i * 0.5,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          });
        });
      };

      // Staggered rise-in when the section scrolls into view.
      gsap.from(".beyond-card", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: scope.current,
          start: "top 70%",
        },
        onComplete: startFloat,
      });
    },
    { scope },
  );

  return (
    <section
      ref={scope}
      id="about"
      className="bg-[#f5f7f9] py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
        {/* Card stack */}
        <div className="relative mx-auto aspect-square w-full max-w-135">
          {CARDS.map((card) => (
            <div
              key={card.src}
              className={`beyond-card absolute ${card.className}`}
            >
              <Image
                src={card.src}
                alt=""
                width={card.width}
                height={card.height}
                className="h-auto w-full drop-shadow-xl"
              />
            </div>
          ))}
        </div>

        {/* Copy */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2d6e8d]">
            The Digital Sanctuary
          </p>
          <h2 className="font-heading mt-4 text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Beyond the screen: a better way to navigate life as a pair.
          </h2>
          <div className="mt-6 space-y-2 text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
            <p>
              Most dating apps were built to keep you scrolling. Thousands of
              profiles, a gamified swipe, the same familiar frustration. Not
              because finding someone is impossible, but because the tools were
              never designed to help you find the right someone.
            </p>
            <p>
              Xparience is different. Not louder. Not busier. Just better
              designed; for people who know what they are looking for and want
              a platform that takes that seriously.
            </p>
          </div>
          <Link
            href="#waitlist"
            className="bg-brand-gradient mt-8 inline-block rounded-full px-8 py-3.5 font-semibold text-white shadow-md transition-opacity hover:opacity-90"
          >
            Join the Waitlist
          </Link>
        </div>
      </div>
    </section>
  );
}
