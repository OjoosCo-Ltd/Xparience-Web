"use client";

import Image from "next/image";
import { MailOpen } from "lucide-react";
import { useLeadForm } from "@/lib/use-lead-form";

export function DispatchCta() {
  const { status, handleSubmit } = useLeadForm("blog-newsletter");

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Soft sunrise-mountains background */}
      <Image
        src="/images/dispatch.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-bottom"
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-5 sm:px-8">
        {/* Translucent, blurred card */}
        <div className="rounded-[2.5rem] border border-white/40 bg-white/30 px-6 py-14 text-center shadow-2xl backdrop-blur-xl sm:px-16 sm:py-16 lg:py-20">
          <span className="inline-flex text-brand">
            <MailOpen className="size-9" />
          </span>

          <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            The Xparience Dispatch
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-700 sm:text-lg">
            Join 50,000+ readers receiving weekly reflections on love,{" "}
            <br className="hidden sm:block" />
            connection, and the human experience.
          </p>

          <form
            className="mx-auto mt-10 flex max-w-lg flex-col gap-3"
            onSubmit={handleSubmit}
          >
            <input
              name="name"
              type="text"
              required
              placeholder="Your name"
              aria-label="Your name"
              className="w-full rounded-full bg-white px-6 py-4 text-base text-slate-700 shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/40"
            />
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                name="email"
                type="email"
                required
                placeholder="Your email address"
                aria-label="Your email address"
                className="w-full rounded-full bg-white px-6 py-4 text-base text-slate-700 shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/40"
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="shrink-0 rounded-full bg-[#1f4f63] px-8 py-4 text-base font-semibold text-white shadow-md transition-colors hover:bg-[#173e4e] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "submitting" ? "Sending…" : "Subscribe"}
              </button>
            </div>
          </form>
          {status === "success" ? (
            <p className="mt-4 text-sm font-semibold text-[#1f4f63]">
              Thanks — you&rsquo;re subscribed!
            </p>
          ) : null}
          {status === "error" ? (
            <p className="mt-4 text-sm font-semibold text-[#c0392b]">
              Something went wrong. Please try again.
            </p>
          ) : null}

          <p className="mt-6 text-sm text-slate-600">
            No spam, only meaningful stories. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
