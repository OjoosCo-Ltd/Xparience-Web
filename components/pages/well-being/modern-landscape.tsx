export function ModernLandscape() {
  return (
    <section className="relative overflow-hidden bg-[#f5f7f9] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      {/* faint decorative ring, bottom-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 size-96 rounded-full border-[28px] border-slate-200/50"
      />

      {/* small capsule ornament, top center */}
      <div className="mx-auto h-1.5 w-18 rounded-full bg-slate-300/70" />

      <div className="relative mx-auto mt-16 w-full max-w-6xl">
        <h2 className="font-heading text-3xl font-extrabold leading-[1.25] tracking-tight text-[#16191c] sm:text-4xl lg:text-5xl">
          The modern dating landscape is <br className="hidden lg:block" />
          <span className="text-[#1f5063]">
            designed to keep you searching
          </span>
          , <br className="hidden lg:block" />
          not finding.
        </h2>

        {/* Cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-14">
          <div className="rounded-2xl bg-white px-8 py-10 shadow-sm sm:px-10">
            <h3 className="font-heading text-xl font-bold text-[#1f5063] sm:text-2xl">
              The Failure of Frequency
            </h3>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
              Standard apps prioritise the swipe&mdash;a dopamine loop that
              treats human connection as a high-volume commodity. They thrive
              on your continued presence, profiting from the very loneliness
              they claim to cure through endless, shallow metrics.
            </p>
          </div>
          <div className="rounded-2xl bg-white px-8 py-10 shadow-sm sm:px-10">
            <h3 className="font-heading text-xl font-bold text-[#1f5063] sm:text-2xl">
              The Xparience Difference
            </h3>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
              We&rsquo;ve built a digital space for those who value depth over
              data points. Xparience is an intentional ecosystem where
              high-fidelity profiles and curated virtual environments
              facilitate genuine connection before you even meet.
            </p>
          </div>
        </div>

        <hr className="mt-16 border-slate-200" />

        {/* Quote */}
        <blockquote className="mx-auto mt-16 max-w-3xl text-center text-2xl font-medium leading-snug text-slate-800 sm:text-3xl sm:leading-[1.4]">
          &ldquo;For those who know exactly what they want, the noise of the
          masses is merely a distraction. We provide the silence required to
          hear the right voice.&rdquo;
        </blockquote>

        <p className="mt-16 flex items-center justify-center gap-2.5 text-sm font-bold uppercase tracking-[0.2em] text-[#1f5063]">
          <span className="size-2 rounded-full bg-[#1f5063]" />
          A Curated Approach to Connection
        </p>
        <p className="mx-auto mt-5 max-w-xl text-center text-base leading-relaxed text-slate-600 sm:text-lg">
          Join a community of professionals, creatives, and visionaries who are
          ready to retire the swipe and start the story.
        </p>
      </div>
    </section>
  );
}
