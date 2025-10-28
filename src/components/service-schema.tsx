interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  price?: string;
  areaServed?: string[];
}

export default function ServiceSchema({
  name,
  description,
  url,
  price = "Starting at $75",
  areaServed = ["Richmond, VA", "Henrico, VA", "Chesterfield, VA", "Midlothian, VA", "Mechanicsville, VA"]
}: ServiceSchemaProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://junkgoatsrichmond.com${url}#service`,
    "name": name,
    "description": description,
    "url": `https://junkgoatsrichmond.com${url}`,
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://junkgoatsrichmond.com/#business",
      "name": "Junk Goats Junk Removal",
      "telephone": "+1-804-494-7999",
      "email": "info@junkgoatsrichmond.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Richmond",
        "addressRegion": "VA",
        "postalCode": "23219",
        "addressCountry": "US"
      }
    },
    "serviceType": "Junk Removal Service",
    "areaServed": areaServed.map(area => ({
      "@type": "City",
      "name": area
    })),
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString().split('T')[0]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
    />
  );
}
