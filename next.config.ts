import { withPayload } from '@payloadcms/next/withPayload';
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pdf.ms.credential.net',
      },
      {
        protocol: 'https',
        hostname: '*.supabase.co',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '3000',
      }
    ],
  },

  /* se debe implementar a futuro este redirect desde el payload para hacerlo más practivo y no depender de despliegues en dev */

  async redirects() {
    return [
      {
        source: '/agencia-de-diseno-web-bogota',
        destination: '/servicios/diseno-web',
        permanent: true,
      },
      {
        source: '/servicios/diseno-ux-ui',
        destination: '/servicios/product-design',
        permanent: true,
      },
      {
        source: '/servicios/optimizacion-web',
        destination: '/servicios/cro-optimizacion',
        permanent: true,
      },
      {
        source: '/servicios/agencia-de-diseno-web-colombia',
        destination: '/servicios/diseno-web',
        permanent: true,
      },
      {
        source: '/servicios-de-alto-valor-agregado',
        destination: '/blog/servicios-de-alto-valor-agregado',
        permanent: true,
      },
      {
        source: '/marketing-de-conversiones',
        destination: '/blog/marketing-de-conversiones',
        permanent: true,
      },
    ];
  },
};

export default withPayload(nextConfig);