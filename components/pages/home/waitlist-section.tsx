"use client";

import Image from "next/image";
import { useLeadForm } from "@/lib/use-lead-form";

export function WaitlistSection() {
  const { status, handleSubmit } = useLeadForm("home-waitlist");

  return (
    <section id="waitlist" className="bg-[#f5f7f9] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div
          className="grid overflow-hidden rounded-[3rem] bg-cover bg-center lg:grid-cols-2"
          style={{ backgroundImage: "url('/images/waitlist-bg.png')" }}
        >
          {/* Copy + form */}
          <div className="px-8 pb-4 pt-12 sm:px-12 sm:pt-16 lg:py-20 lg:pl-16 lg:pr-8">
            <h2 className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Join the waitlist
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8">
              Ready to experience something different?
              <br />
              Xparience is launching in the UK. Join the waitlist and be among
              the first to try it.
            </p>

            <form className="mt-10 flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                name="name"
                type="text"
                required
                placeholder="Enter your name"
                aria-label="Your name"
                className="w-full max-w-105 rounded-full bg-white px-6 py-4 text-base text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/60"
              />
              <div className="flex flex-col gap-4 sm:flex-row">
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  aria-label="Your email address"
                  className="w-full max-w-105 rounded-full bg-white px-6 py-4 text-base text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/60"
                />
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="shrink-0 rounded-full bg-[#006786] px-10 py-4 text-base font-semibold text-white shadow-md transition-colors hover:bg-[#00546d] disabled:cursor-not-allowed disabled:opacity-70 sm:px-12"
                >
                  {status === "submitting" ? "Sending…" : "Submit"}
                </button>
              </div>
            </form>
            {status === "success" ? (
              <p className="mt-4 text-sm font-medium text-white">
                Thanks — you&rsquo;re on the list! We&rsquo;ll be in touch soon.
              </p>
            ) : null}
            {status === "error" ? (
              <p className="mt-4 text-sm font-medium text-[#ffd4d4]">
                Something went wrong. Please try again.
              </p>
            ) : null}
          </div>

          {/* Phones — bleed off the panel's bottom edge */}
          <div className="relative flex items-end justify-center lg:justify-end">
            <Image
              src="/images/j-waitlist.png"
              alt="Xparience app previews on three phones"
              width={894}
              height={655}
              className="mt-8 h-auto w-full max-w-140 lg:mt-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
