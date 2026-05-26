import type { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import Button from '@/components/Button';
import Icon from '@/components/Icon';

export const metadata: Metadata = {
  title: 'Client Portfolio',
  description: 'Green Ship Technologies has served 200+ maritime clients across India, Middle East, Far East, and Europe. View our extensive client portfolio.',
};

const stats = [
  { value: '200+', label: 'Clients Served', icon: 'Users' },
  { value: '500+', label: 'Projects Completed', icon: 'CheckCircle' },
  { value: '15+', label: 'Years of Experience', icon: 'Award' },
  { value: '4+', label: 'Continents Served', icon: 'Globe' },
];

// All client logo images downloaded from greenshiptech.com/client-portfolio
const clientLogos = [
  '1.png', '2-1.png', '3-1.png', '4-1.png', '5-1.png', '6-1.png',
  '7.png', '8.png', '9.png', '10.png', '11.png', '12.png',
  '13.png', '14.png', '15.png', '16.png', '17.png', '18.png',
  '19.png', '20.png', '73.png', '22.png', '23.png', '24.png',
  '25.png', '26.png', '27.png', '28.png', '29.png', '30.png',
  '31.png', '32.png', '33.png', '34.png', '35.png', '36.png',
  '37.png', '38.png', '39.png', '40.png', '41.png', '42.png',
  '43.png', '44.png', '45.png', '47.png', '48.png', '51.png',
  '52.png', '53.png', '54.png', '55.png', '56.png', '57.png',
  '58.png', '59.png', '60.png', '61.png', '62.png', '63.png',
  '64.png', '66.png', '67.png', '68.png', '69.png', '70.png',
  '71.png', '72.png',
];

export default function ClientPortfolioPage() {
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
              <span className="text-teal text-sm font-semibold tracking-wider uppercase mb-4 block">Our Clients</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Client Portfolio
              </h1>
              <p className="text-white text-lg leading-relaxed">
                Trusted by shipping companies, shipyards, offshore operators, and maritime organizations worldwide
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <Section background="white">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center bg-light-grey rounded-2xl p-6">
                <div className="w-12 h-12 bg-linear-to-br from-teal to-ocean rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon name={stat.icon} size={24} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-navy mb-1">{stat.value}</div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Client Logo Grid */}
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">Our Extensive Client Base</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Over 16 years, Green Ship Technologies has built lasting partnerships with maritime organizations across the globe
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {clientLogos.map((logo, index) => (
              <div
                key={logo}
                className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center hover:shadow-md hover:border-teal/30 transition-all duration-300 hover:-translate-y-0.5 aspect-square"
              >
                <Image
                  src={`/clients/${logo}`}
                  alt={`Client logo ${index + 1}`}
                  width={160}
                  height={160}
                  loading={index < 18 ? 'eager' : 'lazy'}
                  quality={90}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>

          <p className="text-center text-white/80 text-sm mt-6">
            72+ maritime clients spanning commercial shipping, offshore, port operations, and more
          </p>
        </Section>

        {/* Global Reach */}
        <Section background="grey">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-4">Global Maritime Reach</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our services span key maritime regions worldwide</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {['India', 'Middle East', 'Far East', 'Europe'].map((region) => (
              <div key={region} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-linear-to-br from-teal to-ocean rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon name="Globe" size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-navy">{region}</h3>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <section className="relative bg-linear-to-br from-navy to-navy-dark text-white py-16 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 bg-teal rounded-full filter blur-3xl"></div>
          </div>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Join Our Growing Client Family</h2>
            <p className="text-white mb-8">
              Partner with Green Ship Technologies for reliable, expert maritime services
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
