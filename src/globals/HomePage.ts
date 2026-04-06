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
          name: 'preTitle',
          type: 'text',
          defaultValue: 'TÚ PONES LA VISIÓN, NOSOTROS EL CÓDIGO',
          admin: {
            description: 'Texto del badge superior (se muestra en mayúsculas sobre el título)',
          },
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'Activos digitales que impulsan tu próximo',
        },
        {
          name: 'highlight',
          type: 'text',
          required: true,
          defaultValue: 'nivel de crecimiento',
          admin: {
            description: 'Texto en itálica (fuente Playfair) que aparece junto al título',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          defaultValue: 'Combinamos desarrollo de producto, diseño UX/UI de alta conversión y estrategia digital para transformar empresas en líderes de su sector.',
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
