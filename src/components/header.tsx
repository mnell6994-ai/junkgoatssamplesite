"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, ChevronDown, MapPin } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const locationsDropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
      setIsServicesOpen(false);
    }
    if (locationsDropdownRef.current && !locationsDropdownRef.current.contains(event.target as Node)) {
      setIsLocationsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside, { passive: true });
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="w-full">
        <div className="flex justify-between items-center w-full pl-4 pr-4">
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/Logo_3-removebg-preview.png" 
              alt="Richmond Power Washing Pro" 
              width={800}
              height={192}
              className="h-16 w-auto"
              priority
              quality={90}
            />
          </Link>
          <nav className="hidden md:flex gap-8">
            <div className="relative" ref={servicesDropdownRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-[#1e40af] font-black uppercase tracking-wide hover:text-[#dc2626] transition-colors flex items-center gap-1"
              >
                SERVICES
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
                    href="/services/deck-cleaning" 
                    className="block px-4 py-2 text-[#374151] hover:bg-[#f3f4f6] hover:text-[#1e40af] transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    🪵 Deck Cleaning
                  </Link>
                  <Link 
                    href="/services/fence-cleaning" 
                    className="block px-4 py-2 text-[#374151] hover:bg-[#f3f4f6] hover:text-[#1e40af] transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    🚧 Fence Cleaning
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
                className="text-[#1e40af] font-black uppercase tracking-wide hover:text-[#dc2626] transition-colors flex items-center gap-1"
              >
                SERVICE AREAS
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
                  <Link 
                    href="/mechanicsville" 
                    className="block px-4 py-2 text-[#374151] hover:bg-[#f3f4f6] hover:text-[#1e40af] transition-colors"
                    onClick={() => setIsLocationsOpen(false)}
                  >
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Mechanicsville, VA
                    </div>
                  </Link>
                </div>
              )}
            </div>
            <Link href="/faq" className="text-[#1e40af] font-black uppercase tracking-wide hover:text-[#dc2626] transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="text-[#1e40af] font-black uppercase tracking-wide hover:text-[#dc2626] transition-colors">
              CONTACT
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <a href="tel:+18045550123" className="flex items-center gap-2 text-lg text-[#1e40af] font-black uppercase tracking-wide italic hover:text-[#dc2626] transition-colors">
              <div className="bg-[#dc2626] text-white p-2 rounded-full hover:bg-[#b91c1c] transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <span>(804) 555-0123</span>
            </a>
            <Link href="/contact">
              <Button className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-black uppercase tracking-wide italic">
                FREE QUOTE
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
