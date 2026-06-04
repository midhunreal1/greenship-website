import type { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { industries } from '@/data/industries';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greenshiptech.com';
const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${siteUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/industries`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
{ url: `${siteUrl}/client-portfolio`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${siteUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${siteUrl}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${siteUrl}/terms-of-service`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.flatMap((service) => [
    {
      url: `${siteUrl}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    ...(service.subItems ?? [])
      .filter((sub) => !sub.href)
      .map((sub) => ({
        url: `${siteUrl}/services/${service.slug}/${sub.slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      })),
  ]);

  const industryRoutes: MetadataRoute.Sitemap = industries.map((industry) => ({
    url: `${siteUrl}/industries/${industry.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...serviceRoutes, ...industryRoutes];
}
