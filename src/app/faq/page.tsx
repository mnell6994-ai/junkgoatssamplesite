import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Mail, Clock, Shield, Award } from "lucide-react";
import Header from "@/components/header";

export const metadata = {
  title: "Power Washing FAQ Richmond VA | Common Questions & Answers",
  description: "Frequently asked questions about power washing services in Richmond, VA. Learn about our process, pricing, safety measures, and more. Get answers to all your questions.",
  keywords: "power washing FAQ Richmond VA, pressure washing questions Richmond, house washing FAQ, deck cleaning questions, power washing safety Richmond"
};

export default function FAQPage() {
  const faqs = [
    {
      category: "General Questions",
      questions: [
        {
          question: "What areas do you serve in Richmond, VA?",
          answer: "We serve all of Richmond and the surrounding metro area including Henrico County, Chesterfield County, Midlothian, Glen Allen, Short Pump, Mechanicsville, Bon Air, and Tuckahoe. We're based in Richmond and can typically reach any location within 30 miles."
        },
        {
          question: "How much does power washing cost in Richmond?",
          answer: "Our pricing varies based on the size of your property, type of surfaces, and specific services needed. House washing starts at $200, deck cleaning at $150, and concrete cleaning at $100. We provide free estimates with no hidden fees. Contact us for a detailed quote."
        },
        {
          question: "Do you offer free estimates?",
          answer: "Yes! We provide completely free, no-obligation estimates for all our power washing services. We'll assess your property, discuss your needs, and provide transparent pricing with no surprises."
        },
        {
          question: "How long does a typical power washing job take?",
          answer: "Most residential power washing jobs take 2-4 hours depending on the size and complexity. A small house washing might take 2-3 hours, while a complete package with multiple services could take 4-6 hours. We'll give you a time estimate when we provide your quote."
        }
      ]
    },
    {
      category: "Services & Process",
      questions: [
        {
          question: "What's the difference between pressure washing and soft washing?",
          answer: "Pressure washing uses high-pressure water to clean surfaces, while soft washing uses low-pressure water with specialized cleaning solutions. We use soft washing for delicate surfaces like siding, stucco, and painted surfaces to prevent damage, and pressure washing for concrete and other durable materials."
        },
        {
          question: "Is power washing safe for my home's exterior?",
          answer: "Yes, when done properly. We use appropriate pressure levels and techniques for each surface type. Our experienced technicians know how to clean different materials safely without causing damage. We also protect plants and outdoor furniture during the cleaning process."
        },
        {
          question: "Do I need to be home during the power washing service?",
          answer: "It's not necessary for you to be home, but we recommend being available for the initial walkthrough and final inspection. We'll contact you before we start and when we're finished. If you can't be present, we can work with your schedule and leave detailed notes about the work completed."
        },
        {
          question: "What should I do to prepare for power washing?",
          answer: "We'll handle most of the preparation, but you can help by moving small outdoor items, closing windows, and letting us know about any delicate plants or areas of concern. We'll cover and protect everything that needs protection during the cleaning process."
        }
      ]
    },
    {
      category: "Safety & Insurance",
      questions: [
        {
          question: "Are you licensed and insured?",
          answer: "Yes, we are fully licensed, bonded, and insured. We carry comprehensive liability insurance to protect both our business and your property. We can provide proof of insurance upon request."
        },
        {
          question: "What happens if something gets damaged during power washing?",
          answer: "While damage is extremely rare with our experienced team, we're fully insured to cover any accidental damage. We take great care to protect your property and use appropriate techniques for each surface type."
        },
        {
          question: "Are your cleaning solutions safe for pets and plants?",
          answer: "Yes, we use eco-friendly, biodegradable cleaning solutions that are safe for pets and plants. We take extra care to protect landscaping and will cover sensitive plants during the cleaning process."
        },
        {
          question: "Do you have experience with different types of siding?",
          answer: "Absolutely! We have extensive experience with vinyl, brick, stucco, wood, fiber cement, and other siding types. We adjust our cleaning methods and pressure levels based on the specific material to ensure safe and effective cleaning."
        }
      ]
    },
    {
      category: "Scheduling & Weather",
      questions: [
        {
          question: "What happens if it rains on my scheduled day?",
          answer: "We monitor weather conditions closely and will reschedule if rain is expected during your service time. We want to ensure the best results, so we'll work with you to find the next available time that works for your schedule."
        },
        {
          question: "How far in advance should I schedule my power washing?",
          answer: "We recommend scheduling 1-2 weeks in advance, especially during peak seasons (spring and fall). However, we often have same-day or next-day availability, so don't hesitate to call even if you need service quickly."
        },
        {
          question: "Do you work on weekends?",
          answer: "Yes, we work Monday through Saturday and can accommodate weekend appointments. We understand that weekdays don't always work for everyone's schedule."
        },
        {
          question: "How often should I have my house power washed?",
          answer: "Most homes benefit from annual power washing, but this can vary based on your location, weather conditions, and personal preference. Homes with more trees or in humid climates may need more frequent cleaning. We can provide recommendations based on your specific situation."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <Header />

      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        <Image
          src="/images/powerwashing deck.jpg"
          alt="Power washing FAQ Richmond Virginia"
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
              FREQUENTLY{" "}
              <span className="inline-block font-black text-6xl lg:text-8xl text-[#FFA500]" style={{ 
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
              }}>
                ASKED QUESTIONS
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-semibold">
              Get answers to common questions about our power washing services in Richmond, VA. Can't find what you're looking for? Contact us directly!
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

      {/* FAQ Sections */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-3xl font-bold text-[#1e40af] mb-8 text-center">
                {category.category}
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`} className="bg-white rounded-lg border border-gray-200">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <span className="text-lg font-semibold text-[#dc2626]">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 bg-[#f3f4f6]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#1e40af] mb-12">
            Still Have Questions?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white text-center p-6">
              <Phone className="w-12 h-12 text-[#dc2626] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#1e40af] mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak directly with our team</p>
              <p className="text-lg font-semibold text-[#dc2626]">(804) 555-0123</p>
            </Card>
            <Card className="bg-white text-center p-6">
              <Mail className="w-12 h-12 text-[#dc2626] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#1e40af] mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us your questions</p>
              <p className="text-lg font-semibold text-[#dc2626]">info@richmondpowerwashpro.com</p>
            </Card>
            <Card className="bg-white text-center p-6">
              <Clock className="w-12 h-12 text-[#dc2626] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#1e40af] mb-2">Business Hours</h3>
              <p className="text-gray-600 mb-4">We're here to help</p>
              <p className="text-lg font-semibold text-[#dc2626]">Mon-Sat: 7AM-7PM</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#1e40af] mb-12">
            Why Choose Richmond Power Washing Pro?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white text-center p-6">
              <Shield className="w-12 h-12 text-[#dc2626] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#1e40af] mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed, bonded, and insured for your peace of mind.</p>
            </Card>
            <Card className="bg-white text-center p-6">
              <Award className="w-12 h-12 text-[#dc2626] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#1e40af] mb-2">10+ Years Experience</h3>
              <p className="text-gray-600">Over a decade of experience serving Richmond area.</p>
            </Card>
            <Card className="bg-white text-center p-6">
              <Clock className="w-12 h-12 text-[#dc2626] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#1e40af] mb-2">Same Day Service</h3>
              <p className="text-gray-600">Fast response times with same-day service available.</p>
            </Card>
            <Card className="bg-white text-center p-6">
              <Check className="w-12 h-12 text-[#dc2626] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#1e40af] mb-2">100% Satisfaction</h3>
              <p className="text-gray-600">We guarantee your complete satisfaction with our work.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#1e40af] to-[#dc2626] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Get your free estimate today and see why Richmond homeowners trust us with their power washing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#1e40af] hover:bg-gray-100 text-lg px-8 py-4">
              Get Free Estimate
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1e40af] text-lg px-8 py-4">
              Call (804) 555-0123
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
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1e40af] text-lg px-8 py-3 font-black uppercase tracking-wide italic">
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