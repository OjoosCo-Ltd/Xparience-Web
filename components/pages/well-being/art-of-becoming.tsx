import Image from "next/image";
// Link and ArrowRight imports removed while the blog CTA below is hidden.

const GUIDES = [
  {
    image: "/images/swipe.png",
    title: "Unlearning the Swipe",
    body: "How to de-program the transactional mindset of modern dating and return to genuine human curiosity.",
  },
  {
    image: "/images/talk.png",
    title: "The Silence after the Talk",
    body: "Processing the emotional aftermath of vulnerability and why silence doesn't always mean rejection.",
  },
];

export function ArtOfBecoming() {
  return (
    <section className="bg-[#f5f7f9] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-[1fr_2.1fr] lg:gap-20">
        {/* Copy */}
        <div>
          <h2 className="font-heading text-4xl font-extrabold leading-[1.2] tracking-tight text-[#16191c] sm:text-5xl">
            The Art of <br className="hidden lg:block" />
            <span className="text-[#7d3f38]">Becoming.</span>
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            Building healthier patterns isn&rsquo;t about finding the
            &lsquo;perfect&rsquo; person; it&rsquo;s about becoming the most
            grounded version of yourself. Our editorial guides explore the
            deep intersections of identity, desire, and digital ethics.
          </p>
          {/* Hidden until the blog goes live:
          <Link
            href="/blog"
            className="mt-10 inline-flex items-center gap-2 font-bold text-[#16191c] underline underline-offset-4 transition-opacity hover:opacity-75"
          >
            Read the Wellness Journal
            <ArrowRight className="size-5" />
          </Link> */}
        </div>

        {/* Guides */}
        <div className="grid gap-10 sm:grid-cols-2">
          {GUIDES.map((guide) => (
            <div key={guide.title}>
              <Image
                src={guide.image}
                alt=""
                width={538}
                height={337}
                className="w-full rounded-2xl object-cover"
              />
              <h3 className="font-heading mt-7 text-2xl font-bold tracking-tight text-[#16191c] sm:text-[1.7rem]">
                {guide.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                {guide.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
