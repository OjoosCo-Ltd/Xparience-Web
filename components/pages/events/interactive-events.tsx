import Image from "next/image";
import { Gamepad2, Play, Users } from "lucide-react";

function AvatarCluster() {
  return (
    <div className="flex items-center">
      <span className="size-8 rounded-full border-2 border-white/80 bg-slate-200" />
      <span className="-ml-2 size-8 rounded-full border-2 border-white/80 bg-slate-300" />
      <span className="-ml-2 size-8 rounded-full border-2 border-white/80 bg-slate-400" />
      <span className="-ml-2 flex size-8 items-center justify-center rounded-full border-2 border-white/80 bg-[#2d6e8d] text-[10px] font-bold text-white">
        +12
      </span>
    </div>
  );
}

export function InteractiveEvents() {
  return (
    <section className="bg-[#f3f5f7] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b8674f]">
          The Experience
        </p>
        <h2 className="font-heading mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Interactive Events
        </h2>
        <p className="mt-4 text-base text-slate-600 sm:text-lg">
          Synchronized activities that make you forget the screen even exists.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-8">
          {/* Wellness Workshop */}
          <div className="relative aspect-square overflow-hidden rounded-[1.75rem] bg-slate-300">
            <Image
              src="/images/wellness-workshop.png"
              alt="A person meditating in a lotus pose in soft light"
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
              <span className="inline-block rounded-md bg-black/40 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white backdrop-blur">
                Live Now
              </span>
              <h3 className="font-heading mt-4 text-2xl font-bold text-white">
                Wellness Workshop
              </h3>
              <p className="mt-1 text-sm text-white/85">
                Mindful Breathing &amp; Yoga Flow
              </p>
              <div className="mt-5 flex items-center justify-between">
                <AvatarCluster />
                <span className="flex size-11 items-center justify-center rounded-full bg-white text-brand shadow-md">
                  <Play className="size-5 translate-x-0.5 fill-current" />
                </span>
              </div>
            </div>
          </div>

          {/* Online Game Session */}
          <div className="relative aspect-square overflow-hidden rounded-[1.75rem] bg-slate-300">
            <Image
              src="/images/online-game-session.png"
              alt="A neon-lit arcade room with rows of gaming machines"
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
            {/* top row */}
            <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6 sm:p-7">
              <span className="flex size-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur">
                <Gamepad2 className="size-5" />
              </span>
              <span className="text-sm font-semibold text-white">
                Today @ 8PM
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
              <h3 className="font-heading text-2xl font-bold text-white">
                Online Game Session
              </h3>
              <p className="mt-1 max-w-xs text-sm text-white/85">
                Ultimate strategy night with the core community squad.
              </p>
              <div className="mt-5 flex items-center gap-2 text-sm font-medium text-white/90">
                <Users className="size-4" />
                34 participants
              </div>
            </div>
          </div>

          {/* Virtual Movie Night (floating card baked into the image) */}
          <div className="relative aspect-square overflow-hidden rounded-[1.75rem] bg-slate-300">
            <Image
              src="/images/virtual-movie-night.png"
              alt="A cosy projector movie setup with cushions and fairy lights"
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
              <h3 className="font-heading text-2xl font-bold text-white">
                Virtual Movie Night
              </h3>
              <p className="mt-1 text-sm text-white/85">Friday, 10:00 PM</p>
              <button
                type="button"
                className="mt-5 w-full rounded-xl border border-white/20 bg-white/10 py-3.5 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/30"
              >
                Remind Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
