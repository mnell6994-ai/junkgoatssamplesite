import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, MapPin, Phone, Mail, Clock, Star, Shield, Award } from "lucide-react";
import HeaderWorking from "@/components/header-working";
import Footer from "@/components/footer";
import ServiceSchema from "@/components/service-schema";
import BreadcrumbSchema from "@/components/breadcrumb-schema";
import RelatedServices from "@/components/related-services";
import dynamic from "next/dynamic";

// Lazy load components
const GoogleReviewsCarousel = dynamic(() => import("@/components/google-reviews-carousel"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>
});

const ContactFormSimple = dynamic(() => import("@/components/contact-form-simple"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>
});

export const metadata = {
  title: "Appliance Removal Richmond VA | Professional Appliance Disposal",
  description: "Professional appliance removal services in Richmond, VA. Safe removal of refrigerators, washers, dryers, dishwashers, and all major appliances. Same-day service, eco-friendly disposal.",
  keywords: "appliance removal service, appliance removal Richmond VA, refrigerator removal, washer dryer removal, dishwasher removal, appliance disposal",
  alternates: {
    canonical: 'https://junkgoatsrichmond.com/services/appliance-removal',
    languages: {
      'en-US': 'https://junkgoatsrichmond.com/services/appliance-removal',
      'en': 'https://junkgoatsrichmond.com/services/appliance-removal',
      'x-default': 'https://junkgoatsrichmond.com/services/appliance-removal',
    },
  },
};

