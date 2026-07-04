export function AboutHero() {
  return (
    <section
      className="relative flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center bg-cover bg-center px-5 py-24 text-center"
      style={{ backgroundImage: "url('/images/about.png')" }}
    >
      <h1 className="font-heading text-4xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
        A world where distance <br className="hidden lg:block" />
        never dictates <span className="text-[#2d6e8d]">connection.</span>
      </h1>

      <div className="mx-auto mt-10 w-full max-w-3xl">
        <div className="h-1 w-32 rounded-full bg-[#2d6e8d]" />
        <p className="mt-6 text-lg leading-relaxed text-white sm:text-xl sm:leading-9">
          Our mission is to foster emotional well-being by creating shared
          digital <br className="hidden lg:block" />
          experiences that feel as intimate and tangible as physical presence.
        </p>
      </div>
    </section>
  );
}
