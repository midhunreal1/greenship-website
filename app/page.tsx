import type { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Section from '@/components/Section';
import Icon from '@/components/Icon';
import HeroVideo from '@/components/HeroVideo';
import ServicesSection from '@/components/ServicesSection';
import IndustriesSection from '@/components/IndustriesSection';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import ClientLogoCarousel from '@/components/ClientLogoCarousel';
import { services } from '@/data/services';
import { industries } from '@/data/industries';
import { testimonials } from '@/data/testimonials';
import { companyInfo, contactInfo } from '@/data/company';

export const metadata: Metadata = {
  title: 'Green Ship Technologies — Maritime Services & Marine Software',
  description: 'Green Ship Technologies delivers world-class maritime services — ship design & engineering, marine software, survey & certification, flag registration, offshore engineering, and ship broking.',
  openGraph: {
    title: 'Green Ship Technologies — Maritime Services & Marine Software',
    description: 'Expert maritime solutions including Ecoloadmaster loadicator software, ship design, IHM surveys, flag registration, and offshore engineering.',
  },
};

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative bg-[#092744] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-teal rounded-full filter blur-xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-ocean rounded-full filter blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal rounded-full filter blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          <div className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 relative z-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <div className="inline-block mb-6">
                  <span className="px-4 py-2 bg-teal/20 border border-teal/30 rounded-full text-teal text-xs sm:text-sm font-semibold flex items-center gap-2 w-fit">
                    <Icon name="Anchor" size={14} />
                    Marine, Offshore &amp; Industrial Services Since 2009
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Your Partner in{' '}
                  <span className="text-teal">Maritime</span>{' '}
                  Innovation
                </h1>
                <p className="text-base sm:text-lg md:text-xl mb-8 text-white leading-relaxed">
                  Green Ship Technologies delivers world-class maritime services — from ship design and marine software to survey & certification, flag registration, and offshore engineering.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button href="/contact" size="md" variant="primary">
                    Get In Touch
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                  <Button href="/services" variant="outline" size="md">
                    Explore Services
                  </Button>
                </div>

                {/* Stats */}
                <div className="mt-12 grid grid-cols-4 gap-4">
                  {[
                    { value: companyInfo.yearsExperience, label: 'Years Experience' },
                    { value: companyInfo.clientsServed, label: 'Clients Served' },
                    { value: companyInfo.projectsCompleted, label: 'Projects Done' },
                    { value: '15+', label: 'Services' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl lg:text-3xl font-bold text-teal">{stat.value}</div>
                      <div className="text-white/80 mt-1 text-xs">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="relative">
                  <HeroVideo />
                  {/* Floating badge */}
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal to-ocean rounded-xl flex items-center justify-center">
                        <Icon name="Award" size={24} className="text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Established</p>
                        <p className="font-bold text-navy text-lg">Since 2009</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <Section background="white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { src: '/services/ship1.webp', alt: 'Vessel at sea' },
                  { src: '/services/shipdesign.jpeg', alt: 'Ship design engineering' },
                  { src: '/services/offshore.webp', alt: 'Offshore platform' },
                  { src: '/services/AHTS.webp', alt: 'AHTS vessel operations' },
                  { src: '/services/ship2.webp', alt: 'Marine vessel' },
                  { src: '/services/ship-drydock-3.webp', alt: 'Shipyard drydock' },
                ].map((img, i) => (
                  <div key={i} className="aspect-square rounded-xl overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={300}
                      height={300}
                      priority={i < 3}
                      loading={i < 3 ? undefined : 'lazy'}
                      quality={90}
                      sizes="(max-width: 768px) 33vw, 200px"
                      className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-4">
                <span className="text-teal-dark font-semibold text-sm tracking-wider uppercase">About Green Ship Technologies</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
                16+ Years of Maritime Excellence
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {companyInfo.description}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { icon: 'Ship', text: 'Naval Architects' },
                  { icon: 'Wrench', text: 'Marine Engineers' },
                  { icon: 'Star', text: 'Master Mariners' },
                  { icon: 'Code', text: 'Software Engineers' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={16} className="text-teal-dark" />
                    </div>
                    <span className="text-sm font-medium text-navy">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-start gap-4 p-4 bg-light-grey rounded-lg">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal to-teal-dark rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                </div>
                <div>
                  <p className="text-gray-600 mb-1 text-sm">
                    Call us for <span className="text-teal-dark font-semibold">maritime consultations</span> &amp; enquiries
                  </p>
                  <a href={`tel:${contactInfo.phone}`} className="text-xl font-bold text-navy hover:text-teal-dark transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Client Portfolio — infinite scroll, right under About */}
        <ClientLogoCarousel />

        {/* Services Section */}
        <ServicesSection services={services} />

        {/* Industries Section */}
        <IndustriesSection industries={industries} />

        {/* Why Choose Us */}
        <Section background="white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-4">
                <span className="text-teal-dark font-semibold text-sm tracking-wider uppercase">Why Choose GST</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">
                Why Choose Green Ship Technologies?
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8">
                We combine deep maritime expertise with modern technology to deliver exceptional results for every client
              </p>
              <div className="space-y-3">
                {companyInfo.coreValues.map((value, index) => (
                  <div key={index} className="flex items-start gap-3 bg-light-grey rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-teal to-ocean rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-navy mb-0.5">{value.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { src: '/vessel-top-view.jpg', alt: 'Offshore platform aerial view' },
                  { src: '/services/offshore.webp', alt: 'Offshore engineering' },
                  { src: '/services/ship1.webp', alt: 'Marine vessel operations' },
                  { src: '/services/ship-drydock-3.webp', alt: 'Shipyard engineering' },
                ].map((img, i) => (
                  <div key={i} className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={300}
                      height={300}
                      loading="lazy"
                      quality={90}
                      sizes="(max-width: 768px) 50vw, 300px"
                      className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Flag Registration Highlight */}
        <Section background="grey">
          <div className="text-center mb-10">
            <span className="text-teal-dark font-semibold text-sm tracking-wider uppercase">Flag Registration Services</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">
              Vessel Registration Across Major Registries
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We facilitate seamless flag registration under leading open registries worldwide
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {[
              { name: 'Panama',           code: 'pa' },
              { name: 'Liberia',          code: 'lr' },
              { name: 'Palau',            code: 'pw' },
              { name: 'St. Kitts & Nevis',code: 'kn' },
              { name: 'Comoros',          code: 'km' },
              { name: 'Cook Islands',     code: 'ck' },
              { name: 'Belize',           code: 'bz' },
            ].map((flag) => (
              <div key={flag.name} className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow hover:-translate-y-1 duration-300">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://flagcdn.com/48x36/${flag.code}.png`}
                  width={48}
                  height={36}
                  alt={`${flag.name} flag`}
                  className="mx-auto mb-2 rounded shadow-sm"
                />
                <p className="text-xs font-semibold text-navy">{flag.name}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Testimonials */}
        <TestimonialCarousel
          testimonials={testimonials}
          maxTestimonials={6}
          defaultTestimonialsToShow={3}
          responsive={true}
          title="What Our Clients Say"
          subtitle="Trusted by shipping companies, yards, and maritime professionals worldwide"
        />


        {/* CTA Section */}
        <section className="relative bg-gradient-to-br from-navy via-navy-dark to-[#051225] text-white py-14 sm:py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-96 h-96 bg-teal rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-ocean rounded-full filter blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-teal/20 border border-teal/30 rounded-full px-4 py-2 text-teal text-sm font-semibold mb-6">
              <Icon name="Ship" size={16} />
              Let&apos;s Work Together
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Maritime Operations?
            </h2>
            <p className="text-base sm:text-lg text-white mb-8">
              Connect with our team of naval architects, marine engineers, and maritime specialists today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg" variant="primary">
                Contact Us Today
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Our Services
              </Button>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white">
              <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2 hover:text-teal transition-colors">
                <Icon name="Phone" size={16} />
                {contactInfo.phone}
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-teal transition-colors">
                <Icon name="Mail" size={16} />
                {contactInfo.email}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
