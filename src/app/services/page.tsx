"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Star, Clock, Shield, Award, ChevronDown, MapPin } from "lucide-react";
import { useState, useEffect, useRef } from "react";


export default function ServicesPage() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const locationsDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
      if (locationsDropdownRef.current && !locationsDropdownRef.current.contains(event.target as Node)) {
        setIsLocationsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const services = [
    {
      title: "House Washing",
      description: "Complete exterior house cleaning including siding, brick, stucco, and vinyl. Safe for all surfaces with professional techniques.",
      image: "https://images.unsplash.com/photo-1581578731548-c6a0c3f2f2c0?w=600&h=400&fit=crop",
      features: [
        "Soft washing for delicate surfaces",
        "Mold and mildew removal",
        "Gutter cleaning included",
        "Window cleaning add-on available",
        "Eco-friendly cleaning solutions"
      ],
      price: "Starting at $200",
      slug: "house-washing"
    },
    {
      title: "Deck & Fence Cleaning",
      description: "Restore your deck and fence to like-new condition. We use the right pressure and cleaning solutions for wood surfaces.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      features: [
        "Wood-safe cleaning solutions",
        "Stain preparation included",
        "Sealing recommendations",
        "Pressure washing technique",
        "Mold and mildew removal"
      ],
      price: "Starting at $150",
      slug: "deck-fence-cleaning"
    },
    {
      title: "Concrete Cleaning",
      description: "Driveway, sidewalk, and patio cleaning. Remove oil stains, dirt, and grime to restore your concrete surfaces.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop",
      features: [
        "Oil stain removal",
        "Pressure washing",
        "Sealing recommendations",
        "Crack repair referrals",
        "Eco-friendly solutions"
      ],
      price: "Starting at $100",
      slug: "concrete-cleaning"
    },
    {
      title: "Roof Cleaning",
      description: "Safe roof cleaning and moss removal. We use low-pressure techniques to protect your shingles while removing algae and moss.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop",
      features: [
        "Low-pressure cleaning",
        "Moss and algae removal",
        "Gutter cleaning included",
        "Shingle-safe techniques",
        "Prevents future growth"
      ],
      price: "Starting at $300",
      slug: "roof-cleaning"
    },
    {
      title: "Window Cleaning",
      description: "Professional window cleaning for crystal-clear results. Interior and exterior cleaning with streak-free finish.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop",
      features: [
        "Interior and exterior",
        "Streak-free finish",
        "Screen cleaning included",
        "Frame cleaning",
        "Sill cleaning"
      ],
      price: "Starting at $120",
      slug: "window-cleaning"
    },
    {
      title: "Gutter Cleaning",
      description: "Complete gutter cleaning and maintenance. Remove debris, leaves, and blockages to protect your home from water damage.",
      image: "https://images.unsplash.com/photo-1581578731548-c6a0c3f2f2c0?w=600&h=400&fit=crop",
      features: [
        "Debris removal",
        "Downspout cleaning",
        "Gutter inspection",
        "Minor repairs included",
        "Leaf guard recommendations"
      ],
      price: "Starting at $80",
      slug: "gutter-cleaning"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-[#1e40af]">
              💧 Richmond Power Washing Pro
            </Link>
            <nav className="hidden md:flex gap-8">
              <div className="relative" ref={servicesDropdownRef}>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="text-[#1e40af] font-medium hover:text-[#dc2626] transition-colors flex items-center gap-1"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <Link 
                      href="/services/house-washing" 
                      className="block px-4 py-2 text-[#374151] hover:bg-[#f3f4f6] hover:text-[#1e40af] transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      🏠 House Washing
                    </Link>
                    <Link 
                      href="/services/deck-fence-cleaning" 
                      className="block px-4 py-2 text-[#374151] hover:bg-[#f3f4f6] hover:text-[#1e40af] transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      🪵 Deck & Fence Cleaning
                    </Link>
                    <Link 
                      href="/services/concrete-cleaning" 
                      className="block px-4 py-2 text-[#374151] hover:bg-[#f3f4f6] hover:text-[#1e40af] transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      🏗️ Concrete Cleaning
                    </Link>
                    <Link 
                      href="/services/roof-cleaning" 
                      className="block px-4 py-2 text-[#374151] hover:bg-[#f3f4f6] hover:text-[#1e40af] transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      🏠 Roof Cleaning
                    </Link>
                    <Link 
                      href="/services/window-cleaning" 
                      className="block px-4 py-2 text-[#374151] hover:bg-[#f3f4f6] hover:text-[#1e40af] transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      🪟 Window Cleaning
              </Link>
                    <Link 
                      href="/services/gutter-cleaning" 
                      className="block px-4 py-2 text-[#374151] hover:bg-[#f3f4f6] hover:text-[#1e40af] transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      🧽 Gutter Cleaning
              </Link>
                  </div>
                )}
              </div>
              <div className="relative" ref={locationsDropdownRef}>
                <button
                  onClick={() => setIsLocationsOpen(!isLocationsOpen)}
                  className="text-[#374151] font-medium hover:text-[#1e40af] transition-colors flex items-center gap-1"
                >
                  Service Areas
                  <ChevronDown className={`w-4 h-4 transition-transform ${isLocationsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isLocationsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <Link 
                      href="/richmond" 
                      className="block px-4 py-2 text-[#374151] hover:bg-[#f3f4f6] hover:text-[#1e40af] transition-colors"
                      onClick={() => setIsLocationsOpen(false)}
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Richmond, VA
                      </div>
                    </Link>
                    <Link 
                      href="/henrico" 
                      className="block px-4 py-2 text-[#374151] hover:bg-[#f3f4f6] hover:text-[#1e40af] transition-colors"
                      onClick={() => setIsLocationsOpen(false)}
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Henrico, VA
                      </div>
                    </Link>
                    <Link 
                      href="/chesterfield" 
                      className="block px-4 py-2 text-[#374151] hover:bg-[#f3f4f6] hover:text-[#1e40af] transition-colors"
                      onClick={() => setIsLocationsOpen(false)}
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Chesterfield, VA
                      </div>
                    </Link>
                    <Link 
                      href="/midlothian" 
                      className="block px-4 py-2 text-[#374151] hover:bg-[#f3f4f6] hover:text-[#1e40af] transition-colors"
                      onClick={() => setIsLocationsOpen(false)}
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Midlothian, VA
                      </div>
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/pricing" className="text-[#374151] font-medium hover:text-[#1e40af] transition-colors">
                Pricing
              </Link>
              <Link href="/faq" className="text-[#374151] font-medium hover:text-[#1e40af] transition-colors">
                FAQ
              </Link>
              <Link href="#contact" className="text-[#374151] font-medium hover:text-[#1e40af] transition-colors">
                Contact
              </Link>
            </nav>
            <Button className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-semibold">
              Get Free Quote
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e40af]/90 to-[#dc2626]/90 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Professional Power Washing Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Transform your property with our expert power washing services in Richmond, VA. 
            From house washing to deck cleaning, we deliver exceptional results every time.
          </p>
          <Button size="lg" className="bg-[#dc2626] hover:bg-[#b91c1c] text-white text-lg px-8 py-4">
            Get Free Estimate
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#1e40af] mb-12">
            Our Power Washing Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="relative">
                    <img 
                      src={service.image} 
                    alt={`${service.title} services in Richmond VA`}
                    className="w-full h-48 object-cover rounded-t-lg"
                      loading="lazy"
                    />
                  <div className="absolute top-4 right-4 bg-[#dc2626] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {service.price}
                    </div>
                  </div>
                  <CardHeader>
                  <CardTitle className="text-2xl text-[#1e40af]">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#dc2626]" />
                        <span className="text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-[#1e40af] hover:bg-[#1e3a8a] text-white">
                      Get Quote
                    </Button>
                    <Button variant="outline" className="flex-1">
                        Learn More
                      </Button>
                  </div>
                  </CardContent>
                </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-[#f3f4f6]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#1e40af] mb-12">
            Why Choose Richmond Power Washing Pro?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white text-center p-6">
              <Shield className="w-12 h-12 text-[#dc2626] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#1e40af] mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed, bonded, and insured for your peace of mind.</p>
            </Card>
            <Card className="bg-white text-center p-6">
              <Award className="w-12 h-12 text-[#dc2626] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#1e40af] mb-2">10+ Years Experience</h3>
              <p className="text-gray-600">Over a decade of experience serving Richmond area.</p>
            </Card>
            <Card className="bg-white text-center p-6">
              <Clock className="w-12 h-12 text-[#dc2626] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#1e40af] mb-2">Same Day Service</h3>
              <p className="text-gray-600">Fast response times with same-day service available.</p>
            </Card>
            <Card className="bg-white text-center p-6">
              <Star className="w-12 h-12 text-[#dc2626] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#1e40af] mb-2">100% Satisfaction</h3>
              <p className="text-gray-600">We guarantee your complete satisfaction with our work.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#1e40af] mb-12">
            Our Simple 3-Step Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1e40af] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-[#1e40af] mb-2">Free Estimate</h3>
              <p className="text-gray-600">Call us for a free, no-obligation estimate. We'll assess your needs and provide transparent pricing.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1e40af] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-[#1e40af] mb-2">Schedule Service</h3>
              <p className="text-gray-600">Choose a convenient time for your power washing service. We work around your schedule.</p>
                </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1e40af] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
                </div>
              <h3 className="text-xl font-bold text-[#1e40af] mb-2">Enjoy Results</h3>
              <p className="text-gray-600">Sit back and watch your property transform. We guarantee you'll love the results!</p>
                </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#1e40af] to-[#dc2626] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Property?</h2>
          <p className="text-xl mb-8">
            Get your free estimate today and see why Richmond homeowners trust us with their power washing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#1e40af] hover:bg-gray-100 text-lg px-8 py-4">
              Get Free Estimate
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1e40af] text-lg px-8 py-4">
              Call (804) 555-0123
                </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1e40af] text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-[#dc2626] text-lg font-semibold mb-4">Richmond Power Washing Pro</h4>
              <p className="text-sm">
                Professional power washing services in Richmond, VA. Licensed, insured, and locally owned.
              </p>
            </div>
            <div>
              <h4 className="text-[#dc2626] text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services" className="hover:text-[#dc2626] transition-colors">House Washing</Link></li>
                <li><Link href="/services" className="hover:text-[#dc2626] transition-colors">Deck Cleaning</Link></li>
                <li><Link href="/services" className="hover:text-[#dc2626] transition-colors">Concrete Cleaning</Link></li>
                <li><Link href="/services" className="hover:text-[#dc2626] transition-colors">Roof Cleaning</Link></li>
                <li><Link href="/services" className="hover:text-[#dc2626] transition-colors">Gutter Cleaning</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#dc2626] text-lg font-semibold mb-4">Service Areas</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/richmond" className="hover:text-[#dc2626] transition-colors">Richmond, VA</Link></li>
                <li><Link href="/henrico" className="hover:text-[#dc2626] transition-colors">Henrico, VA</Link></li>
                <li><Link href="/chesterfield" className="hover:text-[#dc2626] transition-colors">Chesterfield, VA</Link></li>
                <li><Link href="/midlothian" className="hover:text-[#dc2626] transition-colors">Midlothian, VA</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#dc2626] text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>Phone: (804) 555-0123</li>
                <li>Email: info@richmondpowerwashpro.com</li>
                <li>Based in Richmond, VA</li>
                <li>Licensed & Insured</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-600 pt-6 text-center text-sm text-gray-400">
            <p>&copy; 2025 Richmond Power Washing Pro. All rights reserved. | <Link href="/privacy" className="hover:text-[#dc2626] transition-colors">Privacy Policy</Link> | <Link href="/terms" className="hover:text-[#dc2626] transition-colors">Terms of Service</Link></p>
          </div>
        </div>
      </footer>
    </div>
  );
}