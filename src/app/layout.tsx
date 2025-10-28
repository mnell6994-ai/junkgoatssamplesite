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
  metadataBase: new URL('https://junkgoatsrichmond.com'),
  title: "Junk Goats Junk Removal | Richmond VA Junk Removal Services",
  description: "Professional junk removal services in Richmond, VA. Same-day service for furniture, appliances, estate cleanouts & construction debris. Licensed & insured. Free estimates!",
  keywords: "junk removal Richmond VA, junk removal Richmond Virginia, furniture removal Richmond, estate cleanout Richmond, construction debris Richmond, appliance removal Richmond, yard waste Richmond, commercial cleanout Richmond",
  alternates: {
    canonical: 'https://junkgoatsrichmond.com',
  },
  openGraph: {
    title: "Junk Goats Junk Removal - Richmond VA Junk Removal Services",
    description: "Professional junk removal services in Richmond, VA. Same-day service for furniture, appliances, estate cleanouts & construction debris. Licensed & insured. Free estimates!",
    type: "website",
    url: 'https://junkgoatsrichmond.com',
    siteName: 'Junk Goats Junk Removal',
    locale: 'en_US',
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
    title: "Junk Goats Junk Removal - Richmond VA Junk Removal Services",
    description: "Professional junk removal services in Richmond, VA. Same-day service for furniture, appliances, estate cleanouts & construction debris. Licensed & insured. Free estimates!",
    images: ["/images/junk-goats-logo.png"],
    site: '@junkgoats',
    creator: '@junkgoats',
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
    "@type": "LocalBusiness",
    "@id": "https://junkgoatsrichmond.com/#business",
    "name": "Junk Goats Junk Removal",
    "url": "https://junkgoatsrichmond.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://junkgoatsrichmond.com/images/junk-goats-logo.png",
      "width": 200,
      "height": 60
    },
    "image": "https://junkgoatsrichmond.com/images/junk-goats-logo.png",
    "description": "Professional junk removal services in Richmond, VA and surrounding areas. We offer furniture removal, estate cleanouts, construction debris removal, appliance removal, and more. Same-day service available.",
    "priceRange": "$$",
    "telephone": "+1-804-494-7999",
    "email": "info@junkgoatsrichmond.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Richmond",
      "addressRegion": "VA",
      "postalCode": "23219",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.5407,
      "longitude": -77.4360
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Richmond",
        "containedIn": {
          "@type": "State",
          "name": "Virginia"
        }
      },
      {
        "@type": "City",
        "name": "Henrico",
        "containedIn": {
          "@type": "State",
          "name": "Virginia"
        }
      },
      {
        "@type": "City",
        "name": "Chesterfield",
        "containedIn": {
          "@type": "State",
          "name": "Virginia"
        }
      },
      {
        "@type": "City",
        "name": "Midlothian",
        "containedIn": {
          "@type": "State",
          "name": "Virginia"
        }
      },
      {
        "@type": "City",
        "name": "Mechanicsville",
        "containedIn": {
          "@type": "State",
          "name": "Virginia"
        }
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "09:00",
        "closes": "15:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/junkgoatsrichmond",
      "https://www.instagram.com/junkgoatsrichmond",
      "https://www.linkedin.com/company/junk-goats-junk-removal"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Junk Removal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Junk Removal",
            "description": "Complete junk removal services for residential and commercial properties"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Furniture Removal",
            "description": "Professional furniture and mattress removal services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Estate Cleanout",
            "description": "Complete estate cleanout services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Construction Debris Removal",
            "description": "Construction debris and renovation cleanup"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Appliance Removal",
            "description": "Safe appliance removal and disposal"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Yard Waste Removal",
            "description": "Yard waste and organic debris removal"
          }
        }
      ]
    }
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
