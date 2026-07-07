import { Check, X } from "lucide-react";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1f5063]">
      {children}
    </p>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-r-2xl border-l-4 border-[#1f5063] bg-[#dfe8ee] px-7 py-6 text-base leading-relaxed text-[#1f5063] sm:text-lg sm:leading-8">
      {children}
    </div>
  );
}

function WarningCallout({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-r-2xl border-l-4 border-[#a03626] bg-[#e7e2e1] px-7 py-6 text-base leading-relaxed text-[#8f3b2e] sm:text-lg sm:leading-8">
      {children}
    </div>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-heading mt-12 flex flex-wrap items-center gap-3 border-b border-slate-200 pb-4 text-xl font-bold text-[#16191c] sm:text-2xl">
      {children}
    </h3>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-[#7ba0b0] bg-[#cbdae2] px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] text-[#1f5063]">
      {children}
    </span>
  );
}

function DataCard({
  title,
  body,
  badge,
  wide,
}: {
  title: string;
  body: string;
  badge: string;
  wide?: boolean;
}) {
  return (
    <div
      className={`flex flex-col rounded-2xl border border-slate-200 bg-white/40 px-8 py-8 ${
        wide ? "sm:col-span-2" : ""
      }`}
    >
      <h4 className="text-lg font-bold text-[#16191c]">{title}</h4>
      <p className="mt-4 text-base leading-relaxed text-slate-600">{body}</p>
      <div className="mt-6">
        <Badge>{badge}</Badge>
      </div>
    </div>
  );
}

function IconList({
  variant,
  items,
}: {
  variant: "x" | "check";
  items: React.ReactNode[];
}) {
  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
      {items.map((item, i) => (
        <div
          key={i}
          className={`flex items-center gap-5 px-6 py-5 ${
            i > 0 ? "border-t border-slate-100" : ""
          }`}
        >
          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
              variant === "x"
                ? "bg-[#fadedd] text-[#c0392b]"
                : "bg-[#d1dfe5] text-[#1f5063]"
            }`}
          >
            {variant === "x" ? (
              <X className="h-[18px] w-[18px]" strokeWidth={2.5} />
            ) : (
              <Check className="h-[18px] w-[18px]" strokeWidth={2.5} />
            )}
          </span>
          <span className="text-base leading-relaxed text-slate-600">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

const CONTACT_DETAILS: { label: string; value: React.ReactNode }[] = [
  {
    label: "Email",
    value: (
      <a
        href="mailto:support@xparience.com"
        className="text-slate-700 hover:text-brand hover:underline"
      >
        support@xparience.com
      </a>
    ),
  },
  {
    label: "Full Privacy Policy",
    value: (
      <a
        href="/privacy-policy"
        className="text-slate-700 underline hover:text-brand"
      >
        xparience.com/privacy
      </a>
    ),
  },
  {
    label: "Data Controller",
    value: "OjoosCo Ltd, 124 City Road, London, England, EC1V 2NX",
  },
  { label: "ICO Registration", value: "ZC126821" },
];

const HEALTH_RIGHTS: { title: string; body: string; wide?: boolean }[] = [
  {
    title: "Right of Access",
    body: "Request a copy of the health data we hold about you at any time, free of charge.",
  },
  {
    title: "Right to Rectification",
    body: "Correct any inaccurate health or well-being data we hold about you.",
  },
  {
    title: "Right to Erasure",
    body: "Request deletion of your health data at any time, independent of your account status.",
  },
  {
    title: "Right to Withdraw Consent",
    body: "Withdraw your consent to processing health data at any time via Settings or by contacting us.",
  },
  {
    title: "Right to Restrict Processing",
    body: "Ask us to pause the processing of your health data while any dispute or correction request is being resolved.",
    wide: true,
  },
];

const RETENTION_TABLE: { type: string; period: React.ReactNode }[] = [
  {
    type: "Well-being assessment data",
    period: (
      <>
        Duration of active account. Deleted within{" "}
        <strong className="font-bold text-slate-800">30 days</strong> of account
        closure.
      </>
    ),
  },
  {
    type: "Dietary & lifestyle preferences",
    period: (
      <>
        Duration of active account. Deleted within{" "}
        <strong className="font-bold text-slate-800">30 days</strong> of account
        closure.
      </>
    ),
  },
  {
    type: "Coaching session notes",
    period: (
      <>
        Duration of your coaching relationship plus{" "}
        <strong className="font-bold text-slate-800">12 months</strong>, then
        deleted &mdash; unless you request earlier deletion.
      </>
    ),
  },
  {
    type: "Other health-related profile information",
    period: (
      <>
        Deleted within{" "}
        <strong className="font-bold text-slate-800">30 days</strong> of account
        closure, or upon your request at any time.
      </>
    ),
  },
];

function NumberedList({ items }: { items: React.ReactNode[] }) {
  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
      {items.map((item, i) => (
        <div
          key={i}
          className={`flex items-center gap-5 px-6 py-5 ${
            i > 0 ? "border-t border-slate-100" : ""
          }`}
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#16191c] text-sm font-bold text-white">
            {i + 1}
          </span>
          <span className="text-base leading-relaxed text-slate-600">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

const VOLUNTARY_DATA: {
  title: string;
  body: string;
  badge: string;
  wide?: boolean;
}[] = [
  {
    title: "Well-being Insights",
    body: "General mood or lifestyle preferences shared through optional assessments you choose to complete.",
    badge: "Voluntary",
  },
  {
    title: "Mental Health Preferences",
    body: "Sensitivities or mental health preferences you choose to disclose on your profile or during coaching sessions.",
    badge: "Voluntary",
  },
  {
    title: "Dietary Preferences",
    body: "Food-related lifestyle information shared through the Plan a Meal Together Virtual Date feature (e.g., vegan, halal, keto, high-protein).",
    badge: "Voluntary",
  },
  {
    title: "Lifestyle & Fitness",
    body: "General lifestyle and fitness preferences shared as part of your profile or matching preferences.",
    badge: "Voluntary",
  },
  {
    title: "Coaching Session Notes",
    body: "Notes or reflections shared during or after coaching sessions with our dating or well-being coaches, retained only with your consent to provide continuity of service.",
    badge: "Voluntary · Consent Required",
    wide: true,
  },
];

export function HealthDataContent() {
  return (
    <section className="bg-[#f5f7f9] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto w-full max-w-6xl">
        {/* Intro callout */}
        <Callout>
          This Consumer Health Data Privacy Policy explains how Xparience
          handles any health or well-being information you choose to share on
          the platform. It should be read alongside our full{" "}
          <a
            href="/privacy-policy"
            className="underline transition-colors hover:text-brand"
          >
            Privacy Policy
          </a>
          . By using Xparience&rsquo;s well-being features, you confirm you have
          read and understood this policy.
        </Callout>

        {/* Section 01 */}
        <div className="mt-16">
          <SectionLabel>Section 01</SectionLabel>
          <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
            What Is Consumer Health Data?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            Consumer health data refers to personal information that relates to
            your physical or mental health, well-being, or emotional state. On
            Xparience, this may include information you share voluntarily as part
            of using our platform and its wellbeing features.
          </p>
          <div className="mt-8">
            <Callout>
              <strong className="font-bold">Important to understand</strong>:
              Xparience is a dating and lifestyle platform, not a medical or
              healthcare service. We do not provide medical advice, diagnosis,
              or treatment. Any health-related data we collect is limited to what
              is relevant to your experience on the platform and is{" "}
              <strong className="font-bold">
                always provided voluntarily by you.
              </strong>
            </Callout>
          </div>
        </div>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 02 */}
        <div>
          <SectionLabel>Section 02</SectionLabel>
          <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
            Health and Well-being Data We Collect
          </h2>

          {/* 2.1 */}
          <SubHeading>2.1 Data You Provide Voluntarily</SubHeading>
          <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            Through Xparience&rsquo;s Well-Being features and general platform
            experience, you may choose to share the following types of
            information:
          </p>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {VOLUNTARY_DATA.map((card) => (
              <DataCard key={card.title} {...card} />
            ))}
          </div>

          {/* 2.2 */}
          <SubHeading>2.2 Data We Do Not Collect</SubHeading>
          <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            Xparience does not collect, request, or store any of the following:
          </p>
          <IconList
            variant="x"
            items={[
              "Medical records or clinical health data of any kind",
              "Prescription or medication information",
              "Genetic data",
              <>
                Biometric data, except where strictly required for identity and
                age verification (described in our{" "}
                <a href="/privacy-policy" className="underline hover:text-brand">
                  main Privacy Policy
                </a>
                )
              </>,
              "Any health data from wearable devices, fitness trackers, or health apps",
            ]}
          />
        </div>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 03 */}
        <div>
          <SectionLabel>Section 03</SectionLabel>
          <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
            How We Use Your Health and Well-being Data
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            We use health and well-being data solely for the following purposes:
          </p>
          <IconList
            variant="check"
            items={[
              "To personalise your experience, including improving match relevance and recommendations based on the lifestyle preferences you choose to share",
              "To provide the Well-Being features you have chosen to engage with, including assessments, mindfulness tools, and coaching sessions",
              "To enable relevant Virtual Date experiences, such as meal planning, where dietary preferences improve the quality of suggestions",
              "To facilitate coaching sessions with our well-being and dating coaches, who may use information you share to provide personalised guidance",
              "To improve the quality and safety of well-being features, without making automated decisions that significantly affect you",
            ]}
          />
          <div className="mt-8">
            <WarningCallout>
              <strong className="font-bold">We will never:</strong> Use your
              health or well-being data for advertising, targeted marketing, or
              sale to third parties under any circumstances.
            </WarningCallout>
          </div>
        </div>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 04 */}
        <div>
          <SectionLabel>Section 04</SectionLabel>
          <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
            Legal Basis for Processing
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            Health and well-being data shared on Xparience is treated as{" "}
            <strong className="font-bold text-slate-900">
              special category data
            </strong>{" "}
            under{" "}
            <strong className="font-bold text-slate-900">
              UK GDPR Article 9
            </strong>
            . This means it requires a higher level of protection and a specific
            legal basis to process.
          </p>
          <div className="mt-8">
            <Callout>
              Our legal basis for processing this data is your{" "}
              <strong className="font-bold">explicit consent</strong>, which is
              obtained through clear, separate consent requests during onboarding
              and at the point you choose to use specific well-being features.
            </Callout>
          </div>
          <p className="mt-8 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            You may withdraw your consent at any time by:
          </p>
          <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-700 sm:text-lg">
            <li className="flex gap-3">
              <span className="text-slate-400">&rarr;</span>
              <span>
                Contacting us at{" "}
                <a
                  href="mailto:support@xparience.com"
                  className="underline hover:text-brand"
                >
                  support@xparience.com
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-slate-400">&rarr;</span>
              <span>
                Adjusting your preferences in{" "}
                <strong className="font-bold text-slate-900">
                  Settings &gt; Privacy &amp; Data
                </strong>{" "}
                within the app
              </span>
            </li>
          </ul>
          <div className="mt-8">
            <Callout>
              Withdrawal of consent will not affect the lawfulness of processing
              carried out before withdrawal, but may limit your access to
              certain well-being features.
            </Callout>
          </div>
        </div>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 05 */}
        <div>
          <SectionLabel>Section 05</SectionLabel>
          <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
            Coaching Sessions &mdash; Special Provisions
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            If you book a session with one of our dating coaches, well-being
            coaches, or life coaches through Xparience, the following additional
            provisions apply:
          </p>
          <NumberedList
            items={[
              "Information you share during coaching sessions is treated with the highest level of confidentiality.",
              "Our coaches are bound by confidentiality obligations and data protection policies as a condition of their engagement with OjoosCo Ltd.",
              "Session notes may be retained to help your coach provide continuity of service across multiple sessions, with your consent.",
              "No session content is shared with other users, used for matching purposes, or disclosed to third parties except where required by law.",
              "Coaching sessions are not a substitute for professional medical or mental health care.",
              <>
                If you have concerns about how your coaching session data is
                handled, please contact us at{" "}
                <a
                  href="mailto:support@xparience.com"
                  className="underline hover:text-brand"
                >
                  support@xparience.com
                </a>
                .
              </>,
            ]}
          />
        </div>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 06 */}
        <div>
          <SectionLabel>Section 06</SectionLabel>
          <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
            Data Sharing
          </h2>
          <div className="mt-8">
            <Callout>
              <strong className="font-bold">
                We do not sell, rent, or trade your health or well-being data
                under any circumstances.
              </strong>
            </Callout>
          </div>
          <p className="mt-8 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            Health and well-being data may be shared only in the following
            limited circumstances:
          </p>
          <ul className="mt-4 space-y-3 text-base leading-relaxed text-slate-700 sm:text-lg">
            <li className="flex gap-3">
              <span className="text-slate-400">&rarr;</span>
              <span>
                With our internal coaching team, where you have subscribed to
                coaching services and have consented to sharing relevant
                information
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-slate-400">&rarr;</span>
              <span>
                With our technology service providers who operate our platform
                infrastructure, under strict data processing agreements that
                prohibit use of your data for any other purpose
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-slate-400">&rarr;</span>
              <span>
                With regulatory or law enforcement authorities, where required
                by law
              </span>
            </li>
          </ul>
          <div className="mt-8">
            <Callout>
              We do not transfer your health or well-being data outside the UK
              or European Economic Area without appropriate safeguards in place.
            </Callout>
          </div>
        </div>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 07 */}
        <div>
          <SectionLabel>Section 07</SectionLabel>
          <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
            Data Retention
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            We retain health and well-being data only for as long as necessary
            to provide the services you have requested.
          </p>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-160 overflow-hidden rounded-2xl border border-slate-200 text-left">
              <thead>
                <tr className="bg-white/70 text-xs font-bold uppercase tracking-[0.15em] text-slate-700">
                  <th className="w-1/3 px-6 py-5 font-bold">Data Type</th>
                  <th className="px-6 py-5 font-bold">Retention Period</th>
                </tr>
              </thead>
              <tbody className="text-base">
                {RETENTION_TABLE.map((row) => (
                  <tr key={row.type} className="border-t border-slate-200">
                    <td className="px-6 py-12 align-middle font-medium text-slate-800">
                      {row.type}
                    </td>
                    <td className="px-6 py-12 align-middle text-slate-600">
                      {row.period}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8">
            <Callout>
              You may request deletion of any health or well-being data at any
              time, independent of your account status. We will process such
              requests in accordance with applicable data protection laws within
              one calendar month.
            </Callout>
          </div>
        </div>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 08 */}
        <div>
          <SectionLabel>Section 08</SectionLabel>
          <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
            Your Rights
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            In relation to your health and well-being data specifically, you
            have the following rights. We will respond to all valid requests
            within{" "}
            <strong className="font-bold text-slate-900">
              one calendar month.
            </strong>
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {HEALTH_RIGHTS.map((right) => (
              <div
                key={right.title}
                className={`rounded-2xl border border-slate-300 bg-white/40 px-8 py-8 ${
                  right.wide ? "sm:col-span-2" : ""
                }`}
              >
                <h3 className="text-lg font-bold text-[#16191c]">
                  {right.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  {right.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Callout>
              To exercise any of these rights, contact us at{" "}
              <a
                href="mailto:support@xparience.com"
                className="underline hover:text-brand"
              >
                support@xparience.com
              </a>
              . We will respond within one calendar month.
            </Callout>
          </div>
        </div>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 09 */}
        <div>
          <SectionLabel>Section 09</SectionLabel>
          <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
            Security
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            Health and well-being data is protected using industry-standard
            security measures, including:
          </p>
          <IconList
            variant="check"
            items={[
              "Encryption of data in transit (TLS) and at rest",
              "Strict access controls limiting data access to authorised personnel only",
              "Regular security monitoring and vulnerability assessments",
              "Internal policies and safeguards governing how staff handle sensitive data",
            ]}
          />
          <div className="mt-8">
            <Callout>
              Access to health data is limited to authorised personnel who
              require it to provide the specific services you have requested. No
              one else within OjoosCo Ltd has access to this data.
            </Callout>
          </div>
        </div>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 10 */}
        <div>
          <SectionLabel>Section 10</SectionLabel>
          <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
            Automated Decision-Making
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            We may use limited automated processing to personalise your
            experience &mdash; for example, suggesting matches based on the
            lifestyle preferences and well-being insights you have chosen to
            share.
          </p>
          <div className="mt-8">
            <Callout>
              <strong className="font-bold">
                We do not use health or well-being data to make decisions that
                have legal or similarly significant effects on you.
              </strong>{" "}
              Our compatibility matching assists in suggesting profiles; it does
              not determine who you can or cannot connect with.
            </Callout>
          </div>
        </div>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 11 */}
        <div>
          <SectionLabel>Section 11</SectionLabel>
          <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
            Changes to This Policy
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            We may update this policy from time to time to reflect changes in our
            features or applicable legal requirements. Material changes will be
            communicated to you by email and by a prominent notice on the
            platform before they take effect.
          </p>
          <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            The effective date at the top of this policy will always reflect when
            it was last updated.
          </p>
        </div>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 12 */}
        <div>
          <SectionLabel>Section 12</SectionLabel>
          <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            If you have any questions about this Consumer Health Data Privacy
            Policy, or wish to exercise any of your rights, please contact us:
          </p>
          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200">
            {CONTACT_DETAILS.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-1 sm:grid-cols-[minmax(0,18rem)_1fr] ${
                  i > 0 ? "border-t border-slate-200" : ""
                }`}
              >
                <div className="bg-[#f3f5f7] px-6 py-7 text-base font-medium text-slate-800">
                  {row.label}
                </div>
                <div className="bg-white px-6 py-7 text-base text-slate-600">
                  {row.value}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Callout>
              We aim to respond to all privacy-related enquiries within{" "}
              <strong className="font-bold">five business days</strong>, and to
              resolve them fully within one calendar month. If you remain
              unsatisfied, you have the right to lodge a complaint with the{" "}
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-colors hover:text-brand"
              >
                ICO at ico.org.uk
              </a>
              .
            </Callout>
          </div>
        </div>
      </div>
    </section>
  );
}
