"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { memo } from "react";
import Image from "next/image";
import Link from "next/link";

const ServicesSection = memo(() => {
  const services = [
    {
      title: "Junk Removal",
      description: "Complete junk removal services for residential and commercial properties. We haul away furniture, appliances, and debris safely and efficiently.",
      features: ["Same-day service available", "Furniture and appliance removal", "Construction debris cleanup", "Yard waste removal", "Eco-friendly disposal methods"],
      image: "/images/residential-junk.jpg",
      link: "/services/junk-removal"
    },
    {
      title: "Furniture Removal", 
      description: "Professional furniture removal services for homes and offices. We safely remove and dispose of old furniture, mattresses, and large items.",
      features: ["Mattress and furniture removal", "Large item hauling", "Safe disassembly when needed", "Eco-friendly disposal", "Same-day pickup available"],
      image: "/images/mattress-removal.jpg",
      link: "/services/furniture-removal"
    },
    {
      title: "Estate Cleanout",
      description: "Complete estate cleanout services for homes and properties. We handle everything from furniture to personal belongings with care and respect.",
      features: ["Complete property cleanout", "Furniture and personal items", "Sensitive handling of belongings", "Donation of usable items", "Full property restoration"],
      image: "/images/commercial-cleanout.jpg",
      link: "/services/estate-cleanout"
    },
    {
      title: "Construction Debris",
      description: "Professional construction debris removal for renovation and building projects. We haul away construction materials safely and efficiently.",
      features: ["Construction material removal", "Renovation debris cleanup", "Building material disposal", "Project site cleanup"],
      image: "/images/concrete-removal.jpg",
      link: "/services/construction-debris"
    },
    {
      title: "Appliance Removal",
      description: "Safe and efficient removal of old appliances including refrigerators, washers, dryers, and more. Eco-friendly disposal and recycling.",
      features: ["Refrigerator and freezer removal", "Washer and dryer removal", "Oven and stove removal", "Eco-friendly recycling", "Safe handling and transport"],
      image: "/images/trash-removal.jpg",
      link: "/services/appliance-removal"
    },
    {
      title: "Yard Waste Removal",
      description: "Professional yard waste removal services including branches, leaves, grass clippings, and other organic debris from your property.",
      features: ["Branches and tree debris", "Leaves and grass clippings", "Organic waste removal", "Composting services", "Seasonal cleanup"],
      image: "/images/yard-waste.jpg",
      link: "/services/yard-waste"
    }
  ];

  return (
    <section id="services" className="py-16 bg-[#f3f4f6]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-black text-center mb-12 uppercase tracking-tight">
          <span className="text-[#1e40af]">OUR</span>{" "}
          <span className="text-[#dc2626]">JUNK REMOVAL</span>{" "}
          <span className="text-[#1e40af]">SERVICES</span>
        </h2>
        {/* Service Blocks - Equal Width */}
        <div className="grid lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <div className="w-full h-48 rounded-lg mb-6 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} - Professional power washing service`}
                    width={400}
                    height={192}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#dc2626] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-800 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-black uppercase tracking-wide italic">
                    FREE QUOTE
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

ServicesSection.displayName = "ServicesSection";

export default ServicesSection;
