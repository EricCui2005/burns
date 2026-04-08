import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://burnsandsonsheating.com";
const BUSINESS_NAME = "Burns and Sons Heating, Cooling, and Services";
const PHONE = "+18144132095";
const PHONE_DISPLAY = "(814) 413-2095";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BUSINESS_NAME} | HVAC in Erie, PA`,
    template: `%s | ${BUSINESS_NAME}`,
  },
  description:
    "Family-owned HVAC company in Erie, PA. Furnace & AC repair, installation, tune-ups, mini splits, heat pumps, and 24/7 emergency service. Licensed, insured, and 15 years of experience. Call (814) 413-2095.",
  keywords: [
    "HVAC Erie PA",
    "furnace repair Erie PA",
    "AC repair Erie PA",
    "heating and cooling Erie",
    "heat pump installation Erie PA",
    "mini split installation Erie",
    "emergency HVAC Erie",
    "Burns and Sons Heating",
  ],
  authors: [{ name: BUSINESS_NAME }],
  openGraph: {
    title: `${BUSINESS_NAME} | HVAC in Erie, PA`,
    description:
      "Family-owned HVAC in Erie, PA. Furnaces, AC, mini splits, heat pumps, and 24/7 emergency service. Save 15% on your first service.",
    url: SITE_URL,
    siteName: BUSINESS_NAME,
    images: [{ url: "/logo.jpg", width: 512, height: 512, alt: `${BUSINESS_NAME} logo` }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS_NAME} | HVAC in Erie, PA`,
    description:
      "Family-owned HVAC in Erie, PA. 24/7 emergency service. Save 15% on your first service.",
    images: ["/logo.jpg"],
  },
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true },
  icons: { icon: "/logo.jpg" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: BUSINESS_NAME,
  image: `${SITE_URL}/logo.jpg`,
  logo: `${SITE_URL}/logo.jpg`,
  url: SITE_URL,
  telephone: PHONE,
  email: "david@burnsandsonsheating.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Erie",
    addressRegion: "PA",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Erie" },
    { "@type": "State", name: "Pennsylvania" },
  ],
  founder: { "@type": "Person", name: "David Burns" },
  foundingDate: "2026",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[var(--brand-cream)] text-[var(--brand-navy)]">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

export { PHONE, PHONE_DISPLAY, BUSINESS_NAME, SITE_URL };
