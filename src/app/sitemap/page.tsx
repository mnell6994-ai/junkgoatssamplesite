import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "Sitemap | Junk Goats Junk Removal - All Pages & Services",
  description: "Complete sitemap for Junk Goats Junk Removal. Find all our junk removal services, service areas, and pages. Easy navigation to furniture removal, yard waste, construction debris, and more.",
  keywords: "sitemap Richmond junk removal, junk removal services Richmond, junk hauling pages Richmond, junk removal navigation Richmond VA"
};

export default function SitemapPage() {
  const services = [
    { name: "Junk Removal", url: "/services/junk-removal", description: "Complete junk removal for residential and commercial" },
    { name: "Furniture Removal", url: "/services/furniture-removal", description: "Mattresses, couches, and large furniture items" },
    { name: "Yard Waste Removal", url: "/services/yard-waste-removal", description: "Branches, leaves, and organic debris" },
    { name: "Construction Debris", url: "/services/construction-debris", description: "Building materials and renovation cleanup" },
    { name: "Appliance Removal", url: "/services/appliance-removal", description: "Safe removal of all appliances" },
    { name: "Estate Cleanout", url: "/services/estate-cleanout", description: "Complete property cleanout services" },
    { name: "Commercial Cleanout", url: "/services/commercial-cleanout", description: "Business and commercial junk removal" },
    { name: "Office Cleanout", url: "/services/office-cleanout", description: "Office furniture and equipment removal" }
  ];

  const locations = [
    { name: "Richmond, VA", url: "/richmond", description: "Junk removal services in Richmond" },
    { name: "Henrico County, VA", url: "/henrico", description: "Junk removal services in Henrico County" },
    { name: "Chesterfield County, VA", url: "/chesterfield", description: "Junk removal services in Chesterfield County" },
    { name: "Midlothian, VA", url: "/midlothian", description: "Junk removal services in Midlothian" },
    { name: "Mechanicsville, VA", url: "/mechanicsville", description: "Junk removal services in Mechanicsville" }
  ];

  const mainPages = [
    { name: "Home", url: "/", description: "Junk Goats Junk Removal homepage" },
    { name: "How It Works", url: "/how-it-works", description: "Our simple 3-step junk removal process" },
    { name: "Contact", url: "/contact", description: "Contact us for free estimates" },
    { name: "Privacy Policy", url: "/privacy", description: "Our privacy policy and data practices" },
    { name: "Terms of Service", url: "/terms", description: "Terms and conditions for our services" }
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <Header />

      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        <Image
          src="/images/junk-removal-1.jpg"
          alt="Junk Goats Junk Removal Sitemap"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={75}
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto max-w-6xl relative z-10 px-4">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight uppercase tracking-tight">
              <span className="text-[#FFA500] italic">SITEMAP</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-semibold">
              Find all our junk removal services, service areas, and pages. Easy navigation to everything Junk Goats has to offer.
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Main Pages */}
            <Card className="bg-white shadow-lg border-2 border-gray-100">
              <CardHeader>
                <CardTitle className="text-2xl font-black text-[#1e40af] uppercase tracking-tight">
                  Main Pages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {mainPages.map((page, index) => (
                    <li key={index}>
                      <Link
                        href={page.url}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#f3f4f6] transition-colors group"
                      >
                        <ExternalLink className="w-4 h-4 text-[#dc2626] group-hover:text-[#1e40af] transition-colors" />
                        <div>
                          <div className="font-black text-[#1e40af] group-hover:text-[#dc2626] transition-colors uppercase text-sm">
                            {page.name}
                          </div>
                          <div className="text-xs text-gray-600 font-semibold">
                            {page.description}
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Services */}
            <Card className="bg-white shadow-lg border-2 border-gray-100">
              <CardHeader>
                <CardTitle className="text-2xl font-black text-[#1e40af] uppercase tracking-tight">
                  Junk Removal Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={index}>
                      <Link
                        href={service.url}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#f3f4f6] transition-colors group"
                      >
                        <ExternalLink className="w-4 h-4 text-[#dc2626] group-hover:text-[#1e40af] transition-colors" />
                        <div>
                          <div className="font-black text-[#1e40af] group-hover:text-[#dc2626] transition-colors uppercase text-sm">
                            {service.name}
                          </div>
                          <div className="text-xs text-gray-600 font-semibold">
                            {service.description}
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Service Areas */}
            <Card className="bg-white shadow-lg border-2 border-gray-100">
              <CardHeader>
                <CardTitle className="text-2xl font-black text-[#1e40af] uppercase tracking-tight">
                  Service Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {locations.map((location, index) => (
                    <li key={index}>
                      <Link
                        href={location.url}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#f3f4f6] transition-colors group"
                      >
                        <MapPin className="w-4 h-4 text-[#dc2626] group-hover:text-[#1e40af] transition-colors" />
                        <div>
                          <div className="font-black text-[#1e40af] group-hover:text-[#dc2626] transition-colors uppercase text-sm">
                            {location.name}
                          </div>
                          <div className="text-xs text-gray-600 font-semibold">
                            {location.description}
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <Card className="mt-12 bg-gradient-to-r from-[#1e40af] to-[#dc2626] text-white border-0">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">
                  Need Help Finding Something?
                </h2>
                <p className="text-xl mb-8 font-semibold">
                  Can't find what you're looking for? Contact us directly and we'll help you find the information you need.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+18044947999"
                    className="flex items-center gap-3 bg-white text-[#1e40af] px-6 py-3 rounded-lg font-black hover:bg-gray-100 transition-colors uppercase"
                  >
                    <Phone className="w-5 h-5" />
                    (804) 494-7999
                  </a>
                  <a
                    href="mailto:info@junkgoatsrichmond.com"
                    className="flex items-center gap-3 bg-white text-[#1e40af] px-6 py-3 rounded-lg font-black hover:bg-gray-100 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    info@junkgoatsrichmond.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
