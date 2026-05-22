import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import { serviceDetails } from '@/data/serviceDetails';
import { services } from '@/data/services';
import { products } from '@/data/products';
import ProductTabs from '@/components/ProductTabs';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return serviceDetails.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const detail = serviceDetails.find((s) => s.slug === slug);
  if (!detail) return {};
  return {
    title: detail.title,
    description: detail.intro.substring(0, 160),
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const detail = serviceDetails.find((s) => s.slug === slug);
  if (!detail) notFound();

  const otherServices = services.filter((s) => s.slug !== slug);
  const heroImage = services.find((s) => s.slug === slug)?.image ?? detail.heroImage;
  const serviceProducts = products.filter((p) => p.serviceSlug === slug);

  return (
    <>
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
                <Link href="/services" className="inline-flex items-center gap-2 text-teal text-sm font-medium mb-6 hover:gap-3 transition-all">
                  <Icon name="ArrowLeft" size={16} />
                  All Services
                </Link>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-teal/20 border border-teal/30 rounded-xl flex items-center justify-center">
                    <Icon name={detail.icon} size={24} className="text-teal" />
                  </div>
                  <span className="text-teal text-sm font-semibold tracking-wider uppercase">Our Services</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight">
                  {detail.title}
                </h1>
                <p className="text-white text-lg leading-relaxed mb-8">{detail.heroText}</p>
                <Button href="/contact" size="lg" variant="primary">
                  Get In Touch
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
              </div>
              <div className="hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[420px]">
                  <Image
                    src={heroImage}
                    alt={detail.title}
                    fill
                    priority
                    quality={90}
                  className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <Section background="white">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600 leading-relaxed">{detail.intro}</p>
          </div>
        </Section>

        {/* Product Tabs — inline detail view for services with linked products */}
        {serviceProducts.length > 0 && (
          <Section background="white">
            <ProductTabs products={serviceProducts} />
          </Section>
        )}

        {/* Sections */}
        {detail.sections.map((section, si) => (
          <Section key={si} background={si % 2 === 0 ? 'grey' : 'white'}>
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-3">{section.heading}</h2>
              {section.body && <p className="text-gray-600 max-w-3xl mx-auto">{section.body}</p>}
            </div>

            {section.items && section.items.length > 0 && (
              <>
                {/* Items with images → card grid */}
                {section.items.some((i) => i.image) ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.items.map((item, ii) => (
                      <div key={ii} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        {item.image && (
                          <div className="relative h-44 overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.title || section.heading}
                              fill
                              loading="lazy"
                              quality={90}
                  className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
                          </div>
                        )}
                        <div className="p-5">
                          {item.title && (
                            <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                          )}
                          <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Items without images → checklist */
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                    {section.items.map((item, ii) => (
                      <div key={ii} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                        <div className="w-8 h-8 bg-teal/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="CheckCircle" size={18} className="text-teal-dark" />
                        </div>
                        <div>
                          {item.title && <p className="font-semibold text-navy text-sm mb-1">{item.title}</p>}
                          <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </Section>
        ))}

        {/* Flag states (for survey & flag registration pages) */}
        {detail.flags && detail.flags.length > 0 && (
          <Section background="white">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-2">Supported Flag States</h2>
              <p className="text-gray-600">We facilitate registration and compliance across these major registries</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {detail.flags.map((flag) => {
                const codeMap: Record<string, string> = {
                  'Panama': 'pa', 'Liberia': 'lr', 'Palau': 'pw',
                  'St. Kitts & Nevis': 'kn', 'Comoros': 'km',
                  'Cook Islands': 'ck', 'Cook Island': 'ck',
                  'Belize': 'bz', 'Sierra Leone': 'sl',
                  'Tanzania': 'tz', 'St. Vincent & the Grenadines': 'vc',
                };
                const code = codeMap[flag];
                return (
                  <div key={flag} className="bg-white border border-gray-100 rounded-xl p-4 text-center shadow-sm hover:shadow-md hover:border-teal/30 transition-all duration-300 hover:-translate-y-0.5">
                    {code ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={`https://flagcdn.com/48x36/${code}.png`}
                        width={48}
                        height={36}
                        alt={`${flag} flag`}
                        className="mx-auto mb-2 rounded shadow-sm"
                      />
                    ) : (
                      <div className="w-12 h-9 bg-light-grey rounded mx-auto mb-2 flex items-center justify-center">
                        <Icon name="Flag" size={18} className="text-teal-dark" />
                      </div>
                    )}
                    <p className="text-xs font-semibold text-navy leading-tight">{flag}</p>
                  </div>
                );
              })}
            </div>
          </Section>
        )}

        {/* Other Services — dark bg */}
        <section className="bg-[#0a1e3c] py-14 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Explore Other Services</h2>
              <p className="text-white/60">Discover our full range of maritime expertise</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {otherServices.slice(0, 4).map((s) => (
                <Link
                  key={s.id}
                  href={`/services/${s.slug}`}
                  className="group bg-white/10 border border-white/10 hover:bg-white hover:border-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {s.image && (
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        loading="lazy"
                        quality={90}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-navy/60 to-transparent" />
                    </div>
                  )}
                  <div className="p-4">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3 -mt-8 relative z-10 shadow-sm" style={{ background: 'linear-gradient(135deg, #0077b6, #2d9e2d)' }}>
                      <Icon name={s.icon} size={18} className="text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:text-navy transition-colors mb-1.5">{s.title}</h3>
                    <p className="text-xs text-white/60 group-hover:text-gray-500 leading-relaxed line-clamp-2">{s.description}</p>
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
            <p className="text-white mb-8">Contact our maritime experts to discuss your {detail.title.toLowerCase()} requirements</p>
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
