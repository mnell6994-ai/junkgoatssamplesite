import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, MapPin, Phone, Mail, Clock, Star, Shield, Award } from "lucide-react";
import HeaderWorking from "@/components/header-working";
import Footer from "@/components/footer";
import ServiceSchema from "@/components/service-schema";
import BreadcrumbSchema from "@/components/breadcrumb-schema";
import dynamic from "next/dynamic";

// Lazy load components
const GoogleReviewsCarousel = dynamic(() => import("@/components/google-reviews-carousel"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>
});

const ContactFormSimple = dynamic(() => import("@/components/contact-form-simple"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>
});

export const metadata = {
  title: "Yard Waste Removal Service Richmond VA | Professional Yard Waste Removal",
  description: "Professional yard waste removal services in Richmond, VA. Tree branches, leaves, grass clippings, brush removal, and yard cleanup. Eco-friendly disposal and composting options.",
  keywords: "yard waste removal service, yard waste removal Richmond VA, tree branch removal, leaf removal, brush removal, yard cleanup, organic waste disposal"
};

export default function YardWasteRemovalPage() {
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
      <ServiceSchema
        name="Yard Waste Removal"
        description="Professional yard waste removal services in Richmond, VA. Tree branches, leaves, grass clippings, brush removal, and yard cleanup. Eco-friendly disposal and composting options."
        url="/services/yard-waste-removal"
        price="Starting at $100"
      />
      <BreadcrumbSchema items={[
        { name: "Services", url: "/services" },
        { name: "Yard Waste Removal", url: "/services/yard-waste-removal" }
      ]} />
      <HeaderWorking />

      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        <Image
          src="/images/junk-removal-richmond-va01.jpg"
          alt="Professional yard waste removal services in Richmond Virginia"
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
                YARD WASTE REMOVAL
              </span>
              <br />
              SERVICES
              </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto font-semibold">
                Professional yard waste removal services in Richmond, VA. Tree branches, leaves, grass clippings, brush removal, and complete yard cleanup with eco-friendly disposal options.
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

      {/* Why Choose Our Yard Waste Removal Services */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-12 uppercase tracking-tight">
            <span className="text-[#1e40af]">WHY CHOOSE OUR</span>{" "}
            <span className="text-[#dc2626]">YARD WASTE REMOVAL</span>{" "}
            <span className="text-[#1e40af]">SERVICES</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1e40af] mb-6">
                Professional Yard Waste Removal in Richmond, VA
              </h3>
              <p className="text-base md:text-lg text-gray-600 mb-6">
                At Junk Goats, we specialize in comprehensive yard waste removal services throughout the Richmond area. Our experienced team understands that yard waste can accumulate quickly and become overwhelming, especially after storms, seasonal changes, or landscaping projects.
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-6">
                Whether you're dealing with fallen branches from a storm, seasonal leaf cleanup, or ongoing yard maintenance, our yard waste removal services are designed to keep your property clean and well-maintained. We handle all types of organic yard waste including branches, leaves, grass clippings, and brush.
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-6">
                Our Richmond yard waste removal team is equipped with the proper tools and equipment to handle yard waste efficiently and safely. We provide eco-friendly disposal options including composting and mulching whenever possible, helping to reduce waste and benefit the environment.
              </p>
              <ul className="space-y-3">
                {[
                  "Eco-friendly disposal and composting",
                  "Storm damage yard cleanup", 
                  "Seasonal yard waste removal",
                  "Brush and branch removal",
                  "Complete yard cleanup services"
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
                src="/images/yard-waste.jpg" 
                alt="Professional yard waste removal team handling organic yard waste"
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
                <span className="text-[#dc2626]">YARD WASTE REMOVAL</span>{" "}
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

      {/* Types of Yard Waste We Remove */}
      <section className="py-16 bg-[#f3f4f6]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-12 uppercase tracking-tight">
            <span className="text-[#1e40af]">TYPES OF</span>{" "}
            <span className="text-[#dc2626]">YARD WASTE</span>{" "}
            <span className="text-[#1e40af]">WE REMOVE</span>
          </h2>
          
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-[#1e40af] mb-6 text-center">Tree Branches and Brush</h3>
            <p className="text-lg text-gray-600 mb-6 text-center max-w-4xl mx-auto">
              Our yard waste removal services include comprehensive handling of tree branches, brush, and woody debris. We understand that tree branches can be heavy, awkward to handle, and require special equipment for safe removal and disposal.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-[#dc2626] mb-4">Tree Branch Removal</h4>
                <p className="text-gray-600 mb-4">
                  Safe removal of tree branches including fallen branches, trimmed branches, and storm-damaged branches. We handle branches of all sizes from small twigs to large limbs.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Fallen branch removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Storm damage cleanup
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Tree trimming debris removal
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-[#dc2626] mb-4">Brush and Shrub Removal</h4>
                <p className="text-gray-600 mb-4">
                  Complete removal of brush, shrubs, and woody vegetation including overgrown areas, landscaping debris, and invasive plant removal.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Overgrown brush removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Shrub and hedge removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Invasive plant removal
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-3xl font-bold text-[#1e40af] mb-6 text-center">Leaves and Organic Debris</h3>
            <p className="text-lg text-gray-600 mb-6 text-center max-w-4xl mx-auto">
              Our yard waste removal services include seasonal cleanup of leaves, grass clippings, and other organic debris. We provide efficient removal and eco-friendly disposal options for all types of organic yard waste.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-[#dc2626] mb-4">Leaf Removal</h4>
                <p className="text-gray-600 mb-4">
                  Comprehensive leaf removal services including seasonal leaf cleanup, leaf pile removal, and ongoing leaf maintenance throughout the fall season.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Seasonal leaf cleanup
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Leaf pile removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Ongoing leaf maintenance
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-[#dc2626] mb-4">Grass Clippings and Organic Debris</h4>
                <p className="text-gray-600 mb-4">
                  Safe removal of grass clippings, plant trimmings, and other organic debris from landscaping and lawn maintenance activities.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Grass clippings removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Plant trimmings removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Organic debris cleanup
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-3xl font-bold text-[#1e40af] mb-6 text-center">Specialized Yard Waste Services</h3>
            <p className="text-lg text-gray-600 mb-6 text-center max-w-4xl mx-auto">
              Our yard waste removal services extend beyond standard yard waste to include specialized services for unique situations and larger cleanup projects.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-[#dc2626] mb-4">Storm Damage Cleanup</h4>
                <p className="text-gray-600 mb-4">
                  Emergency yard waste removal services for storm damage including fallen trees, damaged branches, and debris from severe weather events.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Storm damage assessment
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Fallen tree removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Emergency cleanup services
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-[#dc2626] mb-4">Landscaping Project Cleanup</h4>
                <p className="text-gray-600 mb-4">
                  Complete yard waste removal for landscaping projects including garden renovations, landscape installations, and outdoor construction projects.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Garden renovation cleanup
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Landscape installation cleanup
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Construction debris removal
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-[#1e40af] mb-6">Eco-Friendly Yard Waste Disposal</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
              Our yard waste removal services prioritize environmental responsibility through composting, mulching, and other eco-friendly disposal methods that benefit the environment and reduce waste.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white text-center p-6">
                <CardContent className="p-4">
                  <h4 className="text-xl font-bold text-[#dc2626] mb-3">Composting Services</h4>
                  <p className="text-gray-600">Organic yard waste is composted to create nutrient-rich soil amendments</p>
                </CardContent>
              </Card>
              <Card className="bg-white text-center p-6">
                <CardContent className="p-4">
                  <h4 className="text-xl font-bold text-[#dc2626] mb-3">Mulching Programs</h4>
                  <p className="text-gray-600">Branches and brush are processed into mulch for landscaping use</p>
                </CardContent>
              </Card>
              <Card className="bg-white text-center p-6">
                <CardContent className="p-4">
                  <h4 className="text-xl font-bold text-[#dc2626] mb-3">Green Disposal</h4>
                  <p className="text-gray-600">All yard waste is disposed of using environmentally responsible methods</p>
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
            <span className="text-[#1e40af]">YARD WASTE REMOVAL</span>{" "}
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
            <h3 className="text-2xl font-bold text-[#1e40af] mb-4 text-center">Richmond Area Yard Waste Removal Coverage</h3>
            <p className="text-gray-600 mb-4 text-center">
              Junk Goats provides comprehensive yard waste removal services throughout the greater Richmond area. Our service coverage extends to all major communities, ensuring residents have access to professional yard waste removal services year-round.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Richmond City:</strong> We serve all neighborhoods within Richmond city limits, including historic areas with mature trees and unique landscaping challenges. Our team is experienced in handling yard waste removal in all types of Richmond properties.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Henrico County:</strong> Our yard waste removal services cover all Henrico County areas including Glen Allen, Short Pump, Tuckahoe, and the West End. We understand the diverse landscaping needs of Henrico County residents.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Chesterfield County:</strong> We provide yard waste removal services to Chesterfield County communities including Chester, Moseley, Midlothian, and Bon Air. Our team is familiar with the area's regulations and can provide efficient, compliant service.
            </p>
            <p className="text-center mt-6 text-gray-600">
              Need yard waste removal in another area? We travel throughout the Richmond metro area for larger projects. 
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
            <span className="text-[#dc2626]">REMOVE YOUR YARD WASTE?</span>
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
                        "Eco-friendly disposal and composting",
                        "Storm damage yard cleanup",
                        "Seasonal yard waste removal",
                        "Brush and branch removal",
                        "Complete yard cleanup services"
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
                      We proudly provide yard waste removal services throughout the Richmond metro area including:
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
