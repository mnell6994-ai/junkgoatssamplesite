"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Mountain, Heart, Users, Star, ArrowLeft, ArrowRight, ChevronDown, MapPin } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function RetreatExperiencesPage() {
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

  const retreatTypes = [
    {
      title: "Wellness Retreats",
      description: "Transform your retreat center with authentic sauna experiences that enhance guest wellness journeys.",
      icon: Heart,
      features: ["Guest wellness", "Spa integration", "Relaxation focus", "Health benefits"]
    },
    {
      title: "Yoga & Meditation",
      description: "Perfect complement to yoga and meditation practices, enhancing mindfulness and inner peace.",
      icon: Mountain,
      features: ["Mindfulness practice", "Yoga integration", "Meditation support", "Spiritual wellness"]
    },
    {
      title: "Luxury Resorts",
      description: "Add premium wellness amenities to your luxury resort or destination property.",
      icon: Star,
      features: ["Luxury experience", "Guest amenities", "Premium service", "Destination appeal"]
    },
    {
      title: "Corporate Retreats",
      description: "Elevate corporate retreats with unique wellness experiences that boost team bonding.",
      icon: Users,
      features: ["Team building", "Executive wellness", "Unique experience", "Professional development"]
    }
  ];

  const packages = [
    {
      name: "Weekend Retreat",
      duration: "3 days",
      price: "$700",
      description: "Perfect for short wellness getaways and weekend retreats",
      features: ["Free consultation & coordination", "Full setup & detailed orientation", "3-day rental", "Complete setup", "Guest guidance", "Up to 20 guests", "Retreat coordination", "Up to 2 cold plunges included", "Ice for 4+ hours of cold plunge use"]
    },
    {
      name: "Week-Long Retreat",
      duration: "7 days",
      price: "$2,499",
      description: "Ideal for comprehensive wellness retreats and extended programs with multiple saunas",
      features: ["Free consultation & coordination", "Full setup & detailed orientation", "7-day rental", "Full coordination", "2 x 8-seater saunas", "Up to 4 cold plunges", "Unlimited guests", "Custom programming", "Staff training", "Best value", "Ice for 4+ hours of cold plunge use"]
    },
    {
      name: "Seasonal Program",
      duration: "3+ months",
      price: "Inquire",
      description: "Long-term partnership for ongoing retreat programs and wellness centers",
      features: ["Free consultation & coordination", "Full setup & detailed orientation", "Extended rental", "Full integration", "Custom protocols", "Volume discounts", "Dedicated support", "Flexible terms", "Up to 2 cold plunges included", "Ice for 4+ hours of cold plunge use"]
    }
  ];

  const testimonials = [
    {
      quote: "The sauna experience has become the highlight of our wellness retreats. Our guests absolutely love it and it&apos;s become a signature part of our program.",
      author: "Lisa Chen",
      organization: "Mountain View Wellness Retreat"
    },
    {
      quote: "Adding the sauna to our yoga retreat was a game-changer. It perfectly complements our mindfulness practices and our guests feel more centered and relaxed.",
      author: "David Rodriguez",
      organization: "Zen Garden Yoga Center"
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
            Retreat & Destination Experiences
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Transform your retreat center, resort, or destination property with authentic wellness experiences
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#4a7c59] mb-6">
                Elevate Your Retreat Experience
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our Retreat & Destination Experiences are designed for wellness centers, luxury resorts, yoga retreats, and destination properties. We help you create unforgettable wellness experiences that set your property apart and enhance guest satisfaction.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you&apos;re running a wellness retreat, luxury resort, or corporate retreat center, our mobile saunas add a unique wellness element that guests will remember long after they leave. We work with you to integrate sauna experiences seamlessly into your existing programs.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#4a7c59]">What&apos;s Included:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#4a7c59] flex-shrink-0" />
                    <span className="text-gray-600">Complete retreat integration and program coordination</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#4a7c59] flex-shrink-0" />
                    <span className="text-gray-600">Professional setup at your retreat location</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#4a7c59] flex-shrink-0" />
                    <span className="text-gray-600">Staff training on sauna operations and guest guidance</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#4a7c59] flex-shrink-0" />
                    <span className="text-gray-600">Custom programming to match your retreat themes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#4a7c59] flex-shrink-0" />
                    <span className="text-gray-600">Ongoing support and maintenance throughout your program</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <img 
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop" 
                alt="Retreat and destination sauna rental for wellness centers and luxury resorts"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* Retreat Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-[#2d3e2d] mb-12">
              Perfect for Any Retreat Setting
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {retreatTypes.map((retreat, index) => {
                const IconComponent = retreat.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-[#4a7c59]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-[#4a7c59]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#4a7c59] mb-3">{retreat.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{retreat.description}</p>
                      <ul className="space-y-1 text-xs text-gray-500">
                        {retreat.features.map((feature, featureIndex) => (
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
              Retreat Experience Packages
            </h2>
            <div className="text-center mb-8">
              <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
                Our retreat experience packages are designed to enhance any wellness retreat or spiritual gathering. From weekend getaways to 
                extended programs, we provide the perfect sauna experience to complement your retreat offerings.
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
              What Retreat Centers Say
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
                      <p className="text-sm text-gray-500">{testimonial.organization}</p>
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
                <h3 className="text-2xl font-bold text-[#4a7c59] mb-6 text-center">Why Choose On-The-Go Saunas for Your Retreat?</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#4a7c59]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-[#4a7c59]" />
                    </div>
                    <h4 className="text-lg font-bold text-[#4a7c59] mb-2">Unique Experience</h4>
                    <p className="text-gray-600 text-sm">Set your retreat apart with authentic sauna experiences that guests can&apos;t find elsewhere.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#4a7c59]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-[#4a7c59]" />
                    </div>
                    <h4 className="text-lg font-bold text-[#4a7c59] mb-2">Guest Satisfaction</h4>
                    <p className="text-gray-600 text-sm">Enhance guest experience and satisfaction with memorable wellness activities.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#4a7c59]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mountain className="w-8 h-8 text-[#4a7c59]" />
                    </div>
                    <h4 className="text-lg font-bold text-[#4a7c59] mb-2">Easy Integration</h4>
                    <p className="text-gray-600 text-sm">Seamlessly integrate sauna experiences into your existing retreat programs and schedules.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-[#4a7c59] to-[#6a9c79] text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Retreat Experience?</h2>
              <p className="text-lg mb-6">
                Contact us today to discuss how we can enhance your retreat center with authentic wellness experiences.
              </p>
              <Button className="bg-[#d4a574] hover:bg-[#c59460] text-white text-lg px-8 py-3">
                Plan Your Retreat Experience
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-[#f5f1ed]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#2d3e2d] mb-12">
            Questions About Retreat Experiences?
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-to-r from-[#4a7c59] to-[#6a9c79] text-white text-center">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-4">Get Started Today</h3>
                <p className="text-lg mb-6">
                  Our retreat experience team is ready to help you create unforgettable wellness programs.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-lg"><strong>📞 Call: (804) 555-0123</strong></p>
                  <p className="text-lg"><strong>📧 Email: retreats@onthegosaunas.com</strong></p>
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
                <li>Email: info@onthegosaunas.com</li>
                <li>Based in Richmond, VA</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-600 pt-6 text-center text-sm text-gray-400">
            <p>&copy; 2025 On-The-Go Saunas. All rights reserved. | <Link href="/privacy" className="hover:text-[#d4a574] transition-colors">Privacy Policy</Link> | <Link href="/terms" className="hover:text-[#d4a574] transition-colors">Terms of Service</Link></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
