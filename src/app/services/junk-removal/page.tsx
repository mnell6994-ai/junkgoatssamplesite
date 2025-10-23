import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, MapPin, Phone, Mail, Clock, Star, Shield, Award } from "lucide-react";
import HeaderWorking from "@/components/header-working";
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
  title: "Junk Removal Service Richmond VA | Professional Junk Removal Services",
  description: "Professional junk removal services in Richmond, VA. Complete junk removal for homes and businesses. Same-day service, eco-friendly disposal, free estimates. Licensed and insured.",
  keywords: "junk removal service, junk removal Richmond VA, professional junk removal, same day junk removal, eco friendly junk removal, junk removal company"
};

export default function JunkRemovalPage() {
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
      <HeaderWorking />

      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        <Image
          src="/images/junk-removal-richmond-va01.jpg"
          alt="Professional junk removal services in Richmond Virginia"
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
                JUNK REMOVAL
              </span>
              <br />
              SERVICES
              </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto font-semibold">
                Complete junk removal services for homes and businesses throughout Richmond, VA. Same-day service, eco-friendly disposal, and professional handling of all unwanted items.
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

      {/* Why Choose Our Junk Removal Services */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-12 uppercase tracking-tight">
            <span className="text-[#1e40af]">WHY CHOOSE OUR</span>{" "}
            <span className="text-[#dc2626]">JUNK REMOVAL</span>{" "}
            <span className="text-[#1e40af]">SERVICES</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1e40af] mb-6">
                Professional Junk Removal in Richmond, VA
              </h3>
              <p className="text-base md:text-lg text-gray-600 mb-6">
                At Junk Goats, we provide comprehensive junk removal services that help Richmond area residents and businesses reclaim their space. Our professional junk removal team is equipped with the tools, experience, and dedication needed to handle any size job efficiently and safely.
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-6">
                Whether you're clearing out a single room, an entire home, or managing a commercial property, our junk removal services are designed to make the process as stress-free as possible. We understand that junk removal can be overwhelming, which is why we handle every aspect of the job from start to finish.
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-6">
                Our Richmond junk removal services include same-day pickup, eco-friendly disposal methods, and transparent pricing with no hidden fees. We accept all types of non-hazardous items including furniture, electronics, appliances, construction debris, and general household junk.
              </p>
              <ul className="space-y-3">
                {[
                  "Same-day junk removal service available",
                  "Licensed, bonded, and fully insured", 
                  "Eco-friendly disposal methods",
                  "Free estimates with transparent pricing",
                  "Professional, uniformed team"
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
                src="/images/junk-removal-1.jpg" 
                alt="Professional junk removal team at work in Richmond"
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
                <span className="text-[#dc2626]">JUNK REMOVAL</span>{" "}
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

      {/* Comprehensive Junk Removal Services */}
      <section className="py-16 bg-[#f3f4f6]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-12 uppercase tracking-tight">
            <span className="text-[#1e40af]">COMPREHENSIVE</span>{" "}
            <span className="text-[#dc2626]">JUNK REMOVAL</span>{" "}
            <span className="text-[#1e40af]">SOLUTIONS</span>
          </h2>
          
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-[#1e40af] mb-6 text-center">Residential Junk Removal Services</h3>
            <p className="text-lg text-gray-600 mb-6 text-center max-w-4xl mx-auto">
              Our residential junk removal services are designed to help Richmond area homeowners reclaim their living spaces. Whether you're downsizing, moving, renovating, or simply decluttering, our professional junk removal team can handle any size residential job.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-[#dc2626] mb-4">Home Cleanouts</h4>
                <p className="text-gray-600 mb-4">
                  Complete home cleanouts for any size property. We handle everything from single rooms to entire houses, ensuring every item is properly sorted, recycled, or disposed of responsibly.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Full house cleanouts
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Room-by-room removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Sensitive handling of personal items
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-[#dc2626] mb-4">Moving & Relocation</h4>
                <p className="text-gray-600 mb-4">
                  Moving junk removal services to help you transition smoothly. We remove unwanted items before your move, making packing and transporting easier and more cost-effective.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Pre-move junk removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Post-move cleanup
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Flexible scheduling
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-3xl font-bold text-[#1e40af] mb-6 text-center">Commercial Junk Removal Services</h3>
            <p className="text-lg text-gray-600 mb-6 text-center max-w-4xl mx-auto">
              Our commercial junk removal services help Richmond area businesses maintain clean, organized workspaces. From office cleanouts to retail space clearing, we provide efficient solutions that minimize business disruption.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-[#dc2626] mb-4">Office Cleanouts</h4>
                <p className="text-gray-600 mb-4">
                  Professional office cleanout services for businesses of all sizes. We handle furniture removal, equipment disposal, and general office junk with minimal disruption to your operations.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Office furniture removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Equipment disposal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    After-hours service available
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-[#dc2626] mb-4">Retail & Warehouse</h4>
                <p className="text-gray-600 mb-4">
                  Specialized junk removal for retail spaces, warehouses, and commercial properties. We understand the unique needs of commercial clients and provide tailored solutions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Retail fixture removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Warehouse cleanup
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Bulk item disposal
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-[#1e40af] mb-6">Specialized Junk Removal Categories</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
              Our junk removal services cover all categories of unwanted items. We have the expertise and equipment to handle everything from large furniture to small electronics, ensuring proper disposal and recycling whenever possible.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white text-center p-6">
                <CardContent className="p-4">
                  <h4 className="text-xl font-bold text-[#dc2626] mb-3">Furniture & Appliances</h4>
                  <p className="text-gray-600">Sofas, tables, refrigerators, washers, dryers, and all major appliances</p>
                </CardContent>
              </Card>
              <Card className="bg-white text-center p-6">
                <CardContent className="p-4">
                  <h4 className="text-xl font-bold text-[#dc2626] mb-3">Electronics & Technology</h4>
                  <p className="text-gray-600">Computers, TVs, printers, phones, and other electronic devices</p>
                </CardContent>
              </Card>
              <Card className="bg-white text-center p-6">
                <CardContent className="p-4">
                  <h4 className="text-xl font-bold text-[#dc2626] mb-3">Construction & Renovation</h4>
                  <p className="text-gray-600">Drywall, lumber, flooring, fixtures, and construction materials</p>
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
            <span className="text-[#1e40af]">JUNK REMOVAL</span>{" "}
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
            <h3 className="text-2xl font-bold text-[#1e40af] mb-4 text-center">Richmond Area Junk Removal Coverage</h3>
            <p className="text-gray-600 mb-4 text-center">
              Junk Goats provides comprehensive junk removal services throughout the greater Richmond area. Our service coverage extends to all major communities and neighborhoods, ensuring convenient access to professional junk removal for residents and businesses alike.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Richmond City:</strong> We serve all neighborhoods within Richmond city limits, including The Fan District, Carytown, Church Hill, Shockoe Bottom, Jackson Ward, Oregon Hill, and Westover Hills. Our local knowledge helps us navigate the city's unique challenges and provide efficient service.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Henrico County:</strong> Our junk removal services extend throughout Henrico County, covering Glen Allen, Short Pump, Tuckahoe, Lakeside, Innsbrook, and the West End. We understand the diverse needs of Henrico County residents and provide tailored solutions.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Chesterfield County:</strong> We provide junk removal services to Chesterfield County communities including Chester, Moseley, Midlothian, Bon Air, Woodlake, and Brandermill. Our team is familiar with the county's regulations and disposal requirements.
            </p>
            <p className="text-center mt-6 text-gray-600">
              Don't see your area listed? We travel throughout the Richmond metro area for larger jobs. 
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
            <span className="text-[#dc2626]">REMOVE YOUR JUNK?</span>
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
                        "Licensed, bonded, and fully insured",
                        "Same-day service available",
                        "Eco-friendly disposal methods",
                        "Transparent pricing with free estimates",
                        "Professional, uniformed team"
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
                      We proudly provide junk removal services throughout the Richmond metro area including:
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
