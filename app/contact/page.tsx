import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import Icon from '@/components/Icon';
import ContactForm from '@/components/ContactForm';
import Script from 'next/script';
import { contactInfo } from '@/data/company';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greenshiptech.com';

export const metadata: Metadata = {
  title: 'Contact Us | Green Ship Technologies | Maritime Services Enquiry',
  description: 'Contact Green Ship Technologies in Navi Mumbai for maritime service enquiries — ship design, Ecoloadmaster software, IHM & class surveys, flag registration (Panama/Liberia), offshore engineering & ship broking. Get a quote today.',
  openGraph: {
    title: 'Contact Green Ship Technologies | Navi Mumbai, India',
    description: 'Get in touch with our maritime experts for project consultations, service enquiries & quotes. Specialists in ship design, marine software, IHM surveys, flag registration & offshore engineering.',
    url: `${siteUrl}/contact`,
  },
  alternates: {
    canonical: '/contact',
  },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Green Ship Technologies',
  url: `${siteUrl}/contact`,
  mainEntity: {
    '@type': 'Organization',
    name: 'Green Ship Technologies',
    url: siteUrl,
    telephone: contactInfo.phone,
    email: contactInfo.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: contactInfo.address,
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <Script id="contact-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="relative bg-[#0a1e3c] text-white py-16 sm:py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-20 w-72 h-72 bg-teal rounded-full filter blur-xl" />
            <div className="absolute bottom-10 right-20 w-96 h-96 bg-ocean rounded-full filter blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="text-teal text-sm font-semibold tracking-wider uppercase mb-4 block">Get In Touch</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">Contact Us</h1>
              <p className="text-white text-lg leading-relaxed">
                Reach out to our maritime experts for enquiries, consultations, and project discussions
              </p>
            </div>
          </div>
        </section>

        <Section background="white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-6">Let&apos;s Work Together</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you need marine software development, ship design, survey services, or any of our maritime expertise — we&apos;re here to help.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 bg-light-grey rounded-xl">
                  <div className="w-11 h-11 bg-linear-to-br from-teal to-ocean rounded-xl flex items-center justify-center shrink-0">
                    <Icon name="MapPin" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">Office Address</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{contactInfo.address}</p>
                    <a
                      href={contactInfo.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-dark text-sm font-semibold hover:underline mt-1 inline-flex items-center gap-1"
                    >
                      Get Directions <Icon name="ExternalLink" size={12} />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-light-grey rounded-xl">
                  <div className="w-11 h-11 bg-linear-to-br from-teal to-ocean rounded-xl flex items-center justify-center shrink-0">
                    <Icon name="Phone" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">Phone / WhatsApp</h3>
                    <a href={`tel:${contactInfo.phone}`} className="text-gray-600 text-sm hover:text-teal-dark transition-colors block">
                      {contactInfo.phone}
                    </a>
                    {contactInfo.phone2 && (
                      <a href={`tel:${contactInfo.phone2}`} className="text-gray-600 text-sm hover:text-teal-dark transition-colors block">
                        {contactInfo.phone2}
                      </a>
                    )}
                    <p className="text-gray-400 text-xs mt-1">WhatsApp enabled</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-light-grey rounded-xl">
                  <div className="w-11 h-11 bg-linear-to-br from-teal to-ocean rounded-xl flex items-center justify-center shrink-0">
                    <Icon name="Mail" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">Email</h3>
                    <a href={`mailto:${contactInfo.email}`} className="text-gray-600 text-sm hover:text-teal-dark transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-light-grey rounded-xl">
                  <div className="w-11 h-11 bg-linear-to-br from-teal to-ocean rounded-xl flex items-center justify-center shrink-0">
                    <Icon name="Clock" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">Business Hours</h3>
                    <p className="text-gray-600 text-sm">{contactInfo.supportHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form — client component */}
            <div>
              <ContactForm />
            </div>
          </div>
        </Section>

        {/* Google Maps embed */}
        <div className="w-full h-80 border-t border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.226885930284!2d73.02877267711791!3d19.009721408129863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c252d83cd9b3%3A0x49d73d4cf38966e4!2sGreen%20Ship%20Technologies!5e0!3m2!1sen!2sin!4v1779212829317!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Green Ship Technologies Location"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
