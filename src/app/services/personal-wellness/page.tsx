"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Home, Clock, Heart, Shield, ArrowLeft, ArrowRight, ChevronDown, MapPin } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function PersonalWellnessPage() {
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

  const benefits = [
    {
      title: "Stress Relief & Relaxation",
      description: "Regular sauna use helps reduce cortisol levels and promotes deep relaxation after a long day.",
      icon: Heart
    },
    {
      title: "Muscle Recovery",
      description: "Heat therapy accelerates muscle recovery, reduces soreness, and improves flexibility.",
      icon: Shield
    },
    {
      title: "Improved Sleep",
      description: "Sauna sessions before bed can help regulate your sleep cycle and improve sleep quality.",
      icon: Clock
    },
    {
      title: "Detoxification",
      description: "Sweating helps eliminate toxins and supports your body&apos;s natural detoxification processes.",
      icon: Home
    }
  ];

  const packages = [
    {
      name: "Personal Wellness & Full Day Event",
      duration: "8 hours",
      price: "$550",
      description: "Complete wellness experience for personal use or small gatherings",
      features: [
        "Free consultation & coordination",
        "Full setup & detailed orientation",
        "Wood for full duration",
        "Free delivery & pickup",
        "Up to 2 cold plunges included",
        "Ice for 4+ hours of cold plunge use",
        "Optional on-site support staff/contrast therapy coach"
      ]
    },
    {
      name: "Personal Wellness Weekend",
      duration: "3 days",
      price: "$700",
      description: "Ideal for intimate gatherings and extended wellness programs",
      features: [
        "Free consultation & coordination",
        "Full setup & detailed orientation",
        "Wood for full duration",
        "Free delivery & pickup",
        "Up to 2 cold plunges included",
        "Ice for 4+ hours of cold plunge use",
        "Perfect for intimate gatherings"
      ]
    },
    {
      name: "Personal Wellness 7-Day",
      duration: "7 days",
      price: "$1,350",
      description: "Extended wellness experience for comprehensive recovery and intimate gatherings",
      features: [
        "Free consultation & coordination",
        "Full setup & detailed orientation",
        "Wood for full duration",
        "Free delivery & pickup",
        "Up to 2 cold plunges included",
        "Ice for 4+ hours of cold plunge use",
        "Perfect for intimate gatherings",
        "Extended wellness experience"
      ]
    },
    {
      name: "Extended Wellness",
      duration: "2+ weeks",
      price: "Custom",
      description: "For those committed to long-term wellness goals",
      features: [
        "Free consultation & coordination",
        "Full setup & detailed orientation",
        "Custom duration",
        "Flexible scheduling",
        "Priority support",
        "Volume discounts",
        "Up to 2 cold plunges included",
        "Ice for 4+ hours of cold plunge use"
      ]
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
            Personal Wellness Rentals
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Bring authentic sauna therapy to your home for stress relief, muscle recovery, and overall wellness
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#4a7c59] mb-6">
                Transform Your Home into a Wellness Sanctuary
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our Personal Wellness Rentals bring the authentic sauna experience directly to your home. Whether you&apos;re looking to establish a regular wellness routine, recover from intense workouts, or simply unwind after a stressful day, our wood-burning saunas provide the perfect solution.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Unlike electric saunas, our traditional wood-burning saunas offer a more authentic experience with better heat distribution and the therapeutic benefits of natural wood-fired heat. We handle all the logistics—delivery, setup, safety checks, and removal—so you can focus on your wellness journey.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#4a7c59]">What&apos;s Included:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#4a7c59] flex-shrink-0" />
                    <span className="text-gray-600">Professional delivery to your home</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#4a7c59] flex-shrink-0" />
                    <span className="text-gray-600">Complete setup and safety inspection</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#4a7c59] flex-shrink-0" />
                    <span className="text-gray-600">Detailed user instructions and safety guidelines</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#4a7c59] flex-shrink-0" />
                    <span className="text-gray-600">24/7 support during your rental period</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#4a7c59] flex-shrink-0" />
                    <span className="text-gray-600">Complete removal and cleanup</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <img 
                src="https://images.unsplash.com/photo-1544367567-0d27e6ffb351?w=600&h=400&fit=crop" 
                alt="Personal wellness sauna rental at home for stress relief and muscle recovery"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* Health Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-[#2d3e2d] mb-12">
              Health Benefits of Personal Sauna Use
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-[#4a7c59]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-[#4a7c59]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#4a7c59] mb-3">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Packages */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-[#2d3e2d] mb-12">
              Personal Wellness Packages
            </h2>
            <div className="text-center mb-8">
              <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
                We offer flexible personal wellness packages designed to support your individual wellness journey. 
                From single-day experiences to extended programs, we provide the perfect solution for your needs.
              </p>
              <Link href="/pricing" className="inline-block">
                <Button className="bg-[#4a7c59] hover:bg-[#6a9c79] text-white text-lg px-8 py-3">
                  View All Pricing Options
                </Button>
              </Link>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-[#2d3e2d] mb-12">
              How Personal Wellness Rentals Work
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#4a7c59] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-bold text-[#4a7c59] mb-2">Contact Us</h3>
                <p className="text-gray-600 text-sm">Call or email us with your preferred dates and location details</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#4a7c59] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-bold text-[#4a7c59] mb-2">We Deliver</h3>
                <p className="text-gray-600 text-sm">Our team delivers and sets up your sauna at your home</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#4a7c59] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-bold text-[#4a7c59] mb-2">Enjoy Wellness</h3>
                <p className="text-gray-600 text-sm">Use your sauna for relaxation, recovery, and wellness</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#4a7c59] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-bold text-[#4a7c59] mb-2">We Pick Up</h3>
                <p className="text-gray-600 text-sm">We return to remove the sauna and clean up</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-[#4a7c59] to-[#6a9c79] text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Wellness Journey?</h2>
              <p className="text-lg mb-6">
                Contact us today to book your personal wellness sauna rental and experience the benefits of authentic sauna therapy at home.
              </p>
              <Button className="bg-[#d4a574] hover:bg-[#c59460] text-white text-lg px-8 py-3">
                Book Your Wellness Rental
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-[#f5f1ed]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#2d3e2d] mb-12">
            Questions About Personal Wellness Rentals?
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-to-r from-[#4a7c59] to-[#6a9c79] text-white text-center">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-4">Get Started Today</h3>
                <p className="text-lg mb-6">
                  Our team is here to help you choose the perfect personal wellness package for your needs.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-lg"><strong>📞 Call: (804) 555-0123</strong></p>
                  <p className="text-lg"><strong>📧 Email: info@saunaswift.com</strong></p>
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
