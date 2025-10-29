import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Junk Goats Junk Removal Richmond VA",
  description: "Privacy Policy for Junk Goats Junk Removal services in Richmond, VA. Learn how we protect your personal information and data privacy.",
  alternates: {
    canonical: 'https://junkgoatsrichmond.com/privacy',
    languages: {
      'en-US': 'https://junkgoatsrichmond.com/privacy',
      'en': 'https://junkgoatsrichmond.com/privacy',
      'x-default': 'https://junkgoatsrichmond.com/privacy',
    },
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-black text-[#1e40af] mb-8 uppercase tracking-tight">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <p className="text-sm text-gray-500">Last Updated: January 2025</p>

            <section>
              <h2 className="text-2xl font-bold text-[#dc2626] mb-4">1. Information We Collect</h2>
              <p>
                When you use Junk Goats Junk Removal services, we may collect the following information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact information (name, phone number, email address)</li>
                <li>Service address and location details</li>
                <li>Service requests and scheduling information</li>
                <li>Payment and billing information</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#dc2626] mb-4">2. How We Use Your Information</h2>
              <p>
                We use your information to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide junk removal services as requested</li>
                <li>Schedule and coordinate service appointments</li>
                <li>Process payments and maintain billing records</li>
                <li>Communicate with you about your service requests</li>
                <li>Send service updates and promotional offers (with your consent)</li>
                <li>Improve our services and customer experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#dc2626] mb-4">3. Information Sharing</h2>
              <p>
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Service providers who assist in our operations (payment processors, scheduling tools)</li>
                <li>Legal authorities when required by law</li>
                <li>Partners with your explicit consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#dc2626] mb-4">4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information from unauthorized access,
                alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#dc2626] mb-4">5. Your Rights</h2>
              <p>
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to processing of your personal data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#dc2626] mb-4">6. Cookies and Tracking</h2>
              <p>
                Our website may use cookies and similar tracking technologies to enhance your experience.
                You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#dc2626] mb-4">7. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect
                personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#dc2626] mb-4">8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting
                the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#dc2626] mb-4">9. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mt-4">
                <p className="font-semibold text-[#1e40af]">Junk Goats Junk Removal</p>
                <p>Richmond, VA</p>
                <p>Phone: (804) 494-7999</p>
                <p>Email: info@junkgoatsrichmond.com</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
