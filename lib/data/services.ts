export interface ServiceFeature {
  badge?: string;
  title: string;
  description: string;
  image: string;
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
    tools?: { name: string; icon: string }[];
  };
  features: ServiceFeature[];
  cta: {
    titlePrefix: string;
    titleHighlight: string;
    description: string;
  };
}

export const SERVICES_DATA: ServiceData[] = [
  {
    id: 1,
    slug: 'diseno-web',
    title: 'Diseño y desarrollo web',
    shortDescription: 'Sitios web modernos y sumamente rápidos, diseñados estratégicamente para convertir y optimizados para SEO On-Page.',
    image: '/img/services-web-dev.jpg',
    hero: {
      badge: 'Code & Design',
      title: 'Diseño y desarrollo web de Alto Rendimiento',
      description: 'Valida tus ideas más rápido con sitios web construidos con React y Next.js. Evita el abandono de usuarios con un rendimiento de clase mundial y estética premium.',
      primaryButton: { text: 'Cotizar proyecto', link: '/contacto' },
      secondaryButton: { text: 'Ver más', link: '#features' },
      image: '/img/services-web-hero.jpg',
      tools: [
        { name: 'Next.js 15 & React', icon: '/images/icons/nextjs.svg' },
        { name: 'Arquitecturas Headless', icon: '/images/icons/headless.svg' },
        { name: 'Integración CMS Avanzada', icon: '/images/icons/cms.svg' },
        { name: 'Rendimiento Extremo (LCP < 1s)', icon: '/images/icons/performance.svg' }
      ]
    },
    features: [
      {
        badge: 'Step 1',
        title: 'Arquitectura escalable y componentes reutilizables',
        description: 'Desarrollamos interfaces pensando en el futuro. Todo es modular, asegurando que tu plataforma crezca a la misma velocidad que tu negocio.',
        image: '/img/services-web-f1.jpg'
      },
      {
        badge: 'Step 2',
        title: 'Rendimiento técnico sin compromisos',
        description: 'Usamos Server Components de Next.js para entregar HTML estático hiper-rápido, maximizando el LCP y el SEO general.',
        image: '/img/services-web-f2.jpg'
      }
    ],

    cta: {
      titlePrefix: 'Lleva tu presencia digital al ',
      titleHighlight: 'siguiente nivel',
      description: 'Construyamos una plataforma rápida, escalable y diseñada para convertir visitantes en clientes fieles. Conversemos sobre tu visión.'
    }
  },
  {
    id: 2,
    slug: 'cro-optimizacion',
    title: 'CRO y Optimización',
    shortDescription: 'Velocidad absoluta y optimización de conversión técnica para multiplicar las ventas en tu e-commerce o plataforma actual sin cambiar de marca.',
    image: '/img/services-cro.jpg',
    hero: {
      badge: 'Performance',
      title: 'Convierte Más con el Mismo Tráfico',
      description: 'Optimizamos la velocidad de carga (Core Web Vitals) y redefinimos flujos para reducir el abandono de carritos y maximizar conversiones.',
      primaryButton: { text: 'Solicitar auditoría', link: '/contacto' },
      image: '/img/services-cro-hero.jpg',
      tools: [
        { name: 'A/B Testing Avanzado', icon: '/images/icons/ab-testing.svg' },
        { name: 'Optimización de Checkout', icon: '/images/icons/checkout.svg' },
        { name: 'Mapas de calor (Heatmaps)', icon: '/images/icons/heatmaps.svg' },
        { name: 'Reducción de abandono', icon: '/images/icons/abandonment.svg' }
      ]
    },
    features: [
      {
        badge: 'Load Speed',
        title: 'LCP en menos de 1 segundo',
        description: 'Una ganancia de 0.1s en el móvil equivale a +8% en conversión. Arreglamos cuellos de botella para que tu sitio vuele literalmente.',
        image: '/img/services-cro-f1.jpg'
      },
      {
        badge: 'A/B Testing',
        title: 'Datos matan opiniones',
        description: 'Optimizamos CTA, colores y layouts basándonos en experimentos reales para garantizar una mejora genuina en tu ratio de conversión.',
        image: '/img/services-cro-f2.jpg'
      }
    ],

    cta: {
      titlePrefix: 'Deja de perder ventas por ',
      titleHighlight: 'fricción técnica',
      description: 'Hagamos que tu sitio cargue en milisegundos y convierta sin esfuerzo. Invierte en optimización de rendimiento hoy mismo.'
    }
  },
  {
    id: 3,
    slug: 'auditorias',
    title: 'Auditoría SEO/UX',
    shortDescription: 'Diagnóstico profundo de tu arquitectura de información y problemas técnicos para posicionar más alto y retener a tus clientes.',
    image: '/img/services-audit.jpg',
    hero: {
      badge: 'Rankings',
      title: 'Encontramos lo que te Frena en Google',
      description: 'Tu sitio tiene problemas invisibles para ti pero críticos para el robot de Google. Hacemos la auditoría más exhaustiva que verás jamás.',
      primaryButton: { text: 'Quiero un diagnóstico', link: '/contacto' },
      image: '/img/services-audit-hero.jpg',
      tools: [
        { name: 'Auditoría Técnica Profunda', icon: '/images/icons/seo-audit.svg' },
        { name: 'Revisión de Core Web Vitals', icon: '/images/icons/cwv.svg' },
        { name: 'Arquitectura de Información', icon: '/images/icons/architecture.svg' },
        { name: 'Estrategia de Indexabilidad', icon: '/images/icons/index.svg' }
      ]
    },
    features: [
      {
        badge: 'Technical SEO',
        title: 'El mapa que Google necesita',
        description: 'Optimizamos la jerarquía H1-H6, sitemaps dinámicos y JSON-LD estructurado para indexación instantánea y efectiva.',
        image: '/img/services-audit-f1.jpg'
      },
      {
        badge: 'UX Review',
        title: 'Fricción Cero',
        description: 'Detectamos componentes bloqueantes o de difícil interacción en móviles para reemplazarlos con alternativas de accesibilidad AA.',
        image: '/img/services-audit-f2.jpg'
      }
    ],

    cta: {
      titlePrefix: 'Descubre el verdadero estado de tu ',
      titleHighlight: 'posicionamiento SEO',
      description: 'No trabajes a ciegas. Permítenos mostrarte exactamente qué debes arreglar en tu plataforma para superar a tu competencia orgánica.'
    }
  },
  {
    id: 4,
    slug: 'product-design',
    title: 'Product Design',
    shortDescription: 'Diseñamos experiencias de usuario inolvidables y sistemas robustos centrados en las necesidades de tus clientes.',
    image: '/img/services-design.jpg',
    hero: {
      badge: 'User Centric',
      title: 'Interacciones que Conectan',
      description: 'Investigación integral de UX (como en Maze) para crear estructuras, prototipos y diseños finales que se sienten orgánicos y vivos.',
      primaryButton: { text: 'Discutir un proyecto', link: '/contacto' },
      image: '/img/services-design-hero.jpg',
      tools: [
        { name: 'Mejoras e iteración de la experiencia de usuario', icon: '/images/icons/ux.svg' },
        { name: 'Auditoría de diseño', icon: '/images/icons/design-audit.svg' },
        { name: 'Prototipado y validación de conceptos', icon: '/images/icons/prototype.svg' },
        { name: 'Creación de sistemas de diseño', icon: '/images/icons/design-system.svg' },
        { name: 'Iteraciones continuas', icon: '/images/icons/iteration.svg' }
      ]
    },
    features: [
      {
        badge: 'Prototyping',
        title: 'Del boceto al prototipo interactivo',
        description: 'Construimos maquetas avanzadas en Figma para simular de forma realista el flujo de negocio sin necesidad del código final.',
        image: '/img/services-design-f1.jpg'
      },
      {
        badge: 'Design Systems',
        title: 'Escalabilidad estética',
        description: 'Librerías completas de variables y componentes atómicos bien documentados para que tu equipo crezca sin perder coherencia.',
        image: '/img/services-design-f2.jpg'
      }
    ],

    cta: {
      titlePrefix: 'Construye un producto que tus usuarios ',
      titleHighlight: 'amen usar',
      description: 'Validemos tus ideas, diseñemos flujos intuitivos y construyamos un sistema de diseño estelar que eleve el valor percibido de tu marca.'
    }
  }
];
