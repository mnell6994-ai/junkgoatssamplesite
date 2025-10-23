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
  title: "Concrete Cleaning Richmond VA | Professional Driveway & Patio Cleaning",
  description: "Professional concrete cleaning services in Richmond, VA. Driveway cleaning, patio cleaning, sidewalk cleaning with oil stain removal. Free estimates!",
  keywords: "concrete cleaning Richmond VA, driveway cleaning Richmond, patio cleaning Richmond, sidewalk cleaning Richmond, oil stain removal Richmond, pressure washing concrete Richmond"
};

export default function ConcreteCleaningPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <Header />

      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        <Image
          src="/images/Pressure washing concrete 2 - commercial.jpg"
          alt="Professional concrete cleaning services in Richmond Virginia"
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
                CONCRETE CLEANING
              </span>
              <br />
              IN RICHMOND, VA
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-semibold">
              Transform your driveway, patio, and sidewalks with our professional concrete cleaning service. We remove oil stains, dirt, and grime to restore your concrete surfaces to like-new condition.
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
            <span className="text-[#1e40af]">CONCRETE CLEANING</span>{" "}
            <span className="text-[#FFA500] italic">SERVICES</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <Image
                  src="/images/pressure washing driveway .jpg"
                  alt="Driveway Cleaning Richmond"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#dc2626] mb-3">Driveway Cleaning</h3>
                  <p className="text-gray-600 mb-4">
                    Restore your driveway to pristine condition with our professional cleaning service. Perfect for removing oil stains and accumulated dirt.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Oil stain removal
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      High-pressure cleaning
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Protective sealing options
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
                  src="/images/Pressure washing concrete 1.jpg"
                  alt="Patio Cleaning Richmond"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#dc2626] mb-3">Patio Cleaning</h3>
                  <p className="text-gray-600 mb-4">
                    Make your outdoor living space beautiful again with our patio cleaning service. Safe for all concrete and stone surfaces.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Mold and mildew removal
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Gentle cleaning solutions
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Furniture protection included
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
                  src="/images/Pressure washing concrete 2 - commercial.jpg"
                  alt="Sidewalk Cleaning Richmond"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#dc2626] mb-3">Sidewalk Cleaning</h3>
                  <p className="text-gray-600 mb-4">
                    Keep your sidewalks clean and safe with our professional sidewalk cleaning service. Essential for curb appeal and safety.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Gum and debris removal
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Pressure washing
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      Eco-friendly solutions
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
                <span className="text-[#FFA500] italic">CONCRETE CLEANING</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#dc2626] rounded-full p-2 flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Professional Equipment</h3>
                    <p className="text-gray-600">We use commercial-grade pressure washing equipment and specialized cleaning solutions for the best results.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#dc2626] rounded-full p-2 flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Oil Stain Expertise</h3>
                    <p className="text-gray-600">Our team specializes in removing tough oil stains that other cleaners can't handle.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#dc2626] rounded-full p-2 flex-shrink-0">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Eco-Friendly Solutions</h3>
                    <p className="text-gray-600">We use environmentally safe cleaning solutions that won't harm your plants or pets.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#dc2626] rounded-full p-2 flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e40af] mb-2">Fast & Efficient</h3>
                    <p className="text-gray-600">Most concrete cleaning jobs are completed in 1-3 hours, depending on the size of the area.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative w-full h-96">
              <Image
                src="/images/pressure washing driveway .jpg"
                alt="Concrete Cleaning Richmond"
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
            <span className="text-[#1e40af]">READY TO</span>{" "}
            <span className="text-[#FFA500] italic">TRANSFORM</span>{" "}
            <span className="text-[#1e40af]">YOUR CONCRETE?</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <ContactFormSimple />
            </div>
            
            <div className="space-y-8">
              <div className="bg-[#f8f9fa] p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-[#1e40af] mb-4">Concrete Cleaning Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-[#dc2626] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Free Estimate</h4>
                      <p className="text-gray-600 text-sm">We assess your concrete surfaces and provide a detailed quote.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-[#dc2626] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Preparation</h4>
                      <p className="text-gray-600 text-sm">We protect surrounding areas and prepare cleaning solutions.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-[#dc2626] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Cleaning</h4>
                      <p className="text-gray-600 text-sm">Professional pressure washing removes dirt, stains, and grime.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-[#dc2626] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Finishing</h4>
                      <p className="text-gray-600 text-sm">Optional sealing to protect your concrete surfaces.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-[#1e40af] to-[#dc2626] text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Get Started Today</h3>
                <p className="text-lg mb-6">
                  Don't let dirty concrete detract from your property's appearance. Contact us for a free estimate and see the difference professional concrete cleaning can make.
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

