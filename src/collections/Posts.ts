import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Título',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Imagen Destacada',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Contenido',
      admin: {
        description: '✨ Redacta o pega el contenido de tu artículo aquí.',
      }
    },

    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Resumen (Excerpt)',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'publishedDate',
      type: 'date',
      label: 'Fecha de publicación original',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'status',
      type: 'select',
      label: 'Estado',
      defaultValue: 'publish',
      options: [
        { label: 'Publicado', value: 'publish' },
        { label: 'Borrador', value: 'draft' },
        { label: 'Oculto', value: 'hidden' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'category',
      type: 'text',
      label: 'Categoría',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
