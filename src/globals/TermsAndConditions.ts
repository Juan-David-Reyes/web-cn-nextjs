import type { GlobalConfig } from 'payload'

export const TermsAndConditions: GlobalConfig = {
  slug: 'terms-and-conditions',
  access: {
    read: () => true, // Publicly accessible to fetch content
  },
  fields: [
    {
      name: 'breadcrumb',
      type: 'text',
      required: true,
      defaultValue: 'Inicio > Términos y condiciones',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Términos y Condiciones',
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
  ],
}
