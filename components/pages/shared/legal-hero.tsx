// Shared hero for legal/compliance pages (Cookie Policy, Terms, Privacy, …)
export function LegalHero({
  chip,
  title,
  description,
  banner,
}: {
  chip: string;
  title: React.ReactNode;
  description: React.ReactNode;
  banner?: React.ReactNode;
}) {
  return (
    <section className="bg-[#f5f7f9] px-5 pt-10 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-7xl">
        <div
          className="w-full rounded-[3rem] bg-contain bg-center bg-no-repeat px-6 py-16 sm:px-14 sm:py-24 lg:px-20"
          style={{ backgroundImage: "url('/images/terms-bg.png')" }}
        >
          <span className="inline-block rounded-full border-2 border-[#1f5063] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#1f5063]">
            {chip}
          </span>
          <h1 className="font-heading mt-6 text-5xl font-extrabold tracking-tight text-[#1f4f63] sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-700 sm:text-xl sm:leading-9">
            {description}
          </p>
        </div>
        {banner && (
          <div className="mt-4 rounded-2xl bg-[#e8edf1] px-6 py-6 text-base leading-relaxed text-slate-700 sm:px-10 sm:leading-8">
            {banner}
          </div>
        )}
      </div>
    </section>
  );
}