export default function ApplianceRemovalPage() {
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
        name="Appliance Removal"
        description="Professional appliance removal services in Richmond, VA. Safe removal of refrigerators, washers, dryers, dishwashers, and all major appliances. Same-day service, eco-friendly disposal."
        url="/services/appliance-removal"
        price="Starting at $75"
      />
      <BreadcrumbSchema items={[
        { name: "Services", url: "/services" },
        { name: "Appliance Removal", url: "/services/appliance-removal" }
      ]} />
      <HeaderWorking />

      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        <Image
          src="/images/junk-removal-richmond-va01.jpg"
          alt="Professional appliance removal services in Richmond Virginia"
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
                APPLIANCE REMOVAL
              </span>
              <br />
              SERVICES
              </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto font-semibold">
                Professional appliance removal services in Richmond, VA. Safe removal of refrigerators, washers, dryers, dishwashers, and all major appliances with eco-friendly disposal.
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

      {/* Why Choose Our Appliance Removal Services */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-12 uppercase tracking-tight">
            <span className="text-[#1e40af]">WHY CHOOSE OUR</span>{" "}
            <span className="text-[#dc2626]">APPLIANCE REMOVAL</span>{" "}
            <span className="text-[#1e40af]">SERVICES</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1e40af] mb-6">
                Professional Appliance Removal in Richmond, VA
              </h3>
              <p className="text-base md:text-lg text-gray-600 mb-6">
                At Junk Goats, we specialize in safe and efficient appliance removal services throughout the Richmond area. Our experienced team understands that appliances can be heavy, awkward to move, and require special handling to prevent damage to your property and the appliance itself.
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-6">
                Whether you're replacing old appliances, moving to a new home, or simply need to dispose of non-working appliances, our appliance removal services are designed to make the process as easy as possible. We handle all types of appliances including refrigerators, washers, dryers, dishwashers, ovens, and more. We also provide <Link href="/services/furniture-removal" className="text-[#1e40af] font-semibold hover:underline">furniture removal</Link> and <Link href="/services/junk-removal" className="text-[#1e40af] font-semibold hover:underline">general junk removal services</Link>.
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-6">
                Our Richmond appliance removal team is equipped with the proper tools and techniques to safely remove appliances from any location, including tight spaces, upper floors, and difficult-to-access areas. We ensure your property is protected during the removal process.
              </p>
              <ul className="space-y-3">
                {[
                  "Safe removal of all appliance types",
                  "Professional handling techniques", 
                  "Eco-friendly disposal methods",
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
                src="/images/junk-removal-1.jpg" 
                alt="Professional appliance removal team safely handling large appliances"
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
                <span className="text-[#dc2626]">APPLIANCE REMOVAL</span>{" "}
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

      {/* Types of Appliances We Remove */}
      <section className="py-16 bg-[#f3f4f6]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-12 uppercase tracking-tight">
            <span className="text-[#1e40af]">TYPES OF</span>{" "}
            <span className="text-[#dc2626]">APPLIANCES</span>{" "}
            <span className="text-[#1e40af]">WE REMOVE</span>
          </h2>
          
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-[#1e40af] mb-6 text-center">Kitchen Appliances</h3>
            <p className="text-lg text-gray-600 mb-6 text-center max-w-4xl mx-auto">
              Our appliance removal services cover all types of kitchen appliances, from large refrigerators to built-in dishwashers. We understand that kitchen appliances are often the heaviest and most difficult to move, requiring special equipment and techniques.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-[#dc2626] mb-4">Refrigerators & Freezers</h4>
                <p className="text-gray-600 mb-4">
                  Safe removal of refrigerators, freezers, and other cooling appliances. We handle all sizes including side-by-side, French door, and commercial refrigerators.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Full-size refrigerator removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Compact and mini refrigerator removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Standalone freezer removal
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-[#dc2626] mb-4">Cooking Appliances</h4>
                <p className="text-gray-600 mb-4">
                  Professional removal of ovens, ranges, cooktops, and other cooking appliances including built-in and freestanding units.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Oven and range removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Cooktop and stovetop removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Microwave and built-in oven removal
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-3xl font-bold text-[#1e40af] mb-6 text-center">Laundry Appliances</h3>
            <p className="text-lg text-gray-600 mb-6 text-center max-w-4xl mx-auto">
              Our appliance removal services include specialized handling of laundry appliances including washers, dryers, and laundry centers. These heavy appliances require careful handling to prevent damage to your floors and the appliances themselves.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-[#dc2626] mb-4">Washers & Dryers</h4>
                <p className="text-gray-600 mb-4">
                  Safe removal of washing machines and dryers including top-load, front-load, and stackable units. We handle gas and electric dryers.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Front-load and top-load washer removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Electric and gas dryer removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Stackable washer and dryer removal
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-[#dc2626] mb-4">Laundry Centers</h4>
                <p className="text-gray-600 mb-4">
                  Complete removal of laundry centers, all-in-one washer-dryer units, and other specialized laundry appliances.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    All-in-one washer-dryer removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Laundry center removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Compact laundry appliance removal
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-3xl font-bold text-[#1e40af] mb-6 text-center">Specialized Appliances</h3>
            <p className="text-lg text-gray-600 mb-6 text-center max-w-4xl mx-auto">
              Our appliance removal services extend beyond standard kitchen and laundry appliances to include specialized appliances that require expert handling and disposal methods.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-[#dc2626] mb-4">Built-in Appliances</h4>
                <p className="text-gray-600 mb-4">
                  Professional removal of built-in appliances including dishwashers, garbage disposals, and built-in microwaves with proper disconnection.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Built-in dishwasher removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Garbage disposal removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Built-in microwave removal
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-[#dc2626] mb-4">Commercial Appliances</h4>
                <p className="text-gray-600 mb-4">
                  Safe removal of commercial appliances including restaurant equipment, office appliances, and other specialized commercial units.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Commercial refrigerator removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Restaurant equipment removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Office appliance removal
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-[#1e40af] mb-6">Appliance Removal Process</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
              Our appliance removal process is designed to be safe, efficient, and environmentally responsible. We handle every step of the removal process to ensure your appliances are disposed of properly and your property is protected.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white text-center p-6">
                <CardContent className="p-4">
                  <h4 className="text-xl font-bold text-[#dc2626] mb-3">Safe Disconnection</h4>
                  <p className="text-gray-600">Professional disconnection of gas, water, and electrical connections</p>
                </CardContent>
              </Card>
              <Card className="bg-white text-center p-6">
                <CardContent className="p-4">
                  <h4 className="text-xl font-bold text-[#dc2626] mb-3">Careful Removal</h4>
                  <p className="text-gray-600">Safe removal using proper equipment and techniques to protect your property</p>
                </CardContent>
              </Card>
              <Card className="bg-white text-center p-6">
                <CardContent className="p-4">
                  <h4 className="text-xl font-bold text-[#dc2626] mb-3">Eco-Friendly Disposal</h4>
                  <p className="text-gray-600">Responsible disposal with recycling and proper waste management</p>
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
            <span className="text-[#1e40af]">APPLIANCE REMOVAL</span>{" "}
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
            <h3 className="text-2xl font-bold text-[#1e40af] mb-4 text-center">Richmond Area Appliance Removal Coverage</h3>
            <p className="text-gray-600 mb-4 text-center">
              Junk Goats provides comprehensive appliance removal services throughout the greater Richmond area. Our service coverage extends to all major communities, ensuring residents and businesses have access to professional appliance removal services.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Richmond City:</strong> We serve all neighborhoods within Richmond city limits, including historic areas with unique access challenges. Our team is experienced in handling appliance removal in all types of Richmond properties, from historic homes to modern apartments.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Henrico County:</strong> Our appliance removal services cover all Henrico County areas including Glen Allen, Short Pump, Tuckahoe, and the West End. We understand the diverse needs of Henrico County residents and provide tailored solutions.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Chesterfield County:</strong> We provide appliance removal services to Chesterfield County communities including Chester, Moseley, Midlothian, and Bon Air. Our team is familiar with the area's regulations and can provide efficient, compliant service.
            </p>
            <p className="text-center mt-6 text-gray-600">
              Need appliance removal in another area? We travel throughout the Richmond metro area for larger jobs. 
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
            <span className="text-[#dc2626]">REMOVE YOUR APPLIANCES?</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-不比">
              <div>
                <ContactFormSimple />
              </div>
              
              <div className="space-y-6">
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-[#1e40af] mb-4">Why Choose Junk Goats?</h4>
                    <ul className="space-y-3">
                      {[
                        "Safe removal of all appliance types",
                        "Professional handling techniques",
                        "Eco-friendly disposal methods",
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
                      We proudly provide appliance removal services throughout the Richmond metro area including:
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

      {/* Related Services */}
      <RelatedServices currentService="appliance-removal" />

      <Footer />
    </div>
  );
}
