import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, MapPin, Phone, Mail, Clock, Star, Shield, Award } from "lucide-react";
import Header from "@/components/header";
import dynamic from "next/dynamic";

// Lazy load components
const TrustBadges = dynamic(() => import("@/components/trust-badges"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-32 rounded-lg"></div>
});

const GoogleReviewsCarousel = dynamic(() => import("@/components/google-reviews-carousel"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>
});

const ContactFormSimple = dynamic(() => import("@/components/contact-form-simple"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>
});

export const metadata = {
  title: "Power Washing Chesterfield VA | Professional Services in Chesterfield County",
  description: "Professional power washing services in Chesterfield County, VA. House washing, deck cleaning, concrete cleaning, and more. Serving Midlothian, Bon Air, Chester. Free estimates!",
  keywords: "power washing Chesterfield VA, pressure washing Chesterfield County, house washing Midlothian, deck cleaning Bon Air, concrete cleaning Chester, power washing Chesterfield County Virginia"
};

export default function ChesterfieldPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <Header />

      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        <Image
          src="/images/powerwashing deck.jpg"
          alt="Power washing services in Chesterfield County Virginia"
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
              IN CHESTERFIELD COUNTY, VA
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-semibold">
              Chesterfield County's most trusted power washing company. We've been serving Midlothian, Bon Air, Chester, and surrounding areas for over 10 years with professional, reliable, and affordable power washing services.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xl px-8 py-4 font-black uppercase tracking-wide italic" asChild>
              <Link href="/contact">Get Free Estimate</Link>
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
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <Image
                  src="/images/google five star rating 2.png"
                  alt="Google Five Star Rating"
                  width={200}
                  height={60}
                  className="mx-auto lg:mx-0 mb-6"
                />
                <h2 className="text-5xl font-black text-center lg:text-left mb-8 uppercase tracking-tight">
                  <span className="text-[#1e40af]">WHAT OUR</span>{" "}
                  <span className="text-[#FFA500] italic">CHESTERFIELD</span>{" "}
                  <span className="text-[#1e40af]">CUSTOMERS SAY</span>
                </h2>
              </div>
              
              <GoogleReviewsCarousel />
            </div>
            <div className="relative z-10">
              <ContactFormSimple />
            </div>
          </div>
        </div>
      </section>

      {/* Services in Chesterfield */}
      <section className="py-16 bg-[#f8f9fa] relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/images/splash of water.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        ></div>
        
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <h2 className="text-5xl font-black text-center mb-12 uppercase tracking-tight">
            <span className="text-[#1e40af]">OUR POWER WASHING</span>{" "}
            <span className="text-[#FFA500] italic">SERVICES</span>{" "}
            <span className="text-[#1e40af]">IN CHESTERFIELD COUNTY</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <Image
                  src="/images/pressure washing house.jpg"
                  alt="House Washing Chesterfield County"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#dc2626] mb-3">House Washing</h3>
                  <p className="text-gray-600 mb-4">
                    Complete exterior house cleaning including siding, brick, stucco, and vinyl. Safe for all surfaces.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Soft washing for delicate surfaces
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Mold and mildew removal
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Gutter cleaning included
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
                  alt="Deck Cleaning Chesterfield County"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#dc2626] mb-3">Deck & Fence Cleaning</h3>
                  <p className="text-gray-600 mb-4">
                    Restore your deck and fence to like-new condition with wood-safe cleaning solutions.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Wood-safe cleaning techniques
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Stain preparation
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Sealing recommendations
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
                  src="/images/Pressure washing concrete 2 - commercial.jpg"
                  alt="Concrete Cleaning Chesterfield County"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#dc2626] mb-3">Concrete Cleaning</h3>
                  <p className="text-gray-600 mb-4">
                    Driveway, sidewalk, and patio cleaning with professional oil stain removal.
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

            <Card className="bg-white overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <Image
                  src="/images/pressure washing roof - residential.jpg"
                  alt="Roof Cleaning Chesterfield County"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#dc2626] mb-3">Roof Cleaning</h3>
                  <p className="text-gray-600 mb-4">
                    Safe roof cleaning and moss removal with low-pressure techniques.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Low-pressure cleaning
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Moss removal
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Shingle-safe techniques
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
                  src="/images/pressure washing window.jpg"
                  alt="Window Cleaning Chesterfield County"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#dc2626] mb-3">Window Cleaning</h3>
                  <p className="text-gray-600 mb-4">
                    Professional window cleaning for crystal-clear results.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Interior and exterior
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Streak-free finish
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Screen cleaning
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
                  src="/images/pressure washing gutter.jpg"
                  alt="Gutter Cleaning Chesterfield County"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#dc2626] mb-3">Gutter Cleaning</h3>
                  <p className="text-gray-600 mb-4">
                    Complete gutter cleaning and maintenance service.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Debris removal
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Downspout cleaning
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Gutter inspection
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

      {/* Why Choose Us */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl font-black uppercase tracking-tight">
                <span className="text-[#1e40af]">WHY CHESTERFIELD</span>{" "}
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
                    <p className="text-gray-600">Fully licensed and insured for your peace of mind in Chesterfield County.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#dc2626] rounded-full p-2 flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">10+ Years Experience</h3>
                    <p className="text-gray-600">Over a decade of experience serving Chesterfield County homeowners.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#dc2626] rounded-full p-2 flex-shrink-0">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">300+ 5-Star Reviews</h3>
                    <p className="text-gray-600">Highly rated by satisfied customers throughout Chesterfield County.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#dc2626] rounded-full p-2 flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Same-Day Service</h3>
                    <p className="text-gray-600">Available for urgent cleaning needs in Chesterfield County.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative w-full h-96">
              <Image
                src="/images/chesterfield image.jpeg"
                alt="Chesterfield County Power Washing"
                fill
                className="object-cover rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-5xl font-black text-center mb-12 uppercase tracking-tight">
            <span className="text-[#1e40af]">WE SERVE ALL</span>{" "}
            <span className="text-[#FFA500] italic">CHESTERFIELD</span>{" "}
            <span className="text-[#1e40af]">NEIGHBORHOODS</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "Midlothian", "Bon Air", "Chester", "Woodlake", "Brandermill", "Huguenot",
              "Robious", "Swift Creek", "Powhatan", "Moseley", "Winterpock", "Enon"
            ].map((area) => (
              <Card key={area} className="bg-white text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <MapPin className="w-8 h-8 text-[#dc2626] mx-auto mb-2" />
                  <h3 className="font-semibold text-[#1e40af]">{area}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#1e40af] to-[#dc2626] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-black mb-8 uppercase tracking-tight">
            READY TO <span className="text-[#FFA500] italic">TRANSFORM</span> YOUR CHESTERFIELD PROPERTY?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free estimate for professional power washing services in Chesterfield County. 
            We serve Midlothian, Bon Air, Chester, and all surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#1e40af] hover:bg-gray-100 text-xl px-8 py-4 font-black uppercase tracking-wide italic" asChild>
              <Link href="/contact">Get Free Estimate</Link>
            </Button>
            <Button size="lg" className="bg-[#FFA500] hover:bg-[#e6940a] text-white text-xl px-8 py-4 font-black uppercase tracking-wide italic">
              CALL (804) 555-0123
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#1e40af] to-[#dc2626] text-white py-16 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">Richmond Power Washing Pro</h3>
              <p className="text-lg mb-4">
                Chesterfield County's most trusted power washing company. Professional, reliable, and affordable services.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">Services</h4>
              <ul className="space-y-2">
                <li><Link href="/services/house-washing" className="hover:text-[#FFA500] transition-colors">House Washing</Link></li>
                <li><Link href="/services/deck-cleaning" className="hover:text-[#FFA500] transition-colors">Deck Cleaning</Link></li>
                <li><Link href="/services/concrete-cleaning" className="hover:text-[#FFA500] transition-colors">Concrete Cleaning</Link></li>
                <li><Link href="/services/roof-cleaning" className="hover:text-[#FFA500] transition-colors">Roof Cleaning</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">Service Areas</h4>
              <ul className="space-y-2">
                <li><Link href="/richmond" className="hover:text-[#FFA500] transition-colors">Richmond</Link></li>
                <li><Link href="/henrico" className="hover:text-[#FFA500] transition-colors">Henrico County</Link></li>
                <li><Link href="/chesterfield" className="hover:text-[#FFA500] transition-colors">Chesterfield</Link></li>
                <li><Link href="/williamsburg" className="hover:text-[#FFA500] transition-colors">Williamsburg</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#FFA500]" />
                  <span className="text-lg font-semibold">(804) 555-0123</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#FFA500]" />
                  <span>info@richmondpowerwashpro.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#FFA500]" />
                  <span>Mon-Sat: 7AM-7PM</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-12 pt-8 text-center">
            <p className="text-lg">
              © 2024 Richmond Power Washing Pro. All rights reserved. | Serving Chesterfield County, VA
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
