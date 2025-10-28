import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Trash2, Sofa, Home, Leaf, HardHat, Tv, Building, Briefcase } from "lucide-react";

interface RelatedService {
  title: string;
  description: string;
  href: string;
  icon: typeof Trash2;
}

interface RelatedServicesProps {
  currentService: string;
}

const allServices: { [key: string]: RelatedService } = {
  "junk-removal": {
    title: "Junk Removal",
    description: "Complete junk removal services for any unwanted items",
    href: "/services/junk-removal",
    icon: Trash2
  },
  "furniture-removal": {
    title: "Furniture Removal",
    description: "Professional furniture and mattress removal services",
    href: "/services/furniture-removal",
    icon: Sofa
  },
  "estate-cleanout": {
    title: "Estate Cleanout",
    description: "Compassionate and thorough estate cleanout services",
    href: "/services/estate-cleanout",
    icon: Home
  },
  "yard-waste-removal": {
    title: "Yard Waste Removal",
    description: "Efficient yard waste and organic debris removal",
    href: "/services/yard-waste-removal",
    icon: Leaf
  },
  "construction-debris": {
    title: "Construction Debris",
    description: "Construction debris and renovation cleanup",
    href: "/services/construction-debris",
    icon: HardHat
  },
  "appliance-removal": {
    title: "Appliance Removal",
    description: "Safe and eco-friendly appliance removal",
    href: "/services/appliance-removal",
    icon: Tv
  },
  "commercial-cleanout": {
    title: "Commercial Cleanout",
    description: "Professional commercial property cleanout services",
    href: "/services/commercial-cleanout",
    icon: Building
  },
  "office-cleanout": {
    title: "Office Cleanout",
    description: "Complete office furniture and equipment removal",
    href: "/services/office-cleanout",
    icon: Briefcase
  }
};

const relatedServicesMap: { [key: string]: string[] } = {
  "junk-removal": ["furniture-removal", "appliance-removal", "estate-cleanout"],
  "furniture-removal": ["junk-removal", "appliance-removal", "estate-cleanout"],
  "estate-cleanout": ["junk-removal", "furniture-removal", "appliance-removal"],
  "yard-waste-removal": ["junk-removal", "construction-debris", "commercial-cleanout"],
  "construction-debris": ["junk-removal", "yard-waste-removal", "commercial-cleanout"],
  "appliance-removal": ["junk-removal", "furniture-removal", "estate-cleanout"],
  "commercial-cleanout": ["office-cleanout", "junk-removal", "construction-debris"],
  "office-cleanout": ["commercial-cleanout", "furniture-removal", "junk-removal"]
};

export default function RelatedServices({ currentService }: RelatedServicesProps) {
  const relatedServiceKeys = relatedServicesMap[currentService] || [];
  const relatedServices = relatedServiceKeys.map(key => allServices[key]);

  if (relatedServices.length === 0) return null;

  return (
    <section className="py-12 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
            Related Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of junk removal services to meet all your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <Link key={service.href} href={service.href}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-[#dc2626] bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#dc2626] p-3 rounded-lg">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#1e293b] mb-2 group-hover:text-[#dc2626] transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="flex items-center text-[#dc2626] font-semibold">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
