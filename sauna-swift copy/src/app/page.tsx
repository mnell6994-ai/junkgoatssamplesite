"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ChevronDown, MapPin, Star, Phone, Mail, Clock } from "lucide-react";
import { useState, useEffect, useRef, useCallback, memo } from "react";
import dynamic from "next/dynamic";
import GoogleReviewsCarousel from "@/components/google-reviews-carousel";
import Footer from "@/components/footer";

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
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const locationsDropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((event: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
      if (locationsDropdownRef.current && !locationsDropdownRef.current.contains(event.target as Node)) {
        setIsLocationsOpen(false);
      }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside, { passive: true });
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Header */}
      <header className="bg-white sticky top-0 z-50">
        <div className="w-full">
          <div className="flex justify-between items-center w-full pl-4 pr-4">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/Logo_3-removebg-preview.png" 
                alt="Richmond Power Washing Pro" 
                width={800}
                height={192}
                className="h-16 w-auto"
                priority
                quality={90}
              />
            </Link>
            <nav className="hidden md:flex gap-8">
              <div className="relative" ref={servicesDropdownRef}>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="text-[#1e40af] font-black uppercase tracking-wide hover:text-[#dc2626] transition-colors flex items-center gap-1"
                >
                  SERVICES
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <Link 
                      href="/services/house-washing" 
                      className="block px-4 py-2 text-[#374151] hover:bg-[#f3f4f6] hover:text-[#1e40af] transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      🏠 House Washing
                    </Link>
                    <Link 
                      href="/services/deck-fence-cleaning" 
                      className="block px-4 py-2 text-[#374151] hover:bg-[#f3f4f6] hover:text-[#1e40af] transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      🪵 Deck & Fence Cleaning
                    </Link>
                    <Link 
                      href="/services/concrete-cleaning" 
                      className="block px-4 py-2 text-[#374151] hover:bg-[#f3f4f6] hover:text-[#1e40af] transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      🏗️ Concrete Cleaning
                    </Link>
                    <Link 
                      href="/services/roof-cleaning" 
                      className="block px-4 py-2 text-[#374151] hover:bg-[#f3f4f6] hover:text-[#1e40af] transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      🏠 Roof Cleaning
                    </Link>
                    <Link 
                      href="/services/window-cleaning" 
                      className="block px-4 py-2 text-[#374151] hover:bg-[#f3f4f6] hover:text-[#1e40af] transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      🪟 Window Cleaning
                    </Link>
                    <Link 
                      href="/services/gutter-cleaning" 
                      className="block px-4 py-2 text-[#374151] hover:bg-[#f3f4f6] hover:text-[#1e40af] transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      🧽 Gutter Cleaning
                    </Link>
                  </div>
                )}
              </div>
              <div className="relative" ref={locationsDropdownRef}>
                <button
                  onClick={() => setIsLocationsOpen(!isLocationsOpen)}
                  className="text-[#1e40af] font-black uppercase tracking-wide hover:text-[#dc2626] transition-colors flex items-center gap-1"
                >
                  SERVICE AREAS
                  <ChevronDown className={`w-4 h-4 transition-transform ${isLocationsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isLocationsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <Link 
                      href="/richmond" 
                      className="block px-4 py-2 text-[#374151] hover:bg-[#f3f4f6] hover:text-[#1e40af] transition-colors"
                      onClick={() => setIsLocationsOpen(false)}
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Richmond, VA
                      </div>
                    </Link>
                    <Link 
                      href="/henrico" 
                      className="block px-4 py-2 text-[#374151] hover:bg-[#f3f4f6] hover:text-[#1e40af] transition-colors"
                      onClick={() => setIsLocationsOpen(false)}
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Henrico, VA
                      </div>
                    </Link>
                    <Link 
                      href="/chesterfield" 
                      className="block px-4 py-2 text-[#374151] hover:bg-[#f3f4f6] hover:text-[#1e40af] transition-colors"
                      onClick={() => setIsLocationsOpen(false)}
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Chesterfield, VA
                      </div>
                    </Link>
                    <Link 
                      href="/midlothian" 
                      className="block px-4 py-2 text-[#374151] hover:bg-[#f3f4f6] hover:text-[#1e40af] transition-colors"
                      onClick={() => setIsLocationsOpen(false)}
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Midlothian, VA
                      </div>
                    </Link>
                    <Link 
                      href="/mechanicsville" 
                      className="block px-4 py-2 text-[#374151] hover:bg-[#f3f4f6] hover:text-[#1e40af] transition-colors"
                      onClick={() => setIsLocationsOpen(false)}
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Mechanicsville, VA
                      </div>
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/faq" className="text-[#1e40af] font-black uppercase tracking-wide hover:text-[#dc2626] transition-colors">
                FAQ
              </Link>
              <Link href="/contact" className="text-[#1e40af] font-black uppercase tracking-wide hover:text-[#dc2626] transition-colors">
                CONTACT
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <a href="tel:+18045550123" className="flex items-center gap-2 text-lg text-[#1e40af] font-black uppercase tracking-wide italic hover:text-[#dc2626] transition-colors">
                <div className="bg-[#dc2626] text-white p-2 rounded-full hover:bg-[#b91c1c] transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span>(804) 555-0123</span>
              </a>
              <Link href="/contact">
                <Button className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-black uppercase tracking-wide italic">
                  FREE QUOTE
            </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        <Image
          src="/images/powerwashing deck.jpg"
          alt="Power washing deck"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={75}
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight uppercase tracking-tight">
              PROFESSIONAL{" "}
              <span className="inline-block font-black text-6xl lg:text-8xl text-[#FFA500]" style={{ 
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
              }}>
                POWER WASHING
              </span>
              <br />
              IN RICHMOND, VA
          </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-semibold">
            Transform your property with our expert pressure washing services. House washing, deck cleaning, concrete cleaning, and more. Licensed, insured, and locally owned.
          </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xl px-8 py-4 font-black uppercase tracking-wide italic">
                FREE ESTIMATE
            </Button>
            </Link>
            <Button size="lg" className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white text-xl px-8 py-4 font-black uppercase tracking-wide italic">
              CALL (804) 555-0123
          </Button>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Water Splash Background */}
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/spray of water.jpg')",
            backgroundSize: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl lg:text-6xl font-black text-center text-[#1e40af] mb-12 uppercase tracking-tight relative z-10 whitespace-nowrap">
            WHY CHOOSE RICHMOND POWER WASHING PRO?
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start relative z-10">
            <div className="relative z-20 bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h3 className="text-3xl font-bold text-[#1e40af] mb-6">
                Richmond's Most Trusted Power Washing Company
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                With over 10 years of experience serving the Richmond metro area, we've built our reputation on quality work, 
                fair pricing, and exceptional customer service. We use professional-grade equipment and eco-friendly cleaning solutions.
              </p>
              <ul className="space-y-3">
                {[
                  "Licensed, bonded, and fully insured",
                  "Professional-grade equipment and eco-friendly solutions", 
                  "Free estimates with no hidden fees",
                  "Same-day service available",
                  "100% satisfaction guarantee",
                  "300+ 5 star reviews"
                ].map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#dc2626]" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 flex justify-center">
                <Image 
                  src="/images/google five star rating 2.png"
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
          <h2 className="text-5xl font-black text-center mb-12 uppercase tracking-tight">
            <span className="text-[#1e40af]">WE SERVE ALL OF</span>{" "}
            <span className="text-[#FFA500] italic">RICHMOND</span>{" "}
            <span className="text-[#1e40af]">METRO AREA</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Richmond",
                image: "/images/richmond va image.jpeg",
                description: "Our headquarters and primary service area. Fast response times and same-day service available.",
                alt: "Power washing services in Richmond Virginia"
              },
              {
                name: "Henrico County", 
                image: "/images/henrico county image.jpeg",
                description: "Serving all of Henrico County including Glen Allen, Short Pump, and Tuckahoe areas.",
                alt: "Power washing services in Henrico County Virginia"
              },
              {
                name: "Chesterfield",
                image: "/images/chesterfield image.jpeg", 
                description: "Professional power washing services throughout Chesterfield County and Midlothian.",
                alt: "Power washing in Chesterfield County Virginia"
              },
              {
                name: "Mechanicsville",
                image: "/images/mechanicsville va.jpeg",
                description: "Serving Mechanicsville and surrounding Hanover County areas with expert power washing.",
                alt: "Power washing services in Mechanicsville Virginia"
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

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-black text-center mb-12 uppercase tracking-tight">
            <span className="text-[#1e40af]">HOW</span>{" "}
            <span className="text-[#FFA500] italic">IT</span>{" "}
            <span className="text-[#1e40af]">WORKS</span>
          </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
                step: "1",
                icon: <Phone className="w-16 h-16 text-[#FFA500]" />,
                title: "Get Your Free Quote",
                description: "Call us or fill out our online form for a completely free, no-obligation estimate. We'll assess your property and provide transparent pricing."
              },
              {
                step: "2", 
                icon: <Clock className="w-16 h-16 text-[#FFA500]" />,
                title: "Schedule Your Service",
                description: "Choose a convenient time that works for you. We offer flexible scheduling including same-day service for urgent needs."
              },
              {
                step: "3",
                icon: <Check className="w-16 h-16 text-[#FFA500]" />,
                title: "We Take Care of Everything",
                description: "Sit back and relax while our professional team transforms your property. We handle all the work with eco-friendly solutions and professional equipment."
              }
            ].map((item) => (
              <div key={item.step} className="text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex justify-center mb-6">
                  {item.icon}
                </div>
                <div className="text-6xl font-black text-[#dc2626] mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold text-[#1e40af] mb-4">{item.title}</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/contact">
              <Button className="bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xl px-8 py-4 font-black uppercase tracking-wide italic">
                GET YOUR FREE QUOTE TODAY
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-[#f3f4f6]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#1e40af] mb-12">
            Ready to <span className="text-[#FFA500] italic">TRANSFORM</span> Your Property?
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
            <div>
                <ContactForm />
              </div>
              
              {/* Service Areas */}
              <div className="space-y-8">
                <Card className="bg-white">
                  <CardContent className="p-8">
                    <h4 className="text-[#1e40af] text-3xl font-black mb-6 uppercase tracking-tight text-center">SERVICE AREAS</h4>
                    <p className="text-gray-600 mb-6 text-center text-lg">
                      We proudly serve all of Richmond metro area including:
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      {["Richmond", "Henrico", "Chesterfield", "Midlothian", "Glen Allen", "Short Pump", "Mechanicsville", "Bon Air"].map((area) => (
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
                      src="/images/pressure washing driveway .jpg"
                      alt="Pressure Washing Driveway"
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