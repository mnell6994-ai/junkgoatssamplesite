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
  title: "Estate Cleanout Richmond VA | Professional Estate Cleanup",
  description: "Professional estate cleanout services in Richmond, VA. Compassionate, thorough estate cleanouts with sensitive handling. Free estimates, family consultation, item sorting, and responsible disposal.",
  keywords: "estate cleanout service, estate cleanout Richmond VA, estate cleanout company, estate cleanout services, probate cleanout, estate liquidation"
};

export default function EstateCleanoutPage() {
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
        name="Estate Cleanout"
        description="Professional estate cleanout services in Richmond, VA. Compassionate, thorough estate cleanouts with sensitive handling. Free estimates, family consultation, item sorting, and responsible disposal."
        url="/services/estate-cleanout"
        price="Starting at $300"
      />
      <BreadcrumbSchema items={[
        { name: "Services", url: "/services" },
        { name: "Estate Cleanout", url: "/services/estate-cleanout" }
      ]} />
      <HeaderWorking />

      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        <Image
          src="/images/junk-removal-richmond-va01.jpg"
          alt="Professional estate cleanout services in Richmond Virginia"
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
                ESTATE CLEANOUT
              </span>
              <br />
              SERVICES
              </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto font-semibold">
                Compassionate estate cleanout services in Richmond, VA. We provide sensitive, thorough cleanouts with family consultation, item sorting, and responsible disposal of all belongings.
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

      {/* Why Choose Our Estate Cleanout Services */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-12 uppercase tracking-tight">
            <span className="text-[#1e40af]">WHY CHOOSE OUR</span>{" "}
            <span className="text-[#dc2626]">ESTATE CLEANOUT</span>{" "}
            <span className="text-[#1e40af]">SERVICES</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1e40af] mb-6">
                Compassionate Estate Cleanout in Richmond, VA
              </h3>
              <p className="text-base md:text-lg text-gray-600 mb-6">
                At Junk Goats, we understand that estate cleanouts are often emotionally challenging times for families. Our estate cleanout services are designed with compassion and sensitivity, providing thorough, respectful handling of a loved one's belongings while easing the burden on family members.
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-6">
                Our experienced estate cleanout team works closely with families to ensure that valuable items are preserved, sentimental belongings are handled with care, and the entire process is conducted with dignity and respect. We provide comprehensive estate cleanout services that cover every aspect of property clearing.
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-6">
                Whether you're dealing with a probate situation, preparing a property for sale, or simply need to clear out a family home, our Richmond estate cleanout services are tailored to meet your specific needs. We handle everything from initial consultation to final cleanup, making the process as stress-free as possible. Our services also include <Link href="/services/furniture-removal" className="text-[#1e40af] font-semibold hover:underline">furniture removal</Link>, <Link href="/services/appliance-removal" className="text-[#1e40af] font-semibold hover:underline">appliance removal</Link>, and comprehensive <Link href="/services/junk-removal" className="text-[#1e40af] font-semibold hover:underline">junk removal</Link>.
              </p>
              <ul className="space-y-3">
                {[
                  "Compassionate, sensitive handling",
                  "Family consultation and communication", 
                  "Item sorting and preservation",
                  "Complete property cleanout",
                  "Responsible disposal and donation"
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
                src="/images/residential-junk.jpg" 
                alt="Professional estate cleanout team handling belongings with care"
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
                <span className="text-[#dc2626]">ESTATE CLEANOUT</span>{" "}
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

      {/* Comprehensive Estate Cleanout Services */}
      <section className="py-16 bg-[#f3f4f6]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-12 uppercase tracking-tight">
            <span className="text-[#1e40af]">COMPREHENSIVE</span>{" "}
            <span className="text-[#dc2626]">ESTATE CLEANOUT</span>{" "}
            <span className="text-[#1e40af]">SOLUTIONS</span>
          </h2>
          
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-[#1e40af] mb-6 text-center">Full Property Estate Cleanouts</h3>
            <p className="text-lg text-gray-600 mb-6 text-center max-w-4xl mx-auto">
              Our comprehensive estate cleanout services cover every aspect of property clearing, from single rooms to entire homes. We work with families to ensure that all belongings are handled appropriately, with special attention to valuable items and sentimental belongings.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-[#dc2626] mb-4">Complete Home Cleanouts</h4>
                <p className="text-gray-600 mb-4">
                  Full house estate cleanouts including all rooms, basement, attic, garage, and outdoor areas. We systematically go through each space to ensure nothing is overlooked.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Room-by-room inventory
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Basement and attic clearing
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Garage and shed cleanout
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-[#dc2626] mb-4">Selective Room Cleanouts</h4>
                <p className="text-gray-600 mb-4">
                  Targeted cleanouts of specific rooms or areas when a full estate cleanout isn't needed. Perfect for partial cleanouts or when certain areas need special attention.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Individual room cleanouts
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Specific area clearing
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Custom cleanout solutions
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-3xl font-bold text-[#1e40af] mb-6 text-center">Item Sorting and Preservation</h3>
            <p className="text-lg text-gray-600 mb-6 text-center max-w-4xl mx-auto">
              Our estate cleanout process includes careful sorting and preservation of valuable items, family heirlooms, and important documents. We work with families to ensure that meaningful items are preserved and valuable belongings are handled appropriately.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-[#dc2626] mb-4">Valuable Item Identification</h4>
                <p className="text-gray-600 mb-4">
                  Our team is trained to identify potentially valuable items including antiques, collectibles, jewelry, and other valuables. We set these items aside for family review and potential appraisal.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Antique and collectible identification
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Jewelry and valuable item sorting
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Document and paper preservation
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-[#dc2626] mb-4">Family Consultation</h4>
                <p className="text-gray-600 mb-4">
                  We work closely with family members throughout the estate cleanout process, providing consultation on item handling, disposal options, and ensuring that family wishes are respected.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Pre-cleanout consultation
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Ongoing family communication
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Decision support and guidance
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-3xl font-bold text-[#1e40af] mb-6 text-center">Responsible Disposal and Donation</h3>
            <p className="text-lg text-gray-600 mb-6 text-center max-w-4xl mx-auto">
              Our estate cleanout services include responsible disposal and donation of items that can benefit others in the community. We work with local charities and donation centers to ensure that usable items find new homes rather than ending up in landfills.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-[#dc2626] mb-4">Donation Services</h4>
                <p className="text-gray-600 mb-4">
                  We coordinate with local charities and donation centers to donate usable items including furniture, clothing, household goods, and other items that can benefit families in need.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Furniture and household donations
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Clothing and personal item donations
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Donation receipt documentation
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-[#dc2626] mb-4">Eco-Friendly Disposal</h4>
                <p className="text-gray-600 mb-4">
                  Items that cannot be donated are disposed of in an environmentally responsible manner, with recycling whenever possible and proper disposal of items that cannot be reused.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Recycling of recyclable materials
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Proper disposal of non-recyclable items
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500" />
                    Hazardous material handling
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-[#1e40af] mb-6">Specialized Estate Cleanout Services</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
              Our estate cleanout services are tailored to meet the unique needs of each situation, whether you're dealing with a probate case, preparing a property for sale, or simply need to clear out a family home.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white text-center p-6">
                <CardContent className="p-4">
                  <h4 className="text-xl font-bold text-[#dc2626] mb-3">Probate Cleanouts</h4>
                  <p className="text-gray-600">Specialized cleanouts for probate situations with documentation and legal compliance</p>
                </CardContent>
              </Card>
              <Card className="bg-white text-center p-6">
                <CardContent className="p-4">
                  <h4 className="text-xl font-bold text-[#dc2626] mb-3">Property Sale Prep</h4>
                  <p className="text-gray-600">Complete property clearing to prepare homes for sale or rental</p>
                </CardContent>
              </Card>
              <Card className="bg-white text-center p-6">
                <CardContent className="p-4">
                  <h4 className="text-xl font-bold text-[#dc2626] mb-3">Family Transitions</h4>
                  <p className="text-gray-600">Sensitive handling during family transitions and life changes</p>
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
            <span className="text-[#1e40af]">ESTATE CLEANOUT</span>{" "}
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
            <h3 className="text-2xl font-bold text-[#1e40af] mb-4 text-center">Richmond Area Estate Cleanout Coverage</h3>
            <p className="text-gray-600 mb-4 text-center">
              Junk Goats provides compassionate estate cleanout services throughout the greater Richmond area. Our service coverage extends to all major communities, ensuring families have access to professional, sensitive estate cleanout services when they need them most.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Richmond City:</strong> We serve all neighborhoods within Richmond city limits, including historic areas with unique architectural challenges. Our team is experienced in handling estate cleanouts in all types of Richmond properties, from historic homes to modern condos.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Henrico County:</strong> Our estate cleanout services cover all Henrico County areas including Glen Allen, Short Pump, Tuckahoe, and the West End. We understand the diverse needs of Henrico County families and provide tailored solutions.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Chesterfield County:</strong> We provide estate cleanout services to Chesterfield County communities including Chester, Moseley, Midlothian, and Bon Air. Our team is familiar with the area's regulations and can provide efficient, compliant service.
            </p>
            <p className="text-center mt-6 text-gray-600">
              Need estate cleanout services in another area? We travel throughout the Richmond metro area for larger jobs. 
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
            <span className="text-[#dc2626]">SCHEDULE YOUR ESTATE CLEANOUT?</span>
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
                        "Compassionate, sensitive handling",
                        "Family consultation and communication",
                        "Item sorting and preservation",
                        "Complete property cleanout",
                        "Responsible disposal and donation"
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
                      We proudly provide estate cleanout services throughout the Richmond metro area including:
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
      <RelatedServices currentService="estate-cleanout" />

      <Footer />
    </div>
  );
}
