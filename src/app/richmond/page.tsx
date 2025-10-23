import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, MapPin, Phone, Mail, Clock, Star, Shield, Award } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
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
  title: "Power Washing Richmond VA | Professional Services in Richmond Virginia",
  description: "Professional power washing services in Richmond, VA. House washing, deck cleaning, concrete cleaning, and more. Licensed, insured, locally owned. Free estimates!",
  keywords: "power washing Richmond VA, pressure washing Richmond Virginia, house washing Richmond, deck cleaning Richmond, concrete cleaning Richmond, roof cleaning Richmond, gutter cleaning Richmond, window cleaning Richmond"
};

export default function RichmondPage() {
  const services = [
    {
      name: "House Washing",
      description: "Complete exterior house cleaning including siding, gutters, and walkways",
      price: "Starting at $200",
      features: ["Soft washing technique", "Gutter cleaning included", "Mold removal", "Window cleaning add-on"]
    },
    {
      name: "Deck & Fence Cleaning",
      description: "Professional deck and fence cleaning with wood-safe solutions",
      price: "Starting at $150",
      features: ["Wood-safe cleaning", "Stain preparation", "Sealing recommendations", "Pressure washing"]
    },
    {
      name: "Concrete Cleaning",
      description: "Driveway, sidewalk, and patio cleaning with oil stain removal",
      price: "Starting at $100",
      features: ["Oil stain removal", "Pressure washing", "Sealing options", "Eco-friendly solutions"]
    },
    {
      name: "Roof Cleaning",
      description: "Safe roof cleaning and moss removal with low-pressure techniques",
      price: "Starting at $300",
      features: ["Low-pressure cleaning", "Moss removal", "Gutter cleaning", "Shingle-safe techniques"]
    },
    {
      name: "Window Cleaning",
      description: "Professional window cleaning for crystal-clear results",
      price: "Starting at $120",
      features: ["Interior and exterior", "Streak-free finish", "Screen cleaning", "Frame cleaning"]
    },
    {
      name: "Gutter Cleaning",
      description: "Complete gutter cleaning and maintenance service",
      price: "Starting at $80",
      features: ["Debris removal", "Downspout cleaning", "Gutter inspection", "Minor repairs"]
    }
  ];

  const neighborhoods = [
    "The Fan District",
    "Shockoe Bottom",
    "Carytown",
    "Church Hill",
    "Jackson Ward",
    "Oregon Hill",
    "Westover Hills",
    "Forest Hill",
    "Bellevue",
    "Ginter Park",
    "Lakeside",
    "Northside",
    "Southside",
    "Manchester",
    "Stratford Hills"
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <Header />

      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        <Image
          src="/images/powerwashing deck.jpg"
          alt="Power washing services in Richmond Virginia"
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
                Richmond's most trusted power washing company. We've been serving the Richmond metro area for over 10 years with professional, reliable, and affordable power washing services.
              </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xl px-8 py-4 font-black uppercase tracking-wide italic">
                Get Free Estimate
              </Button>
            </Link>
            <Button size="lg" className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white text-xl px-8 py-4 font-black uppercase tracking-wide italic">
              CALL (804) 555-0123
                </Button>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Why Choose Us for Richmond */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-black text-center mb-12 uppercase tracking-tight">
            <span className="text-[#1e40af]">WHY RICHMOND</span>{" "}
            <span className="text-[#FFA500] italic">HOMEOWNERS</span>{" "}
            <span className="text-[#1e40af]">CHOOSE US</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-[#1e40af] mb-6">
                Local Richmond Power Washing Experts
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                As a locally owned and operated business, we understand Richmond's unique climate and architectural styles. 
                From historic homes in The Fan to modern properties in Short Pump, we have the experience and knowledge 
                to clean every type of property safely and effectively.
              </p>
              <ul className="space-y-3">
                {[
                  "Licensed, bonded, and fully insured",
                  "10+ years serving Richmond area", 
                  "Free estimates with no hidden fees",
                  "Same-day service available",
                  "100% satisfaction guarantee"
                ].map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#dc2626]" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative w-full h-96">
              <Image 
                src="/images/richmond va image.jpeg" 
                alt="Richmond power washing professionals at work"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-black text-center mb-12 uppercase tracking-tight">
                <span className="text-[#1e40af]">WHAT OUR</span>{" "}
                <span className="text-[#FFA500] italic">RICHMOND</span>{" "}
                <span className="text-[#1e40af]">CUSTOMERS SAY</span>
              </h2>
              
              <div className="mt-8 flex justify-center">
                <Image 
                  src="/images/google five star rating 2.png"
                  alt="Google 5 Star Rating"
                  width={200}
                  height={100}
                  className="mb-8"
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

      {/* Services in Richmond */}
      <section className="py-16 bg-[#f3f4f6]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-black text-center mb-12 uppercase tracking-tight">
            <span className="text-[#1e40af]">OUR POWER WASHING</span>{" "}
            <span className="text-[#FFA500] italic">SERVICES</span>{" "}
            <span className="text-[#1e40af]">IN RICHMOND</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <Image
                  src="/images/pressure washing house.jpg"
                  alt="House Washing Richmond"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#dc2626] mb-3">House Washing</h3>
                  <p className="text-gray-600 mb-4">
                    Transform your Richmond home's exterior with our professional house washing service. We specialize in cleaning all siding types found throughout the city.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Gentle soft washing techniques
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Complete mold and mildew removal
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Gutter cleaning service included
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
                  alt="Deck Cleaning Richmond"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#dc2626] mb-3">Deck & Fence Cleaning</h3>
                  <p className="text-gray-600 mb-4">
                    Revitalize your Richmond deck and fence with our specialized wood cleaning service. Perfect for the humid Virginia climate.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Specialized wood-safe cleaning methods
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Professional stain preparation
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Expert sealing recommendations
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
                  alt="Concrete Cleaning Richmond"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#dc2626] mb-3">Concrete Cleaning</h3>
                  <p className="text-gray-600 mb-4">
                    Restore your Richmond driveway, sidewalks, and patios to pristine condition. We handle tough Virginia weather stains.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Advanced oil stain removal technology
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      High-pressure cleaning systems
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Protective sealing options available
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
                  alt="Roof Cleaning Richmond"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#dc2626] mb-3">Roof Cleaning</h3>
                  <p className="text-gray-600 mb-4">
                    Safely clean your Richmond roof with our low-pressure techniques. Protect your investment from Virginia's humid climate.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Gentle low-pressure cleaning methods
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Effective moss and algae removal
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Shingle-safe cleaning techniques
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
                  alt="Window Cleaning Richmond"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#dc2626] mb-3">Window Cleaning</h3>
                  <p className="text-gray-600 mb-4">
                    Achieve crystal-clear windows throughout your Richmond home. Professional interior and exterior cleaning service.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Complete interior and exterior cleaning
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Guaranteed streak-free finish
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Screen cleaning and maintenance
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
                  alt="Gutter Cleaning Richmond"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#dc2626] mb-3">Gutter Cleaning</h3>
                  <p className="text-gray-600 mb-4">
                    Keep your Richmond home protected with our comprehensive gutter cleaning service. Essential for Virginia's seasonal weather.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Complete debris removal and disposal
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Thorough downspout cleaning
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Professional gutter inspection
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

      {/* Richmond Neighborhoods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-black text-center mb-12 uppercase tracking-tight">
            <span className="text-[#1e40af]">WE SERVE ALL</span>{" "}
            <span className="text-[#FFA500] italic">RICHMOND</span>{" "}
            <span className="text-[#1e40af]">NEIGHBORHOODS</span>
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {neighborhoods.map((neighborhood, index) => (
              <Card key={index} className="bg-white text-center p-4 hover:shadow-md transition-shadow">
                <CardContent className="p-2">
                  <h3 className="font-semibold text-[#1e40af]">{neighborhood}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center mt-8 text-gray-600">
            Don't see your neighborhood? We serve all of Richmond and surrounding areas. 
            <Link href="#contact" className="text-[#1e40af] font-semibold ml-1">Contact us to confirm service in your area →</Link>
          </p>
        </div>
      </section>

      {/* Richmond Testimonials */}
      <section className="py-16 bg-[#f3f4f6]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-black text-center mb-12 uppercase tracking-tight">
            <span className="text-[#1e40af]">WHAT RICHMOND</span>{" "}
            <span className="text-[#FFA500] italic">CUSTOMERS</span>{" "}
            <span className="text-[#1e40af]">SAY</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Outstanding service! They cleaned our entire house in The Fan District and our deck. The team was professional, punctual, and the results exceeded our expectations. Highly recommend!",
                author: "Sarah M., The Fan District",
                rating: 5
              },
              {
                quote: "I've used Richmond Power Washing Pro three times now for my home in Carytown. They always do excellent work and their pricing is very fair. The deck looks brand new after their cleaning.",
                author: "James T., Carytown",
                rating: 5
              },
              {
                quote: "Fast, reliable, and thorough. They cleaned our driveway and removed oil stains I thought were permanent. Will definitely use them again for our Church Hill home!",
                author: "Emily & David, Church Hill",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white border-l-4 border-[#dc2626]">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg italic text-gray-600 mb-4">&quot;{testimonial.quote}&quot;</p>
                  <p className="font-semibold text-[#1e40af]">— {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-black text-center mb-12 uppercase tracking-tight">
            <span className="text-[#1e40af]">READY TO</span>{" "}
            <span className="text-[#FFA500] italic">TRANSFORM</span>{" "}
            <span className="text-[#1e40af]">YOUR RICHMOND PROPERTY?</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ContactFormSimple />
                  </div>
              
              <div className="space-y-6">
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-[#1e40af] mb-4">Why Choose Us?</h4>
                    <ul className="space-y-3">
                      {[
                        "Licensed, bonded, and fully insured",
                        "10+ years serving Richmond area",
                        "Professional-grade equipment",
                        "Eco-friendly cleaning solutions",
                        "100% satisfaction guarantee"
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-[#dc2626]" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-[#1e40af] mb-4">Richmond Service Areas</h4>
                    <p className="text-gray-600 mb-3">
                      We proudly serve all of Richmond and surrounding areas including:
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {["The Fan District", "Carytown", "Church Hill", "Shockoe Bottom", "Jackson Ward", "Oregon Hill", "Westover Hills", "Forest Hill"].map((area) => (
                        <div key={area} className="flex items-center gap-2">
                          <MapPin className="w-3 h-3 text-[#dc2626]" />
                          <span>{area}</span>
                        </div>
                      ))}
                    </div>
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