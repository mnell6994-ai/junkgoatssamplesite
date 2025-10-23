"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Star, Clock, Shield, Award, Phone, Mail, MapPin } from "lucide-react";
import Footer from "@/components/footer";
import GoogleReviewsCarousel from "@/components/google-reviews-carousel";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

// Lazy load components
const ContactFormSimple = dynamic(() => import("@/components/contact-form-simple"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>
});

export default function ContactPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrollY > 100 ? 'bg-[#1e40af] shadow-lg' : 'bg-transparent'
      }`}>
        <div className="w-full flex justify-between items-center px-8 py-1">
            <Link href="/" className="flex items-center">
              <Image 
              src="/images/junk-goats-logo.png" 
              alt="Junk Goats Junk Removal" 
              width={200}
              height={60}
              className="h-16 w-auto"
              priority
            />
            </Link>
          
            <nav className="hidden md:flex gap-8">
            <div className="relative group">
              <button className="text-white font-black uppercase tracking-wide hover:text-gray-200 flex items-center gap-1">
                  SERVICES
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/services/junk-removal" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                  Junk Removal
                </Link>
                <Link href="/services/furniture-removal" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                  Furniture Removal
                </Link>
                <Link href="/services/estate-cleanout" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                  Estate Cleanout
                </Link>
                <Link href="/services/construction-debris" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                  Construction Debris
                </Link>
                <Link href="/services/appliance-removal" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                  Appliance Removal
                </Link>
                <Link href="/services/yard-waste-removal" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                  Yard Waste Removal
                </Link>
                <Link href="/services/commercial-cleanout" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                  Commercial Cleanout
                </Link>
                <Link href="/services/office-cleanout" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                  Office Cleanout
                </Link>
              </div>
            </div>
            
            <div className="relative group">
              <button className="text-white font-black uppercase tracking-wide hover:text-gray-200 flex items-center gap-1">
                SERVICE AREAS
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/richmond" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                  Richmond, VA
                </Link>
                <Link href="/henrico" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                  Henrico, VA
                </Link>
                <Link href="/chesterfield" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                  Chesterfield, VA
                </Link>
                <Link href="/midlothian" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                  Midlothian, VA
                </Link>
                <Link href="/mechanicsville" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                  Mechanicsville, VA
                </Link>
              </div>
            </div>
            
            <Link href="/how-it-works" className="text-white font-black uppercase tracking-wide hover:text-gray-200">
              HOW IT WORKS
            </Link>
            <Link href="/contact" className="text-white font-black uppercase tracking-wide hover:text-gray-200">
                CONTACT
              </Link>
            </nav>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-white p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+18044947999" className="flex items-center gap-2 text-white font-black uppercase tracking-wide italic">
              <div className="bg-[#dc2626] text-white p-2 rounded-full hover:bg-[#b91c1c] transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span>(804) 494-7999</span>
            </a>
              <Link href="/contact">
              <button className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-black uppercase tracking-wide italic px-4 py-2 rounded">
                  FREE QUOTE
              </button>
              </Link>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="relative text-white py-12 overflow-hidden">
        <Image
          src="/images/junk-removal-richmond-va01.jpg"
          alt="Contact Junk Goats Junk Removal"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={75}
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto max-w-6xl relative z-10 flex flex-col items-center justify-center min-h-[30vh] text-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-black text-white mb-8 leading-tight uppercase tracking-tight">
              <span className="text-[#dc2626]">CONTACT US</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto font-semibold text-white">
              Get your free estimate today - professional junk removal services
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 bg-[#f8f9fa]">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-12 uppercase tracking-tight">
            <span className="text-[#1e40af]">GET YOUR</span>{" "}
            <span className="text-[#dc2626] italic">FREE ESTIMATE</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div>
              <ContactFormSimple />
            </div>
            
            {/* Google Reviews Section */}
            <div className="space-y-6 md:space-y-8">
              {/* Google Reviews Image */}
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-black text-[#1e40af] mb-4 uppercase tracking-tight">
                  WHAT OUR <span className="text-[#1e40af]">CUSTOMERS</span> SAY
                </h3>
                <p className="text-base md:text-lg text-gray-600 mb-6">
                  Don't just take our word for it - see what our satisfied customers have to say about our professional junk removal services.
                </p>
                <Image
                  src="/images/google-five-star-rating.png"
                  alt="Google Five Star Rating"
                  width={200}
                  height={60}
                  className="mx-auto mb-6 w-32 md:w-48 lg:w-56"
                />
          </div>
              
              {/* Google Reviews Carousel */}
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
          <GoogleReviewsCarousel />
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}
