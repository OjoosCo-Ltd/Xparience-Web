import Image from "next/image";

const COLUMNS = [
  {
    image: "/images/exper1.png",
    title: "You Don’t Wonder Why",
    body: (
      <>
        You open a match and it&rsquo;s already clear.
        <br />
        Not just that you align but how.
        <br />
        Your values. Your rhythms. The way you live day to day. You&rsquo;re
        not starting from nothing.
        <br />
        You&rsquo;re starting from understanding.
      </>
    ),
    tag: "Alignment & Values",
    offset: false,
  },
  {
    image: "/images/exper2.png",
    title: "You Don’t Shrink to Fit",
    body: (
      <>
        You&rsquo;re not reduced to photos or a clever caption. Here,
        you&rsquo;re asked the questions that actually matter, the ones that
        reveal how you think, how you love, how you live.
        <br />
        And if you don&rsquo;t have the words yet, you&rsquo;re guided there.
        Because the right connection starts with being fully seen
      </>
    ),
    tag: "Self-Expression & Authenticity",
    offset: true,
  },
  {
    image: "/images/exper3.png",
    title: "You Don’t Navigate It Alone",
    body: (
      <>
        Dating isn&rsquo;t always light. Sometimes it&rsquo;s confusing,
        draining, or heavy. Xparience acknowledges that.
        <br />
        A dedicated well-being space gives you tools to stay grounded, from
        mindfulness and self-reflection to professional support when you need
        it. Because how you show up matters for yourself, first.
      </>
    ),
    tag: "Well-Being & Emotional Support",
    offset: false,
  },
];

export function AboutExperienceSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[100rem] px-5 sm:px-8 lg:px-12">
        <h2 className="font-heading text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          The Experience
        </h2>
        <div className="mt-5 h-1 w-32 rounded-full bg-[#1f5063]" />

        <div className="mt-12 grid gap-14 sm:mt-16 lg:grid-cols-3 lg:gap-12">
          {COLUMNS.map((column) => (
            <div key={column.title} className={column.offset ? "lg:mt-32" : ""}>
              <Image
                src={column.image}
                alt=""
                width={592}
                height={700}
                className="w-full rounded-3xl object-cover shadow-sm"
              />
              <h3 className="font-heading mt-8 text-2xl font-bold tracking-tight text-slate-900 sm:text-[1.7rem]">
                {column.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
                {column.body}
              </p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.15em] text-[#1f5063]">
                {column.tag}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
