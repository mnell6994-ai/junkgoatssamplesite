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
      title: "🏠 House Washing",
      description: "Complete exterior house cleaning including siding, brick, stucco, and vinyl. Safe for all surfaces with professional techniques.",
      features: ["Soft washing for delicate surfaces", "Mold and mildew removal", "Gutter cleaning included"],
      image: "/images/pressure washing house.jpg",
      link: "/services/house-washing"
    },
    {
      title: "🪵 Deck Cleaning", 
      description: "Restore your deck to like-new condition. We use the right pressure and cleaning solutions for wood surfaces.",
      features: ["Wood-safe cleaning solutions", "Stain preparation included", "Sealing recommendations"],
      image: "/images/powerwashing deck.jpg",
      link: "/services/deck-cleaning"
    },
    {
      title: "🏗️ Concrete Cleaning",
      description: "Driveway, sidewalk, and patio cleaning. Remove oil stains, dirt, and grime to restore your concrete surfaces.",
      features: ["Oil stain removal", "Pressure washing", "Sealing recommendations"],
      image: "/images/Pressure washing concrete 2 - commercial.jpg",
      link: "/services/concrete-cleaning"
    },
    {
      title: "🏠 Roof Cleaning",
      description: "Safe roof cleaning and moss removal. We use low-pressure techniques to protect your shingles while removing algae and moss.",
      features: ["Low-pressure cleaning", "Moss and algae removal", "Gutter cleaning included"],
      image: "/images/pressure washing roof - residential.jpg",
      link: "/services/roof-cleaning"
    },
    {
      title: "🪟 Window Cleaning",
      description: "Professional window cleaning for crystal-clear results. Interior and exterior cleaning with streak-free finish.",
      features: ["Interior and exterior", "Streak-free finish", "Screen cleaning included"],
      image: "/images/pressure washing window.jpg",
      link: "/services/window-cleaning"
    },
    {
      title: "🧽 Gutter Cleaning",
      description: "Complete gutter cleaning and maintenance. Remove debris, leaves, and blockages to protect your home from water damage.",
      features: ["Debris removal", "Downspout cleaning", "Gutter inspection"],
      image: "/images/pressure washing gutter.jpg",
      link: "/services/gutter-cleaning"
    }
  ];

  return (
    <section id="services" className="py-16 bg-[#f3f4f6]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-black text-center mb-12 uppercase tracking-tight">
          <span className="text-[#1e40af]">OUR</span>{" "}
          <span className="text-[#FFA500] italic">POWER WASHING</span>{" "}
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
