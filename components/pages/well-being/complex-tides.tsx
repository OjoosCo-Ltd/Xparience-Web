import { BrainCog, Frown, Heart, MessagesSquare } from "lucide-react";

const TOOLS = [
  {
    icon: Frown,
    tile: "bg-[#dbe5eb] text-[#1f5063]",
    title: "Rejection Reframed",
    body: "Turn missed connections into opportunities for self-discovery and resilience building.",
  },
  {
    icon: BrainCog,
    tile: "bg-[#ecdedb] text-[#7d3f38]",
    title: "Clarity Tools",
    body: "Navigate the uncertainty of early dating with data-driven emotional insights.",
  },
  {
    icon: MessagesSquare,
    tile: "bg-[#dbe5eb] text-[#1f5063]",
    title: "Safe Debrief",
    body: "A dedicated space to process conversations with our specialized empathy guides.",
  },
  {
    icon: Heart,
    tile: "bg-[#dbe5eb] text-[#1f5063]",
    title: "Self-Care First",
    body: "Automated reminders to step back when the digital world feels overwhelming.",
  },
];

export function ComplexTides() {
  return (
    <section id="explore" className="bg-[#f5f7f9] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Tool cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {TOOLS.map((tool) => (
            <div
              key={tool.title}
              className="rounded-3xl bg-white p-8 shadow-sm"
            >
              <span
                className={`flex size-14 items-center justify-center rounded-2xl ${tool.tile}`}
              >
                <tool.icon className="size-6" strokeWidth={1.75} />
              </span>
              <h3 className="font-heading mt-8 text-xl font-bold text-slate-900 sm:text-2xl">
                {tool.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {tool.body}
              </p>
            </div>
          ))}
        </div>

        {/* Copy */}
        <div>
          <h2 className="font-heading text-4xl font-extrabold tracking-tight text-[#16191c] sm:text-5xl">
            Navigating the{" "}
            <span className="font-medium">Complex Tides</span> of Connection
          </h2>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            Traditional apps leave you alone after a &lsquo;no&rsquo; or a
            difficult conversation. At Xparience, we believe the space between
            matches is where real personal growth happens.
          </p>

          <blockquote className="mt-10 max-w-2xl rounded-2xl border-l-4 border-[#7d3f38] bg-[#e9ddd8] px-7 py-6 text-base font-semibold leading-relaxed text-[#7d3f38] sm:text-lg">
            &ldquo;Our members report a 40% decrease in dating fatigue within
            the first month of using our wellness support toolkit.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
