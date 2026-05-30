import type { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import { companyInfo, contactInfo, milestones } from '@/data/company';

export const metadata: Metadata = {
  title: 'About Green Ship Technologies | Maritime Experts Since 2009 | Navi Mumbai',
  description: 'Green Ship Technologies — established 2009, leading marine, offshore & industrial service provider in Navi Mumbai, India. 15+ years of maritime expertise, 200+ clients, 500+ projects across India, Middle East, Far East & Europe.',
  openGraph: {
    title: 'About Green Ship Technologies | Maritime Experts Since 2009',
    description: 'Founded in 2009, Green Ship Technologies is a trusted name in maritime services — ship design, Ecoloadmaster software, IHM surveys, flag registration & offshore engineering from Navi Mumbai, India.',
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
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
              <span className="text-teal text-sm font-semibold tracking-wider uppercase mb-4 block">Who We Are</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                About Green Ship Technologies
              </h1>
              <p className="text-white text-lg leading-relaxed">
                A marine, offshore &amp; industrial service provider with 15+ years of expertise — delivering innovative maritime solutions across the globe.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <Section background="white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-teal-dark font-semibold text-sm tracking-wider uppercase mb-4 block">Our Story</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-6">
                Established in 2009, Built on Maritime Excellence
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {companyInfo.description}
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Headquartered in Navi Mumbai, India, we serve clients across India, the Middle East, Far East, and European countries — providing end-to-end maritime services that optimize efficiency, enhance safety, and promote sustainability.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-light-grey rounded-xl p-5">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal to-ocean rounded-lg flex items-center justify-center mb-3">
                    <Icon name="Target" size={20} className="text-white" />
                  </div>
                  <h3 className="font-bold text-navy mb-2">Our Mission</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{companyInfo.mission}</p>
                </div>
                <div className="bg-light-grey rounded-xl p-5">
                  <div className="w-10 h-10 bg-gradient-to-br from-ocean to-teal rounded-lg flex items-center justify-center mb-3">
                    <Icon name="Eye" size={20} className="text-white" />
                  </div>
                  <h3 className="font-bold text-navy mb-2">Our Vision</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{companyInfo.vision}</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[480px]">
              <Image
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&auto=format&fit=crop&q=80"
                alt="Maritime operations"
                fill
                priority
                quality={90}
                  className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
            </div>
          </div>
        </Section>

        {/* Team Composition */}
        <Section background="grey">
          <div className="text-center mb-12">
            <span className="text-teal-dark font-semibold text-sm tracking-wider uppercase mb-4 block">Our Team</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-4">
              Highly Qualified Maritime Professionals
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our multidisciplinary team brings extensive experience from major shipyards, ship design offices, offshore engineering, and maritime operations worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: 'Ship',     title: 'Naval Architects',      image: '/services/shipdesign.jpeg' },
              { icon: 'Wrench',   title: 'Marine Engineers',       image: '/services/ship-drydock-3.webp' },
              { icon: 'Star',     title: 'Master Mariners',        image: '/services/MP2.webp' },
              { icon: 'Zap',      title: 'Electrical Engineers',   image: '/services/Ultrasonic-Testing-UT.webp' },
              { icon: 'Settings', title: 'Mechanical Engineers',   image: '/services/maintainance.webp' },
              { icon: 'Code',     title: 'Software Engineers',     image: '/services/software.jpeg' },
            ].map((role) => (
              <div key={role.title} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src={role.image}
                    alt={role.title}
                    fill
                    loading="lazy"
                    quality={90}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-navy/60 to-transparent" />
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                    <div className="w-9 h-9 bg-white/90 rounded-lg flex items-center justify-center shadow">
                      <Icon name={role.icon} size={18} className="text-teal-dark" />
                    </div>
                  </div>
                </div>
                <div className="p-3 text-center">
                  <p className="text-xs font-semibold text-navy leading-tight">{role.title}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Core Values */}
        <Section background="white">
          <div className="text-center mb-12">
            <span className="text-teal-dark font-semibold text-sm tracking-wider uppercase mb-4 block">What Drives Us</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-4">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyInfo.coreValues.map((value, index) => (
              <div key={index} className="bg-light-grey rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-teal to-ocean rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="font-bold text-navy mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Milestones */}
        <section className="relative py-16 sm:py-20 overflow-hidden">
          {/* Blurred ship background */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600&auto=format&fit=crop&q=80"
              alt=""
              fill
              loading="lazy"
              quality={60}
              className="object-cover scale-110"
            />
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-navy/85" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-teal font-semibold text-sm tracking-wider uppercase mb-4 block">Our Journey</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Company Milestones</h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-teal to-ocean transform sm:-translate-x-0.5"></div>
                <div className="space-y-8">
                  {milestones.map((milestone, index) => (
                    <div key={index} className={`relative flex items-start gap-6 ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} pl-12 sm:pl-0`}>
                      <div className={`hidden sm:block w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                        <div className={`bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-shadow ${index % 2 !== 0 ? 'text-left' : ''}`}>
                          <span className="text-teal-dark font-bold text-lg">{milestone.year}</span>
                          <h3 className="font-bold text-navy mt-1 mb-2">{milestone.title}</h3>
                          <p className="text-gray-600 text-sm">{milestone.description}</p>
                        </div>
                      </div>

                      <div className="absolute left-0 sm:left-1/2 w-8 h-8 bg-linear-to-br from-teal to-ocean rounded-full flex items-center justify-center transform sm:-translate-x-4 mt-1 shadow-lg">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>

                      <div className="sm:hidden w-full bg-white rounded-2xl p-4 shadow-lg">
                        <span className="text-teal-dark font-bold">{milestone.year}</span>
                        <h3 className="font-bold text-navy mt-1 mb-1">{milestone.title}</h3>
                        <p className="text-gray-600 text-sm">{milestone.description}</p>
                      </div>

                      <div className={`hidden sm:block w-5/12 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-gradient-to-br from-navy to-navy-dark text-white py-16 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 bg-teal rounded-full filter blur-3xl"></div>
          </div>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Work With Our Maritime Experts</h2>
            <p className="text-white mb-8">
              Get in touch with our team of naval architects, marine engineers, and maritime specialists
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg" variant="primary">
                Contact Us
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Our Services
              </Button>
            </div>
            <p className="mt-6 text-white/80 text-sm">
              <a href={`tel:${contactInfo.phone}`} className="hover:text-teal transition-colors">{contactInfo.phone}</a>
              {' · '}
              <a href={`mailto:${contactInfo.email}`} className="hover:text-teal transition-colors">{contactInfo.email}</a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
