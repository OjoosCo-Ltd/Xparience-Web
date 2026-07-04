import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const EVENTS = [
  {
    image: "/images/mindful-dating.png",
    alt: "A diverse group seated in a circle for a workshop in a bright room",
    tag: "Workshop",
    tagClass: "bg-[#cfe4f5] text-[#1c5d7d]",
    when: "Oct 24 • 7PM",
    title: "Mindful Dating Essentials",
    description:
      "Learn how to build authentic connections in a digital world with Dr. Elena Rose.",
    stat: "120 Joined",
  },
  {
    image: "/images/virtual-gala.png",
    alt: "A crowd facing a stage with dramatic beams of light",
    tag: "Social",
    tagClass: "bg-[#b8674f] text-white",
    when: "Oct 28 • 9PM",
    title: "Virtual Gala Night",
    description:
      "Dress up and join us for a night of curated music and interactive speed dating.",
    stat: "850 Joined",
  },
  {
    image: "/images/collective-breathing.png",
    alt: "A sunlit wooden yoga studio with mats laid out on the floor",
    tag: "Well-being",
    tagClass: "bg-[#1f4f63] text-white",
    when: "Daily • 8AM",
    title: "Collective Breathing",
    description:
      "Start your day with a 15-minute guided session focused on global connectivity.",
    stat: "2.4k Joining",
  },
];

function AvatarCluster() {
  return (
    <div className="flex -space-x-2">
      <span className="size-6 rounded-full border-2 border-white bg-slate-200" />
      <span className="size-6 rounded-full border-2 border-white bg-slate-300" />
      <span className="size-6 rounded-full border-2 border-white bg-slate-400" />
    </div>
  );
}

export function VibrantCommunity() {
  return (
    <section className="bg-[#eff2f6] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Vibrant Community
            </h2>
            <p className="mt-4 text-base text-slate-600 sm:text-lg">
              Join workshops, themed forums and events.
            </p>
          </div>
          <Link
            href="/waitlist"
            className="shrink-0 rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-brand shadow-sm ring-1 ring-black/5 transition-colors hover:bg-slate-50"
          >
            Explore Events
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-8">
          {EVENTS.map((event) => (
            <div
              key={event.title}
              className="overflow-hidden rounded-[1.75rem] bg-white shadow-sm"
            >
              <div className="relative aspect-[2/1]">
                <Image
                  src={event.image}
                  alt={event.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      "rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide",
                      event.tagClass,
                    )}
                  >
                    {event.tag}
                  </span>
                  <span className="text-sm font-medium text-slate-500">
                    {event.when}
                  </span>
                </div>

                <h3 className="font-heading mt-5 text-xl font-bold text-slate-900 sm:text-2xl">
                  {event.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  {event.description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <AvatarCluster />
                  <span className="text-sm font-semibold text-brand">
                    {event.stat}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
