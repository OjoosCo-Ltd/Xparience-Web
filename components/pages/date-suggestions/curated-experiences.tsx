import Image from "next/image";
import Link from "next/link";

const EXPERIENCES = [
  {
    image: "/images/date-wine.png",
    alt: "Two glasses of red wine with a cheese board and candlelight",
    title: "Wine Tasting for Two",
    match: "96%",
    reason:
      "You both expressed an interest in slow-living and have shared bookmarks of Mediterranean travel logs.",
  },
  {
    image: "/images/date-picnic.png",
    alt: "A picnic basket and spread on a hilltop at sunset",
    title: "Sun-Drenched Picnic",
    match: "89%",
    reason:
      'Your profile highlights a love for nature and "digital detoxing" sessions on weekends.',
  },
  {
    image: "/images/date-gallery.png",
    alt: "A modern art gallery with abstract paintings and a bench",
    title: "Art Gallery Visit",
    match: "92%",
    reason:
      "Both participants have deep knowledge of contemporary architecture and modern minimalism.",
  },
];

export function CuratedExperiences() {
  return (
    <section className="bg-[#f5f7fa] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div>
          <p className="text-base text-slate-500">Curated Experiences</p>
          <h2 className="font-heading mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            A glimpse into your potential future together.
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-8">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.title}
              className="flex flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-sm"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={exp.image}
                  alt={exp.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-heading text-base font-bold text-slate-900">
                    {exp.title}
                  </h3>
                  <span className="font-heading text-sm font-bold text-brand">
                    {exp.match}
                  </span>
                </div>

                <div className="mt-4 flex-1 rounded-2xl bg-[#eef1f5] p-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand">
                    Why It Matches
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {exp.reason}
                  </p>
                </div>

                <Link
                  href="/waitlist"
                  className="mt-5 rounded-xl border border-brand/40 py-3 text-center text-sm font-semibold text-brand transition-colors hover:bg-brand/5"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
