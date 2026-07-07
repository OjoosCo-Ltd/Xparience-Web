import { Check } from "lucide-react";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1f5063]">
      {children}
    </p>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-10 rounded-r-2xl border-l-4 border-[#1f5063] bg-[#dfe8ee] px-7 py-6 text-base leading-relaxed text-[#1f5063] sm:text-lg sm:leading-8">
      {children}
    </div>
  );
}

export function AccessibilityContent() {
  return (
    <section className="bg-[#f5f7f9] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto w-full max-w-6xl">
        {/* Intro */}
        <div className="rounded-r-2xl border-l-4 border-[#1f5063] bg-[#dfe8ee] px-7 py-6 text-base leading-relaxed text-[#1f5063] sm:text-lg sm:leading-8">
          <strong className="font-bold">
            Our commitment in one sentence
          </strong>
          : Accessibility is an ongoing effort &mdash; not a fixed
          destination. We regularly test, review, and improve our platform as
          new features are introduced, and we actively incorporate feedback
          from users who rely on assistive technologies.
        </div>

        {/* Section 01 */}
        <div className="mt-16 sm:mt-20">
          <SectionLabel>Section 01</SectionLabel>
        </div>
        <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
          Our Commitment
        </h2>
        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          OjoosCo Ltd is committed to making Xparience accessible to all
          users, including people with disabilities. We aim to align with the{" "}
          <strong className="font-bold text-slate-900">
            Web Content Accessibility Guidelines (WCAG) 2.1 Level AA
          </strong>{" "}
          across our web and mobile experiences, and to continuously improve
          accessibility across all core user journeys.
        </p>
        <p className="mt-8 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          We regularly test, review, and improve our platform as new features
          are introduced, and we actively incorporate feedback from users who
          rely on assistive technologies.
        </p>
        <Callout>
          If you experience any accessibility barrier on Xparience or need
          support using any part of the platform, please contact us at{" "}
          <a
            href="mailto:support@xparience.com"
            className="font-medium underline underline-offset-4"
          >
            support@xparience.com
          </a>
          . We aim to respond within{" "}
          <strong className="font-bold">2 business days.</strong>
        </Callout>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 02 */}
        <SectionLabel>Section 02</SectionLabel>
        <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
          What We Have Built
        </h2>
        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          The following accessibility features are currently supported or in
          active development across the Xparience platform:
        </p>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-190 overflow-hidden rounded-2xl border border-slate-200 text-left">
            <thead>
              <tr className="bg-white/70 text-xs font-bold uppercase tracking-[0.15em] text-slate-700">
                <th className="px-6 py-5 font-bold">Feature / Area</th>
                <th className="px-6 py-5 font-bold">Status</th>
                <th className="px-6 py-5 font-bold">Notes</th>
              </tr>
            </thead>
            <tbody className="text-base leading-relaxed">
              {FEATURE_ROWS.map((row) => (
                <tr key={row.feature} className="border-t border-slate-200">
                  <td className="px-6 py-9 align-middle font-medium text-slate-800">
                    {row.feature}
                  </td>
                  <td className="px-6 py-9 align-middle">
                    <StatusPill supported={row.supported} />
                  </td>
                  <td className="max-w-lg px-6 py-9 align-middle text-slate-600">
                    {row.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 03 */}
        <SectionLabel>Section 03</SectionLabel>
        <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
          Mobile Accessibility
        </h2>
        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          Both our iOS and Android applications are developed with mobile
          accessibility standards in mind:
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-[#1f5063] bg-white px-8 py-9">
            <h3 className="text-lg font-bold text-slate-900">iOS</h3>
            <ul className="mt-5 list-disc space-y-2.5 pl-5 text-base leading-relaxed text-slate-600">
              <li>Compatible with VoiceOver</li>
              <li>Supports Dynamic Type</li>
              <li>Supports Display Accessibility settings</li>
              <li>Tap targets meet minimum 44&times;44 points</li>
            </ul>
          </div>
          <div className="rounded-xl border border-[#1f5063] bg-white px-8 py-9">
            <h3 className="text-lg font-bold text-slate-900">Android</h3>
            <ul className="mt-5 list-disc space-y-2.5 pl-5 text-base leading-relaxed text-slate-600">
              <li>Compatible with TalkBack</li>
              <li>Supports font scaling settings</li>
              <li>Tap targets meet minimum 48&times;48dp</li>
            </ul>
          </div>
        </div>

        <ul className="mt-8 overflow-hidden rounded-3xl bg-white">
          {MOBILE_CHECKS.map((item) => (
            <li
              key={item}
              className="flex items-center gap-6 border-t border-slate-100 px-7 py-7 first:border-t-0 sm:px-9"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#d9e5ec]">
                <Check className="size-4.5 text-[#1f4f63]" strokeWidth={2.5} />
              </span>
              <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                {item}
              </p>
            </li>
          ))}
        </ul>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 04 */}
        <SectionLabel>Section 04</SectionLabel>
        <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
          Identity Verification and Accessibility
        </h2>
        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          We are aware that our mandatory identity and age verification
          process &mdash; which requires submission of a photo ID and a
          real-time selfie &mdash; may present challenges for some users,
          including those with certain physical or visual disabilities.
        </p>
        <Callout>
          <strong className="font-bold">Need help with verification?</strong>{" "}
          Please contact us at{" "}
          <a
            href="mailto:support@xparience.com"
            className="font-medium underline underline-offset-4"
          >
            support@xparience.com
          </a>{" "}
          <strong className="font-bold">before or during sign-up</strong>. We
          will work with you individually to explore alternative verification
          approaches or assisted support options where possible, while still
          meeting our legal and safety requirements.
        </Callout>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 05 */}
        <SectionLabel>Section 05</SectionLabel>
        <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
          Known Issues
        </h2>
        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          We believe in transparency. Below are the accessibility gaps we are
          currently aware of and actively working to resolve:
        </p>

        <ol className="mt-10 overflow-hidden rounded-3xl bg-white">
          <li className="flex items-center gap-6 px-7 py-8 sm:px-9">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#16191c] text-sm font-bold text-white">
              1
            </span>
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
              <strong className="font-bold text-slate-800">
                Video captions
              </strong>{" "}
              are not yet available on all platform video elements. We are
              implementing this progressively across upcoming releases.
            </p>
          </li>
          <li className="flex items-center gap-6 border-t border-slate-100 px-7 py-8 sm:px-9">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#16191c] text-sm font-bold text-white">
              2
            </span>
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
              Some{" "}
              <strong className="font-bold text-slate-800">
                complex interactive components
              </strong>{" "}
              in the Virtual Date features may not yet be fully optimised for
              screen readers. This will be addressed in an upcoming update,
              with priority given to core user journeys.
            </p>
          </li>
          <li className="flex items-center gap-6 border-t border-slate-100 px-7 py-8 sm:px-9">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#16191c] text-sm font-bold text-white">
              3
            </span>
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
              Reduced motion preferences are not yet consistently applied
              across all animated elements on the platform.
            </p>
          </li>
        </ol>

        <Callout>
          We are actively working on all of the above and aim to resolve them
          across upcoming releases. Priority is given to issues that impact
          core user journeys. If you encounter an issue not listed here,
          please{" "}
          <a
            href="mailto:support@xparience.com"
            className="font-medium underline underline-offset-4"
          >
            report it to us
          </a>
          .
        </Callout>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 06 */}
        <SectionLabel>Section 06</SectionLabel>
        <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
          Third-Party Content and Features
        </h2>
        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          Some Virtual Date experiences on Xparience involve deep linking to
          third-party streaming platforms, directing users to external
          services operated by third parties such as Netflix, Amazon Prime
          Video, and Disney+.
        </p>
        <Callout>
          The accessibility of those external services is the responsibility
          of their respective operators and is outside our control. We
          encourage users who rely on assistive technologies to review the
          accessibility statements of any third-party services they use in
          connection with Xparience Virtual Date features.
        </Callout>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 07 */}
        <SectionLabel>Section 07</SectionLabel>
        <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
          How to Request Accessible Content or Support
        </h2>
        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          If you need content in a different format, require assistance using
          any part of the platform, or would like to request a specific
          accessibility accommodation, please contact us:
        </p>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-140 overflow-hidden rounded-2xl text-left">
            <tbody className="text-base leading-relaxed">
              <tr>
                <td className="w-1/4 bg-[#f8f9fb] px-8 py-12 align-middle font-medium text-slate-800">
                  Email
                </td>
                <td className="bg-white px-8 py-12 align-middle text-slate-600">
                  support@xparience.com
                </td>
              </tr>
              <tr className="border-t border-slate-200/70">
                <td className="w-1/4 bg-[#f8f9fb] px-8 py-12 align-middle font-medium text-slate-800">
                  Response time
                </td>
                <td className="bg-white px-8 py-12 align-middle text-slate-600">
                  We aim to respond within{" "}
                  <strong className="font-bold text-slate-800">
                    2 business days
                  </strong>
                </td>
              </tr>
              <tr className="border-t border-slate-200/70">
                <td className="w-1/4 bg-[#f8f9fb] px-8 py-12 align-middle font-medium text-slate-800">
                  Format requests
                </td>
                <td className="bg-white px-8 py-12 align-middle text-slate-600">
                  We can provide information in alternative formats where
                  reasonably practicable
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 08 */}
        <SectionLabel>Section 08</SectionLabel>
        <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
          Feedback and Reporting Issues
        </h2>
        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          If something doesn&rsquo;t work the way you expect, we want to know.
          If you encounter an accessibility barrier on Xparience &mdash;
          whether it is a screen reader incompatibility, a colour contrast
          issue, a form that is difficult to navigate, or anything else
          &mdash; please report it to us at{" "}
          <a
            href="mailto:support@xparience.com"
            className="font-medium text-slate-900 underline underline-offset-4"
          >
            support@xparience.com
          </a>
          .
        </p>

        <h3 className="font-heading mt-12 border-b border-slate-200 pb-4 text-xl font-bold tracking-tight text-slate-800 sm:text-2xl">
          What to include in your report
        </h3>

        <ol className="mt-8 overflow-hidden rounded-3xl bg-white">
          {REPORT_ITEMS.map((item, index) => (
            <li
              key={item}
              className="flex items-center gap-6 border-t border-slate-100 px-7 py-7 first:border-t-0 sm:px-9"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#16191c] text-sm font-bold text-white">
                {index + 1}
              </span>
              <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                {item}
              </p>
            </li>
          ))}
        </ol>

        <Callout>
          <strong className="font-bold">Our commitment</strong>: We will
          acknowledge your report within{" "}
          <strong className="font-bold">2 business days</strong> and aim to
          resolve confirmed accessibility issues within{" "}
          <strong className="font-bold">30 days.</strong>
        </Callout>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 09 */}
        <SectionLabel>Section 09</SectionLabel>
        <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
          Regulatory Compliance
        </h2>
        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          Xparience is designed to comply with the following
          accessibility-related obligations applicable to UK digital services:
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {COMPLIANCE_CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-[#1f5063] bg-white px-7 py-10"
            >
              <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                {card.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 10 */}
        <SectionLabel>Section 10</SectionLabel>
        <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
          Updates to This Statement
        </h2>
        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          This accessibility statement will be reviewed and updated at least{" "}
          <strong className="font-bold text-slate-900">annually</strong>, or
          whenever significant changes are made to the platform. The version
          date at the top of this document indicates when it was last
          reviewed.
        </p>
        <Callout>
          <strong className="font-bold">Current version:</strong> 1.0 &middot;
          Last updated May 2026. If you have suggestions for how we can
          improve our accessibility practices, please contact us at{" "}
          <a
            href="mailto:support@xparience.com"
            className="font-medium underline underline-offset-4"
          >
            support@xparience.com
          </a>
          .
        </Callout>
      </div>
    </section>
  );
}

