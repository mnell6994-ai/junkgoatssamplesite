"use client";

import { Star } from "lucide-react";
import { useState, useEffect, memo } from "react";

const GoogleReviewsCarousel = memo(() => {
  const reviews = [
    {
      id: 1,
      text: "Excellent service! They cleaned my deck and siding perfectly. Professional, on-time, and great pricing. Highly recommend!",
      author: "Sarah Johnson",
      initials: "SJ",
      verified: true
    },
    {
      id: 2,
      text: "Outstanding work! My house looks brand new. The team was courteous and efficient. Will definitely use again!",
      author: "Mike Rodriguez",
      initials: "MR",
      verified: true
    },
    {
      id: 3,
      text: "Best power washing service in Richmond! They removed years of grime from my driveway. Fair price and excellent results.",
      author: "Jennifer Chen",
      initials: "JC",
      verified: true
    },
    {
      id: 4,
      text: "Professional, reliable, and thorough. They cleaned my entire exterior including gutters. Very satisfied with the results!",
      author: "David Thompson",
      initials: "DT",
      verified: true
    },
    {
      id: 5,
      text: "Amazing transformation! My deck went from dirty to like new. Great communication and they finished on time. 5 stars!",
      author: "Lisa Williams",
      initials: "LW",
      verified: true
    },
    {
      id: 6,
      text: "Fantastic service! They were prompt, professional, and did an incredible job cleaning my siding. Highly recommend!",
      author: "Robert Davis",
      initials: "RD",
      verified: true
    },
    {
      id: 7,
      text: "Top-notch service! They cleaned my roof and gutters perfectly. The team was respectful of my property and left everything spotless.",
      author: "Maria Garcia",
      initials: "MG",
      verified: true
    },
    {
      id: 8,
      text: "Incredible results! My concrete driveway looks brand new. They removed oil stains I thought were permanent. Worth every penny!",
      author: "James Wilson",
      initials: "JW",
      verified: true
    },
    {
      id: 9,
      text: "Outstanding customer service and quality work. They cleaned my entire house exterior and the results exceeded my expectations.",
      author: "Amanda Brown",
      initials: "AB",
      verified: true
    },
    {
      id: 10,
      text: "Professional team with excellent attention to detail. They cleaned my deck, siding, and walkways. Highly satisfied customer!",
      author: "Christopher Lee",
      initials: "CL",
      verified: true
    },
    {
      id: 11,
      text: "Best power washing company in the area! They removed mold and mildew from my siding beautifully. Fair pricing and great results.",
      author: "Michelle Taylor",
      initials: "MT",
      verified: true
    },
    {
      id: 12,
      text: "Exceptional service! They cleaned my fence and deck to perfection. The team was friendly, professional, and efficient.",
      author: "Kevin Martinez",
      initials: "KM",
      verified: true
    },
    {
      id: 13,
      text: "Amazing work! They transformed my dirty concrete patio into something that looks brand new. Highly recommend their services!",
      author: "Rachel Anderson",
      initials: "RA",
      verified: true
    },
    {
      id: 14,
      text: "Outstanding results! They cleaned my house siding and removed years of dirt and grime. Professional team and excellent work!",
      author: "Thomas Clark",
      initials: "TC",
      verified: true
    },
    {
      id: 15,
      text: "Fantastic experience! They cleaned my deck and it looks absolutely beautiful. Great communication throughout the process.",
      author: "Stephanie White",
      initials: "SW",
      verified: true
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000); // Change reviews every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentReview = reviews[currentIndex];

  return (
    <div className="mt-6 max-w-4xl mx-auto">
      <div className="flex justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#dc2626] transition-all duration-500 ease-in-out max-w-2xl w-full">
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="ml-2 text-sm font-semibold text-gray-600">Google Review</span>
          </div>
          <p className="text-gray-700 italic mb-4 text-lg leading-relaxed">
            "{currentReview.text}"
          </p>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mr-4">
              <span className="text-sm font-bold text-gray-600">{currentReview.initials}</span>
            </div>
            <div>
              <p className="font-semibold text-gray-800 text-lg">{currentReview.author}</p>
              <p className="text-sm text-gray-500">
                {currentReview.verified ? "Verified Customer" : "Customer"}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Review indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-[#dc2626]' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
});

GoogleReviewsCarousel.displayName = "GoogleReviewsCarousel";

export default GoogleReviewsCarousel;
