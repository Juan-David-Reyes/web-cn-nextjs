import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor, FixedToolbarFeature, HeadingFeature } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import { s3Storage } from '@payloadcms/storage-s3'
import { Media } from './src/collections/Media.ts'
import { HomePage } from './src/globals/HomePage.ts'
import { Users } from './src/collections/Users.ts'
import { Testimonials } from './src/collections/Testimonials.ts'
import { Posts } from './src/collections/Posts.ts'
import { PrivacyPolicy } from './src/globals/PrivacyPolicy.ts'
import { PrivacyPolicyExtended } from './src/globals/PrivacyPolicyExtended.ts'
import { TermsAndConditions } from './src/globals/TermsAndConditions.ts'
import { ServiceFaqs } from './src/collections/ServiceFaqs.ts'
import { CookiesPolicy } from './src/globals/CookiesPolicy.ts'
import { es } from '@payloadcms/translations/languages/es'

import { seoPlugin } from '@payloadcms/plugin-seo'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
  cors: '*',
  csrf: [
    'https://codigonativo1.com',
    'https://codigonativo.com',
    'http://localhost:3000',
    process.env.NEXT_PUBLIC_SERVER_URL || '',
  ].filter(Boolean),
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '- Código Nativo',
      icons: [
        {
          url: '/images/favicon/favicon.ico',
          rel: 'icon',
        },
      ],
      openGraph: {
        images: [
          {
            url: '/images/favicon/apple-touch-icon.png',
          },
        ],
      },
    },
  },
  collections: [Users, Media, Testimonials, Posts, ServiceFaqs],
  globals: [HomePage, PrivacyPolicy, PrivacyPolicyExtended, TermsAndConditions, CookiesPolicy],
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      FixedToolbarFeature(),
      HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
    ],
  }),
  plugins: [
    seoPlugin({
      collections: ['posts'],
      uploadsCollection: 'media',
      tabbedUI: true,
      generateTitle: ({ doc }) => `Código Nativo | ${doc.title}`,
      generateDescription: ({ doc }) => 'Artículo técnico sobre desarrollo de software, diseño web, o tendencias digitales por Código Nativo.',
      generateImage: ({ doc }) => doc.featuredImage,
    }),
    s3Storage({
      collections: {
        media: true,
      },
      bucket: process.env.S3_BUCKET || '',
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
        },
        region: process.env.S3_REGION || 'us-east-1',
        endpoint: process.env.S3_ENDPOINT || '',
        forcePathStyle: true,
      },
    }),
  ],
  i18n: {
    supportedLanguages: { es },
    fallbackLanguage: 'es',
  },
  secret: process.env.PAYLOAD_SECRET || 'codigo-nativo-super-secret-default',
  db: postgresAdapter({
    // Utilizaremos la URI de la DB del .env.local de Supabase
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
})
