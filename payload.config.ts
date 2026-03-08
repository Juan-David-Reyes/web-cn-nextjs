import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor, FixedToolbarFeature, HeadingFeature } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { s3Storage } from '@payloadcms/storage-s3'
import { Media } from './src/collections/Media.ts'
import { HomePage } from './src/globals/HomePage.ts'
import { Users } from './src/collections/Users.ts'
import { Testimonials } from './src/collections/Testimonials.ts'
import { Posts } from './src/collections/Posts.ts'
import { PrivacyPolicy } from './src/globals/PrivacyPolicy.ts'
import { TermsAndConditions } from './src/globals/TermsAndConditions.ts'
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
  sharp,
  admin: {
    user: Users.slug,
  },
  collections: [Users, Media, Testimonials, Posts],
  globals: [HomePage, PrivacyPolicy, TermsAndConditions, CookiesPolicy],
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
      generateTitle: ({ doc }) => `Código Nativo | ${doc.title}`,
      generateDescription: ({ doc }) => doc.excerpt || 'Artículo técnico sobre desarrollo de software, diseño web, o tendencias digitales por Código Nativo.',
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
