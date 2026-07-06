import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { BookOpen, DraftingCompass, Images, Mail } from "lucide-react";

const RESOURCES: {
  icon: LucideIcon;
  title: string;
  body: string;
  cta: string;
  href: string;
  download?: boolean;
  newTab?: boolean;
}[] = [
  {
    icon: DraftingCompass,
    title: "Logo Pack",
    body: "SVG, PNG, and AI formats in light and dark variants.",
    cta: "Download .ZIP",
    href: "/downloads/logo-pack.zip",
    download: true,
  },
  {
    icon: BookOpen,
    title: "Brand Guidelines",
    body: "Typography, colour palettes, and voice & tone manuals.",
    cta: "View PDF",
    href: "/downloads/brand-guide.pdf",
    newTab: true,
  },
  {
    // No gallery page exists yet — CTA stays on /press until one is built
    icon: Images,
    title: "Press Photos",
    body: "High-resolution leadership and lifestyle imagery.",
    cta: "Browse Gallery",
    href: "/press",
  },
];

export function BrandResources() {
  return (
    <section className="bg-[#f5f7fa] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Brand Resources
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Official brand assets for use by media and partners. Please adhere to
            our guidelines.
          </p>
        </div>

        {/* Resource cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-14 lg:gap-8">
          {RESOURCES.map((res) => (
            <div
              key={res.title}
              className="flex flex-col items-center rounded-[1.75rem] border border-slate-200/80 bg-white/50 p-8 text-center sm:p-10"
            >
              <span className="flex size-16 items-center justify-center rounded-full bg-[#cfe4f5] text-brand">
                <res.icon className="size-7" />
              </span>
              <h3 className="font-heading mt-6 text-2xl font-bold text-slate-900">
                {res.title}
              </h3>
              <p className="mt-4 max-w-xs text-base leading-relaxed text-slate-600">
                {res.body}
              </p>
              <a
                href={res.href}
                download={res.download}
                target={res.newTab ? "_blank" : undefined}
                rel={res.newTab ? "noopener noreferrer" : undefined}
                className="mt-8 w-full rounded-full bg-[#eef1f5] py-3.5 text-center text-base font-semibold text-brand transition-colors hover:bg-[#e3e8ee]"
              >
                {res.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Media Inquiries card */}
        <div className="mx-auto mt-8 max-w-3xl rounded-[2rem] bg-white p-8 text-center shadow-lg sm:p-12 lg:p-14">
          <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-[#1f5069] text-white">
            <Mail className="size-6" />
          </span>
          <h3 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Media Inquiries
          </h3>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
            For all press, podcast, and speaking engagement requests, please
            reach out to our communications team directly.
          </p>

          <Link
            href="mailto:support@xparience.com"
            className="font-heading mt-8 inline-block text-2xl font-bold text-brand transition-opacity hover:opacity-80 sm:text-3xl"
          >
            support@xparience.com
          </Link>
          <p className="mt-3 text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
            Global Communications Office
          </p>

          <div className="mx-auto mt-10 max-w-md border-t border-slate-200 pt-10">
            <p className="font-semibold text-slate-900">Todimu Olawumi</p>
            <p className="mt-1 text-sm text-slate-500">
              Product &amp; Operations Lead
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
