import Script from 'next/script';
import { companyInfo, contactInfo, socialMedia } from '@/data/company';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greenshiptech.com';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService'],
  '@id': `${siteUrl}/#organization`,
  name: companyInfo.name,
  alternateName: ['GST', 'Green Ship Tech'],
  url: siteUrl,
  logo: {
    '@type': 'ImageObject',
    url: `${siteUrl}/logo.png`,
    width: 200,
    height: 200,
  },
  image: `${siteUrl}/og-image.jpg`,
  description: 'Green Ship Technologies is a leading maritime service provider established in 2009 in Navi Mumbai, India. We specialise in Ecoloadmaster stability software, ship design & naval architecture, IHM surveys, class & statutory surveys, flag registration (Panama, Liberia, Palau), offshore engineering, floating solar system design, and ship broking & chartering.',
  foundingDate: '2009',
  numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 50 },
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
  geo: { '@type': 'GeoCoordinates', latitude: 19.0176, longitude: 73.0286 },
  areaServed: [
    { '@type': 'Country', name: 'India' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'Singapore' },
    { '@type': 'AdministrativeArea', name: 'Middle East' },
    { '@type': 'AdministrativeArea', name: 'Far East' },
    { '@type': 'AdministrativeArea', name: 'Europe' },
  ],
  knowsAbout: [
    'Naval Architecture',
    'Ship Design and Engineering',
    'Marine Software Development',
    'Vessel Stability Software',
    'Loadicator Software',
    'Ecoloadmaster Loading Computer',
    'Inventory of Hazardous Materials (IHM) Surveys',
    'Hong Kong Convention Ship Recycling Compliance',
    'Ballast Water Treatment System (BWTS) Installation',
    'Scrubber EGCS Installation Engineering',
    'Marine Condition Surveys',
    'Pre-purchase Vessel Surveys',
    'Draft Surveys',
    'Bunker Surveys',
    'On/Off Hire Surveys',
    'Damage Surveys',
    'Class and Statutory Surveys',
    'SOLAS Compliance',
    'MARPOL Compliance',
    'Flag State Inspections',
    'Port State Control Preparation',
    'Ship Flag Registration',
    'Panama Flag Registration',
    'Liberia Flag Registration',
    'Palau Ship Registration',
    'Open Registry Vessel Registration',
    'Ship Sale and Purchase Brokerage',
    'Ship Chartering — Voyage, Time, Bareboat',
    'Offshore Engineering',
    'MODU Mobile Offshore Drilling Unit Services',
    'Mooring and Motion Analysis',
    'Sea Fastening and Towage Engineering',
    'Floating Solar PV System Design',
    'Offshore Wind Farm Engineering',
    'Renewable Energy Marine Engineering',
    'BWM Convention D-2 Compliance',
    'ISM Code Safety Management',
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'IRS Approved IHM Survey Provider',
      credentialCategory: 'certification',
      recognizedBy: { '@type': 'Organization', name: 'Indian Register of Shipping (IRS)' },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'ABS Approved IHM Survey Provider',
      credentialCategory: 'certification',
      recognizedBy: { '@type': 'Organization', name: 'American Bureau of Shipping (ABS)' },
    },
  ],
  sameAs: [
    ...socialMedia.map((s) => s.url),
    'https://www.google.com/maps/place/Green+Ship+Technologies',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: contactInfo.phone,
      contactType: 'customer service',
      areaServed: ['IN', 'AE', 'SG', 'EU'],
      availableLanguage: ['en', 'hi', 'ar'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+91 8828192100',
      contactType: 'sales',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi'],
    },
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  name: companyInfo.name,
  url: siteUrl,
  description: 'Maritime services provider — Ecoloadmaster stability software, ship design, IHM surveys, flag registration, offshore engineering & ship broking from Navi Mumbai, India.',
  publisher: { '@id': `${siteUrl}/#organization` },
  inLanguage: 'en',
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${siteUrl}/#localbusiness`,
  name: companyInfo.name,
  image: `${siteUrl}/og-image.jpg`,
  url: siteUrl,
  telephone: contactInfo.phone,
  email: contactInfo.email,
  priceRange: '$$',
  currenciesAccepted: 'INR, USD',
  paymentAccepted: 'Cash, Bank Transfer',
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
  hasMap: contactInfo.mapUrl,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '47',
    bestRating: '5',
  },
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
