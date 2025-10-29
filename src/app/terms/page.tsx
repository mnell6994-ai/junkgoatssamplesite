import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Terms of Service | Junk Goats Junk Removal Richmond VA",
  description: "Terms of Service for Junk Goats Junk Removal services in Richmond, VA. Read our service terms, conditions, and policies for junk removal services.",
  alternates: {
    canonical: 'https://junkgoatsrichmond.com/terms',
    languages: {
      'en-US': 'https://junkgoatsrichmond.com/terms',
      'en': 'https://junkgoatsrichmond.com/terms',
      'x-default': 'https://junkgoatsrichmond.com/terms',
    },
  },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-black text-[#1e40af] mb-8 uppercase tracking-tight">Terms of Service</h1>

          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <p className="text-sm text-gray-500">Last Updated: January 2025</p>

            <section>
              <h2 className="text-2xl font-bold text-[#dc2626] mb-4">1. Agreement to Terms</h2>
              <p>
                By using Junk Goats Junk Removal services, you agree to be bound by these Terms of Service.
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#dc2626] mb-4">2. Services Provided</h2>
              <p>
                Junk Goats Junk Removal provides professional junk and debris removal services including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Residential junk removal</li>
                <li>Commercial junk removal</li>
                <li>Furniture and appliance removal</li>
                <li>Yard waste removal</li>
                <li>Construction debris removal</li>
                <li>Estate and office cleanouts</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#dc2626] mb-4">3. Service Areas</h2>
              <p>
                We provide services in Richmond, VA and surrounding areas including Henrico, Chesterfield,
                Midlothian, and Mechanicsville. Service availability may vary by location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#dc2626] mb-4">4. Booking and Scheduling</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Service appointments must be scheduled in advance via phone or website</li>
                <li>We provide estimated arrival windows, not exact times</li>
                <li>Cancellations must be made at least 24 hours in advance to avoid fees</li>
                <li>We reserve the right to reschedule due to weather or unforeseen circumstances</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#dc2626] mb-4">5. Pricing and Payment</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pricing is based on volume of items removed and labor required</li>
                <li>Estimates are provided before service begins</li>
                <li>Payment is due upon completion of service</li>
                <li>We accept cash, credit cards, and other approved payment methods</li>
                <li>Prices do not include disposal of hazardous materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#dc2626] mb-4">6. Prohibited Items</h2>
              <p>
                We cannot remove the following items:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Hazardous materials (chemicals, asbestos, oil, paint)</li>
                <li>Medical waste and biohazards</li>
                <li>Radioactive materials</li>
                <li>Explosives and ammunition</li>
                <li>Items prohibited by local, state, or federal law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#dc2626] mb-4">7. Customer Responsibilities</h2>
              <p>
                Customers must:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate information about items to be removed</li>
                <li>Ensure safe access to removal site</li>
                <li>Identify and separate any prohibited items</li>
                <li>Secure pets during service</li>
                <li>Be present or designate a representative during service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#dc2626] mb-4">8. Liability</h2>
              <p>
                Junk Goats Junk Removal is licensed and insured. We take reasonable care to prevent property damage
                during service. Our liability is limited to the actual damage caused by our negligence, up to the
                amount paid for the service.
              </p>
              <p className="mt-4">
                We are not liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pre-existing property damage</li>
                <li>Items removed at customer's direction</li>
                <li>Indirect or consequential damages</li>
                <li>Damage resulting from undisclosed hazards</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#dc2626] mb-4">9. Environmental Responsibility</h2>
              <p>
                We are committed to environmentally responsible disposal practices. We donate, recycle, and
                properly dispose of items whenever possible in accordance with local regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#dc2626] mb-4">10. Dispute Resolution</h2>
              <p>
                Any disputes arising from these terms or our services will be resolved through good faith
                negotiation. If negotiation fails, disputes will be resolved through binding arbitration
                in Richmond, Virginia under Virginia law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#dc2626] mb-4">11. Modifications to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Changes will be effective
                immediately upon posting to our website. Your continued use of our services constitutes
                acceptance of any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#dc2626] mb-4">12. Severability</h2>
              <p>
                If any provision of these terms is found to be unenforceable, the remaining provisions will
                remain in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#dc2626] mb-4">13. Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact us:
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
