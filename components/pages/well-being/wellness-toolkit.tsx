import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, NotebookPen } from "lucide-react";

// Lucide has no meditation glyph — minimal lotus-pose figure to match the mock.
function MeditateIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="4.5" r="2" />
      <path d="M12 8.5v3.5" />
      <path d="M12 9c-2 .4-3.5 1.7-4.1 3.6L7.5 14" />
      <path d="M12 9c2 .4 3.5 1.7 4.1 3.6l.4 1.4" />
      <path d="M12 12c-2.8 0-5.3 1.3-6.5 4" />
      <path d="M12 12c2.8 0 5.3 1.3 6.5 4" />
      <path d="M5.5 16c2 1.4 4.2 2 6.5 2s4.5-.6 6.5-2" />
    </svg>
  );
}

export function WellnessToolkit() {
  return (
    <section className="bg-[#f5f7f9] px-5 pb-16 sm:px-8 sm:pb-24 lg:px-12">
      <h2 className="font-heading text-center text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl lg:text-5xl">
        Your Personal Wellness Toolkit
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
        Access science-backed reflections and tools designed specifically for
        the modern <br className="hidden lg:block" />
        romantic.
      </p>

      <div className="mx-auto mt-14 grid w-full max-w-6xl gap-6 lg:grid-cols-3">
        {/* 1:1 Coaching — image card */}
        <div className="relative flex min-h-105 flex-col justify-end overflow-hidden rounded-[2rem] p-8 sm:p-10 lg:col-span-2">
          <Image
            src="/images/coaching.png"
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/45 via-black/15 to-transparent" />
          <div className="relative max-w-xl">
            <span className="inline-block rounded-full bg-[#1f4f63] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-white">
              Guided Reflection
            </span>
            <h3 className="font-heading mt-4 text-3xl font-bold text-white sm:text-4xl">
              1:1 Coaching
            </h3>
            <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
              Book one-on-one sessions with experienced coaches to gain
              clarity, confidence, and guidance in your dating journey.
            </p>
            <Link
              href="#"
              className="mt-6 inline-flex items-center gap-2 font-bold text-white transition-opacity hover:opacity-80"
            >
              Start Session
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>

        {/* Mindfulness Tools */}
        <div className="flex flex-col rounded-[2rem] bg-[#ececee] p-8 sm:p-9">
          <MeditateIcon className="size-9 text-[#1f4f63]" />
          <h3 className="font-heading mt-8 text-2xl font-bold text-slate-900">
            Mindfulness Tools
          </h3>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Daily breathing exercises tailored to calm dating-related anxiety.
          </p>
          <Link
            href="#"
            className="mt-auto flex items-center gap-1.5 pt-10 font-bold text-[#1f4f63] transition-opacity hover:opacity-80"
          >
            Explore Tools
            <ChevronRight className="size-4.5" />
          </Link>
        </div>

        {/* Guided Reflection — dark teal card */}
        <div className="rounded-[2rem] bg-[#235d74] p-8 sm:p-9">
          <NotebookPen className="size-8 text-white" strokeWidth={1.75} />
          <h3 className="font-heading mt-8 text-2xl font-bold text-white">
            Guided Reflection
          </h3>
          <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
            Gain clarity through thoughtful prompts and tools that help you
            better understand yourself and how you connect with others.
          </p>
        </div>

        {/* Mental Health Resources — light blue card */}
        <div className="grid gap-8 rounded-[2rem] bg-[#b8ddf1] p-8 sm:p-10 lg:col-span-2 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <h3 className="font-heading text-3xl font-bold text-[#1f4f63] sm:text-4xl">
              Mental Health Resources
            </h3>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-[#2c5468] sm:text-lg">
              Navigate your dating journey with curated tools and resources
              designed to help you reflect, reset, and show up with intention.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-xl bg-[#d5ecf9] px-4 py-2.5 text-sm font-semibold text-[#1f4f63]">
                Physical Date Suggestion
              </span>
              <span className="rounded-xl bg-[#d5ecf9] px-4 py-2.5 text-sm font-semibold text-[#1f4f63]">
                Enhance Text
              </span>
            </div>
          </div>

          {/* Curated experience inner card */}
          <div className="rounded-2xl bg-[#d5ecf9] p-6 sm:p-7">
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/80">
              <div className="h-full w-3/5 rounded-full bg-[#1f4f63]" />
            </div>
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-wide text-[#4a6b7c]">
              Curated Experience For You
            </p>
            <p className="font-heading mt-1 text-xl font-bold leading-snug text-[#1f4f63] sm:text-2xl">
              Nature Date Recommended
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
