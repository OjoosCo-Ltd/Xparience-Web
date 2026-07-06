import Link from "next/link";
import { ArrowRight, SquareArrowOutUpRight } from "lucide-react";

const RELEASES = [
  {
    date: "March 14, 2024",
    title: (
      <>
        Expanding the Sanctuary: <br className="hidden lg:block" />
        Xparience Launches in <br className="hidden lg:block" />
        Tokyo
      </>
    ),
    excerpt:
      "Continuing our global mission, Xparience officially opens its digital doors to the Japanese market with locally curated hubs",
  },
  {
    date: "February 28, 2024",
    title: (
      <>
        The Privacy Manifesto: <br className="hidden lg:block" />
        New Encryption Standards
      </>
    ),
    excerpt:
      "Introducing a new standard in secure, high-end communication protocols designed for the modern diplomat and…",
  },
  {
    date: "January 10, 2024",
    title: (
      <>
        Xparience Named <br className="hidden lg:block" />
        &lsquo;Innovator of the Year&rsquo; at <br className="hidden lg:block" />
        TechCon
      </>
    ),
    excerpt:
      "Recognised for our unique approach to digital wellbeing and high-fidelity social networking at the 2024 International…",
  },
];

export function PressReleases() {
  return (
    <section className="bg-hero-gradient py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Press Releases
            </h2>
            <p className="mt-4 text-base text-slate-700 sm:text-lg">
              The latest official announcements and media updates.
            </p>
          </div>
          <Link
            href="/press"
            className="flex shrink-0 items-center gap-2 font-semibold text-brand transition-opacity hover:opacity-80 sm:mt-2"
          >
            View Archive
            <ArrowRight className="size-4.5" />
          </Link>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-8">
          {RELEASES.map((release, i) => (
            <div
              key={i}
              className="flex flex-col rounded-[1.5rem] bg-white p-8 shadow-lg"
            >
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand">
                {release.date}
              </p>
              <h3 className="font-heading mt-5 text-2xl font-bold leading-snug text-slate-900">
                {release.title}
              </h3>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                {release.excerpt}
              </p>
              <Link
                href="/press"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-brand transition-opacity hover:opacity-80"
              >
                Read More
                <SquareArrowOutUpRight className="size-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
