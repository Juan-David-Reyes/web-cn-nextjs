import type { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  labels: {
    singular: 'Testimonio',
    plural: 'Testimonios',
  },
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true, // Todos pueden leer los testimonios (necesario para el frontend público)
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Nombre del Cliente',
    },
    {
      name: 'role',
      type: 'text',
      required: true,
      label: 'Cargo / Empresa',
    },
    {
      name: 'text',
      type: 'textarea',
      required: true,
      label: 'Testimonio',
    },
  ],
}
