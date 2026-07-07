import { X } from "lucide-react";

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

function WarnCallout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-10 rounded-r-2xl border-l-4 border-[#7d3f38] bg-[#ece4e0] px-7 py-6 text-base leading-relaxed text-[#7d3f38] sm:text-lg sm:leading-8">
      {children}
    </div>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-heading mt-12 border-b border-slate-200 pb-4 text-xl font-bold tracking-tight text-slate-800 sm:text-2xl">
      {children}
    </h3>
  );
}

export function TermsContent() {
  return (
    <section className="bg-[#f5f7f9] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto w-full max-w-6xl">
        {/* Intro */}
        <div className="rounded-r-2xl border-l-4 border-[#1f5063] bg-[#dfe8ee] px-7 py-6 text-base leading-relaxed text-[#1f5063] sm:text-lg sm:leading-8">
          These Terms of Use govern your access to and use of the Xparience
          platform, operated by OjoosCo Ltd. They form a legally binding
          agreement between you and OjoosCo Ltd. Please read them carefully.
          If you do not agree to these terms, you must not create an account
          or use any part of our service.
        </div>

        {/* Section 01 */}
        <div className="mt-16 sm:mt-20">
          <SectionLabel>Section 01</SectionLabel>
        </div>
        <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
          About Xparience
        </h2>
        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          Xparience is a dating and lifestyle platform operated by OjoosCo
          Ltd, a company registered in England and Wales. Xparience connects
          verified adults seeking genuine companionship, relationships, and
          meaningful connections.
        </p>
        <p className="mt-8 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          Our platform combines intelligent matching technology with optional
          human matchmaking and coaching services to provide a high-quality,
          intentional dating experience.
        </p>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-140 overflow-hidden rounded-2xl text-left">
            <tbody className="text-base leading-relaxed">
              {COMPANY_ROWS.map((row) => (
                <tr key={row.property} className="border-t border-slate-200/70 first:border-t-0">
                  <td className="w-1/4 bg-[#f8f9fb] px-8 py-14 align-middle font-medium text-slate-800">
                    {row.property}
                  </td>
                  <td className="bg-white px-8 py-14 align-middle text-slate-600">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 02 */}
        <SectionLabel>Section 02</SectionLabel>
        <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
          Eligibility
        </h2>
        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          To use Xparience, you must meet all of the following requirements:
        </p>
        <ul className="mt-8 list-disc space-y-3 pl-6 text-base leading-relaxed text-slate-700 sm:text-lg">
          <li>Be at least 18 years of age</li>
          <li>
            Be a human individual &mdash; automated accounts and bots are
            strictly prohibited
          </li>
          <li>
            Have the legal capacity to enter into a binding agreement under
            the laws of your country of residence
          </li>
          <li>Not be prohibited from using our services under any applicable law</li>
          <li>
            Successfully complete our mandatory identity and age verification
            process
          </li>
        </ul>
        <Callout>
          By creating an account, you confirm that all information you provide
          is{" "}
          <strong className="font-bold">
            accurate, truthful, and up to date
          </strong>
          . We reserve the right to suspend or terminate any account that does
          not meet the eligibility requirements.
        </Callout>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 03 */}
        <SectionLabel>Section 03</SectionLabel>
        <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
          Account Registration and Security
        </h2>

        <SubHeading>3.1 Creating Your Account</SubHeading>
        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          You must register an account to use Xparience. During registration,
          you will be required to provide your name, date of birth, email
          address, and complete our identity and age verification process. You
          agree to provide accurate and complete information and to keep it up
          to date.
        </p>

        <SubHeading>3.2 Account Security</SubHeading>
        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          You are responsible for maintaining the confidentiality of your
          login credentials. You must not share your account with any other
          person. You agree to notify us immediately at{" "}
          <a
            href="mailto:support@xparience.com"
            className="font-medium text-slate-900 underline underline-offset-4"
          >
            support@xparience.com
          </a>{" "}
          if you become aware of any unauthorised use of your account or any
          other security breach.
        </p>

        <SubHeading>3.3 One Account Per Person</SubHeading>
        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          Each person may only hold one active account on Xparience. Creating
          duplicate accounts breaches these terms and may result in the
          termination of all associated accounts.
        </p>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 04 */}
        <SectionLabel>Section 04</SectionLabel>
        <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
          Identity Verification
        </h2>
        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          All users must complete a mandatory identity and age verification
          check before accessing the platform. This process is required by
          the <strong className="font-bold text-slate-900">UK Online Safety Act 2023</strong>{" "}
          and is conducted by our trusted verification partner.
        </p>
        <p className="mt-8 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          You will be required to submit a valid government-issued photo ID
          and complete a real-time facial verification check. You agree to
          provide genuine and accurate documents.
        </p>
        <WarnCallout>
          <strong className="font-bold">Serious breach:</strong> Submitting
          false, altered, or fraudulent documents is a serious breach of these
          terms and may be referred to law enforcement authorities.
        </WarnCallout>
        <p className="mt-10 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          We use a hybrid verification model to confirm user identities and
          reserve the right to conduct manual verification of submitted
          documents where necessary. For full details of how biometric and
          identity data is handled, please read our{" "}
          <a
            href="/privacy-policy"
            className="font-medium text-slate-900 underline underline-offset-4"
          >
            Privacy Policy, Section 5
          </a>
          .
        </p>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 05 */}
        <SectionLabel>Section 05</SectionLabel>
        <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
          Acceptable Use
        </h2>
        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          You agree to use Xparience only for its intended purpose: to connect
          with other adults for dating and companionship in a safe and
          respectful manner.
        </p>

        <SubHeading>5.2 You must not:</SubHeading>
        <ul className="mt-8 overflow-hidden rounded-3xl bg-white">
          {PROHIBITED_ITEMS.map((item) => (
            <li
              key={item}
              className="flex items-center gap-6 border-t border-slate-100 px-7 py-7 first:border-t-0 sm:px-9"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#f6e3e2]">
                <X className="size-4 text-[#b93a31]" strokeWidth={2.5} />
              </span>
              <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                {item}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          We reserve the right to remove any content that violates these terms
          and to suspend or terminate any user&rsquo;s account that breaches
          them.
        </p>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 06 */}
        <SectionLabel>Section 06</SectionLabel>
        <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
          User Content
        </h2>

        <SubHeading>6.1 Your Content</SubHeading>
        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          You retain ownership of any content you upload to Xparience,
          including profile photos, descriptions, and messages. By uploading
          content, you grant OjoosCo Ltd a{" "}
          <strong className="font-bold text-slate-900">
            non-exclusive, royalty-free, worldwide licence
          </strong>{" "}
          to use, display, and distribute that content solely for the purpose
          of operating and improving the Xparience platform.
        </p>

        <SubHeading>6.2 Content Standards</SubHeading>
        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          All content you upload must be your own or content you have the
          right to use. You must not upload content that is sexually explicit,
          violent, discriminatory, defamatory, or otherwise unlawful. Profile
          photos must be genuine photographs of yourself.
        </p>

        <SubHeading>6.3 Content Removal</SubHeading>
        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          We reserve the right to remove any content that violates these terms
          or that we deem inappropriate, without prior notice. Repeated
          violations may result in account termination.
        </p>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 07 */}
        <SectionLabel>Section 07</SectionLabel>
        <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
          Subscriptions and Payments
        </h2>

        <SubHeading>7.1 Free and Paid Tiers</SubHeading>
        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          Xparience offers both free and paid subscription tiers. The features
          available on each tier are described on our pricing page, which may
          be updated from time to time.
        </p>

        <SubHeading>7.2 Billing</SubHeading>
        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          Paid subscriptions are billed on the terms set out at the point of
          purchase. By subscribing, you authorise us to charge your chosen
          payment method for the applicable fees. All prices are displayed
          inclusive of any applicable taxes.
        </p>

        <SubHeading>7.3 Cancellation</SubHeading>
        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          You may cancel your subscription at any time. Cancellation takes
          effect at the end of your current billing period. We do not offer
          refunds for unused portions of a subscription period except where
          required by applicable law.
        </p>

        <SubHeading>7.4 Price Changes</SubHeading>
        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          We may change our subscription prices from time to time. We will
          give you at least 30 days&rsquo; notice of any price increase before
          it takes effect. Your continued use of the paid service after the
          notice period constitutes acceptance of the new price.
        </p>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 08 */}
        <SectionLabel>Section 08</SectionLabel>
        <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
          Matchmaking and Coaching Services
        </h2>
        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          Elite-tier subscribers have access to our human-assisted matchmaking
          and coaching services. These services are provided by qualified
          professionals working with OjoosCo Ltd.
        </p>
        <Callout>
          <strong className="font-bold">Please note:</strong> Results from
          matchmaking and coaching services cannot be guaranteed, and outcomes
          will vary between individuals. Matchmaking and coaching sessions are
          subject to their own service terms, which will be provided to you
          upon subscription to the Elite tier.
        </Callout>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 09 */}
        <SectionLabel>Section 09</SectionLabel>
        <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
          Safety
        </h2>
        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          Your safety is our priority. Xparience has implemented identity
          verification, reporting tools, and moderation processes to help keep
          the platform safe. However, we cannot guarantee the conduct of other
          users outside of our platform.
        </p>
        <p className="mt-8 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          When meeting someone in person for the first time, we strongly
          encourage you to follow these safety guidelines:
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {SAFETY_CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-[#1f5063] bg-white px-7 py-9"
            >
              <h3 className="text-lg font-bold text-slate-900">
                {card.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <Callout>
          If you encounter behaviour that makes you uncomfortable or that you
          believe violates these terms, please{" "}
          <strong className="font-bold">report it immediately</strong> using
          the in-app reporting feature or by contacting{" "}
          <a
            href="mailto:support@xparience.com"
            className="font-medium underline underline-offset-4"
          >
            support@xparience.com
          </a>
          .
        </Callout>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 10 */}
        <SectionLabel>Section 10</SectionLabel>
        <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
          Reporting and Moderation
        </h2>
        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          We take reports seriously. If you report another user, we will
          investigate and take appropriate action, which may include removing
          content, issuing a warning, or suspending or terminating the
          reported account.
        </p>
        <p className="mt-8 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          We cannot always share the outcome of an investigation with you due
          to privacy obligations.
        </p>
        <WarnCallout>
          Making false or malicious reports about other users is itself a
          breach of these terms and may result in your own account being
          suspended or terminated.
        </WarnCallout>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 11 */}
        <SectionLabel>Section 11</SectionLabel>
        <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
          Intellectual Property
        </h2>
        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          All content on the Xparience platform &mdash; including the name,
          logo, design, software, text, images, and technology &mdash; is the
          property of OjoosCo Ltd or its licensors and is protected by UK and
          international intellectual property law.
        </p>
        <Callout>
          You may not copy, reproduce, modify, distribute, or create
          derivative works from any part of our platform without our prior
          written consent. This includes scraping or extracting data from the
          platform by any means.
        </Callout>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 12 */}
        <SectionLabel>Section 12</SectionLabel>
        <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
          Privacy
        </h2>
        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          Your privacy matters to us. Our use of your personal data is
          governed by our Privacy Policy, which explains in detail how we
          collect, use, store, and protect your data.
        </p>
        <Callout>
          By using Xparience you confirm that you have read and understood
          our{" "}
          <a
            href="/privacy-policy"
            className="font-medium underline underline-offset-4"
          >
            Privacy Policy &rarr;
          </a>
        </Callout>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 13 */}
        <SectionLabel>Section 13</SectionLabel>
        <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
          Disclaimers
        </h2>
        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          Xparience is provided on an &ldquo;as is&rdquo; and &ldquo;as
          available&rdquo; basis. We do not guarantee that the platform will
          be uninterrupted or error-free, or that any particular outcome will
          result from the use of the service.
        </p>
        <WarnCallout>
          <strong className="font-bold">Important</strong>: We do not conduct
          criminal background checks on users. While we verify identity and
          age, we cannot verify all information provided by users. You are
          responsible for exercising your own judgement when interacting with
          other users.
        </WarnCallout>
        <p className="mt-10 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          To the fullest extent permitted by law, OjoosCo Ltd excludes all
          warranties, whether express or implied, in connection with the
          Xparience platform and your use of it.
        </p>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 14 */}
        <SectionLabel>Section 14</SectionLabel>
        <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
          Limitation of Liability
        </h2>
        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          To the fullest extent permitted by applicable law, OjoosCo Ltd shall
          not be liable for any indirect, incidental, special, consequential,
          or punitive damages arising out of or in connection with your use of
          Xparience.
        </p>
        <p className="mt-8 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          Our total liability to you in connection with these terms shall not
          exceed the total amount paid by you to us in the{" "}
          <strong className="font-bold text-slate-900">
            12 months preceding
          </strong>{" "}
          the event giving rise to the claim.
        </p>
        <Callout>
          Nothing in these terms limits our liability for death or personal
          injury caused by our negligence, fraud or fraudulent
          misrepresentation, or any other liability that cannot be excluded by
          law.
        </Callout>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 15 */}
        <SectionLabel>Section 15</SectionLabel>
        <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
          Termination
        </h2>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-190 overflow-hidden rounded-2xl border border-slate-200 text-left">
            <thead>
              <tr className="bg-white/70 text-xs font-bold uppercase tracking-[0.15em] text-slate-700">
                <th className="px-6 py-5 font-bold">Who</th>
                <th className="px-6 py-5 font-bold">How</th>
                <th className="px-6 py-5 font-bold">Effect</th>
              </tr>
            </thead>
            <tbody className="text-base leading-relaxed">
              <tr className="border-t border-slate-200">
                <td className="px-6 py-12 align-middle font-medium text-slate-800">
                  By You
                </td>
                <td className="max-w-md px-6 py-12 align-middle text-slate-600">
                  Delete your account at any time through the Settings menu in
                  the app. Your profile will be removed from the platform.
                </td>
                <td className="max-w-md px-6 py-12 align-middle text-slate-600">
                  Some data may be retained as required by law. See our{" "}
                  <a
                    href="/privacy-policy"
                    className="font-medium text-slate-800 underline underline-offset-4"
                  >
                    Privacy Policy
                  </a>{" "}
                  for retention details.
                </td>
              </tr>
              <tr className="border-t border-slate-200">
                <td className="px-6 py-12 align-middle font-medium text-slate-800">
                  By Us
                </td>
                <td className="max-w-md px-6 py-12 align-middle text-slate-600">
                  We may suspend or terminate your account at any time and
                  without notice if we believe you have breached these terms,
                  if your continued use poses a risk, or if required by law.
                </td>
                <td className="max-w-md px-6 py-12 align-middle text-slate-600">
                  Your right to use Xparience ceases immediately. Outstanding
                  subscription fees at the time of termination for cause will
                  not be refunded.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 16 */}
        <SectionLabel>Section 16</SectionLabel>
        <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
          Changes to These Terms
        </h2>
        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          We may update these Terms of Use from time to time. When we make
          material changes, we will notify you by email and/or by displaying a
          prominent notice within the app at least 14 days before the changes
          take effect. Your continued use of Xparience after that date
          constitutes acceptance of the updated terms.
        </p>
        <WarnCallout>
          If you do not agree to the updated terms, you must stop using
          Xparience and delete your account before the changes take effect.
        </WarnCallout>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 17 */}
        <SectionLabel>Section 17</SectionLabel>
        <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
          Governing Law and Disputes
        </h2>
        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          These Terms of Use are governed by and construed in accordance with
          the{" "}
          <strong className="font-bold text-slate-900">
            laws of England and Wales.
          </strong>
        </p>
        <p className="mt-8 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          If you have a complaint or dispute, we encourage you to contact us
          first at{" "}
          <a
            href="mailto:support@xparience.com"
            className="font-medium text-slate-900 underline underline-offset-4"
          >
            support@xparience.com
          </a>
          . We will do our best to resolve matters informally.
        </p>
        <Callout>
          If we cannot resolve the dispute informally, it shall be referred to
          the <strong className="font-bold">courts of England and Wales</strong>{" "}
          for exclusive jurisdiction.
        </Callout>

        <hr className="my-16 border-slate-200 sm:my-20" />

        {/* Section 18 */}
        <SectionLabel>Section 18</SectionLabel>
        <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-[#16191c] sm:text-4xl">
          Contact Us
        </h2>
        <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          If you have any questions about these Terms of Use, please contact
          us:
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
                  Website
                </td>
                <td className="bg-white px-8 py-12 align-middle text-slate-600">
                  <a
                    href="https://www.xparience.com"
                    className="font-medium underline underline-offset-4"
                  >
                    www.xparience.com
                  </a>
                </td>
              </tr>
              <tr className="border-t border-slate-200/70">
                <td className="w-1/4 bg-[#f8f9fb] px-8 py-12 align-middle font-medium text-slate-800">
                  Registered Address
                </td>
                <td className="bg-white px-8 py-12 align-middle text-slate-600">
                  124 City Road, London, England, EC1V 2NX
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

const SAFETY_CARDS = [
  {
    title: "Meet in a public place",
    description:
      "Choose a busy, familiar location for any first meeting with someone you've connected with online.",
  },
  {
    title: "Tell someone you trust",
    description:
      "Let a trusted friend or family member know where you are going and who you are meeting.",
  },
  {
    title: "Arrange your own transport",
    description:
      "Stay in control of how you get there and how you get home — don't rely on your date for travel.",
  },
  {
    title: "Trust your instincts",
    description:
      "If something feels wrong at any point, you have every right to leave. Your safety comes first.",
  },
];

const PROHIBITED_ITEMS = [
  "Post false, misleading, or deceptive information on your profile",
  "Impersonate any other person or misrepresent your identity",
  "Use the platform to harass, abuse, threaten, stalk, or intimidate any other user",
  "Send unsolicited messages of a sexual, commercial, or otherwise inappropriate nature",
  "Use Xparience for any commercial purpose, including advertising, solicitation, or promotion, without our prior written consent",
  "Attempt to extract personal contact details from other users through coercion or deception",
  "Share, reproduce, or distribute any other user's content, images, or personal information without their consent",
  "Upload any content that is illegal, offensive, discriminatory, or that violates any applicable law",
  "Use automated tools, bots, scrapers, or scripts to interact with the platform",
  "Attempt to gain unauthorised access to any part of our systems or another user's account",
  "Engage in any conduct that could damage the reputation or operations of Xparience or OjoosCo Ltd",
];

const COMPANY_ROWS = [
  { property: "Company Name", value: "OjoosCo Ltd" },
  { property: "Registered in", value: "England and Wales" },
  { property: "Company No.", value: "16638905" },
  { property: "Registered Address", value: "124 City Road, London, England, EC1V 2NX" },
  { property: "Support Email", value: "support@xparience.com" },
];
