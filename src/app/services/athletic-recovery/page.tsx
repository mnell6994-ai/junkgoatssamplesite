"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Dumbbell, Heart, Zap, Shield, ArrowLeft, ArrowRight, ChevronDown, MapPin } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function AthleticRecoveryPage() {
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
      title: "Muscle Recovery",
      description: "Heat therapy accelerates muscle recovery, reduces soreness, and improves flexibility after intense workouts.",
      icon: Dumbbell
    },
    {
      title: "Improved Circulation",
      description: "Sauna heat increases blood flow, delivering oxygen and nutrients to muscles for faster healing.",
      icon: Heart
    },
    {
      title: "Performance Enhancement",
      description: "Regular sauna use can improve endurance, strength, and overall athletic performance over time.",
      icon: Zap
    },
    {
      title: "Injury Prevention",
      description: "Heat therapy helps maintain muscle flexibility and reduces the risk of sports-related injuries.",
      icon: Shield
    }
  ];

  const programs = [
    {
      name: "Post-Workout Recovery",
      duration: "2-4 hours",
      price: "$550",
      description: "Perfect for immediate post-training recovery sessions",
      features: ["Free consultation & coordination", "Full setup & detailed orientation", "2-4 hour rental", "Setup & removal", "Athlete guidance", "Up to 8 athletes", "Recovery protocols", "Up to 2 cold plunges included", "Ice for 4+ hours of cold plunge use"]
    },
    {
      name: "Training Facility Package",
      duration: "Weekly",
      price: "$1,299",
      description: "Ideal for gyms and training centers offering recovery services with multiple saunas",
      features: ["Free consultation & coordination", "Full setup & detailed orientation", "7-day rental", "Complete setup", "Staff training", "2 x 8-seater saunas", "Up to 4 cold plunges", "Unlimited athletes", "Recovery protocols", "Best value", "Ice for 4+ hours of cold plunge use"]
    },
    {
      name: "Athletic Team Program",
      duration: "Seasonal",
      price: "Inquire",
      description: "Comprehensive recovery program for sports teams and athletic organizations",
      features: ["Free consultation & coordination", "Full setup & detailed orientation", "Season-long access", "Team scheduling", "Custom protocols", "Volume discounts", "Dedicated support", "Up to 2 cold plunges included", "Ice for 4+ hours of cold plunge use"]
    }
  ];

  const testimonials = [
    {
      quote: "The sauna has been a game-changer for our team&apos;s recovery. We&apos;ve seen significant improvements in muscle soreness and overall performance since adding it to our training facility.",
      author: "Coach Mike Thompson",
      organization: "Elite Fitness Training"
    },
    {
      quote: "As a competitive athlete, recovery is crucial. The sauna sessions have helped me bounce back faster between training sessions and competitions.",
      author: "Sarah Martinez",
      organization: "Professional Runner"
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
            Recovery & Athletic Programs
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Optimize athletic performance with proven sauna recovery therapy for athletes and fitness enthusiasts
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#4a7c59] mb-6">
                Elevate Your Athletic Performance
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our Athletic Recovery Programs are designed specifically for athletes, fitness enthusiasts, and training facilities. Heat therapy has been scientifically proven to accelerate muscle recovery, improve circulation, and enhance overall athletic performance.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you&apos;re a professional athlete, weekend warrior, or fitness facility owner, our mobile saunas provide the perfect recovery solution. We work with individual athletes, sports teams, gyms, and training centers to implement effective recovery protocols.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#4a7c59]">What&apos;s Included:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#4a7c59] flex-shrink-0" />
                    <span className="text-gray-600">Athlete-specific recovery protocols and guidance</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#4a7c59] flex-shrink-0" />
                    <span className="text-gray-600">Professional setup at training facilities or venues</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#4a7c59] flex-shrink-0" />
                    <span className="text-gray-600">Staff training on proper sauna use for athletes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#4a7c59] flex-shrink-0" />
                    <span className="text-gray-600">Flexible scheduling around training and competition schedules</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#4a7c59] flex-shrink-0" />
                    <span className="text-gray-600">Performance tracking and recovery optimization</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop" 
                alt="Athletic recovery sauna rental for muscle recovery and performance optimization"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-[#2d3e2d] mb-12">
              Athletic Recovery Benefits
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

          {/* Programs */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-[#2d3e2d] mb-12">
              Athletic Recovery Programs
            </h2>
            <div className="text-center mb-8">
              <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
                Our athletic recovery programs are designed to help athletes perform at their peak. From post-workout recovery to 
                training facility partnerships, we provide the tools athletes need to recover faster and train harder.
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
              What Athletes & Coaches Say
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

          {/* Science Section */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-[#f5f1ed] to-[#e8f5e8]">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#4a7c59] mb-6 text-center">The Science of Athletic Recovery</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#4a7c59]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-[#4a7c59]" />
                    </div>
                    <h4 className="text-lg font-bold text-[#4a7c59] mb-2">Blood Flow</h4>
                    <p className="text-gray-600 text-sm">Heat increases circulation by up to 40%, delivering oxygen and nutrients to muscles.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#4a7c59]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-[#4a7c59]" />
                    </div>
                    <h4 className="text-lg font-bold text-[#4a7c59] mb-2">Muscle Relaxation</h4>
                    <p className="text-gray-600 text-sm">Heat therapy reduces muscle tension and improves flexibility for better performance.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#4a7c59]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-[#4a7c59]" />
                    </div>
                    <h4 className="text-lg font-bold text-[#4a7c59] mb-2">Injury Prevention</h4>
                    <p className="text-gray-600 text-sm">Regular heat therapy helps maintain muscle health and reduces injury risk.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-[#4a7c59] to-[#6a9c79] text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Athletic Performance?</h2>
              <p className="text-lg mb-6">
                Contact us today to discuss how our athletic recovery programs can enhance your training and performance.
              </p>
              <Button className="bg-[#d4a574] hover:bg-[#c59460] text-white text-lg px-8 py-3">
                Start Your Recovery Program
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-[#f5f1ed]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#2d3e2d] mb-12">
            Questions About Athletic Recovery?
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-to-r from-[#4a7c59] to-[#6a9c79] text-white text-center">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-4">Get Started Today</h3>
                <p className="text-lg mb-6">
                  Our athletic recovery team is ready to help you optimize your performance and recovery.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-lg"><strong>📞 Call: (804) 555-0123</strong></p>
                  <p className="text-lg"><strong>📧 Email: athletes@onthegosaunas.com</strong></p>
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
