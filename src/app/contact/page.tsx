import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Star, Clock, Shield, Award, Phone, Mail, MapPin } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import GoogleReviewsCarousel from "@/components/google-reviews-carousel";
import dynamic from "next/dynamic";

// Lazy load components
const ContactFormSimple = dynamic(() => import("@/components/contact-form-simple"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>
});

export const metadata = {
  title: "Contact Richmond Power Washing Pro | Free Estimates & Professional Service",
  description: "Contact Richmond Power Washing Pro for your free estimate. Professional power washing services in Richmond, VA. Call (804) 555-0123 or fill out our contact form today!",
  keywords: "contact Richmond power washing, power washing estimate Richmond, pressure washing contact Richmond, free estimate Richmond VA, power washing service Richmond"
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <Header />
      
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
