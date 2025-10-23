"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, MapPin, Clock, Users, Star, Phone, Mail, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function CharlottesvillePage() {
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
                      className="block px-4 py-2 text-[#4a7c59] bg-[#f5f1ed] font-medium"
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
            <Link href="/" className="text-[#4a7c59] font-medium hover:text-[#d4a574] transition-colors">
              ← Back to Home
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/richmond" className="text-[#2d3e2d] font-medium hover:text-[#4a7c59] transition-colors">Richmond</Link>
            <Link href="/charlottesville" className="text-[#4a7c59] font-semibold">Charlottesville</Link>
            <Link href="/fredericksburg" className="text-[#2d3e2d] font-medium hover:text-[#4a7c59] transition-colors">Fredericksburg</Link>
            <Link href="/williamsburg" className="text-[#2d3e2d] font-medium hover:text-[#4a7c59] transition-colors">Williamsburg</Link>
          </div>
        </div>
      </div>

      {/* Location Header */}
      <section className="bg-[#f5f1ed] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2d3e2d] mb-4">
            Sauna Rentals in Charlottesville, VA
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium mobile sauna experiences in the heart of Virginia&apos;s wine country and historic charm
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-[#4a7c59] mb-6">
                Mobile Sauna Rentals in Charlottesville
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Welcome to On-The-Go Saunas in Charlottesville, Virginia. Nestled in the heart of Virginia&apos;s wine country and surrounded by the beautiful Blue Ridge Mountains, Charlottesville offers the perfect backdrop for authentic wellness experiences. Whether you&apos;re a local resident, visiting the University of Virginia, or exploring the historic downtown, our mobile saunas bring the ultimate relaxation experience directly to your location.
              </p>

              <h3 className="text-2xl font-bold text-[#4a7c59] mb-4">
                Why Choose On-The-Go Saunas in Charlottesville?
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Charlottesville&apos;s unique blend of historic charm, natural beauty, and vibrant community makes it an ideal location for wellness experiences. Our wood-burning saunas complement the area&apos;s natural surroundings and provide the perfect way to unwind after exploring Monticello, hiking the Blue Ridge Parkway, or enjoying the local wineries.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#4a7c59] flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#4a7c59]">Local expertise:</strong> We know Charlottesville&apos;s neighborhoods, from downtown to the surrounding countryside
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#4a7c59] flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#4a7c59]">Wine country ready:</strong> Perfect for post-winery relaxation and vineyard events
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#4a7c59] flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#4a7c59]">University friendly:</strong> Great for UVA events, alumni gatherings, and student wellness programs
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#4a7c59] flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#4a7c59]">Historic charm:</strong> Authentic experiences that complement Charlottesville&apos;s rich history
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#4a7c59] flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#4a7c59]">Mountain backdrop:</strong> Sauna experiences enhanced by the beautiful Blue Ridge Mountains
                  </div>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-[#4a7c59] mb-4">
                Perfect for Charlottesville&apos;s Lifestyle
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Charlottesville residents and visitors enjoy an active, wellness-focused lifestyle. Our sauna rentals are perfect for post-hiking recovery after exploring the Blue Ridge Mountains, relaxation after wine tasting at local vineyards, or wellness events at the University of Virginia. The natural setting of Charlottesville makes our wood-burning saunas feel right at home.
              </p>

              <h3 className="text-2xl font-bold text-[#4a7c59] mb-4">
                Wine Country Wellness
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Charlottesville&apos;s wine country provides the perfect setting for wellness experiences. Many of our clients book sauna rentals for vineyard events, wine tasting weekends, or as a unique addition to their wine country retreats. The combination of fine wine and authentic sauna therapy creates an unforgettable experience.
              </p>

              <h3 className="text-2xl font-bold text-[#4a7c59] mb-4">
                University & Corporate Events
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With the University of Virginia as a major presence in Charlottesville, we frequently serve academic events, alumni gatherings, and corporate retreats. Our saunas are perfect for team building, wellness programs, and unique event experiences that stand out from typical corporate activities.
              </p>

              <Card className="bg-gradient-to-r from-[#4a7c59] to-[#6a9c79] text-white">
                <CardContent className="p-8 text-center">
                  <h2 className="text-3xl font-bold mb-4">Ready to Book Your Charlottesville Sauna Rental?</h2>
                  <p className="text-lg mb-6">Contact us today to check availability and book your sauna experience in the heart of Virginia&apos;s wine country</p>
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
                    Charlottesville Service Area
                  </CardTitle>
                  <CardDescription>
                    We proudly serve Charlottesville and the surrounding Central Virginia communities.
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
                    <p className="text-sm text-gray-600">We typically respond to Charlottesville inquiries within 24 hours</p>
                  </div>

                  <div>
                    <h4 className="text-[#4a7c59] font-semibold mb-3 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Popular Services
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-[#4a7c59]" />
                        Wine Country Events
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-[#4a7c59]" />
                        UVA Events
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-[#4a7c59]" />
                        Corporate Retreats
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-[#4a7c59]" />
                        Wellness Programs
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[#4a7c59] font-semibold mb-3 flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Local Highlights
                    </h4>
                    <ul className="space-y-1 text-xs text-gray-600">
                      <li>• University of Virginia</li>
                      <li>• Monticello</li>
                      <li>• Blue Ridge Mountains</li>
                      <li>• Wine Country</li>
                      <li>• Historic Downtown</li>
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
            What Charlottesville Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-l-4 border-[#d4a574]">
              <CardContent className="p-6">
                <p className="text-gray-600 italic mb-4">
                  &quot;We rented a sauna for our vineyard&apos;s harvest celebration and it was absolutely perfect. Our guests loved the unique wellness experience after wine tasting.&quot;
                </p>
                <p className="font-semibold text-[#4a7c59]">— Sarah M., Local Vineyard Owner</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-l-4 border-[#d4a574]">
              <CardContent className="p-6">
                <p className="text-gray-600 italic mb-4">
                  &quot;The sauna was a huge hit at our UVA alumni weekend. It was such a unique addition to our event and everyone is still talking about it.&quot;
                </p>
                <p className="font-semibold text-[#4a7c59]">— Dr. James R., UVA Alumni</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-[#f5f1ed]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#2d3e2d] mb-12">
            Book Your Charlottesville Sauna Rental
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-to-r from-[#4a7c59] to-[#6a9c79] text-white text-center">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-4">Ready to Experience Wine Country Wellness?</h3>
                <p className="text-lg mb-6">
                  Contact our Charlottesville team today. We&apos;ll help you choose the perfect sauna rental package for your needs in the heart of Virginia&apos;s wine country.
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
                <li><Link href="/charlottesville" className="text-[#d4a574] font-medium">Charlottesville, VA</Link></li>
                <li><Link href="/fredericksburg" className="hover:text-[#d4a574] transition-colors">Fredericksburg, VA</Link></li>
                <li><Link href="/williamsburg" className="hover:text-[#d4a574] transition-colors">Williamsburg, VA</Link></li>
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
