import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import { industries } from '@/data/industries';
import { services } from '@/data/services';
import type { Service } from '@/types/service-subitem';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greenshiptech.com';

const industrySeoMeta: Record<string, { title: string; description: string }> = {
  'commercial-shipping': {
    title: 'Maritime Services for Commercial Shipping | Green Ship Technologies',
    description: 'Comprehensive maritime services for bulk carriers, tankers, container ships & general cargo vessels — Ecoloadmaster stability software, IHM surveys, class surveys, flag registration & ship brokerage.',
  },
  'offshore-oil-gas': {
    title: 'Offshore & Oil Gas Engineering Services | Green Ship Technologies',
    description: 'Specialized offshore engineering for FPSOs, drilling rigs & subsea infrastructure — ship design, mooring & motion analysis, IHM surveys, flag state inspections & offshore structural engineering.',
  },
  'naval-defence': {
    title: 'Naval & Defence Maritime Services | Green Ship Technologies',
    description: 'Engineering and survey support for naval vessels, coast guard ships & defence maritime assets — ship design, vessel conversions, class & statutory surveys, flag state inspections & vessel registration.',
  },
  'renewable-energy': {
    title: 'Renewable Energy Marine Engineering | Floating Solar & Offshore Wind | Green Ship Technologies',
    description: 'Marine engineering for the energy transition — floating solar PV system design, offshore wind farm engineering support, wave energy, and offshore renewable infrastructure from India.',
  },
  'shipbuilding-repair': {
    title: 'Shipbuilding & Ship Repair Technical Services | Green Ship Technologies',
    description: 'Design, survey & technical supervision for shipyards — new build design, retrofit & conversion engineering, BWTS/scrubber installation, IHM surveys, class surveys & Ecoloadmaster stability software.',
  },
  'port-terminal': {
    title: 'Port & Terminal Maritime Services | Green Ship Technologies',
    description: 'Marine consulting and software solutions for port authorities & terminal operators — Ecoloadmaster loadicator software, bespoke maritime software development & marine survey services.',
  },
  'maritime-finance-insurance': {
    title: 'Maritime Finance & Marine Insurance Technical Services | Green Ship Technologies',
    description: 'Technical due diligence for ship finance & P&I clubs — vessel condition surveys, IHM surveys, pre-purchase inspections, sale & purchase brokerage & chartering services.',
  },
  'yacht-leisure-marine': {
    title: 'Yacht & Leisure Marine Services | Superyacht Design & Survey | Green Ship Technologies',
    description: 'Design, certification & survey services for superyachts & recreational vessels — ship design, class & statutory surveys, pre-purchase condition surveys, sale & purchase brokerage & flag registration.',
  },
};

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return {};
  const seo = industrySeoMeta[slug];
  const title = seo?.title ?? `${industry.title} | Green Ship Technologies`;
  const description = seo?.description ?? industry.description;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteUrl}/industries/${slug}`,
    },
    alternates: {
      canonical: `/industries/${slug}`,
    },
  };
}

function resolveServiceItem(
  href: string,
  servicesList: Service[]
): { description: string; icon: string; parentTitle: string } {
  const path = href.replace(/^\/services\//, '');
  const [serviceSlug, subitemSlug] = path.split('/');
  const service = servicesList.find((s) => s.slug === serviceSlug);
  if (!service) return { description: '', icon: 'CheckCircle', parentTitle: '' };
  if (subitemSlug && service.subItems) {
    const sub = service.subItems.find((si) => si.slug === subitemSlug);
    if (sub?.description) {
      return { description: sub.description, icon: service.icon, parentTitle: service.title };
    }
  }
  return { description: service.description, icon: service.icon, parentTitle: service.title };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) notFound();

  const otherIndustries = industries.filter((i) => i.slug !== slug).slice(0, 4);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Industries', item: `${siteUrl}/industries` },
      { '@type': 'ListItem', position: 3, name: industry.title, item: `${siteUrl}/industries/${slug}` },
    ],
  };

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-[#0a1e3c] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-10 left-20 w-72 h-72 bg-teal rounded-full filter blur-2xl" />
            <div className="absolute bottom-10 right-20 w-96 h-96 bg-ocean rounded-full filter blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Link
                  href="/industries"
                  className="inline-flex items-center gap-2 text-teal text-sm font-medium mb-6 hover:gap-3 transition-all"
                >
                  <Icon name="ArrowLeft" size={16} />
                  All Industries
                </Link>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-teal/20 border border-teal/30 rounded-xl flex items-center justify-center">
                    <Icon name={industry.icon} size={24} className="text-teal" />
                  </div>
                  <span className="text-teal text-sm font-semibold tracking-wider uppercase">Industry Focus</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight">
                  {industry.title}
                </h1>
                <p className="text-white/80 text-lg leading-relaxed mb-8">{industry.description}</p>
                <Button href="/contact" size="lg" variant="primary">
                  Get In Touch
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
              </div>
              {industry.image && (
                <div className="hidden lg:block">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[420px]">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      priority
                      quality={90}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Services for this industry */}
        {industry.subItems && industry.subItems.length > 0 && (
          <Section background="grey">
            <div className="text-center mb-10">
              <span className="text-teal-dark font-semibold text-sm tracking-wider uppercase">
                Services We Provide
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mt-2 mb-3">
                How We Support {industry.title}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our team delivers the following specialised maritime services to {industry.title.toLowerCase()} clients worldwide.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {industry.subItems.map((item) => {
                const resolved = resolveServiceItem(item.href, services);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-teal/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-teal/20 transition-colors">
                        <Icon name={resolved.icon} size={20} className="text-teal-dark" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-medium leading-tight">{resolved.parentTitle}</p>
                      </div>
                    </div>
                    <h3 className="font-bold text-navy text-sm mb-2 group-hover:text-teal-dark transition-colors leading-snug">
                      {item.title}
                    </h3>
                    {resolved.description && (
                      <p className="text-gray-600 text-xs leading-relaxed line-clamp-3 flex-1">
                        {resolved.description}
                      </p>
                    )}
                    <span className="inline-flex items-center gap-1 mt-4 text-xs font-semibold text-teal group-hover:gap-2 transition-all">
                      Learn More
                      <Icon name="ArrowRight" size={12} />
                    </span>
                  </Link>
                );
              })}
            </div>
          </Section>
        )}

        {/* Other Industries */}
        <section className="bg-[#0a1e3c] py-14 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Explore Other Industries</h2>
              <p className="text-white/60">Discover how we serve other maritime sectors</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {otherIndustries.map((ind) => (
                <Link
                  key={ind.id}
                  href={`/industries/${ind.slug}`}
                  className="group bg-white/10 border border-white/10 hover:bg-white hover:border-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {ind.image && (
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={ind.image}
                        alt={ind.title}
                        fill
                        loading="lazy"
                        quality={80}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                    </div>
                  )}
                  <div className="p-4">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center mb-3 -mt-8 relative z-10 shadow-sm"
                      style={{ background: 'linear-gradient(135deg, #0077b6, #2d9e2d)' }}
                    >
                      <Icon name={ind.icon} size={18} className="text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:text-navy transition-colors mb-1.5">
                      {ind.title}
                    </h3>
                    <p className="text-xs text-white/60 group-hover:text-gray-500 leading-relaxed line-clamp-2">
                      {ind.description}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-teal group-hover:text-teal-dark group-hover:gap-2 transition-all">
                      Learn More
                      <Icon name="ArrowRight" size={12} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-[#0a1e3c] text-white py-16 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 bg-teal rounded-full filter blur-3xl" />
          </div>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-white/80 mb-8">
              Contact our maritime specialists to discuss your {industry.title.toLowerCase()} requirements.
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
