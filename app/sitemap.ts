import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const base = 'https://thatredliner.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '/',
    '/bikes/',
    '/cars/',
    '/evs/',
    '/maintenance/',
    '/comparisons/',
    '/tools/',
    '/tools/bike-mileage/',
    '/tools/fuel-cost/',
    '/tools/vehicle-emi/',
    '/about/',
    '/contact/',
    '/privacy/',
    '/disclaimer/',
  ];

  return paths.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: path === '/' ? 'daily' : 'weekly',
    priority: path === '/' ? 1 : 0.7,
  }));
}
