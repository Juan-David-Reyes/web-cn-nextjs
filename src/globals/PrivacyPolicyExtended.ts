import type { GlobalConfig } from 'payload'

export const PrivacyPolicyExtended: GlobalConfig = {
  slug: 'privacy-policy-extended',
  label: 'Política de Privacidad Extendida',
  access: {
    read: () => true, // Publicly accessible to fetch content
  },
  fields: [
    {
      name: 'breadcrumb',
      type: 'text',
      required: true,
      defaultValue: 'Inicio > Políticas de privacidad > Extendida',
      admin: {
        description: 'Texto de navegación',
      }
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Políticas de Privacidad (Extendidas)',
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      admin: {
        description: 'Todo el contenido legal en detalle técnico.',
      }
    },
  ],
}
