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

export function CookieContent() {
  return (
    <section className="bg-[#f5f7f9] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto w-full max-w-6xl">
        {/* Section 01 */}
        <SectionLabel>Section 01</SectionLabel>
        <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
          What are cookies?
        </h2>
        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          Cookies are small text files that are placed on your device
          (computer, phone, or tablet) when you visit a website. They help
          websites recognise your device on return visits, remember your
          preferences, and understand how you interact with the site.
          <br />
          Cookies set by the website you are visiting are called first-party
          cookies. Cookies set by services or tools used by that website are
          called third-party cookies.
        </p>
        <Callout>
          <strong className="font-bold">Our commitment:</strong> Xparience
          does not use advertising or marketing cookies. We do not track you
          across other websites, share your data with advertisers, or build
          marketing profiles about you.
        </Callout>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 02 */}
        <SectionLabel>Section 02</SectionLabel>
        <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
          Legal basis for cookies
        </h2>
        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          Under the{" "}
          <strong className="font-bold text-slate-900">
            UK General Data Protection Regulation (UK GDPR)
          </strong>{" "}
          and the{" "}
          <strong className="font-bold text-slate-900">
            Privacy and Electronic Communications Regulations (PECR)
          </strong>
          , we are required to obtain your informed consent before placing any
          non-essential cookies on your device.
        </p>
        <p className="mt-8 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          <strong className="font-bold text-slate-900">
            Essential cookies
          </strong>{" "}
          are exempt from this requirement &mdash; they are strictly necessary
          for the website to function and may be set automatically. All other
          cookies require a clear, positive opt-in from you.
        </p>
        <Callout>
          <strong className="font-bold">Important:</strong> Scrolling past or
          ignoring our cookie banner does not constitute consent. Your choice
          is only recorded when you click &ldquo;Accept All&rdquo;,
          &ldquo;Essential Only&rdquo;, or &ldquo;Save My Preferences&rdquo;.
        </Callout>

        <p className="mt-10 text-base leading-relaxed text-slate-700 sm:text-lg">
          This policy reflects our obligations under:
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-6 text-base leading-relaxed text-slate-700 sm:text-lg">
          <li>UK General Data Protection Regulation (UK GDPR)</li>
          <li>Privacy and Electronic Communications Regulations (PECR)</li>
          <li>ICO Cookie Guidance (updated guidance)</li>
        </ul>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 03 */}
        <SectionLabel>Section 03</SectionLabel>
        <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
          Cookies we use
        </h2>
        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          We use three categories of cookies on Xparience. We do not use
          marketing or advertising cookies.
        </p>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-190 overflow-hidden rounded-2xl border border-slate-200 text-left">
            <thead>
              <tr className="bg-white/70 text-xs font-bold uppercase tracking-[0.15em] text-slate-700">
                <th className="px-6 py-5 font-bold">Category</th>
                <th className="px-6 py-5 font-bold">Purpose</th>
                <th className="px-6 py-5 font-bold">Consent Required?</th>
                <th className="px-6 py-5 font-bold">Examples</th>
              </tr>
            </thead>
            <tbody className="text-base leading-relaxed">
              {COOKIE_ROWS.map((row) => (
                <tr key={row.category} className="border-t border-slate-200">
                  <td className="px-6 py-10 align-middle font-medium text-slate-800">
                    {row.category}
                  </td>
                  <td className="max-w-md px-6 py-10 align-middle text-slate-600">
                    {row.purpose}
                  </td>
                  <td
                    className={`px-6 py-10 align-middle italic ${
                      row.consentMuted ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    {row.consent}
                  </td>
                  <td className="max-w-sm px-6 py-10 align-middle text-slate-700">
                    {row.examples}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 04 */}
        <SectionLabel>Section 04</SectionLabel>
        <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
          Your choices
        </h2>
        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          When you first visit Xparience, a cookie banner will appear at the
          bottom of your screen. It gives you full control over which cookies
          are placed on your device.
        </p>

        <h3 className="mt-10 text-lg font-bold text-slate-900">
          What the banner looks like
        </h3>

        {/* Banner mock — buttons are illustrative only */}
        <div className="mt-6 rounded-3xl border-2 border-[#1f4f63] bg-white px-6 py-10 sm:px-12 sm:py-12">
          <p className="font-heading text-2xl font-extrabold text-[#16191c] sm:text-3xl">
            🍪 We use cookies
          </p>
          <p className="mt-6 max-w-4xl text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            We use essential cookies to keep the platform running, and
            optional analytical cookies to help us improve your experience. We
            do not use advertising cookies or track you for marketing
            purposes. You can choose which cookies to accept below.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              className="rounded-xl bg-[#16191c] px-9 py-3.5 font-semibold text-white shadow-md transition-colors hover:bg-black"
            >
              Accept All
            </button>
            <button
              type="button"
              className="rounded-xl border border-slate-300 bg-white px-9 py-3.5 font-semibold text-slate-900 shadow-sm transition-colors hover:bg-slate-100"
            >
              Essentials Only
            </button>
          </div>
          <div className="mt-8 flex flex-wrap gap-8 font-semibold text-slate-900">
            <span>Manage Preferences</span>
            <span>Privacy Policy</span>
          </div>
        </div>

        <h3 className="mt-12 text-lg font-bold text-slate-900">
          Your options explained
        </h3>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-160 overflow-hidden rounded-2xl border border-slate-200 text-left">
            <thead>
              <tr className="bg-white/70 text-xs font-bold uppercase tracking-[0.15em] text-slate-700">
                <th className="w-1/4 px-6 py-5 font-bold">Choice</th>
                <th className="px-6 py-5 font-bold">What It Does</th>
              </tr>
            </thead>
            <tbody className="text-base leading-relaxed">
              {CHOICE_ROWS.map((row) => (
                <tr key={row.choice} className="border-t border-slate-200">
                  <td className="px-6 py-12 align-middle font-medium text-slate-800">
                    {row.choice}
                  </td>
                  <td className="px-6 py-12 align-middle text-slate-600">
                    {row.effect}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Callout>
          Both &ldquo;Accept All&rdquo; and &ldquo;Essential Only&rdquo; are
          equally prominent buttons. We do not use dark patterns to nudge you
          towards any particular choice.
        </Callout>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 05 */}
        <SectionLabel>Section 05</SectionLabel>
        <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
          Managing your preferences
        </h2>
        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          Clicking &ldquo;Manage Preferences&rdquo; opens a preferences panel
          where you can control each cookie category individually. Here is how
          it works:
        </p>

        {/* Preferences panel mock — toggles are illustrative only */}
        <div className="mt-10 space-y-9 rounded-3xl bg-white px-7 py-12 sm:px-14">
          {PREFERENCE_ROWS.map((row) => (
            <div
              key={row.title}
              className="flex items-start justify-between gap-8"
            >
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {row.title}
                </h3>
                <p className="mt-2 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
                  {row.description}
                </p>
              </div>
              <ToggleMock on={row.on} />
            </div>
          ))}
        </div>

        <Callout>
          <strong className="font-bold">
            How to update your preferences:
          </strong>{" "}
          You can update your cookie choices at any time by clearing your
          browser cookies and revisiting the site, which will re-show the
          consent banner. Your preferences are stored for 12 months.
        </Callout>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 06 */}
        <SectionLabel>Section 06</SectionLabel>
        <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
          How we store your consent
        </h2>
        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          Your cookie consent preference is stored in a first-party cookie
          named xp_cookie_consent. This cookie is set on your device and is
          readable by our servers to ensure the correct cookie configuration
          is applied to your session.
        </p>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-140 overflow-hidden rounded-2xl border border-slate-200 text-left">
            <thead>
              <tr className="bg-white/70 text-xs font-bold uppercase tracking-[0.15em] text-slate-700">
                <th className="w-1/4 px-6 py-5 font-bold">Property</th>
                <th className="px-6 py-5 font-bold">Value</th>
              </tr>
            </thead>
            <tbody className="text-base leading-relaxed">
              {CONSENT_ROWS.map((row) => (
                <tr key={row.property} className="border-t border-slate-200">
                  <td className="px-6 py-14 align-middle font-medium text-slate-800">
                    {row.property}
                  </td>
                  <td className="px-6 py-14 align-middle text-slate-600">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="mt-12 text-lg font-bold text-slate-900">
          Example &mdash; Accept All
        </h3>
        <pre className="mt-6 overflow-x-auto rounded-3xl bg-white px-10 py-12 font-mono text-sm leading-relaxed text-slate-600 sm:text-base">
          {`{
  "essential":    true,
  "analytics":    true,
  "preferences":  true,
  "timestamp":    "2026-04-15T14:30:00Z",
  "version":      "1.0"
}`}
        </pre>

        <h3 className="mt-12 text-lg font-bold text-slate-900">
          Example &mdash; Essential Only
        </h3>
        <pre className="mt-6 overflow-x-auto rounded-3xl bg-white px-10 py-12 font-mono text-sm leading-relaxed text-slate-600 sm:text-base">
          {`{
  "essential":    true,
  "analytics":    false,
  "preferences":  false,
  "timestamp":    "2026-04-15T14:30:00Z",
  "version":      "1.0"
}`}
        </pre>

        <Callout>
          <strong className="font-bold">Re-consent:</strong> After 12 months,
          or if we materially update our cookie policy, the banner will
          re-appear and ask for your consent again.
        </Callout>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 07 */}
        <SectionLabel>Section 07</SectionLabel>
        <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
          Third-party tools
        </h2>
        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          Where we use third-party analytical tools (such as Google Analytics
          or Mixpanel), those tools may set their own cookies on your device,
          but only if you have accepted analytical cookies.
          <br />
          These tools operate under their own privacy policies. We configure
          them to anonymise your IP address and aggregate data where possible.
          <br />
          If you use Google Tag Manager or a similar tool, analytics tags are
          configured to fire only when your consent record shows
          &ldquo;analytics&rdquo;: true.
        </p>
        <Callout>
          We do not use advertising networks, retargeting pixels, or social
          media tracking cookies. No third party can use our cookies to track
          you across other websites.
        </Callout>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 08 */}
        <SectionLabel>Section 08</SectionLabel>
        <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
          Policy updates
        </h2>
        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          We may update this Cookie Policy from time to time to reflect
          changes in the cookies we use or applicable legal requirements. The
          version number and date at the top of this page will always show
          when this policy was last updated.
          <br />
          If we make material changes that affect how we use your data, we
          will re-show the cookie consent banner and ask for your consent
          again, even if your previous consent has not yet expired.
        </p>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 09 */}
        <SectionLabel>Section 09</SectionLabel>
        <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
          Contact us
        </h2>
        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          If you have any questions about how we use cookies, or to exercise
          any rights you may have under UK GDPR, please contact us:
        </p>
        <Callout>
          <strong className="font-bold">OjoosCo Ltd</strong>
          <br />
          Email: support@xparience.com
          <br />
          Privacy Policy:{" "}
          <a
            href="/privacy-policy"
            className="font-medium underline underline-offset-4 transition-colors hover:text-brand"
          >
            /privacy-policy
          </a>
        </Callout>
        <p className="mt-10 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          You also have the right to lodge a complaint with the Information
          Commissioner&rsquo;s Office (ICO) at{" "}
          <a
            href="https://ico.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-slate-900 underline underline-offset-4 transition-colors hover:text-brand"
          >
            ico.org.uk
          </a>{" "}
          if you believe we are not handling your data in accordance with the
          law.
        </p>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 10 */}
        <SectionLabel>Section 10</SectionLabel>
        <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
          Developer go-live checklist
        </h2>
        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          Before deploying the cookie banner to production, verify all of the
          following:
        </p>

        <ol className="mt-10 space-y-5">
          {CHECKLIST_ITEMS.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-6 rounded-3xl border border-slate-200 bg-white px-6 py-9 sm:px-8"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#16191c] text-base font-bold text-white">
                {index + 1}
              </span>
              <p className="text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
                {item}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const CHECKLIST_ITEMS = [
  "Visit the site in a fresh private/incognito browser — banner appears immediately before any non-essential cookies are set.",
  "Check browser cookies before interacting with the banner — only essential cookies are present; no analytics cookies.",
  'Click "Accept All" — banner dismisses, analytics cookies appear, xp_cookie_consent written with analytics: true.',
  'Click "Essential Only" — banner dismisses, no analytics cookies, xp_cookie_consent written with analytics: false.',
  'Click "Manage Preferences" — panel opens, Essential toggle locked ON, Analytics and Preference toggles OFF by default.',
  "In Manage Preferences, toggle Analytics ON and click Save — banner dismisses, analytics cookies present, consent cookie updated correctly.",
  "Revisit the site (banner should not re-show) — xp_cookie_consent cookie is still valid, banner stays hidden.",
  "Clear cookies and revisit — banner reappears correctly.",
  "Test on mobile (iOS and Android) — banner is fully readable, buttons meet 44px minimum tap target, no layout overflow.",
  'Test keyboard navigation — Tab key reaches all banner elements; focus moves to banner on load; all buttons have descriptive aria labels; role="dialog" and aria-label="Cookie consent" are set.',
];

const CONSENT_ROWS = [
  { property: "Cookie name", value: "xp_cookie_consent" },
  { property: "Cookie type", value: "First-party, server-readable" },
  { property: "Expiry", value: "12 months from the date consent is given" },
  { property: "Format", value: "JSON (see examples below)" },
];

function ToggleMock({ on }: { on: boolean }) {
  return (
    <span
      aria-hidden
      className={`mt-8 inline-flex h-8 w-14 shrink-0 items-center rounded-full px-1 ${
        on ? "justify-end bg-[#1f4f63]" : "justify-start bg-slate-200"
      }`}
    >
      <span className="size-6 rounded-full bg-white shadow-sm" />
    </span>
  );
}

const PREFERENCE_ROWS = [
  {
    title: "Essential Cookies",
    description:
      "These cookies are necessary for the platform to function and cannot be disabled. They include session management, security tokens, and authentication.",
    on: false,
  },
  {
    title: "Analytical Cookies",
    description:
      "These cookies help us understand how visitors use Xparience so we can improve the experience. Data is aggregated and pseudonymised where possible. Examples: page visits, feature usage, error tracking.",
    on: true,
  },
  {
    title: "Preference Cookies",
    description:
      "These cookies remember your settings and preferences, such as your chosen language or theme, so you do not have to re-enter them each visit. You can change your preferences anytime in settings.",
    on: true,
  },
];

const CHOICE_ROWS = [
  {
    choice: "Accept All",
    effect:
      "Enables all cookie categories — essential, analytical, and preference cookies. The banner is dismissed and your choice is saved for 12 months.",
  },
  {
    choice: "Essential Only",
    effect:
      "Only essential cookies are set. No analytical or preference cookies are placed. The banner is dismissed and your choice is saved for 12 months.",
  },
  {
    choice: "Manage Preferences",
    effect:
      "Opens a detailed panel where you can toggle individual cookie categories on or off before saving your selection.",
  },
];

const COOKIE_ROWS = [
  {
    category: "Essential / Strictly Necessary",
    purpose:
      "Session management, authentication, security tokens, load balancing. These are required for the site to function correctly.",
    consent: "No — set automatically",
    consentMuted: true,
    examples: "Session ID, CSRF token, auth token",
  },
  {
    category: "Analytical / Performance",
    purpose:
      "Understanding how users navigate the site, measuring performance, and identifying errors. Data is aggregated and pseudonymised where possible.",
    consent: "Yes — opt-in required",
    consentMuted: false,
    examples:
      "Google Analytics, Mixpanel, page visit tracking, feature usage, error tracking",
  },
  {
    category: "Preference / Functional",
    purpose:
      "Remembering your settings and preferences such as language, theme, and your cookie consent choices, so you do not need to re-enter them on each visit.",
    consent: "Yes — opt-in required",
    consentMuted: false,
    examples: "UI preference cookies, language settings, theme selection",
  },
  {
    category: "Marketing / Advertising",
    purpose: "Not used by Xparience.",
    consent: "N/A — not used",
    consentMuted: true,
    examples: "-",
  },
];
