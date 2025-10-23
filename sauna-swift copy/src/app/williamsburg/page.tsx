"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, MapPin, Clock, Users, Star, Phone, Mail, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function WilliamsburgPage() {
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
              <Link href="/services" className="text-[#2d3e2d] font-medium hover:text-[#4a7c59] transition-colors">
                Services
              </Link>
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsLocationsOpen(!isLocationsOpen)}
                  className="text-[#4a7c59] font-medium flex items-center gap-1"
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
                      className="block px-4 py-2 text-[#4a7c59] bg-[#f5f1ed] font-medium"
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
            <Link href="/" className="text-[#4a7c59] font-medium hover:text-[#d4a574] transition-colors">
              ← Back to Home
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/richmond" className="text-[#2d3e2d] font-medium hover:text-[#4a7c59] transition-colors">Richmond</Link>
            <Link href="/charlottesville" className="text-[#2d3e2d] font-medium hover:text-[#4a7c59] transition-colors">Charlottesville</Link>
            <Link href="/fredericksburg" className="text-[#2d3e2d] font-medium hover:text-[#4a7c59] transition-colors">Fredericksburg</Link>
            <Link href="/williamsburg" className="text-[#4a7c59] font-semibold">Williamsburg</Link>
          </div>
        </div>
      </div>

      {/* Location Header */}
      <section className="bg-[#f5f1ed] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2d3e2d] mb-4">
            Sauna Rentals in Williamsburg, VA
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium mobile sauna experiences in America&apos;s historic triangle and colonial capital
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-[#4a7c59] mb-6">
                Mobile Sauna Rentals in Williamsburg
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Welcome to On-The-Go Saunas in Williamsburg, Virginia. This historic colonial capital, part of America&apos;s Historic Triangle, offers a unique blend of colonial history, modern amenities, and natural beauty. Whether you&apos;re exploring Colonial Williamsburg, visiting the College of William & Mary, or enjoying the area&apos;s many attractions, our mobile saunas bring authentic wellness experiences directly to your location.
              </p>

              <h3 className="text-2xl font-bold text-[#4a7c59] mb-4">
                Why Choose On-The-Go Saunas in Williamsburg?
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Williamsburg&apos;s rich colonial history and vibrant tourism industry make it an ideal location for unique wellness experiences. Our wood-burning saunas provide a perfect contrast to the historic setting while offering modern wellness benefits. We serve the entire Williamsburg area, from the historic district to the surrounding James City County.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#4a7c59] flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#4a7c59]">Historic triangle:</strong> Perfect for events at colonial venues and historic properties
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#4a7c59] flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#4a7c59]">Tourism ready:</strong> Great for resort events, destination weddings, and visitor experiences
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#4a7c59] flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#4a7c59]">College town:</strong> Perfect for William & Mary events, alumni gatherings, and campus activities
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#4a7c59] flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#4a7c59]">Resort destination:</strong> Ideal for luxury resorts, spas, and high-end accommodations
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#4a7c59] flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#4a7c59]">Family friendly:</strong> Great for family reunions, multi-generational gatherings, and special celebrations
                  </div>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-[#4a7c59] mb-4">
                Perfect for Williamsburg&apos;s Tourism Industry
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Williamsburg&apos;s thriving tourism industry attracts millions of visitors each year. Our sauna rentals are perfect for resort guests, destination wedding parties, corporate retreats, and special events that want to offer something unique and memorable. The combination of historic charm and modern wellness creates unforgettable experiences.
              </p>

              <h3 className="text-2xl font-bold text-[#4a7c59] mb-4">
                Colonial Venue Events
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Williamsburg&apos;s historic venues and colonial properties provide stunning backdrops for sauna experiences. Many of our clients book sauna rentals for weddings at historic estates, corporate events at colonial venues, or special celebrations that complement the area&apos;s rich historical character while adding a modern wellness element.
              </p>

              <h3 className="text-2xl font-bold text-[#4a7c59] mb-4">
                College & Corporate Events
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With the College of William & Mary and numerous businesses in the area, we frequently serve academic events, corporate retreats, and professional gatherings. Our saunas are perfect for team building, wellness programs, and unique event experiences that stand out in this historic and prestigious setting.
              </p>

              <Card className="bg-gradient-to-r from-[#4a7c59] to-[#6a9c79] text-white">
                <CardContent className="p-8 text-center">
                  <h2 className="text-3xl font-bold mb-4">Ready to Book Your Williamsburg Sauna Rental?</h2>
                  <p className="text-lg mb-6">Contact us today to check availability and book your sauna experience in America&apos;s historic triangle</p>
                  <Button className="bg-[#d4a574] hover:bg-[#c59460] text-white text-lg px-8 py-3">
                    Schedule Your Rental
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="bg-white shadow-lg sticky top-24">
                <CardHeader>
                  <CardTitle className="text-[#4a7c59] flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Williamsburg Service Area
                  </CardTitle>
                  <CardDescription>
                    We proudly serve Williamsburg and the surrounding James City County communities.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-[#4a7c59] font-semibold mb-3 flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Contact Us
                    </h4>
                    <p className="text-sm text-gray-600"><strong>Phone:</strong> (804) 555-0123</p>
                    <p className="text-sm text-gray-600"><strong>Email:</strong> info@onthegosaunas.com</p>
                  </div>

                  <div>
                    <h4 className="text-[#4a7c59] font-semibold mb-3 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Response Time
                    </h4>
                    <p className="text-sm text-gray-600">We typically respond to Williamsburg inquiries within 24 hours</p>
                  </div>

                  <div>
                    <h4 className="text-[#4a7c59] font-semibold mb-3 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Popular Services
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-[#4a7c59]" />
                        Destination Weddings
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-[#4a7c59]" />
                        Resort Events
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-[#4a7c59]" />
                        W&M Events
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-[#4a7c59]" />
                        Corporate Retreats
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[#4a7c59] font-semibold mb-3 flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Local Highlights
                    </h4>
                    <ul className="space-y-1 text-xs text-gray-600">
                      <li>• Colonial Williamsburg</li>
                      <li>• College of William & Mary</li>
                      <li>• Historic Triangle</li>
                      <li>• Luxury Resorts</li>
                      <li>• Historic Estates</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-[#f5f1ed]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#2d3e2d] mb-12">
            What Williamsburg Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-l-4 border-[#d4a574]">
              <CardContent className="p-6">
                <p className="text-gray-600 italic mb-4">
                  &quot;We rented a sauna for our destination wedding at a historic estate in Williamsburg and it was absolutely perfect. Our guests from all over the country loved the unique wellness experience.&quot;
                </p>
                <p className="font-semibold text-[#4a7c59]">— Amanda & Robert, Destination Wedding</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-l-4 border-[#d4a574]">
              <CardContent className="p-6">
                <p className="text-gray-600 italic mb-4">
                  &quot;The sauna was a huge hit at our William & Mary alumni reunion. It added such a unique element to our weekend and everyone had an amazing time.&quot;
                </p>
                <p className="font-semibold text-[#4a7c59]">— Dr. Mark Thompson, W&M Alumni</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-[#f5f1ed]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#2d3e2d] mb-12">
            Book Your Williamsburg Sauna Rental
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-to-r from-[#4a7c59] to-[#6a9c79] text-white text-center">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-4">Ready to Experience Colonial Wellness?</h3>
                <p className="text-lg mb-6">
                  Contact our Williamsburg team today. We&apos;ll help you choose the perfect sauna rental package for your needs in America&apos;s historic triangle.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-lg"><strong>📞 Call: (804) 555-0123</strong></p>
                  <p className="text-lg"><strong>📧 Email: info@onthegosaunas.com</strong></p>
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
              <h4 className="text-[#d4a574] text-lg font-semibold mb-4">Service Areas</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/richmond" className="hover:text-[#d4a574] transition-colors">Richmond, VA</Link></li>
                <li><Link href="/charlottesville" className="hover:text-[#d4a574] transition-colors">Charlottesville, VA</Link></li>
                <li><Link href="/fredericksburg" className="hover:text-[#d4a574] transition-colors">Fredericksburg, VA</Link></li>
                <li><Link href="/williamsburg" className="text-[#d4a574] font-medium">Williamsburg, VA</Link></li>
              </ul>
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
