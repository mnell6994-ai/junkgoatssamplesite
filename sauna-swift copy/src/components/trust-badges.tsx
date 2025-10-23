"use client";

import Image from "next/image";
import { Shield, Award, Star, Check } from "lucide-react";
import { memo } from "react";

const TrustBadges = memo(() => {
  const badges = [
    {
      image: "/images/google 5 star reviews.png",
      title: "Google 5-Star Reviews",
      description: "Highly rated by our customers",
      color: "bg-white border-gray-200"
    },
    {
      image: "/images/angies list 5 star.jpg",
      title: "Angie's List 5 Stars",
      description: "Verified professional service",
      color: "bg-white border-gray-200"
    },
    {
      image: "/images/yelp 5 star.jpg",
      title: "Yelp 5 Stars",
      description: "Top-rated local business",
      color: "bg-white border-gray-200"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid md:grid-cols-3 gap-6">
          {badges.map((badge, index) => (
            <div 
              key={index}
              className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-center">
                <Image 
                  src={badge.image}
                  alt={badge.title}
                  width={badge.image.includes('yelp') ? 200 : 150}
                  height={badge.image.includes('yelp') ? 100 : 75}
                  className="max-w-full h-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

TrustBadges.displayName = "TrustBadges";

export default TrustBadges;
