import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { companyInfo, contactInfo } from '@/data/company';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Green Ship Technologies.',
};

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative bg-[#0a1e3c] text-white py-16 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Terms of Service</h1>
            <p className="text-white">Last updated: May 2025</p>
          </div>
        </section>

        <Section background="white">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 text-lg mb-8">
              By accessing and using the {companyInfo.name} website, you agree to be bound by the following terms and conditions.
            </p>

            {[
              {
                title: '1. Use of Website',
                content: 'This website is provided for informational purposes about Green Ship Technologies\' maritime services. You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others.'
              },
              {
                title: '2. Intellectual Property',
                content: 'All content on this website, including text, graphics, logos, and images, is the property of Green Ship Technologies and is protected by applicable intellectual property laws.'
              },
              {
                title: '3. Service Information',
                content: 'The information about our maritime services on this website is for general informational purposes. Specific service terms, pricing, and conditions are subject to individual agreements with clients.'
              },
              {
                title: '4. Limitation of Liability',
                content: 'Green Ship Technologies shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website or our services, to the maximum extent permitted by law.'
              },
              {
                title: '5. Third-Party Links',
                content: 'Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of those sites.'
              },
              {
                title: '6. Changes to Terms',
                content: 'We reserve the right to modify these terms at any time. Continued use of the website after changes constitutes acceptance of the revised terms.'
              },
              {
                title: '7. Governing Law',
                content: 'These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Navi Mumbai, Maharashtra.'
              },
              {
                title: '8. Contact',
                content: `For questions about these terms, contact us at ${contactInfo.email} or ${contactInfo.phone}.`
              }
            ].map((section) => (
              <div key={section.title} className="mb-8">
                <h2 className="text-xl font-bold text-navy mb-3">{section.title}</h2>
                <p className="text-gray-600 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
