import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import { industries } from '@/data/industries';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greenshiptech.com';

export const metadata: Metadata = {
  title: 'Maritime Industries We Serve | Green Ship Technologies',
  description: 'Green Ship Technologies delivers expert maritime services across commercial shipping, offshore & oil gas, naval & defence, renewable energy, shipbuilding, port & terminal, maritime finance, and yacht & leisure marine sectors.',
  openGraph: {
    title: 'Maritime Industries We Serve | Green Ship Technologies',
    description: 'Expert maritime services across 8 key industry sectors — commercial shipping, offshore engineering, renewable energy, naval defence, shipbuilding, port operations & more.',
    url: `${siteUrl}/industries`,
  },
  alternates: {
    canonical: '/industries',
  },
};

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-[#0a1e3c] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-teal rounded-full filter blur-xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-ocean rounded-full filter blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-teal/20 border border-teal/30 rounded-full px-4 py-2 text-teal text-sm font-semibold mb-6">
              <Icon name="Anchor" size={14} />
              Industries We Serve
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Maritime Expertise Across Every Sector
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              From commercial shipping to offshore renewables, our multidisciplinary team of naval architects, marine engineers, and maritime specialists delivers tailored solutions for every sector.
            </p>
          </div>
        </section>

        {/* Industries Grid */}
        <Section background="grey">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <Link
                key={industry.id}
                href={`/industries/${industry.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {industry.image && (
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      loading="lazy"
                      quality={80}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <div className="w-9 h-9 rounded-lg bg-teal/30 border border-teal/50 backdrop-blur-sm flex items-center justify-center">
                        <Icon name={industry.icon} size={18} className="text-white" />
                      </div>
                    </div>
                  </div>
                )}
                <div className="p-5">
                  <h2 className="text-base font-bold text-navy mb-2 group-hover:text-teal-dark transition-colors leading-snug">
                    {industry.title}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-3">
                    {industry.description}
                  </p>
                  {industry.subItems && (
                    <p className="text-xs text-gray-400 font-medium">
                      {industry.subItems.length} service{industry.subItems.length !== 1 ? 's' : ''} available
                    </p>
                  )}
                  <span className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-teal group-hover:gap-2 transition-all">
                    Explore Services
                    <Icon name="ArrowRight" size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <section className="relative bg-[#0a1e3c] text-white py-16 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 bg-teal rounded-full filter blur-3xl" />
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-ocean rounded-full filter blur-3xl" />
          </div>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Don&apos;t See Your Industry?
            </h2>
            <p className="text-white/80 mb-8">
              Our maritime expertise spans many more sectors. Contact our team to discuss how we can support your specific operational needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg" variant="primary">
                Contact Us Today
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button href="/services" variant="outline" size="lg">
                All Services
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
