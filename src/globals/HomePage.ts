import type { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  access: {
    read: () => true, // Publicly accessible to fetch content
  },
  fields: [
    {
      name: 'hero',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'Excelencia Digital',
        },
        {
          name: 'highlight',
          type: 'text',
          required: true,
          defaultValue: 'Tu Negocio',
          admin: {
            description: 'The italic gradient text part of the heading',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          defaultValue: 'Transformamos tu visión en soluciones de software de alto impacto. Creamos experiencias únicas, rápidas y escalables con tecnologías de vanguardia.',
        },
      ],
    },
    {
      name: 'services',
      type: 'array',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'iconType',
          type: 'select',
          options: [
            { label: 'Development/Code', value: 'code' },
            { label: 'WordPress', value: 'wordpress' },
            { label: 'Chart/Metrics', value: 'chart' },
            { label: 'Security/Audit', value: 'security' },
            { label: 'Design/Pen', value: 'pen' },
          ],
          required: true,
        },
      ],
    },
  ],
}
