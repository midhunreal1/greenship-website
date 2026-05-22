'use client';

import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/Icon';
import { Product } from '@/data/products';

function DesktopFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-xl border-2 border-gray-800 shadow-2xl overflow-hidden bg-gray-900">
      <div className="bg-gray-800 px-3 py-2 flex items-center gap-1.5">
        <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
        <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
        <span className="w-3 h-3 rounded-full bg-green-400 inline-block" />
        <div className="ml-3 flex-1 bg-gray-700 rounded px-3 py-1 text-xs text-gray-400 truncate">
          greenshiptech.com / ecoloadmaster
        </div>
      </div>
      <div className="relative h-64 overflow-hidden">
        <Image src={src} alt={alt} fill loading="lazy" quality={90} className="object-cover object-top" />
      </div>
    </div>
  );
}

function RegularImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 border border-gray-100">
      <Image src={src} alt={alt} fill loading="lazy" quality={90} className="object-cover" />
    </div>
  );
}

export default function ProductTabs({ products }: { products: Product[] }) {
  const product = products[0];

  return (
    <div>
      {/* Section heading */}
      <div className="text-center mb-10">
        <span className="text-teal-dark font-semibold text-sm tracking-wider uppercase mb-3 block">Our Software Product</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-navy">{product.name} — {product.tagline}</h2>
        <div className="w-16 h-1 bg-linear-to-r from-teal to-ocean mx-auto mt-4 rounded-full" />
      </div>

      {/* Hero strip */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-14">
        <div>
          <span className="inline-block px-3 py-1 bg-teal/10 border border-teal/30 rounded-full text-teal-dark text-xs font-semibold mb-3">
            {product.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-2">{product.name}</h2>
          <p className="text-teal-dark font-semibold mb-4">{product.tagline}</p>
          <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {product.stats.map((s) => (
              <div key={s.label} className="flex items-center gap-2 bg-light-grey rounded-lg p-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,#0077b6,#2d9e2d)' }}>
                  <Icon name={s.icon} size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-navy">{s.value}</p>
                  <p className="text-xs text-gray-500">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-linear-to-r from-teal to-teal-dark text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all">
              Request a Demo <Icon name="ArrowRight" size={14} />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 border-2 border-teal text-teal-dark px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-teal/5 transition-all">
              Contact Sales
            </Link>
          </div>
        </div>
        <DesktopFrame src={product.heroImage} alt={product.name} />
      </div>

      {/* Features */}
      <div className="space-y-14">
        {product.features.map((feature, i) => (
          <div key={feature.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 !== 0 ? '' : ''}`}>
            <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
              {feature.desktopFrame
                ? <DesktopFrame src={feature.image} alt={feature.title} />
                : <RegularImage src={feature.image} alt={feature.title} />
              }
            </div>
            <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,#0077b6,#2d9e2d)' }}>
                  <Icon name="CheckSquare" size={14} className="text-white" />
                </div>
                <span className="text-teal-dark text-xs font-semibold uppercase tracking-wide">Feature</span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">{feature.description}</p>
              <ul className="space-y-2">
                {feature.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-gray-700">
                    <Icon name="CheckCircle" size={15} className="text-teal-dark mt-0.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Modules */}
      <div className="mt-14 bg-navy rounded-2xl p-6 text-white text-center">
        <h3 className="font-bold mb-4 text-lg">{product.name} Modules</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {product.modules.map((mod) => (
            <span key={mod} className="px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium">
              {mod}
            </span>
          ))}
        </div>
      </div>

      {/* Why Choose */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {product.whyChoose.map((item) => (
          <div key={item.title} className="bg-light-grey rounded-xl p-4">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-2" style={{ background: 'linear-gradient(135deg,#0077b6,#2d9e2d)' }}>
              <Icon name={item.icon} size={18} className="text-white" />
            </div>
            <h4 className="font-bold text-navy text-sm mb-1">{item.title}</h4>
            <p className="text-gray-600 text-xs leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
