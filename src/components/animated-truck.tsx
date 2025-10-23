"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import GoogleReviewsCarousel from "@/components/google-reviews-carousel";

const AnimatedTruck = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrollY(scrollTop);

      if (sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.offsetHeight;
        const windowHeight = window.innerHeight;
        
        // Show truck when section comes into view
        if (scrollTop > sectionTop - windowHeight && scrollTop < sectionTop + sectionHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate truck position based on scroll
  const getTruckTransform = () => {
    if (!sectionRef.current) return 'translateX(-100%)';
    
    const sectionTop = sectionRef.current.offsetTop;
    const sectionHeight = sectionRef.current.offsetHeight;
    const windowHeight = window.innerHeight;
    
    // Calculate scroll progress within the section
    const sectionStart = sectionTop - windowHeight;
    const sectionEnd = sectionTop + sectionHeight;
    const scrollProgress = Math.max(0, Math.min(1, (scrollY - sectionStart) / (sectionEnd - sectionStart)));
    
    // Start from left side (-100%) and move to final position (0%) based on scroll progress
    // Use smooth easing for natural movement
    const easedProgress = scrollProgress * scrollProgress * (3 - 2 * scrollProgress); // Smoothstep easing
    const translateX = -100 + (easedProgress * 100); // Move 100% to park in exact middle of screen
    
    return `translateX(${translateX}%)`;
  };

  return (
    <div ref={sectionRef} className="relative h-screen overflow-hidden">
      <div className="container mx-auto max-w-7xl h-full flex flex-col justify-start pt-4">
        {/* Heading - Spans across both columns */}
        <div className="w-full mb-16 flex justify-center">
          <h2 className="text-4xl lg:text-6xl font-black text-[#1e40af] text-center uppercase tracking-tight whitespace-nowrap">
            Richmond's Most Trusted Junk Removal Company
          </h2>
        </div>
        
        {/* Content Row */}
        <div className="flex items-start">
          {/* Left Side Content */}
          <div className="w-1/2 flex flex-col justify-start">
            {/* Google Reviews Section */}
            <div className="max-w-md mb-8">
              {/* Google Five Star Rating Image */}
              <div className="mb-6 flex justify-center">
                <Image
                  src="/images/google-five-star-rating.png"
                  alt="Google Five Star Rating"
                  width={250}
                  height={80}
                  className="object-contain"
                  priority
                />
              </div>
              
              {/* Google Reviews Carousel */}
              <GoogleReviewsCarousel />
            </div>
            
            {/* Truck Animation */}
            <div 
              className="transition-transform duration-1500 ease-out"
              style={{ 
                transform: `${getTruckTransform()}`,
                zIndex: 10,
                position: 'absolute',
                left: '50%',
                bottom: '-5%',
                marginLeft: '-300px'
              }}
            >
              <Image
                src="/images/truck-driving-in.png"
                alt="Junk Goats Truck"
                width={600}
                height={450}
                className="w-auto h-96 object-contain"
                priority
              />
            </div>
          </div>
          
          {/* Content Block - Aligned with Google review image */}
          <div className="w-1/2 pl-12 flex justify-start">
            <div className="max-w-lg">
              <p className="text-lg text-gray-700 mb-6">
                Junk Goats Junk Removal provides residential and commercial junk removal services to all of Central Virginia, and are committed to providing the absolute best service for all of our clients. Junk Goats ensures customer satisfaction, stellar communication during the whole process, up front prices, and a commitment providing our clients with the highest level of service and professionalism.
              </p>
              
              <ul className="space-y-3 mb-6">
                {[
                  "Licensed, bonded, and fully insured",
                  "Professional-grade equipment and eco-friendly solutions",
                  "Free estimates with no hidden fees",
                  "Same-day service available",
                  "100% satisfaction guarantee",
                  "300+ 5 star reviews"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#dc2626] rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTruck;
