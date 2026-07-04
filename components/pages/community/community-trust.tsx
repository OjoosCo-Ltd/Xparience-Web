import {
  BadgeCheck,
  CheckCircle2,
  FileText,
  IdCard,
  ScanFace,
  ShieldCheck,
} from "lucide-react";

const FEATURES = [
  {
    icon: IdCard,
    title: "Identity Guard",
    body: "Encrypted government ID verification ensures every profile represents a real human being.",
  },
  {
    icon: ScanFace,
    title: "Liveness Verification",
    body: "Real-time facial scanning prevents catfishing and ensures photos are current and accurate.",
  },
];

export function CommunityTrust() {
  return (
    <section id="community" className="bg-[#e9f0f8] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
        {/* Left: copy + features */}
        <div>
          <h2 className="font-heading text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            A Community You <span className="text-brand">Can Trust</span>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
            Safety is the foundation of intimacy. Every member of Xparience
            undergoes a rigorous multi-stage verification process before joining
            the ecosystem.
          </p>

          <div className="mt-12 flex flex-col gap-8">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="flex gap-5">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white text-brand shadow-sm">
                  <feature.icon className="size-6" />
                </span>
                <div>
                  <h3 className="font-heading text-xl font-bold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="mt-1 max-w-md text-base leading-relaxed text-slate-600">
                    {feature.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: verification card mockup */}
        <div className="mx-auto w-full max-w-md lg:justify-self-end">
          <div className="rounded-[2.5rem] bg-white p-8 shadow-xl sm:p-10">
            <div className="flex items-center justify-between">
              <p className="font-heading text-lg font-bold text-slate-900">
                Verification Status
              </p>
              <span className="flex items-center gap-1.5 rounded-full bg-[#d6f0dd] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#2e7d4f]">
                <CheckCircle2 className="size-3.5" />
                Secure
              </span>
            </div>

            {/* Progress rows */}
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-center gap-4 rounded-full bg-[#eef1f4] p-3 pr-6">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm">
                  <FileText className="size-5" />
                </span>
                <div className="h-2 flex-1 rounded-full bg-slate-200">
                  <div className="h-full w-full rounded-full bg-[#1f4f63]" />
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-full bg-[#eef1f4] p-3 pr-6">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm">
                  <BadgeCheck className="size-5" />
                </span>
                <div className="h-2 flex-1 rounded-full bg-slate-200">
                  <div className="h-full w-[78%] rounded-full bg-[#1f4f63]" />
                </div>
              </div>
            </div>

            {/* Divider + authenticated */}
            <div className="mt-8 border-t border-slate-100 pt-10 text-center">
              <span className="inline-flex">
                <ShieldCheck className="size-12 fill-[#1f4f63] text-white" />
              </span>
              <p className="font-heading mt-4 text-2xl font-bold text-slate-900">
                Identity Authenticated
              </p>
              <p className="mt-1 text-sm text-slate-500">
                256-bit encryption active
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
