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
    <div className="rounded-r-2xl border-l-4 border-[#a03626] bg-[#f2e4e2] px-7 py-6 text-base leading-relaxed text-[#8f3b2e] sm:text-lg sm:leading-8">
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

function SpecialBadge() {
  return (
    <span className="rounded-full bg-[#fbe9e9] px-3 py-1 text-xs font-bold text-[#c0392b]">
      Special Category
    </span>
  );
}

function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mt-6 list-disc space-y-2.5 pl-6 text-base leading-relaxed text-slate-700 sm:text-lg">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

const PROCESSING_TABLE: {
  category: string;
  purpose: string;
  legalBasis: string;
  specialCategory: string;
}[] = [
  {
    category: "Account & Identity Data",
    purpose: "Creating and managing your account; authentication",
    legalBasis: "Contract (Art. 6(1)(b))",
    specialCategory: "N/A",
  },
  {
    category: "Identity Verification (Biometric & ID)",
    purpose:
      "Age verification; identity confirmation; fraud prevention; Online Safety Act compliance",
    legalBasis: "Legal obligation + Legitimate interests (Art. 6(1)(c)(f))",
    specialCategory: "Explicit consent (Art. 9(2)(a))",
  },
  {
    category: "Profile Data (general)",
    purpose: "Displaying your profile to other users; enabling matching",
    legalBasis: "Contract (Art. 6(1)(b))",
    specialCategory: "N/A",
  },
  {
    category: "Sexual orientation / relationship preferences",
    purpose: "Enabling compatibility matching; personalising experience",
    legalBasis: "Explicit consent (Art. 6(1)(a))",
    specialCategory: "Explicit consent (Art. 9(2)(a))",
  },
  {
    category: "Matching & Usage Data",
    purpose: "Improving match quality; platform analytics; personalisation",
    legalBasis: "Legitimate interests (Art. 6(1)(f))",
    specialCategory: "N/A",
  },
  {
    category: "Technical Data",
    purpose: "Platform security, bug fixing, and performance monitoring",
    legalBasis: "Legitimate interests (Art. 6(1)(f))",
    specialCategory: "N/A",
  },
  {
    category: "Payment Data",
    purpose: "Processing subscriptions; fraud prevention; financial records",
    legalBasis: "Contract + Legal obligation (Art. 6(1)(b)(c))",
    specialCategory: "N/A",
  },
  {
    category: "Communications Data",
    purpose: "Responding to support queries; resolving disputes; ensuring safety",
    legalBasis: "Legitimate interests + Legal obligation (Art. 6(1)(f)(c))",
    specialCategory: "N/A",
  },
  {
    category: "Messages between users",
    purpose: "Enabling communication on the platform; safety moderation",
    legalBasis: "Contract (Art. 6(1)(b))",
    specialCategory: "N/A",
  },
];

const RETENTION_TABLE: { type: string; period: React.ReactNode }[] = [
  {
    type: "Account data",
    period: (
      <>
        Duration of active account, plus{" "}
        <strong className="font-bold text-slate-800">2 years</strong> after
        account closure
      </>
    ),
  },
  {
    type: "Identity verification records",
    period: (
      <>
        Verification outcome: retained while account is active. ID document
        images: deleted within{" "}
        <strong className="font-bold text-slate-800">30 days</strong> of
        successful verification
      </>
    ),
  },
  {
    type: "Biometric data",
    period:
      "Deleted by third-party provider immediately after verification is complete. Not retained by OjoosCo Ltd.",
  },
  {
    type: "Profile and matching data",
    period: (
      <>
        Duration of active account. Deleted within{" "}
        <strong className="font-bold text-slate-800">30 days</strong> of account
        closure
      </>
    ),
  },
  {
    type: "Messages between users",
    period: (
      <>
        Retained for{" "}
        <strong className="font-bold text-slate-800">12 months</strong> after
        the conversation ends, then deleted
      </>
    ),
  },
  {
    type: "Payment records",
    period: (
      <>
        <strong className="font-bold text-slate-800">6 years</strong> &mdash;
        required by UK tax and financial regulations
      </>
    ),
  },
  {
    type: "Support and communications data",
    period: (
      <>
        <strong className="font-bold text-slate-800">3 years</strong> from the
        date of the communication
      </>
    ),
  },
  {
    type: "Legal hold data",
    period:
      "Duration of legal proceedings or regulatory investigation, then deleted",
  },
];

