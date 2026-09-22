import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SITE_URL = "https://sabbirminhaz.com";
const NAME = "Sabbir Ahmed Minhaz";
const TITLE = "Co-Founder, CTO & AI Engineer";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${NAME} (SAM) - ${TITLE}`,
    template: `%s - ${NAME} (SAM)`,
  },
  description:
    "Sabbir Ahmed Minhaz (SAM) is a Co-Founder, CTO and AI Engineer in Bangladesh. He builds AI workflow automations, voice agents and intelligent systems at CodeMyPixel.",
  keywords: [
    "Sabbir Ahmed Minhaz",
    "SAM",
    "AI Engineer",
    "AI Engineer Bangladesh",
    "CTO",
    "Co-Founder",
    "CodeMyPixel",
    "AI automation",
    "workflow automation",
    "voice agents",
    "LLM engineer",
    "Bangladesh",
  ],
  authors: [{ name: NAME, url: SITE_URL }],
  creator: NAME,
  publisher: NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: `${NAME} (SAM)`,
    title: `${NAME} (SAM) - ${TITLE}`,
    description:
      "Co-Founder, CTO & AI Engineer in Bangladesh. Building AI workflow automations, voice agents and intelligent systems.",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    site: "@sam_minhaz",
    creator: "@sam_minhaz",
    title: `${NAME} (SAM) - ${TITLE}`,
    description:
      "Co-Founder, CTO & AI Engineer in Bangladesh. Building AI workflow automations and intelligent systems.",
  },
  category: "technology",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: NAME,
  alternateName: ["SAM", "Sabbir Minhaz"],
  url: SITE_URL,
  jobTitle: "Co-Founder, CTO & AI Engineer",
  description:
    "AI Engineer and CTO in Bangladesh. Co-founder of CodeMyPixel, building AI workflow automations, voice agents and intelligent systems.",
  nationality: "Bangladeshi",
  address: {
    "@type": "PostalAddress",
    addressCountry: "BD",
    addressLocality: "Dhaka",
  },
  worksFor: {
    "@type": "Organization",
    name: "CodeMyPixel",
    url: "https://codemypixel.com",
    description:
      "Software and AI automation agency building workflow automations, AI agents and intelligent systems.",
  },
  knowsAbout: [
    "Artificial Intelligence",
    "AI Engineering",
    "Large Language Models",
    "AI Agents",
    "Workflow Automation",
    "Voice AI",
    "Next.js",
    "TypeScript",
    "Python",
  ],
  sameAs: [
    "https://x.com/sam_minhaz",
    "https://github.com/sabbirahmed404",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${NAME} (SAM)`,
  url: SITE_URL,
  description:
    "Personal website of Sabbir Ahmed Minhaz (SAM), Co-Founder, CTO & AI Engineer.",
  author: {
    "@type": "Person",
    name: NAME,
  },
  inLanguage: "en",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 w-full max-w-3xl mx-auto px-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
