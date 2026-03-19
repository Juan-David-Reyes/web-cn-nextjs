import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Post',
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
            },
            {
              name: 'featuredImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Imagen Destacada',
            },
            {
              name: 'category',
              type: 'text',
              label: 'Categoría',
            },
            {
              name: 'publishedDate',
              type: 'date',
              label: 'Fecha de publicación original',
              admin: {
                date: {
                  pickerAppearance: 'dayAndTime',
                },
              },
            },
          ],
        },
        {
          label: 'Contenido',
          fields: [
            {
              name: 'content',
              type: 'richText',
              label: false,
              admin: {
                description: '✨ Redacta o pega el contenido de tu artículo aquí.',
              }
            },
          ],
        },
      ],
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
  ],
}
