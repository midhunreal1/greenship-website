import type { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore Green Ship Technologies\' comprehensive maritime services including marine software, ship design, survey & certification, flag registration, renewable energy, and NDT services.',
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="relative bg-[#0a1e3c] text-white py-16 sm:py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-20 w-72 h-72 bg-teal rounded-full filter blur-xl"></div>
            <div className="absolute bottom-10 right-20 w-96 h-96 bg-ocean rounded-full filter blur-3xl"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="text-teal text-sm font-semibold tracking-wider uppercase mb-4 block">What We Offer</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Our Maritime Services
              </h1>
              <p className="text-white text-lg leading-relaxed">
                End-to-end marine, offshore &amp; industrial services delivered by specialists with decades of hands-on experience
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <Section background="white">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} id={service.slug} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl h-72 sm:h-80">
                    {service.image && (
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        loading={index < 2 ? 'eager' : 'lazy'}
                        quality={90}
                  className="object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-br from-navy/30 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal to-ocean rounded-xl flex items-center justify-center shadow-lg">
                        <Icon name={service.icon} size={24} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                  <span className="text-teal-dark font-semibold text-sm tracking-wider uppercase mb-3 block">
                    Service 0{service.id}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">{service.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                  <div className="mb-6">
                    <h3 className="text-sm font-bold text-navy mb-3 uppercase tracking-wide">Key Offerings</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                          <Icon name="CheckCircle" size={16} className="text-teal-dark mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button href="/contact" size="md" variant="primary">
                    Enquire Now
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <section className="relative bg-gradient-to-br from-navy to-navy-dark text-white py-16 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 bg-teal rounded-full filter blur-3xl"></div>
          </div>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Need a Custom Maritime Solution?</h2>
            <p className="text-white mb-8">
              Contact our experts to discuss your specific requirements and get a tailored proposal
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg" variant="primary">
                Get In Touch
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button href="/about" variant="outline" size="lg">
                About Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
