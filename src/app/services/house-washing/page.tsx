import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Star, Clock, Shield, Award, Phone, Mail } from "lucide-react";
import Header from "@/components/header";
import dynamic from "next/dynamic";

// Lazy load components
const ContactFormSimple = dynamic(() => import("@/components/contact-form-simple"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>
});

export const metadata = {
  title: "House Washing Richmond VA | Professional Exterior Cleaning Services",
  description: "Professional house washing services in Richmond, VA. Soft washing for siding, brick, stucco, and vinyl. Mold removal, gutter cleaning included. Free estimates!",
  keywords: "house washing Richmond VA, exterior house cleaning Richmond, soft washing Richmond, siding cleaning Richmond, brick cleaning Richmond, stucco cleaning Richmond, vinyl cleaning Richmond, mold removal Richmond"
};

export default function HouseWashingPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <Header />

      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        <Image
          src="/images/powerwashing deck.jpg"
          alt="Professional house washing services in Richmond Virginia"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={75}
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight uppercase tracking-tight">
              PROFESSIONAL{" "}
              <span className="inline-block font-black text-6xl lg:text-8xl text-[#FFA500]" style={{ 
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
              }}>
                HOUSE WASHING
              </span>
              <br />
              IN RICHMOND, VA
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-semibold">
              Transform your home's exterior with our expert house washing services. We use soft washing techniques that are safe for all siding types while delivering exceptional results.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xl px-8 py-4 font-black uppercase tracking-wide italic">
              Get Free Estimate
            </Button>
            <Button size="lg" className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white text-xl px-8 py-4 font-black uppercase tracking-wide italic">
              CALL (804) 555-0123
            </Button>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#1e40af] mb-12">
            What's Included in Our House Washing Service
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-[#1e40af]">Soft Washing Technique</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We use low-pressure soft washing that's safe for all siding types including vinyl, brick, stucco, and wood.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#dc2626]" />
                    <span className="text-sm">Safe for all materials</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#dc2626]" />
                    <span className="text-sm">Eco-friendly solutions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-[#1e40af]">Mold & Mildew Removal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Specialized treatment to remove mold, mildew, and algae that can damage your home's exterior.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#dc2626]" />
                    <span className="text-sm">Prevents future growth</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#dc2626]" />
                    <span className="text-sm">Long-lasting results</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-[#1e40af]">Gutter Cleaning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Complete gutter cleaning and inspection to ensure proper water flow and prevent damage.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#dc2626]" />
                    <span className="text-sm">Debris removal</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#dc2626]" />
                    <span className="text-sm">Downspout cleaning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-[#1e40af]">Window Cleaning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Optional window cleaning service for a complete exterior transformation.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#dc2626]" />
                    <span className="text-sm">Streak-free finish</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#dc2626]" />
                    <span className="text-sm">Frame cleaning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-[#1e40af]">Walkway Cleaning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Clean and brighten your walkways and entry areas for a complete curb appeal makeover.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#dc2626]" />
                    <span className="text-sm">Concrete cleaning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#dc2626]" />
                    <span className="text-sm">Stain removal</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-[#1e40af]">Protection Treatment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Optional protective treatment to help prevent future dirt and grime buildup.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#dc2626]" />
                    <span className="text-sm">Long-lasting protection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#dc2626]" />
                    <span className="text-sm">Easy maintenance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-[#f3f4f6]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#1e40af] mb-12">
            Our House Washing Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1e40af] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-[#1e40af] mb-2">Inspection</h3>
              <p className="text-gray-600">We inspect your home's exterior to identify problem areas and determine the best cleaning approach.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1e40af] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-[#1e40af] mb-2">Preparation</h3>
              <p className="text-gray-600">We protect plants, outdoor furniture, and delicate areas before beginning the cleaning process.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1e40af] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-[#1e40af] mb-2">Soft Washing</h3>
              <p className="text-gray-600">We apply eco-friendly cleaning solutions and use low-pressure washing for safe, effective cleaning.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1e40af] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-[#1e40af] mb-2">Final Inspection</h3>
              <p className="text-gray-600">We do a final walkthrough to ensure every area meets our high standards before cleanup.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#1e40af] mb-12">
            House Washing Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-[#dc2626]">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1e40af]">Small Home</CardTitle>
                <div className="text-4xl font-bold text-[#dc2626] my-4">$200-300</div>
                <p className="text-gray-600">Up to 1,500 sq ft</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6 text-left">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#dc2626]" />
                    <span className="text-sm">Soft washing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#dc2626]" />
                    <span className="text-sm">Gutter cleaning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#dc2626]" />
                    <span className="text-sm">Walkway cleaning</span>
                  </li>
                </ul>
                <Button className="w-full bg-[#1e40af] hover:bg-[#1e3a8a] text-white">
                  Get Quote
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white text-center hover:shadow-lg transition-all duration-300 border-2 border-[#dc2626]">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1e40af]">Medium Home</CardTitle>
                <div className="text-4xl font-bold text-[#dc2626] my-4">$300-500</div>
                <p className="text-gray-600">1,500-2,500 sq ft</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6 text-left">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#dc2626]" />
                    <span className="text-sm">Soft washing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#dc2626]" />
                    <span className="text-sm">Gutter cleaning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#dc2626]" />
                    <span className="text-sm">Walkway cleaning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#dc2626]" />
                    <span className="text-sm">Window cleaning</span>
                  </li>
                </ul>
                <Button className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white">
                  Get Quote
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-[#dc2626]">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1e40af]">Large Home</CardTitle>
                <div className="text-4xl font-bold text-[#dc2626] my-4">$500+</div>
                <p className="text-gray-600">2,500+ sq ft</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6 text-left">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#dc2626]" />
                    <span className="text-sm">Soft washing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#dc2626]" />
                    <span className="text-sm">Gutter cleaning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#dc2626]" />
                    <span className="text-sm">Walkway cleaning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#dc2626]" />
                    <span className="text-sm">Window cleaning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#dc2626]" />
                    <span className="text-sm">Protection treatment</span>
                  </li>
                </ul>
                <Button className="w-full bg-[#1e40af] hover:bg-[#1e3a8a] text-white">
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          </div>
          <p className="text-center mt-8 text-gray-600">
            All prices include free estimates. <Link href="/pricing" className="text-[#1e40af] font-semibold">View complete pricing →</Link>
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#1e40af] to-[#dc2626] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Home?</h2>
          <p className="text-xl mb-8">
            Get your free house washing estimate today and see the difference professional cleaning can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#1e40af] hover:bg-gray-100 text-lg px-8 py-4">
              Get Free Estimate
            </Button>
            <Button size="lg" className="bg-[#FFA500] hover:bg-[#FF8C00] text-white text-lg px-8 py-4 font-black uppercase tracking-wide italic">
              CALL (804) 555-0123
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#1e40af] to-[#dc2626] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-[#FFA500] text-xl font-black mb-4 uppercase tracking-tight">RICHMOND POWER WASHING PRO</h4>
              <p className="text-lg text-gray-200 mb-4">
                Professional power washing services in Richmond, VA. Licensed, insured, and locally owned.
              </p>
              <div className="flex items-center gap-2 mb-2">
                <Phone className="w-5 h-5 text-[#FFA500]" />
                <span className="text-lg font-semibold">(804) 555-0123</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Mail className="w-5 h-5 text-[#FFA500]" />
                <span className="text-lg">info@richmondpowerwashpro.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#FFA500]" />
                <span className="text-lg">Mon-Sat: 7AM-7PM</span>
              </div>
            </div>
            <div>
              <h4 className="text-[#FFA500] text-xl font-black mb-6 uppercase tracking-tight">SERVICES</h4>
              <ul className="space-y-3 text-lg">
                <li><Link href="/services/house-washing" className="hover:text-[#FFA500] transition-colors font-semibold">House Washing</Link></li>
                <li><Link href="/services/deck-fence-cleaning" className="hover:text-[#FFA500] transition-colors font-semibold">Deck Cleaning</Link></li>
                <li><Link href="/services/concrete-cleaning" className="hover:text-[#FFA500] transition-colors font-semibold">Concrete Cleaning</Link></li>
                <li><Link href="/services/roof-cleaning" className="hover:text-[#FFA500] transition-colors font-semibold">Roof Cleaning</Link></li>
                <li><Link href="/services/gutter-cleaning" className="hover:text-[#FFA500] transition-colors font-semibold">Gutter Cleaning</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#FFA500] text-xl font-black mb-6 uppercase tracking-tight">SERVICE AREAS</h4>
              <ul className="space-y-3 text-lg">
                <li><Link href="/richmond" className="hover:text-[#FFA500] transition-colors font-semibold">Richmond, VA</Link></li>
                <li><Link href="/henrico" className="hover:text-[#FFA500] transition-colors font-semibold">Henrico, VA</Link></li>
                <li><Link href="/chesterfield" className="hover:text-[#FFA500] transition-colors font-semibold">Chesterfield, VA</Link></li>
                <li><Link href="/midlothian" className="hover:text-[#FFA500] transition-colors font-semibold">Midlothian, VA</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#FFA500] text-xl font-black mb-6 uppercase tracking-tight">WHY CHOOSE US</h4>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Licensed & Insured</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>10+ Years Experience</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Free Estimates</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>100% Satisfaction</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-lg text-gray-200 mb-4">
              Ready to <span className="text-[#FFA500] italic font-bold">TRANSFORM</span> your property?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" className="bg-white text-[#1e40af] hover:bg-gray-100 text-lg px-8 py-3 font-black uppercase tracking-wide italic">
                GET FREE ESTIMATE
              </Button>
              <Button size="lg" className="bg-[#FFA500] hover:bg-[#FF8C00] text-white text-lg px-8 py-3 font-black uppercase tracking-wide italic">
                CALL (804) 555-0123
              </Button>
            </div>
            <p className="text-sm text-gray-400">
              &copy; 2025 Richmond Power Washing Pro. All rights reserved. | 
              <Link href="/privacy" className="hover:text-[#FFA500] transition-colors ml-1">Privacy Policy</Link> | 
              <Link href="/terms" className="hover:text-[#FFA500] transition-colors ml-1">Terms of Service</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}


