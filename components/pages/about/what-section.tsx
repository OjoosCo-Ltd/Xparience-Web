"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// Card tilts and phone frames are baked into the PNGs.
const CARDS = [
  {
    src: "/images/what3.png",
    width: 584,
    height: 983,
    className: "left-0 top-[9%] z-0 w-[58%]",
  },
  {
    src: "/images/what2.png",
    width: 644,
    height: 976,
    className: "right-0 top-[11%] z-0 w-[59%]",
  },
  {
    src: "/images/what1.png",
    width: 679,
    height: 1090,
    className: "left-1/2 top-0 z-10 w-[66%] -translate-x-1/2",
  },
];

function Strike({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-bold uppercase text-[#1f5063] line-through decoration-[#1f5063] decoration-2">
      {children}
    </span>
  );
}

export function WhatSection() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const startFloat = () => {
        gsap.utils.toArray<HTMLElement>(".what-card").forEach((card, i) => {
          gsap.to(card, {
            y: i % 2 === 0 ? -10 : 10,
            duration: 2.4 + i * 0.5,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          });
        });
      };

      gsap.from(".what-card", {
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
    <section ref={scope} className="bg-[#f5f7f9] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-[100rem] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
        {/* Card stack */}
        <div className="relative mx-auto aspect-[0.85] w-full max-w-175">
          {CARDS.map((card) => (
            <div
              key={card.src}
              className={`what-card absolute ${card.className}`}
            >
              <Image
                src={card.src}
                alt=""
                width={card.width}
                height={card.height}
                className="h-auto w-full"
              />
            </div>
          ))}
        </div>

        {/* Copy */}
        <div>
          <h2 className="font-heading text-4xl font-extrabold uppercase tracking-tight text-slate-900 sm:text-5xl">
            What Xparience Is
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600 sm:text-xl sm:leading-9">
            <p>
              This is not <Strike>Swiping</Strike>.
            </p>
            <p>
              This is not an <Strike>Endless Choice</Strike>.
            </p>
            <p>
              This is not <Strike>Dating</Strike> as you know it.
            </p>
            <p>
              Xparience is designed around one thing:{" "}
              <span className="font-bold uppercase text-[#1f5063]">
                Alignment
              </span>
              . When you join, you&rsquo;re not browsing strangers.
              You&rsquo;re understood first.
            </p>
            <p>Your values. Your lifestyle. Your boundaries.</p>
            <p>
              The things you need and the things you won&rsquo;t compromise on.
              <br />
              From there, we introduce you to a small number of people each day
              who genuinely fit.
            </p>
          </div>

          <Link
            href="/waitlist"
            className="mt-10 inline-block rounded-full bg-[#1f4f63] px-8 py-3.5 font-semibold text-white shadow-md transition-colors hover:bg-[#193f4f]"
          >
            Join the Waitlist
          </Link>
        </div>
      </div>
    </section>
  );
}
