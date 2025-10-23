import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "Sitemap | Richmond Power Washing Pro - All Pages & Services",
  description: "Complete sitemap for Richmond Power Washing Pro. Find all our power washing services, service areas, and pages. Easy navigation to house washing, deck cleaning, concrete cleaning, and more.",
  keywords: "sitemap Richmond power washing, power washing services Richmond, pressure washing pages Richmond, power washing navigation Richmond VA"
};

export default function SitemapPage() {
  const services = [
    { name: "House Washing", url: "/services/house-washing", description: "Complete exterior house cleaning" },
    { name: "Deck Cleaning", url: "/services/deck-cleaning", description: "Professional deck cleaning and restoration" },
    { name: "Fence Cleaning", url: "/services/fence-cleaning", description: "All types of fence cleaning and maintenance" },
    { name: "Concrete Cleaning", url: "/services/concrete-cleaning", description: "Driveway, patio, and sidewalk cleaning" },
    { name: "Roof Cleaning", url: "/services/roof-cleaning", description: "Safe roof cleaning and moss removal" },
    { name: "Window Cleaning", url: "/services/window-cleaning", description: "Interior and exterior window cleaning" },
    { name: "Gutter Cleaning", url: "/services/gutter-cleaning", description: "Complete gutter cleaning and maintenance" }
  ];

  const locations = [
    { name: "Richmond, VA", url: "/richmond", description: "Power washing services in Richmond" },
    { name: "Henrico County, VA", url: "/henrico", description: "Power washing services in Henrico County" },
    { name: "Chesterfield County, VA", url: "/chesterfield", description: "Power washing services in Chesterfield County" },
    { name: "Midlothian, VA", url: "/midlothian", description: "Power washing services in Midlothian" },
    { name: "Mechanicsville, VA", url: "/mechanicsville", description: "Power washing services in Mechanicsville" }
  ];

  const mainPages = [
    { name: "Home", url: "/", description: "Richmond Power Washing Pro homepage" },
    { name: "Contact", url: "/contact", description: "Contact us for free estimates" },
    { name: "FAQ", url: "/faq", description: "Frequently asked questions" }
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
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight uppercase tracking-tight">
              <span className="text-[#FFA500] italic">SITEMAP</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-semibold">
              Find all our power washing services, service areas, and pages. Easy navigation to everything Richmond Power Washing Pro has to offer.
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Main Pages */}
            <Card className="bg-white shadow-lg">
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
                          <div className="font-semibold text-[#1e40af] group-hover:text-[#dc2626] transition-colors">
                            {page.name}
                          </div>
                          <div className="text-sm text-gray-600">
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
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-black text-[#1e40af] uppercase tracking-tight">
                  Power Washing Services
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
                          <div className="font-semibold text-[#1e40af] group-hover:text-[#dc2626] transition-colors">
                            {service.name}
                          </div>
                          <div className="text-sm text-gray-600">
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
            <Card className="bg-white shadow-lg">
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
                          <div className="font-semibold text-[#1e40af] group-hover:text-[#dc2626] transition-colors">
                            {location.name}
                          </div>
                          <div className="text-sm text-gray-600">
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
          <Card className="mt-12 bg-gradient-to-r from-[#1e40af] to-[#dc2626] text-white">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">
                  Need Help Finding Something?
                </h2>
                <p className="text-xl mb-8">
                  Can't find what you're looking for? Contact us directly and we'll help you find the information you need.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+18045550123"
                    className="flex items-center gap-3 bg-white text-[#1e40af] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    (804) 555-0123
                  </a>
                  <a 
                    href="mailto:info@richmondpowerwashpro.com"
                    className="flex items-center gap-3 bg-white text-[#1e40af] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    info@richmondpowerwashpro.com
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