const CONTACT_DETAILS: { label: string; value: React.ReactNode }[] = [
  {
    label: "Email",
    value: (
      <a
        href="mailto:support@xparience.com"
        className="text-slate-700 underline hover:text-brand"
      >
        support@xparience.com
      </a>
    ),
  },
  {
    label: "Website",
    value: (
      <a
        href="https://www.xparience.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-700 underline hover:text-brand"
      >
        www.xparience.com
      </a>
    ),
  },
];

const ICO_DETAILS: { label: string; value: React.ReactNode }[] = [
  {
    label: "Website",
    value: (
      <a
        href="https://ico.org.uk"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-700 underline hover:text-brand"
      >
        ico.org.uk
      </a>
    ),
  },
  { label: "Telephone", value: "0303 123 1113" },
  {
    label: "Address",
    value:
      "Information Commissioner's Office, Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF",
  },
];

const RIGHTS: { ref: string; title: string; body: string }[] = [
  {
    ref: "Right 9.1",
    title: "Right of Access",
    body: "Request a copy of the personal data we hold about you (a Subject Access Request). This is free of charge.",
  },
  {
    ref: "Right 9.2",
    title: "Right of Rectification",
    body: "If data we hold is inaccurate or incomplete, you have the right to ask us to correct it. Most profile data can be updated directly in the Xparience app.",
  },
  {
    ref: "Right 9.3",
    title: "Right of Erasure",
    body: "Request deletion of your personal data in certain circumstances — where data is no longer necessary, you withdraw consent, or you object to processing.",
  },
  {
    ref: "Right 9.4",
    title: "Right of Restrict Processing",
    body: "Ask us to restrict processing of your personal data in certain circumstances, for example while we verify the accuracy of disputed data.",
  },
  {
    ref: "Right 9.5",
    title: "Right of Data Portability",
    body: "Where processing is based on consent or contract and carried out by automated means, receive your data in a structured, machine-readable format.",
  },
  {
    ref: "Right 9.6",
    title: "Right of Object",
    body: "Object to processing based on legitimate interests or for direct marketing purposes. If you object to marketing, we will stop immediately.",
  },
  {
    ref: "Right 9.7",
    title: "Automated Decision-Making",
    body: "Our compatibility matching assists in suggesting profiles but does not make final decisions about who you can connect with. You have the right not to be subject to purely automated decisions with significant effects.",
  },
  {
    ref: "Right 9.8",
    title: "Right to Withdraw Consent",
    body: "Where we rely on your consent, you have the right to withdraw it at any time. Contact us or use your account settings.",
  },
];

const COMPANY_DETAILS: { label: string; value: React.ReactNode }[] = [
  { label: "Company Name", value: "OjoosCo Ltd" },
  { label: "Registered in", value: "England and Wales" },
  { label: "Company No.", value: "16638905" },
  {
    label: "Registered Address",
    value: "124 City Road, London, England, EC1V 2NX",
  },
  { label: "ICO Registration No.", value: "ZC126821" },
  {
    label: "Data Protection Contact",
    value: (
      <a
        href="mailto:info@ojoosco.com"
        className="text-slate-700 underline hover:text-brand"
      >
        info@ojoosco.com
      </a>
    ),
  },
];

