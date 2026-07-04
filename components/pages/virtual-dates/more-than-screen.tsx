import Image from "next/image";

export function MoreThanScreen() {
  return (
    <section className="bg-[#f5f7f9] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <h2 className="font-heading text-center text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl lg:text-5xl">
        More than just a screen.
      </h2>
      <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
        Explore features designed to spark genuine emotional intelligence
        through the lens of <br className="hidden lg:block" />
        modern technology.
      </p>

      <div className="mx-auto mt-20 grid w-full max-w-400 items-center gap-6 lg:mt-32 lg:grid-cols-2">
        {/* Beige highlight card — slightly shorter than the image, centered
            against it */}
        <div className="flex flex-col justify-center rounded-[2.5rem] bg-[#e9e2dd] px-8 py-14 sm:px-14 lg:aspect-1011/620 lg:py-0">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#7d3f38]">
            Human Highlight
          </p>
          <h3 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
            Meaningful Connection
          </h3>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            Beyond basic interests, we map core values and communication
            styles. Our proprietary matching system doesn&rsquo;t just look
            for matches; it seeks resonances.
          </p>
        </div>

        {/* Illustration — "Sarah joined" toast is baked into the PNG */}
        <Image
          src="/images/connection.png"
          alt="Illustration of a woman and man laughing together, with a “Sarah joined Movie Night Experience” notification"
          width={1011}
          height={716}
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}
