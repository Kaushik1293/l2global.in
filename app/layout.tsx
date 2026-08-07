import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from "react-toastify";
import { Urbanist } from "next/font/google";
import "aos/dist/aos.css";
import CookieConsent from "@/components/shared/CookieConsent";

export const metadata: Metadata = {
  metadataBase: new URL('https://l2global.in'),
  title: {
    default: 'Salesforce Agentforce AI & SAP Consultants | UK · Texas USA · UAE | L2 Global',
    template: '%s | L2 Global Technologies',
  },
  description:
    'UK-headquartered Salesforce Agentforce AI, SAP Gold Partner, MuleSoft and data science' +
    ' consultants. UK, Texas USA, UAE & India. 182+ projects delivered. Free consultation.',
  // REMOVED: keywords array — Google ignores meta keywords since 2009
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    alternateLocale: ['en_US', 'en_AE', 'en_SA', 'en_QA'],
    url: 'https://l2global.in',
    siteName: 'L2 Global Technologies',
    title: 'Salesforce Agentforce AI & SAP Consultants | L2 Global Technologies',
    description: 'UK, Texas USA & UAE IT consultants. Agentforce AI, SAP Gold Partner, MuleSoft. 182+ projects.',
    images: [{ url: '/assets/web/og-image.png', width: 1200, height: 630, alt: 'L2 Global Technologies — Salesforce Agentforce AI & SAP Consultants' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salesforce Agentforce AI & SAP Consultants | L2 Global',
    description: 'UK · Texas USA · UAE · India. Agentforce AI, SAP Gold Partner, MuleSoft, Data Science.',
    images: ['/assets/web/og-image.png'],
  },
  robots: {
    index: true, follow: true,
    googleBot: {
      index: true, follow: true,
      'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1
    },
  },
};

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'L2 Global Technologies',
    alternateName: ['L2 Global', 'L2 Global Tech'],
    url: 'https://l2global.in',
    logo: {
      '@type': 'ImageObject',
      url: 'https://l2global.in/assets/web/l2-svg.svg',
      width: 200, height: 60,
    },
    email: 'contactus@l2global.in',
    telephone: '+44-7442-586325',
    foundingDate: '2014', // FIX: was incorrectly '2020'
    numberOfEmployees: { '@type': 'QuantitativeValue', value: 45 },
    description:
      'UK-headquartered Salesforce Agentforce AI, SAP Gold Partner, MuleSoft, data science' +
      ' and website development consultants. UK, Texas USA, UAE & India. 182+ projects. Founded 2014.',
    address: [
      {
        '@type': 'PostalAddress',
        addressCountry: 'GB',
        streetAddress: 'Cheltenham Road, Gloucester',
        postalCode: 'GL2 0JR',
        addressRegion: 'England',
        name: 'L2 Global Technologies Ltd — UK Headquarters',
      },
      {
        '@type': 'PostalAddress',
        addressCountry: 'US',
        addressRegion: 'TX',
        addressLocality: 'Texas',
        name: 'L2 Global Technologies — Texas USA Office',
      },
      {
        '@type': 'PostalAddress',
        addressCountry: 'IN',
        addressLocality: 'Vijayawada',
        addressRegion: 'Andhra Pradesh',
        postalCode: '521286',
        streetAddress: 'Tempalli, Gannavaram, Krishna District',
        name: 'L2 Global Technologies — India Delivery Centre',
      },
      {
        '@type': 'PostalAddress',
        addressCountry: 'AE',
        addressLocality: 'Dubai',
        name: 'L2 Global Technologies — Dubai Office',
      },
    ],
    areaServed: ['GB', 'US', 'AE', 'SA', 'QA', 'KW', 'BH', 'OM', 'IN'].map(c => ({
      '@type': 'Country', name: c,
    })),
    knowsAbout: [
      'Salesforce Agentforce AI',
      'SAP S/4HANA Migration',
      'RISE with SAP',
      'SAP Joule AI',
      'MuleSoft Anypoint Platform',
      'Data Science and Machine Learning',
      'Salesforce Financial Services Cloud',
      'Salesforce Manufacturing Cloud',
      'CPQ and Revenue Cloud',
      'Website Design and Development',
      'AWS Cloud Migration',
    ],
    hasCredential: [
      { '@type': 'EducationalOccupationalCredential', name: 'Salesforce Partner' },
      { '@type': 'EducationalOccupationalCredential', name: 'SAP Gold Partner' },
      { '@type': 'EducationalOccupationalCredential', name: 'MuleSoft Anypoint Partner' },
      { '@type': 'EducationalOccupationalCredential', name: 'AWS Partner' },
      { '@type': 'EducationalOccupationalCredential', name: 'Oracle Technology Partner' },
    ],
    sameAs: [
      'https://www.linkedin.com/company/l2-global-technologies',
      'https://www.facebook.com/l2globaltechnologies',
      'https://twitter.com/l2globaltech',
      'https://www.youtube.com/@l2globaltechnologies',
      'https://www.instagram.com/l2globaltechnologies',
    ],
  };

  return (
    <html lang="en">
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://flagcdn.com" />
        <link rel="preconnect" href="https://widget.trustpilot.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/*
          GA4 CONSENT MODE v2 — GDPR/UK PECR COMPLIANT
          Step 1: Initialise GA in DENIED state before any other GA code.
          CookieConsent component calls gtag("consent","update",{...granted})
          after the user clicks Accept.
        */}
        <Script id="ga-consent-init" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              functionality_storage: 'denied',
              personalization_storage: 'denied',
              security_storage: 'granted',
              wait_for_update: 500
            });
          `}
        </Script>

        {/* Step 2: Load gtag.js */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YP4HCLVLZ9"
          strategy="afterInteractive"
        />

        {/* Step 3: Configure GA — will only fire analytics events after consent granted */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YP4HCLVLZ9', {
              send_page_view: true,
            });
          `}
        </Script>

        {/* Organization Schema — appears on every page */}
        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        {/* hreflang for international targeting */}
        <link rel="alternate" hrefLang="en-gb" href="https://l2global.in" />
        <link rel="alternate" hrefLang="en-us" href="https://l2global.in" />
        <link rel="alternate" hrefLang="en-ae" href="https://l2global.in" />
        <link rel="alternate" hrefLang="en-sa" href="https://l2global.in" />
        <link rel="alternate" hrefLang="en-qa" href="https://l2global.in" />
        <link rel="alternate" hrefLang="en-kw" href="https://l2global.in" />
        <link rel="alternate" hrefLang="en-bh" href="https://l2global.in" />
        <link rel="alternate" hrefLang="en-om" href="https://l2global.in" />
        <link rel="alternate" hrefLang="x-default" href="https://l2global.in" />

        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`antialiased ${urbanist.className}`}>
        {children}

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <CookieConsent />
      </body>
    </html>
  );
}
