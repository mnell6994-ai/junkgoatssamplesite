import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Star, Clock, Shield, Award, Phone, Mail, MapPin } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import TrustBadges from "@/components/trust-badges";
import GoogleReviewsCarousel from "@/components/google-reviews-carousel";
import dynamic from "next/dynamic";

// Lazy load components
const ContactFormSimple = dynamic(() => import("@/components/contact-form-simple"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>
});

export const metadata = {
  title: "Power Washing Midlothian VA | Professional Pressure Washing Services",
  description: "Professional power washing services in Midlothian, VA. House washing, deck cleaning, concrete cleaning, and more. Licensed, insured, and locally owned. Free estimates!",
  keywords: "power washing Midlothian VA, pressure washing Midlothian, house washing Midlothian, deck cleaning Midlothian, concrete cleaning Midlothian, gutter cleaning Midlothian"
};

export default function MidlothianPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <Header />

      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        <Image
          src="/images/powerwashing deck.jpg"
          alt="Professional power washing services in Midlothian Virginia"
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
              IN MIDLOTHIAN, VA
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-semibold">
              Transform your Midlothian home with our professional power washing services. We serve the entire Midlothian area with house washing, deck cleaning, concrete cleaning, and more.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xl px-8 py-4 font-black uppercase tracking-wide italic">
              Get Free Estimate
            </Button>
            <Button size="lg" className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white text-xl px-8 py-4 font-black uppercase tracking-wide italic">
              CALL (804) 555-0123
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

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
            <h2 className="text-4xl font-black text-[#1e40af] mb-4 uppercase tracking-tight">
              WHAT OUR <span className="text-[#FFA500] italic">MIDLOTHIAN</span> CUSTOMERS SAY
            </h2>
          </div>
          <GoogleReviewsCarousel />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl font-black uppercase tracking-tight">
                <span className="text-[#1e40af]">WHY MIDLOTHIAN</span>{" "}
                <span className="text-[#FFA500] italic">HOMEOWNERS</span>{" "}
                <span className="text-[#1e40af]">CHOOSE US</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#dc2626] rounded-full p-2 flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Licensed & Insured</h3>
                    <p className="text-gray-600">Fully licensed and insured for your peace of mind in Midlothian.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#dc2626] rounded-full p-2 flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Local Expertise</h3>
                    <p className="text-gray-600">We know Midlothian's unique cleaning challenges and weather patterns.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#dc2626] rounded-full p-2 flex-shrink-0">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">300+ 5-Star Reviews</h3>
                    <p className="text-gray-600">Highly rated by Midlothian homeowners for quality and reliability.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#dc2626] rounded-full p-2 flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Same-Day Service</h3>
                    <p className="text-gray-600">Quick response times for urgent cleaning needs in Midlothian.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative w-full h-96">
              <Image
                src="/images/pressure washing house.jpg"
                alt="Midlothian Power Washing"
                fill
                className="object-cover rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-5xl font-black text-center mb-12 uppercase tracking-tight">
            <span className="text-[#1e40af]">OUR POWER WASHING</span>{" "}
            <span className="text-[#FFA500] italic">SERVICES</span>{" "}
            <span className="text-[#1e40af]">IN MIDLOTHIAN</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <Image
                  src="/images/pressure washing house.jpg"
                  alt="House Washing Midlothian"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#dc2626] mb-3">House Washing</h3>
                  <p className="text-gray-600 mb-4">
                    Complete exterior house cleaning to remove dirt, mold, and mildew from your Midlothian home.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Siding cleaning
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Mold removal
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Window cleaning
                    </li>
                  </ul>
                  <Button className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-black uppercase tracking-wide italic">
                    FREE QUOTE
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <Image
                  src="/images/powerwashing deck.jpg"
                  alt="Deck Cleaning Midlothian"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#dc2626] mb-3">Deck Cleaning</h3>
                  <p className="text-gray-600 mb-4">
                    Professional deck cleaning and restoration to bring your outdoor space back to life.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Pressure washing
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Staining & sealing
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Wood restoration
                    </li>
                  </ul>
                  <Button className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-black uppercase tracking-wide italic">
                    FREE QUOTE
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <Image
                  src="/images/pressure washing driveway .jpg"
                  alt="Concrete Cleaning Midlothian"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#dc2626] mb-3">Concrete Cleaning</h3>
                  <p className="text-gray-600 mb-4">
                    Driveway, patio, and sidewalk cleaning to restore your concrete surfaces.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Oil stain removal
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Pressure washing
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Sealing options
                    </li>
                  </ul>
                  <Button className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-black uppercase tracking-wide italic">
                    FREE QUOTE
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-5xl font-black text-center mb-12 uppercase tracking-tight">
            <span className="text-[#1e40af]">WE SERVE ALL</span>{" "}
            <span className="text-[#FFA500] italic">MIDLOTHIAN</span>{" "}
            <span className="text-[#1e40af]">NEIGHBORHOODS</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <MapPin className="w-6 h-6 text-[#dc2626] mx-auto mb-2" />
              <p className="text-sm font-semibold text-[#dc2626]">Midlothian Village</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <MapPin className="w-6 h-6 text-[#dc2626] mx-auto mb-2" />
              <p className="text-sm font-semibold text-[#dc2626]">Salisbury</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <MapPin className="w-6 h-6 text-[#dc2626] mx-auto mb-2" />
              <p className="text-sm font-semibold text-[#dc2626]">Robious</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <MapPin className="w-6 h-6 text-[#dc2626] mx-auto mb-2" />
              <p className="text-sm font-semibold text-[#dc2626]">Huguenot</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <MapPin className="w-6 h-6 text-[#dc2626] mx-auto mb-2" />
              <p className="text-sm font-semibold text-[#dc2626]">Brandermill</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <MapPin className="w-6 h-6 text-[#dc2626] mx-auto mb-2" />
              <p className="text-sm font-semibold text-[#dc2626]">Woodlake</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-5xl font-black text-center mb-12 uppercase tracking-tight">
            <span className="text-[#1e40af]">READY TO</span>{" "}
            <span className="text-[#FFA500] italic">TRANSFORM</span>{" "}
            <span className="text-[#1e40af]">YOUR MIDLOTHIAN HOME?</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <ContactFormSimple />
            </div>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-[#1e40af] mb-4">Why Choose Us for Midlothian Power Washing?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Local Midlothian business with community focus</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Professional equipment and eco-friendly solutions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Free estimates with no hidden fees</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Same-day service available</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">100% satisfaction guarantee</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-[#1e40af] to-[#dc2626] text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Get Your Free Midlothian Estimate</h3>
                <p className="text-lg mb-6">
                  Ready to see the difference professional power washing can make to your Midlothian home? Contact us today for a free, no-obligation estimate.
                </p>
                <div className="flex items-center gap-3 text-lg font-semibold">
                  <Phone className="w-6 h-6" />
                  <span>(804) 555-0123</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
