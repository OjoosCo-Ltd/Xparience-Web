import Image from "next/image";

export function PressHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <Image
        src="/images/press.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-28 lg:py-32">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
          Newsroom
        </p>
        <h1 className="font-heading mt-6 text-4xl font-extrabold tracking-tight text-[#9fcfe6] sm:text-5xl lg:text-6xl">
          Press at Xparience
        </h1>
        <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-white/80 sm:text-lg sm:leading-8">
          Insights, updates, and the latest stories from the forefront of
          meaningful digital <br className="hidden sm:block" />
          connection.
        </p>
      </div>
    </section>
  );
}
