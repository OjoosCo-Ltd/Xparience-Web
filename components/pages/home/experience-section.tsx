import Image from "next/image";

// Bento grid: wide + narrow on row one, narrow + wide on row two.
// The dark overlays are baked into the images themselves.
const FEATURES = [
  {
    title: "Watch Together",
    description: "Watch a film together in real time, from wherever you are.",
    image: "/images/watch-together.png",
    wide: true,
  },
  {
    title: "Plan a Meal Together",
    description: "Discover your food compatibility and plan something delicious.",
    image: "/images/eat-together.png",
    wide: false,
  },
  {
    title: "Shop Together",
    description: "Browse, react, and build a wishlist of things you both love.",
    image: "/images/shop-together.png",
    wide: false,
  },
  {
    title: "Play a Game Together",
    description: "Bond over a shared game, no pressure, just fun.",
    image: "/images/play-together.png",
    wide: true,
  },
];

export function ExperienceSection() {
  return (
    <section id="features" className="bg-[#f5f7f9] pb-16 pt-6 sm:pb-20 sm:pt-8 lg:pb-28 lg:pt-10">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2d6e8d]">
          The Experience
        </p>
        <h2 className="font-heading mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          The Virtual Date, Reimagined.
        </h2>

        <div className="mt-8 grid gap-4 sm:mt-10 lg:grid-cols-3 lg:gap-5">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className={`relative flex h-56 flex-col justify-end overflow-hidden rounded-3xl p-6 sm:h-64 sm:p-8 ${
                feature.wide ? "lg:col-span-2" : ""
              }`}
            >
              <Image
                src={feature.image}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
              />
              <div className="relative">
                <h3 className="font-heading text-2xl font-bold text-white sm:text-3xl">
                  {feature.title}
                </h3>
                <p className="mt-2 max-w-md text-[15px] leading-relaxed text-white/90 sm:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
