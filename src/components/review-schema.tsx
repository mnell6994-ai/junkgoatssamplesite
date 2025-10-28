interface Review {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
}

interface ReviewSchemaProps {
  reviews: Review[];
}

export default function ReviewSchema({ reviews }: ReviewSchemaProps) {
  const reviewSchemas = reviews.map((review) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "LocalBusiness",
      "@id": "https://junkgoatsrichmond.com/#business",
      "name": "Junk Goats Junk Removal"
    },
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": "5",
      "worstRating": "1"
    },
    "reviewBody": review.reviewBody,
    "datePublished": review.datePublished,
    "publisher": {
      "@type": "Organization",
      "name": "Google"
    }
  }));

  return (
    <>
      {reviewSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