const COMPLIANCE_CARDS = [
  {
    title: "WCAG 2.1 Level AA",
    description:
      "Our target standard for all web and mobile interfaces across the Xparience platform.",
  },
  {
    title: "Equality Act 2010",
    description:
      "We are committed to making reasonable adjustments to ensure our service is accessible to users with disabilities.",
  },
  {
    title: "Public Sector Bodies Regs 2018",
    description:
      "While a private sector service, we use these regulations as a reference standard for best practice.",
  },
];

const REPORT_ITEMS = [
  "A description of the issue you encountered",
  "The device and assistive technology you were using",
  "The page or feature where the issue occurred",
  "Any screenshots or screen recordings, if available",
];

const MOBILE_CHECKS = [
  "Interactive elements are labelled for assistive technologies on both platforms",
  "The app does not rely on colour alone to convey information",
];

function StatusPill({ supported }: { supported: boolean }) {
  return (
    <span
      className={`inline-block whitespace-nowrap rounded-full border px-5 py-2 text-sm font-medium ${
        supported
          ? "border-[#4a7c59] bg-[#e8f0e8] text-[#3a6b45]"
          : "border-[#7d3f38] bg-[#ece4e0] text-[#7d3f38]"
      }`}
    >
      {supported ? "Supported" : "In Progress"}
    </span>
  );
}

