"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Building2, Users, TrendingUp, Award, ArrowLeft, ArrowRight, ChevronDown, MapPin } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function CorporateWellnessPage() {
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
      title: "Employee Morale Boost",
      description: "Show your team you care about their wellbeing with unique wellness experiences that boost morale and job satisfaction.",
      icon: Users
    },
    {
      title: "Team Building",
      description: "Sauna sessions create natural bonding opportunities and help break down workplace barriers in a relaxed environment.",
      icon: Building2
    },
    {
      title: "Stress Reduction",
      description: "Help employees manage workplace stress with proven relaxation techniques that improve focus and productivity.",
      icon: TrendingUp
    },
    {
      title: "Recognition & Rewards",
      description: "Use sauna experiences as unique rewards for high performers or team achievements.",
      icon: Award
    }
  ];

  const programs = [
    {
      name: "Wellness Day",
      duration: "Half Day",
      price: "$550",
      description: "Perfect for introducing employees to sauna wellness",
      features: ["Free consultation & coordination", "Full setup & detailed orientation", "4-hour event", "Setup & removal", "Staff guidance", "Up to 20 employees", "Refreshments included", "Up to 2 cold plunges included", "Ice for 4+ hours of cold plunge use"]
    },
    {
      name: "Executive Retreat",
      duration: "Full Day",
      price: "$1,299",
      description: "Comprehensive wellness experience for leadership teams with multiple saunas",
      features: ["Free consultation & coordination", "Full setup & detailed orientation", "8-hour event", "Complete setup", "Professional coordination", "2 x 8-seater saunas", "Up to 4 cold plunges", "Up to 15 executives", "Catering options", "Team building activities", "Ice for 4+ hours of cold plunge use"]
    },
    {
      name: "Corporate & Custom Programs",
      duration: "Multi-Day",
      price: "Inquire",
      description: "Ongoing wellness initiative tailored to your organization&apos;s needs",
      features: ["Free consultation & coordination", "Full setup & detailed orientation", "Regular sessions", "Flexible scheduling", "Volume discounts", "Custom programming", "Wellness metrics", "Employee feedback", "Up to 2 cold plunges included", "Ice for 4+ hours of cold plunge use"]
    }
  ];

  const testimonials = [
    {
      quote: "The sauna experience was incredible for our team. It was a unique way to show appreciation and everyone loved it. We&apos;ll definitely be booking again.",
      author: "Sarah Johnson, HR Director",
      company: "Tech Solutions Inc."
    },
    {
      quote: "Our executive retreat with SaunaSwift was transformative. The team bonding that happened in the sauna was unlike anything we&apos;ve experienced before.",
      author: "Michael Chen, CEO",
      company: "Innovation Labs"
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
            Corporate Wellness Programs
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Elevate your employee wellness initiatives with unique sauna experiences that boost morale and team building
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#4a7c59] mb-6">
                Transform Your Workplace Culture
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our Corporate Wellness Programs offer a unique way to invest in your employees&apos; wellbeing while fostering team building and company culture. In today&apos;s competitive business environment, companies that prioritize employee wellness see higher retention rates, improved productivity, and stronger team cohesion.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our mobile sauna experiences create memorable moments that employees will talk about for months. Whether it&apos;s a wellness day, executive retreat, or ongoing wellness program, we provide a complete solution that requires no effort from your team—just enjoyment and relaxation.
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
                    <span className="text-gray-600">Staff guidance and safety supervision</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#4a7c59] flex-shrink-0" />
                    <span className="text-gray-600">Flexible scheduling to fit your business needs</span>
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
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                alt="Corporate wellness sauna rental for employee team building and wellness programs"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-[#2d3e2d] mb-12">
              Why Corporate Wellness Matters
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
              Corporate Wellness Programs
            </h2>
            <div className="text-center mb-8">
              <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
                Our corporate wellness programs are designed to boost employee morale, reduce stress, and improve overall workplace wellness. 
                We offer flexible solutions that can be tailored to your organization&apos;s specific needs and budget.
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
              What Corporate Clients Say
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
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* ROI Section */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-[#f5f1ed] to-[#e8f5e8]">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-[#4a7c59] mb-4">ROI of Corporate Wellness</h3>
                    <p className="text-gray-600 mb-4">
                      Companies that invest in employee wellness see measurable returns through improved productivity, reduced healthcare costs, and higher employee retention.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-[#4a7c59]" />
                        <span className="text-gray-600">25% reduction in healthcare costs</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-[#4a7c59]" />
                        <span className="text-gray-600">40% improvement in employee satisfaction</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-[#4a7c59]" />
                        <span className="text-gray-600">30% reduction in sick days</span>
                      </li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <div className="text-6xl font-bold text-[#4a7c59] mb-2">3:1</div>
                    <p className="text-lg text-gray-600">Average ROI for wellness programs</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-[#4a7c59] to-[#6a9c79] text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Invest in Your Team&apos;s Wellness?</h2>
              <p className="text-lg mb-6">
                Contact us today to discuss how our corporate wellness programs can benefit your organization and boost employee morale.
              </p>
              <Button className="bg-[#d4a574] hover:bg-[#c59460] text-white text-lg px-8 py-3">
                Schedule a Consultation
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-[#f5f1ed]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#2d3e2d] mb-12">
            Questions About Corporate Wellness?
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-to-r from-[#4a7c59] to-[#6a9c79] text-white text-center">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-4">Get Started Today</h3>
                <p className="text-lg mb-6">
                  Our corporate wellness team is ready to help you create the perfect program for your organization.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-lg"><strong>📞 Call: (804) 555-0123</strong></p>
                  <p className="text-lg"><strong>📧 Email: corporate@saunaswift.com</strong></p>
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
