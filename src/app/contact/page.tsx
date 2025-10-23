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

      {/* Contact Section */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-5xl font-black text-center mb-12 uppercase tracking-tight">
            <span className="text-[#1e40af]">GET YOUR</span>{" "}
            <span className="text-[#FFA500] italic">FREE ESTIMATE</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactFormSimple />
            </div>
            
            {/* Google Reviews Section */}
            <div className="space-y-8">
              {/* Google Reviews Image */}
              <div className="text-center">
            <Image
              src="/images/google five star rating 2.png"
              alt="Google 5 Star Reviews"
              width={200}
              height={60}
              className="mx-auto mb-4"
            />
                <h3 className="text-3xl font-black text-[#1e40af] mb-4 uppercase tracking-tight">
              WHAT OUR <span className="text-[#FFA500] italic">CUSTOMERS</span> SAY
                </h3>
                <p className="text-lg text-gray-600 mb-6">
              Don't just take our word for it - see what our satisfied customers have to say about our professional power washing services.
            </p>
          </div>
              
              {/* Google Reviews Carousel */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
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
