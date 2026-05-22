import Script from 'next/script';
import { companyInfo, contactInfo, socialMedia } from '@/data/company';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greenshiptech.com';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: companyInfo.name,
  alternateName: 'GST',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description: companyInfo.description,
  email: contactInfo.email,
  telephone: contactInfo.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'A-303, 3rd Floor, The Great Eastern Summit, Plot No - 56, Sector - 15',
    addressLocality: 'CBD Belapur, Navi Mumbai',
    addressRegion: 'Maharashtra',
    postalCode: '400614',
    addressCountry: 'IN',
  },
  sameAs: socialMedia.map((social) => social.url),
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: contactInfo.phone,
      contactType: 'customer service',
      areaServed: ['IN', 'AE', 'EU'],
      availableLanguage: ['en', 'hi'],
    },
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: companyInfo.name,
  url: siteUrl,
  description: companyInfo.description,
  publisher: { '@type': 'Organization', name: companyInfo.name },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteUrl}/#localbusiness`,
  name: companyInfo.name,
  image: `${siteUrl}/logo.png`,
  url: siteUrl,
  telephone: contactInfo.phone,
  email: contactInfo.email,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'A-303, 3rd Floor, The Great Eastern Summit, Plot No - 56, Sector - 15',
    addressLocality: 'CBD Belapur, Navi Mumbai',
    addressRegion: 'Maharashtra',
    postalCode: '400614',
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 19.0176, longitude: 73.0286 },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
};

export default function StructuredData() {
  return (
    <>
      <Script id="organization-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Script id="localbusiness-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    </>
  );
}
