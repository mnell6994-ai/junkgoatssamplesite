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
            
            {/* Contact Information Card */}
            <div className="space-y-8">
              <Card className="bg-white p-8 rounded-lg shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl font-black text-[#1e40af] mb-4 uppercase tracking-tight">
                    CONTACT INFORMATION
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#dc2626] text-white p-3 rounded-full">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1e40af]">Phone</h3>
                      <a href="tel:+18045550123" className="text-lg text-gray-700 hover:text-[#dc2626] transition-colors">
                        (804) 555-0123
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-[#dc2626] text-white p-3 rounded-full">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1e40af]">Email</h3>
                      <a href="mailto:info@richmondpowerwashpro.com" className="text-lg text-gray-700 hover:text-[#dc2626] transition-colors">
                        info@richmondpowerwashpro.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-[#dc2626] text-white p-3 rounded-full">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1e40af]">Service Areas</h3>
                      <p className="text-lg text-gray-700">
                        Richmond, Henrico, Chesterfield, Midlothian, Mechanicsville
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-[#dc2626] text-white p-3 rounded-full">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1e40af]">Business Hours</h3>
                      <p className="text-lg text-gray-700">
                        Monday - Saturday: 7:00 AM - 7:00 PM<br />
                        Sunday: By Appointment
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-r from-[#1e40af] to-[#dc2626] text-white p-8 rounded-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold mb-4">Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400" />
                      <span>Licensed, bonded, and fully insured</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400" />
                      <span>Professional-grade equipment</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400" />
                      <span>Eco-friendly cleaning solutions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400" />
                      <span>Free estimates with no hidden fees</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400" />
                      <span>Same-day service available</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400" />
                      <span>100% satisfaction guarantee</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white p-8 rounded-lg shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-[#1e40af] mb-4">Ready to Get Started?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700 mb-6">
                    Don't wait - contact us today for your free estimate and see the difference professional power washing can make to your property.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="tel:+18045550123">
                      <Button className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-black uppercase tracking-wide italic">
                        CALL NOW
                      </Button>
                    </a>
                    <Link href="#contact">
                      <Button className="w-full bg-[#1e40af] hover:bg-[#1e3a8a] text-white font-black uppercase tracking-wide italic">
                        GET FREE QUOTE
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-8">
            <Image
              src="/images/google five star rating 2.png"
              alt="Google 5 Star Reviews"
              width={200}
              height={60}
              className="mx-auto mb-4"
            />
            <h2 className="text-5xl font-black text-[#1e40af] mb-4 uppercase tracking-tight">
              WHAT OUR <span className="text-[#FFA500] italic">CUSTOMERS</span> SAY
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - see what our satisfied customers have to say about our professional power washing services.
            </p>
          </div>
          <GoogleReviewsCarousel />
        </div>
      </section>

      <Footer />
    </div>
  );
}
