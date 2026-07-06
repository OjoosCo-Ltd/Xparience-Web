"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Mail, Zap } from "lucide-react";

const inputStyles =
  "w-full rounded-xl bg-[#eef1f4] px-5 py-4 text-base text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1f4f63]/40";

const labelStyles =
  "block text-xs font-bold uppercase tracking-[0.15em] text-slate-800";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

type Status = "idle" | "submitting" | "success" | "error";

export function ContactFormSection() {
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
    <section className="bg-[#f5f7f9] px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12">
      <div className="mx-auto grid w-full max-w-6xl items-stretch gap-8 lg:grid-cols-[1.55fr_1fr]">
        {/* Form card */}
        <div className="rounded-[2.5rem] bg-white px-6 py-12 shadow-sm sm:px-12 sm:py-14">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-[#16191c] sm:text-4xl">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="mt-10">
            {/* Sender label shown in the email (helps identify submissions) */}
            <input
              type="hidden"
              name="from_name"
              value="Xparience Website — Contact Form"
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

            <div className="grid gap-7 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-full-name" className={labelStyles}>
                  Full Name
                </label>
                <input
                  id="contact-full-name"
                  name="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className={`mt-3 ${inputStyles}`}
                />
              </div>
              <div>
                <label htmlFor="contact-email-address" className={labelStyles}>
                  Email Address
                </label>
                <input
                  id="contact-email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className={`mt-3 ${inputStyles}`}
                />
              </div>
            </div>

            <div className="mt-7">
              <label htmlFor="contact-subject" className={labelStyles}>
                Subject
              </label>
              <div className="relative mt-3">
                <select
                  id="contact-subject"
                  name="subject"
                  required
                  defaultValue=""
                  className={`${inputStyles} appearance-none pr-12 invalid:text-slate-400`}
                >
                  <option value="" disabled>
                    How can we help?
                  </option>
                  <option>General Inquiry</option>
                  <option>Account &amp; Support</option>
                  <option>Billing &amp; Subscriptions</option>
                  <option>Privacy &amp; Safety</option>
                  <option>Press &amp; Partnerships</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-5 top-1/2 size-5 -translate-y-1/2 text-slate-500" />
              </div>
            </div>

            <div className="mt-7">
              <label htmlFor="contact-message-body" className={labelStyles}>
                Message
              </label>
              <textarea
                id="contact-message-body"
                name="message"
                required
                rows={6}
                placeholder="Tell us more about your inquiry..."
                className={`mt-3 resize-none ${inputStyles}`}
              />
            </div>

            {status === "success" ? (
              <p className="mt-7 rounded-xl bg-[#e6f4ec] px-5 py-3 text-sm font-medium text-[#1b7a4b]">
                Thanks — your message has been sent. We&rsquo;ll be in touch
                soon.
              </p>
            ) : null}
            {status === "error" ? (
              <p className="mt-7 rounded-xl bg-[#fdecec] px-5 py-3 text-sm font-medium text-[#c0392b]">
                Something went wrong. Please try again, or email us at
                support@xparience.com.
              </p>
            ) : null}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="bg-brand-gradient mt-9 w-full rounded-full py-4 text-lg font-bold text-white shadow-md transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "submitting" ? "Sending…" : "Send Message"}
            </button>
          </form>
        </div>

        {/* Contact information card — stretches to match the form's height */}
        <div className="flex flex-col rounded-[2.5rem] bg-[#eef1f4] px-6 py-12 sm:px-10 sm:py-14">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-[#16191c] sm:text-[1.7rem]">
            Contact Information
          </h2>

          <div className="mt-8 flex items-center gap-5">
            <span className="flex size-14 items-center justify-center rounded-xl bg-[#cfe4f4]">
              <Mail className="size-6 text-[#1f4f63]" strokeWidth={1.75} />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-600">
                Support Team
              </p>
              <a
                href="mailto:support@xparience.com"
                className="font-heading mt-1 block text-xl font-bold text-[#16191c] transition-opacity hover:opacity-75"
              >
                support@xparience.com
              </a>
            </div>
          </div>

          <Image
            src="/images/contact.png"
            alt="Illustration of a couple laughing and holding hands"
            width={638}
            height={536}
            className="my-8 w-full rounded-xl object-cover"
          />

          <hr className="mt-auto border-slate-300/60" />

          <p className="mt-7 flex items-center gap-2.5 font-semibold text-slate-800">
            <Zap className="size-5 fill-[#16191c] text-[#16191c]" />
            Typically respond within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
}
