import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import { products } from '@/data/products';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greenshiptech.com';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  const title = `${product.name} – ${product.tagline}`;
  return {
    title,
    description: product.description,
    openGraph: {
      title,
      description: product.description,
      url: `${siteUrl}/products/${slug}`,
    },
    alternates: {
      canonical: `/products/${slug}`,
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product!.name,
    description: product!.description,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Windows, Web',
    url: `${siteUrl}/products/${slug}`,
    provider: { '@type': 'Organization', name: 'Green Ship Technologies', url: siteUrl },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: product!.name, item: `${siteUrl}/products/${slug}` },
    ],
  };

  return (
    <>
      <Script id="product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-[#0a1e3c] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-80 h-80 bg-teal rounded-full filter blur-2xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-ocean rounded-full filter blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Link href={`/services/${product.serviceSlug}`} className="text-teal text-sm hover:underline flex items-center gap-1">
                    <Icon name="ArrowLeft" size={14} /> Marine Software Services
                  </Link>
                </div>
                <span className="inline-block px-3 py-1 bg-teal/20 border border-teal/30 rounded-full text-teal text-xs font-semibold mb-4">
                  {product.badge}
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight">
                  {product.name}
                </h1>
                <p className="text-teal text-lg font-semibold mb-4">{product.tagline}</p>
                <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8">
                  {product.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button href="/contact" size="md" variant="primary">
                    Request a Demo
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                  <Button href="/contact" variant="outline" size="md">
                    Contact Sales
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block">
                {/* Desktop browser frame */}
                <div className="rounded-xl border-2 border-gray-700 shadow-2xl overflow-hidden bg-gray-900">
                  {/* Browser bar */}
                  <div className="bg-gray-800 px-3 py-2 flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-400 inline-block" />
                    <div className="ml-3 flex-1 bg-gray-700 rounded px-3 py-1 text-xs text-gray-400 truncate">
                      greenshiptech.com / {product.slug}
                    </div>
                  </div>
                  {/* Image */}
                  <div className="relative h-[350px] overflow-hidden">
                    <Image
                      src={product.heroImage}
                      alt={product.name}
                      fill
                      priority
                      quality={90}
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats row */}
        <section className="bg-white border-b border-gray-100 py-6 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {product.stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,#0077b6,#2d9e2d)' }}>
                    <Icon name={stat.icon} size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-navy text-sm">{stat.value}</p>
                    <p className="text-gray-500 text-xs">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Challenge */}
        <section className="py-14 sm:py-16 bg-light-grey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-72">
                <Image
                  src={product.challenge.image}
                  alt="Industry Challenge"
                  fill
                  loading="lazy"
                  quality={90}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-navy/30" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 text-navy text-xs font-semibold px-3 py-1.5 rounded-full">
                    The Challenge
                  </span>
                </div>
              </div>
              <div>
                <span className="text-teal-dark font-semibold text-sm tracking-wider uppercase mb-3 block">Industry Challenge</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">{product.challenge.title}</h2>
                <p className="text-gray-600 leading-relaxed">{product.challenge.body}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Overview */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-teal-dark font-semibold text-sm tracking-wider uppercase mb-3 block">Product Overview</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">What is {product.name}?</h2>
            <p className="text-gray-600 leading-relaxed text-lg">{product.overview}</p>
          </div>
        </section>

        {/* System Features */}
        <section className="py-12 bg-light-grey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-teal-dark font-semibold text-sm tracking-wider uppercase mb-3 block">System Features</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy">Comprehensive Modules</h2>
            </div>
            <div className="space-y-12">
              {product.features.map((feature, i) => (
                <div key={feature.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                    {feature.desktopFrame ? (
                      /* Desktop / browser frame for software screenshots */
                      <div className="rounded-lg border-2 border-gray-800 shadow-2xl overflow-hidden bg-gray-900">
                        {/* Browser bar */}
                        <div className="bg-gray-800 px-3 py-2 flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-green-400 inline-block" />
                          <div className="ml-2 flex-1 bg-gray-700 rounded px-3 py-0.5 text-xs text-gray-400 truncate">
                            greenshiptech.com / ecoloadmaster
                          </div>
                        </div>
                        {/* Screenshot */}
                        <div className="relative h-56 sm:h-64 overflow-hidden">
                          <Image
                            src={feature.image}
                            alt={feature.title}
                            fill
                            loading="lazy"
                            quality={90}
                            className="object-cover object-top"
                          />
                        </div>
                      </div>
                    ) : (
                      /* Regular image */
                      <div className="relative rounded-2xl overflow-hidden shadow-lg h-60 sm:h-72 border border-gray-100">
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          fill
                          loading="lazy"
                          quality={90}
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>
                  {/* Content */}
                  <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,#0077b6,#2d9e2d)' }}>
                        <Icon name="CheckSquare" size={16} className="text-white" />
                      </div>
                      <span className="text-teal-dark text-xs font-semibold uppercase tracking-wide">Feature</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-navy mb-3">{feature.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.points.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm text-gray-700">
                          <Icon name="CheckCircle" size={16} className="text-teal-dark mt-0.5 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack / Modules */}
        <section className="py-10 bg-navy text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl sm:text-2xl font-bold mb-6">
              {product.slug === 'ecoloadmaster' ? 'Software Modules' : 'System Modules'}
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {product.modules.map((mod) => (
                <span key={mod} className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-medium hover:bg-white/20 transition-colors">
                  {mod}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Product Achievements */}
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-teal-dark font-semibold text-sm tracking-wider uppercase mb-3 block">Real-world Impact</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy">Product Achievements</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {product.achievements.map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-light-grey rounded-xl p-4">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'linear-gradient(135deg,#0077b6,#2d9e2d)' }}>
                    <span className="text-white text-xs font-bold">{i + 1}</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="py-14 bg-light-grey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-navy">Why Choose {product.name}?</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {product.whyChoose.map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: 'linear-gradient(135deg,#0077b6,#2d9e2d)' }}>
                    <Icon name={item.icon} size={20} className="text-white" />
                  </div>
                  <h3 className="font-bold text-navy mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-[#0a1e3c] text-white py-16 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 bg-teal rounded-full filter blur-3xl" />
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-ocean rounded-full filter blur-3xl" />
          </div>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Join maritime professionals worldwide who trust {product.name} for reliable, compliant, and efficient operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button href="/contact" size="lg" variant="primary">
                Request a Demo
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Schedule a Demo
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-8 border-t border-white/10 pt-8">
              {product.stats.slice(0, 3).map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl font-bold text-teal">{s.value}</p>
                  <p className="text-white/60 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
