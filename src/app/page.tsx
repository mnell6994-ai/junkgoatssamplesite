"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ChevronDown, MapPin, Star, Phone, Mail, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef, useCallback, memo } from "react";
import dynamic from "next/dynamic";
import GoogleReviewsCarousel from "@/components/google-reviews-carousel";
import Footer from "@/components/footer";
import AnimatedTruck from "@/components/animated-truck";
import Header from "@/components/header";

// Lazy load heavy components
const ContactForm = dynamic(() => import("@/components/contact-form"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>
});

const ServicesSection = dynamic(() => import("@/components/services-section"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>
});

const ContactFormSimple = dynamic(() => import("@/components/contact-form-simple"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>
});

const TrustBadges = dynamic(() => import("@/components/trust-badges"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-32 rounded-lg"></div>
});

const ReviewsCarousel = dynamic(() => import("@/components/reviews-carousel"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>
});

export default function Home() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Video testimonials data - actual YouTube video IDs
  const testimonialVideos = [
    {
      videoId: "azKUYgqNH_U",
      title: "Customer Testimonial 1",
      description: "Watch this customer share their experience with Junk Goats."
    },
    {
      videoId: "C20ARVroJ_I",
      title: "Customer Testimonial 2", 
      description: "See how we helped this customer with their junk removal needs."
    },
    {
      videoId: "ocSeTFk_5oo",
      title: "Customer Testimonial 3",
      description: "Another satisfied customer shares their story."
    },
    {
      videoId: "iJgwy2gzibM",
      title: "Customer Testimonial 4",
      description: "Professional service that exceeded expectations."
    },
    {
      videoId: "RRuA7gNCl30",
      title: "Customer Testimonial 5",
      description: "Fast, reliable, and friendly junk removal service."
    },
    {
      videoId: "-hAcXnSOrlg",
      title: "Customer Testimonial 6",
      description: "Great experience from start to finish."
    },
    {
      videoId: "NUnGu_5xJ-M",
      title: "Customer Testimonial 7",
      description: "Excellent service and great results."
    },
    {
      videoId: "_SOAfqtKR1k",
      title: "Customer Testimonial 8",
      description: "Professional team and outstanding work."
    },
    {
      videoId: "DyNhBUG94l8",
      title: "Customer Testimonial 9",
      description: "Highly recommend for all junk removal needs."
    },
    {
      videoId: "uVdpbJcttmw",
      title: "Customer Testimonial 10",
      description: "Amazing service from start to finish."
    }
  ];


  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <Header />

      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        <Image
          src="/images/hero-image-2.jpg"
          alt="Professional junk removal services in Richmond VA"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={75}
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto max-w-6xl relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
          <div>
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight uppercase tracking-tight">
              <span className="block">PROFESSIONAL JUNK REMOVAL</span>
              <span className="block">IN RICHMOND, VA</span>
          </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-semibold text-white">
            Clear your space with our expert junk removal services. Furniture removal, estate cleanouts, yard waste removal, and more. Licensed, insured, and locally owned.
          </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xl px-8 py-4 font-black uppercase tracking-wide italic">
                FREE ESTIMATE
            </Button>
            </Link>
            <Button size="lg" className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white text-xl px-8 py-4 font-black uppercase tracking-wide italic">
              CALL (804) 494-7999
          </Button>
          </div>
        </div>
      </section>

              {/* Animated Truck Section */}
              <section className="relative">
                <AnimatedTruck />
              </section>


      {/* 3 Steps Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-[#1e40af] mb-4 uppercase tracking-tight">
              JUNK REMOVAL IN 3 STEPS
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#1e40af] text-white text-4xl font-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold text-[#1e40af] mb-4 uppercase tracking-tight">
                STEP 1
              </h3>
              <p className="text-lg text-gray-700">
                Schedule your service online or over the phone
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#1e40af] text-white text-4xl font-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold text-[#1e40af] mb-4 uppercase tracking-tight">
                STEP 2
              </h3>
              <p className="text-lg text-gray-700">
                Receive and Approve your no obligation Free Quote
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#1e40af] text-white text-4xl font-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold text-[#1e40af] mb-4 uppercase tracking-tight">
                STEP 3
              </h3>
              <p className="text-lg text-gray-700">
                Sit back and relax while the Junk Goats load and haul away your unwanted items
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/contact">
              <Button size="lg" className="bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xl px-8 py-4 font-black uppercase tracking-wide italic">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-12 uppercase tracking-tight">
            <span className="text-[#1e40af]">WHY CHOOSE</span>{" "}
            <span className="text-[#dc2626]">JUNK GOATS</span>{" "}
            <span className="text-[#1e40af]">JUNK REMOVAL?</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-3xl font-bold text-[#1e40af] mb-6">
                        Why Choose Junk Goats?
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                        Junk Goats does everything from single item pick ups to entire house clean outs. Whatever size junk removal job you have, the Junk Goats can help. Junk Goats is covered end to end with the proper insurance in order to protect our clients and ourselves in the event anything goes wrong. This allows total peace of mind for our clients when hiring Junk Goats.
              </p>
              <ul className="space-y-3">
                {[
                  "Licensed, bonded, and fully insured",
                  "Professional-grade equipment and eco-friendly solutions", 
                  "Up front, free no-obligation quotes",
                  "Same-day service available",
                  "100% satisfaction guarantee",
                  "400+ 5 star reviews"
                ].map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#dc2626]" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 flex justify-center">
                <Image 
                  src="/images/google-five-star-rating.png"
                  alt="Google Five Star Rating"
                  width={200}
                  height={100}
                  className="object-contain"
                />
              </div>
              
              <GoogleReviewsCarousel />
            </div>
            <div className="relative z-10">
              <ContactFormSimple />
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />

      {/* Service Areas Section */}
      <section id="locations" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-12 uppercase tracking-tight">
            <span className="text-[#1e40af]">WE SERVE ALL OF</span>{" "}
            <span className="text-[#dc2626]">RICHMOND</span>{" "}
            <span className="text-[#1e40af]">METRO AREA</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Richmond",
                image: "/images/richmond-va-update.jpg",
                description: "Professional junk removal services throughout Richmond and surrounding areas.",
                alt: "Junk removal services in Richmond Virginia"
              },
              {
                name: "Henrico County", 
                image: "/images/henrico-county-update.jpg",
                description: "Serving all of Henrico County including Glen Allen, Short Pump, and Tuckahoe areas.",
                alt: "Junk removal services in Henrico County Virginia"
              },
              {
                name: "Chesterfield",
                image: "/images/chesterfield-image.jpg", 
                description: "Professional junk removal services throughout Chesterfield County and Midlothian.",
                alt: "Junk removal in Chesterfield County Virginia"
              },
              {
                name: "Mechanicsville",
                image: "/images/mechanicsville-update.jpg",
                description: "Serving Mechanicsville and surrounding Hanover County areas with expert junk removal.",
                alt: "Junk removal services in Mechanicsville Virginia"
              }
            ].map((location) => (
              <article key={location.name} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={location.image}
                  alt={location.alt}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1e40af] mb-3">{location.name}</h3>
                  <p className="text-gray-600 mb-3">{location.description}</p>
                  <p className="text-[#dc2626] font-semibold mb-3">✓ Available Now</p>
                  <Link href={`/${location.name.toLowerCase().replace(' ', '-')}`} className="text-[#1e40af] font-semibold hover:text-[#dc2626] transition-colors">
                    View {location.name} Services →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>



      {/* Customer Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 uppercase tracking-tight">
              <span className="text-[#dc2626]">Junk Goats</span> <span className="text-[#1e40af]">Customer Testimonials</span>
          </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our amazing customers have to say about our junk removal services.
            </p>
          </div>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentVideoIndex * (100 / (isMobile ? 1 : 3))}%)` }}>
                {testimonialVideos.map((video, index) => (
                  <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-2">
                    <div className="aspect-video bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${video.videoId}`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg"
                      ></iframe>
                    </div>
                </div>
                ))}
              </div>
            </div>
            
            {/* Navigation arrows */}
            <button
              onClick={() => setCurrentVideoIndex((prev) => (prev === 0 ? Math.ceil(testimonialVideos.length / (isMobile ? 1 : 3)) - 1 : prev - 1))}
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-[#1e40af] text-white p-2 md:p-3 rounded-full hover:bg-[#1e3a8a] transition-colors shadow-lg z-10"
            >
              <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
            </button>
            <button
              onClick={() => setCurrentVideoIndex((prev) => (prev === Math.ceil(testimonialVideos.length / (isMobile ? 1 : 3)) - 1 ? 0 : prev + 1))}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-[#1e40af] text-white p-2 md:p-3 rounded-full hover:bg-[#1e3a8a] transition-colors shadow-lg z-10"
            >
              <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Video indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(testimonialVideos.length / (isMobile ? 1 : 3)) }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentVideoIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentVideoIndex ? 'bg-[#1e40af]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/contact">
              <Button size="lg" className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white text-xl px-8 py-4 font-black uppercase tracking-wide italic">
                Get Your Free Estimate
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-[#dc2626] mb-4 uppercase tracking-tight">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional, friendly, and experienced junk removal experts serving Richmond and surrounding areas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="/images/homepage-hero-image.jpeg"
                  alt="Junk Goats Team"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Professional Team</h3>
                  <p className="text-gray-600">
                    Junk Goats Junk Removal provides both residential and commercial junk removal. We understand that our junk removal clients desire a simple, stress-free, and affordable junk removal experience. Our professional and friendly junk removal specialists are trained to provide our clients with exceptional customer service and value.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="/images/smiling-team-shot.jpg"
                  alt="Friendly Team Member"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Friendly Service</h3>
                  <p className="text-gray-600">
                    Our team members are uniformed, friendly, and courteous professionals who ensure every interaction is pleasant and stress-free. We understand that junk removal can be overwhelming, which is why our team goes above and beyond to provide exceptional customer service with a smile.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-16 bg-[#f3f4f6]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center text-[#dc2626] mb-12 uppercase tracking-tight">
            Junk Got Your Goat?
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Ready to see the difference professional junk removal can make? Contact us today for a free, no-obligation estimate.
          </p>
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
            <div>
                <ContactFormSimple />
              </div>
              
              {/* Service Areas */}
              <div className="space-y-8">
                <Card className="bg-white">
                  <CardContent className="p-8">
                    <h4 className="text-[#1e40af] text-3xl font-black mb-6 uppercase tracking-tight text-center">SERVICE AREAS</h4>
                    <p className="text-gray-600 mb-6 text-center text-lg">
                      We proudly serve all of Richmond metro area including:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm">
                      {["Richmond", "Henrico", "Chesterfield", "Midlothian", "Mechanicsville", "Amelia", "Ashland", "Chester", "Goochland", "Hanover", "Hopewell", "Petersburg", "Powhatan", "Sandston"].map((area) => (
                        <div key={area} className="flex items-center gap-2 justify-center">
                          <MapPin className="w-4 h-4 text-[#dc2626]" />
                          <span className="font-semibold">{area}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white overflow-hidden">
                  <CardContent className="p-0">
                    <Image
                      src="/images/commercial-cleanout.jpg"
                      alt="Commercial Cleanout Services"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}