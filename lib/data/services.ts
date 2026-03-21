export interface ServiceFeature {
  badge?: string;
  title: string;
  description: string;
  image: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceData {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  hero: {
    badge: string;
    title: React.ReactNode | string;
    description: string;
    primaryButton: { text: string; link: string };
    secondaryButton?: { text: string; link: string };
    image: string;
  };
  features: ServiceFeature[];
  faqs: ServiceFAQ[];
}

export const SERVICES_DATA: ServiceData[] = [
  {
    id: 1,
    slug: 'desarrollo-web',
    title: 'Desarrollo Web de Alto Rendimiento',
    shortDescription: 'Creamos sitios web a medida usando tecnologías modernas como Next.js y React. Nos enfocamos en la velocidad de carga (Core Web Vitals), escalabilidad y una experiencia de usuario (UX) insuperable.',
    image: '/img/services-web-dev.jpg',
    hero: {
      badge: 'Start Building',
      title: 'Desarrollo Web de Alto Rendimiento',
      description: 'Valida tus ideas más rápido con sitios web super-rápidos y construidos con React y Next.js. Evita el abandono de usuarios con un rendimiento de clase mundial.',
      primaryButton: { text: 'Solicitar cotización', link: '/contacto' },
      secondaryButton: { text: 'Ver portafolio', link: '/portafolio' },
      image: '/img/services-web-dev-hero.jpg'
    },
    features: [
      {
        badge: 'Step 1',
        title: 'Arquitectura escalable desde el primer día',
        description: 'Construidos para el futuro. Utilizamos Server Components y Edge caching para asegurarnos de que tu aplicación nunca sufra caídas bajo tráfico elevado.',
        image: '/img/services-web-dev-f1.jpg'
      },
      {
        badge: 'Step 2',
        title: 'Core Web Vitals al 100/100',
        description: 'Cada imagen, fuente y script se optimiza para lograr el LCP más bajo posible. Tu sitio será amado tanto por los usuarios como por Google.',
        image: '/img/services-web-dev-f2.jpg'
      },
      {
        badge: 'Step 3',
        title: 'Integraciones sin fisuras',
        description: 'Conectamos tu sitio con cualquier CRM, ERP o herramienta de automatización a través de APIs robustas.',
        image: '/img/services-web-dev-f3.jpg'
      }
    ],
    faqs: [
      {
        question: '¿Qué tecnologías utilizan?',
        answer: 'Principalmente Next.js, React, Tailwind CSS y bases de datos modernas según el requerimiento. Estas tecnologías nos permiten crear sitios extremadamente rápidos y seguros.'
      },
      {
        question: '¿Cuánto tiempo tarda en desarrollarse un sitio?',
        answer: 'Depende de la complejidad. Un proyecto corporativo promedio toma entre 4 y 8 semanas desde el diseño hasta el lanzamiento.'
      }
    ]
  },
  {
    id: 2,
    slug: 'seo-tecnico',
    title: 'SEO Técnico y Análisis de Rendimiento',
    shortDescription: 'Optimizamos la estructura interna de tu sitio para dominar los motores de búsqueda. Realizamos auditorías profundas, optimización de LCP/CLS.',
    image: '/img/services-seo.jpg',
    hero: {
      badge: 'Rank Higher',
      title: 'Domina los Motores de Búsqueda',
      description: 'El SEO ya no es solo palabras clave. Es la experiencia de usuario y el rendimiento técnico. Hacemos que Google ame tu sitio tanto como tus clientes.',
      primaryButton: { text: 'Auditoría Gratuita', link: '/contacto' },
      image: '/img/services-seo-hero.jpg'
    },
    features: [
      {
        badge: 'Auditoría Profunda',
        title: 'Encontramos lo que te frena',
        description: 'Escaneamos tu sitio en busca de errores técnicos, problemas de indexación y cuellos de botella de rendimiento que están afectando tu ranking.',
        image: '/img/services-seo-f1.jpg'
      },
      {
        badge: 'On-Page Optimization',
        title: 'Contenido estructurado a la perfección',
        description: 'Optimizamos metadatos, estructuramos el schema markup (JSON-LD) y aseguramos la mejor jerarquía de encabezados para el bot de Google.',
        image: '/img/services-seo-f2.jpg'
      }
    ],
    faqs: [
      {
        question: '¿Cuándo veré resultados?',
        answer: 'El SEO es una estrategia a mediano-largo plazo. Los cambios técnicos suelen reflejarse en 4-12 semanas una vez que los bots re-indexan.'
      }
    ]
  },
  {
    id: 3,
    slug: 'mantenimiento-web',
    title: 'Mantenimiento y Evolución Continua',
    shortDescription: 'Ofrecemos actualizaciones de seguridad constantes, monitoreo de uptime, respaldos automatizados y mejoras iterativas para que tu plataforma nunca se quede atrás.',
    image: '/img/services-maintenance.jpg',
    hero: {
      badge: 'Peace of Mind',
      title: 'Tu Plataforma, Siempre Segura',
      description: 'Nos encargamos de lo técnico para que tú te enfoques en tu negocio. Monitoreo 24/7, respaldos y mejoras continuas.',
      primaryButton: { text: 'Contactar a soporte', link: '/contacto' },
      image: '/img/services-maint-hero.jpg'
    },
    features: [
      {
        badge: 'Monitoreo 24/7',
        title: 'Vigilamos tú sitio cuando no estás',
        description: 'Sistemas automatizados que alertan sobre caídas en segundos para actuar antes de que afecte tus ventas.',
        image: '/img/services-maint-f1.jpg'
      },
      {
        badge: 'Actualizaciones de Seguridad',
        title: 'Código siempre al día',
        description: 'Evitamos vulnerabilidades actualizando dependencias y frameworks de manera proactiva y segura.',
        image: '/img/services-maint-f2.jpg'
      }
    ],
    faqs: [
      {
        question: '¿Qué incluye el mantenimiento?',
        answer: 'Backups diarios, monitoreo de tiempo de actividad, parches de seguridad, optimización de base de datos y horas para pequeños cambios de contenido.'
      }
    ]
  },
  {
    id: 4,
    slug: 'diseno-ux-ui',
    title: 'Diseño UX/UI y Sistemas de Diseño',
    shortDescription: 'Diseñamos interfaces centradas en la conversión. Construimos Design Systems robustos que mantienen coherencia visual en todos tus productos digitales.',
    image: '/img/services-design.jpg',
    hero: {
      badge: 'User Centric',
      title: 'Diseño que Convierte',
      description: 'Combinamos estética impresionante con psicología de usuario para interfaces que no solo se ven increíbles, sino que funcionan fluidamente a cada clic.',
      primaryButton: { text: 'Agendar llamada', link: '/contacto' },
      image: '/img/services-design-hero.jpg'
    },
    features: [
      {
        badge: 'Research',
        title: 'Empezamos entendiendo a tu usuario',
        description: 'Prototipado rápido y validación de ideas (al estilo Maze) antes de escribir una sola línea de código.',
        image: '/img/services-design-f1.jpg'
      },
      {
        badge: 'Design Systems',
        title: 'Escalabilidad visual garantizada',
        description: 'Creamos sistemas de componentes reutilizables en Figma que se traducen 1 a 1 a React/Next.js.',
        image: '/img/services-design-f2.jpg'
      }
    ],
    faqs: [
      {
        question: '¿Entregan los archivos fuente?',
        answer: 'Por supuesto. Al finalizar el proyecto te entregamos acceso completo a los archivos de Figma organizados profesionalmente.'
      }
    ]
  }
];
