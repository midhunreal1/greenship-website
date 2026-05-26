import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Icon from '@/components/Icon';
import Button from '@/components/Button';
import { services } from '@/data/services';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greenshiptech.com';

interface Props {
  params: Promise<{ service: string; subitem: string }>;
}

export async function generateStaticParams() {
  return services.flatMap((s) =>
    (s.subItems ?? [])
      .filter((sub) => !sub.href)
      .map((sub) => ({ service: s.slug, subitem: sub.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: serviceSlug, subitem: subitemSlug } = await params;
  const parentService = services.find((s) => s.slug === serviceSlug);
  const subItem = parentService?.subItems?.find((sub) => sub.slug === subitemSlug);
  if (!parentService || !subItem) return {};
  return {
    title: `${subItem.title} | ${parentService.title} | Green Ship Technologies`,
    description: subItem.description ?? `${subItem.title} services by Green Ship Technologies — expert maritime solutions for ${parentService.title.toLowerCase()}.`,
    openGraph: {
      title: `${subItem.title} | Green Ship Technologies`,
      description: subItem.description,
      images: parentService.image ? [parentService.image] : [],
    },
  };
}

export default async function SubItemPage({ params }: Props) {
  const { service: serviceSlug, subitem: subitemSlug } = await params;
  const parentService = services.find((s) => s.slug === serviceSlug);
  const subItem = parentService?.subItems?.find((sub) => sub.slug === subitemSlug);
  if (!parentService || !subItem) notFound();

  const relatedSubItems = parentService.subItems?.filter((sub) => sub.slug !== subitemSlug) ?? [];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: subItem.title,
    description: subItem.description,
    provider: { '@type': 'Organization', name: 'Green Ship Technologies', url: siteUrl },
    url: `${siteUrl}/services/${serviceSlug}/${subitemSlug}`,
    serviceType: subItem.title,
    areaServed: ['India', 'Middle East', 'Far East', 'Europe'],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteUrl}/services` },
      { '@type': 'ListItem', position: 3, name: parentService.title, item: `${siteUrl}/services/${serviceSlug}` },
      { '@type': 'ListItem', position: 4, name: subItem.title, item: `${siteUrl}/services/${serviceSlug}/${subitemSlug}` },
    ],
  };

  return (
    <>
      <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-teal text-sm font-medium mb-6 flex-wrap">
                  <Link href="/services" className="hover:opacity-80 transition-opacity flex items-center gap-1">
                    <Icon name="ArrowLeft" size={14} />
                    All Services
                  </Link>
                  <span className="text-white/40">/</span>
                  <Link href={`/services/${serviceSlug}`} className="hover:opacity-80 transition-opacity">
                    {parentService.title}
                  </Link>
                </nav>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-teal/20 border border-teal/30 rounded-xl flex items-center justify-center">
                    <Icon name={parentService.icon} size={24} className="text-teal" />
                  </div>
                  <span className="text-teal text-sm font-semibold tracking-wider uppercase">{parentService.title}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight">
                  {subItem.title}
                </h1>
                {subItem.description && (
                  <p className="text-white/80 text-lg leading-relaxed mb-8">{subItem.description}</p>
                )}
                <Button href="/contact" size="lg" variant="primary">
                  Get In Touch
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
              </div>

              <div className="hidden lg:block">
                {parentService.image && (
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl h-95">
                    <Image
                      src={parentService.image}
                      alt={subItem.title}
                      fill
                      priority
                      quality={90}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-navy/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="bg-teal/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {parentService.title}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* About this service */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
              About {subItem.title}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {subItem.description ?? `Green Ship Technologies provides professional ${subItem.title.toLowerCase()} services as part of our comprehensive ${parentService.title.toLowerCase()} offering. Our team brings deep industry expertise to every engagement, ensuring the highest standards of quality and compliance.`}
            </p>
          </div>
        </section>

        {/* Why choose us */}
        <section className="py-14 bg-light-grey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">Why Choose Green Ship Technologies?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our expertise in {subItem.title.toLowerCase()} is backed by years of hands-on maritime experience and a commitment to excellence.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: 'Award', title: 'Industry Expertise', desc: 'Years of specialized experience in maritime services, delivering results that meet international standards.' },
                { icon: 'Shield', title: 'Compliance Assured', desc: 'Full adherence to SOLAS, MARPOL, and all applicable international maritime conventions and flag regulations.' },
                { icon: 'Globe', title: 'Global Reach', desc: 'Operating across India, the Middle East, Far East, and Europe with a network of qualified maritime professionals.' },
                { icon: 'Clock', title: 'Timely Delivery', desc: 'Efficient project management ensuring your operations are not delayed with on-time, accurate deliverables.' },
                { icon: 'Users', title: 'Dedicated Team', desc: 'A team of certified surveyors, naval architects, and maritime engineers dedicated to your service needs.' },
                { icon: 'HeadphonesIcon', title: '24/7 Support', desc: 'Round-the-clock availability for urgent maritime requirements, inspections, and consultations.' },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-200">
                  <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center mb-3">
                    <Icon name={item.icon} size={20} className="text-teal-dark" />
                  </div>
                  <h3 className="font-bold text-navy mb-1.5 text-sm">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other sub-services under same parent */}
        {relatedSubItems.length > 0 && (
          <section className="py-14 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-2">
                  More under {parentService.title}
                </h2>
                <p className="text-gray-600">Explore our other {parentService.title.toLowerCase()} offerings</p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {relatedSubItems.map((sub) => (
                  <Link
                    key={sub.slug}
                    href={`/services/${serviceSlug}/${sub.slug}`}
                    className="group flex items-center gap-3 bg-white border border-gray-200 hover:border-teal/40 rounded-xl px-5 py-3.5 shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <div className="w-7 h-7 rounded-lg bg-teal/10 flex items-center justify-center group-hover:bg-teal/20 transition-colors">
                      <Icon name={parentService.icon} size={14} className="text-teal-dark" />
                    </div>
                    <span className="font-medium text-sm text-navy group-hover:text-teal-dark transition-colors">{sub.title}</span>
                    <Icon name="ArrowRight" size={14} className="text-gray-400 group-hover:text-teal-dark group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
              </div>
              <div className="text-center mt-6">
                <Link
                  href={`/services/${serviceSlug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-teal-dark hover:underline"
                >
                  View full {parentService.title} page →
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="relative bg-[#0a1e3c] text-white py-16 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 bg-teal rounded-full filter blur-3xl" />
          </div>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/80 mb-8">
              Contact our maritime experts to discuss your {subItem.title.toLowerCase()} requirements.
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
