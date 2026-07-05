import Image from "next/image";

export function EventsHero() {
  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] flex-1 items-center justify-center overflow-hidden">
      {/* Full-bleed background */}
      <Image
        src="/images/event-bg.png"
        alt="A couple lying head to head in the grass, smiling"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* Copy */}
      <div className="relative z-10 mx-auto w-full max-w-4xl px-5 py-20 text-center sm:px-8">
        <h1 className="font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-6xl">
          Join Events That <br className="hidden sm:block" />
          Bring People <span className="text-[#7cc4e8]">Closer</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/90 drop-shadow-sm sm:text-lg sm:leading-8">
          Discover curated virtual experiences, join community events, and{" "}
          <br className="hidden lg:block" />
          connect with others through shared interests. Participate in{" "}
          <br className="hidden lg:block" />
          meaningful gatherings that foster genuine relationships.
        </p>
      </div>
    </section>
  );
}
