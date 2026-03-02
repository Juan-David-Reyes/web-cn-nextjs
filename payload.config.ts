import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import { Media } from './src/collections/Media'
import { HomePage } from './src/globals/HomePage'
import { Users } from './src/collections/Users'
import { es } from '@payloadcms/translations/languages/es'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Media],
  globals: [HomePage],
  editor: lexicalEditor(),
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
