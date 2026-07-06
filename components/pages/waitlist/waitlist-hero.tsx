"use client";

import Image from "next/image";
import { useLeadForm } from "@/lib/use-lead-form";

export function WaitlistHero() {
  const { status, handleSubmit } = useLeadForm("waitlist-page");

  return (
    <section className="relative flex-1 overflow-hidden bg-[#eef1f4]">
      {/* Soft light-blue glows in the corners */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 size-96 rounded-full bg-[#bcdcee]/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-[#bcdcee]/40 blur-3xl"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:px-12 lg:py-24">
        {/* Copy + form */}
        <div>
          <h1 className="font-heading text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem] xl:leading-[1.2]">
            Ready to Experience <br className="hidden lg:block" />
            <span className="text-brand">Something More</span>{" "}
            <br className="hidden lg:block" />
            Meaningful?
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
            Join early access to Xparience — an experience designed for{" "}
            <br className="hidden lg:block" />
            intentional connection, better conversations, and real-world{" "}
            <br className="hidden lg:block" />
            experiences.
          </p>

          <form
            className="mt-10 rounded-[2rem] bg-white p-6 shadow-sm sm:p-10"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="waitlist-name"
                className="text-xs font-bold uppercase tracking-[0.15em] text-[#0f4c63]"
              >
                Name
              </label>
              <input
                id="waitlist-name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full rounded-xl bg-[#f1f3f5] px-6 py-4 text-base text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/40"
              />
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <label
                htmlFor="waitlist-email"
                className="text-xs font-bold uppercase tracking-[0.15em] text-[#0f4c63]"
              >
                Email Address
              </label>
              <input
                id="waitlist-email"
                name="email"
                type="email"
                required
                placeholder="email@example.com"
                className="w-full rounded-xl bg-[#f1f3f5] px-6 py-4 text-base text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/40"
              />
            </div>

{status === "success" ? (
              <p className="mt-6 rounded-2xl bg-[#e6f4ec] px-5 py-3 text-sm font-medium text-[#1b7a4b]">
                Thanks — you&rsquo;re on the list! We&rsquo;ll be in touch soon.
              </p>
            ) : null}
            {status === "error" ? (
              <p className="mt-6 rounded-2xl bg-[#fdecec] px-5 py-3 text-sm font-medium text-[#c0392b]">
                Something went wrong. Please try again.
              </p>
            ) : null}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="bg-brand-gradient mt-8 w-full rounded-full px-8 py-4 text-base font-semibold text-white shadow-md transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "submitting" ? "Joining…" : "Join the Waitlist"}
            </button>
          </form>
        </div>

        {/* Profile-card stack artwork from the design */}
        <div className="mx-auto w-full max-w-md lg:max-w-lg lg:justify-self-end">
          <Image
            src="/images/waitlist-page.png"
            alt="Xparience profile card previews with a new match notification"
            width={879}
            height={1032}
            priority
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
