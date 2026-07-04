import Image from "next/image";

const MOODS = [
  { image: "/images/mood-dining.png", label: "Dining", offset: "lg:mt-0" },
  { image: "/images/mood-outdoor.png", label: "Outdoor", offset: "lg:mt-16" },
  {
    image: "/images/mood-entertainment.png",
    label: "Entertainment",
    offset: "lg:mt-4",
  },
  { image: "/images/mood-wellness.png", label: "Wellness", offset: "lg:mt-20" },
  { image: "/images/mood-creative.png", label: "Creative", offset: "lg:mt-8" },
];

export function ExploreMood() {
  return (
    <section className="bg-[#eef1f6] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <h2 className="font-heading text-center text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Explore Your Mood
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:mt-16 lg:grid-cols-5 lg:items-start lg:gap-6">
          {MOODS.map((mood) => (
            <div
              key={mood.label}
              className={`relative aspect-[3/4] overflow-hidden rounded-[1.5rem] bg-slate-700 shadow-md ${mood.offset}`}
            >
              <Image
                src={mood.image}
                alt={mood.label}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
              <span className="font-heading absolute inset-x-0 bottom-6 text-center text-lg font-bold text-white">
                {mood.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
