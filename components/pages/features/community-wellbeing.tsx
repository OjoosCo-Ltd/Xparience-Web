import Link from "next/link";
import { Heart, LineChart, SpellCheck2, Users } from "lucide-react";

export function CommunityWellbeing() {
  return (
    <section className="bg-[#eff2f6] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Interest Based Groups */}
          <div className="rounded-[2.5rem] bg-[#e7ebf0] p-8 sm:p-10 lg:p-12">
            <span className="flex size-16 items-center justify-center rounded-full bg-brand text-white shadow-sm">
              <Users className="size-7" />
            </span>
            <h2 className="font-heading mt-8 text-3xl font-bold tracking-tight text-[#2a5169] sm:text-4xl">
              Interest Based Groups
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
              Belong Together. Dive into meaningful discussions and find your
              tribe in a space designed for depth.
            </p>

            {/* Active event card, brand accent on the left edge */}
            <div className="mt-8 rounded-2xl border-l-4 border-brand bg-white px-6 py-5 shadow-sm">
              <p className="font-semibold text-slate-900">Upcoming User Event</p>
              <p className="mt-1 text-sm italic text-slate-500">
                &ldquo;Virtual Coffee &amp; Philosophy&rdquo; - Starts in 2h
              </p>
            </div>

            {/* Muted secondary card */}
            <div className="mt-4 rounded-2xl bg-black/5 px-6 py-5">
              <p className="font-semibold text-slate-500">Forum Hot Topic</p>
              <p className="mt-1 text-sm text-slate-400">
                The Art of Active Listening in Digital Spaces
              </p>
            </div>
          </div>

          {/* Emotional Well-being */}
          <div className="rounded-[2.5rem] bg-[#e7ebf0] p-8 sm:p-10 lg:p-12">
            <span className="flex size-16 items-center justify-center rounded-full bg-brand text-white shadow-sm">
              <Heart className="size-7" />
            </span>
            <h2 className="font-heading mt-8 text-3xl font-bold tracking-tight text-[#2a5169] sm:text-4xl">
              Emotional Well-being
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
              A Sanctuary for the Soul. Prioritise your mental health with tools
              built for self-reflection and growth.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {/* Self-Care — highlighted */}
              <div className="rounded-2xl bg-[#cfe4f5] px-6 py-5">
                <SpellCheck2 className="size-6 text-brand" />
                <p className="mt-8 font-semibold text-slate-900">Self-Care</p>
                <p className="mt-1 text-sm text-slate-600">Guided Meditations</p>
              </div>

              {/* Inner Clarity */}
              <div className="rounded-2xl bg-white px-6 py-5 shadow-sm">
                <LineChart className="size-6 text-brand" />
                <p className="mt-8 font-semibold text-slate-900">Inner Clarity</p>
                <p className="mt-1 text-sm text-slate-500">Think clearly</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center lg:mt-14">
          <Link
            href="/waitlist"
            className="bg-brand-gradient rounded-full px-12 py-4 text-base font-semibold text-white shadow-md transition-opacity hover:opacity-90"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