const FEATURE_ROWS = [
  {
    feature: "Keyboard navigation",
    supported: true,
    notes: "All interactive elements navigable by keyboard",
  },
  {
    feature: "Screen reader compatibility",
    supported: true,
    notes: "Accessible labels provided for interactive elements and form fields",
  },
  {
    feature: "Focus indicators",
    supported: true,
    notes: "Visible focus states on all interactive components",
  },
  {
    feature: "Colour contrast",
    supported: true,
    notes: "WCAG AA contrast ratios throughout the interface",
  },
  {
    feature: "Text resizing",
    supported: true,
    notes: "Interface scales correctly when system font size is increased",
  },
  {
    feature: "Alt text on images",
    supported: true,
    notes: "Descriptive alt text on all non-decorative images",
  },
  {
    feature: "Form labels and errors",
    supported: true,
    notes: "All form fields labelled; errors described in text",
  },
  {
    feature: "Consent screen accessibility",
    supported: true,
    notes: "Tab navigation, aria-checked on checkboxes, screen-reader labels",
  },
  {
    feature: "Cookie banner accessibility",
    supported: true,
    notes: 'role="dialog", keyboard navigable, focus management',
  },
  {
    feature: "Captions for video content",
    supported: false,
    notes: "Being implemented progressively for all video content on the platform",
  },
  {
    feature: "Dark mode support",
    supported: false,
    notes: "Planned for a future release",
  },
  {
    feature: "Reduced motion support",
    supported: false,
    notes: "Respecting prefers-reduced-motion for all animated elements",
  },
  {
    feature: "Voice control compatibility",
    supported: false,
    notes: "Testing with Dragon NaturallySpeaking and iOS Voice Control",
  },
];
