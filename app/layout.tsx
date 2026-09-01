import type { Metadata } from "next";
import { Manrope, Be_Vietnam_Pro } from "next/font/google";
import { SurveyPopup } from "@/components/survey-popup";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const SITE_URL = "https://www.xparience.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Xparience — Mindful Dating App for Meaningful Connections",
    template: "%s — Xparience",
  },
  description:
    "Not just another dating app. Xparience is a mindful dating and lifestyle platform with curated virtual dates, real-world date ideas, and events — for people done with the noise.",
  applicationName: "Xparience",
  openGraph: {
    type: "website",
    siteName: "Xparience",
    url: SITE_URL,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    site: "@xparience",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Xparience",
      legalName: "OjoosCo Ltd",
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
      email: "support@xparience.com",
      sameAs: [
        "https://x.com/xparience",
        "https://www.tiktok.com/@xparience",
        "https://youtube.com/@xparience",
        "https://www.instagram.com/xparience",
        "https://www.linkedin.com/company/xparience/",
        "https://www.threads.com/@ojoosco",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Xparience",
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${manrope.variable} ${beVietnamPro.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {children}
        <SurveyPopup />
      </body>
    </html>
  );
}
