import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#1e40af] to-[#dc2626] text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-white rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-white rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 right-1/3 w-20 h-20 bg-white rounded-full blur-lg animate-bounce delay-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-[#FFA500] text-2xl font-black mb-6 uppercase tracking-tight">Junk Goats Junk Removal</h4>
            <p className="text-lg text-gray-100 mb-4">
              Professional junk removal services in Richmond, VA. Licensed, insured, and locally owned.
            </p>
            <div className="flex items-center gap-3 text-lg font-bold text-white">
              <Phone className="w-6 h-6 text-[#FFA500]" />
              <span>(804) 494-7999</span>
            </div>
          </div>
          <div>
            <h4 className="text-[#FFA500] text-xl font-black mb-6 uppercase tracking-tight">Services</h4>
            <ul className="space-y-3 text-lg">
              <li><Link href="/services/junk-removal" className="hover:text-[#FFA500] transition-colors font-semibold">Junk Removal</Link></li>
              <li><Link href="/services/furniture-removal" className="hover:text-[#FFA500] transition-colors font-semibold">Furniture Removal</Link></li>
              <li><Link href="/services/yard-waste-removal" className="hover:text-[#FFA500] transition-colors font-semibold">Yard Waste Removal</Link></li>
              <li><Link href="/services/construction-debris" className="hover:text-[#FFA500] transition-colors font-semibold">Construction Debris</Link></li>
              <li><Link href="/services/appliance-removal" className="hover:text-[#FFA500] transition-colors font-semibold">Appliance Removal</Link></li>
              <li><Link href="/services/estate-cleanout" className="hover:text-[#FFA500] transition-colors font-semibold">Estate Cleanout</Link></li>
              <li><Link href="/services/commercial-cleanout" className="hover:text-[#FFA500] transition-colors font-semibold">Commercial Cleanout</Link></li>
              <li><Link href="/services/office-cleanout" className="hover:text-[#FFA500] transition-colors font-semibold">Office Cleanout</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#FFA500] text-xl font-black mb-6 uppercase tracking-tight">Service Areas</h4>
            <ul className="space-y-3 text-lg">
              <li><Link href="/richmond" className="hover:text-[#FFA500] transition-colors font-semibold">Richmond, VA</Link></li>
              <li><Link href="/henrico" className="hover:text-[#FFA500] transition-colors font-semibold">Henrico, VA</Link></li>
              <li><Link href="/chesterfield" className="hover:text-[#FFA500] transition-colors font-semibold">Chesterfield, VA</Link></li>
              <li><Link href="/midlothian" className="hover:text-[#FFA500] transition-colors font-semibold">Midlothian, VA</Link></li>
              <li><Link href="/mechanicsville" className="hover:text-[#FFA500] transition-colors font-semibold">Mechanicsville, VA</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#FFA500] text-xl font-black mb-6 uppercase tracking-tight">Contact</h4>
            <ul className="space-y-3 text-lg">
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#FFA500]" />
                <span>(804) 494-7999</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#FFA500]" />
                <span>info@junkgoatsrichmond.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#FFA500]" />
                <span>Based in Richmond, VA</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-lg text-gray-200 mb-4">
            &copy; 2025 Junk Goats Junk Removal. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 text-lg">
            <Link href="/sitemap" className="hover:text-[#FFA500] transition-colors font-semibold">Sitemap</Link>
            <Link href="/privacy" className="hover:text-[#FFA500] transition-colors font-semibold">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#FFA500] transition-colors font-semibold">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
