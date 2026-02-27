import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.avedatechnologies.com';
  const staticRoutes = [
    '/',
    '/about',
    '/case-studies',
    '/contact',
    '/deepak-yadav',
    '/founders',
    '/industries',
    '/insides',
    '/privacy-policy',
    '/services',
    '/services/ai-automation',
    '/services/app-development',
    '/services/digital-marketing',
    '/services/digital-marketing/pricing',
    '/services/political-campaigning',
    '/services/seo-optimization',
    '/services/ui-ux-design',
    '/services/web-development',
    '/terms-and-conditions',
    '/works',
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '/' ? 1 : 0.8,
  }));
}
