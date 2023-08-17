import { SITE_URL } from '@/lib/constants';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/ausschreibung/`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/strecken/`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/informationen/`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/benefiz/`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/kontakt/`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/datenschutz/`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/impressum/`,
      lastModified: new Date(),
    },
  ];
}
