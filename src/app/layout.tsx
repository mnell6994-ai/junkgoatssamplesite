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
  title: "Mobile Sauna Rentals | SaunaSwift - Premium Wood-Burning Saunas in Virginia",
  description: "Premium mobile sauna rentals for personal wellness, corporate events, and special occasions in Virginia. Book your authentic wood-burning sauna experience today.",
  keywords: "mobile sauna rental, sauna rental Virginia, wood burning sauna, event sauna rental, corporate wellness sauna, Richmond sauna, Charlottesville sauna, Williamsburg sauna, Fredericksburg sauna",
  openGraph: {
    title: "SaunaSwift - Mobile Sauna Rentals in Virginia",
    description: "Premium mobile sauna rentals for individuals, companies, and events. Experience authentic wood-burning saunas in Richmond, Charlottesville, Fredericksburg, and Williamsburg.",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544367567-0d27e6ffb351?w=1200&h=630&fit=crop",
        alt: "Premium mobile sauna rental experience",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SaunaSwift - Mobile Sauna Rentals in Virginia",
    description: "Premium mobile sauna rentals for individuals, companies, and events. Experience authentic wood-burning saunas across Virginia.",
    images: ["https://images.unsplash.com/photo-1544367567-0d27e6ffb351?w=1200&h=630&fit=crop"],
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
    "name": "SaunaSwift",
    "url": "https://saunaswift.com",
    "logo": "https://saunaswift.com/logo.png",
    "description": "Premium mobile sauna rentals across Virginia",
    "areaServed": ["Richmond, VA", "Charlottesville, VA", "Fredericksburg, VA", "Williamsburg, VA"],
    "telephone": "+1-804-555-0123",
    "email": "info@saunaswift.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Richmond",
      "addressRegion": "VA",
      "postalCode": "23219",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.facebook.com/saunaswift",
      "https://www.instagram.com/saunaswift",
      "https://www.linkedin.com/company/saunaswift"
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
