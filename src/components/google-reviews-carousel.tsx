"use client";

import { Star } from "lucide-react";
import { useState, useEffect, memo } from "react";

const GoogleReviewsCarousel = memo(() => {
  const reviews = [
    {
      id: 1,
      text: "They did a great job hauling out an old shed and cleaning the area. Fast and quality work.",
      author: "Sarah Mitchell",
      initials: "SM",
      verified: true
    },
    {
      id: 2,
      text: "A real person answered the phone and set up a pickup time the following day. I'd left messages with other companies, but no response. Those guys got everything into one load, even though it was pouring rain at the end. All smiles and no complaints about all the wired stuff they had to carry out. Would definitely recommend!",
      author: "Michael Rodriguez",
      initials: "MR",
      verified: true
    },
    {
      id: 3,
      text: "Wow! This business is legit. Great guys, professional, fast. All the stars. You will not be disappointed with their service. Thank you Junk Goats!!!",
      author: "Jennifer Thompson",
      initials: "JT",
      verified: true
    },
    {
      id: 4,
      text: "This is a great company to deal with. From the time I called to set up the appointment which was scheduled right away for an estimate until today when they arrived right on time. They were very nice, polite, and very professional. Their estimate was very, very reasonable and it took them no time to load everything in the truck. I definitely plan on using them again and will highly recommend them to others.",
      author: "C. Cook",
      initials: "CC",
      verified: true
    },
    {
      id: 5,
      text: "This company is wonderful! Booking was easy & all my questions were answered. The 2 movers were excellent: punctual, efficient, friendly, organized, and helpful. We filled up the whole truck (even with efficient packing), so had to schedule a second pick up that happened in 48 hrs. Pricing was fairly done. It was a worthwhile experience in every way!",
      author: "David Anderson",
      initials: "DA",
      verified: true
    },
    {
      id: 6,
      text: "Awesome company with a quality Team. Matthew came out to quote which was accurate. He is trying to keep you as a customer with his amazing customer service. He has a Team of Professionals that are nice as they can be. I recommend him for your haul away service. Seek him out today.",
      author: "Lisa Williams",
      initials: "LW",
      verified: true
    },
    {
      id: 7,
      text: "They cleaned out some office furniture for us that we no longer needed. They were prompt, responsive, their guys were friendly and quick, and their quote was well below a competitor of theirs. It was a great experience. We will definitely use them again if we need more hauled away!",
      author: "Robert Chen",
      initials: "RC",
      verified: true
    },
    {
      id: 8,
      text: "We had a great experience using Junk Goats to remove several pieces of old furniture from our home. I was able to quickly and easily schedule next day service. Jay and Will were courteous, professional, and super efficient. We will definitely use their services again if the need arises!",
      author: "Amanda Garcia",
      initials: "AG",
      verified: true
    },
    {
      id: 9,
      text: "The guys were fantastic they were very professional, kind, thoughtful, on time, reasonable, and very polite. I highly recommend if you have junk to get rid of call these guys. I had a 16+ year mattress plus an old wooden playhouse that I needed to get rid of. These guys were in and out real quick with my old mattress. Great price too!!! Love these guys. Thank you so much",
      author: "James Wilson",
      initials: "JW",
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
