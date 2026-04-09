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
    {
      name: 'diagnostico',
      type: 'group',
      label: 'Sección Diagnóstico',
      fields: [
        {
          name: 'preTitle',
          type: 'text',
          defaultValue: 'Diagnóstico',
          admin: {
            description: 'Texto del badge superior (se muestra en mayúsculas)',
          },
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'Una web lenta o un diseño confuso es una',
          admin: {
            description: 'Primera parte del título del H2',
          },
        },
        {
          name: 'titleHighlight',
          type: 'text',
          required: true,
          defaultValue: 'fuga de dinero silenciosa.',
          admin: {
            description: 'Texto en itálica Playfair al final del título H2',
          },
        },
        {
          name: 'items',
          type: 'array',
          label: 'Cards de diagnóstico',
          minRows: 1,
          maxRows: 6,
          defaultValue: [
            {
              label: 'Tiempos',
              title: 'Baja tasa de conversión',
              description: 'El 53% de los usuarios abandona un sitio que tarda más de 3 segundos en cargar. Una web lenta no es solo mala experiencia, es pérdida directa de ventas.',
            },
            {
              label: 'Capacidad',
              title: 'Performance deficiente',
              description: 'Si tu visitante no entiende qué hacer en menos de 5 segundos, se va. La claridad visual y la jerarquía de contenido son la diferencia entre un lead y un rebote.',
            },
            {
              label: 'Avance',
              title: 'Tecnología obsoleta que no escala',
              description: 'Una web sin estructura semántica, sin Core Web Vitals óptimos y sin metadatos correctos está invisible para los motores de búsqueda, sin importar qué tan bueno sea tu servicio.',
            },
          ],
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
              admin: {
                description: 'Texto del span (badge sobre el título)',
              },
            },
            {
              name: 'title',
              type: 'text',
              required: true,
              admin: {
                description: 'Título H4 de la card',
              },
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
              admin: {
                description: 'Párrafo descriptivo de la card',
              },
            },
            {
              name: 'icon',
              type: 'upload',
              relationTo: 'media',
              required: false,
              admin: {
                description: 'Ícono de la card (SVG o PNG, recomendado 64×64px)',
              },
            },
          ],
        },
      ],
    },
  ],
}
