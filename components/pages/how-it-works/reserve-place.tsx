"use client";

import { useLeadForm } from "@/lib/use-lead-form";

export function ReservePlace() {
  const { status, handleSubmit } = useLeadForm("how-it-works-reserve");

  return (
    <section className="bg-[#f5f7f9] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto w-full max-w-5xl rounded-[3rem] bg-white px-6 py-16 shadow-sm sm:px-12 sm:py-20">
        <h2 className="font-heading text-center text-3xl font-bold tracking-tight text-[#16191c] sm:text-4xl">
          Reserve Your Place
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
          We are scaling our community in steady phases to ensure a seamless
          and <br className="hidden lg:block" />
          supportive environment for all our founding members.
        </p>

        <form onSubmit={handleSubmit} className="mx-auto mt-12 w-full max-w-xl">
          <label
            htmlFor="reserve-name"
            className="block font-semibold text-slate-900"
          >
            Full Name
          </label>
          <input
            id="reserve-name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="mt-3 w-full rounded-2xl bg-[#eef1f4] px-6 py-4 text-base text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1f4f63]/40"
          />

          <label
            htmlFor="reserve-email"
            className="mt-7 block font-semibold text-slate-900"
          >
            Email Address
          </label>
          <input
            id="reserve-email"
            name="email"
            type="email"
            required
            placeholder="email@example.com"
            className="mt-3 w-full rounded-2xl bg-[#eef1f4] px-6 py-4 text-base text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1f4f63]/40"
          />

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
            className="mt-10 w-full rounded-2xl bg-linear-to-r from-[#1d4a5f] to-[#132f3c] py-4.5 text-lg font-bold text-white shadow-md transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "submitting" ? "Sending…" : "Secure Early Access"}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-slate-400">
          By joining, you agree to our Community Guidelines and Privacy Policy.
        </p>
      </div>
    </section>
  );
}
