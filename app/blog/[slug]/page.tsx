import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import { blogPosts } from '@/data/blog';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greenshiptech.com';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.metaDescription,
  };
}

const categoryColors: Record<string, string> = {
  'Marine Software':       'bg-blue-100 text-blue-800',
  'Flag Registration':     'bg-emerald-100 text-emerald-800',
  'Ship Design':           'bg-purple-100 text-purple-800',
  'NDT Services':          'bg-orange-100 text-orange-800',
  'Renewable Energy':      'bg-yellow-100 text-yellow-800',
  'Survey & Certification':'bg-teal-100 text-teal-800',
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    image: post.image.startsWith('http') ? post.image : `${siteUrl}${post.image}`,
    datePublished: post.publishedDate,
    author: { '@type': 'Organization', name: post.author, url: siteUrl },
    publisher: { '@type': 'Organization', name: 'Green Ship Technologies', logo: { '@type': 'ImageObject', url: `${siteUrl}/logo.svg` } },
    url: `${siteUrl}/blog/${post.slug}`,
    keywords: post.tags.join(', '),
    articleSection: post.category,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${siteUrl}/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <Script id="blog-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-[#0a1e3c] text-white py-14 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-20 w-72 h-72 bg-teal rounded-full filter blur-3xl" />
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link href="/blog" className="inline-flex items-center gap-2 text-teal text-sm mb-6 hover:gap-3 transition-all">
              <Icon name="ArrowLeft" size={15} /> All Articles
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${categoryColors[post.category] ?? 'bg-gray-100 text-gray-700'}`}>
                {post.category}
              </span>
              <span className="text-white/50 text-xs">{post.readTime}</span>
              <span className="text-white/50 text-xs">·</span>
              <span className="text-white/50 text-xs">{post.publishedDate}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">{post.excerpt}</p>
          </div>
        </section>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            quality={90}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/20" />
        </div>

        {/* Article Body */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <article className="prose-custom">
            {post.sections.map((section, i) => {
              if (section.type === 'h2') return (
                <h2 key={i} className="text-xl sm:text-2xl font-bold text-navy mt-8 mb-3">{section.content}</h2>
              );
              if (section.type === 'h3') return (
                <h3 key={i} className="text-lg font-bold text-navy mt-6 mb-2">{section.content}</h3>
              );
              if (section.type === 'p') return (
                <p key={i} className="text-gray-700 leading-relaxed mb-4">{section.content}</p>
              );
              if (section.type === 'ul') return (
                <ul key={i} className="mb-4 space-y-2">
                  {section.items?.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-700">
                      <Icon name="CheckCircle" size={16} className="text-teal-dark mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              );
              if (section.type === 'highlight') return (
                <div key={i} className="border-l-4 border-teal bg-teal/5 px-5 py-4 rounded-r-xl mb-4">
                  <p className="text-navy font-medium leading-relaxed">{section.content}</p>
                </div>
              );
              return null;
            })}
          </article>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-gray-100">
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-light-grey text-navy text-xs font-medium rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {/* Author */}
          <div className="flex items-center gap-4 mt-8 p-5 bg-light-grey rounded-2xl">
            <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,#0077b6,#2d9e2d)' }}>
              <Icon name="Ship" size={22} className="text-white" />
            </div>
            <div>
              <p className="font-bold text-navy">{post.author}</p>
              <p className="text-gray-500 text-sm">Maritime experts — Navi Mumbai, India</p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 p-6 bg-[#0a1e3c] rounded-2xl text-white text-center">
            <h3 className="font-bold text-lg mb-2">Need Expert Maritime Services?</h3>
            <p className="text-white/70 text-sm mb-4">Contact Green Ship Technologies for professional maritime solutions tailored to your needs.</p>
            <Button href="/contact" variant="primary" size="md">
              Get In Touch <Icon name="ArrowRight" size={15} className="ml-2" />
            </Button>
          </div>
        </div>

        {/* Related Articles */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
          <h2 className="text-xl font-bold text-navy mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                key={p.id}
                href={`/blog/${p.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image src={p.image} alt={p.title} fill loading="lazy" quality={85}
                    className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-linear-to-t from-navy/40 to-transparent" />
                </div>
                <div className="p-4">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${categoryColors[p.category] ?? 'bg-gray-100 text-gray-700'}`}>
                    {p.category}
                  </span>
                  <h3 className="text-sm font-bold text-navy mt-2 group-hover:text-teal-dark transition-colors leading-snug line-clamp-2">
                    {p.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-2">{p.readTime} · {p.publishedDate}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
