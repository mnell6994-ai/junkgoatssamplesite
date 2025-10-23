import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, MapPin, Phone, Mail, Clock, Star, Shield, Award } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import dynamic from "next/dynamic";

// Lazy load components
const GoogleReviewsCarousel = dynamic(() => import("@/components/google-reviews-carousel"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>
});

const ContactFormSimple = dynamic(() => import("@/components/contact-form-simple"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>
});

export const metadata = {
  title: "Furniture Removal Service Richmond VA | Professional Furniture Removal",
  description: "Professional furniture removal services in Richmond, VA. Safe removal of large furniture, sofas, tables, beds, and more. Same-day service, donation options, free estimates.",
  keywords: "furniture removal service, furniture removal Richmond VA, large furniture removal, sofa removal, bed removal, furniture disposal, furniture donation"
};

export default function FurnitureRemovalPage() {
  const serviceAreas = [
    "Richmond, VA",
    "Henrico County",
    "Chesterfield County",
    "Midlothian, VA",
    "Mechanicsville, VA",
    "Glen Allen, VA",
    "Short Pump, VA",
    "Chester, VA"
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <Header />

      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        <Image
          src="/images/junk-removal-richmond-va01.jpg"
          alt="Professional furniture removal services in Richmond Virginia"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={75}
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-black text-white mb-8 leading-tight uppercase tracking-tight">
              PROFESSIONAL{" "}
              <span className="inline-block font-black text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-[#dc2626]" style={{ 
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
              }}>
                FURNITURE REMOVAL
              </span>
              <br />
              SERVICES
              </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto font-semibold">
                Safe and professional furniture removal services in Richmond, VA. We handle all types of furniture including sofas, beds, tables, and heavy pieces with care and expertise.
              </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-[#dc2626] hover:bg-[#b91c1c] text-white text-lg md:text-xl px-6 md:px-8 py-3 md:py-4 font-black uppercase tracking-wide italic">
                Get Free Estimate
              </Button>
            </Link>
              <Button size="lg" className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white text-lg md:text-xl px-6 md:px-8 py-3 md:py-4 font-black uppercase tracking-wide italic">
              CALL (804) 494-7999
                </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Our Furniture Removal Services */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-12 uppercase tracking-tight">
            <span className="text-[#1e40af]">WHY CHOOSE OUR</span>{" "}
            <span className="text-[#dc2626]">FURNITURE REMOVAL</span>{" "}
            <span className="text-[#1e40af]">SERVICES</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1e40af] mb-6">
                Professional Furniture Removal in Richmond, VA
              </h3>
              <p className="text-base md:text-lg text-gray-600 mb-6">
                At Junk Goats, we specialize in safe and efficient furniture removal services throughout the Richmond area. Our experienced team understands that furniture removal requires special care and attention to detail, especially when dealing with large, heavy, or valuable pieces.
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-6">
                Whether you're moving to a new home, downsizing, renovating, or simply replacing old furniture, our furniture removal services are designed to make the process as smooth as possible. We handle all types of furniture including sofas, beds, dining tables, dressers, bookcases, and office furniture.
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-6">
                Our Richmond furniture removal team is equipped with the proper tools and techniques to safely remove furniture from any location, including narrow hallways, tight staircases, and difficult-to-access areas. We protect your property and ensure no damage occurs during the removal process.
              </p>
              <ul className="space-y-3">
                {[
                  "Safe removal of all furniture types",
                  "Professional handling techniques", 
                  "Donation options for usable furniture",
                  "Same-day service available",
                  "Property protection guaranteed"
                ].map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#dc2626]" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative w-full h-64 md:h-96">
              <Image 
                src="/images/mattress-removal.jpg" 
                alt="Professional furniture removal team safely handling large furniture"
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-12 uppercase tracking-tight">
                <span className="text-[#1e40af]">WHAT OUR</span>{" "}
                <span className="text-[#dc2626]">FURNITURE REMOVAL</span>{" "}
                <span className="text-[#1e40af]">CUSTOMERS SAY</span>
              </h2>
              
              <div className="mt-8 flex justify-center">
                <Image 
                  src="/images/google-five-star-rating.png"
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

      {/* Types of Furniture We Remove */}
      <section className="py-16 bg-[#f3f4f6]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-12 uppercase tracking-tight">
            <span className="text-[#1e40af]">TYPES OF</span>{" "}
            <span className="text-[#dc2626]">FURNITURE</span>{" "}
            <span className="text-[#1e40af]">WE REMOVE</span>
          </h2>
          
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-[#1e40af] mb-6 text-center">Living Room Furniture</h3>
            <p className="text-lg text-gray-600 mb-6 text-center max-w-4xl mx-auto">
              Our furniture removal services cover all types of living room furniture, from oversized sectionals to delicate antique pieces. We understand that living room furniture often represents significant investments and requires careful handling.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-[#dc2626] mb-4">Sofas & Sectionals</h4>
                <p className="text-gray-600 mb-4">
                  Professional removal of sofas, loveseats, sectionals, and recliners. We handle large pieces that can be difficult to maneuver, including modular sectionals that need to be disassembled.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Oversized sectional removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Recliner and lift chair removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Sofa bed and futon removal
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-[#dc2626] mb-4">Tables & Entertainment</h4>
                <p className="text-gray-600 mb-4">
                  Safe removal of coffee tables, end tables, entertainment centers, and TV stands. We protect your floors and walls during the removal process.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Coffee and side table removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Entertainment center removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Console and credenza removal
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-3xl font-bold text-[#1e40af] mb-6 text-center">Bedroom Furniture</h3>
            <p className="text-lg text-gray-600 mb-6 text-center max-w-4xl mx-auto">
              Bedroom furniture removal requires special attention to detail, especially when dealing with heavy pieces like dressers, armoires, and bed frames. Our team has the experience to handle bedroom furniture safely and efficiently.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-[#dc2626] mb-4">Beds & Mattresses</h4>
                <p className="text-gray-600 mb-4">
                  Complete bed removal including mattresses, box springs, bed frames, and headboards. We handle all sizes from twin to California king.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Mattress and box spring removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Bed frame and headboard removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Bunk bed and loft bed removal
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-[#dc2626] mb-4">Storage Furniture</h4>
                <p className="text-gray-600 mb-4">
                  Safe removal of dressers, armoires, chests, and wardrobes. These heavy pieces require careful handling to prevent damage to your floors and the furniture itself.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Dresser and chest removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Armoire and wardrobe removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Nightstand and bedside table removal
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-3xl font-bold text-[#1e40af] mb-6 text-center">Dining Room & Office Furniture</h3>
            <p className="text-lg text-gray-600 mb-6 text-center max-w-4xl mx-auto">
              Dining room and office furniture often includes large, heavy pieces that require specialized removal techniques. Our team is experienced in handling dining sets, desks, and office furniture safely.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-[#dc2626] mb-4">Dining Room Sets</h4>
                <p className="text-gray-600 mb-4">
                  Complete dining room furniture removal including tables, chairs, buffets, and china cabinets. We handle formal dining sets with care and attention to detail.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Dining table removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Dining chair removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Buffet and china cabinet removal
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-[#dc2626] mb-4">Office Furniture</h4>
                <p className="text-gray-600 mb-4">
                  Professional office furniture removal including desks, filing cabinets, bookcases, and office chairs. We understand the unique challenges of office furniture removal.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Desk and workstation removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Filing cabinet removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Office chair and seating removal
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-[#1e40af] mb-6">Specialized Furniture Removal Services</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
              Our furniture removal services extend beyond standard pieces to include specialized furniture that requires expert handling. We have the experience and equipment to safely remove any type of furniture from your Richmond area property.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white text-center p-6">
                <CardContent className="p-4">
                  <h4 className="text-xl font-bold text-[#dc2626] mb-3">Antique & Vintage</h4>
                  <p className="text-gray-600">Careful handling of antique and vintage furniture pieces with special attention to preservation</p>
                </CardContent>
              </Card>
              <Card className="bg-white text-center p-6">
                <CardContent className="p-4">
                  <h4 className="text-xl font-bold text-[#dc2626] mb-3">Outdoor Furniture</h4>
                  <p className="text-gray-600">Removal of patio sets, outdoor seating, and weather-resistant furniture</p>
                </CardContent>
              </Card>
              <Card className="bg-white text-center p-6">
                <CardContent className="p-4">
                  <h4 className="text-xl font-bold text-[#dc2626] mb-3">Heavy & Oversized</h4>
                  <p className="text-gray-600">Specialized equipment and techniques for heavy, oversized, or difficult-to-move furniture</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-12 uppercase tracking-tight">
            <span className="text-[#1e40af]">FURNITURE REMOVAL</span>{" "}
            <span className="text-[#dc2626]">SERVICE AREAS</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {serviceAreas.map((area, index) => (
              <Card key={index} className="bg-white text-center p-4 hover:shadow-md transition-shadow">
                <CardContent className="p-2">
                  <h3 className="font-semibold text-[#1e40af]">{area}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-[#1e40af] mb-4 text-center">Richmond Area Furniture Removal Coverage</h3>
            <p className="text-gray-600 mb-4 text-center">
              Junk Goats provides comprehensive furniture removal services throughout the greater Richmond area. Our service coverage extends to all major communities, ensuring convenient access to professional furniture removal for residents and businesses.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Richmond City:</strong> We serve all neighborhoods within Richmond city limits, including historic areas with narrow streets and tight access. Our team is experienced in navigating Richmond's unique architectural challenges to safely remove furniture from any location.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Henrico County:</strong> Our furniture removal services cover all Henrico County areas including Glen Allen, Short Pump, Tuckahoe, and the West End. We understand the diverse housing styles and can adapt our removal techniques accordingly.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Chesterfield County:</strong> We provide furniture removal services to Chesterfield County communities including Chester, Moseley, Midlothian, and Bon Air. Our team is familiar with the area's regulations and can provide efficient, compliant service.
            </p>
            <p className="text-center mt-6 text-gray-600">
              Need furniture removal in another area? We travel throughout the Richmond metro area for larger jobs. 
              <Link href="#contact" className="text-[#1e40af] font-semibold ml-1">Contact us to confirm service in your location →</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-12 uppercase tracking-tight">
            <span className="text-[#1e40af]">READY TO</span>{" "}
            <span className="text-[#dc2626]">REMOVE YOUR FURNITURE?</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ContactFormSimple />
              </div>
              
              <div className="space-y-6">
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-[#1e40af] mb-4">Why Choose Junk Goats?</h4>
                    <ul className="space-y-3">
                      {[
                        "Safe removal of all furniture types",
                        "Professional handling techniques",
                        "Donation options for usable furniture",
                        "Same-day service available",
                        "Property protection guaranteed"
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
                    <h4 className="text-xl font-bold text-[#1e40af] mb-4">Service Areas</h4>
                    <p className="text-gray-600 mb-3">
                      We proudly provide furniture removal services throughout the Richmond metro area including:
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {serviceAreas.map((area) => (
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
