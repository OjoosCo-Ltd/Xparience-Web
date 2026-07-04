const STATS = [
  { value: "0%", label: "Swipe Fatigue" },
  { value: "100%", label: "Human Verified" },
  { value: "Deep", label: "Value Alignment" },
];

export function NotDating() {
  return (
    <section className="bg-[#eaeef2] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-4xl px-5 text-center sm:px-8">
        <h2 className="font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          This Is Not Dating <br />
          As You Know It
        </h2>

        {/* Divider */}
        <div className="mx-auto mt-8 h-1 w-14 rounded-full bg-brand" />

        <p className="mx-auto mt-8 max-w-2xl text-lg italic leading-relaxed text-slate-600 sm:text-xl sm:leading-9">
          &ldquo;We believe that alignment is superior to swiping. That{" "}
          <br className="hidden sm:block" />
          intentional introductions beat random matching. And that a{" "}
          <br className="hidden sm:block" />
          shared philosophy is the foundation of a lasting bond.&rdquo;
        </p>

        {/* Stats */}
        <div className="mt-14 flex flex-wrap items-start justify-center gap-x-16 gap-y-8 sm:gap-x-24">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-3xl font-extrabold text-brand sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
