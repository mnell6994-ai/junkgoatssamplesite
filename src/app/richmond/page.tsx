import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, MapPin, Phone, Mail, Clock, Star, Shield, Award } from "lucide-react";
import HeaderWorking from "@/components/header-working";
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
  title: "Junk Removal Richmond VA | Professional Junk Removal Services",
  description: "Professional junk removal services in Richmond, VA. Same-day service for furniture, appliances, estate cleanouts & construction debris. Licensed & insured. Free estimates!",
  keywords: "junk removal Richmond VA, junk removal Richmond Virginia, furniture removal Richmond, estate cleanout Richmond, construction debris Richmond, appliance removal Richmond, yard waste Richmond, commercial cleanout Richmond"
};

export default function RichmondPage() {
  const services = [
    {
      name: "Junk Removal",
      description: "Complete junk removal service for homes and businesses throughout Richmond",
      price: "Starting at $150",
      features: ["Same-day service available", "All items accepted", "Eco-friendly disposal", "Free estimates"]
    },
    {
      name: "Furniture Removal",
      description: "Professional furniture removal including large items and heavy pieces",
      price: "Starting at $100",
      features: ["Large furniture handling", "Safe removal techniques", "Donation options", "Responsible disposal"]
    },
    {
      name: "Estate Cleanout",
      description: "Complete estate cleanout services for homes and properties",
      price: "Starting at $300",
      features: ["Full property cleanout", "Sensitive handling", "Item sorting", "Family consultation"]
    },
    {
      name: "Construction Debris",
      description: "Construction debris removal for contractors and homeowners",
      price: "Starting at $200",
      features: ["Construction materials", "Concrete removal", "Heavy debris handling", "Contractor discounts"]
    },
    {
      name: "Appliance Removal",
      description: "Safe appliance removal including refrigerators, washers, and more",
      price: "Starting at $80",
      features: ["All appliance types", "Safe disconnection", "Responsible disposal", "Same-day service"]
    },
    {
      name: "Yard Waste Removal",
      description: "Yard waste and debris removal for residential properties",
      price: "Starting at $120",
      features: ["Yard debris cleanup", "Branches and logs", "Seasonal cleanup", "Eco-friendly disposal"]
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
      <HeaderWorking />

      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        <Image
          src="/images/junk-removal-richmond-va01.jpg"
          alt="Junk removal services in Richmond Virginia"
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
              IN RICHMOND, VA
              </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto font-semibold">
                Richmond's most trusted junk removal company. We've been serving the Richmond metro area for years with professional, reliable, and affordable junk removal services.
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


      {/* Why Choose Us for Richmond */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-12 uppercase tracking-tight">
            <span className="text-[#1e40af]">WHY RICHMOND</span>{" "}
            <span className="text-[#dc2626]">RESIDENTS</span>{" "}
            <span className="text-[#1e40af]">CHOOSE US</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1e40af] mb-6">
                Local Richmond Junk Removal Experts
              </h3>
              <p className="text-base md:text-lg text-gray-600 mb-6">
                As a locally owned and operated business, we understand Richmond's diverse neighborhoods and unique needs. 
                From historic homes in The Fan to modern properties in Short Pump, we have the experience and knowledge 
                to handle any junk removal job safely and efficiently.
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-6">
                Richmond's rich history means many homes have accumulated decades of belongings. Whether you're dealing with 
                estate cleanouts in Church Hill, furniture removal from Shockoe Bottom apartments, or construction debris 
                from downtown renovations, our Richmond junk removal experts know how to navigate the city's unique challenges.
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-6">
                We serve all Richmond neighborhoods including The Fan District, Carytown, Jackson Ward, Oregon Hill, 
                and Westover Hills. Our local knowledge helps us provide faster service and better pricing than 
                out-of-town companies who don't understand Richmond's specific needs.
              </p>
              <ul className="space-y-3">
                {[
                  "Licensed, bonded, and fully insured",
                  "Years of experience serving Richmond area", 
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
            <div className="relative w-full h-64 md:h-96">
              <Image 
                src="/images/richmond-va-update.jpg" 
                alt="Richmond junk removal professionals at work"
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
      <section className="py-12 md:py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-12 uppercase tracking-tight">
                <span className="text-[#1e40af]">WHAT OUR</span>{" "}
                <span className="text-[#dc2626]">RICHMOND</span>{" "}
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

      {/* Services in Richmond */}
      <section className="py-12 md:py-16 bg-[#f3f4f6]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-12 uppercase tracking-tight">
            <span className="text-[#1e40af]">OUR JUNK REMOVAL</span>{" "}
            <span className="text-[#dc2626]">SERVICES</span>{" "}
            <span className="text-[#1e40af]">IN RICHMOND</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <Image
                  src="/images/junk-removal-1.jpg"
                  alt="Junk Removal Richmond"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-[#dc2626] mb-3">Junk Removal</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4">
                    Complete junk removal service for homes and businesses throughout Richmond. We handle all types of unwanted items safely and efficiently. 
                    From single item pickups to full house cleanouts, our Richmond team provides professional junk removal services across all neighborhoods 
                    including The Fan, Carytown, Church Hill, and Jackson Ward.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Same-day service available
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      All items accepted
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Eco-friendly disposal
                    </li>
                  </ul>
                  <Link href="/contact">
                  <Button className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-black uppercase tracking-wide italic">
                    FREE QUOTE
                  </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <Image
                  src="/images/mattress-removal.jpg"
                  alt="Furniture Removal Richmond"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-[#dc2626] mb-3">Furniture Removal</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4">
                    Professional furniture removal including large items and heavy pieces. We handle all furniture types with care and professionalism. 
                    Richmond's historic homes often have large furniture that's difficult to move through narrow doorways and tight spaces. 
                    Our experienced team knows how to safely remove furniture from Richmond's unique architectural layouts.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Large furniture handling
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Safe removal techniques
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Donation options available
                    </li>
                  </ul>
                  <Link href="/contact">
                  <Button className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-black uppercase tracking-wide italic">
                    FREE QUOTE
                  </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <Image
                  src="/images/concrete-removal.jpg"
                  alt="Construction Debris Removal Richmond"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-[#dc2626] mb-3">Construction Debris</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4">
                    Construction debris removal for contractors and homeowners. We handle all types of construction materials and heavy debris. 
                    Richmond's booming construction market means lots of renovation projects. Whether you're a contractor working on 
                    downtown office buildings or a homeowner renovating a historic Fan District home, we can handle your construction debris.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Construction materials
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Concrete removal
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Heavy debris handling
                    </li>
                  </ul>
                  <Link href="/contact">
                  <Button className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-black uppercase tracking-wide italic">
                    FREE QUOTE
                  </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <Image
                  src="/images/piano-removal.jpg"
                  alt="Appliance Removal Richmond"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-[#dc2626] mb-3">Appliance Removal</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4">
                    Safe appliance removal including refrigerators, washers, dryers, and more. We handle all appliance types with care. 
                    Richmond's diverse housing stock means appliances of all sizes and ages. From modern condos in Shockoe Bottom to 
                    historic homes in Church Hill, we safely remove and properly dispose of all appliance types.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      All appliance types
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Safe disconnection
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Responsible disposal
                    </li>
                  </ul>
                  <Link href="/contact">
                  <Button className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-black uppercase tracking-wide italic">
                    FREE QUOTE
                  </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <Image
                  src="/images/residential-junk.jpg"
                  alt="Estate Cleanout Richmond"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-[#dc2626] mb-3">Estate Cleanout</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4">
                    Complete estate cleanout services for homes and properties. We handle sensitive situations with care and professionalism. 
                    Richmond's historic neighborhoods are filled with homes that have been in families for generations. When the time comes 
                    for estate cleanouts, our compassionate team helps families through this difficult process while preserving valuable items.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Full property cleanout
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Sensitive handling
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Family consultation
                    </li>
                  </ul>
                  <Link href="/contact">
                  <Button className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-black uppercase tracking-wide italic">
                    FREE QUOTE
                  </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <Image
                  src="/images/yard-waste.jpg"
                  alt="Yard Waste Removal Richmond"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-[#dc2626] mb-3">Yard Waste Removal</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4">
                    Yard waste and debris removal for residential properties. We handle all types of yard debris and seasonal cleanup. 
                    Richmond's mature trees and historic landscapes create beautiful neighborhoods, but they also generate lots of yard waste. 
                    From fallen branches in The Fan to seasonal cleanup in Westover Hills, we help keep Richmond's neighborhoods clean and beautiful.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Yard debris cleanup
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Branches and logs
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Seasonal cleanup
                      </li>
                  </ul>
                  <Link href="/contact">
                  <Button className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-black uppercase tracking-wide italic">
                    FREE QUOTE
                  </Button>
                  </Link>
                </div>
                </CardContent>
              </Card>
          </div>
        </div>
      </section>

      {/* Richmond Neighborhoods */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-12 uppercase tracking-tight">
            <span className="text-[#1e40af]">WE SERVE ALL</span>{" "}
            <span className="text-[#dc2626]">RICHMOND</span>{" "}
            <span className="text-[#1e40af]">NEIGHBORHOODS</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {neighborhoods.map((neighborhood, index) => (
              <Card key={index} className="bg-white text-center p-4 hover:shadow-md transition-shadow">
                <CardContent className="p-2">
                  <h3 className="font-semibold text-[#1e40af]">{neighborhood}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 p-4 md:p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold text-[#1e40af] mb-4 text-center">Richmond Neighborhoods We Serve</h3>
            <p className="text-sm md:text-base text-gray-600 mb-4 text-center">
              Junk Goats proudly serves all Richmond neighborhoods with our professional junk removal services. 
              Our local Richmond team understands the unique characteristics of each area and provides tailored 
              services to meet the specific needs of residents and businesses throughout the city.
            </p>
            <p className="text-sm md:text-base text-gray-600 mb-4">
              <strong>The Fan District:</strong> Known for its historic row houses and narrow streets, we use specialized 
              equipment to navigate these unique spaces for furniture removal and estate cleanouts.
            </p>
            <p className="text-sm md:text-base text-gray-600 mb-4">
              <strong>Carytown:</strong> This vibrant shopping district often needs commercial junk removal services. 
              We help local businesses maintain clean storefronts and remove old fixtures and equipment.
            </p>
            <p className="text-sm md:text-base text-gray-600 mb-4">
              <strong>Church Hill:</strong> Richmond's oldest neighborhood requires careful handling of historic properties. 
              Our team respects the architectural integrity while providing efficient junk removal services.
            </p>
            <p className="text-center mt-6 text-sm md:text-base text-gray-600">
            Don't see your neighborhood? We serve all of Richmond and surrounding areas. 
            <Link href="#contact" className="text-[#1e40af] font-semibold ml-1">Contact us to confirm service in your area →</Link>
          </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-black text-center mb-12 uppercase tracking-tight">
            <span className="text-[#1e40af]">READY TO</span>{" "}
            <span className="text-[#dc2626]">CLEAN OUT</span>{" "}
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
                        "Years of experience serving Richmond area",
                        "Professional-grade equipment",
                        "Eco-friendly disposal methods",
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
                      We proudly provide junk removal services throughout Richmond and surrounding areas including:
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