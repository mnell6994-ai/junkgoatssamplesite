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
  title: "Construction Debris Removal Richmond VA | Professional Construction Debris Removal",
  description: "Professional construction debris removal services in Richmond, VA. Construction materials, concrete removal, heavy debris handling, contractor discounts. Licensed and insured.",
  keywords: "construction debris removal, construction debris Richmond VA, concrete removal, construction materials removal, contractor debris removal, heavy debris removal"
};

export default function ConstructionDebrisPage() {
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
          alt="Professional construction debris removal services in Richmond Virginia"
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
                CONSTRUCTION DEBRIS
              </span>
              <br />
              REMOVAL
              </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto font-semibold">
                Professional construction debris removal services in Richmond, VA. We handle construction materials, concrete, heavy debris, and provide contractor discounts for ongoing projects.
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

      {/* Why Choose Our Construction Debris Removal Services */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-12 uppercase tracking-tight">
            <span className="text-[#1e40af]">WHY CHOOSE OUR</span>{" "}
            <span className="text-[#dc2626]">CONSTRUCTION DEBRIS</span>{" "}
            <span className="text-[#1e40af]">REMOVAL SERVICES</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1e40af] mb-6">
                Professional Construction Debris Removal in Richmond, VA
              </h3>
              <p className="text-base md:text-lg text-gray-600 mb-6">
                At Junk Goats, we specialize in professional construction debris removal services for contractors, homeowners, and commercial properties throughout the Richmond area. Our experienced team understands the unique challenges of construction debris removal and provides efficient, cost-effective solutions.
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-6">
                Whether you're a contractor managing multiple projects or a homeowner tackling a renovation, our construction debris removal services are designed to keep your job site clean and your project on schedule. We handle all types of construction materials, from concrete and drywall to lumber and roofing materials.
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-6">
                Our Richmond construction debris removal team is equipped with specialized equipment and vehicles to handle heavy debris safely and efficiently. We offer flexible scheduling, competitive pricing, and contractor discounts for ongoing projects.
              </p>
              <ul className="space-y-3">
                {[
                  "Heavy debris handling equipment",
                  "Contractor discounts available", 
                  "Flexible scheduling options",
                  "All construction materials accepted",
                  "Licensed and fully insured"
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
                src="/images/concrete-removal.jpg" 
                alt="Professional construction debris removal team handling heavy materials"
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
                <span className="text-[#dc2626]">CONSTRUCTION DEBRIS</span>{" "}
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

      {/* Types of Construction Debris We Remove */}
      <section className="py-16 bg-[#f3f4f6]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-12 uppercase tracking-tight">
            <span className="text-[#1e40af]">TYPES OF</span>{" "}
            <span className="text-[#dc2626]">CONSTRUCTION DEBRIS</span>{" "}
            <span className="text-[#1e40af]">WE REMOVE</span>
          </h2>
          
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-[#1e40af] mb-6 text-center">Concrete and Masonry Materials</h3>
            <p className="text-lg text-gray-600 mb-6 text-center max-w-4xl mx-auto">
              Our construction debris removal services include specialized handling of concrete and masonry materials. We have the equipment and expertise to safely remove and dispose of concrete slabs, bricks, blocks, and other masonry debris.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-[#dc2626] mb-4">Concrete Removal</h4>
                <p className="text-gray-600 mb-4">
                  Professional concrete removal including driveways, sidewalks, patios, and foundation debris. We handle concrete slabs of all sizes and provide proper disposal.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Concrete slab removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Driveway and sidewalk debris
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Foundation and footing debris
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-[#dc2626] mb-4">Masonry Materials</h4>
                <p className="text-gray-600 mb-4">
                  Safe removal of bricks, blocks, stone, and other masonry materials from construction and demolition projects.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Brick and block removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Stone and tile debris
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Mortar and grout removal
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-3xl font-bold text-[#1e40af] mb-6 text-center">Building Materials and Structural Debris</h3>
            <p className="text-lg text-gray-600 mb-6 text-center max-w-4xl mx-auto">
              Our construction debris removal services cover all types of building materials and structural debris from construction, renovation, and demolition projects. We handle everything from lumber and drywall to roofing materials and insulation.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-[#dc2626] mb-4">Lumber and Wood Materials</h4>
                <p className="text-gray-600 mb-4">
                  Complete removal of lumber, plywood, engineered wood products, and other wood materials from construction projects.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Lumber and framing materials
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Plywood and engineered wood
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Trim and molding debris
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-[#dc2626] mb-4">Drywall and Insulation</h4>
                <p className="text-gray-600 mb-4">
                  Safe removal of drywall, insulation, and other interior building materials with proper handling to minimize dust and debris.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Drywall and sheetrock removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Insulation and fiberglass removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Ceiling tile and acoustic materials
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-3xl font-bold text-[#1e40af] mb-6 text-center">Roofing and Exterior Materials</h3>
            <p className="text-lg text-gray-600 mb-6 text-center max-w-4xl mx-auto">
              Our construction debris removal services include specialized handling of roofing materials, siding, and other exterior building materials. We understand the unique challenges of removing these materials safely and efficiently.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-[#dc2626] mb-4">Roofing Materials</h4>
                <p className="text-gray-600 mb-4">
                  Professional removal of roofing materials including shingles, metal roofing, tiles, and other roofing debris from roof replacement and repair projects.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Asphalt shingle removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Metal roofing debris
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Tile and slate removal
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-[#dc2626] mb-4">Siding and Exterior Materials</h4>
                <p className="text-gray-600 mb-4">
                  Safe removal of siding, trim, gutters, and other exterior building materials with proper handling and disposal.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Vinyl and aluminum siding
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Gutters and downspouts
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Exterior trim and fascia
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-[#1e40af] mb-6">Specialized Construction Debris Services</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
              Our construction debris removal services extend beyond standard materials to include specialized debris that requires expert handling and disposal methods.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white text-center p-6">
                <CardContent className="p-4">
                  <h4 className="text-xl font-bold text-[#dc2626] mb-3">Heavy Debris</h4>
                  <p className="text-gray-600">Specialized equipment and handling for heavy construction debris and materials</p>
                </CardContent>
              </Card>
              <Card className="bg-white text-center p-6">
                <CardContent className="p-4">
                  <h4 className="text-xl font-bold text-[#dc2626] mb-3">Hazardous Materials</h4>
                  <p className="text-gray-600">Proper handling and disposal of hazardous construction materials and debris</p>
                </CardContent>
              </Card>
              <Card className="bg-white text-center p-6">
                <CardContent className="p-4">
                  <h4 className="text-xl font-bold text-[#dc2626] mb-3">Large Scale Projects</h4>
                  <p className="text-gray-600">Comprehensive debris removal for large construction and demolition projects</p>
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
            <span className="text-[#1e40af]">CONSTRUCTION DEBRIS</span>{" "}
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
            <h3 className="text-2xl font-bold text-[#1e40af] mb-4 text-center">Richmond Area Construction Debris Removal Coverage</h3>
            <p className="text-gray-600 mb-4 text-center">
              Junk Goats provides comprehensive construction debris removal services throughout the greater Richmond area. Our service coverage extends to all major communities, ensuring contractors and homeowners have access to professional debris removal services.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Richmond City:</strong> We serve all neighborhoods within Richmond city limits, including historic areas with unique construction challenges. Our team is experienced in handling construction debris removal in all types of Richmond properties.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Henrico County:</strong> Our construction debris removal services cover all Henrico County areas including Glen Allen, Short Pump, Tuckahoe, and the West End. We understand the diverse construction needs of Henrico County projects.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Chesterfield County:</strong> We provide construction debris removal services to Chesterfield County communities including Chester, Moseley, Midlothian, and Bon Air. Our team is familiar with the area's regulations and can provide efficient, compliant service.
            </p>
            <p className="text-center mt-6 text-gray-600">
              Need construction debris removal in another area? We travel throughout the Richmond metro area for larger projects. 
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
            <span className="text-[#dc2626]">REMOVE YOUR CONSTRUCTION DEBRIS?</span>
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
                        "Heavy debris handling equipment",
                        "Contractor discounts available",
                        "Flexible scheduling options",
                        "All construction materials accepted",
                        "Licensed and fully insured"
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
                      We proudly provide construction debris removal services throughout the Richmond metro area including:
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
