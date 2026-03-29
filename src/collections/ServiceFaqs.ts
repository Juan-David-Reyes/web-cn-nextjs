import { CollectionConfig } from 'payload'

export const ServiceFaqs: CollectionConfig = {
  slug: 'service-faqs',
  labels: {
    singular: 'FAQ de Servicio',
    plural: 'Service FAQs',
  },
  admin: {
    useAsTitle: 'question',
    group: 'Contenido',
    defaultColumns: ['question', 'serviceSlug'],
  },
  access: {
    read: () => true, // Permitir acceso público desde el frontend
  },
  fields: [
    {
      name: 'serviceSlug',
      type: 'select',
      label: 'Servicio',
      required: true,
      options: [
        { label: 'Diseño y Desarrollo Web', value: 'diseno-web' },
        { label: 'CRO y Optimización', value: 'cro-optimizacion' },
        { label: 'Auditorías SEO/UX', value: 'auditorias' },
        { label: 'Product Design', value: 'product-design' },
      ],
      admin: {
        description: 'Selecciona la página de servicio en la que aparecerá esta pregunta.',
      },
    },
    {
      name: 'question',
      type: 'text',
      label: 'Pregunta',
      required: true,
    },
    {
      name: 'answer',
      type: 'textarea',
      label: 'Respuesta',
      required: true,
    },
  ],
}
