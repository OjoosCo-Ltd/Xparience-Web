import Link from "next/link";

export function ReadyDifferent() {
  return (
    <section className="bg-[#f2f4f8] pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="bg-brand-radial rounded-[2.5rem] bg-[#1f5069] px-6 py-20 text-center sm:px-12 sm:py-24 lg:py-28">
          <h2 className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-[#a9d3ea] sm:text-5xl lg:text-6xl">
            Ready to Experience <br />
            Something Different?
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg sm:leading-8">
            Xparience is launching in the UK. <br />
            Join the waitlist and be among the first to try it.
          </p>

          <div className="mt-10">
            <Link
              href="/waitlist"
              className="inline-block rounded-full bg-white px-10 py-4 text-base font-semibold text-brand shadow-md transition-colors hover:bg-slate-100"
            >
              Join the Waitlist
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
