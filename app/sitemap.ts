import { MetadataRoute } from 'next';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { SERVICES_DATA } from '@/lib/data/services';

export const revalidate = 3600; // Revalidar como máximo cada hora

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || process.env.SITE_URL || 'https://codigonativo.com';

  // 1. Páginas estáticas principales
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/nosotros`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/politica-de-cookies`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/politicas-de-privacidad`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/politicas-de-privacidad/extendida`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terminos-y-condiciones`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // 2. Páginas de Servicios dinámicas
  const servicePages: MetadataRoute.Sitemap = SERVICES_DATA.map((service) => ({
    url: `${baseUrl}/servicios/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // 3. Artículos de Blog dinámicos desde Payload CMS
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const payload = await getPayload({ config: configPromise });
    const postsData = await payload.find({
      collection: 'posts',
      where: {
        status: {
          equals: 'publish',
        },
      },
      limit: 1000,
      overrideAccess: false,
    });

    blogPages = postsData.docs.map((post) => {
      const updatedAt = post.updatedAt || post.publishedDate || post.createdAt;
      return {
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: updatedAt ? new Date(updatedAt) : new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      };
    });
  } catch (error) {
    console.error('Error al obtener los posts de blog para el sitemap:', error);
  }

  return [...staticPages, ...servicePages, ...blogPages];
}
