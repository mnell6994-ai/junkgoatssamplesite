"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeaderWorking() {
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrollY > 100 ? 'bg-[#1e40af] shadow-lg' : 'bg-transparent'
    }`}>
      <div className="w-full flex justify-between items-center px-8 py-1">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/junk-goats-logo.png" 
            alt="Junk Goats Junk Removal" 
            width={200}
            height={60}
            className="h-16 w-auto"
            priority
          />
        </Link>
        
        <nav className="hidden md:flex gap-8">
          <div className="relative group">
            <button className="text-white font-black uppercase tracking-wide hover:text-gray-200 flex items-center gap-1">
              SERVICES
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link href="/services/junk-removal" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                Junk Removal
              </Link>
              <Link href="/services/furniture-removal" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                Furniture Removal
              </Link>
              <Link href="/services/estate-cleanout" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                Estate Cleanout
              </Link>
              <Link href="/services/construction-debris" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                Construction Debris
              </Link>
              <Link href="/services/appliance-removal" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                Appliance Removal
              </Link>
              <Link href="/services/yard-waste-removal" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                Yard Waste Removal
              </Link>
              <Link href="/services/commercial-cleanout" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                Commercial Cleanout
              </Link>
              <Link href="/services/office-cleanout" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                Office Cleanout
              </Link>
            </div>
          </div>
          
          <div className="relative group">
            <button className="text-white font-black uppercase tracking-wide hover:text-gray-200 flex items-center gap-1">
              SERVICE AREAS
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link href="/richmond" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                Richmond, VA
              </Link>
              <Link href="/henrico" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                Henrico, VA
              </Link>
              <Link href="/chesterfield" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                Chesterfield, VA
              </Link>
              <Link href="/midlothian" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                Midlothian, VA
              </Link>
              <Link href="/mechanicsville" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                Mechanicsville, VA
              </Link>
            </div>
          </div>
          
          <Link href="/how-it-works" className="text-white font-black uppercase tracking-wide hover:text-gray-200">
            HOW IT WORKS
          </Link>
          <Link href="/contact" className="text-white font-black uppercase tracking-wide hover:text-gray-200">
            CONTACT
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#1e40af] shadow-lg md:hidden z-40">
            <div className="px-4 py-6 space-y-2">
              {/* Services Dropdown */}
              <div>
                <button 
                  className="w-full text-left text-white font-black uppercase tracking-wide flex items-center justify-between py-2"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  SERVICES
                  <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isServicesOpen && (
                  <div className="mt-2 space-y-1 pl-4">
                    <Link href="/services/junk-removal" className="block text-gray-200 hover:text-white py-1 text-sm" onClick={() => setIsMobileMenuOpen(false)}>Junk Removal</Link>
                    <Link href="/services/furniture-removal" className="block text-gray-200 hover:text-white py-1 text-sm" onClick={() => setIsMobileMenuOpen(false)}>Furniture Removal</Link>
                    <Link href="/services/yard-waste-removal" className="block text-gray-200 hover:text-white py-1 text-sm" onClick={() => setIsMobileMenuOpen(false)}>Yard Waste</Link>
                    <Link href="/services/construction-debris" className="block text-gray-200 hover:text-white py-1 text-sm" onClick={() => setIsMobileMenuOpen(false)}>Construction Debris</Link>
                    <Link href="/services/appliance-removal" className="block text-gray-200 hover:text-white py-1 text-sm" onClick={() => setIsMobileMenuOpen(false)}>Appliance Removal</Link>
                    <Link href="/services/estate-cleanout" className="block text-gray-200 hover:text-white py-1 text-sm" onClick={() => setIsMobileMenuOpen(false)}>Estate Cleanout</Link>
                    <Link href="/services/commercial-cleanout" className="block text-gray-200 hover:text-white py-1 text-sm" onClick={() => setIsMobileMenuOpen(false)}>Commercial Cleanout</Link>
                    <Link href="/services/office-cleanout" className="block text-gray-200 hover:text-white py-1 text-sm" onClick={() => setIsMobileMenuOpen(false)}>Office Cleanout</Link>
                  </div>
                )}
              </div>
              
              {/* Service Areas Dropdown */}
              <div>
                <button 
                  className="w-full text-left text-white font-black uppercase tracking-wide flex items-center justify-between py-2"
                  onClick={() => setIsLocationsOpen(!isLocationsOpen)}
                >
                  SERVICE AREAS
                  <svg className={`w-4 h-4 transition-transform ${isLocationsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isLocationsOpen && (
                  <div className="mt-2 space-y-1 pl-4">
                    <Link href="/richmond" className="block text-gray-200 hover:text-white py-1 text-sm" onClick={() => setIsMobileMenuOpen(false)}>Richmond, VA</Link>
                    <Link href="/henrico" className="block text-gray-200 hover:text-white py-1 text-sm" onClick={() => setIsMobileMenuOpen(false)}>Henrico, VA</Link>
                    <Link href="/chesterfield" className="block text-gray-200 hover:text-white py-1 text-sm" onClick={() => setIsMobileMenuOpen(false)}>Chesterfield, VA</Link>
                    <Link href="/midlothian" className="block text-gray-200 hover:text-white py-1 text-sm" onClick={() => setIsMobileMenuOpen(false)}>Midlothian, VA</Link>
                    <Link href="/mechanicsville" className="block text-gray-200 hover:text-white py-1 text-sm" onClick={() => setIsMobileMenuOpen(false)}>Mechanicsville, VA</Link>
                  </div>
                )}
              </div>
              
              <Link href="/how-it-works" className="block text-white font-black uppercase py-2" onClick={() => setIsMobileMenuOpen(false)}>How It Works</Link>
              <Link href="/contact" className="block text-white font-black uppercase py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            </div>
          </div>
        )}
        
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+18044947999" className="flex items-center gap-2 text-white font-black uppercase tracking-wide italic">
            <div className="bg-[#dc2626] text-white p-2 rounded-full hover:bg-[#b91c1c] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <span>(804) 494-7999</span>
          </a>
          <Link href="/contact">
            <button className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-black uppercase tracking-wide italic px-4 py-2 rounded">
              FREE QUOTE
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
