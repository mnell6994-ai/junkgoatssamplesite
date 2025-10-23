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
    const sectionStart = sectionTop - windowHeight * 0.3;
    const sectionEnd = sectionTop + sectionHeight * 0.7;
    const scrollProgress = Math.max(0, Math.min(1, (scrollY - sectionStart) / (sectionEnd - sectionStart)));
    
    // Start from left side (-100%) and move to center (0%) based on scroll progress
    // Use smooth easing for natural movement
    const easedProgress = scrollProgress * scrollProgress * (3 - 2 * scrollProgress); // Smoothstep easing
    const translateX = -100 + (easedProgress * 100); // Move 100% to park in center of screen
    
    // Debug: log the values to see if animation is working
    console.log('Scroll Progress:', scrollProgress, 'TranslateX:', translateX);
    
    return `translateX(${translateX}%)`;
  };

  return (
    <div ref={sectionRef} className="relative min-h-[120vh] overflow-hidden py-12 md:py-16">
      <div className="container mx-auto max-w-7xl h-full flex flex-col justify-start">
        {/* Heading - Spans across both columns */}
        <div className="w-full mb-8 md:mb-16 flex justify-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-black text-[#1e40af] text-center uppercase tracking-tight px-4">
            Richmond's Most Trusted Junk Removal Company
          </h2>
        </div>
        
        {/* Content Row */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          {/* Left Side Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-start">
            {/* Google Reviews Section */}
            <div className="max-w-md mb-8">
              {/* Google Five Star Rating Image */}
              <div className="mb-6 flex justify-center">
                <Image
                  src="/images/google-five-star-rating.png"
                  alt="Google Five Star Rating"
                  width={250}
                  height={80}
                  className="object-contain w-32 md:w-48 lg:w-56"
                  priority
                />
              </div>
              
              {/* Google Reviews Carousel */}
              <div className="p-4 md:p-6">
                <GoogleReviewsCarousel />
              </div>
            </div>
            
            {/* Truck Animation - Desktop */}
            <div 
              className="hidden lg:block transition-transform duration-1500 ease-out"
              style={{ 
                transform: `${getTruckTransform()}`,
                zIndex: 10,
                position: 'absolute',
                left: '50%',
                bottom: '5%',
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
            
            {/* Truck Animation - Mobile */}
            <div className="lg:hidden mt-8 flex justify-center">
              <Image
                src="/images/truck-driving-in.png"
                alt="Junk Goats Truck"
                width={600}
                height={450}
                className="w-auto h-64 object-contain"
                priority
              />
            </div>
          </div>
          
          {/* Content Block - Aligned with Google review image */}
          <div className="w-full lg:w-1/2 lg:pl-12 flex justify-start">
            <div className="max-w-lg">
              <p className="text-base md:text-lg text-gray-700 mb-6">
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
                    <span className="text-sm md:text-base text-gray-700">{benefit}</span>
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
