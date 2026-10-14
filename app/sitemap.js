export const dynamic = 'force-static';

export default function sitemap() {
  return [
    {
      url: 'https://saadventureprofile.com',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://saadventureprofile.com/blog',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://saadventureprofile.com/blog/rafting-bogor-murah',
      lastModified: '2025-09-01T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://saadventureprofile.com/blog/tips-rafting-pemula-bogor',
      lastModified: '2025-09-10T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://saadventureprofile.com/blog/outbound-bogor-murah',
      lastModified: '2025-09-15T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://saadventureprofile.com/blog/wisata-rafting-cisadane',
      lastModified: '2025-09-20T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
