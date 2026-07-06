import Image from "next/image";

export function PressAbout() {
  return (
    <section className="bg-[#eef1f6] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-12">
        {/* Copy */}
        <div>
          <h2 className="font-heading text-4xl font-extrabold tracking-tight text-brand sm:text-5xl">
            About Xparience
          </h2>

          <p className="mt-8 text-base leading-8 text-slate-600">
            <span className="lg:whitespace-nowrap">
              Xparience is the world&rsquo;s premier destination for curated
              human
            </span>{" "}
            <br className="hidden lg:block" />
            <span className="lg:whitespace-nowrap">
              connection, blending cutting-edge technology with the philosophy of
            </span>{" "}
            <br className="hidden lg:block" />
            <span className="lg:whitespace-nowrap">
              quiet luxury. We believe that digital platforms should be
              sanctuaries for
            </span>{" "}
            <br className="hidden lg:block" />
            focus and genuine interaction.
          </p>

          <p className="mt-6 text-base leading-8 text-slate-600">
            <span className="lg:whitespace-nowrap">
              Our mission is to restore substance to the social experience,
              prioritizing
            </span>{" "}
            <br className="hidden lg:block" />
            <span className="lg:whitespace-nowrap">
              privacy, aesthetic harmony, and the value of time. Since our
              founding,
            </span>{" "}
            <br className="hidden lg:block" />
            <span className="lg:whitespace-nowrap">
              we have been redefining how global citizens connect, grow, and
            </span>{" "}
            <br className="hidden lg:block" />
            experience the world together.
          </p>

          {/* Stats */}
          <div className="mt-10 flex items-center gap-8">
            <div>
              <p className="font-heading text-3xl font-extrabold text-brand sm:text-4xl">
                2.4M
              </p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
                Global Members
              </p>
            </div>
            <div className="h-12 w-px bg-slate-300" />
            <div>
              <p className="font-heading text-3xl font-extrabold text-brand sm:text-4xl">
                45+
              </p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
                City Hubs
              </p>
            </div>
          </div>
        </div>

        {/* Image (rounded corners + shadow baked in) */}
        <div className="w-full lg:justify-self-end">
          <Image
            src="/images/press-about.png"
            alt="A minimalist luxury interior with wood-slat walls and a city view"
            width={966}
            height={753}
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
