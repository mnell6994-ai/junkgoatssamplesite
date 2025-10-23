"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { memo } from "react";

const ReviewsCarousel = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      text: "Outstanding service! They cleaned our entire house exterior and deck. The team was professional, punctual, and the results exceeded our expectations. Highly recommend!",
      location: "Richmond, VA"
    },
    {
      id: 2,
      name: "James T.",
      rating: 5,
      text: "I've used Richmond Power Washing Pro three times now. They always do excellent work and their pricing is very fair. The deck looks brand new after their cleaning.",
      location: "Henrico, VA"
    },
    {
      id: 3,
      name: "Emily & David",
      rating: 5,
      text: "Fast, reliable, and thorough. They cleaned our driveway and removed oil stains I thought were permanent. Will definitely use them again!",
      location: "Chesterfield, VA"
    },
    {
      id: 4,
      name: "Michael R.",
      rating: 5,
      text: "Professional team that showed up on time and did amazing work. Our house looks like it was just painted after their power washing service.",
      location: "Midlothian, VA"
    },
    {
      id: 5,
      name: "Lisa K.",
      rating: 5,
      text: "Excellent customer service from start to finish. They provided a detailed estimate and delivered exactly what they promised. Very satisfied!",
      location: "Richmond, VA"
    }
  ];

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextReview, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentReview = reviews[currentIndex];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 relative">
      {/* Google Reviews Badge */}
      <div className="flex justify-center mb-4">
        <Image 
          src="/images/google 5 star reviews.png"
          alt="Google 5 Star Reviews"
          width={200}
          height={100}
          className="object-contain"
        />
      </div>

      {/* Review Content */}
      <div className="text-center">
        {/* Stars */}
        <div className="flex justify-center mb-3">
          {[...Array(currentReview.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
        </div>

        {/* Review Text */}
        <blockquote className="text-gray-700 text-lg italic mb-4 leading-relaxed">
          "{currentReview.text}"
        </blockquote>

        {/* Reviewer Info */}
        <div className="text-sm text-gray-600">
          <div className="font-semibold text-[#1e40af]">{currentReview.name}</div>
          <div>{currentReview.location}</div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevReview}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
        aria-label="Previous review"
      >
        <ChevronLeft className="w-5 h-5 text-[#1e40af]" />
      </button>
      
      <button
        onClick={nextReview}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
        aria-label="Next review"
      >
        <ChevronRight className="w-5 h-5 text-[#1e40af]" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-[#1e40af]' : 'bg-gray-300'
            }`}
            aria-label={`Go to review ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
});

ReviewsCarousel.displayName = "ReviewsCarousel";

export default ReviewsCarousel;

