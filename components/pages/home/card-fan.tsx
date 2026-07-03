"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// Ferris-wheel card fan: cards are placed evenly around a full circle and the
// whole wheel spins slowly (GSAP). The container clips everything below the
// visible window, so new cards rise out from one side while old ones sink
// back below the fold — an endless loop. Hovering eases the wheel to a stop;
// leaving eases it back up to speed.

const CARD_COUNT = 14;
const ANGLE_STEP = 360 / CARD_COUNT;
// Distance from wheel center to each card's center, in px (design size).
// Radius + card count set the overlap; ~5 cards sit above the fold.
const RADIUS = 480;
// Seconds per full revolution.
const REVOLUTION_S = 70;

// Free-to-use Unsplash portraits, one per card.
const UNSPLASH_PARAMS = "?auto=format&fit=crop&w=560&h=720&q=80";
const PHOTOS = [
  "photo-1494790108377-be9c29b29330",
  "photo-1507003211169-0a1dd7228f2d",
  "photo-1438761681033-6461ffad8d80",
  "photo-1500648767791-00dcc994a43e",
  "photo-1534528741775-53994a69daeb",
  "photo-1506794778202-cad84cf45f1d",
  "photo-1517841905240-472988babdf9",
  "photo-1524504388940-b1c1722653e1",
  "photo-1539571696357-5a69c17a67c6",
  "photo-1544005313-94ddf0286df2",
  "photo-1547425260-76bcadfb4f2c",
  "photo-1488426862026-3ee34a7d66df",
  "photo-1502685104226-ee32379fefbe",
  "photo-1521119989659-a83eee488004",
].map((id) => `https://images.unsplash.com/${id}${UNSPLASH_PARAMS}`);

function OnlineBadge() {
  return (
    <span className="absolute right-3 top-4 flex items-center gap-1.5 whitespace-nowrap rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-700 shadow-sm">
      <span className="size-1.5 rounded-full bg-brand" />
      Online Now
    </span>
  );
}

export function CardFan() {
  const scope = useRef<HTMLDivElement>(null);
  const wheelRef = useRef<HTMLDivElement>(null);
  const spin = useRef<gsap.core.Tween | null>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }
      spin.current = gsap.to(wheelRef.current, {
        rotation: 360,
        duration: REVOLUTION_S,
        ease: "none",
        repeat: -1,
      });
    },
    { scope },
  );

  // Ease the wheel's speed toward `speed` (1 = full, 0 = stopped) instead of
  // hard-pausing, so hover in/out feels like inertia.
  const rampSpeed = (speed: number) => {
    if (spin.current) {
      gsap.to(spin.current, {
        timeScale: speed,
        duration: 0.6,
        ease: "power2.out",
        overwrite: true,
      });
    }
  };

  return (
    // Clip window: only the top of the wheel is visible.
    <div
      ref={scope}
      className="relative w-full overflow-hidden"
      onMouseEnter={() => rampSpeed(0)}
      onMouseLeave={() => rampSpeed(1)}
    >
      <div className="mx-auto h-44.75 w-full sm:h-59.5 lg:h-74.5">
        <div className="origin-top scale-[0.6] sm:scale-[0.8] lg:scale-100">
          {/* Wheel: a 1100px circle whose center sits below the fold. The
              positioning transform lives on this wrapper so GSAP's rotation
              (which owns `transform` on the inner div) can't cancel it. */}
          <div className="absolute left-1/2 top-30 size-275 -translate-x-1/2">
            <div ref={wheelRef} className="absolute inset-0">
              {Array.from({ length: CARD_COUNT }, (_, i) => (
                <div
                  key={i}
                  className="absolute left-1/2 top-1/2 h-90 w-70 overflow-hidden rounded-[2rem] border border-white/40 bg-linear-to-br from-slate-200 to-slate-400 shadow-xl"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${i * ANGLE_STEP}deg) translateY(-${RADIUS}px)`,
                  }}
                >
                  <Image
                    src={PHOTOS[i % PHOTOS.length]}
                    alt=""
                    fill
                    sizes="280px"
                    className="object-cover"
                  />
                  {/* darkens toward the bottom of the card */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/15 to-transparent" />
                  <OnlineBadge />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
