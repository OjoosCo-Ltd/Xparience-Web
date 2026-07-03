import Image from "next/image";

const STEPS = [
  {
    number: 1,
    title: "Match",
    description: "Find someone who shares your values and lifestyle goals.",
  },
  {
    number: 2,
    title: "Connect",
    description: "Break the ice with our science-based conversation enhancers.",
  },
  {
    number: 3,
    title: "Invite",
    description: "Choose from the four curated virtual date templates.",
  },
  {
    number: 4,
    title: "Meet In Person",
    description: "Share moments that matter, and explore connection physically",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-[#f5f7f9] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
        {/* Copy + steps */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2d6e8d]">
            How It Works
          </p>
          <h2 className="font-heading mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            The Journey Together
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            Four easy steps to start your journey towards soulful bond
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-14">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-center text-center"
              >
                <span className="font-heading flex size-14 items-center justify-center rounded-2xl bg-[#1f4f63] text-xl font-bold text-white shadow-md">
                  {step.number}
                </span>
                <h3 className="font-heading mt-5 text-xl font-bold text-slate-900 sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-70 text-base leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual: gradient square behind, journey PNG, white outline square in front */}
        <div className="relative mx-auto aspect-square w-full max-w-135">
          <div className="bg-hero-gradient absolute bottom-0 right-0 h-[60%] w-[72%] rounded-[3rem]" />
          <Image
            src="/images/journey.png"
            alt="A woman with eyes closed, hands resting on her neck, at ease"
            width={979}
            height={979}
            className="relative z-10 h-auto w-full"
          />
          <div className="absolute bottom-[2%] right-[2%] z-20 h-[30%] w-[42%] rounded-[2.5rem] border-[10px] border-white" />
        </div>
      </div>
    </section>
  );
}
