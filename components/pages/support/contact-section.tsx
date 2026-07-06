"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail } from "lucide-react";

const inputStyles =
  "w-full rounded-full bg-[#e2e5e9] px-6 py-4 text-base text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1f4f63]/40";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

type Status = "idle" | "submitting" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!ACCESS_KEY) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    const formData = new FormData(form);
    formData.append("access_key", ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="bg-[#f5f7f9] px-5 pb-20 sm:px-8 sm:pb-24">
      <div className="mx-auto w-full max-w-3xl rounded-[2.5rem] bg-[#eff1f4] px-6 py-12 sm:px-14 sm:py-16">
        <h2 className="font-heading text-3xl font-extrabold tracking-tight text-[#1f4f63] sm:text-4xl">
          Still have questions?
        </h2>
        <p className="mt-3 text-base text-slate-600 sm:text-lg">
          Send us a message and we&rsquo;ll get back to you within few hours.
        </p>

        <form className="mt-10" onSubmit={handleSubmit}>
          {/* Sender label shown in the email (helps identify submissions) */}
          <input
            type="hidden"
            name="from_name"
            value="Xparience Website — Contact"
          />
          <input
            type="hidden"
            name="subject"
            value="New contact message from Xparience Website"
          />
          {/* Honeypot spam filter (hidden from users) */}
          <input
            type="checkbox"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="contact-name"
                className="text-sm font-bold uppercase tracking-wide text-[#1f4f63]"
              >
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                placeholder="Alex Rivers"
                className={`mt-3 ${inputStyles}`}
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="text-sm font-bold uppercase tracking-wide text-[#1f4f63]"
              >
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                placeholder="alex@example.com"
                className={`mt-3 ${inputStyles}`}
              />
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="contact-message"
              className="text-sm font-bold uppercase tracking-wide text-[#1f4f63]"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              placeholder="How can we help you today?"
              className="mt-3 w-full resize-none rounded-3xl bg-[#e2e5e9] px-6 py-5 text-base text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1f4f63]/40"
            />
          </div>

          {status === "success" ? (
            <p className="mt-6 rounded-2xl bg-[#e6f4ec] px-5 py-3 text-sm font-medium text-[#1b7a4b]">
              Thanks — your message has been sent. We&rsquo;ll be in touch soon.
            </p>
          ) : null}
          {status === "error" ? (
            <p className="mt-6 rounded-2xl bg-[#fdecec] px-5 py-3 text-sm font-medium text-[#c0392b]">
              Something went wrong. Please try again, or email us at
              support@xparience.com.
            </p>
          ) : null}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="bg-brand-gradient mt-8 w-full rounded-full py-4 text-lg font-semibold text-white shadow-md transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "submitting" ? "Sending…" : "Submit Request"}
          </button>
        </form>

        <div className="mt-10 flex flex-wrap items-center gap-8">
          {/* Live Chat — hidden until a chat system exists (re-add the
              MessagesSquare import from lucide-react when restoring)
          <Link
            href="#"
            className="flex items-center gap-2 font-bold text-[#1f4f63] transition-opacity hover:opacity-80"
          >
            <MessagesSquare className="size-5" strokeWidth={2} />
            Live Chat
          </Link>
          */}
          <Link
            href="mailto:support@xparience.com"
            className="flex items-center gap-2 font-bold text-[#1f4f63] transition-opacity hover:opacity-80"
          >
            <Mail className="size-5" strokeWidth={2} />
            Email Support
          </Link>
        </div>
      </div>
    </section>
  );
}
