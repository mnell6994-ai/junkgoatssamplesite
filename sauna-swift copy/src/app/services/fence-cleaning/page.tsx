import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Star, Clock, Shield, Award, Phone, Mail } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import dynamic from "next/dynamic";

// Lazy load components
const ContactFormSimple = dynamic(() => import("@/components/contact-form-simple"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>
});

export const metadata = {
  title: "Fence Cleaning Richmond VA | Professional Fence Pressure Washing & Staining",
  description: "Professional fence cleaning services in Richmond, VA. Fence pressure washing, staining, sealing, and restoration. Restore your fence to like-new condition. Free estimates!",
  keywords: "fence cleaning Richmond VA, fence pressure washing Richmond, fence staining Richmond, fence restoration Richmond, fence sealing Richmond, wood fence cleaning Richmond"
};

export default function FenceCleaningPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <Header />

      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        <Image
          src="/images/pressure washing fence.jpg"
          alt="Professional fence cleaning services in Richmond Virginia"
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
                FENCE CLEANING
              </span>
              <br />
              IN RICHMOND, VA
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-semibold">
              Restore your fence to its original beauty with our professional fence cleaning service. We provide pressure washing, staining, sealing, and complete fence restoration for all fence types.
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

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-5xl font-black text-center mb-12 uppercase tracking-tight">
            <span className="text-[#1e40af]">FENCE CLEANING</span>{" "}
            <span className="text-[#FFA500] italic">SERVICES</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <Image
                  src="/images/pressure washing fence.jpg"
                  alt="Wood Fence Cleaning Richmond"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#dc2626] mb-3">Wood Fence Cleaning</h3>
                  <p className="text-gray-600 mb-4">
                    Professional pressure washing for wood fences to remove dirt, grime, mold, and restore natural beauty.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Safe pressure settings
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Mold and mildew removal
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Wood-safe cleaning
                    </li>
                  </ul>
                  <Button className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-black uppercase tracking-wide italic">
                    FREE QUOTE
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <Image
                  src="/images/pressure washing fence.jpg"
                  alt="Vinyl Fence Cleaning Richmond"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#dc2626] mb-3">Vinyl Fence Cleaning</h3>
                  <p className="text-gray-600 mb-4">
                    Specialized cleaning for vinyl fences to remove stains, dirt, and restore the bright white appearance.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Stain removal
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Bright white restoration
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Vinyl-safe solutions
                    </li>
                  </ul>
                  <Button className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-black uppercase tracking-wide italic">
                    FREE QUOTE
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <Image
                  src="/images/pressure washing fence.jpg"
                  alt="Fence Staining Richmond"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#dc2626] mb-3">Fence Staining</h3>
                  <p className="text-gray-600 mb-4">
                    Professional fence staining to protect and enhance the appearance of your wood fence.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Premium stain products
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Color matching
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      UV protection
                    </li>
                  </ul>
                  <Button className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-black uppercase tracking-wide italic">
                    FREE QUOTE
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl font-black uppercase tracking-tight">
                <span className="text-[#1e40af]">WHY CHOOSE OUR</span>{" "}
                <span className="text-[#FFA500] italic">FENCE CLEANING</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#dc2626] rounded-full p-2 flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">All Fence Types</h3>
                    <p className="text-gray-600">We clean and restore all types of fences including wood, vinyl, aluminum, and chain link.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#dc2626] rounded-full p-2 flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Complete Restoration</h3>
                    <p className="text-gray-600">From cleaning to staining and sealing, we provide complete fence restoration services.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#dc2626] rounded-full p-2 flex-shrink-0">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Safe Cleaning Methods</h3>
                    <p className="text-gray-600">We use the right pressure and techniques to clean your fence without causing damage.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#dc2626] rounded-full p-2 flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Extends Fence Life</h3>
                    <p className="text-gray-600">Regular cleaning and maintenance can extend your fence's life by many years.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative w-full h-96">
              <Image
                src="/images/pressure washing fence.jpg"
                alt="Fence Cleaning Richmond"
                fill
                className="object-cover rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-5xl font-black text-center mb-12 uppercase tracking-tight">
            <span className="text-[#1e40af]">READY TO RESTORE</span>{" "}
            <span className="text-[#FFA500] italic">YOUR FENCE?</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <ContactFormSimple />
            </div>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-[#1e40af] mb-4">Fence Cleaning Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Restores fence to like-new condition</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Removes harmful mold and mildew</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Extends fence lifespan significantly</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Improves property appearance</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Increases home value and curb appeal</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-[#1e40af] to-[#dc2626] text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Schedule Your Fence Cleaning</h3>
                <p className="text-lg mb-6">
                  Transform your property with professional fence cleaning. Contact us today for a free estimate.
                </p>
                <div className="flex items-center gap-3 text-lg font-semibold">
                  <Phone className="w-6 h-6" />
                  <span>(804) 555-0123</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

