import type { GlobalConfig } from 'payload'

export const PrivacyPolicy: GlobalConfig = {
  slug: 'privacy-policy',
  access: {
    read: () => true, // Publicly accessible to fetch content
  },
  fields: [
    {
      name: 'breadcrumb',
      type: 'text',
      required: true,
      defaultValue: 'Inicio > Políticas de privacidad',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Políticas de Privacidad',
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
  ],
}
