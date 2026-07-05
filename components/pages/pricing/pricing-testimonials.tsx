import Image from "next/image";

const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    tier: "Premium Member",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    quote:
      "“Xparience Premium changed how I view online dating. The ‘Experiences’ aren’t just features—they’re true gateways to seeing someone’s soul.”",
  },
  {
    name: "Marcus Thorne",
    tier: "Exclusive Member",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    quote:
      "“The Elite tier is worth every penny for the personalized matching. My match was curated perfectly for my lifestyle and values.”",
  },
  {
    name: "Elena Rodriguez",
    tier: "Premium Member",
    avatar: "https://randomuser.me/api/portraits/women/26.jpg",
    quote:
      "“I finally feel safe and seen. The intentionality behind the Premium features weeds out the noise of traditional apps instantly.”",
  },
];

export function PricingTestimonials() {
  return (
    <section className="bg-[#f5f7f9] px-5 pb-24 sm:px-8 lg:px-12">
      <div className="mx-auto grid w-full max-w-[96rem] gap-8 md:grid-cols-3">
        {TESTIMONIALS.map((testimonial) => (
          <figure
            key={testimonial.name}
            className="rounded-3xl bg-[#eceef2] p-8 sm:p-9"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.avatar}
                  alt=""
                  width={56}
                  height={56}
                  className="size-14 rounded-full object-cover"
                />
                <figcaption>
                  <p className="font-heading text-lg font-bold text-slate-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-500">{testimonial.tier}</p>
                </figcaption>
              </div>
              <span
                aria-hidden
                className="font-heading -mt-2 text-6xl font-extrabold leading-none text-[#bfe0f2]"
              >
                &rdquo;
              </span>
            </div>

            <blockquote className="mt-7 text-lg italic leading-relaxed text-slate-800">
              {testimonial.quote}
            </blockquote>
          </figure>
        ))}
      </div>
    </section>
  );
}
