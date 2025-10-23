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

export const metadata: Metadata = {
  title: "Junk Goats Junk Removal | Professional Junk Removal Services in Richmond VA",
  description: "Professional junk removal services in Richmond, VA. Junk removal, furniture removal, estate cleanout, construction debris, and more. Licensed, insured, locally owned. Free estimates!",
  keywords: "junk removal Richmond VA, junk removal Richmond Virginia, furniture removal Richmond, estate cleanout Richmond, construction debris Richmond, appliance removal Richmond, yard waste Richmond, commercial cleanout Richmond",
  openGraph: {
    title: "Junk Goats Junk Removal - Professional Junk Removal Services in Richmond VA",
    description: "Professional junk removal services in Richmond, VA. Junk removal, furniture removal, estate cleanout, construction debris, and more. Licensed, insured, locally owned. Free estimates!",
    type: "website",
    images: [
      {
        url: "/images/junk-goats-logo.png",
        alt: "Junk Goats Junk Removal Services",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Junk Goats Junk Removal - Professional Junk Removal Services in Richmond VA",
    description: "Professional junk removal services in Richmond, VA. Junk removal, furniture removal, estate cleanout, construction debris, and more. Licensed, insured, locally owned. Free estimates!",
    images: ["/images/junk-goats-logo.png"],
  },
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Junk Goats Junk Removal",
    "url": "https://junkgoatsrichmond.com",
    "logo": "/images/junk-goats-logo.png",
    "description": "Professional junk removal services in Richmond, VA and surrounding areas",
    "areaServed": ["Richmond, VA", "Henrico, VA", "Chesterfield, VA", "Midlothian, VA", "Mechanicsville, VA"],
    "telephone": "+1-804-494-7999",
    "email": "info@junkgoatsrichmond.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Richmond",
      "addressRegion": "VA",
      "postalCode": "23219",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.facebook.com/junkgoatsrichmond",
      "https://www.instagram.com/junkgoatsrichmond",
      "https://www.linkedin.com/company/junk-goats-junk-removal"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
