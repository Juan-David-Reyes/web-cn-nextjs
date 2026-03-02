interface ServiceData {
  title?: string | null;
  description?: string | null;
  iconType?: 'code' | 'wordpress' | 'chart' | 'security' | 'pen' | null;
}

interface ServicesBentoProps {
  data?: ServiceData[] | null;
}

const fallbackServices = [
  {
    title: "Diseño y Desarrollo Web",
    description: "Creamos sitios web a medida, optimizados para conversiones y con diseños pixel-perfect que reflejan la identidad de tu marca.",
    iconType: 'code' as const,
    colSpan: "lg:col-span-5",
  },
  {
    title: "Mantenimiento Web WordPress",
    description: "Tu sitio siempre actualizado, seguro y rápido. Nos encargamos del soporte técnico, copias de seguridad y optimización continua.",
    iconType: 'wordpress' as const,
    colSpan: "lg:col-span-7",
  },
  {
    title: "CRO & Optimizaciones",
    description: "Mejoramos la tasa de conversión y maximizamos el rendimiento técnico (Core Web Vitals) para superar a la competencia.",
    iconType: 'chart' as const,
    colSpan: "lg:col-span-4",
  },
  {
    title: "Auditoría",
    description: "Analizamos tu sitio web enfocándonos en SEO técnico, rendimiento, seguridad y usabilidad profunda para detectar oportunidades.",
    iconType: 'security' as const,
    colSpan: "lg:col-span-4",
  },
  {
    title: "Product Design",
    description: "Diseñamos interfaces de usuario y experiencias digitales intuitivas y enfocadas en retener al usuario final.",
    iconType: 'pen' as const,
    colSpan: "lg:col-span-4",
  }
];

const getIcon = (type?: string | null) => {
  switch (type) {
    case 'wordpress':
      return <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256" className="w-8 h-8 text-blue-400"><path d="M224.49,152.49l-61.66-61.66A64.13,64.13,0,0,0,168,64a63.78,63.78,0,0,0-13.88-39.69,8,8,0,0,0-11-2.1L114.3,40.45l-4.75-4.75a8,8,0,0,0-11.31,11.31L113.85,62.6a8,8,0,0,0,.69,11L88,99.85,73.15,85A8,8,0,0,0,62.6,84.34l-15.6,15.6a8,8,0,0,0-2.1,11A63.78,63.78,0,0,0,64,168a64.13,64.13,0,0,0,26.83-5.83l61.66,61.66a24,24,0,0,0,34,0L224.49,186.5a24,24,0,0,0,0-34.01Z"></path></svg>;
    case 'chart':
      return <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256" className="w-8 h-8 text-emerald-400"><path d="M232,56V104a8,8,0,0,1-16,0V75.31l-74.34,74.35a8,8,0,0,1-11.32,0L96,115.31,29.66,181.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0L136,132.69l68.69-68.69H176a8,8,0,0,1,0-16h48A8,8,0,0,1,232,56Z"></path></svg>;
    case 'security':
      return <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256" className="w-8 h-8 text-orange-400"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>;
    case 'pen':
      return <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256" className="w-8 h-8 text-pink-400"><path d="M224.49,158.49l-85,85a12,12,0,0,1-17,0L31.51,152.49A12,12,0,0,1,31.51,135.5L145.5,21.51a12,12,0,0,1,17,0l4.33,4.33,26.93-22.3,2.6-.9A15.82,15.82,0,0,1,213.68,8a16,16,0,0,1,12.7,25.68l-.89,2.6-22.3,26.93,4.33,4.33A12,12,0,0,1,224.49,158.49L208,175l32.22,32.23a8,8,0,0,1-11.32,11.31Z"></path></svg>;
    case 'code':
    default:
      return <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256" className="w-8 h-8 text-purple-400"><path d="M224.49,85.51l-54-54a12,12,0,0,0-17,0L36.68,148.27A15.86,15.86,0,0,0,32,159.58V216a16,16,0,0,0,16,16H216a8,8,0,0,0,0-16H56V162.9l104.9-104.9,42.2,42.2L116.68,186.63a8,8,0,0,0,11.32,11.31l96.49-96.48A12,12,0,0,0,224.49,85.51Z"></path></svg>;
  }
};

const getColSpan = (index: number) => {
  // We mimic the original asymmetric grid based on array index
  if (index === 0) return "lg:col-span-5";
  if (index === 1) return "lg:col-span-7";
  return "lg:col-span-4";
}

export function ServicesBento({ data }: ServicesBentoProps) {
  const displayServices = data && data.length > 0 ? data : fallbackServices;

  return (
    <section className="relative w-full py-24 px-4 overflow-hidden bg-[#0f172a]">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-indigo-600/10 rounded-full blur-[150px] -z-10 mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-purple-600/10 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-zinc-900/50 backdrop-blur-md mb-2 text-sm font-medium text-purple-300">
            <span className="text-white">★</span> Servicios
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Soluciones para escalar <br className="hidden md:block" />
            <span className="text-zinc-400">tu negocio digital</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 pt-8">
          {displayServices.map((service, index) => (
            <div 
              key={index}
              className={`group relative p-8 rounded-3xl bg-zinc-900/40 backdrop-blur-xl border border-white/5 hover:border-white/10 hover:bg-zinc-800/50 transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[300px] ${getColSpan(index)}`}
            >
              {/* Card Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-zinc-800/50 border border-white/10 flex items-center justify-center mb-6 shadow-inner">
                  {getIcon(service.iconType)}
                </div>
                <h3 className="text-2xl font-semibold text-zinc-100 mb-3 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed font-light mb-8 max-w-md">
                  {service.description}
                </p>
              </div>

              {/* Decorative Mockup Element Background - Only conceptual lines to mimic the reference slightly */}
              <div className="absolute -bottom-8 -right-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="20" y="20" width="160" height="120" rx="12" stroke="white" strokeWidth="2"/>
                  <rect x="40" y="40" width="120" height="10" rx="5" fill="white"/>
                  <rect x="40" y="60" width="80" height="10" rx="5" fill="white"/>
                  <rect x="40" y="80" width="100" height="10" rx="5" fill="white"/>
                  <circle cx="160" cy="120" r="15" fill="white"/>
                </svg>
              </div>

              <div className="relative z-10 flex items-center gap-2 text-sm font-medium text-purple-400 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                Conoce más <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256" className="w-4 h-4"><path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"></path></svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center pt-8">
          <button className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 text-white font-medium shadow-lg shadow-purple-900/30 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Ver todos nuestros servicios 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256" className="w-4 h-4 group-hover:translate-x-1 transition-transform"><path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"></path></svg>
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>

      </div>
    </section>
  );
}
