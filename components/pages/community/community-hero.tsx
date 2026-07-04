import Image from "next/image";
import Link from "next/link";

export function CommunityHero() {
  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] flex-1 items-center justify-center overflow-hidden">
      {/* Full-bleed background */}
      <Image
        src="/images/belong.png"
        alt="Two people lying head to head, smiling up at the camera"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/25" />

      {/* Copy */}
      <div className="relative z-10 mx-auto w-full max-w-4xl px-5 py-20 text-center sm:px-8">
        <h1 className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-7xl">
          A Place to Belong,
          <br />
          <span className="text-[#7cc4e8]">Built on Trust</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/90 drop-shadow-sm sm:text-lg sm:leading-8">
          Beyond the superficiality of swiping. Experience a community{" "}
          <br className="hidden lg:block" />
          designed for meaningful relationships, intentional introductions, and{" "}
          <br className="hidden lg:block" />
          genuine connection.
        </p>

        <div className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <Link
            href="/waitlist"
            className="w-full rounded-full bg-[#1f5069] px-9 py-4 text-center text-base font-semibold text-white shadow-md transition-colors hover:bg-[#173e4e] sm:w-auto"
          >
            Join the Waitlist
          </Link>
          <Link
            href="#community"
            className="w-full rounded-full bg-white px-9 py-4 text-center text-base font-semibold text-slate-800 shadow-md transition-colors hover:bg-slate-100 sm:w-auto"
          >
            Explore the Community
          </Link>
        </div>
      </div>
    </section>
  );
}
