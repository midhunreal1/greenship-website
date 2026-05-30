import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { companyInfo, contactInfo } from '@/data/company';

export const metadata: Metadata = {
  title: 'Privacy Policy | Green Ship Technologies',
  description: 'Read the privacy policy of Green Ship Technologies — how we collect, use, and protect personal information submitted through our maritime services website.',
  robots: { index: false },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative bg-[#0a1e3c] text-white py-16 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-white">Last updated: May 2025</p>
          </div>
        </section>

        <Section background="white">
          <div className="max-w-4xl mx-auto prose prose-gray">
            <p className="text-gray-600 text-lg mb-8">
              {companyInfo.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, and protect your information when you use our website.
            </p>

            {[
              {
                title: '1. Information We Collect',
                content: 'We collect information you provide directly to us, such as your name, email address, phone number, and any messages you send through our contact forms. We may also collect technical data like IP address, browser type, and pages visited.'
              },
              {
                title: '2. How We Use Your Information',
                content: 'We use your information to respond to your enquiries, provide our maritime services, send relevant updates (with your consent), improve our website, and comply with legal obligations.'
              },
              {
                title: '3. Information Sharing',
                content: 'We do not sell or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website, subject to confidentiality agreements.'
              },
              {
                title: '4. Data Security',
                content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
              },
              {
                title: '5. Cookies',
                content: 'Our website may use cookies to enhance your browsing experience. You can control cookies through your browser settings.'
              },
              {
                title: '6. Your Rights',
                content: 'You have the right to access, update, or request deletion of your personal information. Contact us at contact@greenshiptech.com to exercise these rights.'
              },
              {
                title: '7. Contact Us',
                content: `For privacy-related queries, contact us at ${contactInfo.email} or write to us at ${contactInfo.address}.`
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