export function PrivacyContent() {
  return (
    <section className="bg-[#f5f7f9] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto w-full max-w-6xl">
        {/* Intro callout */}
        <Callout>
          This Privacy Policy explains how OjoosCo Ltd collects, uses, stores,
          shares, and protects your personal data when you use the Xparience
          platform. We are committed to handling your data responsibly,
          transparently, and in full compliance with UK GDPR and the Data
          Protection Act 2018.{" "}
          <strong className="font-bold">
            Please read this policy carefully before using Xparience
          </strong>
          . By creating an account, you confirm that you have read and
          understood this policy.
        </Callout>

        {/* Section 01 */}
        <div className="mt-16">
          <SectionLabel>Section 01</SectionLabel>
          <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
            Who We Are
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            OjoosCo Ltd is the{" "}
            <strong className="font-bold text-slate-900">
              data controller
            </strong>{" "}
            for personal data collected through the Xparience platform. This
            means we determine the purposes and means by which your personal
            data is processed.
          </p>

          {/* Company details table */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200">
            {COMPANY_DETAILS.map((row, i) => (
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

          <p className="mt-10 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            If you have any questions about this policy or how we handle your
            data, please contact us at the email address above.
          </p>
        </div>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 02 */}
        <div>
          <SectionLabel>Section 02</SectionLabel>
          <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
            Personal Data We Collect
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            We collect the following categories of personal data when you use
            Xparience:
          </p>

          {/* 2.1 */}
          <SubHeading>2.1 Account and Identity Data</SubHeading>
          <Bullets
            items={[
              "Full name",
              "Date of birth",
              "Email address",
              "Phone number",
            ]}
          />

          {/* 2.2 */}
          <SubHeading>
            2.2 Identity Verification Data <SpecialBadge />
          </SubHeading>
          <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            As part of our mandatory onboarding verification process, we
            collect:
          </p>
          <Bullets
            items={[
              "Government-issued photo ID (e.g., passport, driving licence)",
              "A real-time selfie or facial scan for identity matching",
              "Biometric data derived from facial recognition processing, used solely to verify your identity and confirm you are 18 or over",
            ]}
          />
          <div className="mt-8">
            <Callout>
              This data is processed as{" "}
              <strong className="font-bold">
                special category biometric data
              </strong>{" "}
              under Article 9 of the UK GDPR. Verification uses a hybrid model
              &mdash; some submissions are processed automatically by our
              trusted third-party identity verification partner; others are
              reviewed manually by our trained internal team.
            </Callout>
          </div>

          {/* 2.3 */}
          <SubHeading>2.3 Profile Data</SubHeading>
          <Bullets
            items={[
              "Profile photographs uploaded by you",
              "Biography and personal description",
              "Gender identity and sexual orientation (provided voluntarily)",
              "Relationship preferences and intentions",
              "Location (city or general area, as provided by you)",
              "Occupation and lifestyle information (provided voluntarily)",
            ]}
          />

          {/* 2.4 */}
          <SubHeading>2.4 Matching and Usage Data</SubHeading>
          <Bullets
            items={[
              "Profiles you match with",
              "Messages and communications sent through the platform",
              "Preferences and filters you apply",
              "Features and pages you interact with",
              "Time and frequency of platform use",
            ]}
          />

          {/* 2.5 */}
          <SubHeading>2.5 Technical Data</SubHeading>
          <Bullets
            items={[
              "IP address",
              "Device type, operating system, and browser information",
              "Unique device identifiers",
              <>
                Cookies and similar tracking technologies (see{" "}
                <a href="#section-10" className="underline hover:text-brand">
                  Section 10
                </a>
                )
              </>,
              "App version and crash reports",
            ]}
          />

          {/* 2.6 */}
          <SubHeading>2.6 Payment Data</SubHeading>
          <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            If you subscribe to a paid tier, payment is processed by our
            third-party payment provider. We do not store your full card
            details. We retain only transaction records (amount, date, and
            subscription tier) for accounting and fraud-prevention purposes.
          </p>

          {/* 2.7 */}
          <SubHeading>2.7 Communications and Support Data</SubHeading>
          <Bullets
            items={[
              "Messages you send to our support team",
              "Reports you submit about other users",
              "Feedback and survey responses",
            ]}
          />
        </div>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 03 */}
        <div>
          <SectionLabel>Section 03</SectionLabel>
          <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
            Special Category Data
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            Xparience processes certain categories of personal data classified
            as{" "}
            <strong className="font-bold text-slate-900">
              &ldquo;special category data&rdquo;
            </strong>{" "}
            under Article 9 of the UK GDPR. These require a higher level of
            protection and a specific legal basis.
          </p>
          <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            The special category data we process includes:
          </p>
          <Bullets
            items={[
              <>
                <strong className="font-bold text-slate-900">
                  Sexual orientation and relationship preferences
                </strong>{" "}
                &mdash; provided voluntarily by you as part of your profile
              </>,
              <>
                <strong className="font-bold text-slate-900">
                  Biometric data
                </strong>{" "}
                &mdash; facial images and derived biometric identifiers used
                solely for identity and age verification during onboarding
              </>,
              <>
                <strong className="font-bold text-slate-900">
                  Inferred data about sex life or sexual preferences
                </strong>{" "}
                &mdash; which may be inferred from your matching behaviour and
                preferences on the platform
              </>,
            ]}
          />
          <div className="mt-10">
            <Callout>
              <strong className="font-bold">Legal basis:</strong> Our legal
              basis for processing special category data is your{" "}
              <strong className="font-bold">explicit consent</strong>, obtained
              during account creation and onboarding. You will be asked to
              provide clear, specific, and informed consent for each category of
              special data we process. You may withdraw this consent at any time
              (see{" "}
              <a href="#section-9" className="underline hover:text-brand">
                Section 9
              </a>
              ), though withdrawal may affect your ability to use certain
              features of the platform.
            </Callout>
          </div>
        </div>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 04 */}
        <div>
          <SectionLabel>Section 04</SectionLabel>
          <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
            How and Why We Use Your Data
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            The table below sets out the purposes for which we process your
            personal data, together with our legal basis under Article 6 of the
            UK GDPR and, where applicable, the special category condition under
            Article 9.
          </p>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-220 overflow-hidden rounded-2xl border border-slate-200 text-left">
              <thead>
                <tr className="bg-white/70 text-xs font-bold uppercase tracking-[0.15em] text-slate-700">
                  <th className="px-6 py-5 font-bold">Data Category</th>
                  <th className="px-6 py-5 font-bold">Purpose</th>
                  <th className="px-6 py-5 font-bold">Legal Basis (Art. 6)</th>
                  <th className="px-6 py-5 font-bold">
                    Special Category (Art. 9)
                  </th>
                </tr>
              </thead>
              <tbody className="text-base">
                {PROCESSING_TABLE.map((row) => (
                  <tr key={row.category} className="border-t border-slate-200">
                    <td className="max-w-xs px-6 py-10 align-middle font-medium text-slate-800">
                      {row.category}
                    </td>
                    <td className="max-w-xs px-6 py-10 align-middle text-slate-600">
                      {row.purpose}
                    </td>
                    <td className="max-w-xs px-6 py-10 align-middle text-slate-700">
                      {row.legalBasis}
                    </td>
                    <td className="px-6 py-10 align-middle text-slate-700">
                      {row.specialCategory}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-10 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            We will only use your personal data for the purposes set out above.
            If we need to use your data for a new purpose, we will notify you and
            seek fresh consent where required.
          </p>
        </div>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 05 */}
        <div>
          <SectionLabel>Section 05</SectionLabel>
          <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
            Identity and Age Verification
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            Xparience requires all users to complete a mandatory identity and
            age verification check before accessing the platform. This is a
            legal requirement under the{" "}
            <strong className="font-bold text-slate-900">
              UK Online Safety Act 2023
            </strong>{" "}
            and Ofcom&rsquo;s age assurance guidance.
          </p>

          {/* 5.1 */}
          <SubHeading>5.1 How Verification Works</SubHeading>
          <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            We use a hybrid verification model to confirm user identity. Some
            submissions are processed automatically through a trusted
            third-party identity verification provider, while others are
            reviewed manually by our internal team.
            <br />
            As part of the verification process, you may be required to:
          </p>
          <Bullets
            items={[
              "Upload a valid government-issued photo ID (such as a passport, driving licence, or national identity card); and",
              "Complete a real-time selfie check, which will be compared against your ID using facial recognition technology.",
            ]}
          />
          <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            We may also carry out additional manual reviews where necessary to
            verify authenticity or investigate potential issues.
          </p>
          <div className="mt-8">
            <Callout>
              By using our services, you acknowledge that your personal data
              &mdash; including identity documents and biometric data &mdash;
              may be processed for identity verification, fraud prevention, and
              platform security. Such data may be shared with our third-party
              identity verification providers solely for these purposes.
            </Callout>
          </div>

          {/* 5.2 */}
          <SubHeading>5.2 How Biometric Data Is Handled</SubHeading>
          <Bullets
            items={[
              "Your facial biometric data is processed by our third-party provider solely to verify your identity and confirm you are 18 or over",
              "Our third-party provider operates as a data processor on our behalf under a written Data Processing Agreement",
              "Biometric templates and raw facial data are not retained by OjoosCo Ltd beyond what is necessary for the verification process",
              "A record that verification was completed, and its outcome, is retained on your account",
              "Your ID document image is retained only for the minimum period required for compliance and dispute resolution, after which it is deleted",
            ]}
          />

          {/* 5.3 */}
          <SubHeading>5.3 Your Consent</SubHeading>
          <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            Before submitting your verification documents, you will be asked to
            provide explicit consent to the processing of your biometric data.
            This consent is separate from your general account consent and is
            specific to identity verification.
          </p>
          <div className="mt-8">
            <WarningCallout>
              <strong className="font-bold">Please note:</strong> You may
              withdraw this consent at any time. However, doing so will result
              in account suspension, as verification is a mandatory condition of
              use under the UK Online Safety Act 2023.
            </WarningCallout>
          </div>
        </div>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 06 */}
        <div>
          <SectionLabel>Section 06</SectionLabel>
          <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
            Who We Share Your Data With
          </h2>
          <div className="mt-8">
            <Callout>
              <strong className="font-bold">
                We do not sell your personal data.
              </strong>{" "}
              We do not share it with third parties for their own marketing
              purposes.
            </Callout>
          </div>
          <p className="mt-8 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            We share your data only in the following limited circumstances:
          </p>

          {/* 6.1 */}
          <SubHeading>6.1 Other Xparience Users</SubHeading>
          <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            Your profile information (photos, bio, preferences, and general
            location) is visible to other verified users. Your{" "}
            <strong className="font-bold text-slate-900">
              full name, contact details, and identity documents are never
              visible
            </strong>{" "}
            to other users.
          </p>

          {/* 6.2 */}
          <SubHeading>6.2 Service Providers (Data Processors)</SubHeading>
          <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            We share data with trusted third-party providers who process data on
            our behalf under written Data Processing Agreements. These include:
          </p>
          <Bullets
            items={[
              "Identity verification provider",
              "Cloud hosting and infrastructure providers",
              "Payment processing provider",
              "Email and communications platform",
              "Analytics and performance monitoring tools",
              "Customer support platform",
            ]}
          />
          <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            All processors are required to handle your data securely, only for
            the purposes we specify, and in compliance with UK GDPR.
          </p>

          {/* 6.3 */}
          <SubHeading>6.3 Human Matchmakers and Coaches</SubHeading>
          <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            Xparience offers an Elite tier that includes bespoke human-assisted
            matchmaking and coaching services. If you subscribe to this tier, we
            may share relevant profile information with our vetted matchmaking
            and coaching team (with your consent). These team members are bound
            by confidentiality obligations and data protection policies.
          </p>

          {/* 6.4 */}
          <SubHeading>6.4 Legal and Regulatory Obligations</SubHeading>
          <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            We may disclose your personal data where required by law, including
            in response to lawful requests from law enforcement or regulatory
            authorities, or to protect the rights and safety of our users.
          </p>

          {/* 6.5 */}
          <SubHeading>6.5 Business Transfers</SubHeading>
          <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            In the event of a merger, acquisition, or sale of our business, your
            personal data may be transferred to the acquiring entity. We will
            notify you before your data is transferred and becomes subject to a
            different privacy policy.
          </p>
        </div>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 07 */}
        <div>
          <SectionLabel>Section 07</SectionLabel>
          <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
            International Data Transfers
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            OjoosCo Ltd is incorporated in the United Kingdom. Some of our
            service providers may process data outside the UK. Where personal
            data is transferred outside the UK, we ensure appropriate safeguards
            are in place, including:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-slate-700 sm:text-lg">
            <li>Transfer to countries with a UK adequacy decision; or</li>
            <li>
              Use of the UK International Data Transfer Agreement (IDTA) or UK
              Addendum to the EU Standard Contractual Clauses; or
            </li>
            <li>
              Other appropriate safeguards recognised under UK GDPR Article 46.
            </li>
          </ul>
          <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            You may request details of the safeguards we use for international
            transfers by contacting us at the email address in{" "}
            <a href="#section-15" className="underline hover:text-brand">
              Section 15
            </a>
            .
          </p>
        </div>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 08 */}
        <div>
          <SectionLabel>Section 08</SectionLabel>
          <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
            How Long We Keep Your Data
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            We retain your personal data only for as long as necessary to fulfil
            the purposes for which it was collected, or as required by law.
          </p>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-160 overflow-hidden rounded-2xl border border-slate-200 text-left">
              <thead>
                <tr className="bg-white/70 text-xs font-bold uppercase tracking-[0.15em] text-slate-700">
                  <th className="w-1/4 px-6 py-5 font-bold">Data Type</th>
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

          <p className="mt-10 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            When your data is no longer required, we will securely delete or
            anonymise it in accordance with our internal data retention policy.
          </p>
        </div>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 09 */}
        <div id="section-9">
          <SectionLabel>Section 09</SectionLabel>
          <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
            Your Rights
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            Under UK GDPR, you have the following rights in relation to your
            personal data. We will respond to all valid requests within{" "}
            <strong className="font-bold text-slate-900">
              one calendar month.
            </strong>
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {RIGHTS.map((right) => (
              <div
                key={right.ref}
                className="rounded-2xl border border-slate-300 bg-white/40 px-8 py-10"
              >
                <p className="text-sm font-bold uppercase tracking-[0.1em] text-[#1f5063]">
                  {right.ref}
                </p>
                <h3 className="font-heading mt-6 text-lg font-bold text-[#16191c] sm:text-xl">
                  {right.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  {right.body}
                </p>
              </div>
            ))}
          </div>

          {/* 9.9 */}
          <SubHeading>9.9 Right to Lodge a Complaint</SubHeading>
          <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            If you believe we have not handled your data lawfully, you have the
            right to lodge a complaint with the{" "}
            <strong className="font-bold text-slate-900">
              Information Commissioner&rsquo;s Office (ICO)
            </strong>
            :
          </p>
          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200">
            {ICO_DETAILS.map((row, i) => (
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
          <p className="mt-10 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            We would appreciate the opportunity to address your concerns before
            you approach the ICO. Please{" "}
            <a href="#section-15" className="underline hover:text-brand">
              contact us first
            </a>
            .
          </p>
        </div>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 10 */}
        <div id="section-10">
          <SectionLabel>Section 10</SectionLabel>
          <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
            Cookies and Tracking Technologies
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            Xparience uses cookies and similar tracking technologies on our
            website and in our app. We use:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-slate-700 sm:text-lg">
            <li>
              Essential cookies &mdash; necessary for the platform to function
              (e.g., keeping you logged in)
            </li>
            <li>
              Analytical cookies &mdash; help us understand how users interact
              with the platform so we can improve it
            </li>
            <li>
              Preference cookies &mdash; remember your settings and preferences
            </li>
          </ul>
          <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            We do not use advertising or tracking cookies for third-party
            marketing purposes.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            When you first visit our platform, you will be shown a cookie
            consent banner. You can manage your cookie preferences at any time
            through your account settings or browser settings. Rejecting
            non-essential cookies will not prevent you from using the platform.
          </p>
          <div className="mt-8">
            <Callout>
              For the full details of our cookie practices, categories,
              technical requirements, and your choices, please read our{" "}
              <a
                href="/cookie-policy"
                className="font-bold underline transition-colors hover:text-brand"
              >
                Cookie Policy &rarr;
              </a>
            </Callout>
          </div>
        </div>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 11 */}
        <div>
          <SectionLabel>Section 11</SectionLabel>
          <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
            Data Security
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            We implement appropriate technical and organisational measures to
            protect your personal data. Our security measures include:
          </p>
          <Bullets
            items={[
              "Encryption of data in transit (TLS) and at rest",
              "Strict access controls and role-based permissions for staff",
              "Regular security assessments and vulnerability testing",
              "Secure password storage using industry-standard hashing algorithms",
              "Data Processing Agreements with all third-party processors",
              "Staff training on data protection obligations",
            ]}
          />
          <div className="mt-8">
            <Callout>
              <strong className="font-bold">Data breach notification:</strong>{" "}
              In the event of a personal data breach likely to result in a risk
              to your rights and freedoms, we will notify the ICO within{" "}
              <strong className="font-bold">72 hours</strong> and notify you
              directly where the risk is high.
            </Callout>
          </div>
        </div>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 12 */}
        <div>
          <SectionLabel>Section 12</SectionLabel>
          <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
            Children&rsquo;s Data
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            Xparience is strictly an{" "}
            <strong className="font-bold text-slate-900">
              adults-only platform
            </strong>
            . We do not knowingly collect or process data from anyone under the
            age of 18. Our mandatory identity and age verification process is
            specifically designed to prevent minors from accessing the platform.
          </p>
          <div className="mt-8">
            <Callout>
              If we discover we have inadvertently collected data from a person
              under 18, we will delete that data immediately and suspend the
              account. If you believe a minor has created an account, please{" "}
              <a
                href="#section-15"
                className="underline transition-colors hover:text-brand"
              >
                contact us immediately
              </a>
              .
            </Callout>
          </div>
        </div>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 13 */}
        <div>
          <SectionLabel>Section 13</SectionLabel>
          <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
            Third-Party Links and Services
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            The Xparience platform may contain links to third-party websites or
            services. We are not responsible for the privacy practices of those
            third parties. We encourage you to read their privacy policies
            before providing any personal data.
          </p>
        </div>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 14 */}
        <div>
          <SectionLabel>Section 14</SectionLabel>
          <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
            Changes to This Privacy Policy
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            We may update this Privacy Policy from time to time. When we make
            material changes, we will notify you by email and/or by displaying a
            prominent notice on the platform before the changes take effect.
          </p>
          <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            The effective date at the top of this policy indicates when it was
            last updated. We encourage you to review this policy periodically.
          </p>
        </div>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 15 */}
        <div id="section-15">
          <SectionLabel>Section 15</SectionLabel>
          <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
            How to Contact Us
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            If you have any questions, concerns, or requests relating to this
            Privacy Policy or how we handle your personal data, please contact
            us:
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
          <p className="mt-10 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
            We aim to respond to all privacy-related enquiries within{" "}
            <strong className="font-bold text-slate-900">
              five business days
            </strong>
            , and to resolve them fully within one calendar month.
          </p>
          <div className="mt-8">
            <Callout>
              We would appreciate the opportunity to address your concerns
              before you approach the ICO. Please contact us first using the
              details above.
            </Callout>
          </div>
        </div>
      </div>
    </section>
  );
}
