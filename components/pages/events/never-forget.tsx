import Image from "next/image";

export function NeverForget() {
  return (
    <section className="bg-brand py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
        {/* Image */}
        <div className="relative aspect-square w-full max-w-xl overflow-hidden rounded-2xl bg-white/10">
          <Image
            src="/images/experiences-never-forget.png"
            alt="Three friends laughing together while looking at a laptop in a cafe"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* Heading */}
        <h2 className="font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Experiences You&rsquo;ll Never Forget
        </h2>
      </div>
    </section>
  );
}
