import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Trash2, Sofa, TreeDeciduous, HardHat, Home, Package } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Junk Removal Services Richmond VA | Junk Goats",
  description: "Professional junk removal services in Richmond, VA. Furniture removal, yard waste, construction debris, estate cleanouts & more. Same-day service available!",
  alternates: {
    canonical: 'https://junkgoatsrichmond.com/services',
    languages: {
      'en-US': 'https://junkgoatsrichmond.com/services',
      'en': 'https://junkgoatsrichmond.com/services',
      'x-default': 'https://junkgoatsrichmond.com/services',
    },
  },
};

export default function ServicesPage() {
  const services = [
    {
      title: "Junk Removal",
      description: "Complete junk removal services for residential and commercial properties. We haul away furniture, appliances, and debris safely and efficiently.",
      icon: Trash2,
      features: [
        "Same-day service available",
        "No job too big or small",
        "Licensed and insured",
        "Eco-friendly disposal",
        "Upfront pricing"
      ],
      price: "Starting at $150",
      slug: "junk-removal"
    },
    {
      title: "Furniture Removal",
      description: "Professional furniture removal services for homes and offices. We safely remove and dispose of old furniture, mattresses, and large items.",
      icon: Sofa,
      features: [
        "Mattress and couch removal",
        "Large item hauling",
        "Safe disassembly when needed",
        "Donation of usable items",
        "Same-day pickup available"
      ],
      price: "Starting at $75",
      slug: "furniture-removal"
    },
    {
      title: "Yard Waste Removal",
      description: "Professional yard waste removal services including branches, leaves, grass clippings, and other organic debris from your property.",
      icon: TreeDeciduous,
      features: [
        "Branches and tree debris",
        "Leaves and grass clippings",
        "Organic waste removal",
        "Storm cleanup",
        "Seasonal cleanup"
      ],
      price: "Starting at $100",
      slug: "yard-waste-removal"
    },
    {
      title: "Construction Debris",
      description: "Professional construction debris removal for renovation and building projects. We haul away construction materials safely and efficiently.",
      icon: HardHat,
      features: [
        "Construction material removal",
        "Renovation debris cleanup",
        "Building material disposal",
        "Project site cleanup",
        "Dumpster alternative"
      ],
      price: "Starting at $200",
      slug: "construction-debris"
    },
    {
      title: "Estate Cleanout",
      description: "Complete estate cleanout services for homes and properties. We handle everything from furniture to personal belongings with care and respect.",
      icon: Home,
      features: [
        "Complete property cleanout",
        "Furniture and personal items",
        "Sensitive handling of belongings",
        "Donation of usable items",
        "Full property restoration"
      ],
      price: "Starting at $300",
      slug: "estate-cleanout"
    },
    {
      title: "Appliance Removal",
      description: "Safe and responsible appliance removal and disposal. We handle refrigerators, washers, dryers, and all large appliances.",
      icon: Package,
      features: [
        "All appliance types",
        "Refrigerant recovery",
        "Environmentally safe disposal",
        "Heavy lifting included",
        "Same-day service"
      ],
      price: "Starting at $75",
      slug: "appliance-removal"
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1e40af] to-[#dc2626] text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-tight">
              Professional Junk Removal Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-semibold">
              Fast, reliable junk removal in Richmond, VA. We handle everything from single items to full property cleanouts.
            </p>
            <Button size="lg" className="bg-[#FFA500] hover:bg-[#FF8C00] text-black font-black text-lg px-8 py-4 uppercase">
              Get Free Estimate
            </Button>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-black text-center text-[#1e40af] mb-4 uppercase tracking-tight">
              Our Services
            </h2>
            <p className="text-center text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              From single items to complete property cleanouts, we handle all your junk removal needs in Richmond, VA.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-gray-100">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-to-br from-[#1e40af] to-[#dc2626] rounded-full flex items-center justify-center mb-4">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl text-[#1e40af] font-black uppercase tracking-tight">{service.title}</CardTitle>
                      <CardDescription className="text-gray-600 text-lg">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-[#FFA500] text-black px-4 py-2 rounded-full text-center font-black text-lg mb-4 uppercase">
                        {service.price}
                      </div>
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-[#dc2626] flex-shrink-0" />
                            <span className="text-gray-700 font-semibold">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link href={`/services/${service.slug}`}>
                        <Button className="w-full bg-gradient-to-r from-[#1e40af] to-[#dc2626] hover:from-[#1e3a8a] hover:to-[#b91c1c] text-white font-black uppercase">
                          Learn More
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-black text-center text-[#1e40af] mb-12 uppercase tracking-tight">
              Why Choose Junk Goats?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#1e40af] to-[#dc2626] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🚚</span>
                </div>
                <h3 className="text-xl font-black text-[#1e40af] mb-2 uppercase">Same-Day Service</h3>
                <p className="text-gray-600 font-semibold">Fast response times with same-day pickup available for urgent needs.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#1e40af] to-[#dc2626] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">💪</span>
                </div>
                <h3 className="text-xl font-black text-[#1e40af] mb-2 uppercase">We Do All The Work</h3>
                <p className="text-gray-600 font-semibold">You point, we load. No heavy lifting required from you.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#1e40af] to-[#dc2626] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">♻️</span>
                </div>
                <h3 className="text-xl font-black text-[#1e40af] mb-2 uppercase">Eco-Friendly</h3>
                <p className="text-gray-600 font-semibold">We donate and recycle whenever possible to reduce landfill waste.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#1e40af] to-[#dc2626] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">💰</span>
                </div>
                <h3 className="text-xl font-black text-[#1e40af] mb-2 uppercase">Upfront Pricing</h3>
                <p className="text-gray-600 font-semibold">No hidden fees. You know the cost before we start the job.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[#1e40af] to-[#dc2626] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-40 h-40 bg-white rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-white rounded-full blur-xl animate-bounce"></div>
          </div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-black mb-6 uppercase tracking-tight">Ready to Clear Out Your Junk?</h2>
            <p className="text-xl mb-8 font-semibold">
              Get your free estimate today and experience Richmond's #1 junk removal service!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#FFA500] hover:bg-[#FF8C00] text-black font-black text-lg px-8 py-4 uppercase">
                Get Free Estimate
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#1e40af] font-black text-lg px-8 py-4 uppercase">
                Call (804) 494-7999
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
