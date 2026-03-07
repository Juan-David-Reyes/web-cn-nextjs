import type { GlobalConfig } from 'payload'

export const CookiesPolicy: GlobalConfig = {
  slug: 'cookies-policy',
  access: {
    read: () => true, // Publicly accessible to fetch content
  },
  fields: [
    {
      name: 'breadcrumb',
      type: 'text',
      required: true,
      defaultValue: 'Inicio > Política de cookies',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Política de Cookies',
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
  ],
}
