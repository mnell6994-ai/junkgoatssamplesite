"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Phone, Clock, CreditCard, Truck, User } from "lucide-react";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";
import ContactFormSimple from "@/components/contact-form-simple";
import GoogleReviewsCarousel from "@/components/google-reviews-carousel";
import { useState, useEffect } from "react";

export default function HowItWorks() {
  const [scrollY, setScrollY] = useState(0);

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
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Header */}
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
          <button className="md:hidden text-white p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
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
      
      {/* Hero Section */}
      <section className="relative text-white py-12 overflow-hidden">
        <Image
          src="/images/junk-removal-richmond-va01.jpg"
          alt="How Junk Goats Junk Removal Works"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={75}
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto max-w-6xl relative z-10 flex flex-col items-center justify-center min-h-[30vh] text-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-black text-white mb-8 leading-tight uppercase tracking-tight">
              <span className="text-[#dc2626]">HOW IT WORKS</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-semibold text-white">
              Our simple, stress-free junk removal process in 3 easy steps
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1e40af] mb-6 uppercase tracking-tight">
              How does the <span className="text-[#dc2626]">Junk Goats</span> Junk Removal process work?
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Junk Goats is committed to providing an easy, and stress free junk removal process from start to finish. Our process involves <span className="font-bold text-[#dc2626]">3 Easy Steps</span>.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-shrink-0">
                <div className="bg-[#1e40af] text-white text-4xl md:text-6xl font-black rounded-full w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mx-auto mb-6">
                  1
                </div>
              </div>
              <div className="flex-1">
                <Card className="bg-white shadow-lg border-l-4 border-l-[#dc2626]">
                  <CardHeader>
                    <CardTitle className="text-2xl md:text-3xl font-bold text-[#1e40af] mb-4 uppercase tracking-tight">
                      Initial Call & Scheduling
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      During the initial call, our friendly customer service team will get your basic details, find out what you need removed, and work with you to schedule a convenient, <span className="font-semibold text-[#dc2626]">2 hour time window</span> for our team to come out.
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                      <Phone className="w-5 h-5 text-[#dc2626]" />
                      <span className="text-gray-600">Friendly customer service</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="flex-shrink-0">
                <div className="bg-[#1e40af] text-white text-4xl md:text-6xl font-black rounded-full w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mx-auto mb-6">
                  2
                </div>
              </div>
              <div className="flex-1">
                <Card className="bg-white shadow-lg border-l-4 border-l-[#dc2626]">
                  <CardHeader>
                    <CardTitle className="text-2xl md:text-3xl font-bold text-[#1e40af] mb-4 uppercase tracking-tight">
                      Service Day & Quote
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      On the day of service, the Junk Goats team will contact you when they are headed your way, typically <span className="font-semibold text-[#dc2626]">30 minutes in advance</span>. After arriving on time, within our two hour time window, the junk removal specialists will look at what you need removed, provide you a final, <span className="font-semibold text-[#dc2626]">no obligation quote</span>.
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                      <Clock className="w-5 h-5 text-[#dc2626]" />
                      <span className="text-gray-600">30-minute advance notice</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-shrink-0">
                <div className="bg-[#1e40af] text-white text-4xl md:text-6xl font-black rounded-full w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mx-auto mb-6">
                  3
                </div>
              </div>
              <div className="flex-1">
                <Card className="bg-white shadow-lg border-l-4 border-l-[#dc2626]">
                  <CardHeader>
                    <CardTitle className="text-2xl md:text-3xl font-bold text-[#1e40af] mb-4 uppercase tracking-tight">
                      Removal & Payment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      After you approve of the quote, our team will get to work then and there and have your junk loaded and ready to go in no time. Once our team loads all items, and thoroughly cleans up the site, we will take payment. Junk Goats accepts <span className="font-semibold text-[#dc2626]">all forms of payment</span>, whether it be card, check or cash. After taking payment, we will be off, leaving your property clean and junk free.
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                      <CreditCard className="w-5 h-5 text-[#dc2626]" />
                      <span className="text-gray-600">All payment methods accepted</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>




          {/* Free Quote Button */}
          <div className="mt-20 text-center">
            <Link href="/contact">
            <Button size="lg" className="bg-[#dc2626] hover:bg-[#b91c1c] text-white text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 font-black uppercase tracking-wide">
              FREE QUOTE
            </Button>
            </Link>
          </div>

          {/* FAQ Section */}
          <div className="mt-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1e40af] mb-8 text-center">Frequently Asked Questions</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <h4 className="text-lg md:text-xl font-bold text-[#dc2626] mb-4">How much does junk removal cost?</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Junk removal costs vary depending on what you and how much need removed. We price our junk removal services based on the space your items take up in our trailer. Our trailer can hold roughly 7 pick-up trucks worth of material, equivalent to 15 cubic yards. Our prices range from a minimum charge, up to our full load price with 12 price points in between.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    We will always give you a firm, no obligation quote after arriving and seeing the items you need removed in person. After getting your approval of the quote, we proceed with the job right then and there. If you decide not to proceed after getting your final quote, no worries. We leave and you don't owe us a thing!
                  </p>
                  <p className="text-sm text-gray-600 mt-4 italic">
                    Certain materials such as dirt, concrete, tile, and roofing may be priced separately due to the weight of the items.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <h4 className="text-lg md:text-xl font-bold text-[#dc2626] mb-4">What areas does Junk Goats service?</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Junk Goats services all of Central Virginia. We service Richmond, Henrico, Chesterfield, Hanover, Amelia, Chester, Goochland, Louisa, Powhatan, and Midlothian. Not sure if we service your area? We travel farther for larger jobs such as estate clean outs. Give us a call to see if we can service your area!
                  </p>
                  <h5 className="text-base md:text-lg font-semibold text-[#1e40af] mb-2">Service Areas:</h5>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {["Richmond", "Henrico", "Chesterfield", "Hanover", "Amelia", "Chester", "Goochland", "Louisa", "Powhatan", "Midlothian"].map((area) => (
                      <div key={area} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#dc2626]" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <h4 className="text-lg md:text-xl font-bold text-[#dc2626] mb-4">What if my items are in good condition?</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Sometimes, our clients need items removed that aren't necessarily "junk". Whether it be lightly used furniture that's getting replaced, or left behind during a move, used appliances, or other lightly used items that don't deserve to be sent to a landfill, Junk Goats will take these lightly used items to a donation center of your choice.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Junk Goats strives to repurpose all that we can. We will even provide you with the donation receipts upon request for your tax write offs.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <h4 className="text-lg md:text-xl font-bold text-[#dc2626] mb-4">Respecting Your Home Every Step of the Way</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Our professional and affable staff in the junk removal service Richmond believes that being invited into your home is a privilege – one that we do not take lightly at all.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    When removing items from your attic or upper level crawlspace, every precaution is taken to prevent any damage to your property or our employees. When calculating the firm, free, and no obligation estimate, we also like to take note of the space itself and any possible hazards that could be in the way of removing your junk.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-[#dc2626] mb-4">Junk Got Your Goat?</h3>
              <p className="text-xl text-gray-600 mb-8">
                Have questions? Comments? Suggestions? Fill out our form or give us a call! We'd love to hear from you.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Also, feel free to check out some of our frequently asked questions above.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left side - Google Reviews */}
              <div className="space-y-6">
                <div className="text-center">
                  <Image
                    src="/images/google-five-star-rating.png"
                    alt="Google Five Star Rating"
                    width={200}
                    height={60}
                    className="mx-auto mb-6"
                  />
                </div>
                <GoogleReviewsCarousel />
              </div>
              
              {/* Right side - Contact Form */}
              <div>
                <ContactFormSimple />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
