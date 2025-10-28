"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, ChevronDown, MapPin, Menu, X } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const locationsDropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
      setIsServicesOpen(false);
    }
    if (locationsDropdownRef.current && !locationsDropdownRef.current.contains(event.target as Node)) {
      setIsLocationsOpen(false);
    }
    // Close mobile menu when clicking outside
    const target = event.target as HTMLElement;
    if (isMobileMenuOpen && !mobileMenuRef.current?.contains(target) && !target.closest('button[aria-label="Toggle mobile menu"]')) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside, { passive: true });
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldBeScrolled = scrollTop > 100;
      setIsScrolled(shouldBeScrolled);
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-[#1e40af] shadow-lg' : 'bg-transparent'
    }`} style={{ backgroundColor: isScrolled ? '#1e40af' : 'transparent' }}>
      <div className="w-full">
        <div className="flex justify-between items-center w-full px-4">
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image 
              src="/images/junk-goats-logo.png" 
              alt="Junk Goats Junk Removal" 
              width={200}
              height={60}
              className="h-16 w-auto"
              priority
            />
          </Link>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 z-50 relative"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <nav className="hidden md:flex gap-8">
            <div className="relative" ref={servicesDropdownRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`font-black uppercase tracking-wide transition-colors flex items-center gap-1 ${
                  isScrolled 
                    ? 'text-white hover:text-gray-200' 
                    : 'text-white hover:text-gray-200'
                }`}
              >
                SERVICES
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <Link 
                    href="/services/junk-removal" 
                    className="block px-4 py-2 text-[#374151] hover:bg-[#f3f4f6] hover:text-[#1e40af] transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Junk Removal
                  </Link>
                  <Link 
                    href="/services/furniture-removal" 
                    className="block px-4 py-2 text-[#374151] hover:bg-[#f3f4f6] hover:text-[#1e40af] transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Furniture Removal
                  </Link>
                  <Link 
                    href="/services/yard-waste" 
                    className="block px-4 py-2 text-[#374151] hover:bg-[#f3f4f6] hover:text-[#1e40af] transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Yard Waste Removal
                  </Link>
                  <Link 
                    href="/services/construction-debris" 
                    className="block px-4 py-2 text-[#374151] hover:bg-[#f3f4f6] hover:text-[#1e40af] transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Construction Debris
                  </Link>
                  <Link 
                    href="/services/appliance-removal" 
                    className="block px-4 py-2 text-[#374151] hover:bg-[#f3f4f6] hover:text-[#1e40af] transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Appliance Removal
                  </Link>
                  <Link 
                    href="/services/estate-cleanout" 
                    className="block px-4 py-2 text-[#374151] hover:bg-[#f3f4f6] hover:text-[#1e40af] transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Estate Cleanout
                  </Link>
                  <Link 
                    href="/services/commercial-cleanout" 
                    className="block px-4 py-2 text-[#374151] hover:bg-[#f3f4f6] hover:text-[#1e40af] transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Commercial Cleanout
                  </Link>
                  <Link 
                    href="/services/office-cleanout" 
                    className="block px-4 py-2 text-[#374151] hover:bg-[#f3f4f6] hover:text-[#1e40af] transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Office Cleanout
                  </Link>
                </div>
              )}
            </div>
            <div className="relative" ref={locationsDropdownRef}>
              <button
                onClick={() => setIsLocationsOpen(!isLocationsOpen)}
                className={`font-black uppercase tracking-wide transition-colors flex items-center gap-1 ${
                  isScrolled 
                    ? 'text-white hover:text-gray-200' 
                    : 'text-white hover:text-gray-200'
                }`}
              >
                SERVICE AREAS
                <ChevronDown className={`w-4 h-4 transition-transform ${isLocationsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isLocationsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 max-h-96 overflow-y-auto">
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
              <Link href="/how-it-works" className={`font-black uppercase tracking-wide transition-colors ${
              isScrolled 
                ? 'text-white hover:text-gray-200' 
                : 'text-white hover:text-gray-200'
            }`}>
              HOW IT WORKS
            </Link>
            <Link href="/contact" className={`font-black uppercase tracking-wide transition-colors ${
              isScrolled 
                ? 'text-white hover:text-gray-200' 
                : 'text-white hover:text-gray-200'
            }`}>
              CONTACT
            </Link>
          </nav>
          
          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div ref={mobileMenuRef} className="absolute top-full left-0 right-0 bg-[#1e40af] shadow-lg md:hidden z-40">
              <div className="px-4 py-6 space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto">
                {/* Mobile Services Dropdown */}
                <div>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="w-full text-left text-white font-black uppercase tracking-wide flex items-center justify-between py-2"
                  >
                    SERVICES
                    <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isServicesOpen && (
                    <div className="mt-2 space-y-2 pl-4">
                      <Link href="/services/junk-removal" className="block text-gray-200 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                        Junk Removal
                      </Link>
                      <Link href="/services/furniture-removal" className="block text-gray-200 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                        Furniture Removal
                      </Link>
                      <Link href="/services/yard-waste" className="block text-gray-200 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                        Yard Waste Removal
                      </Link>
                      <Link href="/services/construction-debris" className="block text-gray-200 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                        Construction Debris
                      </Link>
                      <Link href="/services/appliance-removal" className="block text-gray-200 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                        Appliance Removal
                      </Link>
                      <Link href="/services/estate-cleanout" className="block text-gray-200 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                        Estate Cleanout
                      </Link>
                      <Link href="/services/commercial-cleanout" className="block text-gray-200 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                        Commercial Cleanout
                      </Link>
                      <Link href="/services/office-cleanout" className="block text-gray-200 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                        Office Cleanout
                      </Link>
                    </div>
                  )}
                </div>

                {/* Mobile Service Areas Dropdown */}
                <div>
                  <button
                    onClick={() => setIsLocationsOpen(!isLocationsOpen)}
                    className="w-full text-left text-white font-black uppercase tracking-wide flex items-center justify-between py-2"
                  >
                    SERVICE AREAS
                    <ChevronDown className={`w-4 h-4 transition-transform ${isLocationsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isLocationsOpen && (
                    <div className="mt-2 space-y-2 pl-4">
                      <Link href="/richmond" className="block text-gray-200 hover:text-white py-1 flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                        <MapPin className="w-4 h-4" />
                        Richmond, VA
                      </Link>
                      <Link href="/henrico" className="block text-gray-200 hover:text-white py-1 flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                        <MapPin className="w-4 h-4" />
                        Henrico, VA
                      </Link>
                      <Link href="/chesterfield" className="block text-gray-200 hover:text-white py-1 flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                        <MapPin className="w-4 h-4" />
                        Chesterfield, VA
                      </Link>
                      <Link href="/midlothian" className="block text-gray-200 hover:text-white py-1 flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                        <MapPin className="w-4 h-4" />
                        Midlothian, VA
                      </Link>
                      <Link href="/mechanicsville" className="block text-gray-200 hover:text-white py-1 flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                        <MapPin className="w-4 h-4" />
                        Mechanicsville, VA
                      </Link>
                    </div>
                  )}
                </div>

                <Link href="/how-it-works" className="block text-white font-black uppercase tracking-wide py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  HOW IT WORKS
                </Link>
                <Link href="/contact" className="block text-white font-black uppercase tracking-wide py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  CONTACT
                </Link>
                
                {/* Mobile Contact Info */}
                <div className="pt-4 border-t border-gray-300">
                  <a href="tel:+18044947999" className="flex items-center gap-2 text-white font-black uppercase tracking-wide italic py-2">
                    <Phone className="w-5 h-5" />
                    (804) 494-7999
                  </a>
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-black uppercase tracking-wide italic mt-2">
                      FREE QUOTE
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
          
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+18044947999" className={`flex items-center gap-2 text-lg font-black uppercase tracking-wide italic transition-colors ${
              isScrolled 
                ? 'text-white hover:text-gray-200' 
                : 'text-white hover:text-gray-200'
            }`}>
              <div className="bg-[#dc2626] text-white p-2 rounded-full hover:bg-[#b91c1c] transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <span>(804) 494-7999</span>
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
