import Link from "next/link";

export function HumanCentricSection() {
  return (
    <section className="bg-[#f5f7f9] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="relative mx-auto w-full max-w-[100rem] overflow-hidden rounded-[3rem] bg-[#e2e9ed] px-6 py-20 text-center sm:py-24 lg:py-28">
        {/* soft glow, bottom-right like the design */}
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -right-16 size-150 rounded-full bg-[#cfe0ea] blur-3xl"
        />

        <div className="relative">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f4f63]">
            Human-Centric Approach
          </p>

          <h2 className="font-heading mx-auto mt-6 text-3xl font-extrabold tracking-tight text-[#1f4f63] sm:text-4xl lg:text-5xl">
            Beyond bytes and pixels, we <br className="hidden lg:block" />
            build for the soul.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-[#33607a] sm:text-lg sm:leading-8">
            At Xparience, every line of code is written with the intent to heal
            isolation and spark <br className="hidden lg:block" />
            authentic human joy. We believe technology should serve the heart
            first.
          </p>

          <Link
            href="/waitlist"
            className="mt-12 inline-block rounded-full bg-[#1f4f63] px-9 py-4 font-semibold text-white shadow-md transition-colors hover:bg-[#193f4f]"
          >
            Experience Xparience
          </Link>
        </div>
      </div>
    </section>
  );
}
