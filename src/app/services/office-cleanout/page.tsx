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
  title: "Office Cleanout Service Richmond VA | Professional Office Cleanout Services",
  description: "Professional office cleanout services in Richmond, VA. Complete office cleanouts, business relocation, office furniture removal, equipment disposal. Licensed and insured.",
  keywords: "office cleanout service, office cleanout Richmond VA, office cleanout company, office cleanout services, business relocation, office furniture removal"
};

export default function OfficeCleanoutPage() {
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
        name="Office Cleanout"
        description="Professional office cleanout services in Richmond, VA. Complete office cleanouts, business relocation, office furniture removal, equipment disposal. Licensed and insured."
        url="/services/office-cleanout"
        price="Starting at $200"
      />
      <BreadcrumbSchema items={[
        { name: "Services", url: "/services" },
        { name: "Office Cleanout", url: "/services/office-cleanout" }
      ]} />
      <HeaderWorking />

      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        <Image
          src="/images/junk-removal-richmond-va01.jpg"
          alt="Professional office cleanout services in Richmond Virginia"
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
                OFFICE CLEANOUT
              </span>
              <br />
              SERVICES
              </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto font-semibold">
                Professional office cleanout services in Richmond, VA. We provide efficient, thorough office cleanouts with minimal business disruption, furniture removal, equipment disposal, and complete space preparation.
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

      {/* Why Choose Our Office Cleanout Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-black text-center mb-12 uppercase tracking-tight">
            <span className="text-[#1e40af]">WHY CHOOSE OUR</span>{" "}
            <span className="text-[#dc2626]">OFFICE CLEANOUT</span>{" "}
            <span className="text-[#1e40af]">SERVICES</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-[#1e40af] mb-6">
                Professional Office Cleanout in Richmond, VA
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                At Junk Goats, we understand that office cleanouts require careful planning and execution to minimize business disruption. Our office cleanout services are designed to be efficient, professional, and thorough, ensuring your office space is completely cleared and ready for its next use.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our experienced office cleanout team works around your business schedule, offering flexible timing options including evenings and weekends. We handle everything from office furniture and equipment to personal belongings and documents, ensuring a complete and professional cleanout process.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                With our comprehensive office cleanout services, you can trust that every aspect of your office space will be handled professionally, from initial assessment to final cleanup, leaving your space completely ready for new tenants or business operations.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-white text-center p-6">
                <CardContent className="p-6">
                  <div className="bg-[#dc2626] text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e40af] mb-4">Professional Service</h3>
                  <p className="text-gray-600">
                    Our experienced team handles office cleanouts with professionalism and efficiency, ensuring minimal disruption to your business operations.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white text-center p-6">
                <CardContent className="p-6">
                  <div className="bg-[#dc2626] text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e40af] mb-4">Flexible Scheduling</h3>
                  <p className="text-gray-600">
                    We work around your business schedule, offering evening and weekend appointments to minimize impact on your daily operations.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white text-center p-6">
                <CardContent className="p-6">
                  <div className="bg-[#dc2626] text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e40af] mb-4">Complete Cleanup</h3>
                  <p className="text-gray-600">
                    We handle everything from large office furniture and equipment to small office supplies, leaving your space completely clean and ready for use.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white text-center p-6">
                <CardContent className="p-6">
                  <div className="bg-[#dc2626] text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e40af] mb-4">Responsible Disposal</h3>
                  <p className="text-gray-600">
                    All office items are disposed of responsibly, with recycling and proper waste management practices followed throughout the cleanout process.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Cleanout Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black text-center mb-12 uppercase tracking-tight">
              <span className="text-[#1e40af]">OUR</span>{" "}
              <span className="text-[#dc2626]">OFFICE CLEANOUT</span>{" "}
              <span className="text-[#1e40af]">SERVICES</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              We provide comprehensive office cleanout services for all types of businesses and office spaces in the Richmond area.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-[#dc2626] mb-4">Office Furniture Removal</h4>
              <p className="text-gray-600 mb-4">
                Complete removal of office furniture including desks, chairs, filing cabinets, conference tables, and other office furniture and equipment.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500" />
                  Desk and workstation removal
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500" />
                  Office chair disposal
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500" />
                  Filing cabinet removal
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-[#dc2626] mb-4">Office Equipment Removal</h4>
              <p className="text-gray-600 mb-4">
                Safe removal of office equipment including computers, printers, copiers, and other office electronics and equipment.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500" />
                  Computer and monitor disposal
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500" />
                  Printer and copier removal
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500" />
                  Office electronics disposal
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-[#dc2626] mb-4">Conference Room Cleanouts</h4>
              <p className="text-gray-600 mb-4">
                Complete conference room cleanouts including presentation equipment, conference tables, chairs, and other meeting room furniture and equipment.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500" />
                  Conference table removal
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500" />
                  Presentation equipment disposal
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500" />
                  Meeting room furniture removal
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-[#dc2626] mb-4">Break Room Cleanouts</h4>
              <p className="text-gray-600 mb-4">
                Complete break room cleanouts including kitchen appliances, tables, chairs, and other break room furniture and equipment.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500" />
                  Kitchen appliance removal
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500" />
                  Break room furniture disposal
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500" />
                  Office kitchen cleanup
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Office Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#1e40af] mb-6 text-center">
              Specialized Office Cleanout Services
            </h3>
            <p className="text-lg text-gray-600 mb-6 text-center max-w-4xl mx-auto">
              Our office cleanout services extend beyond standard office furniture and equipment to include specialized services for unique office situations and larger cleanup projects.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-[#dc2626] mb-4">Business Relocation Cleanouts</h4>
                <p className="text-gray-600 mb-4">
                  Complete business relocation cleanouts including office equipment, furniture, and other business assets that need to be cleared from the old location.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Office equipment removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Business furniture disposal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Complete space preparation
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-[#dc2626] mb-4">Tenant Move-Out Cleanouts</h4>
                <p className="text-gray-600 mb-4">
                  Complete tenant move-out cleanouts including office furniture, equipment, and any items left behind by previous tenants.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Tenant furniture removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Office equipment disposal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Property preparation for new tenants
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Cleanout Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#1e40af] mb-6">
              Office Cleanout Process
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
              Our office cleanout process is designed to be efficient, professional, and minimally disruptive to your business operations. We handle every step of the cleanout process to ensure your office space is completely cleared and ready for its next use.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white text-center p-6">
                <CardContent className="p-4">
                  <h4 className="text-xl font-bold text-[#dc2626] mb-3">Assessment & Planning</h4>
                  <p className="text-gray-600">
                    We assess the office space and create a detailed plan for the cleanout process
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white text-center p-6">
                <CardContent className="p-4">
                  <h4 className="text-xl font-bold text-[#dc2626] mb-3">Efficient Removal</h4>
                  <p className="text-gray-600">
                    Our team efficiently removes all items, furniture, and equipment from the office space
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white text-center p-6">
                <CardContent className="p-4">
                  <h4 className="text-xl font-bold text-[#dc2626] mb-3">Complete Cleanup</h4>
                  <p className="text-gray-600">
                    We ensure the space is completely clean and ready for its next office use
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Card className="bg-white text-center p-6">
            <CardContent className="p-6">
              <h4 className="text-xl font-bold text-[#1e40af] mb-4">Service Areas</h4>
              <p className="text-gray-600 mb-3">
                We proudly provide office cleanout services throughout the Richmond metro area including:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#dc2626]" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-black text-center mb-12 uppercase tracking-tight">
            <span className="text-[#1e40af]">READY TO</span> <span className="text-[#dc2626]">CLEAN OUT YOUR OFFICE?</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ContactFormSimple />
              </div>
              <div className="space-y-6">
                <Card className="bg-white text-center p-6">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-[#1e40af] mb-4">Service Areas</h4>
                    <p className="text-gray-600 mb-3">
                      We proudly provide office cleanout services throughout the Richmond metro area including:
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {serviceAreas.map((area, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-[#dc2626]" />
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
