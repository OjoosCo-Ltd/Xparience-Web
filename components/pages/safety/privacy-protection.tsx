import Image from "next/image";
import { EyeOff, LockKeyhole } from "lucide-react";

const CARDS = [
  {
    icon: LockKeyhole,
    iconWrap: "bg-[#cfdde3] text-[#1f4f63]",
    title: "Encryption by Default",
    body: "Every message sent on Xparience is protected with industry-leading encryption protocols. Not even our team can read your private conversations.",
  },
  {
    icon: EyeOff,
    iconWrap: "bg-[#d3e6f2] text-[#1c3d50]",
    title: "Privacy by Design",
    body: "Your data and conversations are handled with care. Xparience is built to protect your information and ensure your experience remains secure and respectful.",
  },
];

const STEPS = [
  "Tap the three dots on any profile or message",
  "Select 'Report' and choose the reason",
  "Our team reviews and acts within 24 hours",
];

export function PrivacyProtection() {
  return (
    <section className="bg-[#f5f7fa] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Privacy &amp; Protection
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Your data is yours. We just help you protect it.
          </p>
        </div>

        {/* Two feature cards */}
        <div className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-2 lg:gap-8">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="flex gap-5 rounded-[2rem] bg-[#eef1f5] p-8 sm:gap-6 sm:p-10"
            >
              <span
                className={`flex size-14 shrink-0 items-center justify-center rounded-full ${card.iconWrap}`}
              >
                <card.icon className="size-6" />
              </span>
              <div>
                <h3 className="font-heading text-2xl font-bold tracking-tight text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empowering Your Voice split panel */}
        <div className="mt-6 grid overflow-hidden rounded-[2rem] lg:mt-8 lg:grid-cols-2">
          {/* Left: teal content */}
          <div className="bg-[#1f5069] p-8 sm:p-12 lg:p-14">
            <h3 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Empowering Your Voice
            </h3>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/70 sm:text-lg sm:leading-8">
              Encountered something that doesn&rsquo;t feel right? We&rsquo;ve
              made reporting seamless and discrete. Your safety concerns are
              prioritised by our specialist trust team.
            </p>

            <div className="mt-10 flex flex-col gap-4">
              {STEPS.map((step, i) => (
                <div
                  key={step}
                  className="flex items-center gap-4 rounded-full bg-white/10 px-4 py-4"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/30 text-sm font-semibold text-white/90">
                    {i + 1}
                  </span>
                  <span className="text-base font-semibold text-white">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <div className="relative min-h-72 lg:min-h-full">
            <Image
              src="/images/protection.png"
              alt="A team collaborating around a table with a tablet"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
