"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Calendar, Heart, Users, Star, ArrowLeft, ArrowRight, ChevronDown, MapPin } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function EventRentalsPage() {
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLocationsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const eventTypes = [
    {
      title: "Wedding Celebrations",
      description: "Add a unique wellness element to your special day with pre-wedding relaxation or post-ceremony celebration.",
      icon: Heart,
      features: ["Pre-wedding relaxation", "Bridal party bonding", "Guest experience", "Photo opportunities"]
    },
    {
      title: "Birthday Parties",
      description: "Create unforgettable birthday experiences with wellness-focused celebrations for any age.",
      icon: Star,
      features: ["Unique party theme", "Group bonding", "Memorable experience", "Health-focused celebration"]
    },
    {
      title: "Bachelor/Bachelorette",
      description: "Elevate your pre-wedding celebrations with a unique wellness experience that everyone will remember.",
      icon: Users,
      features: ["Group activities", "Unique experience", "Photo opportunities", "Bonding time"]
    },
    {
      title: "Corporate Events",
      description: "Enhance your corporate gatherings with wellness experiences that boost team morale and engagement.",
      icon: Calendar,
      features: ["Team building", "Employee appreciation", "Unique venue", "Wellness focus"]
    }
  ];

  const packages = [
    {
      name: "Personal Wellness Weekend",
      duration: "3 days",
      price: "$700",
      description: "Ideal for intimate gatherings and small celebrations",
      features: ["Free consultation & coordination", "Full setup & detailed orientation", "3-day rental", "Staff guidance", "Up to 15 guests", "Basic refreshments", "Up to 2 cold plunges included", "Ice for 4+ hours of cold plunge use"]
    },
    {
      name: "Full Day Event",
      duration: "8 hours",
      price: "$1,299",
      description: "Ideal for larger celebrations with multiple saunas and cold plunges",
      features: ["Free consultation & coordination", "Full setup & detailed orientation", "8-hour rental", "Event coordination", "2 x 8-seater saunas", "Up to 4 cold plunges", "Up to 30 guests", "Catering options", "Photo opportunities", "Ice for 4+ hours of cold plunge use"]
    },
    {
      name: "Multi-Day Celebration",
      duration: "2-3 days",
      price: "$2,499",
      description: "Perfect for destination events and extended celebrations with multiple saunas",
      features: ["Free consultation & coordination", "Full setup & detailed orientation", "Extended rental", "Full coordination", "2 x 8-seater saunas", "Up to 4 cold plunges", "Custom programming", "Unlimited guests", "Premium service", "Flexible scheduling", "Ice for 4+ hours of cold plunge use"]
    }
  ];

  const testimonials = [
    {
      quote: "The sauna was the highlight of our wedding weekend! Our guests are still talking about it months later. It was such a unique and memorable experience.",
      author: "Emily & David",
      event: "Wedding Celebration"
    },
    {
      quote: "Best birthday party ever! The sauna experience was so much fun and different from anything we&apos;ve done before. Everyone loved it!",
      author: "Jessica M.",
      event: "30th Birthday Party"
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-[#4a7c59]">
              🌲 On-The-Go Saunas
            </Link>
            <nav className="hidden md:flex gap-8">
              <Link href="/" className="text-[#2d3e2d] font-medium hover:text-[#4a7c59] transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-[#4a7c59] font-medium">
                Services
              </Link>
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsLocationsOpen(!isLocationsOpen)}
                  className="text-[#2d3e2d] font-medium hover:text-[#4a7c59] transition-colors flex items-center gap-1"
                >
                  Locations
                  <ChevronDown className={`w-4 h-4 transition-transform ${isLocationsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isLocationsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <Link 
                      href="/richmond" 
                      className="block px-4 py-2 text-[#2d3e2d] hover:bg-[#f5f1ed] hover:text-[#4a7c59] transition-colors"
                      onClick={() => setIsLocationsOpen(false)}
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Richmond, VA
                      </div>
                    </Link>
                    <Link 
                      href="/charlottesville" 
                      className="block px-4 py-2 text-[#2d3e2d] hover:bg-[#f5f1ed] hover:text-[#4a7c59] transition-colors"
                      onClick={() => setIsLocationsOpen(false)}
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Charlottesville, VA
                      </div>
                    </Link>
                    <Link 
                      href="/fredericksburg" 
                      className="block px-4 py-2 text-[#2d3e2d] hover:bg-[#f5f1ed] hover:text-[#4a7c59] transition-colors"
                      onClick={() => setIsLocationsOpen(false)}
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Fredericksburg, VA
                      </div>
                    </Link>
                    <Link 
                      href="/williamsburg" 
                      className="block px-4 py-2 text-[#2d3e2d] hover:bg-[#f5f1ed] hover:text-[#4a7c59] transition-colors"
                      onClick={() => setIsLocationsOpen(false)}
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Williamsburg, VA
                      </div>
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/pricing" className="text-[#2d3e2d] font-medium hover:text-[#4a7c59] transition-colors">
                Pricing
              </Link>
              <Link href="/faq" className="text-[#2d3e2d] font-medium hover:text-[#4a7c59] transition-colors">
                FAQ
              </Link>
            </nav>
            <Button className="bg-[#d4a574] hover:bg-[#c59460] text-white font-semibold">
              Book Now
            </Button>
          </div>
        </div>
      </header>

      {/* Page Navigation */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 text-sm">
            <Link href="/services" className="text-[#4a7c59] font-medium hover:text-[#d4a574] transition-colors flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/services" className="text-[#2d3e2d] font-medium hover:text-[#4a7c59] transition-colors">All Services</Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#4a7c59]/90 to-[#d4a574]/90 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Event & Party Rentals
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Create unforgettable wellness experiences for your special occasions and celebrations
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#4a7c59] mb-6">
                Make Your Event Unforgettable
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Transform your special occasions with our unique sauna rental experiences. Whether it&apos;s a wedding, birthday party, corporate event, or any celebration, our mobile saunas add an unforgettable wellness element that your guests will be talking about for years to come.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our event rentals are perfect for creating memorable moments, unique photo opportunities, and bonding experiences that bring people together in a relaxed, natural environment. We handle all the logistics so you can focus on celebrating.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#4a7c59]">What&apos;s Included:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#4a7c59] flex-shrink-0" />
                    <span className="text-gray-600">Complete event coordination and planning</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#4a7c59] flex-shrink-0" />
                    <span className="text-gray-600">Professional setup and safety protocols</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#4a7c59] flex-shrink-0" />
                    <span className="text-gray-600">Staff guidance and guest assistance</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#4a7c59] flex-shrink-0" />
                    <span className="text-gray-600">Flexible scheduling to fit your event timeline</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#4a7c59] flex-shrink-0" />
                    <span className="text-gray-600">Complete cleanup and removal</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <img 
                src="https://images.unsplash.com/photo-1519671482677-a0fbb3d23e2d?w=600&h=400&fit=crop" 
                alt="Event and party sauna rental for weddings, celebrations, and special occasions"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* Event Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-[#2d3e2d] mb-12">
              Perfect for Any Celebration
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {eventTypes.map((event, index) => {
                const IconComponent = event.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-[#4a7c59]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-[#4a7c59]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#4a7c59] mb-3">{event.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                      <ul className="space-y-1 text-xs text-gray-500">
                        {event.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-1">
                            <Check className="w-3 h-3 text-[#4a7c59] flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Packages */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-[#2d3e2d] mb-12">
              Event Rental Packages
            </h2>
            <div className="text-center mb-8">
              <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
                Our event rental packages are designed to make your celebration unforgettable. From intimate gatherings to large parties, 
                we provide everything you need to create a unique and memorable experience for your guests.
              </p>
              <Link href="/pricing" className="inline-block">
                <Button className="bg-[#4a7c59] hover:bg-[#6a9c79] text-white text-lg px-8 py-3">
                  View All Pricing Options
                </Button>
              </Link>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-[#2d3e2d] mb-12">
              What Event Hosts Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white border-l-4 border-[#d4a574]">
                  <CardContent className="p-6">
                    <p className="text-gray-600 italic mb-4 text-lg">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <div>
                      <p className="font-semibold text-[#4a7c59]">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.event}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-[#f5f1ed] to-[#e8f5e8]">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#4a7c59] mb-6 text-center">Why Choose SaunaSwift for Your Event?</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#4a7c59]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-[#4a7c59]" />
                    </div>
                    <h4 className="text-lg font-bold text-[#4a7c59] mb-2">Unique Experience</h4>
                    <p className="text-gray-600 text-sm">Stand out with a one-of-a-kind wellness experience your guests will never forget.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#4a7c59]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-[#4a7c59]" />
                    </div>
                    <h4 className="text-lg font-bold text-[#4a7c59] mb-2">Guest Bonding</h4>
                    <p className="text-gray-600 text-sm">Create natural opportunities for guests to connect and bond in a relaxed environment.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#4a7c59]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-8 h-8 text-[#4a7c59]" />
                    </div>
                    <h4 className="text-lg font-bold text-[#4a7c59] mb-2">Easy Planning</h4>
                    <p className="text-gray-600 text-sm">We handle all the logistics so you can focus on enjoying your special day.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-[#4a7c59] to-[#6a9c79] text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Make Your Event Unforgettable?</h2>
              <p className="text-lg mb-6">
                Contact us today to discuss how we can add a unique wellness experience to your special celebration.
              </p>
              <Button className="bg-[#d4a574] hover:bg-[#c59460] text-white text-lg px-8 py-3">
                Plan Your Event
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-[#f5f1ed]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#2d3e2d] mb-12">
            Questions About Event Rentals?
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-to-r from-[#4a7c59] to-[#6a9c79] text-white text-center">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-4">Get Started Today</h3>
                <p className="text-lg mb-6">
                  Our event planning team is ready to help you create the perfect celebration experience.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-lg"><strong>📞 Call: (804) 555-0123</strong></p>
                  <p className="text-lg"><strong>📧 Email: events@saunaswift.com</strong></p>
                </div>
                <Button className="bg-[#d4a574] hover:bg-[#c59460] text-white text-lg px-8 py-3">
                  Send Inquiry
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2d3e2d] text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-[#d4a574] text-lg font-semibold mb-4">On-The-Go Saunas</h4>
              <p className="text-sm">
                Premium mobile sauna rentals throughout Virginia. Wellness delivered to your door.
              </p>
            </div>
            <div>
              <h4 className="text-[#d4a574] text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:text-[#d4a574] transition-colors">Home</Link></li>
                <li><Link href="/services" className="hover:text-[#d4a574] transition-colors">Services</Link></li>
                <li><Link href="/pricing" className="hover:text-[#d4a574] transition-colors">Pricing</Link></li>
                <li><Link href="/faq" className="hover:text-[#d4a574] transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#d4a574] text-lg font-semibold mb-4">Service Areas</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/richmond" className="hover:text-[#d4a574] transition-colors">Richmond, VA</Link></li>
                <li><Link href="/charlottesville" className="hover:text-[#d4a574] transition-colors">Charlottesville, VA</Link></li>
                <li><Link href="/fredericksburg" className="hover:text-[#d4a574] transition-colors">Fredericksburg, VA</Link></li>
                <li><Link href="/williamsburg" className="hover:text-[#d4a574] transition-colors">Williamsburg, VA</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#d4a574] text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>Phone: (804) 555-0123</li>
                <li>Email: info@saunaswift.com</li>
                <li>Based in Richmond, VA</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-600 pt-6 text-center text-sm text-gray-400">
            <p>&copy; 2025 SaunaSwift. All rights reserved. | <Link href="/privacy" className="hover:text-[#d4a574] transition-colors">Privacy Policy</Link> | <Link href="/terms" className="hover:text-[#d4a574] transition-colors">Terms of Service</Link></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
