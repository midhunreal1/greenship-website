import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { blogPosts } from '@/data/blog';

export const metadata: Metadata = {
  title: 'Maritime Blog & Technical Insights | Green Ship Technologies',
  description: 'Expert maritime articles from Green Ship Technologies — vessel stability software, IHM surveys, BWTS & scrubber installation, flag registration (Panama/Liberia), ship design, offshore engineering & renewable energy.',
  openGraph: {
    title: 'Maritime Blog & Technical Insights | Green Ship Technologies',
    description: 'Technical insights and industry news from our naval architects, marine engineers & surveyors. Topics: marine software, ship design, IHM surveys, flag registration & offshore renewable energy.',
  },
  alternates: {
    canonical: '/blog',
  },
};

const categoryColors: Record<string, string> = {
  'Marine Software':       'bg-blue-100 text-blue-800',
  'Flag Registration':     'bg-emerald-100 text-emerald-800',
  'Ship Design':           'bg-purple-100 text-purple-800',
  'NDT Services':          'bg-orange-100 text-orange-800',
  'Renewable Energy':      'bg-yellow-100 text-yellow-800',
  'Survey & Certification':'bg-teal-100 text-teal-800',
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-[#0a1e3c] text-white py-14 sm:py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-teal rounded-full filter blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-ocean rounded-full filter blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-3 py-1 bg-teal/20 border border-teal/30 rounded-full text-teal text-xs font-semibold mb-4">
              Maritime Insights
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Blog & Articles
            </h1>
            <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto">
              Expert insights on marine software, ship design, survey & certification, flag registration, NDT, and offshore renewable energy — written by maritime practitioners.
            </p>
          </div>
        </section>

        {/* Featured + All Posts */}
        <Section background="white">
          {/* Featured */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-navy mb-6">Featured Article</h2>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 lg:h-full min-h-[280px] overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  priority
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-r from-navy/30 to-transparent" />
              </div>
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${categoryColors[featured.category] ?? 'bg-gray-100 text-gray-700'}`}>
                    {featured.category}
                  </span>
                  <span className="text-gray-400 text-xs">{featured.readTime}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-navy mb-3 group-hover:text-teal-dark transition-colors leading-tight">
                  {featured.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
                  {featured.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{featured.publishedDate}</span>
                  <span className="inline-flex items-center gap-1.5 text-teal-dark font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                    Read Article →
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* All Posts */}
          <div>
            <h2 className="text-xl font-bold text-navy mb-6">All Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      loading="lazy"
                      quality={90}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-navy/40 to-transparent" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${categoryColors[post.category] ?? 'bg-gray-100 text-gray-700'}`}>
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-xs">{post.readTime}</span>
                    </div>
                    <h3 className="text-base font-bold text-navy mb-2 group-hover:text-teal-dark transition-colors leading-snug flex-1">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
                      <span className="text-xs text-gray-400">{post.publishedDate}</span>
                      <span className="text-teal-dark text-xs font-semibold group-hover:underline">Read More →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section background="navy">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Work With Maritime Experts?
            </h2>
            <p className="text-base sm:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              From vessel stability software to flag registration and offshore engineering — Green Ship Technologies has the expertise your operation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-linear-to-r from-teal to-teal-dark text-white px-8 py-3.5 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all duration-200">
                Contact Us
              </Link>
              <Link href="/services" className="border-2 border-white text-white px-8 py-3.5 rounded-full font-bold hover:bg-white hover:text-navy transition-all duration-200">
                View Our Services
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
